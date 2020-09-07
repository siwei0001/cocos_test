import BasePlatform from "./BasePlatform";
import { WeChat } from "./WeChat";
import { Bytedanace } from "./Bytedanace";

/**
 * 广告服务
 * 管理平台广告
 */

/**
* 微信广告配置
*/
export var WeChatAdvConfig = {
    BannerAdUnitId: "adunit-5b75f5566c6d3990",           //baner 广告id
    RewardedVideoAdUnitId: "adunit-9b7a3e7cd42fe8d0",    //视频激励广告id
    InterstitialAdUnitId: "adunit-a3c388a689286227",     //插屏广告id
    GridAdUnitId: "adunit-1fd1ab8c9178d5af",             //格子广告id
    CustomAdUnitId: "adunit-1d1a8e74b0f5bbdb",           //原生广告id

    BannerAdUnitIdIndx: 0,           //baner广告索引
    BannerAdUnitIdList: ["adunit-867895101849db01",
        "adunit-2a23917843ef7e5c", "adunit-dbb9dfd15ba976e1",
        "adunit-9c5039e26651f276", "adunit-f4e89db82727eea0",
        "adunit-d0afb047df25c7e8", "adunit-d5286ee67a9b16d7",
        "adunit-278edbb99992069e"],
}

/**
* 头条广告配置
*/
export var BytedanceAdvConfig = {
    BannerAdUnitId: "adunit-867895101849db01",           //baner 广告id
    RewardedVideoAdUnitId: "adunit-634c638c87e69832",    //视频激励广告id
    InterstitialAdUnitId: "adunit-666aa0948da0825a",     //插屏广告id
    GridAdUnitId: "",             //格子广告id
    CustomAdUnitId: "",           //原生广告id
}

export default class AdvServer {

    private static _instance: AdvServer;

    private m_Debug: boolean = false;    //日志输出开关

    private m_BannerAd: any = null;         //banner广告实例
    private m_RewardedVideoAd: any = null;  //视频广告实例
    private m_InterstitialAd: any = null;   //插屏广告实例
    private m_GridAd: any = null;           //格子广告实例
    private m_CustomAd: any = null;         //原生广告实例

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
        //初始化banner
        this.InitBanner();
        this.InitInterstitialAd();
        this.InitRewardedVideoAd();
        this.InitGridAd();
        this.InitCustomAd();

    }

    /**
     * 初始化banner
     * 
     */
    InitBanner() {
        if (BasePlatform.getInstance().IsWeChat()) {
            //初始化banner 第一次初始化随机选择bannerID
            // WeChatAdvConfig.BannerAdUnitIdIndx = Utils.RandNum(0, WeChatAdvConfig.BannerAdUnitIdList.length - 1);
            // WeChatAdvConfig.BannerAdUnitId = WeChatAdvConfig.BannerAdUnitIdList[WeChatAdvConfig.BannerAdUnitIdIndx];
            this.m_BannerAd = WeChat.CreateBannerAd(WeChatAdvConfig.BannerAdUnitId);
            if (this.m_BannerAd) {
                this.m_BannerAd.onError((err) => {
                    console.error("InitBanner err", err);
                })
            }

        }
        else if (BasePlatform.getInstance().IsBytedanace()) {
            //字节跳动
            //初始化banner
            this.m_BannerAd = Bytedanace.CreateBannerAd(BytedanceAdvConfig.BannerAdUnitId);
            if (this.m_BannerAd) {
                this.m_BannerAd.onError((err) => {
                    console.error("InitBanner err", err);
                })
            }
        }
    }

    /**
     * 设置banner格式
     *     left: _left,
           top: _top,
           width: _width,
           height: _height
     */
    SetBannerStye<T extends { left: number, top: number, width: number, height: number }>(_type: T) {
        if (this.m_BannerAd) {
            this.m_BannerAd.style.left = _type.left;
            this.m_BannerAd.style.top = _type.top;
            this.m_BannerAd.style.width = _type.width;
            this.m_BannerAd.style.height = _type.height;
        }
    }

    /**
     * 显示banner
     * @param {Function} _onSuccess 成功回调
     * @param {Function} _onFail    失败回调
     */
    ShowBanner(_onSuccess: Function = null, _onFail: Function = null) {
        if (this.m_BannerAd) {
            this.m_BannerAd.show().then(() => {
                //显示成功
                if (_onSuccess) {
                    _onSuccess();
                }
            }).catch(() => {
                //显示失败
                if (_onFail) {
                    _onFail();
                }
            })
        }
    }

    /**
     * 隐藏banner
     */
    HideBanner() {
        if (this.m_BannerAd) {
            this.m_BannerAd.hide().then(() => {
                //显示成功

            }).catch(() => {
                //显示失败

            })
        }
    }

    /**
     * 初始化视频
     */
    InitRewardedVideoAd() {
        if (BasePlatform.getInstance().IsWeChat()) {
            //初始化视频
            this.m_RewardedVideoAd = WeChat.CreateRewardedVideoAd(WeChatAdvConfig.RewardedVideoAdUnitId);
            if (this.m_RewardedVideoAd) {
                this.m_RewardedVideoAd.onError((err) => {
                    console.error("InitRewardedVideoAd err", err);
                })
                this.m_RewardedVideoAd.onLoad(() => {
                    this.AdvLog('视频 广告加载成功');
                });
            }
        }
        else if (BasePlatform.getInstance().IsBytedanace()) {
            //初始化视频
            this.m_RewardedVideoAd = Bytedanace.CreateRewardedVideoAd(BytedanceAdvConfig.RewardedVideoAdUnitId);
            if (this.m_RewardedVideoAd) {
                this.m_RewardedVideoAd.onError((err) => {
                    console.error("InitRewardedVideoAd err", err);
                })
                this.m_RewardedVideoAd.onLoad(() => {
                    this.AdvLog('视频 广告加载成功');
                });
            }
        }
    }

    /**
     * 显示视频广告
     * @param {Function} _onSuccess 成功回调
     * @param {Function} _onFail    失败回调
     */
    ShowRewardedVideoAd(_onSuccess: Function = null, _onFail: Function = null) {

        if (this.m_RewardedVideoAd) {
            this.m_RewardedVideoAd.show().then(() => {
            }).catch((err) => {
                console.error("ShowRewardedVideoAd err", err);
                if (_onFail) {
                    _onFail();
                }
            })

            this.m_RewardedVideoAd.onClose((res) => {
                if (res.isEnded) {
                    //完整观看视频
                    if (_onSuccess) {
                        _onSuccess();
                    }
                }
                else {
                    //未完整观看视频
                    if (_onFail) {
                        _onFail();
                    }
                }
            })
        }
    }

    /**
     * 初始化插屏
     */
    InitInterstitialAd() {
        if (BasePlatform.getInstance().IsWeChat()) {
            //初始化插屏
            this.m_InterstitialAd = WeChat.CreateInterstitialAd(WeChatAdvConfig.InterstitialAdUnitId);
            this.m_InterstitialAd.onError((err) => {
                console.error("InitInterstitialAd err", err);
            })
        }
        else if (BasePlatform.getInstance().IsBytedanace()) {
            //初始化插屏
            this.m_InterstitialAd = Bytedanace.CreateInterstitialAd(BytedanceAdvConfig.InterstitialAdUnitId);
            this.m_InterstitialAd.onError((err) => {
                console.error("InitInterstitialAd err", err);
            })
        }
    }

    /**
     * 显示插屏广告
     * @param {Function} _onSuccess 成功回调
     * @param {Function} _onFail    失败回调
     */
    ShowInterstitialAd(_onSuccess: Function = null, _onFail: Function = null) {
        if (this.m_InterstitialAd) {
            this.m_InterstitialAd.show().then(() => {
                //显示成功
                if (_onSuccess) {
                    _onSuccess();
                }
            }).catch(() => {
                //显示失败
                if (_onFail) {
                    _onFail();
                }
            })
        }
    }

    /**
     * 初始化格子广告
     */
    InitGridAd() {
        if (BasePlatform.getInstance().IsWeChat()) {
            //初始化格子广告
            this.m_GridAd = WeChat.CreateGridAd(WeChatAdvConfig.GridAdUnitId);
            if (this.m_GridAd) {
                this.m_GridAd.onError((err) => {
                    console.error("InitGridAd err", err);
                })
            }
        }
        else if (BasePlatform.getInstance().IsBytedanace()) {
            //初始化
            // this.m_InterstitialAd = Bytedanace.CreateGridAd(BytedanceAdvConfig.GridAdUnitId);
            // this.m_InterstitialAd.onError((err) => {
            //     console.error("InitInterstitialAd err", err);
            // })
        }
    }

    /**
     * 设置格子广告格式
     *      left: number,
            top: number,
            width: number,
            height: number
            gridCount: number
        */
    SetGridAdStye<T extends { left: number, top: number, width: number, height: number, gridCount: number }>(_option: T) {
        if (this.m_GridAd) {
            this.m_GridAd.style.left = _option.left;
            this.m_GridAd.style.top = _option.top;
            this.m_GridAd.style.width = _option.width;
            this.m_GridAd.style.height = _option.height;
            this.m_GridAd.gridCount = _option.gridCount;
        }
    }

    /**
     * 显示格子广告
     * @param {Function} _onSuccess 成功回调
     * @param {Function} _onFail    失败回调
     */
    ShowGridAd(_onSuccess: Function = null, _onFail: Function = null) {
        if (this.m_GridAd) {
            this.m_GridAd.show().then(() => {
                //显示成功
                if (_onSuccess) {
                    _onSuccess();
                }
            }).catch(() => {
                //显示失败
                if (_onFail) {
                    _onFail();
                }
            })
        }
    }

    /**
    * 显示格子广告
    * @param {Function} _onSuccess 成功回调
    * @param {Function} _onFail    失败回调
    */
    HideGridAd(_onSuccess: Function = null, _onFail: Function = null) {
        if (this.m_GridAd) {
            this.m_GridAd.hide().then(() => {
                //显示成功
                if (_onSuccess) {
                    _onSuccess();
                }
            }).catch(() => {
                //显示失败
                if (_onFail) {
                    _onFail();
                }
            })
        }
    }

    /**
     * 初始化原生广告
     * 原生广告不支持创建后移动位置
     * 
     */
    InitCustomAd() {
        if (BasePlatform.getInstance().IsWeChat()) {
            //初始化原生广告
            this.m_CustomAd = WeChat.CreateCustomAd(WeChatAdvConfig.CustomAdUnitId);
            if (this.m_CustomAd) {
                this.m_CustomAd.onError((err) => {
                    console.error("InitCustomAd err", err);
                })
            }
        }
        else if (BasePlatform.getInstance().IsBytedanace()) {
            //初始化
            // this.m_InterstitialAd = Bytedanace.CreateGridAd(BytedanceAdvConfig.GridAdUnitId);
            // this.m_InterstitialAd.onError((err) => {
            //     console.error("InitInterstitialAd err", err);
            // })
        }

    }

    /**
    * 显示原生广告
    * @param {Function} _onSuccess 成功回调
    * @param {Function} _onFail    失败回调
    */
    ShowCustomAd(_onSuccess: Function = null, _onFail: Function = null) {
        if (this.m_CustomAd) {
            this.m_CustomAd.show().then(() => {
                //显示成功
                if (_onSuccess) {
                    _onSuccess();
                }
            }).catch(() => {
                //显示失败
                if (_onFail) {
                    _onFail();
                }
            })
        }
    }

    /**
     * 隐藏原生广告
     * @param {Function} _onSuccess 成功回调
     * @param {Function} _onFail    失败回调
     */
    HideCustomAd(_onSuccess: Function = null, _onFail: Function = null) {
        if (this.m_CustomAd) {
            this.m_CustomAd.hide().then(() => {
                //显示成功
                if (_onSuccess) {
                    _onSuccess();
                }
            }).catch(() => {
                //显示失败
                if (_onFail) {
                    _onFail();
                }
            })
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