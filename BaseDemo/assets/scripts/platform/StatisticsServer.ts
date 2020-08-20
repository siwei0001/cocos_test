import BasePlatform from "./BasePlatform";
import Utils from "../utils/Utils";
import { BaseConfig } from "../config/BaseConfig";
import TgStaticsSdk from "./TgStaticsSdk";
import SaveManage from "../manage/SaveManage";
import { AldStaticsSdk } from "./AldStaticsSdk";
import { WeChat } from "./WeChat";
import Http from "../utils/Http";

/**
 * 统计服务
 * 
 */
export default class StatisticsServer {
    // TgSDK_GameID: 'gdyf',   //统计gameid
    // TgSDK_ServerUrl: '/zjserver/tgsdk/tgsdk/protocol/',  //统计请求网址

    private static _instance: StatisticsServer;

    private m_Query: any = "";  //进入游戏传入的query
    private m_Game_Name: string = "我停车贼六";//游戏名字
    private m_Game_ID: string = "2020622141238945";  //游戏id 后台分配的

    private m_ServerUrl: string = "/zjserver/tgsdk/tgsdk/protocol/"; //请求网址接口

    private m_OpenIDKey: string = "tczl20200629001"//保存uuid key值

    /**
     * 构造函数
     */
    constructor() {
    }

    public static getInstance(): StatisticsServer {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new StatisticsServer())
        return this._instance
    }

    /**
     * 设置游戏的query
     * @param {any} _query 传入数据
     */
    public SetShowQuery(_query: any) {
        if (BasePlatform.getInstance().IsWeChat()) {
            this.m_Query = _query;
        }
    }

    /**
    * 新增用户统计
    */
    public NewUserCount() {
        if (BasePlatform.getInstance().IsWeChat()) {
            let uuid = SaveManage.getInstance().GetUserUUID();
            TgStaticsSdk.NewUser(BaseConfig.NetConfig.NetRoot, this.m_Game_ID, uuid)
        }
    }

    /**
    * 新增用户统计2
    */
    public NewUserCount2() {
        if (BasePlatform.getInstance().IsWeChat()) {
            let uuid = SaveManage.getInstance().GetUserUUID();
            //获取启动参数
            let launchOptions = BasePlatform.getInstance().GetLaunchOptionsSync();
            console.log("launchOptions", launchOptions);
            if (launchOptions && !Utils.IsNull(launchOptions.referrerInfo)) {
                let appid = launchOptions.referrerInfo.appId;
                if (appid) {
                    TgStaticsSdk.NewUser2(BaseConfig.NetConfig.NetRoot, this.m_Game_ID, uuid, appid);
                }
            }
        }
    }

    /**
     * 微信平台需要获取openid后传给阿拉丁后台
     */
    public SendOpenID() {
        console.log('SendOpenID');
        if (BasePlatform.getInstance().IsWeChat()) {
            let openid = cc.sys.localStorage.getItem(this.m_OpenIDKey);
            if (openid) {
                openid = JSON.parse(openid);
                // AldStaticsSdk.SendOpenID(openid);
            }
            else {
                WeChat.Login((code) => {
                    TgStaticsSdk.GetOpenID(BaseConfig.NetConfig.NetRoot + this.m_ServerUrl, this.m_Game_ID, code, (openid) => {
                        console.log("TgStaticsSdk.GetOpenID openids", openid);
                        cc.sys.localStorage.setItem(this.m_OpenIDKey, JSON.stringify(openid));
                        // AldStaticsSdk.SendOpenID(openid);
                    }, (err) => {
                        console.log('TgStaticsSdk.GetOpenID is fail err', err);
                    })
                }, (err) => {
                    console.log('WeChat.Login is fail err', err);
                })
            }
        }
    }

    /**
     * 发送自定义事件 计数事件
     * @param {string} _eventName 事件名字
     * 
     */
    public SendCustomEvent(_eventName: string) {
        if (BasePlatform.getInstance().IsWeChat()) {
            let uuid = SaveManage.getInstance().GetUserUUID();
            TgStaticsSdk.SendCustomEvent(BaseConfig.NetConfig.NetRoot, this.m_Game_ID, uuid, _eventName);
        }
        else {
        }
    }

    /**
     * 发送自定义事件 计算事件
     * @param {string} _eventName 事件名字
     * @param {number} _num 要计算的数值
     * 
     */
    public SendCustomEventNum(_eventName: string, _num: number) {
        if (BasePlatform.getInstance().IsWeChat()) {
            let uuid = SaveManage.getInstance().GetUserUUID();
            TgStaticsSdk.SendCustomEventNum(BaseConfig.NetConfig.NetRoot, this.m_Game_ID, uuid, _eventName, _num);
        }
        else {
        }
    }

    /**
     * 交叉推广统计 点击游戏icon上传
     * @param {string} _appID 游戏id
     * @param {string} _appName 游戏名字
     * 
     */
    public SendTgEventClick(_appID: string, _appName: string) {
        if (BasePlatform.getInstance().IsWeChat()) {
            let uuid = SaveManage.getInstance().GetUserUUID();
            TgStaticsSdk.SendTgEventClick(BaseConfig.NetConfig.NetRoot, this.m_Game_ID, uuid, _appID, _appName);
        }
        else {
        }
    }

    /**
     * 交叉推广统计 游戏成功跳转
     * @param {string} _appID 游戏id
     * @param {string} _appName 游戏名字
     * 
     */
    public SendTgEventJumpOk(_appID: string, _appName: string) {
        if (BasePlatform.getInstance().IsWeChat()) {
            let uuid = SaveManage.getInstance().GetUserUUID();
            TgStaticsSdk.SendTgEventJumpOk(BaseConfig.NetConfig.NetRoot, this.m_Game_ID, uuid, _appID, _appName);
        }
        else {
        }
    }

    /**
     * 关卡统计 关卡开始
     * @param {string} _stageId     关卡ID      该字段只能是 1 , 2 , 3 , 1.1 , 1.2 , 1.3 格式 最多支持 32 个字符 
     * @param {string} _stageName   关卡名字     最多支持 32 个字符
     * 
     */
    public Stage_OnStart(_stageId: string = "1", _stageName: string = "第一关") {
        if (BasePlatform.getInstance().IsWeChat()) {
            let _uuid = SaveManage.getInstance().GetUserUUID();
            // AldStaticsSdk.Stage_OnStart(_stageId, _stageName, _uuid);
        }
    }

    /**
     * 关卡统计 关卡中使用道具
     * @param {string} _stageId     关卡ID      该字段只能是 1 , 2 , 3 , 1.1 , 1.2 , 1.3 格式 最多支持 32 个字符 
     * @param {string} _stageName   关卡名字     最多支持 32 个字符 
     * @param {string} _event       事件类型     payStart:发起支付 paySuccess:支付成功 payFail:支付失败 tools:使用道具 revive:复活 award:奖励
     * @param {string} _itemName    物品名字     
     * @param {string} _itemId      物品id     
     * @param {number} _itemCount   物品数量         
     * @param {string} _itemdesc    物品描述     
     * @param {number} _itemMoney   物品价格     
     * 
     */
    public Stage_OnRunning(_stageId: string = "1", _stageName: string = "第一关", _event: string = "tools", _itemName: string = "物品名字", _itemId: string = "110", _itemCount: number = 1, _itemdesc: string = "描述", _itemMoney: number = 100) {
        if (BasePlatform.getInstance().IsWeChat()) {
            let _uuid = SaveManage.getInstance().GetUserUUID();
            // AldStaticsSdk.Stage_OnRunning(_stageId, _stageName, _event, _itemName, _uuid, _itemId, _itemCount, _itemdesc, _itemMoney);
        }

    }

    /**
     * 关卡统计 关卡结束
     * @param {string} _stageId     关卡ID      该字段只能是 1 , 2 , 3 , 1.1 , 1.2 , 1.3 格式 最多支持 32 个字符 
     * @param {string} _stageName   关卡名字     最多支持 32 个字符 
     * @param {string} _event       事件类型     complete:成功 fail:失败 
     * @param {string} _stageDesc   原因描述     
     * 
     */
    public Stage_OnEnd(_stageId: string = "1", _stageName: string = "第一关", _event: string = "complete", _stageDesc: string = "关卡完成") {
        if (BasePlatform.getInstance().IsWeChat()) {
            let _uuid = SaveManage.getInstance().GetUserUUID();
            // AldStaticsSdk.Stage_OnEnd(_stageId, _stageName, _uuid, _event, _stageDesc);
        }
    }

}
