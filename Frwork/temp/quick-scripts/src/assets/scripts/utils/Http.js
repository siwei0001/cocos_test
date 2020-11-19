"use strict";
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