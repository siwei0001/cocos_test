import Utils from "../utils/Utils";
import Http from "../utils/Http";
import { BaseConfig } from "../config/BaseConfig";
import SaveManage from "./SaveManage";

export default class RankManage {

    private static _instance: RankManage;

    private m_NetRoot: string = ""; //域名
    private m_ServerUrl: string = "/zjserver/zjrank/zjrank/protocol/"; //排行榜请求网址

    private m_Rank_AppID: string = "zjkj_qtwz"; //排行榜appid
    private m_Rank_Channel: string = "weixin"; //排行榜渠道
    private m_Rank_Name: string = "qtwz_rank_weixin_2020011301"; //排行榜名字

    /**
     * 构造函数
     */
    constructor() {
    }

    public static getInstance(): RankManage {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new RankManage())
        return this._instance
    }

    /**
     * 初始化排行榜
     * @param {string} _netRoot
     * 
     */
    public InitRank(_netRoot: string) {
        //记录域名
        this.m_NetRoot = _netRoot;
    }

    /**
     * 获取服务器时间
     * DataManage.getInstance().GetServerTime().then((time)=>{
     *      Utils.CCLog('GetServerTime time', time);
     *  }).catch((err)=>{
     *      Utils.CCLog('GetServerTime err', err);
     *  })
     */
    public GetServerTime() {
        return new Promise((resolve, reject) => {
            let http = new Http();
            http.AddParam("pid", "10001");
            let url = this.m_NetRoot + this.m_ServerUrl + "10001.php";
            http.Request(url, (data) => {
                if (data[0].pid == "30001") {
                    resolve(data[0].time);
                }
                else if (data[0].pid == "40002") {
                    reject('GetServerTime errMsg' + data[0].desc);
                }
                else {
                    reject(data);
                }
            }, (errMsg) => {
                // Utils.CCLog('GetServerTime errMsg' + errMsg);
                reject(errMsg);
            });
        });
    }

    /**
     * 上传玩家云存档
     */
    UploadUserCloudStorage() {
        return new Promise((resolve, reject) => {
            //如果没有appid则不上传数据
            if (Utils.IsNull(this.m_Rank_AppID)) {
                reject("appid is null");
            }

            let userName = this.Str_To_Unicode(JSON.stringify(SaveManage.getInstance().GetUserName()));
            let userHeadUrl = this.Str_To_Unicode(JSON.stringify(SaveManage.getInstance().GetHeadIcon()));

            let http = new Http();
            http.AddParam("pid", "10003");
            http.AddParam("appid", this.m_Rank_AppID);
            http.AddParam("channel", this.m_Rank_Channel);
            http.AddParam("uid", SaveManage.getInstance().GetUserUUID());
            http.AddParam("user_name", userName);
            http.AddParam("user_head_url", userHeadUrl);
            // http.AddParam("user_score", SaveManage.getInstance().GetMaxScore());

            let url = this.m_NetRoot + this.m_ServerUrl + "10003.php";

            http.Request(url, (data) => {
                if (data[0].pid == "30001") {
                    // Utils.CCLog("UploadUserCloudData ok");
                    resolve("UploadUserCloudData ok");
                }
                else if (data[0].pid == "40002") {
                    // Utils.CCLog("RemoveUserCloudStorage errMsg" + data[0].desc);
                    reject("RemoveUserCloudStorage errMsg" + data[0].desc);
                }
                else {
                    // Utils.CCLog("UploadUserCloudData errMsg", data);
                    reject(data);
                }
            }, (errMsg) => {
                // Utils.CCLog("UploadUserCloudData errMsg", errMsg);
                reject("UploadUserCloudData errMsg" + errMsg);
            });
        })
    }

    /**
     * 下拉玩家云存档
     * @param {String} _uuid 玩家uuid 默认拉取自己的数据
     * 
     */
    GetUserCloudStorage(_uuid = 'selfuuid') {
        return new Promise((resolve, reject) => {
            //如果没有appid则不上传数据
            if (Utils.IsNull(this.m_Rank_AppID)) {
                reject("appid is null");
            }
            let http = new Http();
            http.AddParam("pid", "10004");
            http.AddParam("appid", this.m_Rank_AppID);
            http.AddParam("channel", this.m_Rank_Channel);
            if (_uuid == 'selfuuid') {
                http.AddParam("uid", SaveManage.getInstance().GetUserUUID());
            }
            else {
                http.AddParam("uid", _uuid);
            }

            let url = this.m_NetRoot + this.m_ServerUrl + "10004.php";

            http.Request(url, (data) => {
                // Utils.CCLog("GetUserCloudStorage data", data);
                if (data[0].pid == "20002") {
                    data[0].user_name = Utils.Unicode_To_Str(data[0].user_name);
                    data[0].user_head_url = Utils.Unicode_To_Str(data[0].user_head_url);
                    resolve(data[0]);
                }
                else if (data[0].pid == "40002") {
                    reject("GetUserCloudStorage errMsg" + data[0].desc);
                }
                else {
                    reject(data);
                }
            }, (errMsg) => {
                reject("GetUserCloudStorage errMsg" + errMsg)
            });
        });
    }

    /**
     * 清除玩家信息
     * 慎重使用
     */
    RemoveUserCloudStorage() {
        return new Promise((resolve, reject) => {
            //如果没有appid则不上传数据
            if (Utils.IsNull(this.m_Rank_AppID)) {
                reject("appid is null");
            }
            let http = new Http();
            http.AddParam("pid", "10010");
            http.AddParam("appid", this.m_Rank_AppID);
            http.AddParam("channel", this.m_Rank_Channel);
            http.AddParam("uid", SaveManage.getInstance().GetUserUUID());

            let url = this.m_NetRoot + this.m_ServerUrl + "10010.php";

            http.Request(url, (data) => {
                if (data[0].pid == "30001") {
                    // Utils.CCLog("RemoveUserCloudStorage ok");
                    resolve("RemoveUserCloudStorage ok");
                }
                else if (data[0].pid == "40002") {
                    Utils.CCLog("RemoveUserCloudStorage errMsg" + data[0].desc);
                    reject("RemoveUserCloudStorage errMsg" + data[0].desc);
                }
                else {
                    // Utils.CCLog(data);
                    reject(data);
                }
            }, (errMsg) => {
                // Utils.CCLog("RemoveUserCloudStorage errMsg" + errMsg);
                reject("RemoveUserCloudStorage errMsg" + errMsg);
            });
        })
    }

    /**
     * 上传玩家排行榜分数
     * 分数以最后一次上传为准
     * @param {Number} _score 排名依据
     */
    RankUploadUserScore(_score: number = 0) {
        return new Promise((resolve, reject) => {
            //如果没有appid则不上传数据
            if (Utils.IsNull(this.m_Rank_AppID) || Utils.IsNull(this.m_Rank_Name)) {
                reject("appid is null");
            }
            let http = new Http();
            http.AddParam("pid", "10005");
            http.AddParam("appid", this.m_Rank_AppID);
            http.AddParam("channel", this.m_Rank_Channel);
            http.AddParam("uid", SaveManage.getInstance().GetUserUUID());
            http.AddParam("rank_name", this.m_Rank_Name);
            http.AddParam("rank_score", "" + _score);

            let url = this.m_NetRoot + this.m_ServerUrl + "10005.php";

            http.Request(url, (data) => {
                if (data[0].pid == "30001") {
                    // Utils.CCLog("RankUploadUserScore ok" + data[0].desc);
                    resolve("RankUploadUserScore ok" + data[0].desc);
                }
                else if (data[0].pid == "40002") {
                    // Utils.CCLog("RankUploadUserScore errMsg" + data[0].desc);
                    reject("RankUploadUserScore errMsg" + data[0].desc);
                }
                else {
                    // Utils.CCLog(data);
                    reject(data);
                }
            }, (errMsg) => {
                // Utils.CCLog("RankUploadUserScore errMsg" + errMsg);
                reject("RankUploadUserScore errMsg" + errMsg);
            });
        })
    }

    /**
     * 上传玩家排行榜数据
     * 分数以最高分为准
     * @param {Number} _score 排名依据
     */
    RankUploadUserMaxScore(_score = 0) {
        return new Promise((resolve, reject) => {
            //如果没有appid则不上传数据
            if (Utils.IsNull(this.m_Rank_AppID) || Utils.IsNull(this.m_Rank_Name)) {
                reject("appid is null");
            }
            let http = new Http();
            http.AddParam("pid", "10006");
            http.AddParam("appid", this.m_Rank_AppID);
            http.AddParam("channel", this.m_Rank_Channel);
            http.AddParam("uid", SaveManage.getInstance().GetUserUUID());
            http.AddParam("rank_name", this.m_Rank_Name);
            http.AddParam("rank_score", "" + _score);

            let url = this.m_NetRoot + this.m_ServerUrl + "10006.php";

            http.Request(url, (data) => {
                if (data[0].pid == "30001") {
                    // Utils.CCLog("RankUploadUserMaxScore ok" + data[0].desc);
                    resolve("RankUploadUserMaxScore ok" + data[0].desc);
                }
                else if (data[0].pid == "40002") {
                    // Utils.CCLog("RankUploadUserMaxScore errMsg" + data[0].desc);
                    reject("RankUploadUserMaxScore errMsg" + data[0].desc);
                }
                else {
                    // Utils.CCLog(data);
                    reject(data);
                }
            }, (errMsg) => {
                // Utils.CCLog("RankUploadUserMaxScore errMsg" + errMsg);
                reject("RankUploadUserMaxScore errMsg" + errMsg);
            });
        })
    }

    /**
     * 获取玩家在排行榜内的数据
     */
    RankGetUserData() {
        return new Promise((resolve, reject) => {
            //如果没有appid则不上传数据
            if (Utils.IsNull(this.m_Rank_AppID) || Utils.IsNull(this.m_Rank_Channel)) {
                reject("appid is null");
            }
            let http = new Http();
            http.AddParam("pid", "10007");
            http.AddParam("appid", this.m_Rank_AppID);
            http.AddParam("channel", this.m_Rank_Channel);
            http.AddParam("uid", SaveManage.getInstance().GetUserUUID());
            http.AddParam("rank_name", this.m_Rank_Name);

            let url = this.m_NetRoot + this.m_ServerUrl + "10007.php";

            http.Request(url, (data) => {
                // Utils.CCLog("GetUserCloudStorage data", data);
                if (data[0].pid == "20003") {
                    if (!Utils.IsNull(data[0].user_info)) {
                        data[0].user_info.user_name = Utils.Unicode_To_Str(data[0].user_info.user_name);
                        data[0].user_info.user_head_url = Utils.Unicode_To_Str(data[0].user_info.user_head_url);
                    }

                    resolve(data[0]);
                }
                else if (data[0].pid == "40002") {
                    reject("GetUserCloudStorage errMsg" + data[0].desc);
                }
                else {
                    reject(data);
                }
            }, (errMsg) => {
                reject("GetUserCloudStorage errMsg" + errMsg)
            });
        });
    }

    /**
     * 获取排行榜用户列表
     * @param {Number} _rank_start 排名开始的地方
     * @param {Number} _rank_end  排名结束的地方
     * 
     */
    RankGetUserList(_rank_start = 1, _rank_end = 20) {
        return new Promise((resolve, reject) => {
            //如果没有appid则不上传数据
            if (Utils.IsNull(this.m_Rank_AppID) || Utils.IsNull(this.m_Rank_Channel)) {
                reject("appid is null");
            }

            let http = new Http();
            http.AddParam("pid", "10008");
            http.AddParam("appid", this.m_Rank_AppID);
            http.AddParam("channel", this.m_Rank_Channel);
            http.AddParam("uid", SaveManage.getInstance().GetUserUUID());
            http.AddParam("rank_name", this.m_Rank_Name);
            http.AddParam("rank_start", "" + _rank_start);
            http.AddParam("rank_end", "" + _rank_end);

            let url = this.m_NetRoot + this.m_ServerUrl + "10008.php";

            http.Request(url, (data) => {
                Utils.CCLog("RankGetUserList data", data);
                if (data.length > 0) {
                    if (data[0].pid == "40002") {
                        reject("RankGetUserList errMsg" + data[0].desc);
                    }
                    else {

                        let rankData = {
                            SelfInfo: {},
                            UserList: [],
                            User_Count_All: 0,
                        }

                        for (let index = 0; index < data.length; index++) {
                            // Utils.CCLog('RankGetUserList', data[index]);

                            if (!Utils.IsNull(data[index].user_info)) {
                                data[index].user_info.user_name = Utils.Unicode_To_Str(data[index].user_info.user_name);
                                data[index].user_info.user_head_url = Utils.Unicode_To_Str(data[index].user_info.user_head_url);
                            }

                            if (data[index].pid == "20004") {
                                rankData.UserList.push(data[index]);
                            }
                            else if (data[index].pid == "20003") {
                                rankData.SelfInfo = data[index];
                            }
                            else if (data[index].pid == "20005") {
                                rankData.User_Count_All = data[index].user_count_all;
                            }
                        }

                        resolve(rankData);
                    }
                }
                else {
                    reject("RankGetUserList erro");
                }

            }, (errMsg) => {
                reject("RankGetUserList errMsg" + errMsg)
            });

        });
    }

    /**
     * 清除指定排行榜数据
     * 慎重使用
     * 
     */
    RankRemoveData() {
        return new Promise((resolve, reject) => {
            //如果没有appid则不上传数据
            if (Utils.IsNull(this.m_Rank_AppID) || Utils.IsNull(this.m_Rank_Channel)) {
                reject("appid is null");
            }
            let http = new Http();
            http.AddParam("pid", "10009");
            http.AddParam("appid", this.m_Rank_AppID);
            http.AddParam("channel", this.m_Rank_Channel);
            http.AddParam("rank_name", this.m_Rank_Name);

            let url = this.m_NetRoot + this.m_ServerUrl + "10009.php";

            http.Request(url, (data) => {
                if (data[0].pid == "30001") {
                    // Utils.CCLog("RankRemoveData ok" + data[0].desc);
                    resolve("RankRemoveData ok" + data[0].desc);
                }
                else if (data[0].pid == "40002") {
                    // Utils.CCLog("RankRemoveData errMsg" + data[0].desc);
                    reject("RankRemoveData errMsg" + data[0].desc);
                }
                else {
                    // Utils.CCLog(data);
                    reject(data);
                }
            }, (errMsg) => {
                // Utils.CCLog("RankRemoveData errMsg" + errMsg);
                reject("RankRemoveData errMsg" + errMsg);
            });
        });
    }
    //----------------排行榜end-----------------------------------------
    /**
     * 字符串转Unicode编码
     * @param {string} _str
     * 
     */
    private Str_To_Unicode(_str: string) {
        var unid = '\\u';
        for (let i = 0, len = _str.length; i < len; i++) {
            if (i < len - 1) {
                unid += _str.charCodeAt(i).toString(16) + '\\u';
            } else if (i === len - 1) {
                unid += _str.charCodeAt(i).toString(16);
            }
        }
        // console.log("Str_To_Unicode", unid);
        return unid;
    }
}
