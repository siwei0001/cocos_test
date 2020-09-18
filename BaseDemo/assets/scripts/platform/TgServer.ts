/**
 * tg服务
 * 管理交叉推广
 * 
 */

import BasePlatform from "./BasePlatform";
import { BaseConfig } from "../config/BaseConfig";
import Http, { HttpReqType } from "../utils/Http";
import Utils from "../utils/Utils";

/**
* 微信配置
*/
export var WeChatConfig = {
    GameID: "20200903142325984927",                  //游戏id
    GameConfigVersion: "20200907171958728636",       //配置版本
    GameAdvVersion: "20200903143758823677",          //广告配置版本
}
/**
* 头条配置
*/
export var BytedanceConfig = {
    GameID: "",                  //游戏id
    GameConfigVersion: "",       //配置版本
    GameAdvVersion: "",          //广告配置版本
}
interface PlatformConfig {
    GameID: string,
    GameConfigVersion: string,
    GameAdvVersion: string,
}

/**
 * 配置接口
 * 
 * 审核开关        game_is_review
 * 主页全屏1        game_main_fullscreen_1
 * 游戏页面全屏1    game_gameplay_fullscreen_1
 * 结算页面全屏1     game_result_fullscreen_1
 * 主页全屏2         game_main_fullscreen_2
 * 游戏页面全屏2     game_gameplay_fullscreen_2
 * 结算页面全屏2     game_result_fullscreen_2
 * 主页插屏         game_main_interstitial
 * 
 * 全屏1随机跳转         game_jump_rand_fullscreen_1
 * 全屏2随机跳转         game_jump_rand_fullscreen_2
 * 
 * 全屏banner          game_banner_fullscreen
 * 随机跳转到自研游戏      game_jump_zjkj
 * 
 * 开始金蛋策略开关  game_egg_start
 * 结束金蛋策略开关  game_egg_end
 * 开始视频开关      game_video_start
 * 结束视频开关      game_video_end
 * 
 */
interface TgConfig {
    game_is_review?: number,
    game_main_fullscreen_1?: number,
    game_gameplay_fullscreen_1?: number,
    game_result_fullscreen_1?: number,
    game_main_fullscreen_2?: number,
    game_gameplay_fullscreen_2?: number,
    game_result_fullscreen_2?: number,
    game_main_interstitial?: number,
    game_jump_rand_fullscreen_1?: number,
    game_jump_rand_fullscreen_2?: number,
    game_banner_fullscreen?: number,
    game_jump_zjkj?: number,
    game_egg_start?: number,
    game_egg_end?: number,
    game_video_start?: number,
    game_video_end?: number,

}

/**
 * 推广数据配置
 *  appid?: 游戏的appid
 *  name?: 游戏的名字
 *  status?: 游戏状态
 *  path?: 游戏传入路径
 *  icon?: 游戏icon
 *  ggz_name?: 游戏公司名字
 *  channel?: 游戏渠道
 *  desc?: 游戏描述
 *  descTg?: 游戏交叉推广描述
 *  price?: 游戏交叉推广单价
 *  time_str?: 游戏交叉推广时间戳
 */
interface TgAdvConfig {
    appid?: string,
    name?: string,
    status?: string,
    path?: string,
    icon?: string,
    ggz_name?: string,
    channel?: string,
    desc?: string,
    descTg?: string,
    price?: string,
    time_str?: string,
}

export default class TgServer {

    private static _instance: TgServer;

    private _TgConfig: TgConfig = {};
    public set TgConfig(_tgconfig: TgConfig) {
        // this._TgConfig = _tgconfig;
    }
    public get TgConfig(): TgConfig {
        return this._TgConfig;
    }

    private _TgAdvConfig: Array<TgAdvConfig> = [];

    /**
     * 构造函数
     */
    constructor() {
    }

    public static getInstance(): TgServer {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new TgServer())
        return this._instance;
    }

    /**
     * 初始化tgServer
     */
    InitTgServer(_onSuccess: Function, _onFail: Function) {
        //获取配置
        // Symbol[""]
        //
        this.LoadConfig(_onSuccess, _onFail);
    }

    /**
     * 加载配置
     */
    LoadConfig(_onSuccess: Function, _onFail: Function) {

        // private m_AdvConfigUrl = "tgsdk_server/api/game/config";
        let configUrl = "";
        let dataUrl = "";

        if (BasePlatform.getInstance().IsWeChat()) {
            //微信
            configUrl = BaseConfig.NetConfig.NetRoot + "/tgsdk_server/api/game/config/" + WeChatConfig.GameID + "/" + WeChatConfig.GameConfigVersion;
            dataUrl = BaseConfig.NetConfig.NetRoot + "/tgsdk_server/api/game/tg/" + WeChatConfig.GameID + "/" + WeChatConfig.GameAdvVersion;
        }
        else if (BasePlatform.getInstance().IsBytedanace()) {
            //字节跳动
            configUrl = BaseConfig.NetConfig.NetRoot + "/tgsdk_server/api/game/config/" + BytedanceConfig.GameID + "/" + BytedanceConfig.GameConfigVersion;
        }
        else {
            configUrl = BaseConfig.NetConfig.NetRoot + "/tgsdk_server/api/game/config/" + WeChatConfig.GameID + "/" + WeChatConfig.GameConfigVersion;
            dataUrl = BaseConfig.NetConfig.NetRoot + "/tgsdk_server/api/game/tg/" + WeChatConfig.GameID + "/" + WeChatConfig.GameAdvVersion;
        }

        //请求配置
        if (configUrl) {
            let http = new Http();
            http.SetReqType(HttpReqType.GET);
            http.Request(configUrl, (data) => {
                // console.log("LoadConfig config data", data);
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        // console.log("LoadConfig data key", key);
                        const element = data[key];
                        this._TgConfig[element["key"]] = element["value"];
                    }
                }

                // console.log("LoadConfig this._TgConfig", this._TgConfig);

                if (_onSuccess) {
                    _onSuccess();
                }
            }, (err) => {
                if (_onFail) {
                    _onFail("初始化失败 err" + err);
                }
            })
        }

        //请求数据
        if (dataUrl) {
            let http = new Http();
            http.SetReqType(HttpReqType.GET);
            http.Request(dataUrl, (data) => {
                // console.log("LoadConfig adv data", data);
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        // console.log("LoadConfig adv data key", key);
                        if (data.hasOwnProperty(key)) {
                            const advData = data[key];
                            if (advData["status"] == "上线") {
                                this._TgAdvConfig.push(advData);
                            }
                        }
                    }
                }
                // console.log("LoadConfig this._TgAdvConfig", this._TgAdvConfig);
            }, (err) => {
            })
        }
    }

    /**
     * 返回广告数据
     * @param advNum 广告数目
     * @param start 开始位置
     * @param rand 随机标记
     * 不传advNum会返回全部广告数据
     */
    GetTgAdvData(advNum?: number, start?: number, rand?: boolean): Array<TgAdvConfig> {
        let tempList = [];
        let tempDataList = [...this._TgAdvConfig]//Utils.CloneObj(this._TgAdvConfig);
        //判断是否有广告数据
        if (tempDataList.length > 0) {
            //判断开始位置是否超出数据长度
            if (!start || start > tempDataList.length - 1) {
                start = 0;
            }

            //根据开始位置筛选数据
            let tgBarData = tempDataList.slice(start, tempDataList.length);

            if (!advNum) {
                //如果传入的数量为0则表示从开始位置取出全部的数据
                advNum = tgBarData.length;
            }

            //随机
            if (rand) {
                for (let index = 0; index < advNum; index++) {
                    if (tgBarData.length > 0) {
                        let randindex = Utils.RandNum(0, tgBarData.length - 1);
                        tempList.push(tgBarData[randindex])
                        tgBarData.splice(randindex, 1);
                    }
                }
            }
            else {
                for (let index = 0; index < advNum; index++) {
                    if (tgBarData.length - index > 0) {
                        tempList.push(tgBarData[index])
                    }
                }
            }
        }
        return tempList;
    }

    /**
     * 返回自研游戏广告数据
     * @param advNum 广告数目
     * @param start 开始位置
     * @param rand 随机标记
     */
    GetTgZjkjAdvData(advNum?: number, start?: number, rand?: boolean): Array<TgAdvConfig> {
        let tempList = [];
        let tempDataList = [];

        //筛选自研游戏
        for (let index = 0; index < this._TgAdvConfig.length; index++) {
            const tempdata = this._TgAdvConfig[index];
            if (tempdata.ggz_name == "指尖科技") {
                tempDataList.push(Utils.CloneObj(tempdata));
            }
        }

        //判断是否有广告数据
        if (tempDataList.length > 0) {
            //判断开始位置是否超出数据长度
            if (!start || start > tempDataList.length - 1) {
                start = 0;
            }

            //根据开始位置筛选数据
            let tgBarData = tempDataList.slice(start, tempDataList.length);

            if (!advNum) {
                //如果传入的数量为0则表示从开始位置取出全部的数据
                advNum = tgBarData.length;
            }

            //随机
            if (rand) {
                for (let index = 0; index < advNum; index++) {
                    if (tgBarData.length > 0) {
                        let randindex = Utils.RandNum(0, tgBarData.length - 1);
                        tempList.push(tgBarData[randindex])
                        tgBarData.splice(randindex, 1);
                    }
                }
            }
            else {
                for (let index = 0; index < advNum; index++) {
                    if (tgBarData.length - index > 0) {
                        tempList.push(tgBarData[index])
                    }
                }
            }
        }

        return tempList;
    }

    /**
     * 返回广告数据条数
     */
    GetTgAdvDataLength(): number {
        return this._TgAdvConfig.length;
    }


}