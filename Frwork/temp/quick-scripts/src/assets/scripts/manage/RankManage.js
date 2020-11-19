"use strict";
cc._RF.push(module, '04937GrYKtPDqe1Au4X0ktq', 'RankManage');
// scripts/manage/RankManage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../utils/Utils");
var Http_1 = require("../utils/Http");
var SaveManage_1 = require("./SaveManage");
var RankManage = /** @class */ (function () {
    /**
     * 构造函数
     */
    function RankManage() {
        this.m_NetRoot = ""; //域名
        this.m_ServerUrl = "/zjserver/zjrank/zjrank/protocol/"; //排行榜请求网址
        this.m_Rank_AppID = "zjkj_qtwz"; //排行榜appid
        this.m_Rank_Channel = "weixin"; //排行榜渠道
        this.m_Rank_Name = "qtwz_rank_weixin_2020011301"; //排行榜名字
    }
    RankManage.getInstance = function () {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new RankManage());
        return this._instance;
    };
    /**
     * 初始化排行榜
     * @param {string} _netRoot
     *
     */
    RankManage.prototype.InitRank = function (_netRoot) {
        //记录域名
        this.m_NetRoot = _netRoot;
    };
    /**
     * 获取服务器时间
     * DataManage.getInstance().GetServerTime().then((time)=>{
     *      Utils.CCLog('GetServerTime time', time);
     *  }).catch((err)=>{
     *      Utils.CCLog('GetServerTime err', err);
     *  })
     */
    RankManage.prototype.GetServerTime = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var http = new Http_1.default();
            http.AddParam("pid", "10001");
            var url = _this.m_NetRoot + _this.m_ServerUrl + "10001.php";
            http.Request(url, function (data) {
                if (data[0].pid == "30001") {
                    resolve(data[0].time);
                }
                else if (data[0].pid == "40002") {
                    reject('GetServerTime errMsg' + data[0].desc);
                }
                else {
                    reject(data);
                }
            }, function (errMsg) {
                // Utils.CCLog('GetServerTime errMsg' + errMsg);
                reject(errMsg);
            });
        });
    };
    /**
     * 上传玩家云存档
     */
    RankManage.prototype.UploadUserCloudStorage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //如果没有appid则不上传数据
            if (Utils_1.default.IsNull(_this.m_Rank_AppID)) {
                reject("appid is null");
            }
            var userName = _this.Str_To_Unicode(JSON.stringify(SaveManage_1.default.getInstance().GetUserName()));
            var userHeadUrl = _this.Str_To_Unicode(JSON.stringify(SaveManage_1.default.getInstance().GetHeadIcon()));
            var http = new Http_1.default();
            http.AddParam("pid", "10003");
            http.AddParam("appid", _this.m_Rank_AppID);
            http.AddParam("channel", _this.m_Rank_Channel);
            http.AddParam("uid", SaveManage_1.default.getInstance().GetUserUUID());
            http.AddParam("user_name", userName);
            http.AddParam("user_head_url", userHeadUrl);
            // http.AddParam("user_score", SaveManage.getInstance().GetMaxScore());
            var url = _this.m_NetRoot + _this.m_ServerUrl + "10003.php";
            http.Request(url, function (data) {
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
            }, function (errMsg) {
                // Utils.CCLog("UploadUserCloudData errMsg", errMsg);
                reject("UploadUserCloudData errMsg" + errMsg);
            });
        });
    };
    /**
     * 下拉玩家云存档
     * @param {String} _uuid 玩家uuid 默认拉取自己的数据
     *
     */
    RankManage.prototype.GetUserCloudStorage = function (_uuid) {
        var _this = this;
        if (_uuid === void 0) { _uuid = 'selfuuid'; }
        return new Promise(function (resolve, reject) {
            //如果没有appid则不上传数据
            if (Utils_1.default.IsNull(_this.m_Rank_AppID)) {
                reject("appid is null");
            }
            var http = new Http_1.default();
            http.AddParam("pid", "10004");
            http.AddParam("appid", _this.m_Rank_AppID);
            http.AddParam("channel", _this.m_Rank_Channel);
            if (_uuid == 'selfuuid') {
                http.AddParam("uid", SaveManage_1.default.getInstance().GetUserUUID());
            }
            else {
                http.AddParam("uid", _uuid);
            }
            var url = _this.m_NetRoot + _this.m_ServerUrl + "10004.php";
            http.Request(url, function (data) {
                // Utils.CCLog("GetUserCloudStorage data", data);
                if (data[0].pid == "20002") {
                    data[0].user_name = Utils_1.default.Unicode_To_Str(data[0].user_name);
                    data[0].user_head_url = Utils_1.default.Unicode_To_Str(data[0].user_head_url);
                    resolve(data[0]);
                }
                else if (data[0].pid == "40002") {
                    reject("GetUserCloudStorage errMsg" + data[0].desc);
                }
                else {
                    reject(data);
                }
            }, function (errMsg) {
                reject("GetUserCloudStorage errMsg" + errMsg);
            });
        });
    };
    /**
     * 清除玩家信息
     * 慎重使用
     */
    RankManage.prototype.RemoveUserCloudStorage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //如果没有appid则不上传数据
            if (Utils_1.default.IsNull(_this.m_Rank_AppID)) {
                reject("appid is null");
            }
            var http = new Http_1.default();
            http.AddParam("pid", "10010");
            http.AddParam("appid", _this.m_Rank_AppID);
            http.AddParam("channel", _this.m_Rank_Channel);
            http.AddParam("uid", SaveManage_1.default.getInstance().GetUserUUID());
            var url = _this.m_NetRoot + _this.m_ServerUrl + "10010.php";
            http.Request(url, function (data) {
                if (data[0].pid == "30001") {
                    // Utils.CCLog("RemoveUserCloudStorage ok");
                    resolve("RemoveUserCloudStorage ok");
                }
                else if (data[0].pid == "40002") {
                    Utils_1.default.CCLog("RemoveUserCloudStorage errMsg" + data[0].desc);
                    reject("RemoveUserCloudStorage errMsg" + data[0].desc);
                }
                else {
                    // Utils.CCLog(data);
                    reject(data);
                }
            }, function (errMsg) {
                // Utils.CCLog("RemoveUserCloudStorage errMsg" + errMsg);
                reject("RemoveUserCloudStorage errMsg" + errMsg);
            });
        });
    };
    /**
     * 上传玩家排行榜分数
     * 分数以最后一次上传为准
     * @param {Number} _score 排名依据
     */
    RankManage.prototype.RankUploadUserScore = function (_score) {
        var _this = this;
        if (_score === void 0) { _score = 0; }
        return new Promise(function (resolve, reject) {
            //如果没有appid则不上传数据
            if (Utils_1.default.IsNull(_this.m_Rank_AppID) || Utils_1.default.IsNull(_this.m_Rank_Name)) {
                reject("appid is null");
            }
            var http = new Http_1.default();
            http.AddParam("pid", "10005");
            http.AddParam("appid", _this.m_Rank_AppID);
            http.AddParam("channel", _this.m_Rank_Channel);
            http.AddParam("uid", SaveManage_1.default.getInstance().GetUserUUID());
            http.AddParam("rank_name", _this.m_Rank_Name);
            http.AddParam("rank_score", "" + _score);
            var url = _this.m_NetRoot + _this.m_ServerUrl + "10005.php";
            http.Request(url, function (data) {
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
            }, function (errMsg) {
                // Utils.CCLog("RankUploadUserScore errMsg" + errMsg);
                reject("RankUploadUserScore errMsg" + errMsg);
            });
        });
    };
    /**
     * 上传玩家排行榜数据
     * 分数以最高分为准
     * @param {Number} _score 排名依据
     */
    RankManage.prototype.RankUploadUserMaxScore = function (_score) {
        var _this = this;
        if (_score === void 0) { _score = 0; }
        return new Promise(function (resolve, reject) {
            //如果没有appid则不上传数据
            if (Utils_1.default.IsNull(_this.m_Rank_AppID) || Utils_1.default.IsNull(_this.m_Rank_Name)) {
                reject("appid is null");
            }
            var http = new Http_1.default();
            http.AddParam("pid", "10006");
            http.AddParam("appid", _this.m_Rank_AppID);
            http.AddParam("channel", _this.m_Rank_Channel);
            http.AddParam("uid", SaveManage_1.default.getInstance().GetUserUUID());
            http.AddParam("rank_name", _this.m_Rank_Name);
            http.AddParam("rank_score", "" + _score);
            var url = _this.m_NetRoot + _this.m_ServerUrl + "10006.php";
            http.Request(url, function (data) {
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
            }, function (errMsg) {
                // Utils.CCLog("RankUploadUserMaxScore errMsg" + errMsg);
                reject("RankUploadUserMaxScore errMsg" + errMsg);
            });
        });
    };
    /**
     * 获取玩家在排行榜内的数据
     */
    RankManage.prototype.RankGetUserData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //如果没有appid则不上传数据
            if (Utils_1.default.IsNull(_this.m_Rank_AppID) || Utils_1.default.IsNull(_this.m_Rank_Channel)) {
                reject("appid is null");
            }
            var http = new Http_1.default();
            http.AddParam("pid", "10007");
            http.AddParam("appid", _this.m_Rank_AppID);
            http.AddParam("channel", _this.m_Rank_Channel);
            http.AddParam("uid", SaveManage_1.default.getInstance().GetUserUUID());
            http.AddParam("rank_name", _this.m_Rank_Name);
            var url = _this.m_NetRoot + _this.m_ServerUrl + "10007.php";
            http.Request(url, function (data) {
                // Utils.CCLog("GetUserCloudStorage data", data);
                if (data[0].pid == "20003") {
                    if (!Utils_1.default.IsNull(data[0].user_info)) {
                        data[0].user_info.user_name = Utils_1.default.Unicode_To_Str(data[0].user_info.user_name);
                        data[0].user_info.user_head_url = Utils_1.default.Unicode_To_Str(data[0].user_info.user_head_url);
                    }
                    resolve(data[0]);
                }
                else if (data[0].pid == "40002") {
                    reject("GetUserCloudStorage errMsg" + data[0].desc);
                }
                else {
                    reject(data);
                }
            }, function (errMsg) {
                reject("GetUserCloudStorage errMsg" + errMsg);
            });
        });
    };
    /**
     * 获取排行榜用户列表
     * @param {Number} _rank_start 排名开始的地方
     * @param {Number} _rank_end  排名结束的地方
     *
     */
    RankManage.prototype.RankGetUserList = function (_rank_start, _rank_end) {
        var _this = this;
        if (_rank_start === void 0) { _rank_start = 1; }
        if (_rank_end === void 0) { _rank_end = 20; }
        return new Promise(function (resolve, reject) {
            //如果没有appid则不上传数据
            if (Utils_1.default.IsNull(_this.m_Rank_AppID) || Utils_1.default.IsNull(_this.m_Rank_Channel)) {
                reject("appid is null");
            }
            var http = new Http_1.default();
            http.AddParam("pid", "10008");
            http.AddParam("appid", _this.m_Rank_AppID);
            http.AddParam("channel", _this.m_Rank_Channel);
            http.AddParam("uid", SaveManage_1.default.getInstance().GetUserUUID());
            http.AddParam("rank_name", _this.m_Rank_Name);
            http.AddParam("rank_start", "" + _rank_start);
            http.AddParam("rank_end", "" + _rank_end);
            var url = _this.m_NetRoot + _this.m_ServerUrl + "10008.php";
            http.Request(url, function (data) {
                Utils_1.default.CCLog("RankGetUserList data", data);
                if (data.length > 0) {
                    if (data[0].pid == "40002") {
                        reject("RankGetUserList errMsg" + data[0].desc);
                    }
                    else {
                        var rankData = {
                            SelfInfo: {},
                            UserList: [],
                            User_Count_All: 0,
                        };
                        for (var index = 0; index < data.length; index++) {
                            // Utils.CCLog('RankGetUserList', data[index]);
                            if (!Utils_1.default.IsNull(data[index].user_info)) {
                                data[index].user_info.user_name = Utils_1.default.Unicode_To_Str(data[index].user_info.user_name);
                                data[index].user_info.user_head_url = Utils_1.default.Unicode_To_Str(data[index].user_info.user_head_url);
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
            }, function (errMsg) {
                reject("RankGetUserList errMsg" + errMsg);
            });
        });
    };
    /**
     * 清除指定排行榜数据
     * 慎重使用
     *
     */
    RankManage.prototype.RankRemoveData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //如果没有appid则不上传数据
            if (Utils_1.default.IsNull(_this.m_Rank_AppID) || Utils_1.default.IsNull(_this.m_Rank_Channel)) {
                reject("appid is null");
            }
            var http = new Http_1.default();
            http.AddParam("pid", "10009");
            http.AddParam("appid", _this.m_Rank_AppID);
            http.AddParam("channel", _this.m_Rank_Channel);
            http.AddParam("rank_name", _this.m_Rank_Name);
            var url = _this.m_NetRoot + _this.m_ServerUrl + "10009.php";
            http.Request(url, function (data) {
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
            }, function (errMsg) {
                // Utils.CCLog("RankRemoveData errMsg" + errMsg);
                reject("RankRemoveData errMsg" + errMsg);
            });
        });
    };
    //----------------排行榜end-----------------------------------------
    /**
     * 字符串转Unicode编码
     * @param {string} _str
     *
     */
    RankManage.prototype.Str_To_Unicode = function (_str) {
        var unid = '\\u';
        for (var i = 0, len = _str.length; i < len; i++) {
            if (i < len - 1) {
                unid += _str.charCodeAt(i).toString(16) + '\\u';
            }
            else if (i === len - 1) {
                unid += _str.charCodeAt(i).toString(16);
            }
        }
        // console.log("Str_To_Unicode", unid);
        return unid;
    };
    return RankManage;
}());
exports.default = RankManage;

cc._RF.pop();