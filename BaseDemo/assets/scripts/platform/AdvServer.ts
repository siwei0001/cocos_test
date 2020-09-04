import BasePlatform from "./BasePlatform";
import TgAdvSdk from "./TgAdvSdk";
import { BaseConfig } from "../config/BaseConfig";
import MenuManage, { BaseMenu } from "../manage/MenuManage";
import { WeChat } from "./WeChat";
import Utils from "../utils/Utils";
import StatisticsServer from "./StatisticsServer";
import Http, { HttpReqType } from "../utils/Http";
import { Bytedanace } from "./Bytedanace";

/**
 * 广告服务
 * 管理平台广告
 */

/**
* 微信广告配置
*/
export var WeChatAdvConfig = {
    BannerAdUnitId: "adunit-867895101849db01",           //baner 广告id
    RewardedVideoAdUnitId: "adunit-634c638c87e69832",    //视频激励广告id
    InterstitialAdUnitId: "adunit-666aa0948da0825a",     //插屏广告id
    GridAdUnitId: "",             //格子广告id
    CustomAdUnitId: "",           //原生广告id

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
        //判断平台
        if (BasePlatform.getInstance().IsWeChat()) {
            //微信平台
            //初始化插屏
            this.m_InterstitialAd = WeChat.CreateInterstitialAd(WeChatAdvConfig.InterstitialAdUnitId);
            //初始化banner 第一次初始化随机选择bannerID
            WeChatAdvConfig.BannerAdUnitIdIndx = Utils.RandNum(0, WeChatAdvConfig.BannerAdUnitIdList.length - 1);
            WeChatAdvConfig.BannerAdUnitId = WeChatAdvConfig.BannerAdUnitIdList[WeChatAdvConfig.BannerAdUnitIdIndx];
            this.m_BannerAd = WeChat.CreateBannerAd(WeChatAdvConfig.BannerAdUnitId);
            //初始化视频
            this.m_RewardedVideoAd = WeChat.CreateRewardedVideoAd(WeChatAdvConfig.RewardedVideoAdUnitId);
            //初始化格子广告
            // this.m_RewardedVideoAd = WeChat.CreateGridAd(WeChatAdvConfig.GridAdUnitId);
            //初始化原生广告
            // this.m_CustomAd = WeChat.CreateCustomAd(WeChatAdvConfig.CustomAdUnitId);
        }
        else if (BasePlatform.getInstance().IsBytedanace()) {
            //字节跳动
            //初始化插屏
            this.m_InterstitialAd = Bytedanace.CreateInterstitialAd(BytedanceAdvConfig.InterstitialAdUnitId);
            //初始化banner
            this.m_BannerAd = Bytedanace.CreateBannerAd(BytedanceAdvConfig.BannerAdUnitId);
            //初始化视频
            this.m_RewardedVideoAd = Bytedanace.CreateRewardedVideoAd(BytedanceAdvConfig.RewardedVideoAdUnitId);
        }
        else {
            //其他平台
            if (_onSuccess) {
                _onSuccess();
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
    SetBannerStye<T extends { left: number, top: number, width: number, height: number }>(_tyep: T) {

    }

    /**
     * 显示banner
     */
    ShowBanner() {

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