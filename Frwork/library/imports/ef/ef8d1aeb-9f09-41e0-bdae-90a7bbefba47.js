"use strict";
cc._RF.push(module, 'ef8d1rrnwlB4L2ukKe777pH', 'DataManage');
// scripts/manage/DataManage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../utils/Utils");
var Http_1 = require("../utils/Http");
var BaseConfig_1 = require("../config/BaseConfig");
// /**
// * 网络配置文件列表
// */
// export var NetJson = {
//     Game_Level_Config_Json: "game_level_config.json",
//     Game_SignIn_Config_Json: "game_signin_config.json",
//     Game_Item_Config_Json: "game_item_config.json",
//     Game_Treasurechest_Config_Json: "game_treasurechest_config.json",
// }
/**
* 本地配置文件列表
*/
exports.ResJson = {
    Game_Level_Config_Json: "game_level_config.json",
    Game_Map_Config_Json: "game_map_config.json",
};
var DataManage = /** @class */ (function () {
    /**
     * 构造函数
     */
    function DataManage() {
        this.m_JsonData = new Map();
    }
    DataManage.getInstance = function () {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new DataManage());
        return this._instance;
    };
    /**
     * 加载远程json文件 多文件形式
     * @param {Function} _callFun
     * @param {string} _netUrl
     * @param {...any} _jsonFile
     */
    DataManage.prototype.LoadNetJson = function (_callFun, _netUrl) {
        var _this = this;
        var _jsonFile = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _jsonFile[_i - 2] = arguments[_i];
        }
        Utils_1.default.CCLog('LoadNetJson', _jsonFile);
        var fileCount = _jsonFile.length;
        var arrLoadSuccess = new Array();
        var _loop_1 = function (i) {
            var fileName = _jsonFile[i];
            if (fileName != '') {
                var objJson = this_1.m_JsonData.get(fileName);
                if (objJson) {
                    arrLoadSuccess.push(fileName);
                    if (arrLoadSuccess.length == fileCount) {
                        _callFun("success", arrLoadSuccess.length);
                    }
                    else {
                        _callFun("loading " + fileName, arrLoadSuccess.length);
                    }
                    return "continue";
                }
                var http = new Http_1.default();
                http.SetReqType(Http_1.HttpReqType.GET);
                http.Request(_netUrl + fileName, function (data) {
                    Utils_1.default.CCLog('LoadNetJson succes', data);
                    _this.m_JsonData.set(fileName, data);
                    arrLoadSuccess.push(fileName);
                    if (arrLoadSuccess.length == fileCount) {
                        _callFun("success", arrLoadSuccess.length);
                    }
                    else {
                        _callFun("loading " + fileName, arrLoadSuccess.length);
                    }
                }, function (err) {
                    Utils_1.default.CCLog('LoadNetJson err', err);
                });
            }
        };
        var this_1 = this;
        for (var i = 0; i < fileCount; i++) {
            _loop_1(i);
        }
    };
    /**
     * 加载远程json文件 数组形式
     * @param {Function} _callFun
     * @param {string} _netUrl
     * @param {Array<string>} _jsonFile
     */
    DataManage.prototype.LoadNetJsonArray = function (_callFun, _netUrl, _jsonFileArray) {
        var _this = this;
        Utils_1.default.CCLog('LoadNetJson', _jsonFileArray);
        var fileCount = _jsonFileArray.length;
        var arrLoadSuccess = new Array();
        var _loop_2 = function (i) {
            var fileName = _jsonFileArray[i];
            if (fileName != '') {
                var objJson = this_2.m_JsonData.get(fileName);
                if (objJson) {
                    arrLoadSuccess.push(fileName);
                    if (arrLoadSuccess.length == fileCount) {
                        _callFun("success", arrLoadSuccess.length);
                    }
                    else {
                        _callFun("loading " + fileName, arrLoadSuccess.length);
                    }
                    return "continue";
                }
                var http = new Http_1.default();
                http.SetReqType(Http_1.HttpReqType.GET);
                http.Request(_netUrl + fileName, function (data) {
                    Utils_1.default.CCLog('LoadNetJsonArray succes', data);
                    _this.m_JsonData.set(fileName, data);
                    arrLoadSuccess.push(fileName);
                    if (arrLoadSuccess.length == fileCount) {
                        _callFun("success", arrLoadSuccess.length);
                    }
                    else {
                        _callFun("loading " + fileName, arrLoadSuccess.length);
                    }
                }, function (err) {
                    Utils_1.default.CCLog('LoadNetJsonArray err', err);
                });
            }
        };
        var this_2 = this;
        for (var i = 0; i < fileCount; i++) {
            _loop_2(i);
        }
    };
    /**
     * 加载本地json文件 多文件形式
     * @param {Function} _callFun
     * @param {string} _pathUrl
     * @param {...any} _jsonFile
     */
    DataManage.prototype.LoadResJson = function (_callFun, _pathUrl) {
        var _this = this;
        var _jsonFile = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _jsonFile[_i - 2] = arguments[_i];
        }
        Utils_1.default.CCLog('LoadResJson', _jsonFile);
        var fileCount = _jsonFile.length;
        var arrLoadSuccess = new Array();
        var _loop_3 = function (i) {
            var fileName = _jsonFile[i];
            if (fileName != '') {
                var objJson = this_3.m_JsonData.get(fileName);
                if (objJson) {
                    arrLoadSuccess.push(fileName);
                    if (arrLoadSuccess.length == fileCount) {
                        _callFun("success", arrLoadSuccess.length);
                    }
                    else {
                        _callFun("loading " + fileName, arrLoadSuccess.length);
                    }
                    return "continue";
                }
                cc.loader.loadRes(_pathUrl + fileName, cc.JsonAsset, function (err, data) {
                    if (err) {
                        Utils_1.default.CCLog('loadRes err', err);
                        return;
                    }
                    Utils_1.default.CCLog("LoadResJson ", _pathUrl + fileName, "data", data);
                    _this.m_JsonData.set(fileName, data.json);
                    arrLoadSuccess.push(fileName);
                    if (arrLoadSuccess.length == fileCount) {
                        _callFun("success", arrLoadSuccess.length);
                    }
                    else {
                        _callFun("loading " + fileName, arrLoadSuccess.length);
                    }
                });
            }
        };
        var this_3 = this;
        for (var i = 0; i < fileCount; i++) {
            _loop_3(i);
        }
    };
    /**
     * 返回对应json的数据
     * @param {string} _keyName
     */
    DataManage.prototype.GetJson = function (_keyName) {
        return this.m_JsonData.get(_keyName);
    };
    /**
     * 返回对应 id 某一行的数据
     * @param {string} _keyName
     * @param {any} _id
     *
     */
    DataManage.prototype.GetJsonVaule = function (_keyName, _id) {
        var json = this.m_JsonData.get(_keyName);
        for (var index = 0; index < json.length; index++) {
            var data = json[index];
            if (data.ID == _id) {
                return data;
            }
        }
        return null;
    };
    /**
     * 初始化json数据
     * @param {Function} _callFun
     */
    DataManage.prototype.InitJsonData = function (_callFun) {
        var _this = this;
        var url = BaseConfig_1.BaseConfig.NetConfig.NetRoot + BaseConfig_1.BaseConfig.NetConfig.NetRes;
        //加载json
        this.LoadNetJson(function (state, res) {
            //配置资源加载完成
            if (state == "success") {
                if (_callFun) {
                    Utils_1.default.CCLog("this.m_JsonData", _this.m_JsonData);
                    _callFun();
                }
            }
        }, url + "json/", exports.ResJson.Game_Level_Config_Json, exports.ResJson.Game_Map_Config_Json);
    };
    return DataManage;
}());
exports.default = DataManage;

cc._RF.pop();