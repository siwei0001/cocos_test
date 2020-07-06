import BasePlatform from "./BasePlatform";
import TgAdvSdk from "./TgAdvSdk";
import { BaseConfig } from "../config/BaseConfig";
import MenuManage, { BaseMenu } from "../manage/MenuManage";
import { WeChat } from "./WeChat";
import Utils from "../utils/Utils";
import StatisticsServer from "./StatisticsServer";
import Http, { HttpReqType } from "../utils/Http";

/**
 * 广告服务
 * 提供游戏所需的广告，
 * 说明:
 *  在游戏界面初始化时调用  ShowMenuAdv
 *  在界面关闭时调用    RemoveMenuAdv
 *  每个界面的 详细配置参数在 ShowMenuAdv 函数里根据界面去调整
 * 
 * 
 * 已知问题;
 * 1:当第一次显示tg广告时，因为对象池还没有预制体，所以会导致不符tg广告对应界面的key值不对（要重新处理下闭包）
 * 2:当在有倒计时界面点击跳转时，倒计时并没有停止，要根据界面进行调用函数
 * 
 * v2020.04.01
 * 修复：
 * 1:延迟显示胶囊体 当第一时间调用广告初始化时；wx胶囊体函数返回值不对 
 * 2:增加广告标记 当banner广告初始化失败或者没有推荐广告(1004)；
 * 3:增加广告标记 当视频广告初始化失败或者没有推荐广告(1004)；
 * 4:增加banenr计数 当显示多次wxbanner时，界面移除时会将底层显示的wxbanner也移除  
 * 5:已解决 当显示全屏广告时，wxbanner要隐藏掉
 * 6:中线适配屏幕时 判断是否出界
 * 
 * v2020.04.10 
 * 1:分离配置数据和广告数据
 * 2:重新对广告进行分类，分为banner广告 插屏 全屏
 * 3:banner广告可以调整大小 位置 排列方式 等
 * 4:调整部分业务逻辑增加首次进入游戏不主动弹出全屏广告
 * 5:增加遮挡广告 在界面上层显示一个点击区域 点击后随机跳转
 * 6:全屏 插屏 增加初始 随机跳转
 * 
 * 下一个版本优化 1简化代码(创建banner) 
 *              2优化传入的参数 
 *              3整体逻辑梳理 
 *              4工作流程梳理 
 *              5处理个别界面的游戏逻辑
 * 
 * v2020.04.20
 * 1:调整global 接口（由后台配置的新接口来控制广告和策略的开关);
 * 
 * v2020.04.26
 * 1:调整推广游戏配置接口 （由后台配置的新接口来拉取广告数据 前端做上线下线处理)
 * 2:不在 判断跳转游戏在不在applist
 * 
 * v2020.06.22
 * 1:tgbanner 可以 九宫格向上滚动
 * 
 */
/**
* 微信广告配置
*/
export var WeChatAdvConfig = {
    BannerAdUnitId: "adunit-867895101849db01",           //baner 广告id
    RewardedVideoAdUnitId: "adunit-634c638c87e69832",    //视频激励广告id
    InterstitialAdUnitId: "adunit-666aa0948da0825a",     //插屏广告id
}

var ActivityPrefab = {
    LuckyEgg: "tgdata/activity/prefabs/LuckyEgg"
}

export default class AdvServer {

    private static _instance: AdvServer;
    private m_Debug: boolean = false;    //日志输出开关

    private m_UrlRoot: string = "";
    private m_AdvGameID: string = "2020622141238945";
    private m_AdvConfigUrl = "tgsdk_server/api/game/config";
    private m_AdvConfigVersion = "2020622141251406";
    private m_AdvDataVersion = "2020622-14223036";

    private m_GlobalConfig: any = null; //全局配置

    private m_WeChatBanner: any = null;  //微信banner实例
    private m_WeChatBannerWidth: number = null;  //微信banner宽
    private m_WeChatBannerHeight: number = null; //微信banner高
    private m_WeChatBannerError: boolean = false; //微信banner拉取不到广告

    private m_WeChatInterstitial: any = null; //微信插屏实例
    private m_WeChatRewardedVideo: any = null;//微信视频广告实例
    private m_WeChatRewardedVideoSuccess: Function = null; //微信视频广告成功回调
    private m_WeChatRewardedVideoFail: Function = null; //微信视频广告失败回调
    private m_ShowWechatBanner: boolean = false;    //微信banner标记

    private m_ActivityLuckyEgg: any = null;  //金蛋活动实例

    private m_Review: boolean = false;    //审核开关

    // private m_MainFrist: boolean = true;
    private m_GameplayFrist: boolean = true;

    private m_TgFullBanner: boolean = false;

    private m_AutoVideoNum: number = 2;

    /**
     * 构造函数
     */
    constructor() {
    }

    public static getInstance(): AdvServer {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new AdvServer())
        return this._instance
    }

    /**
     * 初始化广告服务
     */
    public InitAdvServer(_onSuccess: Function = null, _onFail: Function = null) {
        //判断平台
        // if (!BasePlatform.getInstance().IsWeChat()) {
        //     if (_onSuccess) {
        //         _onSuccess();
        //     }
        //     return;
        // }
        {
            //域名
            this.m_UrlRoot = BaseConfig.NetConfig.NetRoot;
            let loadCount = 2;
            let loadFail = false;

            this.LoadAdvConfig(() => {
                this.AdvLog("广告配置获取成功");
                setTimeout(() => {
                    this.ShowTgCapsule();
                }, 500)
                loadCount--;
                if (_onSuccess && loadCount == 0 && !loadFail) {
                    _onSuccess();
                }
            }, (err) => {
                if (_onFail && !loadFail) {
                    loadFail = true;
                    _onFail("广告配置获取失败 err" + err);
                }
            })

            //拉取广告数据
            TgAdvSdk.getInstance().SetDebug(false);
            //微信平台加载有两个广告sdk 一个是tgsdk 一个是wx的sdk
            TgAdvSdk.getInstance().Init(this.m_UrlRoot, this.m_AdvGameID, this.m_AdvDataVersion, () => {
                this.AdvLog("广告数据初始化成功");
                loadCount--;
                if (_onSuccess && loadCount == 0 && !loadFail) {
                    _onSuccess();
                }
            }, (err) => {
                this.AdvLog("广告数据初始化失败 err", err);
                if (_onFail && !loadFail) {
                    loadFail = true;
                    _onFail("广告数据初始化失败 err" + err);
                }
            })

            this.InitWeChatBanner();
            this.InitWeChatInterstitial();
            this.InitWeChatRewardedVideoAd();
        }
        //qq平台只有qq的sdk
    }

    /**
     *  加载广告配置
     * 
     * */
    LoadAdvConfig(_onSuccess: Function = null, _onFail: Function = null) {

        this.m_GlobalConfig = {};
        //请求端口
        let http = new Http();
        http.SetReqType(HttpReqType.GET);
        // http://cathome8.com/tgsdk_server/api/game/config/testgame/20203171737672
        http.Request(this.m_UrlRoot + "/" + this.m_AdvConfigUrl + "/" + this.m_AdvGameID + "/" + this.m_AdvConfigVersion, (data) => {
            this.AdvLog("LoadAdvConfig  data", data);
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const element = data[key];
                    this.m_GlobalConfig[element["key"]] = element["value"];
                    this.AdvLog("LoadAdvConfig  for (const key in data)", element);
                }
            }
            this.AdvLog("LoadAdvConfig   this.m_GlobalConfig", this.m_GlobalConfig);

            this.m_Review = this.m_GlobalConfig.game_is_review;
            if (_onSuccess) {
                _onSuccess();
            }

        }, (err) => {
            if (_onFail) {
                _onFail("广告数据初始化失败 err" + err);
            }
        })
    }

    /**
     * 返回审核开关
     */
    public GetReview() {
        return this.m_Review;
    }

    /**
     * 显示界面广告
     * @param {string} _menu 界面路径
     * @param {cc.Node} _parent 父节点
     */
    public ShowMenuAdv(_menu: string, _parent: cc.Node = null) {
        this.AdvLog("ShowMenuAdv _menu", _menu);
        // if (!BasePlatform.getInstance().IsWeChat()) {
        //     return;
        // }
        //没有广告配置 审核开关
        if (!this.m_GlobalConfig || this.m_Review) {
            return;
        }
        //广告参数示例
        let extData = {
            parent: null,
            style: {
                left: 0,            //左边对齐位置
                top: 0,           //上边对齐位置
                width: 120,         //宽
                height: 520,        //高
                horizontal: false,  //水平排列
                vertical: false,    //垂直排列
                spacingX: 0,        //水平距离
                spacingY: 0,        //垂直距离
                cellSize: {         //每个Item的大小
                    width: 120,
                    height: 120,
                },
                updateWidget: false,//是否更新位置（主要用于当显示微信banner时更新底部的tgbanner）
            },
            adv: {
                start: 0,           //广告显示的开始标记
                num: 0,             //广告数量 0默认为全部
                rand: false,        //广告数据是否随机
                autoswitch: 0,      //是否自动更换推广 0为不更换 其他为更换时间
                autoscrolle: false, //是否自动移动scrolle
                moreGame: false,    //是否显示更多游戏
                moreGameCallFun: (self) => {
                    this.AdvLog("ShowMenuAdv 更多游戏", self);
                    this.ShowTgFullScreen();
                },//更多游戏回调
                jumpCallFun: (_tgdata, _tgpos) => {
                    this.JumpToProgram(_tgdata, _tgpos, _tgpos, () => {
                        //跳转成功
                    }, () => {
                        //跳转失败
                        this.ShowTgFullScreen();
                    });
                },  //跳转回调
            },
            success: (self) => {
                //加载成功
                this.AdvLog("ShowMenuAdv 加载成功 node", self);
            },
            fail: (err) => {
                //加载失败
                this.AdvLog("ShowMenuAdv 加载失败 err", err);
            },
            close: (self) => {
                //界面关闭回调函数
                this.AdvLog("ShowMenuAdv 关闭");
            },
        }

        let menu_interstitial = false;
        let menu_fullscreen = false;
        let menu_clickjump = false;
        if (_menu == BaseMenu.MainMenu) {
            this.ShowWeChatBanner();
            //主界面配置
            var node = cc.find("Canvas");
            //位置 左侧
            let leftdata: any = Utils.CloneObj(extData);
            leftdata.parent = _parent;
            leftdata.style.width = 160;
            leftdata.style.height = 820;
            leftdata.style.top = node.height / 2 - 380;
            leftdata.style.vertical = true;
            leftdata.style.cellSize.width = 160;
            leftdata.style.cellSize.height = 160;
            leftdata.adv.num = 4;
            leftdata.adv.autoswitch = 5;
            //显示banner
            TgAdvSdk.getInstance().ShowTgBanner(_menu, "主界面——左边banner1", leftdata);

            //位置
            let rightdata: any = Utils.CloneObj(extData);
            rightdata.parent = _parent;
            rightdata.style.width = 160;
            rightdata.style.height = 820;
            rightdata.style.left = node.width - rightdata.style.width;
            rightdata.style.top = node.height / 2 - 380;
            rightdata.style.vertical = true;
            rightdata.style.cellSize.width = 160;
            rightdata.style.cellSize.height = 160;
            rightdata.adv.start = 4;
            rightdata.adv.num = 4;
            rightdata.adv.autoswitch = 5;
            //显示banner
            TgAdvSdk.getInstance().ShowTgBanner(_menu, "主界面——右边banner1", rightdata);

            //位置
            let topdata: any = Utils.CloneObj(extData);
            topdata.parent = _parent;
            topdata.style.width = node.width;
            topdata.style.height = 160;
            topdata.style.top = node.height / 2 - 550;

            topdata.style.cellSize.width = 160;
            topdata.style.cellSize.height = 160;

            topdata.style.horizontal = true;
            topdata.adv.autoscrolle = true;

            //显示banner
            TgAdvSdk.getInstance().ShowTgBanner(_menu, "主界面——顶部banner", topdata);
            //提示收藏
            this.ShowRemind(_menu);
            menu_interstitial = this.m_GlobalConfig.menu_main_interstitial;
            menu_fullscreen = this.m_GameplayFrist ? false : this.m_GlobalConfig.menu_main_fullscreen;
            // menu_fullscreen = this.m_GlobalConfig.menu_main_fullscreen;
            menu_clickjump = this.m_GlobalConfig.menu_main_clickjump;
        }
        else if (_menu == BaseMenu.ResultMenu) {
            //显示wxbanner
            this.ShowWeChatBanner();
            //显示wxbanner
            this.ShowWeChatInterstitial();
            //结算界面
            //居中显示滚动交叉
            var node = cc.find("Canvas");
            //位置
            let centerdata: any = Utils.CloneObj(extData);
            centerdata.parent = _parent;
            centerdata.style.width = 600;
            centerdata.style.height = 600;
            centerdata.style.left = node.width / 2 - 300;
            centerdata.style.top = node.height / 2 - 365;
            centerdata.style.cellSize.width = 200;
            centerdata.style.cellSize.height = 200;

            centerdata.style.horizontal = true;
            centerdata.style.vertical = true;

            centerdata.adv.autoscrolle = true;
            //显示banner
            TgAdvSdk.getInstance().ShowTgBanner(_menu, "结算界面——顶部banner", centerdata);

            menu_interstitial = this.m_GlobalConfig.menu_result_interstitial;
            menu_fullscreen = this.m_GlobalConfig.menu_result_fullscreen;
            menu_clickjump = this.m_GlobalConfig.menu_result_clickjump;
        }
        else if (_menu == BaseMenu.CarLibaryMenu) {
            //车库
            //右边
            //居中显示滚动交叉
            var node = cc.find("Canvas");
            //位置 左边
            let leftdata: any = Utils.CloneObj(extData);
            leftdata.parent = _parent;
            leftdata.style.width = 200;
            leftdata.style.height = 220;
            leftdata.style.left = 0;
            leftdata.style.top = 160;
            leftdata.style.cellSize.width = 200;
            leftdata.style.cellSize.height = 200;
            leftdata.adv.num = 1;
            leftdata.adv.autoswitch = 1;
            //显示banner
            TgAdvSdk.getInstance().ShowTgBanner(_menu, "车库界面——左边banner", leftdata);

            //位置 左边
            let rightdata: any = Utils.CloneObj(extData);
            rightdata.parent = _parent;
            rightdata.style.width = 200;
            rightdata.style.height = 220;
            rightdata.style.left = node.width - 200;
            rightdata.style.top = 160;
            rightdata.style.cellSize.width = 200;
            rightdata.style.cellSize.height = 200;
            rightdata.adv.num = 1;
            rightdata.adv.start = 1;
            rightdata.adv.autoswitch = 1;

            //显示banner
            TgAdvSdk.getInstance().ShowTgBanner(_menu, "车库界面——右边banner", rightdata);

            menu_interstitial = this.m_GlobalConfig.menu_carlibary_interstitial;
            menu_fullscreen = this.m_GlobalConfig.menu_carlibary_fullscreen;
            menu_clickjump = this.m_GlobalConfig.menu_carlibary_clickjump;
        }
        else {
            return;
        }

        if (menu_interstitial) {
            //显示插屏
            this.ShowTgInterstitial(null, false, false, _parent);
        }
        if (menu_fullscreen) {
            //显示全屏
            this.ShowTgFullScreen(null, false, _parent);
        }
        if (menu_clickjump) {
            let jumpdata: any = Utils.CloneObj(extData);
            jumpdata.parent = _parent;
            //点击跳转
            TgAdvSdk.getInstance().ShowTgClickJump(_menu, "游戏界面——强跳转", jumpdata);
        }
    }

    public RemoveMenuAdv(_menu) {

        //没有广告配置 审核开关
        if (!this.m_GlobalConfig || this.m_Review) {
            return;
        }
        TgAdvSdk.getInstance().RemoveMenuAdv(_menu);
        // if (_menu != BaseMenu.MainMenu) {
        //     //如果显示了微信banner则隐藏
        //     if (this.m_ShowWechatBanner) {
        //         // this.HideWeChatBanner();
        //     }
        // }
    }

    /** */
    public ShowResultTgFullScreen(_closeCallFun: Function = null, _initJump: boolean = false, _parent: cc.Node = null) {
        //审核开关
        if (!this.m_GlobalConfig || this.m_Review) {
            return;
        }

        if (!this.m_GlobalConfig.fullscreen_other) {
            if (_closeCallFun) {
                _closeCallFun();
            }
            return;
        }

        this.ShowTgFullScreen(_closeCallFun, _initJump, _parent);
    }

    /**
     * 显示全屏广告
     * @param {Function} _closeCallFun 界面关闭回调函数
     */
    public ShowTgFullScreen(_closeCallFun: Function = null, _initJump: boolean = false, _parent: cc.Node = null) {
        // if (!BasePlatform.getInstance().IsWeChat()) {
        //     if (_closeCallFun) {
        //         _closeCallFun();
        //     }
        //     return;
        // }
        //审核开关
        //没有广告配置 审核开关
        if (!this.m_GlobalConfig || this.m_Review) {
            if (_closeCallFun) {
                _closeCallFun();
            }
            return;
        }

        if (this.m_ShowWechatBanner && this.m_WeChatBanner) {
            this.m_WeChatBanner.hide();
        }

        this.HideTgCapsule();
        this.m_TgFullBanner = true;
        let extData = {
            parent: _parent,
            initJump: _initJump,
            comtinue: this.m_GlobalConfig.fullscreen_startjump,
            backjump: this.m_GlobalConfig.fullscreen_backjump,
            randjumpzjkj: this.m_GlobalConfig.randjump_zjkj,

            jumpCallFun: (_tgdata, _tgpos) => {
                this.JumpToProgram(_tgdata, _tgpos, _tgpos, () => {
                    //跳转成功

                }, () => {
                    //跳转失败

                });
            },  //跳转回调
            success: (node) => {
                //加载成功
                this.AdvLog("ShowMenuAdv FullScreen 加载成功 node", node);
            },
            fail: (err) => {
                //加载失败
                this.AdvLog("ShowMenuAdv FullScreen 加载失败 err", err);
            },
            close: () => {
                //界面关闭回调函数
                this.AdvLog("ShowMenuAdv FullScreen 关闭");
                if (_closeCallFun) {
                    _closeCallFun();
                }

                this.m_TgFullBanner = false;

                if (this.m_ShowWechatBanner && this.m_WeChatBanner) {
                    this.m_WeChatBanner.show();
                }

                this.ShowTgCapsule();
            },
        }

        TgAdvSdk.getInstance().ShowTgFullScreen(extData);
    }

    /**
     * 显示插屏广告
     * @param {Function} _closeCallFun 界面关闭回调函数
     */
    public ShowTgInterstitial(_closeCallFun: Function = null, _showback: boolean = false, _initJump: boolean = false, _parent: cc.Node = null) {
        // if (!BasePlatform.getInstance().IsWeChat()) {
        //     if (_closeCallFun) {
        //         _closeCallFun();
        //     }
        //     return;
        // }
        //审核开关
        if (!this.m_GlobalConfig || this.m_Review) {
            if (_closeCallFun) {
                _closeCallFun();
            }
            return;
        }

        let extData = {
            parent: _parent,
            showBack: _showback,
            initJump: _initJump,
            jumpCallFun: (_tgdata, _tgpos) => {
                this.JumpToProgram(_tgdata, _tgpos, _tgpos, () => {
                    //跳转成功

                }, () => {
                    //跳转失败

                });
            },  //跳转回调
            success: (node) => {
                //加载成功
                this.AdvLog("ShowMenuAdv FullScreen 加载成功 node", node);
            },
            fail: (err) => {
                //加载失败
                this.AdvLog("ShowMenuAdv FullScreen 加载失败 err", err);
            },
            close: () => {
                //界面关闭回调函数
                this.AdvLog("ShowMenuAdv FullScreen 关闭");
                if (_closeCallFun) {
                    _closeCallFun();
                }
            },
        }

        TgAdvSdk.getInstance().ShowTgInterstitial(extData);
    }
    /**
     * 显示胶囊体
     */
    private ShowTgCapsule() {

        if (!BasePlatform.getInstance().IsWeChat()) {
            return;
        }

        //审核开关
        if (!this.m_GlobalConfig || this.m_Review) {
            return;
        }

        if (this.m_GlobalConfig && !this.m_GlobalConfig.other_capsule) {
            return;
        }

        //获取胶囊体的位置
        let capsule = WeChat.GetMenuButtonBoundingClientRect();
        this.AdvLog("mainadv capsule", capsule);
        if (!capsule) {
            return;
        }

        let ststeminfo = WeChat.GetSystemInfoSync();
        this.AdvLog("mainadv ststeminfo", ststeminfo);
        var node = cc.find("Canvas");
        let x = (capsule.right - capsule.width / 2) / ststeminfo.screenWidth * node.width - node.width / 2;
        let y = node.height / 2 - (capsule.top + capsule.height + 16) / ststeminfo.screenHeight * node.height;
        this.AdvLog("mainadv x", x, "y", y);

        let extData = {
            x: x,
            y: y,
            success: (node) => {
                //加载成功
                this.AdvLog("ShowMenuAdv Capsule 加载成功 node", node);
            },
            fail: (err) => {
                //加载失败
                this.AdvLog("ShowMenuAdv Capsule 加载失败 err", err);
            },
            close: () => {
                //界面关闭回调函数
                this.AdvLog("ShowMenuAdv Capsule 关闭");
            },
            click: () => {
                //界面关闭回调函数
                this.AdvLog("ShowMenuAdv Capsule 点击");
                this.ShowTgCollect();
            },
        }
        TgAdvSdk.getInstance().ShowTgCapsule(extData);
    }

    /**
    * 隐藏胶囊体
    */
    private HideTgCapsule() {
        if (!BasePlatform.getInstance().IsWeChat()) {
            return;
        }
        //审核开关
        if (!this.m_GlobalConfig || this.m_Review) {
            return;
        }
        TgAdvSdk.getInstance().HideTgCapsule();
    }

    /**
     * 显示收藏界面
     */
    private ShowTgCollect() {
        if (!BasePlatform.getInstance().IsWeChat()) {
            return;
        }
        //审核开关
        if (!this.m_GlobalConfig || this.m_Review) {
            return;
        }

        if (this.m_ShowWechatBanner && this.m_WeChatBanner) {
            this.m_WeChatBanner.hide();
        }

        //隐藏胶囊体
        this.HideTgCapsule();
        let top = 0;
        if (WeChat.GetSystemInfoSync().model.search('iPhone X') != -1 ||
            WeChat.GetSystemInfoSync().model.search('iPhone 11') != -1 ||
            WeChat.GetSystemInfoSync().model.search('iPhone XR') != -1) {
            top = 60;
            // this.m_WeChatBannerHeight += 10;
            // this.m_WeChatBanner.style.top = WeChat.GetSystemInfoSync().screenHeight - res.height - 50;
        }

        let extData = {
            top: top,
            jumpCallFun: (_tgdata, _tgpos) => {
                this.JumpToProgram(_tgdata, _tgpos, _tgpos, () => {
                    //跳转成功
                }, () => {
                    //跳转失败

                });
            },  //跳转回调
            success: (node) => {
                //加载成功
                this.AdvLog("ShowMenuAdv FullScreen 加载成功 node", node);
            },
            fail: (err) => {
                //加载失败
                this.AdvLog("ShowMenuAdv FullScreen 加载失败 err", err);
            },
            close: () => {
                //界面关闭回调函数
                this.AdvLog("ShowMenuAdv FullScreen 关闭");

                if (this.m_ShowWechatBanner && this.m_WeChatBanner) {
                    this.m_WeChatBanner.show();
                }

                //显示胶囊体
                this.ShowTgCapsule();
            },
        }

        TgAdvSdk.getInstance().ShowTgCollect(extData);
    }

    private ShowRemind(_menu) {
        if (BasePlatform.getInstance().IsWeChat()) {
            //获取胶囊体的位置
            let capsule = WeChat.GetMenuButtonBoundingClientRect();
            this.AdvLog("mainadv capsule", capsule);
            if (capsule) {
                let ststeminfo = WeChat.GetSystemInfoSync();
                this.AdvLog("mainadv ststeminfo", ststeminfo);
                var node = cc.find("Canvas");
                let x = (capsule.right - capsule.width) / ststeminfo.screenWidth * node.width - node.width / 2;
                let y = node.height / 2 - (capsule.top + capsule.height / 2) / ststeminfo.screenHeight * node.height;
                this.AdvLog("mainadv x", x, "y", y);
                let extData = {
                    x: x + 10,
                    y: y,
                    success: (node) => {
                        //加载成功
                        this.AdvLog("ShowMenuAdv FullScreen 加载成功 node", node);
                    },
                    fail: (err) => {
                        //加载失败
                        this.AdvLog("ShowMenuAdv FullScreen 加载失败 err", err);
                    },
                }
                TgAdvSdk.getInstance().ShowRemind(_menu, extData)
            }
        }
    }

    SetGamePlayFrist() {
        this.m_GameplayFrist = false;
    }

    /**
     * 初始微信banner
     */
    private InitWeChatBanner() {
        if (BasePlatform.getInstance().IsWeChat()) {
            if (!this.m_WeChatBanner) {
                let banneradid = WeChatAdvConfig.BannerAdUnitId;
                let left = 0//WeChat.getInstance().GetSystemInfoSync().screenWidth / 2 - 150;
                let top = 0;

                let bannerwidth = WeChat.GetSystemInfoSync().screenWidth;

                let width = bannerwidth; //300;//WeChat.getInstance().GetSystemInfoSync().screenWidth;
                let height = bannerwidth;;//100;//WeChat.getInstance().GetSystemInfoSync().screenWidth;

                if (banneradid == "") {
                    this.AdvLog("banner广告id为空");
                    return;
                }

                this.m_WeChatBanner = WeChat.CreateBannerAd(banneradid, left, top, width, height);

                this.m_WeChatBanner.onLoad(() => {
                    this.AdvLog('banner 广告加载成功');
                    this.m_WeChatBannerError = false;
                })

                this.m_WeChatBanner.onError((err) => {
                    this.m_WeChatBannerError = true;
                    this.AdvLog(err);
                });

                this.m_WeChatBanner.onLoad(() => {
                    this.AdvLog('banner 广告加载成功');
                })

                this.m_WeChatBanner.onResize((res) => {
                    this.m_WeChatBannerWidth = res.width;
                    this.m_WeChatBannerHeight = res.height;
                    this.AdvLog("this.m_BannerAD.onResize res", res);
                    if (WeChat.GetSystemInfoSync().model.search('iPhone X') != -1 ||
                        WeChat.GetSystemInfoSync().model.search('iPhone 11') != -1 ||
                        WeChat.GetSystemInfoSync().model.search('iPhone XR') != -1) {
                        this.m_WeChatBannerHeight += 10;
                        this.m_WeChatBanner.style.top = WeChat.GetSystemInfoSync().screenHeight - res.height - 10;
                    }
                    else {
                        this.m_WeChatBanner.style.top = WeChat.GetSystemInfoSync().screenHeight - res.height;
                    }
                    TgAdvSdk.getInstance().UpdateBottomBannerWidget(this.m_WeChatBannerHeight);
                })
            }
        }

    }

    /**
    * 显示微信banner
    * @param {Function} _onSuccess
    */
    public ShowWeChatBanner(_onSuccess: Function = null) {
        if (BasePlatform.getInstance().IsWeChat()) {
            this.AdvLog("ShowWeChatBanner 显示微信banner");

            this.m_ShowWechatBanner = true;
            if (this.m_TgFullBanner) {
                return;
            }
            if (this.m_WeChatBannerError) {
                //微信banenr出现问题
                if (_onSuccess) {
                    _onSuccess();
                }
                //出现问题后再次拉取一次
                this.m_WeChatBanner.show();
                return;
            }

            if (this.m_WeChatBanner) {
                this.m_WeChatBanner.show().then(() => {
                    TgAdvSdk.getInstance().UpdateBottomBannerWidget(this.m_WeChatBannerHeight);
                    if (_onSuccess) {
                        _onSuccess();
                    }
                }).catch(err => this.AdvLog(err));
            }
            else {
                if (_onSuccess) {
                    _onSuccess();
                }
            }
        }
        else {
            if (_onSuccess) {
                _onSuccess();
            }
        }
    }

    /**
    * 关闭微信banner
    */
    public HideWeChatBanner() {
        if (BasePlatform.getInstance().IsWeChat()) {
            this.AdvLog("关闭微信banner");
            this.m_ShowWechatBanner = false;
            if (BasePlatform.getInstance().IsWeChat()) {
                if (this.m_WeChatBanner) {
                    this.m_WeChatBanner.hide().catch(err => this.AdvLog(err))
                }
            }
        }
    }

    /**
    * 初始化微信插屏
    */
    private InitWeChatInterstitial() {
        if (BasePlatform.getInstance().IsWeChat()) {
            let interstitialid = WeChatAdvConfig.InterstitialAdUnitId;
            if (interstitialid == "") {
                this.AdvLog("插屏广告id为空");
                return;
            }

            this.m_WeChatInterstitial = WeChat.CreateInterstitialAd(interstitialid);
            if (this.m_WeChatInterstitial) {
                this.m_WeChatInterstitial.onLoad(() => {
                    this.AdvLog('插屏 广告加载成功');
                });
                this.m_WeChatInterstitial.onError(err => {
                    this.AdvLog("m_InterstitialAd onError", err);
                    this.m_WeChatInterstitial = null;
                });
            }
        }
    }

    /**
    * 显示微信插屏
    */
    public ShowWeChatInterstitial() {
        if (BasePlatform.getInstance().IsWeChat()) {
            this.AdvLog("显示微信插屏");
            if (this.m_WeChatInterstitial) {
                //广告显示
                this.m_WeChatInterstitial.show().then(() => {
                    // this.AdvLog("m_RewardedVideoAd.show()",res)
                }).catch(err => {
                    this.AdvLog("m_RewardedVideoAd.show()", err);
                    this.m_WeChatInterstitial.load().then(() => this.m_WeChatInterstitial.show())
                        .catch(err => {
                            this.AdvLog('插屏 广告显示失败');
                        })
                })
            }
        }
    }

    /**
    * 初始化微信激励视频
    */
    private InitWeChatRewardedVideoAd() {
        if (BasePlatform.getInstance().IsWeChat()) {
            let rewardedvideoid = WeChatAdvConfig.RewardedVideoAdUnitId;
            if (rewardedvideoid == "") {
                this.AdvLog("视频广告id为空");
                return;
            }
            this.m_WeChatRewardedVideo = WeChat.CreateRewardedVideoAd(rewardedvideoid);
            if (this.m_WeChatRewardedVideo) {
                this.m_WeChatRewardedVideo.onLoad(() => {
                    this.AdvLog('激励视频 广告加载成功');
                })

                //广告关闭监听
                this.m_WeChatRewardedVideo.onClose(this.WeChatRewardedVideoAdCallFun.bind(this))

                this.m_WeChatRewardedVideo.onError(err => {
                    this.AdvLog("m_RewardedVideoAd onError", err);
                    this.m_WeChatRewardedVideo = null;
                })
            }
        }
    }

    /**
    * 显示微信视频
    * @param {Function} _onSuccess 视频成功回调函数
    * @param {Function} _onFail 视频失败回调函数
    * 
    */
    public ShowWeChatRewardedVideoAd(_onSuccess: Function, _onFail: Function) {
        if (BasePlatform.getInstance().IsWeChat()) {
            if (this.m_WeChatRewardedVideo) {
                this.m_WeChatRewardedVideoSuccess = _onSuccess;
                this.m_WeChatRewardedVideoFail = _onFail;
                this.AdvLog("this.m_WeChatRewardedVideoFail", this.m_WeChatRewardedVideoFail)
                //广告显示
                this.m_WeChatRewardedVideo.show().then(() => {
                    // this.AdvLog("m_RewardedVideoAd.show()",res)
                }).catch(err => {
                    this.AdvLog("m_RewardedVideoAd.show()", err);
                    this.ShowTgFullScreen();
                    _onFail(err);
                })
            }
            else {
                this.ShowTgFullScreen();
                _onFail();
            }
        }
        else {
            _onSuccess();
        }
    }

    /**
    * 微信视频回调
    * @param {any} res 视频回调参数
    * 
    */
    private WeChatRewardedVideoAdCallFun(res: any) {
        this.AdvLog("微信激励视频回调 res", res, "this.m_WeChatRewardedVideoFail", this.m_WeChatRewardedVideoFail);
        // 用户点击了【关闭广告】按钮
        // 小于 2.1.0 的基础库版本，res 是一个 undefined
        if (res && res.isEnded || res === undefined) {
            // 正常播放结束，可以下发游戏奖励
            if (this.m_WeChatRewardedVideoSuccess) {
                this.m_WeChatRewardedVideoSuccess();
            }
        } else {
            // 播放中途退出，不下发游戏奖励
            if (this.m_WeChatRewardedVideoFail) {
                this.m_WeChatRewardedVideoFail();
            }
            this.ShowTgFullScreen();
        }

        this.m_WeChatRewardedVideoSuccess = null;
        this.m_WeChatRewardedVideoFail = null;
    }

    /**
    * 开始金蛋活动
    * @param {Function} _closeCallFun 活动关闭回调函数
    * @param {Function} _issueCallFun 活动奖励发放回调函数
    */
    public StartLevelLuckEgg(_closeCallFun: Function, _issueCallFun: Function) {
        // if (!BasePlatform.getInstance().IsWeChat()) {
        //     _closeCallFun();
        //     return;
        // }
        //审核开关
        if (!this.m_GlobalConfig || this.m_Review) {
            _closeCallFun();
            return;
        }

        let randnum = Utils.RandNum(1, 100);
        let num = this.m_GlobalConfig.activity_startluckyegg;
        if (randnum < num) {
            this.ShowActivityLuckyEgg(_closeCallFun, _issueCallFun);
        }
        else {
            if (_closeCallFun) {
                _closeCallFun();
            }
        }
    }

    /**
    * 结束金蛋活动
    * @param {Function} _closeCallFun 活动关闭回调函数
    * @param {Function} _issueCallFun 活动奖励发放回调函数
    */
    public EndLevelLuckEgg(_closeCallFun: Function, _issueCallFun: Function) {
        // if (!BasePlatform.getInstance().IsWeChat()) {
        //     _closeCallFun();
        //     return;
        // }
        //审核开关
        if (!this.m_GlobalConfig || this.m_Review) {
            _closeCallFun();
            return;
        }

        let randnum = Utils.RandNum(1, 100);
        let num = this.m_GlobalConfig.activity_endluckyegg;
        if (randnum < num) {
            this.ShowActivityLuckyEgg(_closeCallFun, _issueCallFun);
        }
        else {
            if (_closeCallFun) {
                _closeCallFun();
            }
        }
    }

    /**
    * 显示幸运金蛋
    * @param {Function} _closeCallFun 活动关闭回调函数
    * @param {Function} _issueCallFun 活动奖励发放回调函数
    */
    private ShowActivityLuckyEgg(_closeCallFun: Function, _issueCallFun: Function) {
        // if (BasePlatform.getInstance().IsWeChat()) {
        if (this.m_WeChatBanner) {
            this.m_ShowWechatBanner = true;
            this.HideWeChatBanner();
        }
        else {
            this.m_ShowWechatBanner = false;
        }
        //如果不存在
        if (!this.m_ActivityLuckyEgg) {
            this.LoadPrefab(ActivityPrefab.LuckyEgg, (assets) => {
                let objNode = cc.instantiate(assets);
                objNode.parent = cc.find("Canvas"); // 加入节点树
                this.m_ActivityLuckyEgg = objNode.getComponent("LuckyEgg");
                this.m_ActivityLuckyEgg.InitData(() => {
                    //关闭界面
                    this.m_ActivityLuckyEgg = null;
                    if (this.m_ShowWechatBanner) {
                        this.ShowWeChatBanner();
                    }
                    else {
                        this.HideWeChatBanner();
                    }

                    if (_closeCallFun) {
                        _closeCallFun();
                    }
                }, () => {
                    //发放奖励
                    if (_issueCallFun) {
                        _issueCallFun();
                    }
                });
            }, () => {
                if (_closeCallFun) {
                    _closeCallFun();
                }
            })
        }
        else {
            if (_closeCallFun) {
                _closeCallFun();
            }
        }
        // }

    }

    /**
    * 开始游戏自动视频活动
    * @param {Function} _callFun 活动关闭回调函数
    */
    StartAutoVido(_onSuccess: Function, _onFail: Function) {
        if (!BasePlatform.getInstance().IsWeChat()) {
            _onFail();
            return;
        }
        //审核开关
        if (!this.m_GlobalConfig || this.m_Review) {
            _onFail();
            return;
        }

        if (this.m_AutoVideoNum < 0) {
            _onFail();
            return;
        }

        let randnum = Utils.RandNum(1, 100);
        let num = this.m_GlobalConfig.activity_startvideo;
        if (randnum < num) {
            this.m_AutoVideoNum--;
            this.ShowWeChatRewardedVideoAd(() => {
                _onSuccess();
            }, () => {
                _onFail();
            })
        }
        else {
            _onFail();
        }

    }

    /**
    * 结束游戏自动视频活动
    * @param {Function} _callFun 活动关闭回调函数
    */
    EndAutoVido(_onSuccess: Function, _onFail: Function) {
        if (!BasePlatform.getInstance().IsWeChat()) {
            _onFail();
            return;
        }
        //审核开关
        if (!this.m_GlobalConfig || this.m_Review) {
            _onFail();
            return;
        }

        if (this.m_AutoVideoNum < 0) {
            _onFail();
            return;
        }

        let randnum = Utils.RandNum(1, 100);
        let num = this.m_GlobalConfig.activity_endvideo;
        if (randnum < num) {
            this.m_AutoVideoNum--;
            this.ShowWeChatRewardedVideoAd(() => {
                _onSuccess();
            }, () => {
                _onFail();
            })
        }
        else {
            _onFail();
        }

    }
    /**
     * 加载预制体
     * @param {string} _prefab 预制体资源路径
     * @param {Function} _onSuccess 加载成功回调
     * @param {Function} _onFail 加载失败回调
     */
    public LoadPrefab(_prefab: string, _onSuccess: Function = null, _onFail: Function = null) {
        cc.loader.loadRes(_prefab, cc.Prefab, (err, assets) => {
            if (err) {
                if (_onFail) {
                    _onFail();
                }
                return;
            }

            if (_onSuccess) {
                _onSuccess(assets);
            }
        });
    }

    /**
     * 跳转到指定小程序
     * @param {object} _appdata 游戏数据
     * @param {string}  _menuName   界面名称
     * @param {string}  _advName    广告名字
     * @param {function} _onSuccess 成功回调函数
     * @param {function} _onFail 失败回调函数
     * 
     */
    public JumpToProgram(_appdata, _menuName = null, _advName = null, _onSuccess = null, _onFail = null) {
        this.AdvLog("AdvServer JumpToProgram _appdata", _appdata);
        if (BasePlatform.getInstance().IsWeChat()) {
            let wxappid = _appdata.appid;
            let wxpath = _appdata.path;
            
            StatisticsServer.getInstance().SendTgEventClick(wxappid, _appdata.name);
            //已绑定
            WeChat.JumpToMiniProgram(wxappid, wxpath, _appdata.extData, "release", (res) => {
                StatisticsServer.getInstance().SendTgEventJumpOk(wxappid, _appdata.name);
                if (_onSuccess) {
                    _onSuccess();
                }
            }, () => {
                if (_onFail) {
                    _onFail();
                }
            })
        }
        else {
            if (_onFail) {
                _onFail();
            }
        }
    }

    /**
     * 设置debug模式
     * @param {boolean} _isDebug 
     */
    public SetDebug(_isDebug: boolean) {
        this.m_Debug = _isDebug
    }
    /**
     * 输出log
     * @param {...any} _custome 要输出的数据
     */
    private AdvLog(..._custome) {
        if (this.m_Debug) {
            console.log.apply(console, _custome);
        }
    }
}