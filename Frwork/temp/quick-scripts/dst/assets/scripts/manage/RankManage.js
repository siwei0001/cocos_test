
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manage/RankManage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZS9SYW5rTWFuYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW1DO0FBQ25DLHNDQUFpQztBQUVqQywyQ0FBc0M7QUFFdEM7SUFXSTs7T0FFRztJQUNIO1FBVlEsY0FBUyxHQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUk7UUFDNUIsZ0JBQVcsR0FBVyxtQ0FBbUMsQ0FBQyxDQUFDLFNBQVM7UUFFcEUsaUJBQVksR0FBVyxXQUFXLENBQUMsQ0FBQyxVQUFVO1FBQzlDLG1CQUFjLEdBQVcsUUFBUSxDQUFDLENBQUMsT0FBTztRQUMxQyxnQkFBVyxHQUFXLDZCQUE2QixDQUFDLENBQUMsT0FBTztJQU1wRSxDQUFDO0lBRWEsc0JBQVcsR0FBekI7UUFDSSx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyxDQUFBO1FBQ3JELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDZCQUFRLEdBQWYsVUFBZ0IsUUFBZ0I7UUFDNUIsTUFBTTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksa0NBQWEsR0FBcEI7UUFBQSxpQkFvQkM7UUFuQkcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLElBQUksSUFBSSxHQUFHLElBQUksY0FBSSxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDOUIsSUFBSSxHQUFHLEdBQUcsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxVQUFD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QUNQLENBQUM7SUFDRCxpRUFBaUU7SUFDakU7Ozs7T0FJRztJQUNLLG1DQUFjLEdBQXRCLFVBQXVCLElBQVk7UUFDL0IsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRTtnQkFDYixJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ25EO2lCQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMzQztTQUNKO1FBQ0QsdUNBQXVDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxpQkFBQztBQUFELENBcmJBLEFBcWJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vdXRpbHMvSHR0cFwiO1xuaW1wb3J0IHsgQmFzZUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWcvQmFzZUNvbmZpZ1wiO1xuaW1wb3J0IFNhdmVNYW5hZ2UgZnJvbSBcIi4vU2F2ZU1hbmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rTWFuYWdlIHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUmFua01hbmFnZTtcblxuICAgIHByaXZhdGUgbV9OZXRSb290OiBzdHJpbmcgPSBcIlwiOyAvL+Wfn+WQjVxuICAgIHByaXZhdGUgbV9TZXJ2ZXJVcmw6IHN0cmluZyA9IFwiL3pqc2VydmVyL3pqcmFuay96anJhbmsvcHJvdG9jb2wvXCI7IC8v5o6S6KGM5qac6K+35rGC572R5Z2AXG5cbiAgICBwcml2YXRlIG1fUmFua19BcHBJRDogc3RyaW5nID0gXCJ6amtqX3F0d3pcIjsgLy/mjpLooYzmppxhcHBpZFxuICAgIHByaXZhdGUgbV9SYW5rX0NoYW5uZWw6IHN0cmluZyA9IFwid2VpeGluXCI7IC8v5o6S6KGM5qac5rig6YGTXG4gICAgcHJpdmF0ZSBtX1JhbmtfTmFtZTogc3RyaW5nID0gXCJxdHd6X3Jhbmtfd2VpeGluXzIwMjAwMTEzMDFcIjsgLy/mjpLooYzmppzlkI3lrZdcblxuICAgIC8qKlxuICAgICAqIOaehOmAoOWHveaVsFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogUmFua01hbmFnZSB7XG4gICAgICAgIC8vIOWmguaenCBpbnN0YW5jZSDmmK/kuIDkuKrlrp7kvosg55u05o6l6L+U5Zue77yMICDlpoLmnpzkuI3mmK8g5a6e5L6L5YyW5ZCO6L+U5ZueXG4gICAgICAgIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyBSYW5rTWFuYWdlKCkpXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluaOkuihjOamnFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBfbmV0Um9vdFxuICAgICAqIFxuICAgICAqL1xuICAgIHB1YmxpYyBJbml0UmFuayhfbmV0Um9vdDogc3RyaW5nKSB7XG4gICAgICAgIC8v6K6w5b2V5Z+f5ZCNXG4gICAgICAgIHRoaXMubV9OZXRSb290ID0gX25ldFJvb3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5pyN5Yqh5Zmo5pe26Ze0XG4gICAgICogRGF0YU1hbmFnZS5nZXRJbnN0YW5jZSgpLkdldFNlcnZlclRpbWUoKS50aGVuKCh0aW1lKT0+e1xuICAgICAqICAgICAgVXRpbHMuQ0NMb2coJ0dldFNlcnZlclRpbWUgdGltZScsIHRpbWUpO1xuICAgICAqICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAqICAgICAgVXRpbHMuQ0NMb2coJ0dldFNlcnZlclRpbWUgZXJyJywgZXJyKTtcbiAgICAgKiAgfSlcbiAgICAgKi9cbiAgICBwdWJsaWMgR2V0U2VydmVyVGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBodHRwID0gbmV3IEh0dHAoKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJwaWRcIiwgXCIxMDAwMVwiKTtcbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLm1fTmV0Um9vdCArIHRoaXMubV9TZXJ2ZXJVcmwgKyBcIjEwMDAxLnBocFwiO1xuICAgICAgICAgICAgaHR0cC5SZXF1ZXN0KHVybCwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVswXS5waWQgPT0gXCIzMDAwMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YVswXS50aW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YVswXS5waWQgPT0gXCI0MDAwMlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgnR2V0U2VydmVyVGltZSBlcnJNc2cnICsgZGF0YVswXS5kZXNjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAoZXJyTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVXRpbHMuQ0NMb2coJ0dldFNlcnZlclRpbWUgZXJyTXNnJyArIGVyck1zZyk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVyck1zZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LiK5Lyg546p5a625LqR5a2Y5qGjXG4gICAgICovXG4gICAgVXBsb2FkVXNlckNsb3VkU3RvcmFnZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8v5aaC5p6c5rKh5pyJYXBwaWTliJnkuI3kuIrkvKDmlbDmja5cbiAgICAgICAgICAgIGlmIChVdGlscy5Jc051bGwodGhpcy5tX1JhbmtfQXBwSUQpKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiYXBwaWQgaXMgbnVsbFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHVzZXJOYW1lID0gdGhpcy5TdHJfVG9fVW5pY29kZShKU09OLnN0cmluZ2lmeShTYXZlTWFuYWdlLmdldEluc3RhbmNlKCkuR2V0VXNlck5hbWUoKSkpO1xuICAgICAgICAgICAgbGV0IHVzZXJIZWFkVXJsID0gdGhpcy5TdHJfVG9fVW5pY29kZShKU09OLnN0cmluZ2lmeShTYXZlTWFuYWdlLmdldEluc3RhbmNlKCkuR2V0SGVhZEljb24oKSkpO1xuXG4gICAgICAgICAgICBsZXQgaHR0cCA9IG5ldyBIdHRwKCk7XG4gICAgICAgICAgICBodHRwLkFkZFBhcmFtKFwicGlkXCIsIFwiMTAwMDNcIik7XG4gICAgICAgICAgICBodHRwLkFkZFBhcmFtKFwiYXBwaWRcIiwgdGhpcy5tX1JhbmtfQXBwSUQpO1xuICAgICAgICAgICAgaHR0cC5BZGRQYXJhbShcImNoYW5uZWxcIiwgdGhpcy5tX1JhbmtfQ2hhbm5lbCk7XG4gICAgICAgICAgICBodHRwLkFkZFBhcmFtKFwidWlkXCIsIFNhdmVNYW5hZ2UuZ2V0SW5zdGFuY2UoKS5HZXRVc2VyVVVJRCgpKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJ1c2VyX25hbWVcIiwgdXNlck5hbWUpO1xuICAgICAgICAgICAgaHR0cC5BZGRQYXJhbShcInVzZXJfaGVhZF91cmxcIiwgdXNlckhlYWRVcmwpO1xuICAgICAgICAgICAgLy8gaHR0cC5BZGRQYXJhbShcInVzZXJfc2NvcmVcIiwgU2F2ZU1hbmFnZS5nZXRJbnN0YW5jZSgpLkdldE1heFNjb3JlKCkpO1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5tX05ldFJvb3QgKyB0aGlzLm1fU2VydmVyVXJsICsgXCIxMDAwMy5waHBcIjtcblxuICAgICAgICAgICAgaHR0cC5SZXF1ZXN0KHVybCwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVswXS5waWQgPT0gXCIzMDAwMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFV0aWxzLkNDTG9nKFwiVXBsb2FkVXNlckNsb3VkRGF0YSBva1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShcIlVwbG9hZFVzZXJDbG91ZERhdGEgb2tcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGFbMF0ucGlkID09IFwiNDAwMDJcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBVdGlscy5DQ0xvZyhcIlJlbW92ZVVzZXJDbG91ZFN0b3JhZ2UgZXJyTXNnXCIgKyBkYXRhWzBdLmRlc2MpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJSZW1vdmVVc2VyQ2xvdWRTdG9yYWdlIGVyck1zZ1wiICsgZGF0YVswXS5kZXNjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFV0aWxzLkNDTG9nKFwiVXBsb2FkVXNlckNsb3VkRGF0YSBlcnJNc2dcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAoZXJyTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVXRpbHMuQ0NMb2coXCJVcGxvYWRVc2VyQ2xvdWREYXRhIGVyck1zZ1wiLCBlcnJNc2cpO1xuICAgICAgICAgICAgICAgIHJlamVjdChcIlVwbG9hZFVzZXJDbG91ZERhdGEgZXJyTXNnXCIgKyBlcnJNc2cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LiL5ouJ546p5a625LqR5a2Y5qGjXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IF91dWlkIOeOqeWutnV1aWQg6buY6K6k5ouJ5Y+W6Ieq5bex55qE5pWw5o2uXG4gICAgICogXG4gICAgICovXG4gICAgR2V0VXNlckNsb3VkU3RvcmFnZShfdXVpZCA9ICdzZWxmdXVpZCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8v5aaC5p6c5rKh5pyJYXBwaWTliJnkuI3kuIrkvKDmlbDmja5cbiAgICAgICAgICAgIGlmIChVdGlscy5Jc051bGwodGhpcy5tX1JhbmtfQXBwSUQpKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiYXBwaWQgaXMgbnVsbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBodHRwID0gbmV3IEh0dHAoKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJwaWRcIiwgXCIxMDAwNFwiKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJhcHBpZFwiLCB0aGlzLm1fUmFua19BcHBJRCk7XG4gICAgICAgICAgICBodHRwLkFkZFBhcmFtKFwiY2hhbm5lbFwiLCB0aGlzLm1fUmFua19DaGFubmVsKTtcbiAgICAgICAgICAgIGlmIChfdXVpZCA9PSAnc2VsZnV1aWQnKSB7XG4gICAgICAgICAgICAgICAgaHR0cC5BZGRQYXJhbShcInVpZFwiLCBTYXZlTWFuYWdlLmdldEluc3RhbmNlKCkuR2V0VXNlclVVSUQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBodHRwLkFkZFBhcmFtKFwidWlkXCIsIF91dWlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMubV9OZXRSb290ICsgdGhpcy5tX1NlcnZlclVybCArIFwiMTAwMDQucGhwXCI7XG5cbiAgICAgICAgICAgIGh0dHAuUmVxdWVzdCh1cmwsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVXRpbHMuQ0NMb2coXCJHZXRVc2VyQ2xvdWRTdG9yYWdlIGRhdGFcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFbMF0ucGlkID09IFwiMjAwMDJcIikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhWzBdLnVzZXJfbmFtZSA9IFV0aWxzLlVuaWNvZGVfVG9fU3RyKGRhdGFbMF0udXNlcl9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVswXS51c2VyX2hlYWRfdXJsID0gVXRpbHMuVW5pY29kZV9Ub19TdHIoZGF0YVswXS51c2VyX2hlYWRfdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YVswXS5waWQgPT0gXCI0MDAwMlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkdldFVzZXJDbG91ZFN0b3JhZ2UgZXJyTXNnXCIgKyBkYXRhWzBdLmRlc2MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIChlcnJNc2cpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJHZXRVc2VyQ2xvdWRTdG9yYWdlIGVyck1zZ1wiICsgZXJyTXNnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4hemZpOeOqeWutuS/oeaBr1xuICAgICAqIOaFjumHjeS9v+eUqFxuICAgICAqL1xuICAgIFJlbW92ZVVzZXJDbG91ZFN0b3JhZ2UoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvL+WmguaenOayoeaciWFwcGlk5YiZ5LiN5LiK5Lyg5pWw5o2uXG4gICAgICAgICAgICBpZiAoVXRpbHMuSXNOdWxsKHRoaXMubV9SYW5rX0FwcElEKSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChcImFwcGlkIGlzIG51bGxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaHR0cCA9IG5ldyBIdHRwKCk7XG4gICAgICAgICAgICBodHRwLkFkZFBhcmFtKFwicGlkXCIsIFwiMTAwMTBcIik7XG4gICAgICAgICAgICBodHRwLkFkZFBhcmFtKFwiYXBwaWRcIiwgdGhpcy5tX1JhbmtfQXBwSUQpO1xuICAgICAgICAgICAgaHR0cC5BZGRQYXJhbShcImNoYW5uZWxcIiwgdGhpcy5tX1JhbmtfQ2hhbm5lbCk7XG4gICAgICAgICAgICBodHRwLkFkZFBhcmFtKFwidWlkXCIsIFNhdmVNYW5hZ2UuZ2V0SW5zdGFuY2UoKS5HZXRVc2VyVVVJRCgpKTtcblxuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMubV9OZXRSb290ICsgdGhpcy5tX1NlcnZlclVybCArIFwiMTAwMTAucGhwXCI7XG5cbiAgICAgICAgICAgIGh0dHAuUmVxdWVzdCh1cmwsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFbMF0ucGlkID09IFwiMzAwMDFcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBVdGlscy5DQ0xvZyhcIlJlbW92ZVVzZXJDbG91ZFN0b3JhZ2Ugb2tcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoXCJSZW1vdmVVc2VyQ2xvdWRTdG9yYWdlIG9rXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhWzBdLnBpZCA9PSBcIjQwMDAyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMuQ0NMb2coXCJSZW1vdmVVc2VyQ2xvdWRTdG9yYWdlIGVyck1zZ1wiICsgZGF0YVswXS5kZXNjKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiUmVtb3ZlVXNlckNsb3VkU3RvcmFnZSBlcnJNc2dcIiArIGRhdGFbMF0uZGVzYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBVdGlscy5DQ0xvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIChlcnJNc2cpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBVdGlscy5DQ0xvZyhcIlJlbW92ZVVzZXJDbG91ZFN0b3JhZ2UgZXJyTXNnXCIgKyBlcnJNc2cpO1xuICAgICAgICAgICAgICAgIHJlamVjdChcIlJlbW92ZVVzZXJDbG91ZFN0b3JhZ2UgZXJyTXNnXCIgKyBlcnJNc2cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LiK5Lyg546p5a625o6S6KGM5qac5YiG5pWwXG4gICAgICog5YiG5pWw5Lul5pyA5ZCO5LiA5qyh5LiK5Lyg5Li65YeGXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IF9zY29yZSDmjpLlkI3kvp3mja5cbiAgICAgKi9cbiAgICBSYW5rVXBsb2FkVXNlclNjb3JlKF9zY29yZTogbnVtYmVyID0gMCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy/lpoLmnpzmsqHmnIlhcHBpZOWImeS4jeS4iuS8oOaVsOaNrlxuICAgICAgICAgICAgaWYgKFV0aWxzLklzTnVsbCh0aGlzLm1fUmFua19BcHBJRCkgfHwgVXRpbHMuSXNOdWxsKHRoaXMubV9SYW5rX05hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiYXBwaWQgaXMgbnVsbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBodHRwID0gbmV3IEh0dHAoKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJwaWRcIiwgXCIxMDAwNVwiKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJhcHBpZFwiLCB0aGlzLm1fUmFua19BcHBJRCk7XG4gICAgICAgICAgICBodHRwLkFkZFBhcmFtKFwiY2hhbm5lbFwiLCB0aGlzLm1fUmFua19DaGFubmVsKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJ1aWRcIiwgU2F2ZU1hbmFnZS5nZXRJbnN0YW5jZSgpLkdldFVzZXJVVUlEKCkpO1xuICAgICAgICAgICAgaHR0cC5BZGRQYXJhbShcInJhbmtfbmFtZVwiLCB0aGlzLm1fUmFua19OYW1lKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJyYW5rX3Njb3JlXCIsIFwiXCIgKyBfc2NvcmUpO1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5tX05ldFJvb3QgKyB0aGlzLm1fU2VydmVyVXJsICsgXCIxMDAwNS5waHBcIjtcblxuICAgICAgICAgICAgaHR0cC5SZXF1ZXN0KHVybCwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVswXS5waWQgPT0gXCIzMDAwMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFV0aWxzLkNDTG9nKFwiUmFua1VwbG9hZFVzZXJTY29yZSBva1wiICsgZGF0YVswXS5kZXNjKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShcIlJhbmtVcGxvYWRVc2VyU2NvcmUgb2tcIiArIGRhdGFbMF0uZGVzYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGFbMF0ucGlkID09IFwiNDAwMDJcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBVdGlscy5DQ0xvZyhcIlJhbmtVcGxvYWRVc2VyU2NvcmUgZXJyTXNnXCIgKyBkYXRhWzBdLmRlc2MpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJSYW5rVXBsb2FkVXNlclNjb3JlIGVyck1zZ1wiICsgZGF0YVswXS5kZXNjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFV0aWxzLkNDTG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgKGVyck1zZykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFV0aWxzLkNDTG9nKFwiUmFua1VwbG9hZFVzZXJTY29yZSBlcnJNc2dcIiArIGVyck1zZyk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiUmFua1VwbG9hZFVzZXJTY29yZSBlcnJNc2dcIiArIGVyck1zZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkuIrkvKDnjqnlrrbmjpLooYzmppzmlbDmja5cbiAgICAgKiDliIbmlbDku6XmnIDpq5jliIbkuLrlh4ZcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gX3Njb3JlIOaOkuWQjeS+neaNrlxuICAgICAqL1xuICAgIFJhbmtVcGxvYWRVc2VyTWF4U2NvcmUoX3Njb3JlID0gMCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy/lpoLmnpzmsqHmnIlhcHBpZOWImeS4jeS4iuS8oOaVsOaNrlxuICAgICAgICAgICAgaWYgKFV0aWxzLklzTnVsbCh0aGlzLm1fUmFua19BcHBJRCkgfHwgVXRpbHMuSXNOdWxsKHRoaXMubV9SYW5rX05hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiYXBwaWQgaXMgbnVsbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBodHRwID0gbmV3IEh0dHAoKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJwaWRcIiwgXCIxMDAwNlwiKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJhcHBpZFwiLCB0aGlzLm1fUmFua19BcHBJRCk7XG4gICAgICAgICAgICBodHRwLkFkZFBhcmFtKFwiY2hhbm5lbFwiLCB0aGlzLm1fUmFua19DaGFubmVsKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJ1aWRcIiwgU2F2ZU1hbmFnZS5nZXRJbnN0YW5jZSgpLkdldFVzZXJVVUlEKCkpO1xuICAgICAgICAgICAgaHR0cC5BZGRQYXJhbShcInJhbmtfbmFtZVwiLCB0aGlzLm1fUmFua19OYW1lKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJyYW5rX3Njb3JlXCIsIFwiXCIgKyBfc2NvcmUpO1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5tX05ldFJvb3QgKyB0aGlzLm1fU2VydmVyVXJsICsgXCIxMDAwNi5waHBcIjtcblxuICAgICAgICAgICAgaHR0cC5SZXF1ZXN0KHVybCwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVswXS5waWQgPT0gXCIzMDAwMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFV0aWxzLkNDTG9nKFwiUmFua1VwbG9hZFVzZXJNYXhTY29yZSBva1wiICsgZGF0YVswXS5kZXNjKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShcIlJhbmtVcGxvYWRVc2VyTWF4U2NvcmUgb2tcIiArIGRhdGFbMF0uZGVzYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGFbMF0ucGlkID09IFwiNDAwMDJcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBVdGlscy5DQ0xvZyhcIlJhbmtVcGxvYWRVc2VyTWF4U2NvcmUgZXJyTXNnXCIgKyBkYXRhWzBdLmRlc2MpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJSYW5rVXBsb2FkVXNlck1heFNjb3JlIGVyck1zZ1wiICsgZGF0YVswXS5kZXNjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFV0aWxzLkNDTG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgKGVyck1zZykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFV0aWxzLkNDTG9nKFwiUmFua1VwbG9hZFVzZXJNYXhTY29yZSBlcnJNc2dcIiArIGVyck1zZyk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiUmFua1VwbG9hZFVzZXJNYXhTY29yZSBlcnJNc2dcIiArIGVyck1zZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bnjqnlrrblnKjmjpLooYzmppzlhoXnmoTmlbDmja5cbiAgICAgKi9cbiAgICBSYW5rR2V0VXNlckRhdGEoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvL+WmguaenOayoeaciWFwcGlk5YiZ5LiN5LiK5Lyg5pWw5o2uXG4gICAgICAgICAgICBpZiAoVXRpbHMuSXNOdWxsKHRoaXMubV9SYW5rX0FwcElEKSB8fCBVdGlscy5Jc051bGwodGhpcy5tX1JhbmtfQ2hhbm5lbCkpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJhcHBpZCBpcyBudWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGh0dHAgPSBuZXcgSHR0cCgpO1xuICAgICAgICAgICAgaHR0cC5BZGRQYXJhbShcInBpZFwiLCBcIjEwMDA3XCIpO1xuICAgICAgICAgICAgaHR0cC5BZGRQYXJhbShcImFwcGlkXCIsIHRoaXMubV9SYW5rX0FwcElEKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJjaGFubmVsXCIsIHRoaXMubV9SYW5rX0NoYW5uZWwpO1xuICAgICAgICAgICAgaHR0cC5BZGRQYXJhbShcInVpZFwiLCBTYXZlTWFuYWdlLmdldEluc3RhbmNlKCkuR2V0VXNlclVVSUQoKSk7XG4gICAgICAgICAgICBodHRwLkFkZFBhcmFtKFwicmFua19uYW1lXCIsIHRoaXMubV9SYW5rX05hbWUpO1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5tX05ldFJvb3QgKyB0aGlzLm1fU2VydmVyVXJsICsgXCIxMDAwNy5waHBcIjtcblxuICAgICAgICAgICAgaHR0cC5SZXF1ZXN0KHVybCwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBVdGlscy5DQ0xvZyhcIkdldFVzZXJDbG91ZFN0b3JhZ2UgZGF0YVwiLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVswXS5waWQgPT0gXCIyMDAwM1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghVXRpbHMuSXNOdWxsKGRhdGFbMF0udXNlcl9pbmZvKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVswXS51c2VyX2luZm8udXNlcl9uYW1lID0gVXRpbHMuVW5pY29kZV9Ub19TdHIoZGF0YVswXS51c2VyX2luZm8udXNlcl9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbMF0udXNlcl9pbmZvLnVzZXJfaGVhZF91cmwgPSBVdGlscy5Vbmljb2RlX1RvX1N0cihkYXRhWzBdLnVzZXJfaW5mby51c2VyX2hlYWRfdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YVswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGFbMF0ucGlkID09IFwiNDAwMDJcIikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJHZXRVc2VyQ2xvdWRTdG9yYWdlIGVyck1zZ1wiICsgZGF0YVswXS5kZXNjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAoZXJyTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiR2V0VXNlckNsb3VkU3RvcmFnZSBlcnJNc2dcIiArIGVyck1zZylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmjpLooYzmppznlKjmiLfliJfooahcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gX3Jhbmtfc3RhcnQg5o6S5ZCN5byA5aeL55qE5Zyw5pa5XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IF9yYW5rX2VuZCAg5o6S5ZCN57uT5p2f55qE5Zyw5pa5XG4gICAgICogXG4gICAgICovXG4gICAgUmFua0dldFVzZXJMaXN0KF9yYW5rX3N0YXJ0ID0gMSwgX3JhbmtfZW5kID0gMjApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8v5aaC5p6c5rKh5pyJYXBwaWTliJnkuI3kuIrkvKDmlbDmja5cbiAgICAgICAgICAgIGlmIChVdGlscy5Jc051bGwodGhpcy5tX1JhbmtfQXBwSUQpIHx8IFV0aWxzLklzTnVsbCh0aGlzLm1fUmFua19DaGFubmVsKSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChcImFwcGlkIGlzIG51bGxcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBodHRwID0gbmV3IEh0dHAoKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJwaWRcIiwgXCIxMDAwOFwiKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJhcHBpZFwiLCB0aGlzLm1fUmFua19BcHBJRCk7XG4gICAgICAgICAgICBodHRwLkFkZFBhcmFtKFwiY2hhbm5lbFwiLCB0aGlzLm1fUmFua19DaGFubmVsKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJ1aWRcIiwgU2F2ZU1hbmFnZS5nZXRJbnN0YW5jZSgpLkdldFVzZXJVVUlEKCkpO1xuICAgICAgICAgICAgaHR0cC5BZGRQYXJhbShcInJhbmtfbmFtZVwiLCB0aGlzLm1fUmFua19OYW1lKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJyYW5rX3N0YXJ0XCIsIFwiXCIgKyBfcmFua19zdGFydCk7XG4gICAgICAgICAgICBodHRwLkFkZFBhcmFtKFwicmFua19lbmRcIiwgXCJcIiArIF9yYW5rX2VuZCk7XG5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLm1fTmV0Um9vdCArIHRoaXMubV9TZXJ2ZXJVcmwgKyBcIjEwMDA4LnBocFwiO1xuXG4gICAgICAgICAgICBodHRwLlJlcXVlc3QodXJsLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIFV0aWxzLkNDTG9nKFwiUmFua0dldFVzZXJMaXN0IGRhdGFcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVswXS5waWQgPT0gXCI0MDAwMlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJSYW5rR2V0VXNlckxpc3QgZXJyTXNnXCIgKyBkYXRhWzBdLmRlc2MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFua0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZkluZm86IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJMaXN0OiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyX0NvdW50X0FsbDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXRpbHMuQ0NMb2coJ1JhbmtHZXRVc2VyTGlzdCcsIGRhdGFbaW5kZXhdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghVXRpbHMuSXNOdWxsKGRhdGFbaW5kZXhdLnVzZXJfaW5mbykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF0udXNlcl9pbmZvLnVzZXJfbmFtZSA9IFV0aWxzLlVuaWNvZGVfVG9fU3RyKGRhdGFbaW5kZXhdLnVzZXJfaW5mby51c2VyX25hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XS51c2VyX2luZm8udXNlcl9oZWFkX3VybCA9IFV0aWxzLlVuaWNvZGVfVG9fU3RyKGRhdGFbaW5kZXhdLnVzZXJfaW5mby51c2VyX2hlYWRfdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpbmRleF0ucGlkID09IFwiMjAwMDRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5rRGF0YS5Vc2VyTGlzdC5wdXNoKGRhdGFbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YVtpbmRleF0ucGlkID09IFwiMjAwMDNcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5rRGF0YS5TZWxmSW5mbyA9IGRhdGFbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhW2luZGV4XS5waWQgPT0gXCIyMDAwNVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtEYXRhLlVzZXJfQ291bnRfQWxsID0gZGF0YVtpbmRleF0udXNlcl9jb3VudF9hbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJhbmtEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiUmFua0dldFVzZXJMaXN0IGVycm9cIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCAoZXJyTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiUmFua0dldFVzZXJMaXN0IGVyck1zZ1wiICsgZXJyTXNnKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5riF6Zmk5oyH5a6a5o6S6KGM5qac5pWw5o2uXG4gICAgICog5oWO6YeN5L2/55SoXG4gICAgICogXG4gICAgICovXG4gICAgUmFua1JlbW92ZURhdGEoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvL+WmguaenOayoeaciWFwcGlk5YiZ5LiN5LiK5Lyg5pWw5o2uXG4gICAgICAgICAgICBpZiAoVXRpbHMuSXNOdWxsKHRoaXMubV9SYW5rX0FwcElEKSB8fCBVdGlscy5Jc051bGwodGhpcy5tX1JhbmtfQ2hhbm5lbCkpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJhcHBpZCBpcyBudWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGh0dHAgPSBuZXcgSHR0cCgpO1xuICAgICAgICAgICAgaHR0cC5BZGRQYXJhbShcInBpZFwiLCBcIjEwMDA5XCIpO1xuICAgICAgICAgICAgaHR0cC5BZGRQYXJhbShcImFwcGlkXCIsIHRoaXMubV9SYW5rX0FwcElEKTtcbiAgICAgICAgICAgIGh0dHAuQWRkUGFyYW0oXCJjaGFubmVsXCIsIHRoaXMubV9SYW5rX0NoYW5uZWwpO1xuICAgICAgICAgICAgaHR0cC5BZGRQYXJhbShcInJhbmtfbmFtZVwiLCB0aGlzLm1fUmFua19OYW1lKTtcblxuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMubV9OZXRSb290ICsgdGhpcy5tX1NlcnZlclVybCArIFwiMTAwMDkucGhwXCI7XG5cbiAgICAgICAgICAgIGh0dHAuUmVxdWVzdCh1cmwsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFbMF0ucGlkID09IFwiMzAwMDFcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBVdGlscy5DQ0xvZyhcIlJhbmtSZW1vdmVEYXRhIG9rXCIgKyBkYXRhWzBdLmRlc2MpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFwiUmFua1JlbW92ZURhdGEgb2tcIiArIGRhdGFbMF0uZGVzYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGFbMF0ucGlkID09IFwiNDAwMDJcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBVdGlscy5DQ0xvZyhcIlJhbmtSZW1vdmVEYXRhIGVyck1zZ1wiICsgZGF0YVswXS5kZXNjKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiUmFua1JlbW92ZURhdGEgZXJyTXNnXCIgKyBkYXRhWzBdLmRlc2MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXRpbHMuQ0NMb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAoZXJyTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVXRpbHMuQ0NMb2coXCJSYW5rUmVtb3ZlRGF0YSBlcnJNc2dcIiArIGVyck1zZyk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiUmFua1JlbW92ZURhdGEgZXJyTXNnXCIgKyBlcnJNc2cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS3mjpLooYzmppxlbmQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKlxuICAgICAqIOWtl+espuS4sui9rFVuaWNvZGXnvJbnoIFcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3N0clxuICAgICAqIFxuICAgICAqL1xuICAgIHByaXZhdGUgU3RyX1RvX1VuaWNvZGUoX3N0cjogc3RyaW5nKSB7XG4gICAgICAgIHZhciB1bmlkID0gJ1xcXFx1JztcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IF9zdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDwgbGVuIC0gMSkge1xuICAgICAgICAgICAgICAgIHVuaWQgKz0gX3N0ci5jaGFyQ29kZUF0KGkpLnRvU3RyaW5nKDE2KSArICdcXFxcdSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IGxlbiAtIDEpIHtcbiAgICAgICAgICAgICAgICB1bmlkICs9IF9zdHIuY2hhckNvZGVBdChpKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTdHJfVG9fVW5pY29kZVwiLCB1bmlkKTtcbiAgICAgICAgcmV0dXJuIHVuaWQ7XG4gICAgfVxufVxuIl19