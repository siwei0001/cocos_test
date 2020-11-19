
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/base/BaseLayer');
require('./assets/scripts/config/BaseConfig');
require('./assets/scripts/manage/AudioManage');
require('./assets/scripts/manage/DataManage');
require('./assets/scripts/manage/GameManage');
require('./assets/scripts/manage/MenuManage');
require('./assets/scripts/manage/NodePoolManage');
require('./assets/scripts/manage/RankManage');
require('./assets/scripts/manage/SaveManage');
require('./assets/scripts/platform/BasePlatform');
require('./assets/scripts/scenes/BaseDemo');
require('./assets/scripts/scenes/Debug');
require('./assets/scripts/ui/GamePlayMenu');
require('./assets/scripts/ui/MainMenu');
require('./assets/scripts/ui/PopMenu');
require('./assets/scripts/ui/ResultMenu');
require('./assets/scripts/utils/BaseMd5');
require('./assets/scripts/utils/Http');
require('./assets/scripts/utils/Utils');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'abec2tvRuxH3adlKKcC8Omb', 'Utils');
// scripts/utils/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
    * 输出log
    */
    Utils.CCLog = function () {
        var _custome = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _custome[_i] = arguments[_i];
        }
        if (Utils.m_ShowLog) {
            console.log.apply(console, _custome);
        }
    };
    /**
     * 计数输出log
     */
    Utils.CCLogCount = function () {
        var _custome = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _custome[_i] = arguments[_i];
        }
        console.count.apply(console, _custome);
    };
    /**
     * 输出跟踪
     */
    Utils.CCLogTrace = function () {
        var _custome = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _custome[_i] = arguments[_i];
        }
        console.trace.apply(console, _custome);
    };
    /**
     * 分组输出log
     */
    Utils.CCLogGroup = function () {
        var _custome = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _custome[_i] = arguments[_i];
        }
        console.group.apply(console, _custome);
    };
    /**
     * 分组结束输出log
     */
    Utils.CCLogGroupEnd = function () {
        var _custome = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _custome[_i] = arguments[_i];
        }
        console.groupEnd.apply(console, _custome);
    };
    /**
     * 时间输出log
     */
    Utils.CCLogTime = function () {
        var _custome = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _custome[_i] = arguments[_i];
        }
        console.time.apply(console, _custome);
    };
    /**
     * 时间结束输出log
     */
    Utils.CCLogTimeEnd = function () {
        var _custome = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _custome[_i] = arguments[_i];
        }
        console.timeEnd.apply(console, _custome);
    };
    /**
     * 输出错误
     */
    Utils.CCLogError = function () {
        var _custome = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _custome[_i] = arguments[_i];
        }
        console.error.apply(console, _custome);
    };
    /**
     * 输出警告
     */
    Utils.CCLogWarn = function () {
        var _custome = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _custome[_i] = arguments[_i];
        }
        console.warn.apply(console, _custome);
    };
    /**
     * 清理输出log
     */
    Utils.CCLogClear = function () {
        console.clear();
    };
    /**
     * 返回一个随机数
     * @param {number} _min
     * @param {number} _max
     * 返回一个整数
     */
    Utils.RandNum = function (_min, _max) {
        if (_max < _min) {
            return Math.round(_max) + Math.round(Math.random() * (_min - _max));
        }
        else if (_max === _min) {
            return Math.round(_min);
        }
        else {
            return Math.round(_min) + Math.round(Math.random() * (_max - _min));
        }
    };
    /**
     * 返回一个随机数
     * @param {number} _min
     * @param {number} _max
     * 返回一个浮点数
     */
    Utils.Randnumber = function (_min, _max) {
        if (_max < _min) {
            return _max + Math.random() * (_min - _max);
        }
        else if (_max === _min) {
            return _min;
        }
        else {
            return _min + Math.random() * (_max - _min);
        }
    };
    /**
     * 返回一个随机弧度
     * 范围(-π,+π)
     * 返回一个浮点数
     */
    Utils.RandRadian = function () {
        return Math.random() > 0.5 ? Math.random() % Math.PI : -Math.random() % Math.PI;
    };
    /**
     * 判读对象是否为空
     * @param {object} _arr
     */
    Utils.IsNull = function (_value) {
        if (_value === null ||
            _value === "" ||
            _value === "null" ||
            _value === "Null" ||
            _value === "NULL" ||
            _value === undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * 深度拷贝对象
     * @param {object} obj
     */
    Utils.CloneObj = function (obj) {
        var newObj = {};
        if (obj instanceof Array) {
            newObj = [];
        }
        for (var key in obj) {
            var val = obj[key];
            if (val === null) {
                newObj[key] = null;
            }
            else {
                newObj[key] = typeof val === 'object' ? this.CloneObj(val) : val;
            }
        }
        return newObj;
    };
    /**
     * 返回一个唯一的uuid
     *
     */
    Utils.GetUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    /**
     * 返回一个字符串对应字节的长度的片段
     * @param {string} _str
     * @param {number} _bytes
     *
     */
    Utils.GetStringCutOut = function (_str, _bytes) {
        if (_bytes === void 0) { _bytes = 10; }
        var result = "";
        if (_str == null) {
            return result;
        }
        var len = 0;
        for (var i = 0; i < _str.length; i++) {
            if (_str.charCodeAt(i) > 127 || _str.charCodeAt(i) == 94) {
                len += 2;
            }
            else {
                len++;
            }
            if (len <= _bytes) {
                result += _str.charAt(i);
            }
        }
        if (result.length < _str.length) {
            result += "...";
        }
        // Utils.CCLog("GetStringTrim result",result);
        return result;
    };
    /**
     * 返回字符串根据 字符 分割数组
     * @param {string} _str
     * @param {string} _key
     */
    Utils.GetStringToArray = function (_arr, _key) {
        if (_key === void 0) { _key = ';'; }
        if (Utils.IsNull(_arr)) {
            return [];
        }
        _arr += "";
        return _arr.split(_key);
    };
    /**
     * 返回弧度对应长度的位置
     * 默认为1长度
     * @param {number} _eadian
     */
    Utils.RadianToVec2 = function (_eadian, _lenght) {
        if (_lenght === void 0) { _lenght = 1; }
        return cc.v2(Math.cos(_eadian) * _lenght, Math.sin(_eadian) * _lenght);
    };
    /**
     * 返回角度对应的弧度
     * @param {number} _angle
     */
    Utils.AngleToRadian = function (_angle) {
        return _angle / 180 * Math.PI; // (_eadian/Math.PI)*180;
    };
    /**
     * 返回弧度对应的角度
     * @param {number} _eadian
     */
    Utils.RadianToAngle = function (_eadian) {
        return (_eadian / Math.PI) * 180;
    };
    /**
     * 返回两个向量的距离
     * @param {cc.Vec2} _vec21
     * @param {cc.Vec2} _vec22
     */
    Utils.Vec2Distance = function (_vec21, _vec22) {
        var out = new cc.Vec2(0, 0);
        out.x = _vec21.x - _vec22.x;
        out.y = _vec21.y - _vec22.y;
        // let length =  Math.sqrt(_vec2.x * _vec2.x + _vec2.y * _vec2.y);
        return Math.sqrt(out.x * out.x + out.y * out.y);
    };
    /**
     * 返回二维向量的减法
     * @param {cc.Vec2} _vec21
     * @param {cc.Vec2} _vec22
     *
     */
    Utils.Vec2Sub = function (_vec21, _vec22) {
        var out = new cc.Vec2(0, 0);
        out.x = _vec21.x - _vec22.x;
        out.y = _vec21.y - _vec22.y;
        return out;
    };
    /**
     * 返回二维向量的弧度
     * @param {cc.Vec2} _vec2
     */
    Utils.Vec2Radian = function (_vec2) {
        return Math.atan2(_vec2.y, _vec2.x);
    };
    /**
     * 返回二维向量的长度
     * @param {cc.Vec2} _vec2
     */
    Utils.Vec2Lenght = function (_vec2) {
        return Math.sqrt(_vec2.x * _vec2.x + _vec2.y * _vec2.y);
    };
    /**
     * 返回二维向量归一化
     * @param {cc.Vec2} _vec2
     */
    Utils.Vec2Normalize = function (_vec2) {
        var out = new cc.Vec2(0, 0);
        var magSqr = _vec2.x * _vec2.x + _vec2.y * _vec2.y;
        if (magSqr === 1.0)
            return _vec2;
        if (magSqr === 0.0) {
            return _vec2;
        }
        var invsqrt = 1.0 / Math.sqrt(magSqr);
        out.x = _vec2.x * invsqrt;
        out.y = _vec2.y * invsqrt;
        return out;
    };
    /**
     * 返回二维向量的缩放
     * @param {cc.Vec2} _vec2
     * @param {Number} _lenght
     *
     */
    Utils.Vec2Mul = function (_vec2, _lenght) {
        var out = new cc.Vec2(0, 0);
        out.x = _vec2.x * _lenght;
        out.y = _vec2.y * _lenght;
        return out;
    };
    /**
     * 将毫秒数转换成时间格式 2019:05:30:10:12:10
     * @param {number} _time
     */
    Utils.GetTimeFormat = function (_time) {
        var now = new Date(_time), y = now.getFullYear(), m = now.getMonth() + 1, d = now.getDate();
        return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
    };
    /**
     * 将秒数转换成时间格式 10:50 秒
     * @param {number} _time
     */
    Utils.GetTimeMinutesSeconds = function (_time) {
        var minutes = Math.floor(_time / 60);
        var seconds = _time - (minutes * 60);
        return (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    };
    /**
     * 将毫秒数转换成时间格式  分钟
     * @param {number} _time
     */
    Utils.GetTimeMinutes = function (_time) {
        return Math.ceil(_time / 60);
    };
    /**
     * 将毫秒数转换成时间格式  天
     * @param {number} _time
     */
    Utils.GetTimeDay = function (_time) {
        return Math.ceil(_time / 1000 / 60 / 60 / 24);
    };
    /**
     * 将毫秒数转换成时间格式  小时
     * @param {number} _time
     */
    Utils.GetTimeHour = function (_time) {
        return Math.ceil(_time / 1000 / 60 / 60);
    };
    /**
     * 返回今天时间 小时
     */
    Utils.GetToDayHour = function () {
        var now = new Date();
        return now.getHours();
    };
    /**
     * 返回今天时间 几分钟
     */
    Utils.GetToDayMinutes = function () {
        var now = new Date();
        return now.getMinutes();
    };
    /**
     * 返回今天周几
     */
    Utils.GetToDayWeek = function () {
        var now = new Date();
        return now.getDay();
    };
    /**
     * 数字字符串相加
     * @param {string} _strA
     * @param {string} _strB
     *
     */
    Utils.StringCalculateSum = function (_strA, _strB) {
        //先判断是否是字符串
        if (typeof _strA !== 'string') {
            _strA = _strA + '';
        }
        if (typeof _strB !== 'string') {
            _strB = _strB + '';
        }
        var raList = _strA.split(''), rbList = _strB.split(''), result = '', count = 0;
        // Utils.CCLog('StringCalculateAddition  raList', raList, 'rbList', rbList);
        while (raList.length || rbList.length || count) {
            // Utils.CCLogCount('StringCalculateSum whiel')
            count += ~~raList.pop() + ~~rbList.pop();
            result = count % 10 + result;
            count = count > 9;
        }
        // Utils.CCLog('StringCalculateSum  raList', raList, 'rbList', rbList, 'result', result);
        return result;
    };
    /**
     * 数字字符串相减
     * @param {string} _strA 被减数
     * @param {string} _strB 减数
     *
     */
    Utils.StringCalculateSub = function (_strA, _strB) {
        //先判断是否是字符串
        if (typeof _strA !== 'string') {
            _strA = _strA + '';
        }
        if (typeof _strB !== 'string') {
            _strB = _strB + '';
        }
        var raList = _strA.split(''), rbList = _strB.split(''), result = '', count = 0, desc = 0;
        if (parseInt(_strA) < parseInt(_strB)) {
            // Utils.CCLog('_strA < _strB');
            var temp = raList;
            raList = rbList;
            rbList = temp;
            desc = -1;
        }
        else if (_strA == _strB) {
            return 0;
        }
        Utils.CCLog('StringCalculateAddition  raList', raList, 'rbList', rbList);
        while (raList.length || rbList.length || count) {
            // Utils.CCLogCount('StringCalculateSub whiel');
            var ad = ~~raList.pop() - ~~rbList.pop() - count;
            Utils.CCLog('ad', ad, 'count', count);
            result = (ad < 0 ? 10 + ad : ad) + result;
            count = ad < 0;
        }
        var relist = result.split('');
        for (var index = 0; index < relist.length; index++) {
            var element = relist[index];
            if (element != 0) {
                relist.splice(0, index);
                break;
            }
            if (index == relist.length - 1) {
                relist.splice(0, relist.length - 1);
                break;
            }
        }
        if (desc == -1) {
            relist.splice(0, 0, '-');
        }
        Utils.CCLog('StringCalculateSub  raList', raList, 'rbList', rbList, 'result', result, 'relist.join', relist.join(''));
        return relist.join('');
    };
    /**
     * 返回换算后的字符串
     * @param {any} _strA
     *
     */
    Utils.StringGetConversionUnit = function (_strA) {
        //先判断是否是字符串
        if (typeof _strA !== 'string') {
            _strA = _strA + '';
        }
        var unitSymbols = ['', 'K', 'M', 'B', 'T', 'Qd', 'Qt', 'Z', 'Y', 'S', 'L', 'X', 'D'], ra = _strA.replace(/(^|\s)\d+/g, function (m) { return m.replace(/(?=(?!\b)(\d{3})+$)/g, ','); }), result = '', desc = 0;
        var splitArray = ra.split(',');
        if (splitArray.length > unitSymbols.length) {
            splitArray.splice(splitArray.length - unitSymbols.length, unitSymbols.length - 1);
            desc = unitSymbols[unitSymbols.length - 2];
        }
        else {
            desc = unitSymbols[splitArray.length - 1];
            splitArray.splice(1, splitArray.length - 2);
        }
        // console.log("splitArray", splitArray);
        // if (Number(splitArray[0]) < 100) {
        //     if (Number(splitArray[0]) < 10) {
        //         if (splitArray[1]) {
        //             splitArray[1] = splitArray[1].slice(0, 2);
        //             // console.log("splitArray[1]",splitArray[1]);
        //             if (Number(splitArray[1][1]) == 0) {
        //                 splitArray[1] = splitArray[1].slice(0, 1);
        //                 if (Number(splitArray[1][0]) == 0) {
        //                     splitArray.pop();
        //                 }
        //             }
        //         }
        //     }
        //     else {
        //         if (splitArray[1]) {
        //             splitArray[1] = splitArray[1].slice(0, 1);
        //             if (Number(splitArray[1][0]) == 0) {
        //                 splitArray.pop();
        //             }
        //         }
        //     }
        // }
        // else {
        //     splitArray.pop();
        // }
        if (splitArray[1]) {
            if (Number(splitArray[0]) < 100) {
                if (Number(splitArray[0]) < 10) {
                    if (splitArray[1]) {
                        splitArray[1] = splitArray[1].slice(0, 2);
                        // console.log("splitArray[1]",splitArray[1]);
                        if (Number(splitArray[1][1]) == 0) {
                            splitArray[1] = splitArray[1].slice(0, 1);
                            if (Number(splitArray[1][0]) == 0) {
                                splitArray.pop();
                            }
                        }
                    }
                }
                else {
                    if (splitArray[1]) {
                        splitArray[1] = splitArray[1].slice(0, 1);
                        if (Number(splitArray[1][0]) == 0) {
                            splitArray.pop();
                        }
                    }
                }
            }
            else {
                splitArray.pop();
            }
        }
        // splitArray[1] = splitArray[1].slice(0, 2);
        // // console.log("splitArray[1]",splitArray[1]);
        // if (Number(splitArray[1][1]) == 0) {
        //     splitArray[1] = splitArray[1].slice(0, 1);
        //     if (Number(splitArray[1][0]) == 0) {
        //         splitArray.pop();
        //     }
        // }
        result = splitArray.join('.') + desc;
        // console.log("result", result);
        // raList.splice(raList.length - unitindex * 3, raList.length - 1);
        // Utils.CCLog('StringGetConversionUnit ra', ra, 'splitArray', splitArray, 'desc', desc);
        return result;
    };
    /**
     * 字符串转Unicode编码
     * @param {string} _str
     *
     */
    Utils.Str_To_Unicode = function (_str) {
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
    /**
     * Unicode编码转字符串
     * @param {string} _unicode
     *
     */
    Utils.Unicode_To_Str = function (_unicode) {
        var result = [];
        var strArr = _unicode.split('\\u');
        for (var i = 2, len = strArr.length - 1; i < len; i++) {
            // console.log("strArr[i]", strArr[i]);
            if (strArr[i]) {
                result.push(String.fromCharCode(parseInt(strArr[i], 16)));
            }
        }
        // console.log("Unicode_To_Str strArr", strArr, "result", result);
        return result.join('');
    };
    /**
     * @param {string} _url 网络请求路径
     */
    Utils.CheckURL = function (_url) {
        var url = new String(_url);
        if (url.startsWith('https://cathome8.com')) {
            return true;
        }
        if (url.startsWith('http://cathome8.com')) {
            return true;
        }
        return false;
    };
    /**
     * @param {string} _url 网络请求路径
     */
    Utils.CheckAppId = function (_appid) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            if (_appid == 'wxdd036799ae4dcd9f') {
                return true;
            }
            return false;
        }
        return true;
    };
    Utils.m_ShowLog = false;
    return Utils;
}());
exports.default = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQTBwQkEsQ0FBQztJQXRwQkc7O01BRUU7SUFDSyxXQUFLLEdBQVo7UUFBYSxrQkFBVzthQUFYLFVBQVcsRUFBWCxxQkFBVyxFQUFYLElBQVc7WUFBWCw2QkFBVzs7UUFDcEIsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLGdCQUFVLEdBQWpCO1FBQWtCLGtCQUFXO2FBQVgsVUFBVyxFQUFYLHFCQUFXLEVBQVgsSUFBVztZQUFYLDZCQUFXOztRQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZ0JBQVUsR0FBakI7UUFBa0Isa0JBQVc7YUFBWCxVQUFXLEVBQVgscUJBQVcsRUFBWCxJQUFXO1lBQVgsNkJBQVc7O1FBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxnQkFBVSxHQUFqQjtRQUFrQixrQkFBVzthQUFYLFVBQVcsRUFBWCxxQkFBVyxFQUFYLElBQVc7WUFBWCw2QkFBVzs7UUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNJLG1CQUFhLEdBQXBCO1FBQXFCLGtCQUFXO2FBQVgsVUFBVyxFQUFYLHFCQUFXLEVBQVgsSUFBVztZQUFYLDZCQUFXOztRQUM1QixPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZUFBUyxHQUFoQjtRQUFpQixrQkFBVzthQUFYLFVBQVcsRUFBWCxxQkFBVyxFQUFYLElBQVc7WUFBWCw2QkFBVzs7UUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7T0FFRztJQUNJLGtCQUFZLEdBQW5CO1FBQW9CLGtCQUFXO2FBQVgsVUFBVyxFQUFYLHFCQUFXLEVBQVgsSUFBVztZQUFYLDZCQUFXOztRQUMzQixPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZ0JBQVUsR0FBakI7UUFBa0Isa0JBQVc7YUFBWCxVQUFXLEVBQVgscUJBQVcsRUFBWCxJQUFXO1lBQVgsNkJBQVc7O1FBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxlQUFTLEdBQWhCO1FBQWlCLGtCQUFXO2FBQVgsVUFBVyxFQUFYLHFCQUFXLEVBQVgsSUFBVztZQUFYLDZCQUFXOztRQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNEOztPQUVHO0lBQ0ksZ0JBQVUsR0FBakI7UUFDSSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksYUFBTyxHQUFkLFVBQWUsSUFBWSxFQUFFLElBQVk7UUFFckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDdkU7YUFDSSxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO2FBQ0k7WUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN2RTtJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLGdCQUFVLEdBQWpCLFVBQWtCLElBQVksRUFBRSxJQUFZO1FBRXhDLElBQUksSUFBSSxHQUFHLElBQUksRUFBRTtZQUNiLE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztTQUMvQzthQUNJLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQztTQUNmO2FBQ0k7WUFDRCxPQUFPLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDL0M7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGdCQUFVLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNwRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksWUFBTSxHQUFiLFVBQWMsTUFBVztRQUVyQixJQUFJLE1BQU0sS0FBSyxJQUFJO1lBQ2YsTUFBTSxLQUFLLEVBQUU7WUFDYixNQUFNLEtBQUssTUFBTTtZQUNqQixNQUFNLEtBQUssTUFBTTtZQUNqQixNQUFNLEtBQUssTUFBTTtZQUNqQixNQUFNLEtBQUssU0FBUyxFQUN0QjtZQUNFLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFDSTtZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGNBQVEsR0FBZixVQUFnQixHQUFXO1FBQ3ZCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7WUFDdEIsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUNmO1FBQ0QsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFDakIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDZCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO2lCQUNJO2dCQUNELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzthQUNwRTtTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGFBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxJQUFJLEdBQUcsc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7WUFDMUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHFCQUFlLEdBQXRCLFVBQXVCLElBQVksRUFBRSxNQUFtQjtRQUFuQix1QkFBQSxFQUFBLFdBQW1CO1FBRXBELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVoQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDZCxPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUVELElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRWxDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3RELEdBQUcsSUFBSSxDQUFDLENBQUM7YUFFWjtpQkFBTTtnQkFDSCxHQUFHLEVBQUUsQ0FBQzthQUNUO1lBRUQsSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO2dCQUNmLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVCO1NBQ0o7UUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM3QixNQUFNLElBQUksS0FBSyxDQUFDO1NBQ25CO1FBRUQsOENBQThDO1FBRTlDLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksc0JBQWdCLEdBQXZCLFVBQXdCLElBQVksRUFBRSxJQUFrQjtRQUFsQixxQkFBQSxFQUFBLFVBQWtCO1FBRXBELElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQixPQUFPLEVBQUUsQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUVYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGtCQUFZLEdBQW5CLFVBQW9CLE9BQWUsRUFBRSxPQUFtQjtRQUFuQix3QkFBQSxFQUFBLFdBQW1CO1FBQ3BELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRDs7O09BR0c7SUFDSSxtQkFBYSxHQUFwQixVQUFxQixNQUFjO1FBQy9CLE9BQU8sTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUEseUJBQXlCO0lBQzFELENBQUM7SUFFRDs7O09BR0c7SUFDSSxtQkFBYSxHQUFwQixVQUFxQixPQUFlO1FBQ2hDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGtCQUFZLEdBQW5CLFVBQW9CLE1BQWUsRUFBRSxNQUFlO1FBQ2hELElBQUksR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUIsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUIsa0VBQWtFO1FBQ2xFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksYUFBTyxHQUFkLFVBQWUsTUFBZSxFQUFFLE1BQWU7UUFDM0MsSUFBSSxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRDs7O09BR0c7SUFDSSxnQkFBVSxHQUFqQixVQUFrQixLQUFjO1FBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksZ0JBQVUsR0FBakIsVUFBa0IsS0FBYztRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRDs7O09BR0c7SUFDSSxtQkFBYSxHQUFwQixVQUFxQixLQUFjO1FBQy9CLElBQUksR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLE1BQU0sS0FBSyxHQUFHO1lBQ2QsT0FBTyxLQUFLLENBQUM7UUFFakIsSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQ2hCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxPQUFPLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUMxQixHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBRTFCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksYUFBTyxHQUFkLFVBQWUsS0FBYyxFQUFFLE9BQWU7UUFDMUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDMUIsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksbUJBQWEsR0FBcEIsVUFBcUIsS0FBYTtRQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFDckIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFDckIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQ3RCLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ILENBQUM7SUFFRDs7O09BR0c7SUFDSSwyQkFBcUIsR0FBNUIsVUFBNkIsS0FBYTtRQUN0QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLE9BQU8sR0FBRyxLQUFLLEdBQUcsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFRDs7O09BR0c7SUFDSSxvQkFBYyxHQUFyQixVQUFzQixLQUFhO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGdCQUFVLEdBQWpCLFVBQWtCLEtBQWE7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksaUJBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksa0JBQVksR0FBbkI7UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3JCLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7T0FFRztJQUNJLHFCQUFlLEdBQXRCO1FBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNyQixPQUFPLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxrQkFBWSxHQUFuQjtRQUNJLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDckIsT0FBTyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksd0JBQWtCLEdBQXpCLFVBQTBCLEtBQWEsRUFBRSxLQUFhO1FBRWxELFdBQVc7UUFDWCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMzQixLQUFLLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzNCLEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFDeEIsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQ3hCLE1BQU0sR0FBUSxFQUFFLEVBQ2hCLEtBQUssR0FBUSxDQUFDLENBQUM7UUFDbkIsNEVBQTRFO1FBRTVFLE9BQU8sTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBRTtZQUM1QywrQ0FBK0M7WUFDL0MsS0FBSyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN6QyxNQUFNLEdBQUcsS0FBSyxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUM7WUFDN0IsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDckI7UUFDRCx5RkFBeUY7UUFFekYsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksd0JBQWtCLEdBQXpCLFVBQTBCLEtBQWEsRUFBRSxLQUFhO1FBRWxELFdBQVc7UUFDWCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMzQixLQUFLLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzNCLEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFDeEIsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQ3hCLE1BQU0sR0FBRyxFQUFFLEVBQ1gsS0FBSyxHQUFRLENBQUMsRUFDZCxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRWIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25DLGdDQUFnQztZQUNoQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUM7WUFDbEIsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNoQixNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2QsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2I7YUFDSSxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUU7WUFDckIsT0FBTyxDQUFDLENBQUM7U0FDWjtRQUVELEtBQUssQ0FBQyxLQUFLLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV6RSxPQUFPLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFLLEVBQUU7WUFDNUMsZ0RBQWdEO1lBQ2hELElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDakQsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0QyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDMUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbEI7UUFFRCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTlCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2hELElBQU0sT0FBTyxHQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQ3ZCLE1BQU07YUFDVDtZQUVELElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNO2FBQ1Q7U0FDSjtRQUVELElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdEgsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksNkJBQXVCLEdBQTlCLFVBQStCLEtBQUs7UUFFaEMsV0FBVztRQUNYLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzNCLEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxXQUFXLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDaEYsRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxFQUMvRSxNQUFNLEdBQUcsRUFBRSxFQUNYLElBQUksR0FBUSxDQUFDLENBQUM7UUFFbEIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUN4QyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLElBQUksR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM5QzthQUNJO1lBQ0QsSUFBSSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDL0M7UUFDRCx5Q0FBeUM7UUFFekMscUNBQXFDO1FBQ3JDLHdDQUF3QztRQUN4QywrQkFBK0I7UUFDL0IseURBQXlEO1FBQ3pELDZEQUE2RDtRQUM3RCxtREFBbUQ7UUFDbkQsNkRBQTZEO1FBQzdELHVEQUF1RDtRQUN2RCx3Q0FBd0M7UUFDeEMsb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osUUFBUTtRQUNSLGFBQWE7UUFDYiwrQkFBK0I7UUFDL0IseURBQXlEO1FBQ3pELG1EQUFtRDtRQUNuRCxvQ0FBb0M7UUFDcEMsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixRQUFRO1FBQ1IsSUFBSTtRQUNKLFNBQVM7UUFDVCx3QkFBd0I7UUFDeEIsSUFBSTtRQUVKLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO2dCQUM3QixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQzVCLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNmLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDMUMsOENBQThDO3dCQUM5QyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQy9CLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDMUMsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO2dDQUMvQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7NkJBQ3BCO3lCQUNKO3FCQUNKO2lCQUNKO3FCQUNJO29CQUNELElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNmLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDMUMsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUMvQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7eUJBQ3BCO3FCQUNKO2lCQUNKO2FBQ0o7aUJBQ0k7Z0JBQ0QsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3BCO1NBQ0o7UUFFRCw2Q0FBNkM7UUFDN0MsaURBQWlEO1FBQ2pELHVDQUF1QztRQUN2QyxpREFBaUQ7UUFDakQsMkNBQTJDO1FBQzNDLDRCQUE0QjtRQUM1QixRQUFRO1FBQ1IsSUFBSTtRQUNKLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUVyQyxpQ0FBaUM7UUFDakMsbUVBQW1FO1FBQ25FLHlGQUF5RjtRQUN6RixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLG9CQUFjLEdBQXJCLFVBQXNCLElBQVk7UUFDOUIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRTtnQkFDYixJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ25EO2lCQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMzQztTQUNKO1FBQ0QsdUNBQXVDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksb0JBQWMsR0FBckIsVUFBc0IsUUFBZ0I7UUFDbEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkQsdUNBQXVDO1lBRXZDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3RDtTQUNKO1FBQ0Qsa0VBQWtFO1FBRWxFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxjQUFRLEdBQWYsVUFBZ0IsSUFBWTtRQUN4QixJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMxQixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsRUFBRTtZQUN4QyxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDdkMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7T0FFRztJQUNJLGdCQUFVLEdBQWpCLFVBQWtCLE1BQWM7UUFDNUIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUN2QyxJQUFJLE1BQU0sSUFBSSxvQkFBb0IsRUFBRTtnQkFDaEMsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQXRwQmEsZUFBUyxHQUFZLEtBQUssQ0FBQztJQXdwQjdDLFlBQUM7Q0ExcEJELEFBMHBCQyxJQUFBO2tCQTFwQm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuXG4gICAgcHVibGljIHN0YXRpYyBtX1Nob3dMb2c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICog6L6T5Ye6bG9nXG4gICAgKi9cbiAgICBzdGF0aWMgQ0NMb2coLi4uX2N1c3RvbWUpIHtcbiAgICAgICAgaWYgKFV0aWxzLm1fU2hvd0xvZykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgX2N1c3RvbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6h5pWw6L6T5Ye6bG9nXG4gICAgICovXG4gICAgc3RhdGljIENDTG9nQ291bnQoLi4uX2N1c3RvbWUpIHtcbiAgICAgICAgY29uc29sZS5jb3VudC5hcHBseShjb25zb2xlLCBfY3VzdG9tZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L6T5Ye66Lef6LiqXG4gICAgICovXG4gICAgc3RhdGljIENDTG9nVHJhY2UoLi4uX2N1c3RvbWUpIHtcbiAgICAgICAgY29uc29sZS50cmFjZS5hcHBseShjb25zb2xlLCBfY3VzdG9tZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YiG57uE6L6T5Ye6bG9nXG4gICAgICovXG4gICAgc3RhdGljIENDTG9nR3JvdXAoLi4uX2N1c3RvbWUpIHtcbiAgICAgICAgY29uc29sZS5ncm91cC5hcHBseShjb25zb2xlLCBfY3VzdG9tZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YiG57uE57uT5p2f6L6T5Ye6bG9nXG4gICAgICovXG4gICAgc3RhdGljIENDTG9nR3JvdXBFbmQoLi4uX2N1c3RvbWUpIHtcbiAgICAgICAgY29uc29sZS5ncm91cEVuZC5hcHBseShjb25zb2xlLCBfY3VzdG9tZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pe26Ze06L6T5Ye6bG9nXG4gICAgICovXG4gICAgc3RhdGljIENDTG9nVGltZSguLi5fY3VzdG9tZSkge1xuICAgICAgICBjb25zb2xlLnRpbWUuYXBwbHkoY29uc29sZSwgX2N1c3RvbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaXtumXtOe7k+adn+i+k+WHumxvZ1xuICAgICAqL1xuICAgIHN0YXRpYyBDQ0xvZ1RpbWVFbmQoLi4uX2N1c3RvbWUpIHtcbiAgICAgICAgY29uc29sZS50aW1lRW5kLmFwcGx5KGNvbnNvbGUsIF9jdXN0b21lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDovpPlh7rplJnor69cbiAgICAgKi9cbiAgICBzdGF0aWMgQ0NMb2dFcnJvciguLi5fY3VzdG9tZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIF9jdXN0b21lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDovpPlh7rorablkYpcbiAgICAgKi9cbiAgICBzdGF0aWMgQ0NMb2dXYXJuKC4uLl9jdXN0b21lKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLCBfY3VzdG9tZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa4heeQhui+k+WHumxvZ1xuICAgICAqL1xuICAgIHN0YXRpYyBDQ0xvZ0NsZWFyKCkge1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LiA5Liq6ZqP5py65pWwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IF9taW4gXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IF9tYXggXG4gICAgICog6L+U5Zue5LiA5Liq5pW05pWwXG4gICAgICovXG4gICAgc3RhdGljIFJhbmROdW0oX21pbjogbnVtYmVyLCBfbWF4OiBudW1iZXIpIHtcblxuICAgICAgICBpZiAoX21heCA8IF9taW4pIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKF9tYXgpICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKF9taW4gLSBfbWF4KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX21heCA9PT0gX21pbikge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoX21pbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChfbWluKSArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChfbWF4IC0gX21pbikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LiA5Liq6ZqP5py65pWwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IF9taW4gXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IF9tYXggXG4gICAgICog6L+U5Zue5LiA5Liq5rWu54K55pWwXG4gICAgICovXG4gICAgc3RhdGljIFJhbmRudW1iZXIoX21pbjogbnVtYmVyLCBfbWF4OiBudW1iZXIpIHtcblxuICAgICAgICBpZiAoX21heCA8IF9taW4pIHtcbiAgICAgICAgICAgIHJldHVybiBfbWF4ICsgTWF0aC5yYW5kb20oKSAqIChfbWluIC0gX21heCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX21heCA9PT0gX21pbikge1xuICAgICAgICAgICAgcmV0dXJuIF9taW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX21pbiArIE1hdGgucmFuZG9tKCkgKiAoX21heCAtIF9taW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LiA5Liq6ZqP5py65byn5bqmXG4gICAgICog6IyD5Zu0KC3PgCwrz4ApXG4gICAgICog6L+U5Zue5LiA5Liq5rWu54K55pWwXG4gICAgICovXG4gICAgc3RhdGljIFJhbmRSYWRpYW4oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpID4gMC41ID8gTWF0aC5yYW5kb20oKSAlIE1hdGguUEkgOiAtTWF0aC5yYW5kb20oKSAlIE1hdGguUEk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yik6K+75a+56LGh5piv5ZCm5Li656m6XG4gICAgICogQHBhcmFtIHtvYmplY3R9IF9hcnIgXG4gICAgICovXG4gICAgc3RhdGljIElzTnVsbChfdmFsdWU6IGFueSkge1xuXG4gICAgICAgIGlmIChfdmFsdWUgPT09IG51bGwgfHxcbiAgICAgICAgICAgIF92YWx1ZSA9PT0gXCJcIiB8fFxuICAgICAgICAgICAgX3ZhbHVlID09PSBcIm51bGxcIiB8fFxuICAgICAgICAgICAgX3ZhbHVlID09PSBcIk51bGxcIiB8fFxuICAgICAgICAgICAgX3ZhbHVlID09PSBcIk5VTExcIiB8fFxuICAgICAgICAgICAgX3ZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3seW6puaLt+i0neWvueixoVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmogXG4gICAgICovXG4gICAgc3RhdGljIENsb25lT2JqKG9iajogb2JqZWN0KSB7XG4gICAgICAgIHZhciBuZXdPYmogPSB7fTtcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBuZXdPYmogPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyA/IHRoaXMuQ2xvbmVPYmoodmFsKSA6IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/lOWbnuS4gOS4quWUr+S4gOeahHV1aWRcbiAgICAgKiBcbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0VVVJRCgpIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7XG4gICAgICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LiA5Liq5a2X56ym5Liy5a+55bqU5a2X6IqC55qE6ZW/5bqm55qE54mH5q61XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF9zdHIgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IF9ieXRlc1xuICAgICAqIFxuICAgICAqL1xuICAgIHN0YXRpYyBHZXRTdHJpbmdDdXRPdXQoX3N0cjogc3RyaW5nLCBfYnl0ZXM6IG51bWJlciA9IDEwKSB7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XG5cbiAgICAgICAgaWYgKF9zdHIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsZW4gPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9zdHIubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgaWYgKF9zdHIuY2hhckNvZGVBdChpKSA+IDEyNyB8fCBfc3RyLmNoYXJDb2RlQXQoaSkgPT0gOTQpIHtcbiAgICAgICAgICAgICAgICBsZW4gKz0gMjtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZW4rKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxlbiA8PSBfYnl0ZXMpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gX3N0ci5jaGFyQXQoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA8IF9zdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCIuLi5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFV0aWxzLkNDTG9nKFwiR2V0U3RyaW5nVHJpbSByZXN1bHRcIixyZXN1bHQpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5a2X56ym5Liy5qC55o2uIOWtl+espiDliIblibLmlbDnu4RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3N0ciBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX2tleSBcbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0U3RyaW5nVG9BcnJheShfYXJyOiBzdHJpbmcsIF9rZXk6IHN0cmluZyA9ICc7Jykge1xuXG4gICAgICAgIGlmIChVdGlscy5Jc051bGwoX2FycikpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBfYXJyICs9IFwiXCI7XG5cbiAgICAgICAgcmV0dXJuIF9hcnIuc3BsaXQoX2tleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5byn5bqm5a+55bqU6ZW/5bqm55qE5L2N572uIFxuICAgICAqIOm7mOiupOS4ujHplb/luqZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX2VhZGlhbiBcbiAgICAgKi9cbiAgICBzdGF0aWMgUmFkaWFuVG9WZWMyKF9lYWRpYW46IG51bWJlciwgX2xlbmdodDogbnVtYmVyID0gMSkge1xuICAgICAgICByZXR1cm4gY2MudjIoTWF0aC5jb3MoX2VhZGlhbikgKiBfbGVuZ2h0LCBNYXRoLnNpbihfZWFkaWFuKSAqIF9sZW5naHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/lOWbnuinkuW6puWvueW6lOeahOW8p+W6plxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBfYW5nbGVcbiAgICAgKi9cbiAgICBzdGF0aWMgQW5nbGVUb1JhZGlhbihfYW5nbGU6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gX2FuZ2xlIC8gMTgwICogTWF0aC5QSS8vIChfZWFkaWFuL01hdGguUEkpKjE4MDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57lvKfluqblr7nlupTnmoTop5LluqZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX2VhZGlhbiBcbiAgICAgKi9cbiAgICBzdGF0aWMgUmFkaWFuVG9BbmdsZShfZWFkaWFuOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIChfZWFkaWFuIC8gTWF0aC5QSSkgKiAxODA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5Lik5Liq5ZCR6YeP55qE6Led56a7XG4gICAgICogQHBhcmFtIHtjYy5WZWMyfSBfdmVjMjFcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzJ9IF92ZWMyMiBcbiAgICAgKi9cbiAgICBzdGF0aWMgVmVjMkRpc3RhbmNlKF92ZWMyMTogY2MuVmVjMiwgX3ZlYzIyOiBjYy5WZWMyKSB7XG4gICAgICAgIGxldCBvdXQgPSBuZXcgY2MuVmVjMigwLCAwKTtcbiAgICAgICAgb3V0LnggPSBfdmVjMjEueCAtIF92ZWMyMi54O1xuICAgICAgICBvdXQueSA9IF92ZWMyMS55IC0gX3ZlYzIyLnk7XG4gICAgICAgIC8vIGxldCBsZW5ndGggPSAgTWF0aC5zcXJ0KF92ZWMyLnggKiBfdmVjMi54ICsgX3ZlYzIueSAqIF92ZWMyLnkpO1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KG91dC54ICogb3V0LnggKyBvdXQueSAqIG91dC55KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57kuoznu7TlkJHph4/nmoTlh4/ms5VcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzJ9IF92ZWMyMVxuICAgICAqIEBwYXJhbSB7Y2MuVmVjMn0gX3ZlYzIyIFxuICAgICAqIFxuICAgICAqL1xuICAgIHN0YXRpYyBWZWMyU3ViKF92ZWMyMTogY2MuVmVjMiwgX3ZlYzIyOiBjYy5WZWMyKSB7XG4gICAgICAgIGxldCBvdXQgPSBuZXcgY2MuVmVjMigwLCAwKTtcbiAgICAgICAgb3V0LnggPSBfdmVjMjEueCAtIF92ZWMyMi54O1xuICAgICAgICBvdXQueSA9IF92ZWMyMS55IC0gX3ZlYzIyLnk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LqM57u05ZCR6YeP55qE5byn5bqmXG4gICAgICogQHBhcmFtIHtjYy5WZWMyfSBfdmVjMiBcbiAgICAgKi9cbiAgICBzdGF0aWMgVmVjMlJhZGlhbihfdmVjMjogY2MuVmVjMikge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihfdmVjMi55LCBfdmVjMi54KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57kuoznu7TlkJHph4/nmoTplb/luqZcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzJ9IF92ZWMyIFxuICAgICAqL1xuICAgIHN0YXRpYyBWZWMyTGVuZ2h0KF92ZWMyOiBjYy5WZWMyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoX3ZlYzIueCAqIF92ZWMyLnggKyBfdmVjMi55ICogX3ZlYzIueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LqM57u05ZCR6YeP5b2S5LiA5YyWXG4gICAgICogQHBhcmFtIHtjYy5WZWMyfSBfdmVjMiBcbiAgICAgKi9cbiAgICBzdGF0aWMgVmVjMk5vcm1hbGl6ZShfdmVjMjogY2MuVmVjMikge1xuICAgICAgICBsZXQgb3V0ID0gbmV3IGNjLlZlYzIoMCwgMCk7XG4gICAgICAgIHZhciBtYWdTcXIgPSBfdmVjMi54ICogX3ZlYzIueCArIF92ZWMyLnkgKiBfdmVjMi55O1xuICAgICAgICBpZiAobWFnU3FyID09PSAxLjApXG4gICAgICAgICAgICByZXR1cm4gX3ZlYzI7XG5cbiAgICAgICAgaWYgKG1hZ1NxciA9PT0gMC4wKSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZlYzI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW52c3FydCA9IDEuMCAvIE1hdGguc3FydChtYWdTcXIpO1xuICAgICAgICBvdXQueCA9IF92ZWMyLnggKiBpbnZzcXJ0O1xuICAgICAgICBvdXQueSA9IF92ZWMyLnkgKiBpbnZzcXJ0O1xuXG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LqM57u05ZCR6YeP55qE57yp5pS+XG4gICAgICogQHBhcmFtIHtjYy5WZWMyfSBfdmVjMiBcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gX2xlbmdodCBcbiAgICAgKiBcbiAgICAgKi9cbiAgICBzdGF0aWMgVmVjMk11bChfdmVjMjogY2MuVmVjMiwgX2xlbmdodDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBvdXQgPSBuZXcgY2MuVmVjMigwLCAwKTtcbiAgICAgICAgb3V0LnggPSBfdmVjMi54ICogX2xlbmdodDtcbiAgICAgICAgb3V0LnkgPSBfdmVjMi55ICogX2xlbmdodDtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIbmr6vnp5LmlbDovazmjaLmiJDml7bpl7TmoLzlvI8gMjAxOTowNTozMDoxMDoxMjoxMFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBfdGltZVxuICAgICAqL1xuICAgIHN0YXRpYyBHZXRUaW1lRm9ybWF0KF90aW1lOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKF90aW1lKSxcbiAgICAgICAgICAgIHkgPSBub3cuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIG0gPSBub3cuZ2V0TW9udGgoKSArIDEsXG4gICAgICAgICAgICBkID0gbm93LmdldERhdGUoKTtcbiAgICAgICAgcmV0dXJuIHkgKyBcIi1cIiArIChtIDwgMTAgPyBcIjBcIiArIG0gOiBtKSArIFwiLVwiICsgKGQgPCAxMCA/IFwiMFwiICsgZCA6IGQpICsgXCIgXCIgKyBub3cudG9UaW1lU3RyaW5nKCkuc3Vic3RyKDAsIDgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWwhuenkuaVsOi9rOaNouaIkOaXtumXtOagvOW8jyAxMDo1MCDnp5JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX3RpbWUgXG4gICAgICovXG4gICAgc3RhdGljIEdldFRpbWVNaW51dGVzU2Vjb25kcyhfdGltZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcihfdGltZSAvIDYwKTtcbiAgICAgICAgbGV0IHNlY29uZHMgPSBfdGltZSAtIChtaW51dGVzICogNjApO1xuICAgICAgICByZXR1cm4gKG1pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXMpICsgXCI6XCIgKyAoc2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bCG5q+r56eS5pWw6L2s5o2i5oiQ5pe26Ze05qC85byPICDliIbpkp9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX3RpbWUgXG4gICAgICovXG4gICAgc3RhdGljIEdldFRpbWVNaW51dGVzKF90aW1lOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChfdGltZSAvIDYwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIbmr6vnp5LmlbDovazmjaLmiJDml7bpl7TmoLzlvI8gIOWkqVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBfdGltZSBcbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0VGltZURheShfdGltZTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoX3RpbWUgLyAxMDAwIC8gNjAgLyA2MCAvIDI0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIbmr6vnp5LmlbDovazmjaLmiJDml7bpl7TmoLzlvI8gIOWwj+aXtlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBfdGltZSBcbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0VGltZUhvdXIoX3RpbWU6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKF90aW1lIC8gMTAwMCAvIDYwIC8gNjApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/lOWbnuS7iuWkqeaXtumXtCDlsI/ml7ZcbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0VG9EYXlIb3VyKCkge1xuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgcmV0dXJuIG5vdy5nZXRIb3VycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/lOWbnuS7iuWkqeaXtumXtCDlh6DliIbpkp9cbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0VG9EYXlNaW51dGVzKCkge1xuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgcmV0dXJuIG5vdy5nZXRNaW51dGVzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LuK5aSp5ZGo5YegXG4gICAgICovXG4gICAgc3RhdGljIEdldFRvRGF5V2VlaygpIHtcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHJldHVybiBub3cuZ2V0RGF5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pWw5a2X5a2X56ym5Liy55u45YqgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF9zdHJBXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF9zdHJCXG4gICAgICogXG4gICAgICovXG4gICAgc3RhdGljIFN0cmluZ0NhbGN1bGF0ZVN1bShfc3RyQTogc3RyaW5nLCBfc3RyQjogc3RyaW5nKSB7XG5cbiAgICAgICAgLy/lhYjliKTmlq3mmK/lkKbmmK/lrZfnrKbkuLJcbiAgICAgICAgaWYgKHR5cGVvZiBfc3RyQSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIF9zdHJBID0gX3N0ckEgKyAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgX3N0ckIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBfc3RyQiA9IF9zdHJCICsgJyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmFMaXN0ID0gX3N0ckEuc3BsaXQoJycpLFxuICAgICAgICAgICAgcmJMaXN0ID0gX3N0ckIuc3BsaXQoJycpLFxuICAgICAgICAgICAgcmVzdWx0OiBhbnkgPSAnJyxcbiAgICAgICAgICAgIGNvdW50OiBhbnkgPSAwO1xuICAgICAgICAvLyBVdGlscy5DQ0xvZygnU3RyaW5nQ2FsY3VsYXRlQWRkaXRpb24gIHJhTGlzdCcsIHJhTGlzdCwgJ3JiTGlzdCcsIHJiTGlzdCk7XG5cbiAgICAgICAgd2hpbGUgKHJhTGlzdC5sZW5ndGggfHwgcmJMaXN0Lmxlbmd0aCB8fCBjb3VudCkge1xuICAgICAgICAgICAgLy8gVXRpbHMuQ0NMb2dDb3VudCgnU3RyaW5nQ2FsY3VsYXRlU3VtIHdoaWVsJylcbiAgICAgICAgICAgIGNvdW50ICs9IH5+cmFMaXN0LnBvcCgpICsgfn5yYkxpc3QucG9wKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBjb3VudCAlIDEwICsgcmVzdWx0O1xuICAgICAgICAgICAgY291bnQgPSBjb3VudCA+IDk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXRpbHMuQ0NMb2coJ1N0cmluZ0NhbGN1bGF0ZVN1bSAgcmFMaXN0JywgcmFMaXN0LCAncmJMaXN0JywgcmJMaXN0LCAncmVzdWx0JywgcmVzdWx0KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pWw5a2X5a2X56ym5Liy55u45YePXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF9zdHJBIOiiq+WHj+aVsFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBfc3RyQiDlh4/mlbBcbiAgICAgKiBcbiAgICAgKi9cbiAgICBzdGF0aWMgU3RyaW5nQ2FsY3VsYXRlU3ViKF9zdHJBOiBzdHJpbmcsIF9zdHJCOiBzdHJpbmcpIHtcblxuICAgICAgICAvL+WFiOWIpOaWreaYr+WQpuaYr+Wtl+espuS4slxuICAgICAgICBpZiAodHlwZW9mIF9zdHJBICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgX3N0ckEgPSBfc3RyQSArICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBfc3RyQiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIF9zdHJCID0gX3N0ckIgKyAnJztcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmFMaXN0ID0gX3N0ckEuc3BsaXQoJycpLFxuICAgICAgICAgICAgcmJMaXN0ID0gX3N0ckIuc3BsaXQoJycpLFxuICAgICAgICAgICAgcmVzdWx0ID0gJycsXG4gICAgICAgICAgICBjb3VudDogYW55ID0gMCxcbiAgICAgICAgICAgIGRlc2MgPSAwO1xuXG4gICAgICAgIGlmIChwYXJzZUludChfc3RyQSkgPCBwYXJzZUludChfc3RyQikpIHtcbiAgICAgICAgICAgIC8vIFV0aWxzLkNDTG9nKCdfc3RyQSA8IF9zdHJCJyk7XG4gICAgICAgICAgICBsZXQgdGVtcCA9IHJhTGlzdDtcbiAgICAgICAgICAgIHJhTGlzdCA9IHJiTGlzdDtcbiAgICAgICAgICAgIHJiTGlzdCA9IHRlbXA7XG4gICAgICAgICAgICBkZXNjID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX3N0ckEgPT0gX3N0ckIpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgVXRpbHMuQ0NMb2coJ1N0cmluZ0NhbGN1bGF0ZUFkZGl0aW9uICByYUxpc3QnLCByYUxpc3QsICdyYkxpc3QnLCByYkxpc3QpO1xuXG4gICAgICAgIHdoaWxlIChyYUxpc3QubGVuZ3RoIHx8IHJiTGlzdC5sZW5ndGggfHwgY291bnQpIHtcbiAgICAgICAgICAgIC8vIFV0aWxzLkNDTG9nQ291bnQoJ1N0cmluZ0NhbGN1bGF0ZVN1YiB3aGllbCcpO1xuICAgICAgICAgICAgbGV0IGFkID0gfn5yYUxpc3QucG9wKCkgLSB+fnJiTGlzdC5wb3AoKSAtIGNvdW50O1xuICAgICAgICAgICAgVXRpbHMuQ0NMb2coJ2FkJywgYWQsICdjb3VudCcsIGNvdW50KTtcbiAgICAgICAgICAgIHJlc3VsdCA9IChhZCA8IDAgPyAxMCArIGFkIDogYWQpICsgcmVzdWx0O1xuICAgICAgICAgICAgY291bnQgPSBhZCA8IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVsaXN0ID0gcmVzdWx0LnNwbGl0KCcnKTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVsaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudDogYW55ID0gcmVsaXN0W2luZGV4XTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICE9IDApIHtcbiAgICAgICAgICAgICAgICByZWxpc3Quc3BsaWNlKDAsIGluZGV4KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gcmVsaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICByZWxpc3Quc3BsaWNlKDAsIHJlbGlzdC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZXNjID09IC0xKSB7XG4gICAgICAgICAgICByZWxpc3Quc3BsaWNlKDAsIDAsICctJyk7XG4gICAgICAgIH1cbiAgICAgICAgVXRpbHMuQ0NMb2coJ1N0cmluZ0NhbGN1bGF0ZVN1YiAgcmFMaXN0JywgcmFMaXN0LCAncmJMaXN0JywgcmJMaXN0LCAncmVzdWx0JywgcmVzdWx0LCAncmVsaXN0LmpvaW4nLCByZWxpc3Quam9pbignJykpO1xuXG4gICAgICAgIHJldHVybiByZWxpc3Quam9pbignJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5o2i566X5ZCO55qE5a2X56ym5LiyXG4gICAgICogQHBhcmFtIHthbnl9IF9zdHJBIFxuICAgICAqIFxuICAgICAqL1xuICAgIHN0YXRpYyBTdHJpbmdHZXRDb252ZXJzaW9uVW5pdChfc3RyQSkge1xuXG4gICAgICAgIC8v5YWI5Yik5pat5piv5ZCm5piv5a2X56ym5LiyXG4gICAgICAgIGlmICh0eXBlb2YgX3N0ckEgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBfc3RyQSA9IF9zdHJBICsgJyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdW5pdFN5bWJvbHMgPSBbJycsICdLJywgJ00nLCAnQicsICdUJywgJ1FkJywgJ1F0JywgJ1onLCAnWScsICdTJywgJ0wnLCAnWCcsICdEJ10sXG4gICAgICAgICAgICByYSA9IF9zdHJBLnJlcGxhY2UoLyhefFxccylcXGQrL2csIChtKSA9PiBtLnJlcGxhY2UoLyg/PSg/IVxcYikoXFxkezN9KSskKS9nLCAnLCcpKSxcbiAgICAgICAgICAgIHJlc3VsdCA9ICcnLFxuICAgICAgICAgICAgZGVzYzogYW55ID0gMDtcblxuICAgICAgICBsZXQgc3BsaXRBcnJheSA9IHJhLnNwbGl0KCcsJyk7XG4gICAgICAgIGlmIChzcGxpdEFycmF5Lmxlbmd0aCA+IHVuaXRTeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgc3BsaXRBcnJheS5zcGxpY2Uoc3BsaXRBcnJheS5sZW5ndGggLSB1bml0U3ltYm9scy5sZW5ndGgsIHVuaXRTeW1ib2xzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgZGVzYyA9IHVuaXRTeW1ib2xzW3VuaXRTeW1ib2xzLmxlbmd0aCAtIDJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVzYyA9IHVuaXRTeW1ib2xzW3NwbGl0QXJyYXkubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBzcGxpdEFycmF5LnNwbGljZSgxLCBzcGxpdEFycmF5Lmxlbmd0aCAtIDIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3BsaXRBcnJheVwiLCBzcGxpdEFycmF5KTtcblxuICAgICAgICAvLyBpZiAoTnVtYmVyKHNwbGl0QXJyYXlbMF0pIDwgMTAwKSB7XG4gICAgICAgIC8vICAgICBpZiAoTnVtYmVyKHNwbGl0QXJyYXlbMF0pIDwgMTApIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoc3BsaXRBcnJheVsxXSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBzcGxpdEFycmF5WzFdID0gc3BsaXRBcnJheVsxXS5zbGljZSgwLCAyKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzcGxpdEFycmF5WzFdXCIsc3BsaXRBcnJheVsxXSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChOdW1iZXIoc3BsaXRBcnJheVsxXVsxXSkgPT0gMCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc3BsaXRBcnJheVsxXSA9IHNwbGl0QXJyYXlbMV0uc2xpY2UoMCwgMSk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHNwbGl0QXJyYXlbMV1bMF0pID09IDApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBzcGxpdEFycmF5LnBvcCgpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHNwbGl0QXJyYXlbMV0pIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgc3BsaXRBcnJheVsxXSA9IHNwbGl0QXJyYXlbMV0uc2xpY2UoMCwgMSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChOdW1iZXIoc3BsaXRBcnJheVsxXVswXSkgPT0gMCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc3BsaXRBcnJheS5wb3AoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgLy8gICAgIHNwbGl0QXJyYXkucG9wKCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAoc3BsaXRBcnJheVsxXSkge1xuICAgICAgICAgICAgaWYgKE51bWJlcihzcGxpdEFycmF5WzBdKSA8IDEwMCkge1xuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoc3BsaXRBcnJheVswXSkgPCAxMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRBcnJheVsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXRBcnJheVsxXSA9IHNwbGl0QXJyYXlbMV0uc2xpY2UoMCwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNwbGl0QXJyYXlbMV1cIixzcGxpdEFycmF5WzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoc3BsaXRBcnJheVsxXVsxXSkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0QXJyYXlbMV0gPSBzcGxpdEFycmF5WzFdLnNsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoc3BsaXRBcnJheVsxXVswXSkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGxpdEFycmF5LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0QXJyYXlbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0QXJyYXlbMV0gPSBzcGxpdEFycmF5WzFdLnNsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcihzcGxpdEFycmF5WzFdWzBdKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXRBcnJheS5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNwbGl0QXJyYXkucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzcGxpdEFycmF5WzFdID0gc3BsaXRBcnJheVsxXS5zbGljZSgwLCAyKTtcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJzcGxpdEFycmF5WzFdXCIsc3BsaXRBcnJheVsxXSk7XG4gICAgICAgIC8vIGlmIChOdW1iZXIoc3BsaXRBcnJheVsxXVsxXSkgPT0gMCkge1xuICAgICAgICAvLyAgICAgc3BsaXRBcnJheVsxXSA9IHNwbGl0QXJyYXlbMV0uc2xpY2UoMCwgMSk7XG4gICAgICAgIC8vICAgICBpZiAoTnVtYmVyKHNwbGl0QXJyYXlbMV1bMF0pID09IDApIHtcbiAgICAgICAgLy8gICAgICAgICBzcGxpdEFycmF5LnBvcCgpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIHJlc3VsdCA9IHNwbGl0QXJyYXkuam9pbignLicpICsgZGVzYztcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xuICAgICAgICAvLyByYUxpc3Quc3BsaWNlKHJhTGlzdC5sZW5ndGggLSB1bml0aW5kZXggKiAzLCByYUxpc3QubGVuZ3RoIC0gMSk7XG4gICAgICAgIC8vIFV0aWxzLkNDTG9nKCdTdHJpbmdHZXRDb252ZXJzaW9uVW5pdCByYScsIHJhLCAnc3BsaXRBcnJheScsIHNwbGl0QXJyYXksICdkZXNjJywgZGVzYyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5a2X56ym5Liy6L2sVW5pY29kZee8lueggVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBfc3RyXG4gICAgICogXG4gICAgICovXG4gICAgc3RhdGljIFN0cl9Ub19Vbmljb2RlKF9zdHI6IHN0cmluZykge1xuICAgICAgICB2YXIgdW5pZCA9ICdcXFxcdSc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBfc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA8IGxlbiAtIDEpIHtcbiAgICAgICAgICAgICAgICB1bmlkICs9IF9zdHIuY2hhckNvZGVBdChpKS50b1N0cmluZygxNikgKyAnXFxcXHUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBsZW4gLSAxKSB7XG4gICAgICAgICAgICAgICAgdW5pZCArPSBfc3RyLmNoYXJDb2RlQXQoaSkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU3RyX1RvX1VuaWNvZGVcIiwgdW5pZCk7XG4gICAgICAgIHJldHVybiB1bmlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuaWNvZGXnvJbnoIHovazlrZfnrKbkuLJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3VuaWNvZGUgXG4gICAgICogXG4gICAgICovXG4gICAgc3RhdGljIFVuaWNvZGVfVG9fU3RyKF91bmljb2RlOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB2YXIgc3RyQXJyID0gX3VuaWNvZGUuc3BsaXQoJ1xcXFx1Jyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAyLCBsZW4gPSBzdHJBcnIubGVuZ3RoIC0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0ckFycltpXVwiLCBzdHJBcnJbaV0pO1xuXG4gICAgICAgICAgICBpZiAoc3RyQXJyW2ldKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChzdHJBcnJbaV0sIDE2KSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVW5pY29kZV9Ub19TdHIgc3RyQXJyXCIsIHN0ckFyciwgXCJyZXN1bHRcIiwgcmVzdWx0KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBfdXJsIOe9kee7nOivt+axgui3r+W+hCBcbiAgICAgKi9cbiAgICBzdGF0aWMgQ2hlY2tVUkwoX3VybDogc3RyaW5nKSB7XG4gICAgICAgIGxldCB1cmwgPSBuZXcgU3RyaW5nKF91cmwpXG4gICAgICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly9jYXRob21lOC5jb20nKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHA6Ly9jYXRob21lOC5jb20nKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBfdXJsIOe9kee7nOivt+axgui3r+W+hCBcbiAgICAgKi9cbiAgICBzdGF0aWMgQ2hlY2tBcHBJZChfYXBwaWQ6IHN0cmluZykge1xuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xuICAgICAgICAgICAgaWYgKF9hcHBpZCA9PSAnd3hkZDAzNjc5OWFlNGRjZDlmJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manage/SaveManage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ccfaBWl0ZDeJ8Q9TNVAwHI', 'SaveManage');
// scripts/manage/SaveManage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../utils/Utils");
/**
 * 用户存档数据读取
 */
var BaseSav_Data = {
    UserName: "游客",
    UserHeadIcon: "",
    Diamond: 0,
    Coins: 0,
    LastTime: 0,
    Level: 1,
    KeyNum: 0,
    SkinID: 1,
    SkinList: [1],
    Guide: false,
};
/**
 * 皮肤数
 */
exports.CarSkinMax = 8;
/**
 * 基础关卡
 */
exports.LevelBase = 13;
/**
 * 最大关卡数
 */
exports.LevelMax = 85;
/**
 * 游戏中显示指导提示时间
 */
exports.GameGuideTime = 5;
var SaveManage = /** @class */ (function () {
    /**
     * 构造函数
     */
    function SaveManage() {
        this._uuidKey = "huaxiantingche2020061804"; //uuid存储key
        this._UserData = null;
        this._IsLoading = false;
    }
    SaveManage.getInstance = function () {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new SaveManage());
        return this._instance;
    };
    /**
     * 存取存档
     */
    SaveManage.prototype.SvaveUserData = function () {
        var uuid = JSON.parse(cc.sys.localStorage.getItem(this._uuidKey));
        cc.sys.localStorage.setItem(uuid, JSON.stringify(this._UserData));
    };
    /**
     * 读取存档
     */
    SaveManage.prototype.LoadUserData = function () {
        var uuid = cc.sys.localStorage.getItem(this._uuidKey);
        if (!uuid) {
            uuid = Utils_1.default.GetUUID();
            cc.sys.localStorage.setItem(this._uuidKey, JSON.stringify(uuid));
        }
        else {
            uuid = JSON.parse(uuid);
        }
        var userdata = cc.sys.localStorage.getItem(uuid);
        if (!userdata) {
            //初始化
            this._UserData = BaseSav_Data;
            this._UserData.UserName = BaseSav_Data.UserName + String(uuid).slice(0, 6);
            this.SvaveUserData();
        }
        else {
            this._UserData = JSON.parse(userdata);
            if (!this._UserData.UserName) {
                this._UserData.UserName = BaseSav_Data.UserName + uuid.splice(0, 6);
            }
            if (!this._UserData.UserHeadIcon) {
                this._UserData.UserHeadIcon = BaseSav_Data.UserHeadIcon;
            }
            if (!this._UserData.Diamond) {
                this._UserData.Diamond = BaseSav_Data.Diamond;
            }
            if (!this._UserData.Coins) {
                this._UserData.Coins = BaseSav_Data.Coins;
            }
            if (!this._UserData.LastTime) {
                this._UserData.Coins = BaseSav_Data.LastTime;
            }
            if (!this._UserData.Level) {
                this._UserData.Level = BaseSav_Data.Level;
            }
            if (!this._UserData.KeyNum) {
                this._UserData.KeyNum = BaseSav_Data.KeyNum;
            }
            if (!this._UserData.SkinID) {
                this._UserData.SkinID = BaseSav_Data.SkinID;
            }
            if (!this._UserData.SkinList) {
                this._UserData.SkinList = BaseSav_Data.SkinList;
            }
            if (!this._UserData.Guide) {
                this._UserData.Guide = BaseSav_Data.Guide;
            }
        }
    };
    SaveManage.prototype.GetUserUUID = function () {
        var uuid = cc.sys.localStorage.getItem(this._uuidKey);
        if (!uuid) {
            uuid = Utils_1.default.GetUUID();
            cc.sys.localStorage.setItem(this._uuidKey, JSON.stringify(uuid));
        }
        else {
            uuid = JSON.parse(uuid);
        }
        return uuid;
    };
    /**
     * 玩家数据初始化
     */
    SaveManage.prototype.InitUserData = function () {
        Utils_1.default.CCLog('InitUserData');
        //如果存档为空 则读取存档
        if (this._UserData == null) {
            this.LoadUserData();
            // LastTime
            //更具上次游戏时间更新当天数据
            if (Utils_1.default.GetTimeDay(cc.sys.now()) > Utils_1.default.GetTimeDay(this._UserData.LastTime)) {
                Utils_1.default.CCLog("初始化当天数据", "nowday", Utils_1.default.GetTimeDay(cc.sys.now()), "lasteDay", Utils_1.default.GetTimeDay(this._UserData.LastTime));
                //更新游戏时间
                this._UserData.LastTime = cc.sys.now();
                this.SetGuide(false);
            }
            Utils_1.default.CCLog("savemanage _UserData", this._UserData);
        }
    };
    /**
     * 设置用户的名字
     * @param {string} _username
     */
    SaveManage.prototype.SetUserName = function (_username) {
        this._UserData.UserName = _username;
        this.SvaveUserData();
    };
    /**
     * 返回用户的名字
     */
    SaveManage.prototype.GetUserName = function () {
        return this._UserData.UserName;
    };
    /**
     * 设置用户的头像
     * @param {string} _headIconUrl
     */
    SaveManage.prototype.SetUserHeadIcon = function (_headIconUrl) {
        this._UserData.UserHeadIcon = _headIconUrl;
        this.SvaveUserData();
    };
    /**
     * 返回的头像
     */
    SaveManage.prototype.GetHeadIcon = function () {
        return this._UserData.UserHeadIcon;
    };
    /**
     * 增加金币
     * @param {number} _num
     */
    SaveManage.prototype.AddCoins = function (_num) {
        this._UserData.Coins += _num;
        this.SvaveUserData();
    };
    /**
     * 减少金币
     * @param {number} _num
     */
    SaveManage.prototype.DelCoins = function (_num) {
        Utils_1.default.CCLog('DelGlod is CoinsNum', _num, "userCoins", this._UserData.Coins);
        if (this._UserData.Coins >= _num) {
            this._UserData.Coins -= _num;
            this.SvaveUserData();
            return true;
        }
        else {
            Utils_1.default.CCLog('Coins is less');
            return false;
        }
    };
    /**
     * 返回金币
     */
    SaveManage.prototype.GetCoins = function () {
        return this._UserData.Coins;
    };
    /**
     * 设置游戏第一次加载
     * @param {boolean} _isLoading
     */
    SaveManage.prototype.SetIsLoading = function (_isLoading) {
        this._IsLoading = _isLoading;
    };
    /**
     * 返回游戏第一次加载
     */
    SaveManage.prototype.GetIsLoading = function () {
        return this._IsLoading;
    };
    /**
     * 设置关卡数
     * @param {number} _level
     */
    SaveManage.prototype.SetLevel = function (_level) {
        this._UserData.Level = _level;
        this.SvaveUserData();
    };
    /**
     * 返回关卡数
     */
    SaveManage.prototype.GetLevel = function () {
        return this._UserData.Level;
    };
    /**
    * 增加钥匙数
    * @param {number} _num
    */
    SaveManage.prototype.AddKeyNum = function (_num) {
        this._UserData.KeyNum += _num;
        this.SvaveUserData();
    };
    /**
    * 减少钥匙数
    * @param {number} _num
    */
    SaveManage.prototype.DelKeyNum = function (_num) {
        if (this._UserData.KeyNum >= _num) {
            this._UserData.KeyNum -= _num;
            this.SvaveUserData();
            return true;
        }
        return false;
    };
    /**
     * 返回钥匙数
     */
    SaveManage.prototype.GetKeyNum = function () {
        return this._UserData.KeyNum;
    };
    /**
     * 设置选中的皮肤
     * @param {any} _id
     */
    SaveManage.prototype.SetSkinID = function (_id) {
        this._UserData.SkinID = _id;
        this.SvaveUserData();
    };
    /**
     * 返回选中的皮肤id
     */
    SaveManage.prototype.GetSkinID = function () {
        return this._UserData.SkinID;
    };
    /**
     * 解锁对应id的皮肤
     */
    SaveManage.prototype.UnlockSkindID = function (_id) {
        this._UserData.SkinList.push(_id);
        this.SvaveUserData();
    };
    /**
     * 返回对应id的皮肤是否解锁了
     * @param {any} _id
     */
    SaveManage.prototype.SkinIDIsUnlock = function (_id) {
        var skinlist = this._UserData.SkinList;
        for (var index = 0; index < skinlist.length; index++) {
            var id = skinlist[index];
            if (id == _id) {
                return true;
            }
        }
        return false;
    };
    /**
     * 设置指导标记
     */
    SaveManage.prototype.SetGuide = function (_vaule) {
        this._UserData.Guide = _vaule;
        this.SvaveUserData();
    };
    /**
     * 返回指导标记
     */
    SaveManage.prototype.GetGuide = function () {
        return this._UserData.Guide;
    };
    return SaveManage;
}());
exports.default = SaveManage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZS9TYXZlTWFuYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW1DO0FBRW5DOztHQUVHO0FBQ0gsSUFBSSxZQUFZLEdBQUc7SUFDZixRQUFRLEVBQUUsSUFBSTtJQUNkLFlBQVksRUFBRSxFQUFFO0lBQ2hCLE9BQU8sRUFBRSxDQUFDO0lBQ1YsS0FBSyxFQUFFLENBQUM7SUFDUixRQUFRLEVBQUUsQ0FBQztJQUNYLEtBQUssRUFBRSxDQUFDO0lBQ1IsTUFBTSxFQUFFLENBQUM7SUFDVCxNQUFNLEVBQUUsQ0FBQztJQUNULFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNiLEtBQUssRUFBRSxLQUFLO0NBRWYsQ0FBQTtBQUVEOztHQUVHO0FBQ1EsUUFBQSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBRTFCOztHQUVHO0FBQ1EsUUFBQSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBRTFCOztHQUVHO0FBQ1EsUUFBQSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBRXpCOztHQUVHO0FBQ1EsUUFBQSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBRTdCO0lBT0k7O09BRUc7SUFDSDtRQVBRLGFBQVEsR0FBVywwQkFBMEIsQ0FBQyxDQUFDLFdBQVc7UUFDMUQsY0FBUyxHQUFRLElBQUksQ0FBQztRQUN0QixlQUFVLEdBQVksS0FBSyxDQUFDO0lBTXBDLENBQUM7SUFFYSxzQkFBVyxHQUF6QjtRQUNJLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUE7UUFDckQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILGtDQUFhLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNsRSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUNBQVksR0FBWjtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLElBQUksR0FBRyxlQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO2FBQ0k7WUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtRQUVELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsS0FBSztZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO2FBQ0k7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO2dCQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3ZFO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFO2dCQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDO2FBQzNEO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO2dCQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDO2FBQ2pEO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO2dCQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBQzdDO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO2dCQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO2FBQ2hEO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO2dCQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBQzdDO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO2FBQy9DO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO2FBQy9DO1lBQ0QsSUFBSSxDQUFDLElB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LElBQUksRUFBRSxJQUFJLEdBQUcsRUFBRTtnQkFDWCxPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7O09BRUc7SUFDSCw2QkFBUSxHQUFSLFVBQVMsTUFBZTtRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILDZCQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFTCxpQkFBQztBQUFELENBdlNBLEFBdVNDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XG5cbi8qKlxuICog55So5oi35a2Y5qGj5pWw5o2u6K+75Y+WIFxuICovXG52YXIgQmFzZVNhdl9EYXRhID0ge1xuICAgIFVzZXJOYW1lOiBcIua4uOWuolwiLCAgICAgICAgICAgICAgICAvL+eUqOaIt+WQjeWtl1xuICAgIFVzZXJIZWFkSWNvbjogXCJcIiwgICAgICAgICAgICAgICAvL+eUqOaIt+WktOWDj+WcsOWdgFxuICAgIERpYW1vbmQ6IDAsICAgICAgICAgICAgICAgICAgICAgLy/pkrvnn7NcbiAgICBDb2luczogMCwgICAgICAgICAgICAgICAgICAgICAgIC8v6YeR5biB5pWwXG4gICAgTGFzdFRpbWU6IDAsICAgICAgICAgICAgICAgICAgICAvL+S4iuasoea4uOaIj+aXtumXtFxuICAgIExldmVsOiAxLCAgICAgICAgICAgICAgICAgICAgICAgLy/lhbPljaFcbiAgICBLZXlOdW06IDAsICAgICAgICAgICAgICAgICAgICAgIC8v6ZKl5YyZ5pWwXG4gICAgU2tpbklEOiAxLCAgICAgICAgICAgICAgICAgICAgICAvL+earuiCpGlkXG4gICAgU2tpbkxpc3Q6IFsxXSwgICAgICAgICAgICAgICAgICAvL+earuiCpOWIl+ihqFxuICAgIEd1aWRlOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgLy/mjIflr7zmoIforrAgICAgICAgICAgICAgICAgICAgICAgIFxuXG59XG5cbi8qKlxuICog55qu6IKk5pWwXG4gKi9cbmV4cG9ydCB2YXIgQ2FyU2tpbk1heCA9IDg7XG5cbi8qKlxuICog5Z+656GA5YWz5Y2hXG4gKi9cbmV4cG9ydCB2YXIgTGV2ZWxCYXNlID0gMTM7XG5cbi8qKlxuICog5pyA5aSn5YWz5Y2h5pWwXG4gKi9cbmV4cG9ydCB2YXIgTGV2ZWxNYXggPSA4NTtcblxuLyoqXG4gKiDmuLjmiI/kuK3mmL7npLrmjIflr7zmj5DnpLrml7bpl7RcbiAqL1xuZXhwb3J0IHZhciBHYW1lR3VpZGVUaW1lID0gNTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F2ZU1hbmFnZSB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFNhdmVNYW5hZ2U7XG4gICAgcHJpdmF0ZSBfdXVpZEtleTogc3RyaW5nID0gXCJodWF4aWFudGluZ2NoZTIwMjAwNjE4MDRcIjsgLy91dWlk5a2Y5YKoa2V5XG4gICAgcHJpdmF0ZSBfVXNlckRhdGE6IGFueSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfSXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiDmnoTpgKDlh73mlbBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFNhdmVNYW5hZ2Uge1xuICAgICAgICAvLyDlpoLmnpwgaW5zdGFuY2Ug5piv5LiA5Liq5a6e5L6LIOebtOaOpei/lOWbnu+8jCAg5aaC5p6c5LiN5pivIOWunuS+i+WMluWQjui/lOWbnlxuICAgICAgICB0aGlzLl9pbnN0YW5jZSB8fCAodGhpcy5faW5zdGFuY2UgPSBuZXcgU2F2ZU1hbmFnZSgpKVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlrZjlj5blrZjmoaNcbiAgICAgKi9cbiAgICBTdmF2ZVVzZXJEYXRhKCkge1xuICAgICAgICBsZXQgdXVpZCA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuX3V1aWRLZXkpKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHV1aWQsIEpTT04uc3RyaW5naWZ5KHRoaXMuX1VzZXJEYXRhKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K+75Y+W5a2Y5qGjXG4gICAgICovXG4gICAgTG9hZFVzZXJEYXRhKCkge1xuICAgICAgICBsZXQgdXVpZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl91dWlkS2V5KTtcbiAgICAgICAgaWYgKCF1dWlkKSB7XG4gICAgICAgICAgICB1dWlkID0gVXRpbHMuR2V0VVVJRCgpO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX3V1aWRLZXksIEpTT04uc3RyaW5naWZ5KHV1aWQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHV1aWQgPSBKU09OLnBhcnNlKHV1aWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVzZXJkYXRhID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHV1aWQpO1xuXG4gICAgICAgIGlmICghdXNlcmRhdGEpIHtcbiAgICAgICAgICAgIC8v5Yid5aeL5YyWXG4gICAgICAgICAgICB0aGlzLl9Vc2VyRGF0YSA9IEJhc2VTYXZfRGF0YTtcbiAgICAgICAgICAgIHRoaXMuX1VzZXJEYXRhLlVzZXJOYW1lID0gQmFzZVNhdl9EYXRhLlVzZXJOYW1lICsgU3RyaW5nKHV1aWQpLnNsaWNlKDAsIDYpO1xuICAgICAgICAgICAgdGhpcy5TdmF2ZVVzZXJEYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9Vc2VyRGF0YSA9IEpTT04ucGFyc2UodXNlcmRhdGEpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9Vc2VyRGF0YS5Vc2VyTmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX1VzZXJEYXRhLlVzZXJOYW1lID0gQmFzZVNhdl9EYXRhLlVzZXJOYW1lICsgdXVpZC5zcGxpY2UoMCwgNik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fVXNlckRhdGEuVXNlckhlYWRJY29uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fVXNlckRhdGEuVXNlckhlYWRJY29uID0gQmFzZVNhdl9EYXRhLlVzZXJIZWFkSWNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5fVXNlckRhdGEuRGlhbW9uZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX1VzZXJEYXRhLkRpYW1vbmQgPSBCYXNlU2F2X0RhdGEuRGlhbW9uZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5fVXNlckRhdGEuQ29pbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9Vc2VyRGF0YS5Db2lucyA9IEJhc2VTYXZfRGF0YS5Db2lucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5fVXNlckRhdGEuTGFzdFRpbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9Vc2VyRGF0YS5Db2lucyA9IEJhc2VTYXZfRGF0YS5MYXN0VGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5fVXNlckRhdGEuTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9Vc2VyRGF0YS5MZXZlbCA9IEJhc2VTYXZfRGF0YS5MZXZlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5fVXNlckRhdGEuS2V5TnVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fVXNlckRhdGEuS2V5TnVtID0gQmFzZVNhdl9EYXRhLktleU51bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5fVXNlckRhdGEuU2tpbklEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fVXNlckRhdGEuU2tpbklEID0gQmFzZVNhdl9EYXRhLlNraW5JRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5fVXNlckRhdGEuU2tpbkxpc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9Vc2VyRGF0YS5Ta2luTGlzdCA9IEJhc2VTYXZfRGF0YS5Ta2luTGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5fVXNlckRhdGEuR3VpZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9Vc2VyRGF0YS5HdWlkZSA9IEJhc2VTYXZfRGF0YS5HdWlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEdldFVzZXJVVUlEKCkge1xuICAgICAgICBsZXQgdXVpZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl91dWlkS2V5KTtcbiAgICAgICAgaWYgKCF1dWlkKSB7XG4gICAgICAgICAgICB1dWlkID0gVXRpbHMuR2V0VVVJRCgpO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX3V1aWRLZXksIEpTT04uc3RyaW5naWZ5KHV1aWQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHV1aWQgPSBKU09OLnBhcnNlKHV1aWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1dWlkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDnjqnlrrbmlbDmja7liJ3lp4vljJZcbiAgICAgKi9cbiAgICBJbml0VXNlckRhdGEoKSB7XG4gICAgICAgIFV0aWxzLkNDTG9nKCdJbml0VXNlckRhdGEnKTtcblxuICAgICAgICAvL+WmguaenOWtmOaho+S4uuepuiDliJnor7vlj5blrZjmoaNcbiAgICAgICAgaWYgKHRoaXMuX1VzZXJEYXRhID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuTG9hZFVzZXJEYXRhKCk7XG4gICAgICAgICAgICAvLyBMYXN0VGltZVxuICAgICAgICAgICAgLy/mm7TlhbfkuIrmrKHmuLjmiI/ml7bpl7Tmm7TmlrDlvZPlpKnmlbDmja5cbiAgICAgICAgICAgIGlmIChVdGlscy5HZXRUaW1lRGF5KGNjLnN5cy5ub3coKSkgPiBVdGlscy5HZXRUaW1lRGF5KHRoaXMuX1VzZXJEYXRhLkxhc3RUaW1lKSkge1xuICAgICAgICAgICAgICAgIFV0aWxzLkNDTG9nKFwi5Yid5aeL5YyW5b2T5aSp5pWw5o2uXCIsIFwibm93ZGF5XCIsIFV0aWxzLkdldFRpbWVEYXkoY2Muc3lzLm5vdygpKSwgXCJsYXN0ZURheVwiLCBVdGlscy5HZXRUaW1lRGF5KHRoaXMuX1VzZXJEYXRhLkxhc3RUaW1lKSk7XG4gICAgICAgICAgICAgICAgLy/mm7TmlrDmuLjmiI/ml7bpl7RcbiAgICAgICAgICAgICAgICB0aGlzLl9Vc2VyRGF0YS5MYXN0VGltZSA9IGNjLnN5cy5ub3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLlNldEd1aWRlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFV0aWxzLkNDTG9nKFwic2F2ZW1hbmFnZSBfVXNlckRhdGFcIiwgdGhpcy5fVXNlckRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572u55So5oi355qE5ZCN5a2XXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF91c2VybmFtZVxuICAgICAqL1xuICAgIFNldFVzZXJOYW1lKF91c2VybmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX1VzZXJEYXRhLlVzZXJOYW1lID0gX3VzZXJuYW1lO1xuICAgICAgICB0aGlzLlN2YXZlVXNlckRhdGEoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57nlKjmiLfnmoTlkI3lrZdcbiAgICAgKi9cbiAgICBHZXRVc2VyTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1VzZXJEYXRhLlVzZXJOYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rueUqOaIt+eahOWktOWDj1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBfaGVhZEljb25VcmxcbiAgICAgKi9cbiAgICBTZXRVc2VySGVhZEljb24oX2hlYWRJY29uVXJsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fVXNlckRhdGEuVXNlckhlYWRJY29uID0gX2hlYWRJY29uVXJsO1xuICAgICAgICB0aGlzLlN2YXZlVXNlckRhdGEoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57nmoTlpLTlg49cbiAgICAgKi9cbiAgICBHZXRIZWFkSWNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1VzZXJEYXRhLlVzZXJIZWFkSWNvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlop7liqDph5HluIFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX251bVxuICAgICAqL1xuICAgIEFkZENvaW5zKF9udW06IG51bWJlcikge1xuICAgICAgICB0aGlzLl9Vc2VyRGF0YS5Db2lucyArPSBfbnVtO1xuICAgICAgICB0aGlzLlN2YXZlVXNlckRhdGEoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlh4/lsJHph5HluIFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX251bVxuICAgICAqL1xuICAgIERlbENvaW5zKF9udW06IG51bWJlcikge1xuICAgICAgICBVdGlscy5DQ0xvZygnRGVsR2xvZCBpcyBDb2luc051bScsIF9udW0sIFwidXNlckNvaW5zXCIsIHRoaXMuX1VzZXJEYXRhLkNvaW5zKTtcbiAgICAgICAgaWYgKHRoaXMuX1VzZXJEYXRhLkNvaW5zID49IF9udW0pIHtcbiAgICAgICAgICAgIHRoaXMuX1VzZXJEYXRhLkNvaW5zIC09IF9udW07XG4gICAgICAgICAgICB0aGlzLlN2YXZlVXNlckRhdGEoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgVXRpbHMuQ0NMb2coJ0NvaW5zIGlzIGxlc3MnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/lOWbnumHkeW4gVxuICAgICAqL1xuICAgIEdldENvaW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fVXNlckRhdGEuQ29pbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572u5ri45oiP56ys5LiA5qyh5Yqg6L29XG4gICAgICogQHBhcmFtIHtib29sZWFufSBfaXNMb2FkaW5nIFxuICAgICAqL1xuICAgIFNldElzTG9hZGluZyhfaXNMb2FkaW5nOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX0lzTG9hZGluZyA9IF9pc0xvYWRpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5ri45oiP56ys5LiA5qyh5Yqg6L29XG4gICAgICovXG4gICAgR2V0SXNMb2FkaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fSXNMb2FkaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9ruWFs+WNoeaVsFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBfbGV2ZWwgXG4gICAgICovXG4gICAgU2V0TGV2ZWwoX2xldmVsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fVXNlckRhdGEuTGV2ZWwgPSBfbGV2ZWw7XG4gICAgICAgIHRoaXMuU3ZhdmVVc2VyRGF0YSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/lOWbnuWFs+WNoeaVsFxuICAgICAqL1xuICAgIEdldExldmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fVXNlckRhdGEuTGV2ZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDlop7liqDpkqXljJnmlbBcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBfbnVtXG4gICAgKi9cbiAgICBBZGRLZXlOdW0oX251bTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX1VzZXJEYXRhLktleU51bSArPSBfbnVtO1xuICAgICAgICB0aGlzLlN2YXZlVXNlckRhdGEoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIOWHj+WwkemSpeWMmeaVsFxuICAgICogQHBhcmFtIHtudW1iZXJ9IF9udW1cbiAgICAqL1xuICAgIERlbEtleU51bShfbnVtOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX1VzZXJEYXRhLktleU51bSA+PSBfbnVtKSB7XG4gICAgICAgICAgICB0aGlzLl9Vc2VyRGF0YS5LZXlOdW0gLT0gX251bTtcbiAgICAgICAgICAgIHRoaXMuU3ZhdmVVc2VyRGF0YSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/lOWbnumSpeWMmeaVsFxuICAgICAqL1xuICAgIEdldEtleU51bSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1VzZXJEYXRhLktleU51bTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7pgInkuK3nmoTnmq7ogqRcbiAgICAgKiBAcGFyYW0ge2FueX0gX2lkIFxuICAgICAqL1xuICAgIFNldFNraW5JRChfaWQ6IGFueSkge1xuICAgICAgICB0aGlzLl9Vc2VyRGF0YS5Ta2luSUQgPSBfaWQ7XG4gICAgICAgIHRoaXMuU3ZhdmVVc2VyRGF0YSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/lOWbnumAieS4reeahOearuiCpGlkXG4gICAgICovXG4gICAgR2V0U2tpbklEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fVXNlckRhdGEuU2tpbklEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOino+mUgeWvueW6lGlk55qE55qu6IKkXG4gICAgICovXG4gICAgVW5sb2NrU2tpbmRJRChfaWQ6IGFueSkge1xuICAgICAgICB0aGlzLl9Vc2VyRGF0YS5Ta2luTGlzdC5wdXNoKF9pZCk7XG4gICAgICAgIHRoaXMuU3ZhdmVVc2VyRGF0YSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/lOWbnuWvueW6lGlk55qE55qu6IKk5piv5ZCm6Kej6ZSB5LqGXG4gICAgICogQHBhcmFtIHthbnl9IF9pZCBcbiAgICAgKi9cbiAgICBTa2luSURJc1VubG9jayhfaWQ6IGFueSkge1xuICAgICAgICBsZXQgc2tpbmxpc3QgPSB0aGlzLl9Vc2VyRGF0YS5Ta2luTGlzdDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNraW5saXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBza2lubGlzdFtpbmRleF07XG4gICAgICAgICAgICBpZiAoaWQgPT0gX2lkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9ruaMh+WvvOagh+iusFxuICAgICAqL1xuICAgIFNldEd1aWRlKF92YXVsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9Vc2VyRGF0YS5HdWlkZSA9IF92YXVsZTtcbiAgICAgICAgdGhpcy5TdmF2ZVVzZXJEYXRhKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5oyH5a+85qCH6K6wXG4gICAgICovXG4gICAgR2V0R3VpZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9Vc2VyRGF0YS5HdWlkZTtcbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/BaseMd5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43cbehM4J1B5I7YEChEfoR6', 'BaseMd5');
// scripts/utils/BaseMd5.ts

"use strict";
/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  md5 加密封装
 */
var BaseMd5 = /** @class */ (function () {
    function BaseMd5() {
        /*
         * Configurable variables. You may need to tweak these to be compatible with
         * the server-side, but the defaults work in most cases.
         */
        this.hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase  */
        this.b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance */
        this.chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode  */
    }
    BaseMd5.Instance = function () {
        if (null == this.m_Instance) {
            this.m_Instance = new BaseMd5();
        }
        return this.m_Instance;
    };
    /*
     * These are the functions you'll usually want to call
     * They take string arguments and return either hex or base-64 encoded strings
     */
    BaseMd5.prototype.hex_md5 = function (s) { return this.binl2hex(this.core_md5(this.str2binl(s), s.length * this.chrsz)); };
    BaseMd5.prototype.b64_md5 = function (s) { return this.binl2b64(this.core_md5(this.str2binl(s), s.length * this.chrsz)); };
    BaseMd5.prototype.str_md5 = function (s) { return this.binl2str(this.core_md5(this.str2binl(s), s.length * this.chrsz)); };
    BaseMd5.prototype.hex_hmac_md5 = function (key, data) { return this.binl2hex(this.core_hmac_md5(key, data)); };
    BaseMd5.prototype.b64_hmac_md5 = function (key, data) { return this.binl2b64(this.core_hmac_md5(key, data)); };
    BaseMd5.prototype.str_hmac_md5 = function (key, data) { return this.binl2str(this.core_hmac_md5(key, data)); };
    /*
     * Perform a simple self-test to see if the VM is working
     */
    BaseMd5.prototype.md5_vm_test = function () {
        return this.hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
    };
    /*
     * Calculate the MD5 of an array of little-endian words, and a bit length
     */
    BaseMd5.prototype.core_md5 = function (x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = this.safe_add(a, olda);
            b = this.safe_add(b, oldb);
            c = this.safe_add(c, oldc);
            d = this.safe_add(d, oldd);
        }
        return Array(a, b, c, d);
    };
    /*
     * These functions implement the four basic operations the algorithm uses.
     */
    BaseMd5.prototype.md5_cmn = function (q, a, b, x, s, t) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
    };
    BaseMd5.prototype.md5_ff = function (a, b, c, d, x, s, t) {
        return this.md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    };
    BaseMd5.prototype.md5_gg = function (a, b, c, d, x, s, t) {
        return this.md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    };
    BaseMd5.prototype.md5_hh = function (a, b, c, d, x, s, t) {
        return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
    };
    BaseMd5.prototype.md5_ii = function (a, b, c, d, x, s, t) {
        return this.md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    };
    /*
     * Calculate the HMAC-MD5, of a key and some data
     */
    BaseMd5.prototype.core_hmac_md5 = function (key, data) {
        var bkey = this.str2binl(key);
        if (bkey.length > 16)
            bkey = this.core_md5(bkey, key.length * this.chrsz);
        var ipad = Array(16), opad = Array(16);
        for (var i = 0; i < 16; i++) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        var hash = this.core_md5(ipad.concat(this.str2binl(data)), 512 + data.length * this.chrsz);
        return this.core_md5(opad.concat(hash), 512 + 128);
    };
    /*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */
    BaseMd5.prototype.safe_add = function (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    };
    /*
     * Bitwise rotate a 32-bit number to the left.
     */
    BaseMd5.prototype.bit_rol = function (num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    };
    /*
     * Convert a string to an array of little-endian words
     * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
     */
    BaseMd5.prototype.str2binl = function (str) {
        var bin = Array();
        var mask = (1 << this.chrsz) - 1;
        for (var i = 0; i < str.length * this.chrsz; i += this.chrsz)
            bin[i >> 5] |= (str.charCodeAt(i / this.chrsz) & mask) << (i % 32);
        return bin;
    };
    /*
     * Convert an array of little-endian words to a string
     */
    BaseMd5.prototype.binl2str = function (bin) {
        var str = "";
        var mask = (1 << this.chrsz) - 1;
        for (var i = 0; i < bin.length * 32; i += this.chrsz)
            str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
        return str;
    };
    /*
     * Convert an array of little-endian words to a hex string.
     */
    BaseMd5.prototype.binl2hex = function (binarray) {
        var hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
                hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
        }
        return str;
    };
    /*
     * Convert an array of little-endian words to a base-64 string
     */
    BaseMd5.prototype.binl2b64 = function (binarray) {
        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i += 3) {
            var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16)
                | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8)
                | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
            for (var j = 0; j < 4; j++) {
                if (i * 8 + j * 6 > binarray.length * 32)
                    str += this.b64pad;
                else
                    str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
            }
        }
        return str;
    };
    BaseMd5.m_Instance = null;
    return BaseMd5;
}());
exports.default = BaseMd5;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL0Jhc2VNZDUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7O0FBR0g7O0dBRUc7QUFDSDtJQVlJO1FBSUE7OztXQUdHO1FBQ0ssWUFBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLHNEQUFzRDtRQUNuRSxXQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsMERBQTBEO1FBQ3ZFLFVBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyx3REFBd0Q7SUFSM0UsQ0FBQztJQVhhLGdCQUFRLEdBQXRCO1FBRUksSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFDMUI7WUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7U0FDbkM7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQWNEOzs7T0FHRztJQUNJLHlCQUFPLEdBQWQsVUFBZSxDQUFDLElBQUcsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztJQUMxRix5QkFBTyxHQUFkLFVBQWUsQ0FBQyxJQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7SUFDMUYseUJBQU8sR0FBZCxVQUFlLENBQUMsSUFBRyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO0lBQzFGLDhCQUFZLEdBQW5CLFVBQW9CLEdBQUcsRUFBRSxJQUFJLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLDhCQUFZLEdBQW5CLFVBQW9CLEdBQUcsRUFBRSxJQUFJLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLDhCQUFZLEdBQW5CLFVBQW9CLEdBQUcsRUFBRSxJQUFJLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGOztPQUVHO0lBQ0ksNkJBQVcsR0FBbEI7UUFFQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksa0NBQWtDLENBQUM7SUFDbEUsQ0FBQztJQUNEOztPQUVHO0lBQ0ssMEJBQVEsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLEdBQUc7UUFFdEIsb0JBQW9CO1FBQ3BCLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQ3BDO1lBQ0EsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3BELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNyRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0RCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUcsVUFBVSxDQUFDLENBQUM7WUFDckQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNyRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0RCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRyxTQUFTLENBQUMsQ0FBQztZQUNwRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0RCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDckQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNyRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0RCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDckQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFHLFNBQVMsQ0FBQyxDQUFDO1lBQ3BELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNuRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRyxVQUFVLENBQUMsQ0FBQztZQUNyRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0RCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0RCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUcsVUFBVSxDQUFDLENBQUM7WUFDckQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RELENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNwRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNCLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzQixDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDMUI7UUFDRCxPQUFPLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Q7O09BRUc7SUFDSyx5QkFBTyxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUUvQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUNPLHdCQUFNLEdBQWQsVUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRWpDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNPLHdCQUFNLEdBQWQsVUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRWpDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNPLHdCQUFNLEdBQWQsVUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRWpDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNPLHdCQUFNLEdBQWQsVUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRWpDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRDs7T0FFRztJQUNLLCtCQUFhLEdBQXJCLFVBQXNCLEdBQUcsRUFBRSxJQUFJO1FB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LENBQUM7SUFrUC9DLGNBQUM7Q0FwUEQsQUFvUEMsSUFBQTtrQkFwUG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuwqAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbsKgKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuwqAqIFZlcnNpb24gMi4xIENvcHlyaWdodCAoQykgUGF1bCBKb2huc3RvbiAxOTk5IC0gMjAwMi5cbsKgKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG7CoCogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG7CoCogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbsKgKi9cblxuXG4vKipcbiAqICBtZDUg5Yqg5a+G5bCB6KOFXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNZDUgXG57XG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9JbnN0YW5jZSA6IEJhc2VNZDUgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2UoKTpCYXNlTWQ1XG4gICAge1xuICAgICAgICBpZihudWxsID09IHRoaXMubV9JbnN0YW5jZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5tX0luc3RhbmNlID0gbmV3IEJhc2VNZDUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tX0luc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIFxuICAgIHtcbiAgICB9XG5cbiAgICAvKlxuICAgIMKgKiBDb25maWd1cmFibGUgdmFyaWFibGVzLiBZb3UgbWF5IG5lZWQgdG8gdHdlYWsgdGhlc2UgdG8gYmUgY29tcGF0aWJsZSB3aXRoXG4gICAgwqAqIHRoZSBzZXJ2ZXItc2lkZSwgYnV0IHRoZSBkZWZhdWx0cyB3b3JrIGluIG1vc3QgY2FzZXMuXG4gICAgwqAqL1xuICAgIHByaXZhdGUgaGV4Y2FzZSA9IDA7IC8qIGhleCBvdXRwdXQgZm9ybWF0LiAwIC0gbG93ZXJjYXNlOyAxIC0gdXBwZXJjYXNlwqAgKi9cbiAgICBwcml2YXRlIGI2NHBhZCA9IFwiXCI7IC8qIGJhc2UtNjQgcGFkIGNoYXJhY3Rlci4gXCI9XCIgZm9yIHN0cmljdCBSRkMgY29tcGxpYW5jZSAqL1xuICAgIHByaXZhdGUgY2hyc3ogPSA4OyAvKiBiaXRzIHBlciBpbnB1dCBjaGFyYWN0ZXIuIDggLSBBU0NJSTsgMTYgLSBVbmljb2RlwqAgKi9cblxuICAgIC8qXG4gICAgwqAqIFRoZXNlIGFyZSB0aGUgZnVuY3Rpb25zIHlvdSdsbCB1c3VhbGx5IHdhbnQgdG8gY2FsbFxuICAgIMKgKiBUaGV5IHRha2Ugc3RyaW5nIGFyZ3VtZW50cyBhbmQgcmV0dXJuIGVpdGhlciBoZXggb3IgYmFzZS02NCBlbmNvZGVkIHN0cmluZ3NcbiAgICDCoCovXG4gICAgcHVibGljIGhleF9tZDUocyl7IHJldHVybiB0aGlzLmJpbmwyaGV4KHRoaXMuY29yZV9tZDUodGhpcy5zdHIyYmlubChzKSwgcy5sZW5ndGggKiB0aGlzLmNocnN6KSk7fVxuICAgIHB1YmxpYyBiNjRfbWQ1KHMpeyByZXR1cm4gdGhpcy5iaW5sMmI2NCh0aGlzLmNvcmVfbWQ1KHRoaXMuc3RyMmJpbmwocyksIHMubGVuZ3RoICogdGhpcy5jaHJzeikpO31cbiAgICBwdWJsaWMgc3RyX21kNShzKXsgcmV0dXJuIHRoaXMuYmlubDJzdHIodGhpcy5jb3JlX21kNSh0aGlzLnN0cjJiaW5sKHMpLCBzLmxlbmd0aCAqIHRoaXMuY2hyc3opKTt9XG4gICAgcHVibGljIGhleF9obWFjX21kNShrZXksIGRhdGEpIHsgcmV0dXJuIHRoaXMuYmlubDJoZXgodGhpcy5jb3JlX2htYWNfbWQ1KGtleSwgZGF0YSkpOyB9XG4gICAgcHVibGljIGI2NF9obWFjX21kNShrZXksIGRhdGEpIHsgcmV0dXJuIHRoaXMuYmlubDJiNjQodGhpcy5jb3JlX2htYWNfbWQ1KGtleSwgZGF0YSkpOyB9XG4gICAgcHVibGljIHN0cl9obWFjX21kNShrZXksIGRhdGEpIHsgcmV0dXJuIHRoaXMuYmlubDJzdHIodGhpcy5jb3JlX2htYWNfbWQ1KGtleSwgZGF0YSkpOyB9XG4gICAgLypcbiAgICDCoCogUGVyZm9ybSBhIHNpbXBsZSBzZWxmLXRlc3QgdG8gc2VlIGlmIHRoZSBWTSBpcyB3b3JraW5nXG4gICAgwqAqL1xuICAgIHB1YmxpYyBtZDVfdm1fdGVzdCgpXG4gICAge1xuICAgIMKgcmV0dXJuIHRoaXMuaGV4X21kNShcImFiY1wiKSA9PSBcIjkwMDE1MDk4M2NkMjRmYjBkNjk2M2Y3ZDI4ZTE3ZjcyXCI7XG4gICAgfVxuICAgIC8qXG4gICAgwqAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGhcbiAgICDCoCovXG4gICAgcHJpdmF0ZSBjb3JlX21kNSh4LCBsZW4pXG4gICAge1xuICAgIMKgLyogYXBwZW5kIHBhZGRpbmcgKi9cbiAgICDCoHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgKChsZW4pICUgMzIpO1xuICAgIMKgeFsoKChsZW4gKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gbGVuO1xuICAgIMKgdmFyIGEgPSAxNzMyNTg0MTkzO1xuICAgIMKgdmFyIGIgPSAtMjcxNzMzODc5O1xuICAgIMKgdmFyIGMgPSAtMTczMjU4NDE5NDtcbiAgICDCoHZhciBkID0gMjcxNzMzODc4O1xuICAgIMKgZm9yKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KVxuICAgIMKge1xuICAgIMKgdmFyIG9sZGEgPSBhO1xuICAgIMKgdmFyIG9sZGIgPSBiO1xuICAgIMKgdmFyIG9sZGMgPSBjO1xuICAgIMKgdmFyIG9sZGQgPSBkO1xuICAgIMKgYSA9IHRoaXMubWQ1X2ZmKGEsIGIsIGMsIGQsIHhbaSsgMF0sIDcgLCAtNjgwODc2OTM2KTtcbiAgICDCoGQgPSB0aGlzLm1kNV9mZihkLCBhLCBiLCBjLCB4W2krIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgwqBjID0gdGhpcy5tZDVfZmYoYywgZCwgYSwgYiwgeFtpKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgwqBiID0gdGhpcy5tZDVfZmYoYiwgYywgZCwgYSwgeFtpKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICDCoGEgPSB0aGlzLm1kNV9mZihhLCBiLCBjLCBkLCB4W2krIDRdLCA3ICwgLTE3NjQxODg5Nyk7XG4gICAgwqBkID0gdGhpcy5tZDVfZmYoZCwgYSwgYiwgYywgeFtpKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIMKgYyA9IHRoaXMubWQ1X2ZmKGMsIGQsIGEsIGIsIHhbaSsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgwqBiID0gdGhpcy5tZDVfZmYoYiwgYywgZCwgYSwgeFtpKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgwqBhID0gdGhpcy5tZDVfZmYoYSwgYiwgYywgZCwgeFtpKyA4XSwgNyAsIDE3NzAwMzU0MTYpO1xuICAgIMKgZCA9IHRoaXMubWQ1X2ZmKGQsIGEsIGIsIGMsIHhbaSsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgwqBjID0gdGhpcy5tZDVfZmYoYywgZCwgYSwgYiwgeFtpKzEwXSwgMTcsIC00MjA2Myk7XG4gICAgwqBiID0gdGhpcy5tZDVfZmYoYiwgYywgZCwgYSwgeFtpKzExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICDCoGEgPSB0aGlzLm1kNV9mZihhLCBiLCBjLCBkLCB4W2krMTJdLCA3ICwgMTgwNDYwMzY4Mik7XG4gICAgwqBkID0gdGhpcy5tZDVfZmYoZCwgYSwgYiwgYywgeFtpKzEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgwqBjID0gdGhpcy5tZDVfZmYoYywgZCwgYSwgYiwgeFtpKzE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICDCoGIgPSB0aGlzLm1kNV9mZihiLCBjLCBkLCBhLCB4W2krMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgwqBhID0gdGhpcy5tZDVfZ2coYSwgYiwgYywgZCwgeFtpKyAxXSwgNSAsIC0xNjU3OTY1MTApO1xuICAgIMKgZCA9IHRoaXMubWQ1X2dnKGQsIGEsIGIsIGMsIHhbaSsgNl0sIDkgLCAtMTA2OTUwMTYzMik7XG4gICAgwqBjID0gdGhpcy5tZDVfZ2coYywgZCwgYSwgYiwgeFtpKzExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgwqBiID0gdGhpcy5tZDVfZ2coYiwgYywgZCwgYSwgeFtpKyAwXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIMKgYSA9IHRoaXMubWQ1X2dnKGEsIGIsIGMsIGQsIHhbaSsgNV0sIDUgLCAtNzAxNTU4NjkxKTtcbiAgICDCoGQgPSB0aGlzLm1kNV9nZyhkLCBhLCBiLCBjLCB4W2krMTBdLCA5ICwgMzgwMTYwODMpO1xuICAgIMKgYyA9IHRoaXMubWQ1X2dnKGMsIGQsIGEsIGIsIHhbaSsxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICDCoGIgPSB0aGlzLm1kNV9nZyhiLCBjLCBkLCBhLCB4W2krIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgwqBhID0gdGhpcy5tZDVfZ2coYSwgYiwgYywgZCwgeFtpKyA5XSwgNSAsIDU2ODQ0NjQzOCk7XG4gICAgwqBkID0gdGhpcy5tZDVfZ2coZCwgYSwgYiwgYywgeFtpKzE0XSwgOSAsIC0xMDE5ODAzNjkwKTtcbiAgICDCoGMgPSB0aGlzLm1kNV9nZyhjLCBkLCBhLCBiLCB4W2krIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgwqBiID0gdGhpcy5tZDVfZ2coYiwgYywgZCwgYSwgeFtpKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIMKgYSA9IHRoaXMubWQ1X2dnKGEsIGIsIGMsIGQsIHhbaSsxM10sIDUgLCAtMTQ0NDY4MTQ2Nyk7XG4gICAgwqBkID0gdGhpcy5tZDVfZ2coZCwgYSwgYiwgYywgeFtpKyAyXSwgOSAsIC01MTQwMzc4NCk7XG4gICAgwqBjID0gdGhpcy5tZDVfZ2coYywgZCwgYSwgYiwgeFtpKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgIMKgYiA9IHRoaXMubWQ1X2dnKGIsIGMsIGQsIGEsIHhbaSsxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgwqBhID0gdGhpcy5tZDVfaGgoYSwgYiwgYywgZCwgeFtpKyA1XSwgNCAsIC0zNzg1NTgpO1xuICAgIMKgZCA9IHRoaXMubWQ1X2hoKGQsIGEsIGIsIGMsIHhbaSsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgwqBjID0gdGhpcy5tZDVfaGgoYywgZCwgYSwgYiwgeFtpKzExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgIMKgYiA9IHRoaXMubWQ1X2hoKGIsIGMsIGQsIGEsIHhbaSsxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgIMKgYSA9IHRoaXMubWQ1X2hoKGEsIGIsIGMsIGQsIHhbaSsgMV0sIDQgLCAtMTUzMDk5MjA2MCk7XG4gICAgwqBkID0gdGhpcy5tZDVfaGgoZCwgYSwgYiwgYywgeFtpKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgIMKgYyA9IHRoaXMubWQ1X2hoKGMsIGQsIGEsIGIsIHhbaSsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICDCoGIgPSB0aGlzLm1kNV9oaChiLCBjLCBkLCBhLCB4W2krMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIMKgYSA9IHRoaXMubWQ1X2hoKGEsIGIsIGMsIGQsIHhbaSsxM10sIDQgLCA2ODEyNzkxNzQpO1xuICAgIMKgZCA9IHRoaXMubWQ1X2hoKGQsIGEsIGIsIGMsIHhbaSsgMF0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICDCoGMgPSB0aGlzLm1kNV9oaChjLCBkLCBhLCBiLCB4W2krIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgwqBiID0gdGhpcy5tZDVfaGgoYiwgYywgZCwgYSwgeFtpKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICDCoGEgPSB0aGlzLm1kNV9oaChhLCBiLCBjLCBkLCB4W2krIDldLCA0ICwgLTY0MDM2NDQ4Nyk7XG4gICAgwqBkID0gdGhpcy5tZDVfaGgoZCwgYSwgYiwgYywgeFtpKzEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIMKgYyA9IHRoaXMubWQ1X2hoKGMsIGQsIGEsIGIsIHhbaSsxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIMKgYiA9IHRoaXMubWQ1X2hoKGIsIGMsIGQsIGEsIHhbaSsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICDCoGEgPSB0aGlzLm1kNV9paShhLCBiLCBjLCBkLCB4W2krIDBdLCA2ICwgLTE5ODYzMDg0NCk7XG4gICAgwqBkID0gdGhpcy5tZDVfaWkoZCwgYSwgYiwgYywgeFtpKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIMKgYyA9IHRoaXMubWQ1X2lpKGMsIGQsIGEsIGIsIHhbaSsxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgwqBiID0gdGhpcy5tZDVfaWkoYiwgYywgZCwgYSwgeFtpKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgwqBhID0gdGhpcy5tZDVfaWkoYSwgYiwgYywgZCwgeFtpKzEyXSwgNiAsIDE3MDA0ODU1NzEpO1xuICAgIMKgZCA9IHRoaXMubWQ1X2lpKGQsIGEsIGIsIGMsIHhbaSsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgwqBjID0gdGhpcy5tZDVfaWkoYywgZCwgYSwgYiwgeFtpKzEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICDCoGIgPSB0aGlzLm1kNV9paShiLCBjLCBkLCBhLCB4W2krIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIMKgYSA9IHRoaXMubWQ1X2lpKGEsIGIsIGMsIGQsIHhbaSsgOF0sIDYgLCAxODczMzEzMzU5KTtcbiAgICDCoGQgPSB0aGlzLm1kNV9paShkLCBhLCBiLCBjLCB4W2krMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICDCoGMgPSB0aGlzLm1kNV9paShjLCBkLCBhLCBiLCB4W2krIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIMKgYiA9IHRoaXMubWQ1X2lpKGIsIGMsIGQsIGEsIHhbaSsxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICDCoGEgPSB0aGlzLm1kNV9paShhLCBiLCBjLCBkLCB4W2krIDRdLCA2ICwgLTE0NTUyMzA3MCk7XG4gICAgwqBkID0gdGhpcy5tZDVfaWkoZCwgYSwgYiwgYywgeFtpKzExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICDCoGMgPSB0aGlzLm1kNV9paShjLCBkLCBhLCBiLCB4W2krIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICDCoGIgPSB0aGlzLm1kNV9paShiLCBjLCBkLCBhLCB4W2krIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgwqBhID0gdGhpcy5zYWZlX2FkZChhLCBvbGRhKTtcbiAgICDCoGIgPSB0aGlzLnNhZmVfYWRkKGIsIG9sZGIpO1xuICAgIMKgYyA9IHRoaXMuc2FmZV9hZGQoYywgb2xkYyk7XG4gICAgwqBkID0gdGhpcy5zYWZlX2FkZChkLCBvbGRkKTtcbiAgICDCoH1cbiAgICDCoHJldHVybiBBcnJheShhLCBiLCBjLCBkKTtcbiAgICB9XG4gICAgLypcbiAgICDCoCogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAgICDCoCovXG4gICAgcHJpdmF0ZSBtZDVfY21uKHEsIGEsIGIsIHgsIHMsIHQpXG4gICAge1xuICAgIMKgcmV0dXJuIHRoaXMuc2FmZV9hZGQodGhpcy5iaXRfcm9sKHRoaXMuc2FmZV9hZGQodGhpcy5zYWZlX2FkZChhLCBxKSwgdGhpcy5zYWZlX2FkZCh4LCB0KSksIHMpLGIpO1xuICAgIH1cbiAgICBwcml2YXRlIG1kNV9mZihhLCBiLCBjLCBkLCB4LCBzLCB0KVxuICAgIHtcbiAgICDCoHJldHVybiB0aGlzLm1kNV9jbW4oKGIgJiBjKSB8ICgofmIpICYgZCksIGEsIGIsIHgsIHMsIHQpO1xuICAgIH1cbiAgICBwcml2YXRlIG1kNV9nZyhhLCBiLCBjLCBkLCB4LCBzLCB0KVxuICAgIHtcbiAgICDCoHJldHVybiB0aGlzLm1kNV9jbW4oKGIgJiBkKSB8IChjICYgKH5kKSksIGEsIGIsIHgsIHMsIHQpO1xuICAgIH1cbiAgICBwcml2YXRlIG1kNV9oaChhLCBiLCBjLCBkLCB4LCBzLCB0KVxuICAgIHtcbiAgICDCoHJldHVybiB0aGlzLm1kNV9jbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBtZDVfaWkoYSwgYiwgYywgZCwgeCwgcywgdClcbiAgICB7XG4gICAgwqByZXR1cm4gdGhpcy5tZDVfY21uKGMgXiAoYiB8ICh+ZCkpLCBhLCBiLCB4LCBzLCB0KTtcbiAgICB9XG4gICAgLypcbiAgICDCoCogQ2FsY3VsYXRlIHRoZSBITUFDLU1ENSwgb2YgYSBrZXkgYW5kIHNvbWUgZGF0YVxuICAgIMKgKi9cbiAgICBwcml2YXRlIGNvcmVfaG1hY19tZDUoa2V5LCBkYXRhKVxuICAgIHtcbiAgICDCoHZhciBia2V5ID0gdGhpcy5zdHIyYmlubChrZXkpO1xuICAgIMKgaWYoYmtleS5sZW5ndGggPiAxNikgYmtleSA9IHRoaXMuY29yZV9tZDUoYmtleSwga2V5Lmxlbmd0aCAqIHRoaXMuY2hyc3opO1xuICAgIMKgdmFyIGlwYWQgPSBBcnJheSgxNiksIG9wYWQgPSBBcnJheSgxNik7XG4gICAgwqBmb3IodmFyIGkgPSAwOyBpIDwgMTY7IGkrKylcbiAgICDCoHtcbiAgICDCoGlwYWRbaV0gPSBia2V5W2ldIF4gMHgzNjM2MzYzNjtcbiAgICDCoG9wYWRbaV0gPSBia2V5W2ldIF4gMHg1QzVDNUM1QztcbiAgICDCoH1cbiAgICDCoHZhciBoYXNoID0gdGhpcy5jb3JlX21kNShpcGFkLmNvbmNhdCh0aGlzLnN0cjJiaW5sKGRhdGEpKSwgNTEyICsgZGF0YS5sZW5ndGggKiB0aGlzLmNocnN6KTtcbiAgICDCoHJldHVybiB0aGlzLmNvcmVfbWQ1KG9wYWQuY29uY2F0KGhhc2gpLCA1MTIgKyAxMjgpO1xuICAgIH1cbiAgICAvKlxuICAgIMKgKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gICAgwqAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gICAgwqAqL1xuICAgIHByaXZhdGUgc2FmZV9hZGQoeCwgeSlcbiAgICB7XG4gICAgwqB2YXIgbHN3ID0gKHggJiAweEZGRkYpICsgKHkgJiAweEZGRkYpO1xuICAgIMKgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICAgIMKgcmV0dXJuIChtc3cgPDwgMTYpIHwgKGxzdyAmIDB4RkZGRik7XG4gICAgfVxuICAgIC8qXG4gICAgwqAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAgICDCoCovXG4gICAgcHJpdmF0ZSBiaXRfcm9sKG51bSwgY250KVxuICAgIHtcbiAgICDCoHJldHVybiAobnVtIDw8IGNudCkgfCAobnVtID4+PiAoMzIgLSBjbnQpKTtcbiAgICB9XG4gICAgLypcbiAgICDCoCogQ29udmVydCBhIHN0cmluZyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gICAgwqAqIElmIGNocnN6IGlzIEFTQ0lJLCBjaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaS1ieXRlIHNpbGVudGx5IGlnbm9yZWQuXG4gICAgwqAqL1xuICAgIHByaXZhdGUgc3RyMmJpbmwoc3RyKVxuICAgIHtcbiAgICDCoHZhciBiaW4gPSBBcnJheSgpO1xuICAgIMKgdmFyIG1hc2sgPSAoMSA8PCB0aGlzLmNocnN6KSAtIDE7XG4gICAgwqBmb3IodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aCAqIHRoaXMuY2hyc3o7IGkgKz0gdGhpcy5jaHJzeilcbiAgICDCoGJpbltpPj41XSB8PSAoc3RyLmNoYXJDb2RlQXQoaSAvIHRoaXMuY2hyc3opICYgbWFzaykgPDwgKGklMzIpO1xuICAgIMKgcmV0dXJuIGJpbjtcbiAgICB9XG4gICAgLypcbiAgICDCoCogQ29udmVydCBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzIHRvIGEgc3RyaW5nXG4gICAgwqAqL1xuICAgIHByaXZhdGUgYmlubDJzdHIoYmluKVxuICAgIHtcbiAgICDCoHZhciBzdHIgPSBcIlwiO1xuICAgIMKgdmFyIG1hc2sgPSAoMSA8PCB0aGlzLmNocnN6KSAtIDE7XG4gICAgwqBmb3IodmFyIGkgPSAwOyBpIDwgYmluLmxlbmd0aCAqIDMyOyBpICs9IHRoaXMuY2hyc3opXG4gICAgwqBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYmluW2k+PjVdID4+PiAoaSAlIDMyKSkgJiBtYXNrKTtcbiAgICDCoHJldHVybiBzdHI7XG4gICAgfVxuICAgIC8qXG4gICAgwqAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhIGhleCBzdHJpbmcuXG4gICAgwqAqL1xuICAgIHByaXZhdGUgYmlubDJoZXgoYmluYXJyYXkpXG4gICAge1xuICAgIMKgdmFyIGhleF90YWIgPSB0aGlzLmhleGNhc2UgPyBcIjAxMjM0NTY3ODlBQkNERUZcIiA6IFwiMDEyMzQ1Njc4OWFiY2RlZlwiO1xuICAgIMKgdmFyIHN0ciA9IFwiXCI7XG4gICAgwqBmb3IodmFyIGkgPSAwOyBpIDwgYmluYXJyYXkubGVuZ3RoICogNDsgaSsrKVxuICAgIMKge1xuICAgIMKgc3RyICs9IGhleF90YWIuY2hhckF0KChiaW5hcnJheVtpPj4yXSA+PiAoKGklNCkqOCs0KSkgJiAweEYpICtcbiAgICDCoMKgwqBoZXhfdGFiLmNoYXJBdCgoYmluYXJyYXlbaT4+Ml0gPj4gKChpJTQpKjggKSkgJiAweEYpO1xuICAgIMKgfVxuICAgIMKgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgLypcbiAgICDCoCogQ29udmVydCBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzIHRvIGEgYmFzZS02NCBzdHJpbmdcbiAgICDCoCovXG4gICAgcHJpdmF0ZSBiaW5sMmI2NChiaW5hcnJheSlcbiAgICB7XG4gICAgwqB2YXIgdGFiID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCI7XG4gICAgwqB2YXIgc3RyID0gXCJcIjtcbiAgICDCoGZvcih2YXIgaSA9IDA7IGkgPCBiaW5hcnJheS5sZW5ndGggKiA0OyBpICs9IDMpXG4gICAgwqB7XG4gICAgwqB2YXIgdHJpcGxldCA9ICgoKGJpbmFycmF5W2kgPj4gMl0gPj4gOCAqICggaSAlNCkpICYgMHhGRikgPDwgMTYpXG4gICAgwqDCoMKgwqB8ICgoKGJpbmFycmF5W2krMSA+PiAyXSA+PiA4ICogKChpKzEpJTQpKSAmIDB4RkYpIDw8IDggKVxuICAgIMKgwqDCoMKgfCAoKGJpbmFycmF5W2krMiA+PiAyXSA+PiA4ICogKChpKzIpJTQpKSAmIDB4RkYpO1xuICAgIMKgZm9yKHZhciBqID0gMDsgaiA8IDQ7IGorKylcbiAgICDCoHtcbiAgICDCoMKgaWYoaSAqIDggKyBqICogNiA+IGJpbmFycmF5Lmxlbmd0aCAqIDMyKSBzdHIgKz0gdGhpcy5iNjRwYWQ7XG4gICAgwqDCoGVsc2Ugc3RyICs9IHRhYi5jaGFyQXQoKHRyaXBsZXQgPj4gNiooMy1qKSkgJiAweDNGKTtcbiAgICDCoH1cbiAgICDCoH1cbiAgICDCoHJldHVybiBzdHI7XG4gICAgfVxuXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manage/NodePoolManage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8e395Bhf9Nkqy1cYsON1Wh', 'NodePoolManage');
// scripts/manage/NodePoolManage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../utils/Utils");
exports.PoolName = {
    Obs: "Obs",
    Car: "Car",
    Map: "map"
};
var NodePoolData = {
    nodePool: null,
    prefab: null,
};
var NodePoolManage = /** @class */ (function () {
    /**
     * 构造函数
     */
    function NodePoolManage() {
        this.m_NodePool = new Map();
    }
    NodePoolManage.getInstance = function () {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new NodePoolManage());
        return this._instance;
    };
    /**
     * 创建对象池
     * @param {string} _key 对象池名字
     * @param {any} _prefab 预制体
     * @param {number} _count 创建的数量
     */
    NodePoolManage.prototype.CreateNoodePool = function (_key, _prefab, _count) {
        Utils_1.default.CCLog("CreateNpcNoodePool", _count);
        if (_key == "" || _prefab == null || _count == 0) {
            return;
        }
        //先判断是否有该对象池
        var nodePoolData = this.m_NodePool.get(_key);
        //如果不存在就新建一个对象池
        if (!nodePoolData) {
            nodePoolData = Utils_1.default.CloneObj(NodePoolData);
            nodePoolData.nodePool = new cc.NodePool();
            nodePoolData.prefab = _prefab;
            this.m_NodePool.set(_key, nodePoolData);
        }
        for (var index = 0; index < _count; index++) {
            var objnode = cc.instantiate(nodePoolData.prefab);
            nodePoolData.nodePool.put(objnode);
        }
        Utils_1.default.CCLog("this.m_NodePool", this.m_NodePool);
    };
    /**
     * 获取一个node
     * @param {string} _key 对象池名字
     * @param {cc.Node} _parent
     */
    NodePoolManage.prototype.GetNodeToNoodePool = function (_key, _parent) {
        if (_parent === void 0) { _parent = null; }
        var objNode = null;
        //先判断是否有该对象池
        var nodePoolData = this.m_NodePool.get(_key);
        //如果不存在
        if (!nodePoolData) {
            Utils_1.default.CCLog(_key + "__nodepool_not_create");
            return objNode;
        }
        // 通过 size 接口判断对象池中是否有空闲的对象
        if (nodePoolData.nodePool.size()) {
            objNode = nodePoolData.nodePool.get();
        }
        else {
            //生成一个新的对象
            objNode = cc.instantiate(nodePoolData.prefab);
        }
        objNode.parent = _parent; // 将生成的敌人加入节点树
        return objNode;
    };
    /**
     * 将单独的node归还对象池
     * @param {string} _key 对象池名字
     * @param {cc.Node} _npcNode
     */
    NodePoolManage.prototype.PutNodeToNoodePool = function (_key, _node) {
        //先判断是否有该对象池
        var nodePoolData = this.m_NodePool.get(_key);
        //如果不存在
        if (!nodePoolData) {
            Utils_1.default.CCLog(_key + "__nodepool_not_create");
            return;
        }
        //将node放回节点
        nodePoolData.nodePool.put(_node);
        // Utils.CCLog("this.m_NodePool", this.m_NodePool);
    };
    /**
     * 清除对应的对象池
     * @param {string} _key 对象池名字
     */
    NodePoolManage.prototype.ClearNoodePool = function (_key) {
        //先判断是否有该对象池
        var nodePoolData = this.m_NodePool.get(_key);
        //如果不存在
        if (!nodePoolData) {
            Utils_1.default.CCLog(_key + "__nodepool_not_create");
            return;
        }
        //调用clear清除对象池
        nodePoolData.nodePool.clear();
        //将对象在map删除
        this.m_NodePool.delete(_key);
    };
    return NodePoolManage;
}());
exports.default = NodePoolManage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZS9Ob2RlUG9vbE1hbmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFtQztBQUV4QixRQUFBLFFBQVEsR0FBRztJQUNsQixHQUFHLEVBQUUsS0FBSztJQUNWLEdBQUcsRUFBRSxLQUFLO0lBQ1YsR0FBRyxFQUFFLEtBQUs7Q0FDYixDQUFBO0FBRUQsSUFBSSxZQUFZLEdBQUc7SUFDZixRQUFRLEVBQUUsSUFBSTtJQUNkLE1BQU0sRUFBRSxJQUFJO0NBQ2YsQ0FBQTtBQUVEO0lBTUk7O09BRUc7SUFDSDtRQUxRLGVBQVUsR0FBcUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQU9qRCxDQUFDO0lBRWEsMEJBQVcsR0FBekI7UUFDSSx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQyxDQUFBO1FBQ3pELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUN6QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSx3Q0FBZSxHQUF0QixVQUF1QixJQUFZLEVBQUUsT0FBWSxFQUFFLE1BQWM7UUFDN0QsZUFBSyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUN6QyxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzlDLE9BQU87U0FDVjtRQUVELFlBQVk7UUFDWixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxlQUFlO1FBQ2YsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNmLFlBQVksR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzVDLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDMUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7WUFFOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFBO1NBQzFDO1FBRUQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN6QyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRCxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QztRQUVELGVBQUssQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksMkNBQWtCLEdBQXpCLFVBQTBCLElBQVksRUFBRSxPQUF1QjtRQUF2Qix3QkFBQSxFQUFBLGNBQXVCO1FBQzNELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztRQUNuQixZQUFZO1FBQ1osSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsT0FBTztRQUNQLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDZixlQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyx1QkFBdUIsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sT0FBTyxDQUFDO1NBQ2xCO1FBRUQsMkJBQTJCO1FBQzNCLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM5QixPQUFPLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN6QzthQUNJO1lBQ0QsVUFBVTtZQUNWLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsY0FBYztRQUN4QyxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDJDQUFrQixHQUF6QixVQUEwQixJQUFZLEVBQUUsS0FBYztRQUVsRCxZQUFZO1FBQ1osSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsT0FBTztRQUNQLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDZixlQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyx1QkFBdUIsQ0FBQyxDQUFDO1lBQzVDLE9BQU87U0FDVjtRQUNELFdBQVc7UUFDWCxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxtREFBbUQ7SUFDdkQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHVDQUFjLEdBQXJCLFVBQXNCLElBQVk7UUFFOUIsWUFBWTtRQUNaLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLE9BQU87UUFDUCxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2YsZUFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsdUJBQXVCLENBQUMsQ0FBQztZQUM1QyxPQUFPO1NBQ1Y7UUFDRCxjQUFjO1FBQ2QsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixXQUFXO1FBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FwSEEsQUFvSEMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IHZhciBQb29sTmFtZSA9IHtcbiAgICBPYnM6IFwiT2JzXCIsXG4gICAgQ2FyOiBcIkNhclwiLFxuICAgIE1hcDogXCJtYXBcIlxufVxuXG52YXIgTm9kZVBvb2xEYXRhID0ge1xuICAgIG5vZGVQb29sOiBudWxsLFxuICAgIHByZWZhYjogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVBvb2xNYW5hZ2Uge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBOb2RlUG9vbE1hbmFnZTtcblxuICAgIHByaXZhdGUgbV9Ob2RlUG9vbDogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXAoKTtcblxuICAgIC8qKlxuICAgICAqIOaehOmAoOWHveaVsFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBOb2RlUG9vbE1hbmFnZSB7XG4gICAgICAgIC8vIOWmguaenCBpbnN0YW5jZSDmmK/kuIDkuKrlrp7kvosg55u05o6l6L+U5Zue77yMICDlpoLmnpzkuI3mmK8g5a6e5L6L5YyW5ZCO6L+U5ZueXG4gICAgICAgIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyBOb2RlUG9vbE1hbmFnZSgpKVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJvlu7rlr7nosaHmsaBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX2tleSDlr7nosaHmsaDlkI3lrZdcbiAgICAgKiBAcGFyYW0ge2FueX0gX3ByZWZhYiDpooTliLbkvZNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX2NvdW50IOWIm+W7uueahOaVsOmHj1xuICAgICAqL1xuICAgIHB1YmxpYyBDcmVhdGVOb29kZVBvb2woX2tleTogc3RyaW5nLCBfcHJlZmFiOiBhbnksIF9jb3VudDogbnVtYmVyKSB7XG4gICAgICAgIFV0aWxzLkNDTG9nKFwiQ3JlYXRlTnBjTm9vZGVQb29sXCIsIF9jb3VudClcbiAgICAgICAgaWYgKF9rZXkgPT0gXCJcIiB8fCBfcHJlZmFiID09IG51bGwgfHwgX2NvdW50ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5YWI5Yik5pat5piv5ZCm5pyJ6K+l5a+56LGh5rGgXG4gICAgICAgIGxldCBub2RlUG9vbERhdGEgPSB0aGlzLm1fTm9kZVBvb2wuZ2V0KF9rZXkpO1xuICAgICAgICAvL+WmguaenOS4jeWtmOWcqOWwseaWsOW7uuS4gOS4quWvueixoeaxoFxuICAgICAgICBpZiAoIW5vZGVQb29sRGF0YSkge1xuICAgICAgICAgICAgbm9kZVBvb2xEYXRhID0gVXRpbHMuQ2xvbmVPYmooTm9kZVBvb2xEYXRhKTtcbiAgICAgICAgICAgIG5vZGVQb29sRGF0YS5ub2RlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICAgICAgICAgICAgbm9kZVBvb2xEYXRhLnByZWZhYiA9IF9wcmVmYWI7XG5cbiAgICAgICAgICAgIHRoaXMubV9Ob2RlUG9vbC5zZXQoX2tleSwgbm9kZVBvb2xEYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IF9jb3VudDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IG9iam5vZGUgPSBjYy5pbnN0YW50aWF0ZShub2RlUG9vbERhdGEucHJlZmFiKTtcbiAgICAgICAgICAgIG5vZGVQb29sRGF0YS5ub2RlUG9vbC5wdXQob2Jqbm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBVdGlscy5DQ0xvZyhcInRoaXMubV9Ob2RlUG9vbFwiLCB0aGlzLm1fTm9kZVBvb2wpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluS4gOS4qm5vZGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX2tleSDlr7nosaHmsaDlkI3lrZdcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IF9wYXJlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgR2V0Tm9kZVRvTm9vZGVQb29sKF9rZXk6IHN0cmluZywgX3BhcmVudDogY2MuTm9kZSA9IG51bGwpOiBjYy5Ob2RlIHtcbiAgICAgICAgbGV0IG9iak5vZGUgPSBudWxsO1xuICAgICAgICAvL+WFiOWIpOaWreaYr+WQpuacieivpeWvueixoeaxoFxuICAgICAgICBsZXQgbm9kZVBvb2xEYXRhID0gdGhpcy5tX05vZGVQb29sLmdldChfa2V5KTtcbiAgICAgICAgLy/lpoLmnpzkuI3lrZjlnKhcbiAgICAgICAgaWYgKCFub2RlUG9vbERhdGEpIHtcbiAgICAgICAgICAgIFV0aWxzLkNDTG9nKF9rZXkgKyBcIl9fbm9kZXBvb2xfbm90X2NyZWF0ZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBvYmpOb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6YCa6L+HIHNpemUg5o6l5Y+j5Yik5pat5a+56LGh5rGg5Lit5piv5ZCm5pyJ56m66Zey55qE5a+56LGhXG4gICAgICAgIGlmIChub2RlUG9vbERhdGEubm9kZVBvb2wuc2l6ZSgpKSB7XG4gICAgICAgICAgICBvYmpOb2RlID0gbm9kZVBvb2xEYXRhLm5vZGVQb29sLmdldCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy/nlJ/miJDkuIDkuKrmlrDnmoTlr7nosaFcbiAgICAgICAgICAgIG9iak5vZGUgPSBjYy5pbnN0YW50aWF0ZShub2RlUG9vbERhdGEucHJlZmFiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iak5vZGUucGFyZW50ID0gX3BhcmVudDsgLy8g5bCG55Sf5oiQ55qE5pWM5Lq65Yqg5YWl6IqC54K55qCRXG4gICAgICAgIHJldHVybiBvYmpOb2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWwhuWNleeLrOeahG5vZGXlvZLov5jlr7nosaHmsaBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX2tleSDlr7nosaHmsaDlkI3lrZdcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IF9ucGNOb2RlIFxuICAgICAqL1xuICAgIHB1YmxpYyBQdXROb2RlVG9Ob29kZVBvb2woX2tleTogc3RyaW5nLCBfbm9kZTogY2MuTm9kZSkge1xuXG4gICAgICAgIC8v5YWI5Yik5pat5piv5ZCm5pyJ6K+l5a+56LGh5rGgXG4gICAgICAgIGxldCBub2RlUG9vbERhdGEgPSB0aGlzLm1fTm9kZVBvb2wuZ2V0KF9rZXkpO1xuICAgICAgICAvL+WmguaenOS4jeWtmOWcqFxuICAgICAgICBpZiAoIW5vZGVQb29sRGF0YSkge1xuICAgICAgICAgICAgVXRpbHMuQ0NMb2coX2tleSArIFwiX19ub2RlcG9vbF9ub3RfY3JlYXRlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8v5bCGbm9kZeaUvuWbnuiKgueCuVxuICAgICAgICBub2RlUG9vbERhdGEubm9kZVBvb2wucHV0KF9ub2RlKTtcbiAgICAgICAgLy8gVXRpbHMuQ0NMb2coXCJ0aGlzLm1fTm9kZVBvb2xcIiwgdGhpcy5tX05vZGVQb29sKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuIXpmaTlr7nlupTnmoTlr7nosaHmsaBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX2tleSDlr7nosaHmsaDlkI3lrZdcbiAgICAgKi9cbiAgICBwdWJsaWMgQ2xlYXJOb29kZVBvb2woX2tleTogc3RyaW5nKSB7XG5cbiAgICAgICAgLy/lhYjliKTmlq3mmK/lkKbmnInor6Xlr7nosaHmsaBcbiAgICAgICAgbGV0IG5vZGVQb29sRGF0YSA9IHRoaXMubV9Ob2RlUG9vbC5nZXQoX2tleSk7XG4gICAgICAgIC8v5aaC5p6c5LiN5a2Y5ZyoXG4gICAgICAgIGlmICghbm9kZVBvb2xEYXRhKSB7XG4gICAgICAgICAgICBVdGlscy5DQ0xvZyhfa2V5ICsgXCJfX25vZGVwb29sX25vdF9jcmVhdGVcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy/osIPnlKhjbGVhcua4hemZpOWvueixoeaxoFxuICAgICAgICBub2RlUG9vbERhdGEubm9kZVBvb2wuY2xlYXIoKTtcbiAgICAgICAgLy/lsIblr7nosaHlnKhtYXDliKDpmaRcbiAgICAgICAgdGhpcy5tX05vZGVQb29sLmRlbGV0ZShfa2V5KTtcbiAgICB9XG5cbn0iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/platform/BasePlatform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '808ffYoPHxJppeEHuigPrN0', 'BasePlatform');
// scripts/platform/BasePlatform.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasePlatform = /** @class */ (function () {
    /**
     * 构造函数
     */
    function BasePlatform() {
    }
    BasePlatform.getInstance = function () {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new BasePlatform());
        return this._instance;
    };
    /**
     * 判断是否是web平台
     */
    BasePlatform.prototype.IsWeb = function () {
        //在桌面浏览器调试
        if (cc.sys.platform == cc.sys.DESKTOP_BROWSER) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * 判断是否是微信平台
     */
    BasePlatform.prototype.IsWeChat = function () {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
    * 监听显示函数
    */
    BasePlatform.prototype.OnShow = function () {
        console.log("OnShow");
        // if (this.IsWeChat()) {
        // }
        // else if (this.IsBytedanace()) {
        // }
        // else {
        // }
    };
    /**
     * 监听隐藏函数
     */
    BasePlatform.prototype.OnHide = function () {
        //if (this.IsWeChat()) {
        //     // AudioManage.getInstance().PauseMusic();
        //     // WeChat.OnHide((res) => {
        //     //     //隐藏处理
        //     //     //游戏暂停
        //     //     // GameManager.getInstance().PauseGame();
        //     // });
        // }
        // else if (this.IsBytedanace()) {
        // }
        // else {
        // }
    };
    /**
     * 加快触发 JavaScriptCore 垃圾回收（Garbage Collection）
     * GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。
     *
     */
    BasePlatform.prototype.TriggerGC = function () {
    };
    return BasePlatform;
}());
exports.default = BasePlatform;
//监听显示函数
BasePlatform.getInstance().OnShow();
//监听隐藏函数
BasePlatform.getInstance().OnHide();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BsYXRmb3JtL0Jhc2VQbGF0Zm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0lBR0k7O09BRUc7SUFDSDtJQUVBLENBQUM7SUFFYSx3QkFBVyxHQUF6QjtRQUNJLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUE7UUFDdkQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNJLDRCQUFLLEdBQVo7UUFDSSxVQUFVO1FBQ1YsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRTtZQUMzQyxPQUFPLElBQUksQ0FBQztTQUNmO2FBQ0k7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLCtCQUFRLEdBQWY7UUFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFDSTtZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUVEOztNQUVFO0lBQ0ssNkJBQU0sR0FBYjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIseUJBQXlCO1FBQ3pCLElBQUk7UUFDSixrQ0FBa0M7UUFDbEMsSUFBSTtRQUNKLFNBQVM7UUFDVCxJQUFJO0lBQ1IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksNkJBQU0sR0FBYjtRQUNJLHdCQUF3QjtRQUN4QixpREFBaUQ7UUFDakQsa0NBQWtDO1FBQ2xDLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsdURBQXVEO1FBQ3ZELGFBQWE7UUFDYixJQUFJO1FBQ0osa0NBQWtDO1FBQ2xDLElBQUk7UUFDSixTQUFTO1FBQ1QsSUFBSTtJQUNSLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksZ0NBQVMsR0FBaEI7SUFFQSxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQWhGQSxBQWdGQyxJQUFBOztBQUVELFFBQVE7QUFDUixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDcEMsUUFBUTtBQUNSLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcbmltcG9ydCBEYXRhTWFuYWdlIGZyb20gXCIuLi9tYW5hZ2UvRGF0YU1hbmFnZVwiO1xuaW1wb3J0IEJhc2VMYXllciBmcm9tIFwiLi4vYmFzZS9CYXNlTGF5ZXJcIjtcbmltcG9ydCB7IEJhc2VDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnL0Jhc2VDb25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBsYXRmb3JtIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEJhc2VQbGF0Zm9ybTtcblxuICAgIC8qKlxuICAgICAqIOaehOmAoOWHveaVsFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBCYXNlUGxhdGZvcm0ge1xuICAgICAgICAvLyDlpoLmnpwgaW5zdGFuY2Ug5piv5LiA5Liq5a6e5L6LIOebtOaOpei/lOWbnu+8jCAg5aaC5p6c5LiN5pivIOWunuS+i+WMluWQjui/lOWbnlxuICAgICAgICB0aGlzLl9pbnN0YW5jZSB8fCAodGhpcy5faW5zdGFuY2UgPSBuZXcgQmFzZVBsYXRmb3JtKCkpXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIpOaWreaYr+WQpuaYr3dlYuW5s+WPsFxuICAgICAqL1xuICAgIHB1YmxpYyBJc1dlYigpOiBib29sZWFuIHtcbiAgICAgICAgLy/lnKjmoYzpnaLmtY/op4jlmajosIPor5VcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuREVTS1RPUF9CUk9XU0VSKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIpOaWreaYr+WQpuaYr+W+ruS/oeW5s+WPsFxuICAgICAqL1xuICAgIHB1YmxpYyBJc1dlQ2hhdCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDnm5HlkKzmmL7npLrlh73mlbBcbiAgICAqL1xuICAgIHB1YmxpYyBPblNob3coKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25TaG93XCIpO1xuICAgICAgICAvLyBpZiAodGhpcy5Jc1dlQ2hhdCgpKSB7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSBpZiAodGhpcy5Jc0J5dGVkYW5hY2UoKSkge1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55uR5ZCs6ZqQ6JeP5Ye95pWwXG4gICAgICovXG4gICAgcHVibGljIE9uSGlkZSgpIHtcbiAgICAgICAgLy9pZiAodGhpcy5Jc1dlQ2hhdCgpKSB7XG4gICAgICAgIC8vICAgICAvLyBBdWRpb01hbmFnZS5nZXRJbnN0YW5jZSgpLlBhdXNlTXVzaWMoKTtcbiAgICAgICAgLy8gICAgIC8vIFdlQ2hhdC5PbkhpZGUoKHJlcykgPT4ge1xuICAgICAgICAvLyAgICAgLy8gICAgIC8v6ZqQ6JeP5aSE55CGXG4gICAgICAgIC8vICAgICAvLyAgICAgLy/muLjmiI/mmoLlgZxcbiAgICAgICAgLy8gICAgIC8vICAgICAvLyBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLlBhdXNlR2FtZSgpO1xuICAgICAgICAvLyAgICAgLy8gfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSBpZiAodGhpcy5Jc0J5dGVkYW5hY2UoKSkge1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg5b+r6Kem5Y+RIEphdmFTY3JpcHRDb3JlIOWeg+WcvuWbnuaUtu+8iEdhcmJhZ2UgQ29sbGVjdGlvbu+8iVxuICAgICAqIEdDIOaXtuacuuaYr+eUsSBKYXZhU2NyaXB0Q29yZSDmnaXmjqfliLbnmoTvvIzlubbkuI3og73kv53or4HosIPnlKjlkI7pqazkuIrop6blj5EgR0PjgIJcbiAgICAgKiBcbiAgICAgKi9cbiAgICBwdWJsaWMgVHJpZ2dlckdDKCkge1xuICAgICAgXG4gICAgfVxufVxuXG4vL+ebkeWQrOaYvuekuuWHveaVsFxuQmFzZVBsYXRmb3JtLmdldEluc3RhbmNlKCkuT25TaG93KCk7XG4vL+ebkeWQrOmakOiXj+WHveaVsFxuQmFzZVBsYXRmb3JtLmdldEluc3RhbmNlKCkuT25IaWRlKCk7XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/ResultMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b9b4Bwb3pH/YDcP++Bm7Uz', 'ResultMenu');
// scripts/ui/ResultMenu.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL1Jlc3VsdE1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQWtCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/BaseLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40af5lCwZBL5qBAn8x43GMq', 'BaseLayer');
// scripts/base/BaseLayer.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 事件句柄
 */
var BaseEventHandler = /** @class */ (function () {
    function BaseEventHandler() {
        this.m_Hander = [];
    }
    BaseEventHandler.prototype.on = function () {
    };
    BaseEventHandler.prototype.off = function () {
    };
    BaseEventHandler.prototype.clear = function () {
    };
    return BaseEventHandler;
}());
exports.BaseEventHandler = BaseEventHandler;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseLayer = /** @class */ (function (_super) {
    __extends(BaseLayer, _super);
    function BaseLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.m_BaseEveneHander = null;
        return _this;
    }
    // onLoad () {}
    BaseLayer.prototype.start = function () {
        // Your initialization goes here.
    };
    // update(deltaTime) {
    //     // Your update function goes here.
    // }
    BaseLayer.prototype.Init = function (_customeData) {
        if (_customeData === void 0) { _customeData = null; }
        // console.log("BaseLayer  Init _customeData:", _customeData)
    };
    BaseLayer.prototype.Free = function (_customeData) {
        if (_customeData === void 0) { _customeData = null; }
        // console.log("BaseLayer  Free _customeData:", _customeData)
    };
    /**
     * 监听数据事件
     */
    BaseLayer.prototype.onDataEvenet = function () {
    };
    /**
     * 监听数据事件
     */
    BaseLayer.prototype.offDataEvenet = function () {
    };
    /**
     * 监听按钮事件
     */
    BaseLayer.prototype.onButtonEvenet = function () {
    };
    /**
     * 移除按钮事件
     */
    BaseLayer.prototype.offButtonEvenet = function () {
    };
    /**
     * 按钮点击事件
     * @param {cc.Touch} touch
     */
    BaseLayer.prototype.OnClick = function (touch) {
        //实现方法 示例
    };
    BaseLayer = __decorate([
        ccclass()
    ], BaseLayer);
    return BaseLayer;
}(cc.Component));
exports.default = BaseLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2Jhc2UvQmFzZUxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztHQUVHO0FBQ0g7SUFBQTtRQUNZLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFhMUIsQ0FBQztJQVhHLDZCQUFFLEdBQUY7SUFFQSxDQUFDO0lBRUQsOEJBQUcsR0FBSDtJQUVBLENBQUM7SUFFRCxnQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSw0Q0FBZ0I7QUFnQnZCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUErREM7UUExREcsd0JBQXdCO1FBQ2hCLHVCQUFpQixHQUFxQixJQUFJLENBQUM7O0lBeUR2RCxDQUFDO0lBdkRHLGVBQWU7SUFFZix5QkFBSyxHQUFMO1FBQ0ksaUNBQWlDO0lBQ3JDLENBQUM7SUFFRCxzQkFBc0I7SUFDdEIseUNBQXlDO0lBQ3pDLElBQUk7SUFFSix3QkFBSSxHQUFKLFVBQUssWUFBbUI7UUFBbkIsNkJBQUEsRUFBQSxtQkFBbUI7UUFDcEIsNkRBQTZEO0lBQ2pFLENBQUM7SUFFRCx3QkFBSSxHQUFKLFVBQUssWUFBbUI7UUFBbkIsNkJBQUEsRUFBQSxtQkFBbUI7UUFDcEIsNkRBQTZEO0lBQ2pFLENBQUM7SUFFRDs7T0FFRztJQUNILGdDQUFZLEdBQVo7SUFFQSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQ0FBYSxHQUFiO0lBRUEsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0NBQWMsR0FBZDtJQUVBLENBQUM7SUFFRDs7T0FFRztJQUNILG1DQUFlLEdBQWY7SUFFQSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMkJBQU8sR0FBUCxVQUFRLEtBQXFCO1FBQ3pCLFNBQVM7SUFFYixDQUFDO0lBNURnQixTQUFTO1FBRDdCLE9BQU8sRUFBRTtPQUNXLFNBQVMsQ0E4RDdCO0lBQUQsZ0JBQUM7Q0E5REQsQUE4REMsQ0E5RHNDLEVBQUUsQ0FBQyxTQUFTLEdBOERsRDtrQkE5RG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyoqXG4gKiDkuovku7blj6Xmn4RcbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VFdmVudEhhbmRsZXIge1xuICAgIHByaXZhdGUgbV9IYW5kZXIgPSBbXTtcblxuICAgIG9uKCkge1xuXG4gICAgfVxuXG4gICAgb2ZmKCkge1xuXG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG5cbiAgICB9XG59XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VMYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgW3k6IHN0cmluZ106IGFueTtcblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgcHJpdmF0ZSBtX0Jhc2VFdmVuZUhhbmRlcjogQmFzZUV2ZW50SGFuZGxlciA9IG51bGw7XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUoZGVsdGFUaW1lKSB7XG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAvLyB9XG5cbiAgICBJbml0KF9jdXN0b21lRGF0YSA9IG51bGwpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJCYXNlTGF5ZXIgIEluaXQgX2N1c3RvbWVEYXRhOlwiLCBfY3VzdG9tZURhdGEpXG4gICAgfVxuXG4gICAgRnJlZShfY3VzdG9tZURhdGEgPSBudWxsKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQmFzZUxheWVyICBGcmVlIF9jdXN0b21lRGF0YTpcIiwgX2N1c3RvbWVEYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebkeWQrOaVsOaNruS6i+S7tlxuICAgICAqL1xuICAgIG9uRGF0YUV2ZW5ldCgpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebkeWQrOaVsOaNruS6i+S7tlxuICAgICAqL1xuICAgIG9mZkRhdGFFdmVuZXQoKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnm5HlkKzmjInpkq7kuovku7ZcbiAgICAgKi9cbiAgICBvbkJ1dHRvbkV2ZW5ldCgpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOenu+mZpOaMiemSruS6i+S7tlxuICAgICAqL1xuICAgIG9mZkJ1dHRvbkV2ZW5ldCgpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaMiemSrueCueWHu+S6i+S7tlxuICAgICAqIEBwYXJhbSB7Y2MuVG91Y2h9IHRvdWNoIFxuICAgICAqL1xuICAgIE9uQ2xpY2sodG91Y2g6IGNjLkV2ZW50VGFyZ2V0KSB7XG4gICAgICAgIC8v5a6e546w5pa55rOVIOekuuS+i1xuXG4gICAgfVxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/config/BaseConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ac255iwJpLRYOI9mdPrukt', 'BaseConfig');
// scripts/config/BaseConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseConfig = /** @class */ (function () {
    function BaseConfig() {
    }
    BaseConfig.IsLoading = false;
    /**
     * 全局配置参数
     */
    BaseConfig.Global = {
        //宝箱关卡数
        Game_Treasurechest_Level: 3,
    };
    /**
     * 网络信息配置
     */
    BaseConfig.NetConfig = {
        //服务器域名
        NetRoot: "https://cathome8.com",
        //游戏资源目录
        NetRes: "/zjkj_h5/huaxiantingche/huaxiantingche_wx/res_1001/",
    };
    return BaseConfig;
}());
exports.BaseConfig = BaseConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbmZpZy9CYXNlQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQW9CQSxDQUFDO0lBbkJVLG9CQUFTLEdBQUcsS0FBSyxDQUFDO0lBRXpCOztPQUVHO0lBQ0ksaUJBQU0sR0FBRztRQUNaLE9BQU87UUFDUCx3QkFBd0IsRUFBRSxDQUFDO0tBQzlCLENBQUE7SUFFRDs7T0FFRztJQUNJLG9CQUFTLEdBQUc7UUFDZixPQUFPO1FBQ1AsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixRQUFRO1FBQ1IsTUFBTSxFQUFFLHFEQUFxRDtLQUNoRSxDQUFBO0lBQ0wsaUJBQUM7Q0FwQkQsQUFvQkMsSUFBQTtBQXBCWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCYXNlQ29uZmlnIHtcbiAgICBzdGF0aWMgSXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiDlhajlsYDphY3nva7lj4LmlbBcbiAgICAgKi9cbiAgICBzdGF0aWMgR2xvYmFsID0ge1xuICAgICAgICAvL+WuneeuseWFs+WNoeaVsFxuICAgICAgICBHYW1lX1RyZWFzdXJlY2hlc3RfTGV2ZWw6IDMsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog572R57uc5L+h5oGv6YWN572uXG4gICAgICovXG4gICAgc3RhdGljIE5ldENvbmZpZyA9IHtcbiAgICAgICAgLy/mnI3liqHlmajln5/lkI1cbiAgICAgICAgTmV0Um9vdDogXCJodHRwczovL2NhdGhvbWU4LmNvbVwiLFxuICAgICAgICAvL+a4uOaIj+i1hOa6kOebruW9lVxuICAgICAgICBOZXRSZXM6IFwiL3pqa2pfaDUvaHVheGlhbnRpbmdjaGUvaHVheGlhbnRpbmdjaGVfd3gvcmVzXzEwMDEvXCIsXG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manage/MenuManage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbcb8XRsMlAoasTQP3IL+N9', 'MenuManage');
// scripts/manage/MenuManage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../utils/Utils");
var BaseLayer_1 = require("../base/BaseLayer");
exports.BaseMenu = {
    GameLoadingMenu: 'prefabs/ui//GameLoadingMenu',
    MainMenu: 'prefabs/ui//MainMenu',
    GamePlayMenu: "prefabs/ui/GamePlayMenu",
    ResultMenu: 'prefabs/ui//ResultMenu',
    PopMenu: 'prefabs/ui//PopMenu',
    TipsMenu: 'prefabs/ui//TipsMenu',
};
var UILayer;
(function (UILayer) {
    UILayer[UILayer["SCENE"] = 0] = "SCENE";
    UILayer[UILayer["GAME"] = 1] = "GAME";
    UILayer[UILayer["HUD"] = 2] = "HUD";
    UILayer[UILayer["POPUP"] = 3] = "POPUP";
    UILayer[UILayer["ALERT"] = 4] = "ALERT";
    UILayer[UILayer["NOTICE"] = 5] = "NOTICE";
    UILayer[UILayer["MASK"] = 6] = "MASK";
    UILayer[UILayer["NUM"] = 7] = "NUM";
})(UILayer = exports.UILayer || (exports.UILayer = {}));
var MenuManage = /** @class */ (function () {
    /**
     * 构造函数
     */
    function MenuManage() {
        this.m_Menus = new Map();
    }
    MenuManage.getInstance = function () {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new MenuManage());
        return this._instance;
    };
    /**
     * 播放转场
     */
    MenuManage.prototype.PlayTranform = function () {
        var tranform = cc.find("Canvas/Tranfrom");
        if (tranform) {
            var obj = cc.instantiate(tranform);
            obj.zIndex = 10000;
            obj.active = true;
            obj.parent = this.GetMenuRoot();
            // tranform.getComponent(cc.ParticleSystem).active = true;
        }
    };
    /**
     * 界面默认绑定的根节点
     */
    MenuManage.prototype.GetMenuRoot = function () {
        var node = cc.find("Canvas");
        if (node) {
            return node;
        }
        return null;
    };
    /**
     * 显示界面
     * @param {string} _urlName 界面路径
     * @param {any} _customeData 初始化传入的数据
     * @param {cc.Node} _parent 父节点
     *
     */
    MenuManage.prototype.ShowMenu = function (_urlName, _customeData, _parent) {
        // Utils.CCLog("ShowMenu m_Menus", this.m_Menus, "GetMenuRoot:", this.GetMenuRoot())
        var _this = this;
        if (_customeData === void 0) { _customeData = null; }
        if (_parent === void 0) { _parent = null; }
        //先判断是否有已显示这个界面
        if (this.m_Menus.has(_urlName)) {
            Utils_1.default.CCLog("ShowMenu menu is show");
            return;
        }
        else {
            Utils_1.default.CCLog("ShowMenu show ");
            //界面数据
            var menudata_1 = {
                node: null
                // type: _type != null ? _type : MenuType.Type.Normal,//类型没有传值则使用默认值
            };
            this.m_Menus.set(_urlName, menudata_1);
            this.LoadMenu(_urlName).then(function (assets) {
                var objmenu = cc.instantiate(assets); //instantiate(assets);
                objmenu.parent = _parent != null ? _parent : _this.GetMenuRoot();
                //初始化参数
                objmenu.getComponent(BaseLayer_1.default).Init(_customeData);
                menudata_1.node = objmenu;
                Utils_1.default.CCLog("objmenu.parent", objmenu.parent);
            }, function (err) {
                //加载错误直接将数据删除
                _this.m_Menus.delete(_urlName);
            });
            // Utils.CCLog("m_Menus", this.m_Menus);
        }
    };
    /**
     * 移除界面
     * @param {string} _urlName     界面路径
     * @param {any} _customeData 释放传入的数据
     *
     */
    MenuManage.prototype.RmoveMenu = function (_urlName, _customeData) {
        if (_customeData === void 0) { _customeData = null; }
        var objMenu = this.m_Menus.get(_urlName);
        if (objMenu) {
            //判断是否加载完界面
            if (Utils_1.default.IsNull(objMenu.node)) {
                Utils_1.default.CCLog("menu loading");
                return;
            }
            else {
                //释放函数
                objMenu.node.getComponent(BaseLayer_1.default).Free(_customeData);
                //销毁界面node
                objMenu.node.destroy();
                this.m_Menus.delete(_urlName);
            }
        }
    };
    /**
     * 加载界面
     * @param {string} _urlName 界面路径
     */
    MenuManage.prototype.LoadMenu = function (_urlName) {
        return new Promise(function (resolve, reject) {
            cc.loader.loadRes(_urlName, cc.Prefab, function (err, assets) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(assets);
            });
        });
    };
    /**
     * 返回对应的界面
     * @param {string} _urlName 界面路径
     */
    MenuManage.prototype.GetMenu = function (_urlName) {
        //查找界面是否加载了
        var objMenu = this.m_Menus.get(_urlName);
        if (objMenu) {
            //资源是否加载成功了
            if (objMenu.node) {
                return objMenu.node.getComponent(BaseLayer_1.default);
            }
            else {
                return null;
            }
        }
        return null;
    };
    return MenuManage;
}());
exports.default = MenuManage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZS9NZW51TWFuYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW1DO0FBQ25DLCtDQUEwQztBQUUvQixRQUFBLFFBQVEsR0FBRztJQUNsQixlQUFlLEVBQUUsNkJBQTZCO0lBQzlDLFFBQVEsRUFBRSxzQkFBc0I7SUFDaEMsWUFBWSxFQUFDLHlCQUF5QjtJQUN0QyxVQUFVLEVBQUUsd0JBQXdCO0lBQ3BDLE9BQU8sRUFBRSxxQkFBcUI7SUFDOUIsUUFBUSxFQUFFLHNCQUFzQjtDQUNuQyxDQUFBO0FBRUQsSUFBWSxPQVNYO0FBVEQsV0FBWSxPQUFPO0lBQ2YsdUNBQUssQ0FBQTtJQUNMLHFDQUFJLENBQUE7SUFDSixtQ0FBRyxDQUFBO0lBQ0gsdUNBQUssQ0FBQTtJQUNMLHVDQUFLLENBQUE7SUFDTCx5Q0FBTSxDQUFBO0lBQ04scUNBQUksQ0FBQTtJQUNKLG1DQUFHLENBQUE7QUFDUCxDQUFDLEVBVFcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBU2xCO0FBRUQ7SUFNSTs7T0FFRztJQUNIO1FBTFEsWUFBTyxHQUFxQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBTTlDLENBQUM7SUFFYSxzQkFBVyxHQUF6QjtRQUNJLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUE7UUFDckQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILGlDQUFZLEdBQVo7UUFDSSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDMUMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLEdBQUcsQ0FBQyxNQUFNLEdB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O0lBQ0ssNkJBQVEsR0FBaEIsVUFBaUIsUUFBZ0I7UUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07Z0JBQy9DLElBQUksR0FBRyxFQUFFO29CQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDWixPQUFPO2lCQUNWO2dCQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7T0FHRztJQUNILDRCQUFPLEdBQVAsVUFBUSxRQUFnQjtRQUNwQixXQUFXO1FBQ1gsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBSSxPQUFPLEVBQUU7WUFDVCxXQUFXO1lBQ1gsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO2dCQUNkLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDO2FBQy9DO2lCQUNJO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTCxpQkFBQztBQUFELENBL0lBLEFBK0lDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgQmFzZUxheWVyIGZyb20gXCIuLi9iYXNlL0Jhc2VMYXllclwiO1xuXG5leHBvcnQgdmFyIEJhc2VNZW51ID0ge1xuICAgIEdhbWVMb2FkaW5nTWVudTogJ3ByZWZhYnMvdWkvL0dhbWVMb2FkaW5nTWVudScsXG4gICAgTWFpbk1lbnU6ICdwcmVmYWJzL3VpLy9NYWluTWVudScsXG4gICAgR2FtZVBsYXlNZW51OlwicHJlZmFicy91aS9HYW1lUGxheU1lbnVcIixcbiAgICBSZXN1bHRNZW51OiAncHJlZmFicy91aS8vUmVzdWx0TWVudScsXG4gICAgUG9wTWVudTogJ3ByZWZhYnMvdWkvL1BvcE1lbnUnLFxuICAgIFRpcHNNZW51OiAncHJlZmFicy91aS8vVGlwc01lbnUnLFxufVxuXG5leHBvcnQgZW51bSBVSUxheWVyIHsgXG4gICAgU0NFTkUsXG4gICAgR0FNRSxcbiAgICBIVUQsXG4gICAgUE9QVVAsXG4gICAgQUxFUlQsXG4gICAgTk9USUNFLFxuICAgIE1BU0ssXG4gICAgTlVNIFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51TWFuYWdlIHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTWVudU1hbmFnZTtcblxuICAgIHByaXZhdGUgbV9NZW51czogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXAoKTtcblxuICAgIC8qKlxuICAgICAqIOaehOmAoOWHveaVsFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTWVudU1hbmFnZSB7XG4gICAgICAgIC8vIOWmguaenCBpbnN0YW5jZSDmmK/kuIDkuKrlrp7kvosg55u05o6l6L+U5Zue77yMICDlpoLmnpzkuI3mmK8g5a6e5L6L5YyW5ZCO6L+U5ZueXG4gICAgICAgIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyBNZW51TWFuYWdlKCkpXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaSreaUvui9rOWculxuICAgICAqL1xuICAgIFBsYXlUcmFuZm9ybSgpIHtcbiAgICAgICAgbGV0IHRyYW5mb3JtID0gY2MuZmluZChcIkNhbnZhcy9UcmFuZnJvbVwiKTtcbiAgICAgICAgaWYgKHRyYW5mb3JtKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0gY2MuaW5zdGFudGlhdGUodHJhbmZvcm0pO1xuICAgICAgICAgICAgb2JqLnpJbmRleCA9IDEwMDAwO1xuICAgICAgICAgICAgb2JqLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBvYmoucGFyZW50ID0gdGhpcy5HZXRNZW51Um9vdCgpO1xuICAgICAgICAgICAgLy8gdHJhbmZvcm0uZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55WM6Z2i6buY6K6k57uR5a6a55qE5qC56IqC54K5XG4gICAgICovXG4gICAgR2V0TWVudVJvb3QoKSB7XG4gICAgICAgIHZhciBub2RlID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaYvuekuueVjOmdolxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBfdXJsTmFtZSDnlYzpnaLot6/lvoRcbiAgICAgKiBAcGFyYW0ge2FueX0gX2N1c3RvbWVEYXRhIOWIneWni+WMluS8oOWFpeeahOaVsOaNrlxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gX3BhcmVudCDniLboioLngrlcbiAgICAgKiBcbiAgICAgKi9cbiAgICBTaG93TWVudShfdXJsTmFtZTogc3RyaW5nLCBfY3VzdG9tZURhdGE6IGFueSA9IG51bGwsIF9wYXJlbnQ6IGNjLk5vZGUgPSBudWxsKSB7XG4gICAgICAgIC8vIFV0aWxzLkNDTG9nKFwiU2hvd01lbnUgbV9NZW51c1wiLCB0aGlzLm1fTWVudXMsIFwiR2V0TWVudVJvb3Q6XCIsIHRoaXMuR2V0TWVudVJvb3QoKSlcblxuICAgICAgICAvL+WFiOWIpOaWreaYr+WQpuacieW3suaYvuekuui/meS4queVjOmdolxuICAgICAgICBpZiAodGhpcy5tX01lbnVzLmhhcyhfdXJsTmFtZSkpIHtcbiAgICAgICAgICAgIFV0aWxzLkNDTG9nKFwiU2hvd01lbnUgbWVudSBpcyBzaG93XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgVXRpbHMuQ0NMb2coXCJTaG93TWVudSBzaG93IFwiKTtcbiAgICAgICAgICAgIC8v55WM6Z2i5pWw5o2uXG4gICAgICAgICAgICBsZXQgbWVudWRhdGEgPSB7XG4gICAgICAgICAgICAgICAgbm9kZTogbnVsbFxuICAgICAgICAgICAgICAgIC8vIHR5cGU6IF90eXBlICE9IG51bGwgPyBfdHlwZSA6IE1lbnVUeXBlLlR5cGUuTm9ybWFsLC8v57G75Z6L5rKh5pyJ5Lyg5YC85YiZ5L2/55So6buY6K6k5YC8XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1fTWVudXMuc2V0KF91cmxOYW1lLCBtZW51ZGF0YSlcbiAgICAgICAgICAgIHRoaXMuTG9hZE1lbnUoX3VybE5hbWUpLnRoZW4oKGFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvYmptZW51OiBhbnkgPSBjYy5pbnN0YW50aWF0ZShhc3NldHMpOyAvL2luc3RhbnRpYXRlKGFzc2V0cyk7XG4gICAgICAgICAgICAgICAgb2JqbWVudS5wYXJlbnQgPSBfcGFyZW50ICE9IG51bGwgPyBfcGFyZW50IDogdGhpcy5HZXRNZW51Um9vdCgpO1xuICAgICAgICAgICAgICAgIC8v5Yid5aeL5YyW5Y+C5pWwXG4gICAgICAgICAgICAgICAgb2JqbWVudS5nZXRDb21wb25lbnQoQmFzZUxheWVyKS5Jbml0KF9jdXN0b21lRGF0YSk7XG4gICAgICAgICAgICAgICAgbWVudWRhdGEubm9kZSA9IG9iam1lbnU7XG4gICAgICAgICAgICAgICAgVXRpbHMuQ0NMb2coXCJvYmptZW51LnBhcmVudFwiLCBvYmptZW51LnBhcmVudCk7XG5cbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAvL+WKoOi9vemUmeivr+ebtOaOpeWwhuaVsOaNruWIoOmZpFxuICAgICAgICAgICAgICAgIHRoaXMubV9NZW51cy5kZWxldGUoX3VybE5hbWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIFV0aWxzLkNDTG9nKFwibV9NZW51c1wiLCB0aGlzLm1fTWVudXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog56e76Zmk55WM6Z2iXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF91cmxOYW1lICAgICDnlYzpnaLot6/lvoRcbiAgICAgKiBAcGFyYW0ge2FueX0gX2N1c3RvbWVEYXRhIOmHiuaUvuS8oOWFpeeahOaVsOaNrlxuICAgICAqIFxuICAgICAqL1xuICAgIFJtb3ZlTWVudShfdXJsTmFtZTogc3RyaW5nLCBfY3VzdG9tZURhdGE6IGFueSA9IG51bGwpIHtcblxuICAgICAgICBsZXQgb2JqTWVudSA9IHRoaXMubV9NZW51cy5nZXQoX3VybE5hbWUpO1xuICAgICAgICBpZiAob2JqTWVudSkge1xuICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbliqDovb3lroznlYzpnaJcbiAgICAgICAgICAgIGlmIChVdGlscy5Jc051bGwob2JqTWVudS5ub2RlKSkge1xuICAgICAgICAgICAgICAgIFV0aWxzLkNDTG9nKFwibWVudSBsb2FkaW5nXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy/ph4rmlL7lh73mlbBcbiAgICAgICAgICAgICAgICBvYmpNZW51Lm5vZGUuZ2V0Q29tcG9uZW50KEJhc2VMYXllcikuRnJlZShfY3VzdG9tZURhdGEpO1xuICAgICAgICAgICAgICAgIC8v6ZSA5q+B55WM6Z2ibm9kZVxuICAgICAgICAgICAgICAgIG9iak1lbnUubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tX01lbnVzLmRlbGV0ZShfdXJsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb3nlYzpnaJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3VybE5hbWUg55WM6Z2i6Lev5b6EXG4gICAgICovXG4gICAgcHJpdmF0ZSBMb2FkTWVudShfdXJsTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhfdXJsTmFtZSwgY2MuUHJlZmFiLCAoZXJyLCBhc3NldHMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoYXNzZXRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57lr7nlupTnmoTnlYzpnaJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3VybE5hbWUg55WM6Z2i6Lev5b6EXG4gICAgICovXG4gICAgR2V0TWVudShfdXJsTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIC8v5p+l5om+55WM6Z2i5piv5ZCm5Yqg6L295LqGXG4gICAgICAgIGxldCBvYmpNZW51ID0gdGhpcy5tX01lbnVzLmdldChfdXJsTmFtZSk7XG4gICAgICAgIGlmIChvYmpNZW51KSB7XG4gICAgICAgICAgICAvL+i1hOa6kOaYr+WQpuWKoOi9veaIkOWKn+S6hlxuICAgICAgICAgICAgaWYgKG9iak1lbnUubm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmpNZW51Lm5vZGUuZ2V0Q29tcG9uZW50KEJhc2VMYXllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manage/AudioManage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63662pn7C1BDLbqbwz/pEfy', 'AudioManage');
// scripts/manage/AudioManage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../utils/Utils");
exports.ResMusics = {
    Sound_Click: "sound_click",
    Sound_Coins: "sound_coins",
    Sound_MoveEnd: "sound_moveend",
    Sound_Success: "sound_success",
    Sound_Collision: "sound_collision",
};
var AudioManage = /** @class */ (function () {
    /**
     * 构造函数
     */
    function AudioManage() {
        this._saveKey = "feipaiqieshuiguoaudio2020041701"; //配置存储key
        this.m_AudioCilps = new Map();
        this.m_AudioConfig = null; //配置记录着音乐和音效的开关
        //读取配置
        this.LoadAudioConfig();
    }
    AudioManage.getInstance = function () {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new AudioManage());
        return this._instance;
    };
    /**
     * 加载音乐配置
     */
    AudioManage.prototype.LoadAudioConfig = function () {
        var data = cc.sys.localStorage.getItem(this._saveKey);
        if (!data) {
            this.m_AudioConfig = {
                Music: true,
                Sound: true
            };
            this.SaveAudioConfig();
        }
        else {
            this.m_AudioConfig = JSON.parse(data);
        }
        // this.m_AudioConfig = JSON.parse(cc.sys.localStorage.getItem(this._saveKey));
        // //没有
        // if (!this.m_AudioConfig) {
        //     this.SaveAudioConfig();
        // }
    };
    /**
     * 保存音乐配置
     */
    AudioManage.prototype.SaveAudioConfig = function () {
        cc.sys.localStorage.setItem(this._saveKey, JSON.stringify(this.m_AudioConfig));
    };
    /**
     * 设置音乐开关
     * @param {boolean} _switch
     */
    AudioManage.prototype.SetMusicSwitch = function (_switch) {
        this.m_AudioConfig.Music = _switch;
        this.SaveAudioConfig();
        if (_switch) {
            //恢复音乐
            this.ResumeMusic();
        }
        else {
            //暂停播放音乐
            this.PauseMusic();
        }
    };
    /**
     * 返回音乐开关
     */
    AudioManage.prototype.GetMusicSwitch = function () {
        return this.m_AudioConfig.Music;
    };
    /**
     * 设置音效开关
     * @param {boolean} _switch
     */
    AudioManage.prototype.SetSoundSwitch = function (_switch) {
        this.m_AudioConfig.Sound = _switch;
        this.SaveAudioConfig();
        if (!_switch) {
            //停止播放音乐
            this.StopAllSound();
        }
    };
    /**
     * 返回音效开关
     */
    AudioManage.prototype.GetSoundSwitch = function () {
        return this.m_AudioConfig.Sound;
    };
    /**
     * 初始化本地音乐
     * @param {string} _pathUrl //资源路径
     * @param {Function} _callFun  //资源加载成功回调函数
     */
    AudioManage.prototype.InitResAudio = function (_pathUrl, _callFun) {
        //加载音乐
        var musicarray = [], loadresnum = 0;
        for (var key in exports.ResMusics) {
            //往数组中放值
            musicarray.push(exports.ResMusics[key]);
        }
        // Utils.CCLog('musicarray', musicarray);
        for (var index = 0; index < musicarray.length; index++) {
            this.LoadResAudioCilp(_pathUrl, musicarray[index], function () {
                loadresnum++;
                //资源加载完毕
                if (musicarray.length == loadresnum) {
                    if (_callFun) {
                        _callFun();
                    }
                }
            });
        }
    };
    /**
     * 加载本地音乐
     * @param {string} _pathUrl //资源路径
     * @param {string} _musicname
     * @param {Function} _callFun
     */
    AudioManage.prototype.LoadResAudioCilp = function (_pathUrl, _musicname, _callFun) {
        var _this = this;
        if (_callFun === void 0) { _callFun = null; }
        var audiourl = _pathUrl + "/" + _musicname;
        cc.loader.loadRes(audiourl, function (err, audio) {
            if (err) {
                console.error(err);
                return;
            }
            _this.m_AudioCilps.set(_musicname, audio);
            if (_callFun) {
                _callFun(audio);
            }
        });
    };
    /**
     * 网络远程预加载音效
     * @param {string} _url
     * @param {string} _musicname
     * @param {Function} _callFun
     */
    AudioManage.prototype.LoadNetAudioCilp = function (_url, _musicname, _callFun) {
        var _this = this;
        if (_callFun === void 0) { _callFun = null; }
        var audiourl = _url + _musicname;
        cc.loader.load(audiourl, function (err, audio) {
            if (err) {
                console.error(err);
                return;
            }
            _this.m_AudioCilps.set(_musicname, audio);
            if (_callFun) {
                _callFun(audio);
            }
        });
    };
    /**
     * 播放背景音乐
     * @param {string} _musicname
     * @param {boolean} _isLoop
     */
    AudioManage.prototype.PlayMusic = function (_musicName, _isLoop) {
        if (_isLoop === void 0) { _isLoop = true; }
        //音乐开关打开
        if (!this.m_AudioConfig.Music) {
            return;
        }
        var audio = this.m_AudioCilps.get(_musicName);
        if (audio) {
            //停止当前音乐
            this.StopMusic();
            return cc.audioEngine.playMusic(audio, _isLoop);
        }
        else {
            Utils_1.default.CCLog('audio resources not load _musicname', _musicName);
        }
    };
    /**
     * 播放音效
     * @param {string} _soundname
     */
    AudioManage.prototype.PlaySound = function (_soundname, _isLoop) {
        if (_isLoop === void 0) { _isLoop = false; }
        //音效开关打开
        if (!this.m_AudioConfig.Sound) {
            return;
        }
        var audio = this.m_AudioCilps.get(_soundname);
        if (audio) {
            return cc.audioEngine.playEffect(audio, _isLoop);
        }
        else {
            Utils_1.default.CCLog('audio resources not load _soundname', _soundname);
        }
    };
    /**
     * 停止背景音乐
     */
    AudioManage.prototype.StopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    /**
     * 暂停背景音乐
     */
    AudioManage.prototype.PauseMusic = function () {
        cc.audioEngine.pauseMusic();
    };
    /**
     * 恢复背景音乐
     */
    AudioManage.prototype.ResumeMusic = function () {
        cc.audioEngine.resumeMusic();
    };
    /**
     * 停止指定音效
     */
    AudioManage.prototype.StopSound = function (_soundID) {
        cc.audioEngine.stopEffect(_soundID);
    };
    /**
     * 停止全部音效
     */
    AudioManage.prototype.StopAllSound = function () {
        cc.audioEngine.stopAllEffects();
    };
    return AudioManage;
}());
exports.default = AudioManage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZS9BdWRpb01hbmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFtQztBQUV4QixRQUFBLFNBQVMsR0FBRztJQUNuQixXQUFXLEVBQUUsYUFBYTtJQUMxQixXQUFXLEVBQUUsYUFBYTtJQUMxQixhQUFhLEVBQUUsZUFBZTtJQUM5QixhQUFhLEVBQUUsZUFBZTtJQUM5QixlQUFlLEVBQUUsaUJBQWlCO0NBQ3JDLENBQUE7QUFFRDtJQVFJOztPQUVHO0lBQ0g7UUFSUSxhQUFRLEdBQVcsaUNBQWlDLENBQUMsQ0FBQyxTQUFTO1FBRS9ELGlCQUFZLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDM0Msa0JBQWEsR0FBUSxJQUFJLENBQUMsQ0FBRSxlQUFlO1FBTS9DLE1BQU07UUFDTixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVhLHVCQUFXLEdBQXpCO1FBQ0ksdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsQ0FBQTtRQUN0RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gscUNBQWUsR0FBZjtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLElBQUksQ0FBQyxhQUFhLEdBQUc7Z0JBQ2pCLEtBQUssRUFBRSxJQUFJO2dCQUNYLEtBQUssRUFBRSxJQUFJO2FBQ2QsQ0FBQTtZQUNELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjthQUNJO1lBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxD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QUFFLE9BQXdCO1FBQXhCLHdCQUFBLEVBQUEsZUFBd0I7UUFFbEQsUUFBUTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtZQUMzQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLEtBQUssRUFBRTtZQUNQLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3BEO2FBQ0k7WUFDRCxlQUFLLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0JBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0NBQVUsR0FBVjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUNBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0JBQVMsR0FBVCxVQUFVLFFBQWU7UUFDckIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0NBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0F2UEEsQUF1UEMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IHZhciBSZXNNdXNpY3MgPSB7XG4gICAgU291bmRfQ2xpY2s6IFwic291bmRfY2xpY2tcIixcbiAgICBTb3VuZF9Db2luczogXCJzb3VuZF9jb2luc1wiLFxuICAgIFNvdW5kX01vdmVFbmQ6IFwic291bmRfbW92ZWVuZFwiLFxuICAgIFNvdW5kX1N1Y2Nlc3M6IFwic291bmRfc3VjY2Vzc1wiLFxuICAgIFNvdW5kX0NvbGxpc2lvbjogXCJzb3VuZF9jb2xsaXNpb25cIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NYW5hZ2Uge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBBdWRpb01hbmFnZTtcbiAgICBwcml2YXRlIF9zYXZlS2V5OiBzdHJpbmcgPSBcImZlaXBhaXFpZXNodWlndW9hdWRpbzIwMjAwNDE3MDFcIjsgLy/phY3nva7lrZjlgqhrZXlcblxuICAgIHByaXZhdGUgbV9BdWRpb0NpbHBzOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xuICAgIHByaXZhdGUgbV9BdWRpb0NvbmZpZzogYW55ID0gbnVsbDsgIC8v6YWN572u6K6w5b2V552A6Z+z5LmQ5ZKM6Z+z5pWI55qE5byA5YWzXG5cbiAgICAvKipcbiAgICAgKiDmnoTpgKDlh73mlbBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy/or7vlj5bphY3nva5cbiAgICAgICAgdGhpcy5Mb2FkQXVkaW9Db25maWcoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEF1ZGlvTWFuYWdlIHtcbiAgICAgICAgLy8g5aaC5p6cIGluc3RhbmNlIOaYr+S4gOS4quWunuS+iyDnm7TmjqXov5Tlm57vvIwgIOWmguaenOS4jeaYryDlrp7kvovljJblkI7ov5Tlm55cbiAgICAgICAgdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IEF1ZGlvTWFuYWdlKCkpXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9vemfs+S5kOmFjee9rlxuICAgICAqL1xuICAgIExvYWRBdWRpb0NvbmZpZygpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fc2F2ZUtleSlcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLm1fQXVkaW9Db25maWcgPSB7XG4gICAgICAgICAgICAgICAgTXVzaWM6IHRydWUsXG4gICAgICAgICAgICAgICAgU291bmQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuU2F2ZUF1ZGlvQ29uZmlnKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1fQXVkaW9Db25maWcgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5tX0F1ZGlvQ29uZmlnID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fc2F2ZUtleSkpO1xuICAgICAgICAvLyAvL+ayoeaciVxuICAgICAgICAvLyBpZiAoIXRoaXMubV9BdWRpb0NvbmZpZykge1xuICAgICAgICAvLyAgICAgdGhpcy5TYXZlQXVkaW9Db25maWcoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS/neWtmOmfs+S5kOmFjee9rlxuICAgICAqL1xuICAgIFNhdmVBdWRpb0NvbmZpZygpIHtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX3NhdmVLZXksIEpTT04uc3RyaW5naWZ5KHRoaXMubV9BdWRpb0NvbmZpZykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rumfs+S5kOW8gOWFs1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gX3N3aXRjaCBcbiAgICAgKi9cbiAgICBTZXRNdXNpY1N3aXRjaChfc3dpdGNoOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubV9BdWRpb0NvbmZpZy5NdXNpYyA9IF9zd2l0Y2g7XG4gICAgICAgIHRoaXMuU2F2ZUF1ZGlvQ29uZmlnKCk7XG5cbiAgICAgICAgaWYgKF9zd2l0Y2gpIHtcbiAgICAgICAgICAgIC8v5oGi5aSN6Z+z5LmQXG4gICAgICAgICAgICB0aGlzLlJlc3VtZU11c2ljKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL+aaguWBnOaSreaUvumfs+S5kFxuICAgICAgICAgICAgdGhpcy5QYXVzZU11c2ljKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57pn7PkuZDlvIDlhbNcbiAgICAgKi9cbiAgICBHZXRNdXNpY1N3aXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubV9BdWRpb0NvbmZpZy5NdXNpYztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7pn7PmlYjlvIDlhbNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IF9zd2l0Y2ggXG4gICAgICovXG4gICAgU2V0U291bmRTd2l0Y2goX3N3aXRjaDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLm1fQXVkaW9Db25maWcuU291bmQgPSBfc3dpdGNoO1xuICAgICAgICB0aGlzLlNhdmVBdWRpb0NvbmZpZygpO1xuXG4gICAgICAgIGlmICghX3N3aXRjaCkge1xuICAgICAgICAgICAgLy/lgZzmraLmkq3mlL7pn7PkuZBcbiAgICAgICAgICAgIHRoaXMuU3RvcEFsbFNvdW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57pn7PmlYjlvIDlhbNcbiAgICAgKi9cbiAgICBHZXRTb3VuZFN3aXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubV9BdWRpb0NvbmZpZy5Tb3VuZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbmnKzlnLDpn7PkuZBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3BhdGhVcmwgLy/otYTmupDot6/lvoRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBfY2FsbEZ1biAgLy/otYTmupDliqDovb3miJDlip/lm57osIPlh73mlbBcbiAgICAgKi9cbiAgICBJbml0UmVzQXVkaW8oX3BhdGhVcmw6IHN0cmluZywgX2NhbGxGdW46IEZ1bmN0aW9uKSB7XG4gICAgICAgIC8v5Yqg6L296Z+z5LmQXG4gICAgICAgIGxldCBtdXNpY2FycmF5ID0gW10sXG4gICAgICAgICAgICBsb2FkcmVzbnVtID0gMDtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIFJlc011c2ljcykge1xuICAgICAgICAgICAgLy/lvoDmlbDnu4TkuK3mlL7lgLxcbiAgICAgICAgICAgIG11c2ljYXJyYXkucHVzaChSZXNNdXNpY3Nba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXRpbHMuQ0NMb2coJ211c2ljYXJyYXknLCBtdXNpY2FycmF5KTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbXVzaWNhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgdGhpcy5Mb2FkUmVzQXVkaW9DaWxwKF9wYXRoVXJsLCBtdXNpY2FycmF5W2luZGV4XSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRyZXNudW0rKztcbiAgICAgICAgICAgICAgICAvL+i1hOa6kOWKoOi9veWujOavlVxuICAgICAgICAgICAgICAgIGlmIChtdXNpY2FycmF5Lmxlbmd0aCA9PSBsb2FkcmVzbnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfY2FsbEZ1bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NhbGxGdW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb3mnKzlnLDpn7PkuZBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3BhdGhVcmwgLy/otYTmupDot6/lvoRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX211c2ljbmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IF9jYWxsRnVuIFxuICAgICAqL1xuICAgIExvYWRSZXNBdWRpb0NpbHAoX3BhdGhVcmwsIF9tdXNpY25hbWUsIF9jYWxsRnVuID0gbnVsbCkge1xuICAgICAgICBsZXQgYXVkaW91cmwgPSBfcGF0aFVybCArIFwiL1wiICsgX211c2ljbmFtZTtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoYXVkaW91cmwsIChlcnIsIGF1ZGlvKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5tX0F1ZGlvQ2lscHMuc2V0KF9tdXNpY25hbWUsIGF1ZGlvKTtcbiAgICAgICAgICAgIGlmIChfY2FsbEZ1bikge1xuICAgICAgICAgICAgICAgIF9jYWxsRnVuKGF1ZGlvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog572R57uc6L+c56iL6aKE5Yqg6L296Z+z5pWIXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF91cmwgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF9tdXNpY25hbWUgXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gX2NhbGxGdW4gXG4gICAgICovXG4gICAgTG9hZE5ldEF1ZGlvQ2lscChfdXJsLCBfbXVzaWNuYW1lLCBfY2FsbEZ1biA9IG51bGwpIHtcbiAgICAgICAgbGV0IGF1ZGlvdXJsID0gX3VybCArIF9tdXNpY25hbWU7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkKGF1ZGlvdXJsLCAoZXJyLCBhdWRpbykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1fQXVkaW9DaWxwcy5zZXQoX211c2ljbmFtZSwgYXVkaW8pO1xuICAgICAgICAgICAgaWYgKF9jYWxsRnVuKSB7XG4gICAgICAgICAgICAgICAgX2NhbGxGdW4oYXVkaW8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmkq3mlL7og4zmma/pn7PkuZBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX211c2ljbmFtZSBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IF9pc0xvb3BcbiAgICAgKi9cbiAgICBQbGF5TXVzaWMoX211c2ljTmFtZSwgX2lzTG9vcDogYm9vbGVhbiA9IHRydWUpOiBudW1iZXIge1xuXG4gICAgICAgIC8v6Z+z5LmQ5byA5YWz5omT5byAXG4gICAgICAgIGlmICghdGhpcy5tX0F1ZGlvQ29uZmlnLk11c2ljKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXVkaW8gPSB0aGlzLm1fQXVkaW9DaWxwcy5nZXQoX211c2ljTmFtZSk7XG4gICAgICAgIGlmIChhdWRpbykge1xuICAgICAgICAgICAgLy/lgZzmraLlvZPliY3pn7PkuZBcbiAgICAgICAgICAgIHRoaXMuU3RvcE11c2ljKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoYXVkaW8sIF9pc0xvb3ApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgVXRpbHMuQ0NMb2coJ2F1ZGlvIHJlc291cmNlcyBub3QgbG9hZCBfbXVzaWNuYW1lJywgX211c2ljTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmkq3mlL7pn7PmlYhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3NvdW5kbmFtZSBcbiAgICAgKi9cbiAgICBQbGF5U291bmQoX3NvdW5kbmFtZTogc3RyaW5nLCBfaXNMb29wOiBib29sZWFuID0gZmFsc2UpOiBudW1iZXIge1xuXG4gICAgICAgIC8v6Z+z5pWI5byA5YWz5omT5byAXG4gICAgICAgIGlmICghdGhpcy5tX0F1ZGlvQ29uZmlnLlNvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXVkaW8gPSB0aGlzLm1fQXVkaW9DaWxwcy5nZXQoX3NvdW5kbmFtZSk7XG4gICAgICAgIGlmIChhdWRpbykge1xuICAgICAgICAgICAgcmV0dXJuIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoYXVkaW8sIF9pc0xvb3ApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgVXRpbHMuQ0NMb2coJ2F1ZGlvIHJlc291cmNlcyBub3QgbG9hZCBfc291bmRuYW1lJywgX3NvdW5kbmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlgZzmraLog4zmma/pn7PkuZBcbiAgICAgKi9cbiAgICBTdG9wTXVzaWMoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaaguWBnOiDjOaZr+mfs+S5kFxuICAgICAqL1xuICAgIFBhdXNlTXVzaWMoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmgaLlpI3og4zmma/pn7PkuZBcbiAgICAgKi9cbiAgICBSZXN1bWVNdXNpYygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lTXVzaWMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlgZzmraLmjIflrprpn7PmlYhcbiAgICAgKi9cbiAgICBTdG9wU291bmQoX3NvdW5kSUQ6bnVtYmVyKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QoX3NvdW5kSUQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWBnOatouWFqOmDqOmfs+aViFxuICAgICAqL1xuICAgIFN0b3BBbGxTb3VuZCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcbiAgICB9XG5cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/GamePlayMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d5d0t4zz1BSYrdphuSsDV1', 'GamePlayMenu');
// scripts/ui/GamePlayMenu.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL0dhbWVQbGF5TWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBa0JDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/PopMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31bd5YE4OFPyachl3GNsrgR', 'PopMenu');
// scripts/ui/PopMenu.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL1BvcE1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQWtCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/MainMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf1a0oJ09BENIfLVIP8mUDm', 'MainMenu');
// scripts/ui/MainMenu.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL01haW5NZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUFrQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBVXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manage/GameManage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ef4e4oz2JNk4vlaOBCUFDM', 'GameManage');
// scripts/manage/GameManage.ts



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZS9HYW1lTWFuYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIiXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/scenes/NewScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00ac2puBb9CmJ9jKGF0Jqc8', 'NewScript');
// scripts/scenes/NewScript.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NjZW5lcy9OZXdTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQWtCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/scenes/BaseDemo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8af5lzFm1I7I+wFYj091HI', 'BaseDemo');
// scripts/scenes/BaseDemo.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseDemo = /** @class */ (function (_super) {
    __extends(BaseDemo, _super);
    function BaseDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    BaseDemo.prototype.onLoad = function () {
        //加载游戏界面
    };
    BaseDemo.prototype.start = function () {
    };
    BaseDemo = __decorate([
        ccclass
    ], BaseDemo);
    return BaseDemo;
}(cc.Component));
exports.default = BaseDemo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NjZW5lcy9CYXNlRGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQWFBLENBQUM7SUFaRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLFFBQVE7SUFFWixDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFWZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWE1QjtJQUFELGVBQUM7Q0FiRCxBQWFDLENBYnFDLEVBQUUsQ0FBQyxTQUFTLEdBYWpEO2tCQWJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZURlbW8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy/liqDovb3muLjmiI/nlYzpnaJcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/scenes/Debug.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00ac2puBb9CmJ9jKGF0Jqc8', 'Debug');
// scripts/scenes/Debug.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NjZW5lcy9EZWJ1Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBa0JDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------
