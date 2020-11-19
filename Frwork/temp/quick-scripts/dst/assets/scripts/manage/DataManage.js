
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manage/DataManage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZS9EYXRhTWFuYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW1DO0FBQ25DLHNDQUFrRDtBQUNsRCxtREFBa0Q7QUFFbEQsTUFBTTtBQUNOLGFBQWE7QUFDYixLQUFLO0FBQ0wseUJBQXlCO0FBQ3pCLHdEQUF3RDtBQUN4RCwwREFBMEQ7QUFDMUQsc0RBQXNEO0FBQ3RELHdFQUF3RTtBQUN4RSxJQUFJO0FBRUo7O0VBRUU7QUFDUyxRQUFBLE9BQU8sR0FBRztJQUNqQixzQkFBc0IsRUFBRSx3QkFBd0I7SUFDaEQsb0JBQW9CLEVBQUUsc0JBQXNCO0NBQy9DLENBQUE7QUFFRDtJQU1JOztPQUVHO0lBQ0g7UUFMUSxlQUFVLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7SUFNakQsQ0FBQztJQUVhLHNCQUFXLEdBQXpCO1FBQ0ksdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQTtRQUNyRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDekIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsZ0NBQVcsR0FBWCxVQUFZLFFBQWtCLEVBQUUsT0FBZTtRQUEvQyxpQkFzQ0M7UUF0Q2dELG1CQUFZO2FBQVosVUFBWSxFQUFaLHFCQUFZLEVBQVosSUFBWTtZQUFaLGtDQUFZOztRQUN6RCxlQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN0QyxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ2pDLElBQUksY0FBYyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7Z0NBRXhCLENBQUM7WUFDTixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxRQUFRLElBQUksRUFBRSxFQUFFO2dCQUVo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LENBQUM7SUFFTCxpQkFBQztBQUFELENBM01BLEFBMk1DLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgSHR0cCwgeyBIdHRwUmVxVHlwZSB9IGZyb20gXCIuLi91dGlscy9IdHRwXCI7XG5pbXBvcnQgeyBCYXNlQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZy9CYXNlQ29uZmlnXCI7XG5cbi8vIC8qKlxuLy8gKiDnvZHnu5zphY3nva7mlofku7bliJfooahcbi8vICovXG4vLyBleHBvcnQgdmFyIE5ldEpzb24gPSB7XG4vLyAgICAgR2FtZV9MZXZlbF9Db25maWdfSnNvbjogXCJnYW1lX2xldmVsX2NvbmZpZy5qc29uXCIsXG4vLyAgICAgR2FtZV9TaWduSW5fQ29uZmlnX0pzb246IFwiZ2FtZV9zaWduaW5fY29uZmlnLmpzb25cIixcbi8vICAgICBHYW1lX0l0ZW1fQ29uZmlnX0pzb246IFwiZ2FtZV9pdGVtX2NvbmZpZy5qc29uXCIsXG4vLyAgICAgR2FtZV9UcmVhc3VyZWNoZXN0X0NvbmZpZ19Kc29uOiBcImdhbWVfdHJlYXN1cmVjaGVzdF9jb25maWcuanNvblwiLFxuLy8gfVxuXG4vKipcbiog5pys5Zyw6YWN572u5paH5Lu25YiX6KGoXG4qL1xuZXhwb3J0IHZhciBSZXNKc29uID0ge1xuICAgIEdhbWVfTGV2ZWxfQ29uZmlnX0pzb246IFwiZ2FtZV9sZXZlbF9jb25maWcuanNvblwiLFxuICAgIEdhbWVfTWFwX0NvbmZpZ19Kc29uOiBcImdhbWVfbWFwX2NvbmZpZy5qc29uXCIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFNYW5hZ2Uge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBEYXRhTWFuYWdlO1xuXG4gICAgcHJpdmF0ZSBtX0pzb25EYXRhOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xuXG4gICAgLyoqXG4gICAgICog5p6E6YCg5Ye95pWwXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBEYXRhTWFuYWdlIHtcbiAgICAgICAgLy8g5aaC5p6cIGluc3RhbmNlIOaYr+S4gOS4quWunuS+iyDnm7TmjqXov5Tlm57vvIwgIOWmguaenOS4jeaYryDlrp7kvovljJblkI7ov5Tlm55cbiAgICAgICAgdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IERhdGFNYW5hZ2UoKSlcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L296L+c56iLanNvbuaWh+S7tiDlpJrmlofku7blvaLlvI9cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBfY2FsbEZ1biBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX25ldFVybCBcbiAgICAgKiBAcGFyYW0gey4uLmFueX0gX2pzb25GaWxlIFxuICAgICAqL1xuICAgIExvYWROZXRKc29uKF9jYWxsRnVuOiBGdW5jdGlvbiwgX25ldFVybDogc3RyaW5nLCAuLi5fanNvbkZpbGUpIHtcbiAgICAgICAgVXRpbHMuQ0NMb2coJ0xvYWROZXRKc29uJywgX2pzb25GaWxlKTtcbiAgICAgICAgbGV0IGZpbGVDb3VudCA9IF9qc29uRmlsZS5sZW5ndGg7XG4gICAgICAgIGxldCBhcnJMb2FkU3VjY2VzcyA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmaWxlTmFtZSA9IF9qc29uRmlsZVtpXTtcbiAgICAgICAgICAgIGlmIChmaWxlTmFtZSAhPSAnJykge1xuXG4gICAgICAgICAgICAgICAgbGV0IG9iakpzb24gPSB0aGlzLm1fSnNvbkRhdGEuZ2V0KGZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAob2JqSnNvbikge1xuICAgICAgICAgICAgICAgICAgICBhcnJMb2FkU3VjY2Vzcy5wdXNoKGZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyckxvYWRTdWNjZXNzLmxlbmd0aCA9PSBmaWxlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jYWxsRnVuKFwic3VjY2Vzc1wiLCBhcnJMb2FkU3VjY2Vzcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NhbGxGdW4oXCJsb2FkaW5nIFwiICsgZmlsZU5hbWUsIGFyckxvYWRTdWNjZXNzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGh0dHAgPSBuZXcgSHR0cCgpO1xuICAgICAgICAgICAgICAgIGh0dHAuU2V0UmVxVHlwZShIdHRwUmVxVHlwZS5HRVQpO1xuICAgICAgICAgICAgICAgIGh0dHAuUmVxdWVzdChfbmV0VXJsICsgZmlsZU5hbWUsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLkNDTG9nKCdMb2FkTmV0SnNvbiBzdWNjZXMnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX0pzb25EYXRhLnNldChmaWxlTmFtZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGFyckxvYWRTdWNjZXNzLnB1c2goZmlsZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyTG9hZFN1Y2Nlc3MubGVuZ3RoID09IGZpbGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NhbGxGdW4oXCJzdWNjZXNzXCIsIGFyckxvYWRTdWNjZXNzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY2FsbEZ1bihcImxvYWRpbmcgXCIgKyBmaWxlTmFtZSwgYXJyTG9hZFN1Y2Nlc3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMuQ0NMb2coJ0xvYWROZXRKc29uIGVycicsIGVycik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9vei/nOeoi2pzb27mlofku7Yg5pWw57uE5b2i5byPXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gX2NhbGxGdW4gXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF9uZXRVcmwgXG4gICAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBfanNvbkZpbGUgXG4gICAgICovXG4gICAgTG9hZE5ldEpzb25BcnJheShfY2FsbEZ1bjogRnVuY3Rpb24sIF9uZXRVcmw6IHN0cmluZywgX2pzb25GaWxlQXJyYXk6IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgVXRpbHMuQ0NMb2coJ0xvYWROZXRKc29uJywgX2pzb25GaWxlQXJyYXkpO1xuICAgICAgICBsZXQgZmlsZUNvdW50ID0gX2pzb25GaWxlQXJyYXkubGVuZ3RoO1xuICAgICAgICBsZXQgYXJyTG9hZFN1Y2Nlc3MgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZmlsZU5hbWUgPSBfanNvbkZpbGVBcnJheVtpXTtcbiAgICAgICAgICAgIGlmIChmaWxlTmFtZSAhPSAnJykge1xuXG4gICAgICAgICAgICAgICAgbGV0IG9iakpzb24gPSB0aGlzLm1fSnNvbkRhdGEuZ2V0KGZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAob2JqSnNvbikge1xuICAgICAgICAgICAgICAgICAgICBhcnJMb2FkU3VjY2Vzcy5wdXNoKGZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyckxvYWRTdWNjZXNzLmxlbmd0aCA9PSBmaWxlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jYWxsRnVuKFwic3VjY2Vzc1wiLCBhcnJMb2FkU3VjY2Vzcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NhbGxGdW4oXCJsb2FkaW5nIFwiICsgZmlsZU5hbWUsIGFyckxvYWRTdWNjZXNzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBodHRwID0gbmV3IEh0dHAoKTtcbiAgICAgICAgICAgICAgICBodHRwLlNldFJlcVR5cGUoSHR0cFJlcVR5cGUuR0VUKTtcbiAgICAgICAgICAgICAgICBodHRwLlJlcXVlc3QoX25ldFVybCArIGZpbGVOYW1lLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBVdGlscy5DQ0xvZygnTG9hZE5ldEpzb25BcnJheSBzdWNjZXMnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX0pzb25EYXRhLnNldChmaWxlTmFtZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGFyckxvYWRTdWNjZXNzLnB1c2goZmlsZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyTG9hZFN1Y2Nlc3MubGVuZ3RoID09IGZpbGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NhbGxGdW4oXCJzdWNjZXNzXCIsIGFyckxvYWRTdWNjZXNzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY2FsbEZ1bihcImxvYWRpbmcgXCIgKyBmaWxlTmFtZSwgYXJyTG9hZFN1Y2Nlc3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMuQ0NMb2coJ0xvYWROZXRKc29uQXJyYXkgZXJyJywgZXJyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L295pys5ZywanNvbuaWh+S7tiDlpJrmlofku7blvaLlvI9cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBfY2FsbEZ1biBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3BhdGhVcmwgXG4gICAgICogQHBhcmFtIHsuLi5hbnl9IF9qc29uRmlsZSBcbiAgICAgKi9cbiAgICBMb2FkUmVzSnNvbihfY2FsbEZ1bjogRnVuY3Rpb24sIF9wYXRoVXJsOiBzdHJpbmcsIC4uLl9qc29uRmlsZSkge1xuICAgICAgICBVdGlscy5DQ0xvZygnTG9hZFJlc0pzb24nLCBfanNvbkZpbGUpO1xuICAgICAgICBsZXQgZmlsZUNvdW50ID0gX2pzb25GaWxlLmxlbmd0aDtcbiAgICAgICAgbGV0IGFyckxvYWRTdWNjZXNzID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGZpbGVOYW1lID0gX2pzb25GaWxlW2ldO1xuICAgICAgICAgICAgaWYgKGZpbGVOYW1lICE9ICcnKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgb2JqSnNvbiA9IHRoaXMubV9Kc29uRGF0YS5nZXQoZmlsZU5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChvYmpKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyckxvYWRTdWNjZXNzLnB1c2goZmlsZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyTG9hZFN1Y2Nlc3MubGVuZ3RoID09IGZpbGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NhbGxGdW4oXCJzdWNjZXNzXCIsIGFyckxvYWRTdWNjZXNzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY2FsbEZ1bihcImxvYWRpbmcgXCIgKyBmaWxlTmFtZSwgYXJyTG9hZFN1Y2Nlc3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhfcGF0aFVybCArIGZpbGVOYW1lLCBjYy5Kc29uQXNzZXQsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuQ0NMb2coJ2xvYWRSZXMgZXJyJywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBVdGlscy5DQ0xvZyhcIkxvYWRSZXNKc29uIFwiLCBfcGF0aFVybCArIGZpbGVOYW1lLCBcImRhdGFcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9Kc29uRGF0YS5zZXQoZmlsZU5hbWUsIGRhdGEuanNvbik7XG4gICAgICAgICAgICAgICAgICAgIGFyckxvYWRTdWNjZXNzLnB1c2goZmlsZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyTG9hZFN1Y2Nlc3MubGVuZ3RoID09IGZpbGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NhbGxGdW4oXCJzdWNjZXNzXCIsIGFyckxvYWRTdWNjZXNzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY2FsbEZ1bihcImxvYWRpbmcgXCIgKyBmaWxlTmFtZSwgYXJyTG9hZFN1Y2Nlc3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57lr7nlupRqc29u55qE5pWw5o2uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF9rZXlOYW1lIFxuICAgICAqL1xuICAgIEdldEpzb24oX2tleU5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5tX0pzb25EYXRhLmdldChfa2V5TmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5a+55bqUIGlkIOafkOS4gOihjOeahOaVsOaNrlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBfa2V5TmFtZSBcbiAgICAgKiBAcGFyYW0ge2FueX0gX2lkIFxuICAgICAqIFxuICAgICAqL1xuICAgIEdldEpzb25WYXVsZShfa2V5TmFtZTogc3RyaW5nLCBfaWQ6IGFueSkge1xuXG4gICAgICAgIGxldCBqc29uID0gdGhpcy5tX0pzb25EYXRhLmdldChfa2V5TmFtZSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBqc29uLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBqc29uW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChkYXRhLklEID09IF9pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyWanNvbuaVsOaNrlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IF9jYWxsRnVuIFxuICAgICAqL1xuICAgIEluaXRKc29uRGF0YShfY2FsbEZ1bjogRnVuY3Rpb24pIHtcbiAgICAgICAgbGV0IHVybCA9IEJhc2VDb25maWcuTmV0Q29uZmlnLk5ldFJvb3QgKyBCYXNlQ29uZmlnLk5ldENvbmZpZy5OZXRSZXM7XG4gICAgICAgIC8v5Yqg6L29anNvblxuICAgICAgICB0aGlzLkxvYWROZXRKc29uKChzdGF0ZSwgcmVzKSA9PiB7XG4gICAgICAgICAgICAvL+mFjee9rui1hOa6kOWKoOi9veWujOaIkFxuICAgICAgICAgICAgaWYgKHN0YXRlID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jYWxsRnVuKSB7XG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLkNDTG9nKFwidGhpcy5tX0pzb25EYXRhXCIsIHRoaXMubV9Kc29uRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIF9jYWxsRnVuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB1cmwgKyBcImpzb24vXCIsXG4gICAgICAgICAgICBSZXNKc29uLkdhbWVfTGV2ZWxfQ29uZmlnX0pzb24sXG4gICAgICAgICAgICBSZXNKc29uLkdhbWVfTWFwX0NvbmZpZ19Kc29uXG4gICAgICAgIClcbiAgICB9XG5cbn1cbiJdfQ==