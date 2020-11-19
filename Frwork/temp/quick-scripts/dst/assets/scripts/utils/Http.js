
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/Http.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'afb5cah2N1OiLSGyeQMRD0X', 'Http');
// scripts/utils/Http.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  http 基础请求类封装
 *
 * 示例：
 *
 * 更新：
 *
 */
var Utils_1 = require("./Utils");
var HttpReqType;
(function (HttpReqType) {
    HttpReqType[HttpReqType["GET"] = 10001] = "GET";
    HttpReqType[HttpReqType["POST"] = 10002] = "POST";
    HttpReqType[HttpReqType["DELETE"] = 10003] = "DELETE";
})(HttpReqType = exports.HttpReqType || (exports.HttpReqType = {}));
;
var Http = /** @class */ (function () {
    /**
     * 初始化
     */
    function Http() {
        this.m_data = new Map(); // 请求的参数数据
        this.m_ReqType = HttpReqType.POST; // 请求类型， 默认为 POST ，可以手动设置成 GET 方式请求
        Utils_1.default.CCLog("Http constructor");
    }
    /**
     * 增加一个提交参数
     * @param {string} _key
     * @param {string} _value
     */
    Http.prototype.AddParam = function (_key, _value) {
        this.m_data.set(_key, _value);
    };
    /**
     * 设置请求类型
     * @param {HttpReqType} _value
     */
    Http.prototype.SetReqType = function (_reqType) {
        this.m_ReqType = _reqType;
    };
    /**
    * 发送一个请求
    * @param {string} _url  设置请求响应的URL, 例如： http://xxxx/xxx.php
    *
    * @param {Function} _cbSuccess 请求成功回调函数，函数格式：success(data)
    * @param {Function} _cbFail 请求失败回调函数 ,函数格式： fail(_info)
    *
    * @param {number} _retry 超时重连次数(超时默认3次重连机制)
    * @param {number} _timeout 超时时间,单位：毫秒 （超时重连机制，优化网络异常情况出现）
    */
    Http.prototype.Request = function (_url, _cbSuccess, _cbFail, _retry, _timeout) {
        var _this = this;
        if (_retry === void 0) { _retry = 3; }
        if (_timeout === void 0) { _timeout = 1000; }
        // 发送请求数据转换为字符串， 格式：pid=10003&appid=cycckhlb&appChannel=weixin
        var postData = "";
        this.m_data.forEach(function (value, key, mapObj) {
            if (postData != "") {
                postData += '&&';
            }
            postData += (key + '=' + value);
        });
        var xmlHttp = new XMLHttpRequest(); // 网络访问句柄  
        xmlHttp.timeout = _timeout; // 超时时间，单位是毫秒
        // 设置处理响应的回调函数
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && (xmlHttp.status >= 200 && xmlHttp.status < 400)) {
                if (_cbSuccess) {
                    _cbSuccess(JSON.parse(xmlHttp.responseText)); // 返回请求结果
                    return;
                }
            }
        };
        xmlHttp.ontimeout = function () {
            console.error('BaesHttp.Request Timeout!!');
            _retry--;
            if (_retry <= 0) {
                if (_cbFail) {
                    _cbFail("请求超时次数已达上限");
                }
            }
            else {
                console.log("BaesHttp.Request fail", _this);
                _this.Request(_url, _cbSuccess, _cbFail, _retry, _timeout);
            }
        };
        // console.log("BaesHttp.Request postData="+postData);
        if (this.m_ReqType == HttpReqType.GET) {
            xmlHttp.open("GET", _url + "?" + postData, true);
            xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlHttp.send();
        }
        else if (this.m_ReqType == HttpReqType.DELETE) {
            xmlHttp.open("DELETE", _url, true);
            xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlHttp.send(postData);
        }
        else {
            xmlHttp.open("POST", _url, true); // 设置以POST方式发送请求，并打开连接
            xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            // xmlHttp.send("pid=10003&appid=cycckhlb&appChannel=weixin");
            xmlHttp.send(postData);
        }
    };
    return Http;
}());
exports.default = Http;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL0h0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7OztHQU9HO0FBQ0gsaUNBQTRCO0FBRzVCLElBQVksV0FJWDtBQUpELFdBQVksV0FBVztJQUNuQiwrQ0FBVyxDQUFBO0lBQ1gsaURBQUksQ0FBQTtJQUNKLHFEQUFNLENBQUE7QUFDVixDQUFDLEVBSlcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFJdEI7QUFBQSxDQUFDO0FBRUY7SUFLSTs7T0FFRztJQUNIO1FBTlEsV0FBTSxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsVUFBVTtRQUNuRCxjQUFTLEdBQWdCLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxtQ0FBbUM7UUFNbEYsZUFBSyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHRDs7OztPQUlHO0lBQ0gsdUJBQVEsR0FBUixVQUFTLElBQVksRUFBRSxNQUFjO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gseUJBQVUsR0FBVixVQUFXLFFBQXFCO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7Ozs7Ozs7O01BU0U7SUFDRixzQkFBTyxHQUFQLFVBQVEsSUFBWSxFQUFFLFVBQW9CLEVBQUUsT0FBaUIsRUFBRSxNQUFrQixFQUFFLFFBQXVCO1FBQTFHLGlCQXVEQztRQXZEOEQsdUJBQUEsRUFBQSxVQUFrQjtRQUFFLHlCQUFBLEVBQUEsZUFBdUI7UUFFdEcsOERBQThEO1FBQzlELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTTtZQUM1QyxJQUFJLFFBQVEsSUFBSSxFQUFFLEVBQUU7Z0JBQ2hCLFFBQVEsSUFBSSxJQUFJLENBQUM7YUFDcEI7WUFDRCxRQUFRLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQyxDQUFTLFdBQVc7UUFDdkQsT0FBTyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxhQUFhO1FBRXpDLGNBQWM7UUFDZCxPQUFPLENBQUMsa0JBQWtCLEdBQUc7WUFDekIsSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUU7Z0JBQzVFLElBQUksVUFBVSxFQUFFO29CQUNaLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUUsU0FBUztvQkFDeEQsT0FBTztpQkFDVjthQUNKO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsT0FBTyxDQUFDLFNBQVMsR0FBRztZQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDNUMsTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxPQUFPLEVBQUU7b0JBQ1QsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUN6QjthQUNKO2lCQUNJO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsS0FBSSxDQUFDLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzdEO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsc0RBQXNEO1FBQ3RELElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksR0FBRyxHQUFHLEdBQUcsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztZQUM5RSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbEI7YUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUMzQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1lBQzlFLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUI7YUFDSTtZQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFFLHNCQUFzQjtZQUN6RCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7WUFDOUUsOERBQThEO1lBQzlELE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUwsV0FBQztBQUFELENBakdBLEFBaUdDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogIGh0dHAg5Z+656GA6K+35rGC57G75bCB6KOFXG4gKiBcbiAqIOekuuS+i++8mlxuICpcbiAqIOabtOaWsO+8mlxuICogIFxuICovXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCBCYXNlUGxhdGZvcm0gZnJvbSBcIi4uL3BsYXRmb3JtL0Jhc2VQbGF0Zm9ybVwiO1xuXG5leHBvcnQgZW51bSBIdHRwUmVxVHlwZSB7XG4gICAgR0VUID0gMTAwMDEsXG4gICAgUE9TVCxcbiAgICBERUxFVEUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwIHtcblxuICAgIHByaXZhdGUgbV9kYXRhOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcCgpOyAvLyDor7fmsYLnmoTlj4LmlbDmlbDmja5cbiAgICBwcml2YXRlIG1fUmVxVHlwZTogSHR0cFJlcVR5cGUgPSBIdHRwUmVxVHlwZS5QT1NUOyAvLyDor7fmsYLnsbvlnovvvIwg6buY6K6k5Li6IFBPU1Qg77yM5Y+v5Lul5omL5Yqo6K6+572u5oiQIEdFVCDmlrnlvI/or7fmsYJcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMllxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBVdGlscy5DQ0xvZyhcIkh0dHAgY29uc3RydWN0b3JcIik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDlop7liqDkuIDkuKrmj5DkuqTlj4LmlbBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX2tleSBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3ZhbHVlIFxuICAgICAqL1xuICAgIEFkZFBhcmFtKF9rZXk6IHN0cmluZywgX3ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tX2RhdGEuc2V0KF9rZXksIF92YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572u6K+35rGC57G75Z6LXG4gICAgICogQHBhcmFtIHtIdHRwUmVxVHlwZX0gX3ZhbHVlIFxuICAgICAqL1xuICAgIFNldFJlcVR5cGUoX3JlcVR5cGU6IEh0dHBSZXFUeXBlKSB7XG4gICAgICAgIHRoaXMubV9SZXFUeXBlID0gX3JlcVR5cGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDlj5HpgIHkuIDkuKror7fmsYJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBfdXJsICDorr7nva7or7fmsYLlk43lupTnmoRVUkwsIOS+i+Wmgu+8miBodHRwOi8veHh4eC94eHgucGhwXG4gICAgKiBcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IF9jYlN1Y2Nlc3Mg6K+35rGC5oiQ5Yqf5Zue6LCD5Ye95pWw77yM5Ye95pWw5qC85byP77yac3VjY2VzcyhkYXRhKVxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gX2NiRmFpbCDor7fmsYLlpLHotKXlm57osIPlh73mlbAgLOWHveaVsOagvOW8j++8miBmYWlsKF9pbmZvKVxuICAgICogICAgICBcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBfcmV0cnkg6LaF5pe26YeN6L+e5qyh5pWwKOi2heaXtum7mOiupDPmrKHph43ov57mnLrliLYpXG4gICAgKiBAcGFyYW0ge251bWJlcn0gX3RpbWVvdXQg6LaF5pe25pe26Ze0LOWNleS9je+8muavq+enkiDvvIjotoXml7bph43ov57mnLrliLbvvIzkvJjljJbnvZHnu5zlvILluLjmg4XlhrXlh7rnjrDvvIlcbiAgICAqL1xuICAgIFJlcXVlc3QoX3VybDogc3RyaW5nLCBfY2JTdWNjZXNzOiBGdW5jdGlvbiwgX2NiRmFpbDogRnVuY3Rpb24sIF9yZXRyeTogbnVtYmVyID0gMywgX3RpbWVvdXQ6IG51bWJlciA9IDEwMDApIHtcblxuICAgICAgICAvLyDlj5HpgIHor7fmsYLmlbDmja7ovazmjaLkuLrlrZfnrKbkuLLvvIwg5qC85byP77yacGlkPTEwMDAzJmFwcGlkPWN5Y2NraGxiJmFwcENoYW5uZWw9d2VpeGluXG4gICAgICAgIGxldCBwb3N0RGF0YSA9IFwiXCI7XG4gICAgICAgIHRoaXMubV9kYXRhLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXksIG1hcE9iaikge1xuICAgICAgICAgICAgaWYgKHBvc3REYXRhICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBwb3N0RGF0YSArPSAnJiYnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zdERhdGEgKz0gKGtleSArICc9JyArIHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHhtbEh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgICAgICAgICAvLyDnvZHnu5zorr/pl67lj6Xmn4QgIFxuICAgICAgICB4bWxIdHRwLnRpbWVvdXQgPSBfdGltZW91dDsgLy8g6LaF5pe25pe26Ze077yM5Y2V5L2N5piv5q+r56eSXG5cbiAgICAgICAgLy8g6K6+572u5aSE55CG5ZON5bqU55qE5Zue6LCD5Ye95pWwXG4gICAgICAgIHhtbEh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHhtbEh0dHAucmVhZHlTdGF0ZSA9PSA0ICYmICh4bWxIdHRwLnN0YXR1cyA+PSAyMDAgJiYgeG1sSHR0cC5zdGF0dXMgPCA0MDApKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jYlN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgX2NiU3VjY2VzcyhKU09OLnBhcnNlKHhtbEh0dHAucmVzcG9uc2VUZXh0KSk7ICAvLyDov5Tlm57or7fmsYLnu5PmnpxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB4bWxIdHRwLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0JhZXNIdHRwLlJlcXVlc3QgVGltZW91dCEhJyk7XG4gICAgICAgICAgICBfcmV0cnktLTtcbiAgICAgICAgICAgIGlmIChfcmV0cnkgPD0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChfY2JGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIF9jYkZhaWwoXCLor7fmsYLotoXml7bmrKHmlbDlt7Lovr7kuIrpmZBcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCYWVzSHR0cC5SZXF1ZXN0IGZhaWxcIiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5SZXF1ZXN0KF91cmwsIF9jYlN1Y2Nlc3MsIF9jYkZhaWwsIF9yZXRyeSwgX3RpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQmFlc0h0dHAuUmVxdWVzdCBwb3N0RGF0YT1cIitwb3N0RGF0YSk7XG4gICAgICAgIGlmICh0aGlzLm1fUmVxVHlwZSA9PSBIdHRwUmVxVHlwZS5HRVQpIHtcbiAgICAgICAgICAgIHhtbEh0dHAub3BlbihcIkdFVFwiLCBfdXJsICsgXCI/XCIgKyBwb3N0RGF0YSwgdHJ1ZSk7XG4gICAgICAgICAgICB4bWxIdHRwLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgICAgICB4bWxIdHRwLnNlbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm1fUmVxVHlwZSA9PSBIdHRwUmVxVHlwZS5ERUxFVEUpIHtcbiAgICAgICAgICAgIHhtbEh0dHAub3BlbihcIkRFTEVURVwiLCBfdXJsLCB0cnVlKTtcbiAgICAgICAgICAgIHhtbEh0dHAuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICAgICAgICAgIHhtbEh0dHAuc2VuZChwb3N0RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB4bWxIdHRwLm9wZW4oXCJQT1NUXCIsIF91cmwsIHRydWUpOyAgLy8g6K6+572u5LulUE9TVOaWueW8j+WPkemAgeivt+axgu+8jOW5tuaJk+W8gOi/nuaOpVxuICAgICAgICAgICAgeG1sSHR0cC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgICAgICAgICAgLy8geG1sSHR0cC5zZW5kKFwicGlkPTEwMDAzJmFwcGlkPWN5Y2NraGxiJmFwcENoYW5uZWw9d2VpeGluXCIpO1xuICAgICAgICAgICAgeG1sSHR0cC5zZW5kKHBvc3REYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19