
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQTBwQkEsQ0FBQztJQXRwQkc7O01BRUU7SUFDSyxXQUFLLEdBQVo7UUFBYSxrQkFBVzthQUFYLFVBQVcsRUFBWCxxQkFBVyxFQUFYLElBQVc7WUFBWCw2QkFBVzs7UUFDcEIsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLGdCQUFVLEdBQWpCO1FBQWtCLGtCQUFXO2FBQVgsVUFBVyxFQUFYLHFCQUFXLEVBQVgsSUFBVztZQUFYLDZCQUFXOztRQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZ0JBQVUsR0FBakI7UUFBa0Isa0JBQVc7YUFBWCxVQUFXLEVBQVgscUJBQVcsRUFBWCxJQUFXO1lBQVgsNkJBQVc7O1FBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxnQkFBVSxHQUFqQjtRQUFrQixrQkFBVzthQUFYLFVBQVcsRUFBWCxxQkFBVyxFQUFYLElBQVc7WUFBWCw2QkFBVzs7UUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNJLG1CQUFhLEdBQXBCO1FBQXFCLGtCQUFXO2FBQVgsVUFBVyxFQUFYLHFCQUFXLEVBQVgsSUFBVztZQUFYLDZCQUFXOztRQUM1QixPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVB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QUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7T0FFRztJQUNJLGdCQUFVLEdBQWpCLFVBQWtCLE1BQWM7UUFDNUIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUN2QyxJQUFJLE1BQU0sSUFBSSxvQkFBb0IsRUFBRTtnQkFDaEMsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQXRwQmEsZUFBUyxHQUFZLEtBQUssQ0FBQztJQXdwQjdDLFlBQUM7Q0ExcEJELEFBMHBCQyxJQUFBO2tCQTFwQm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuXG4gICAgcHVibGljIHN0YXRpYyBtX1Nob3dMb2c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICog6L6T5Ye6bG9nXG4gICAgKi9cbiAgICBzdGF0aWMgQ0NMb2coLi4uX2N1c3RvbWUpIHtcbiAgICAgICAgaWYgKFV0aWxzLm1fU2hvd0xvZykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgX2N1c3RvbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6h5pWw6L6T5Ye6bG9nXG4gICAgICovXG4gICAgc3RhdGljIENDTG9nQ291bnQoLi4uX2N1c3RvbWUpIHtcbiAgICAgICAgY29uc29sZS5jb3VudC5hcHBseShjb25zb2xlLCBfY3VzdG9tZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L6T5Ye66Lef6LiqXG4gICAgICovXG4gICAgc3RhdGljIENDTG9nVHJhY2UoLi4uX2N1c3RvbWUpIHtcbiAgICAgICAgY29uc29sZS50cmFjZS5hcHBseShjb25zb2xlLCBfY3VzdG9tZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YiG57uE6L6T5Ye6bG9nXG4gICAgICovXG4gICAgc3RhdGljIENDTG9nR3JvdXAoLi4uX2N1c3RvbWUpIHtcbiAgICAgICAgY29uc29sZS5ncm91cC5hcHBseShjb25zb2xlLCBfY3VzdG9tZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YiG57uE57uT5p2f6L6T5Ye6bG9nXG4gICAgICovXG4gICAgc3RhdGljIENDTG9nR3JvdXBFbmQoLi4uX2N1c3RvbWUpIHtcbiAgICAgICAgY29uc29sZS5ncm91cEVuZC5hcHBseShjb25zb2xlLCBfY3VzdG9tZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pe26Ze06L6T5Ye6bG9nXG4gICAgICovXG4gICAgc3RhdGljIENDTG9nVGltZSguLi5fY3VzdG9tZSkge1xuICAgICAgICBjb25zb2xlLnRpbWUuYXBwbHkoY29uc29sZSwgX2N1c3RvbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaXtumXtOe7k+adn+i+k+WHumxvZ1xuICAgICAqL1xuICAgIHN0YXRpYyBDQ0xvZ1RpbWVFbmQoLi4uX2N1c3RvbWUpIHtcbiAgICAgICAgY29uc29sZS50aW1lRW5kLmFwcGx5KGNvbnNvbGUsIF9jdXN0b21lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDovpPlh7rplJnor69cbiAgICAgKi9cbiAgICBzdGF0aWMgQ0NMb2dFcnJvciguLi5fY3VzdG9tZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIF9jdXN0b21lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDovpPlh7rorablkYpcbiAgICAgKi9cbiAgICBzdGF0aWMgQ0NMb2dXYXJuKC4uLl9jdXN0b21lKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLCBfY3VzdG9tZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa4heeQhui+k+WHumxvZ1xuICAgICAqL1xuICAgIHN0YXRpYyBDQ0xvZ0NsZWFyKCkge1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LiA5Liq6ZqP5py65pWwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IF9taW4gXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IF9tYXggXG4gICAgICog6L+U5Zue5LiA5Liq5pW05pWwXG4gICAgICovXG4gICAgc3RhdGljIFJhbmROdW0oX21pbjogbnVtYmVyLCBfbWF4OiBudW1iZXIpIHtcblxuICAgICAgICBpZiAoX21heCA8IF9taW4pIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKF9tYXgpICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKF9taW4gLSBfbWF4KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX21heCA9PT0gX21pbikge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoX21pbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChfbWluKSArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChfbWF4IC0gX21pbikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LiA5Liq6ZqP5py65pWwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IF9taW4gXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IF9tYXggXG4gICAgICog6L+U5Zue5LiA5Liq5rWu54K55pWwXG4gICAgICovXG4gICAgc3RhdGljIFJhbmRudW1iZXIoX21pbjogbnVtYmVyLCBfbWF4OiBudW1iZXIpIHtcblxuICAgICAgICBpZiAoX21heCA8IF9taW4pIHtcbiAgICAgICAgICAgIHJldHVybiBfbWF4ICsgTWF0aC5yYW5kb20oKSAqIChfbWluIC0gX21heCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX21heCA9PT0gX21pbikge1xuICAgICAgICAgICAgcmV0dXJuIF9taW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX21pbiArIE1hdGgucmFuZG9tKCkgKiAoX21heCAtIF9taW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LiA5Liq6ZqP5py65byn5bqmXG4gICAgICog6IyD5Zu0KC3PgCwrz4ApXG4gICAgICog6L+U5Zue5LiA5Liq5rWu54K55pWwXG4gICAgICovXG4gICAgc3RhdGljIFJhbmRSYWRpYW4oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpID4gMC41ID8gTWF0aC5yYW5kb20oKSAlIE1hdGguUEkgOiAtTWF0aC5yYW5kb20oKSAlIE1hdGguUEk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yik6K+75a+56LGh5piv5ZCm5Li656m6XG4gICAgICogQHBhcmFtIHtvYmplY3R9IF9hcnIgXG4gICAgICovXG4gICAgc3RhdGljIElzTnVsbChfdmFsdWU6IGFueSkge1xuXG4gICAgICAgIGlmIChfdmFsdWUgPT09IG51bGwgfHxcbiAgICAgICAgICAgIF92YWx1ZSA9PT0gXCJcIiB8fFxuICAgICAgICAgICAgX3ZhbHVlID09PSBcIm51bGxcIiB8fFxuICAgICAgICAgICAgX3ZhbHVlID09PSBcIk51bGxcIiB8fFxuICAgICAgICAgICAgX3ZhbHVlID09PSBcIk5VTExcIiB8fFxuICAgICAgICAgICAgX3ZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3seW6puaLt+i0neWvueixoVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmogXG4gICAgICovXG4gICAgc3RhdGljIENsb25lT2JqKG9iajogb2JqZWN0KSB7XG4gICAgICAgIHZhciBuZXdPYmogPSB7fTtcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBuZXdPYmogPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyA/IHRoaXMuQ2xvbmVPYmoodmFsKSA6IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/lOWbnuS4gOS4quWUr+S4gOeahHV1aWRcbiAgICAgKiBcbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0VVVJRCgpIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7XG4gICAgICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LiA5Liq5a2X56ym5Liy5a+55bqU5a2X6IqC55qE6ZW/5bqm55qE54mH5q61XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF9zdHIgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IF9ieXRlc1xuICAgICAqIFxuICAgICAqL1xuICAgIHN0YXRpYyBHZXRTdHJpbmdDdXRPdXQoX3N0cjogc3RyaW5nLCBfYnl0ZXM6IG51bWJlciA9IDEwKSB7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XG5cbiAgICAgICAgaWYgKF9zdHIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsZW4gPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9zdHIubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgaWYgKF9zdHIuY2hhckNvZGVBdChpKSA+IDEyNyB8fCBfc3RyLmNoYXJDb2RlQXQoaSkgPT0gOTQpIHtcbiAgICAgICAgICAgICAgICBsZW4gKz0gMjtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZW4rKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxlbiA8PSBfYnl0ZXMpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gX3N0ci5jaGFyQXQoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA8IF9zdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCIuLi5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFV0aWxzLkNDTG9nKFwiR2V0U3RyaW5nVHJpbSByZXN1bHRcIixyZXN1bHQpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5a2X56ym5Liy5qC55o2uIOWtl+espiDliIblibLmlbDnu4RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3N0ciBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX2tleSBcbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0U3RyaW5nVG9BcnJheShfYXJyOiBzdHJpbmcsIF9rZXk6IHN0cmluZyA9ICc7Jykge1xuXG4gICAgICAgIGlmIChVdGlscy5Jc051bGwoX2FycikpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBfYXJyICs9IFwiXCI7XG5cbiAgICAgICAgcmV0dXJuIF9hcnIuc3BsaXQoX2tleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5byn5bqm5a+55bqU6ZW/5bqm55qE5L2N572uIFxuICAgICAqIOm7mOiupOS4ujHplb/luqZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX2VhZGlhbiBcbiAgICAgKi9cbiAgICBzdGF0aWMgUmFkaWFuVG9WZWMyKF9lYWRpYW46IG51bWJlciwgX2xlbmdodDogbnVtYmVyID0gMSkge1xuICAgICAgICByZXR1cm4gY2MudjIoTWF0aC5jb3MoX2VhZGlhbikgKiBfbGVuZ2h0LCBNYXRoLnNpbihfZWFkaWFuKSAqIF9sZW5naHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/lOWbnuinkuW6puWvueW6lOeahOW8p+W6plxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBfYW5nbGVcbiAgICAgKi9cbiAgICBzdGF0aWMgQW5nbGVUb1JhZGlhbihfYW5nbGU6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gX2FuZ2xlIC8gMTgwICogTWF0aC5QSS8vIChfZWFkaWFuL01hdGguUEkpKjE4MDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57lvKfluqblr7nlupTnmoTop5LluqZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX2VhZGlhbiBcbiAgICAgKi9cbiAgICBzdGF0aWMgUmFkaWFuVG9BbmdsZShfZWFkaWFuOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIChfZWFkaWFuIC8gTWF0aC5QSSkgKiAxODA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5Lik5Liq5ZCR6YeP55qE6Led56a7XG4gICAgICogQHBhcmFtIHtjYy5WZWMyfSBfdmVjMjFcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzJ9IF92ZWMyMiBcbiAgICAgKi9cbiAgICBzdGF0aWMgVmVjMkRpc3RhbmNlKF92ZWMyMTogY2MuVmVjMiwgX3ZlYzIyOiBjYy5WZWMyKSB7XG4gICAgICAgIGxldCBvdXQgPSBuZXcgY2MuVmVjMigwLCAwKTtcbiAgICAgICAgb3V0LnggPSBfdmVjMjEueCAtIF92ZWMyMi54O1xuICAgICAgICBvdXQueSA9IF92ZWMyMS55IC0gX3ZlYzIyLnk7XG4gICAgICAgIC8vIGxldCBsZW5ndGggPSAgTWF0aC5zcXJ0KF92ZWMyLnggKiBfdmVjMi54ICsgX3ZlYzIueSAqIF92ZWMyLnkpO1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KG91dC54ICogb3V0LnggKyBvdXQueSAqIG91dC55KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57kuoznu7TlkJHph4/nmoTlh4/ms5VcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzJ9IF92ZWMyMVxuICAgICAqIEBwYXJhbSB7Y2MuVmVjMn0gX3ZlYzIyIFxuICAgICAqIFxuICAgICAqL1xuICAgIHN0YXRpYyBWZWMyU3ViKF92ZWMyMTogY2MuVmVjMiwgX3ZlYzIyOiBjYy5WZWMyKSB7XG4gICAgICAgIGxldCBvdXQgPSBuZXcgY2MuVmVjMigwLCAwKTtcbiAgICAgICAgb3V0LnggPSBfdmVjMjEueCAtIF92ZWMyMi54O1xuICAgICAgICBvdXQueSA9IF92ZWMyMS55IC0gX3ZlYzIyLnk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LqM57u05ZCR6YeP55qE5byn5bqmXG4gICAgICogQHBhcmFtIHtjYy5WZWMyfSBfdmVjMiBcbiAgICAgKi9cbiAgICBzdGF0aWMgVmVjMlJhZGlhbihfdmVjMjogY2MuVmVjMikge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihfdmVjMi55LCBfdmVjMi54KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57kuoznu7TlkJHph4/nmoTplb/luqZcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzJ9IF92ZWMyIFxuICAgICAqL1xuICAgIHN0YXRpYyBWZWMyTGVuZ2h0KF92ZWMyOiBjYy5WZWMyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoX3ZlYzIueCAqIF92ZWMyLnggKyBfdmVjMi55ICogX3ZlYzIueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LqM57u05ZCR6YeP5b2S5LiA5YyWXG4gICAgICogQHBhcmFtIHtjYy5WZWMyfSBfdmVjMiBcbiAgICAgKi9cbiAgICBzdGF0aWMgVmVjMk5vcm1hbGl6ZShfdmVjMjogY2MuVmVjMikge1xuICAgICAgICBsZXQgb3V0ID0gbmV3IGNjLlZlYzIoMCwgMCk7XG4gICAgICAgIHZhciBtYWdTcXIgPSBfdmVjMi54ICogX3ZlYzIueCArIF92ZWMyLnkgKiBfdmVjMi55O1xuICAgICAgICBpZiAobWFnU3FyID09PSAxLjApXG4gICAgICAgICAgICByZXR1cm4gX3ZlYzI7XG5cbiAgICAgICAgaWYgKG1hZ1NxciA9PT0gMC4wKSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZlYzI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW52c3FydCA9IDEuMCAvIE1hdGguc3FydChtYWdTcXIpO1xuICAgICAgICBvdXQueCA9IF92ZWMyLnggKiBpbnZzcXJ0O1xuICAgICAgICBvdXQueSA9IF92ZWMyLnkgKiBpbnZzcXJ0O1xuXG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LqM57u05ZCR6YeP55qE57yp5pS+XG4gICAgICogQHBhcmFtIHtjYy5WZWMyfSBfdmVjMiBcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gX2xlbmdodCBcbiAgICAgKiBcbiAgICAgKi9cbiAgICBzdGF0aWMgVmVjMk11bChfdmVjMjogY2MuVmVjMiwgX2xlbmdodDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBvdXQgPSBuZXcgY2MuVmVjMigwLCAwKTtcbiAgICAgICAgb3V0LnggPSBfdmVjMi54ICogX2xlbmdodDtcbiAgICAgICAgb3V0LnkgPSBfdmVjMi55ICogX2xlbmdodDtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIbmr6vnp5LmlbDovazmjaLmiJDml7bpl7TmoLzlvI8gMjAxOTowNTozMDoxMDoxMjoxMFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBfdGltZVxuICAgICAqL1xuICAgIHN0YXRpYyBHZXRUaW1lRm9ybWF0KF90aW1lOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKF90aW1lKSxcbiAgICAgICAgICAgIHkgPSBub3cuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIG0gPSBub3cuZ2V0TW9udGgoKSArIDEsXG4gICAgICAgICAgICBkID0gbm93LmdldERhdGUoKTtcbiAgICAgICAgcmV0dXJuIHkgKyBcIi1cIiArIChtIDwgMTAgPyBcIjBcIiArIG0gOiBtKSArIFwiLVwiICsgKGQgPCAxMCA/IFwiMFwiICsgZCA6IGQpICsgXCIgXCIgKyBub3cudG9UaW1lU3RyaW5nKCkuc3Vic3RyKDAsIDgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWwhuenkuaVsOi9rOaNouaIkOaXtumXtOagvOW8jyAxMDo1MCDnp5JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX3RpbWUgXG4gICAgICovXG4gICAgc3RhdGljIEdldFRpbWVNaW51dGVzU2Vjb25kcyhfdGltZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcihfdGltZSAvIDYwKTtcbiAgICAgICAgbGV0IHNlY29uZHMgPSBfdGltZSAtIChtaW51dGVzICogNjApO1xuICAgICAgICByZXR1cm4gKG1pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXMpICsgXCI6XCIgKyAoc2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bCG5q+r56eS5pWw6L2s5o2i5oiQ5pe26Ze05qC85byPICDliIbpkp9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX3RpbWUgXG4gICAgICovXG4gICAgc3RhdGljIEdldFRpbWVNaW51dGVzKF90aW1lOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChfdGltZSAvIDYwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIbmr6vnp5LmlbDovazmjaLmiJDml7bpl7TmoLzlvI8gIOWkqVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBfdGltZSBcbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0VGltZURheShfdGltZTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoX3RpbWUgLyAxMDAwIC8gNjAgLyA2MCAvIDI0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIbmr6vnp5LmlbDovazmjaLmiJDml7bpl7TmoLzlvI8gIOWwj+aXtlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBfdGltZSBcbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0VGltZUhvdXIoX3RpbWU6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKF90aW1lIC8gMTAwMCAvIDYwIC8gNjApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/lOWbnuS7iuWkqeaXtumXtCDlsI/ml7ZcbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0VG9EYXlIb3VyKCkge1xuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgcmV0dXJuIG5vdy5nZXRIb3VycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/lOWbnuS7iuWkqeaXtumXtCDlh6DliIbpkp9cbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0VG9EYXlNaW51dGVzKCkge1xuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgcmV0dXJuIG5vdy5nZXRNaW51dGVzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LuK5aSp5ZGo5YegXG4gICAgICovXG4gICAgc3RhdGljIEdldFRvRGF5V2VlaygpIHtcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHJldHVybiBub3cuZ2V0RGF5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pWw5a2X5a2X56ym5Liy55u45YqgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF9zdHJBXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF9zdHJCXG4gICAgICogXG4gICAgICovXG4gICAgc3RhdGljIFN0cmluZ0NhbGN1bGF0ZVN1bShfc3RyQTogc3RyaW5nLCBfc3RyQjogc3RyaW5nKSB7XG5cbiAgICAgICAgLy/lhYjliKTmlq3mmK/lkKbmmK/lrZfnrKbkuLJcbiAgICAgICAgaWYgKHR5cGVvZiBfc3RyQSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIF9zdHJBID0gX3N0ckEgKyAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgX3N0ckIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBfc3RyQiA9IF9zdHJCICsgJyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmFMaXN0ID0gX3N0ckEuc3BsaXQoJycpLFxuICAgICAgICAgICAgcmJMaXN0ID0gX3N0ckIuc3BsaXQoJycpLFxuICAgICAgICAgICAgcmVzdWx0OiBhbnkgPSAnJyxcbiAgICAgICAgICAgIGNvdW50OiBhbnkgPSAwO1xuICAgICAgICAvLyBVdGlscy5DQ0xvZygnU3RyaW5nQ2FsY3VsYXRlQWRkaXRpb24gIHJhTGlzdCcsIHJhTGlzdCwgJ3JiTGlzdCcsIHJiTGlzdCk7XG5cbiAgICAgICAgd2hpbGUgKHJhTGlzdC5sZW5ndGggfHwgcmJMaXN0Lmxlbmd0aCB8fCBjb3VudCkge1xuICAgICAgICAgICAgLy8gVXRpbHMuQ0NMb2dDb3VudCgnU3RyaW5nQ2FsY3VsYXRlU3VtIHdoaWVsJylcbiAgICAgICAgICAgIGNvdW50ICs9IH5+cmFMaXN0LnBvcCgpICsgfn5yYkxpc3QucG9wKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBjb3VudCAlIDEwICsgcmVzdWx0O1xuICAgICAgICAgICAgY291bnQgPSBjb3VudCA+IDk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXRpbHMuQ0NMb2coJ1N0cmluZ0NhbGN1bGF0ZVN1bSAgcmFMaXN0JywgcmFMaXN0LCAncmJMaXN0JywgcmJMaXN0LCAncmVzdWx0JywgcmVzdWx0KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pWw5a2X5a2X56ym5Liy55u45YePXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF9zdHJBIOiiq+WHj+aVsFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBfc3RyQiDlh4/mlbBcbiAgICAgKiBcbiAgICAgKi9cbiAgICBzdGF0aWMgU3RyaW5nQ2FsY3VsYXRlU3ViKF9zdHJBOiBzdHJpbmcsIF9zdHJCOiBzdHJpbmcpIHtcblxuICAgICAgICAvL+WFiOWIpOaWreaYr+WQpuaYr+Wtl+espuS4slxuICAgICAgICBpZiAodHlwZW9mIF9zdHJBICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgX3N0ckEgPSBfc3RyQSArICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBfc3RyQiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIF9zdHJCID0gX3N0ckIgKyAnJztcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmFMaXN0ID0gX3N0ckEuc3BsaXQoJycpLFxuICAgICAgICAgICAgcmJMaXN0ID0gX3N0ckIuc3BsaXQoJycpLFxuICAgICAgICAgICAgcmVzdWx0ID0gJycsXG4gICAgICAgICAgICBjb3VudDogYW55ID0gMCxcbiAgICAgICAgICAgIGRlc2MgPSAwO1xuXG4gICAgICAgIGlmIChwYXJzZUludChfc3RyQSkgPCBwYXJzZUludChfc3RyQikpIHtcbiAgICAgICAgICAgIC8vIFV0aWxzLkNDTG9nKCdfc3RyQSA8IF9zdHJCJyk7XG4gICAgICAgICAgICBsZXQgdGVtcCA9IHJhTGlzdDtcbiAgICAgICAgICAgIHJhTGlzdCA9IHJiTGlzdDtcbiAgICAgICAgICAgIHJiTGlzdCA9IHRlbXA7XG4gICAgICAgICAgICBkZXNjID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX3N0ckEgPT0gX3N0ckIpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgVXRpbHMuQ0NMb2coJ1N0cmluZ0NhbGN1bGF0ZUFkZGl0aW9uICByYUxpc3QnLCByYUxpc3QsICdyYkxpc3QnLCByYkxpc3QpO1xuXG4gICAgICAgIHdoaWxlIChyYUxpc3QubGVuZ3RoIHx8IHJiTGlzdC5sZW5ndGggfHwgY291bnQpIHtcbiAgICAgICAgICAgIC8vIFV0aWxzLkNDTG9nQ291bnQoJ1N0cmluZ0NhbGN1bGF0ZVN1YiB3aGllbCcpO1xuICAgICAgICAgICAgbGV0IGFkID0gfn5yYUxpc3QucG9wKCkgLSB+fnJiTGlzdC5wb3AoKSAtIGNvdW50O1xuICAgICAgICAgICAgVXRpbHMuQ0NMb2coJ2FkJywgYWQsICdjb3VudCcsIGNvdW50KTtcbiAgICAgICAgICAgIHJlc3VsdCA9IChhZCA8IDAgPyAxMCArIGFkIDogYWQpICsgcmVzdWx0O1xuICAgICAgICAgICAgY291bnQgPSBhZCA8IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVsaXN0ID0gcmVzdWx0LnNwbGl0KCcnKTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVsaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudDogYW55ID0gcmVsaXN0W2luZGV4XTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICE9IDApIHtcbiAgICAgICAgICAgICAgICByZWxpc3Quc3BsaWNlKDAsIGluZGV4KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gcmVsaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICByZWxpc3Quc3BsaWNlKDAsIHJlbGlzdC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZXNjID09IC0xKSB7XG4gICAgICAgICAgICByZWxpc3Quc3BsaWNlKDAsIDAsICctJyk7XG4gICAgICAgIH1cbiAgICAgICAgVXRpbHMuQ0NMb2coJ1N0cmluZ0NhbGN1bGF0ZVN1YiAgcmFMaXN0JywgcmFMaXN0LCAncmJMaXN0JywgcmJMaXN0LCAncmVzdWx0JywgcmVzdWx0LCAncmVsaXN0LmpvaW4nLCByZWxpc3Quam9pbignJykpO1xuXG4gICAgICAgIHJldHVybiByZWxpc3Quam9pbignJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5o2i566X5ZCO55qE5a2X56ym5LiyXG4gICAgICogQHBhcmFtIHthbnl9IF9zdHJBIFxuICAgICAqIFxuICAgICAqL1xuICAgIHN0YXRpYyBTdHJpbmdHZXRDb252ZXJzaW9uVW5pdChfc3RyQSkge1xuXG4gICAgICAgIC8v5YWI5Yik5pat5piv5ZCm5piv5a2X56ym5LiyXG4gICAgICAgIGlmICh0eXBlb2YgX3N0ckEgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBfc3RyQSA9IF9zdHJBICsgJyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdW5pdFN5bWJvbHMgPSBbJycsICdLJywgJ00nLCAnQicsICdUJywgJ1FkJywgJ1F0JywgJ1onLCAnWScsICdTJywgJ0wnLCAnWCcsICdEJ10sXG4gICAgICAgICAgICByYSA9IF9zdHJBLnJlcGxhY2UoLyhefFxccylcXGQrL2csIChtKSA9PiBtLnJlcGxhY2UoLyg/PSg/IVxcYikoXFxkezN9KSskKS9nLCAnLCcpKSxcbiAgICAgICAgICAgIHJlc3VsdCA9ICcnLFxuICAgICAgICAgICAgZGVzYzogYW55ID0gMDtcblxuICAgICAgICBsZXQgc3BsaXRBcnJheSA9IHJhLnNwbGl0KCcsJyk7XG4gICAgICAgIGlmIChzcGxpdEFycmF5Lmxlbmd0aCA+IHVuaXRTeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgc3BsaXRBcnJheS5zcGxpY2Uoc3BsaXRBcnJheS5sZW5ndGggLSB1bml0U3ltYm9scy5sZW5ndGgsIHVuaXRTeW1ib2xzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgZGVzYyA9IHVuaXRTeW1ib2xzW3VuaXRTeW1ib2xzLmxlbmd0aCAtIDJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVzYyA9IHVuaXRTeW1ib2xzW3NwbGl0QXJyYXkubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBzcGxpdEFycmF5LnNwbGljZSgxLCBzcGxpdEFycmF5Lmxlbmd0aCAtIDIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3BsaXRBcnJheVwiLCBzcGxpdEFycmF5KTtcblxuICAgICAgICAvLyBpZiAoTnVtYmVyKHNwbGl0QXJyYXlbMF0pIDwgMTAwKSB7XG4gICAgICAgIC8vICAgICBpZiAoTnVtYmVyKHNwbGl0QXJyYXlbMF0pIDwgMTApIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoc3BsaXRBcnJheVsxXSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBzcGxpdEFycmF5WzFdID0gc3BsaXRBcnJheVsxXS5zbGljZSgwLCAyKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzcGxpdEFycmF5WzFdXCIsc3BsaXRBcnJheVsxXSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChOdW1iZXIoc3BsaXRBcnJheVsxXVsxXSkgPT0gMCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc3BsaXRBcnJheVsxXSA9IHNwbGl0QXJyYXlbMV0uc2xpY2UoMCwgMSk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHNwbGl0QXJyYXlbMV1bMF0pID09IDApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBzcGxpdEFycmF5LnBvcCgpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHNwbGl0QXJyYXlbMV0pIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgc3BsaXRBcnJheVsxXSA9IHNwbGl0QXJyYXlbMV0uc2xpY2UoMCwgMSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChOdW1iZXIoc3BsaXRBcnJheVsxXVswXSkgPT0gMCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc3BsaXRBcnJheS5wb3AoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgLy8gICAgIHNwbGl0QXJyYXkucG9wKCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAoc3BsaXRBcnJheVsxXSkge1xuICAgICAgICAgICAgaWYgKE51bWJlcihzcGxpdEFycmF5WzBdKSA8IDEwMCkge1xuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoc3BsaXRBcnJheVswXSkgPCAxMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRBcnJheVsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXRBcnJheVsxXSA9IHNwbGl0QXJyYXlbMV0uc2xpY2UoMCwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNwbGl0QXJyYXlbMV1cIixzcGxpdEFycmF5WzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoc3BsaXRBcnJheVsxXVsxXSkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0QXJyYXlbMV0gPSBzcGxpdEFycmF5WzFdLnNsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoc3BsaXRBcnJheVsxXVswXSkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGxpdEFycmF5LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0QXJyYXlbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0QXJyYXlbMV0gPSBzcGxpdEFycmF5WzFdLnNsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcihzcGxpdEFycmF5WzFdWzBdKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXRBcnJheS5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNwbGl0QXJyYXkucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzcGxpdEFycmF5WzFdID0gc3BsaXRBcnJheVsxXS5zbGljZSgwLCAyKTtcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJzcGxpdEFycmF5WzFdXCIsc3BsaXRBcnJheVsxXSk7XG4gICAgICAgIC8vIGlmIChOdW1iZXIoc3BsaXRBcnJheVsxXVsxXSkgPT0gMCkge1xuICAgICAgICAvLyAgICAgc3BsaXRBcnJheVsxXSA9IHNwbGl0QXJyYXlbMV0uc2xpY2UoMCwgMSk7XG4gICAgICAgIC8vICAgICBpZiAoTnVtYmVyKHNwbGl0QXJyYXlbMV1bMF0pID09IDApIHtcbiAgICAgICAgLy8gICAgICAgICBzcGxpdEFycmF5LnBvcCgpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIHJlc3VsdCA9IHNwbGl0QXJyYXkuam9pbignLicpICsgZGVzYztcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xuICAgICAgICAvLyByYUxpc3Quc3BsaWNlKHJhTGlzdC5sZW5ndGggLSB1bml0aW5kZXggKiAzLCByYUxpc3QubGVuZ3RoIC0gMSk7XG4gICAgICAgIC8vIFV0aWxzLkNDTG9nKCdTdHJpbmdHZXRDb252ZXJzaW9uVW5pdCByYScsIHJhLCAnc3BsaXRBcnJheScsIHNwbGl0QXJyYXksICdkZXNjJywgZGVzYyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5a2X56ym5Liy6L2sVW5pY29kZee8lueggVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBfc3RyXG4gICAgICogXG4gICAgICovXG4gICAgc3RhdGljIFN0cl9Ub19Vbmljb2RlKF9zdHI6IHN0cmluZykge1xuICAgICAgICB2YXIgdW5pZCA9ICdcXFxcdSc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBfc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA8IGxlbiAtIDEpIHtcbiAgICAgICAgICAgICAgICB1bmlkICs9IF9zdHIuY2hhckNvZGVBdChpKS50b1N0cmluZygxNikgKyAnXFxcXHUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBsZW4gLSAxKSB7XG4gICAgICAgICAgICAgICAgdW5pZCArPSBfc3RyLmNoYXJDb2RlQXQoaSkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU3RyX1RvX1VuaWNvZGVcIiwgdW5pZCk7XG4gICAgICAgIHJldHVybiB1bmlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuaWNvZGXnvJbnoIHovazlrZfnrKbkuLJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3VuaWNvZGUgXG4gICAgICogXG4gICAgICovXG4gICAgc3RhdGljIFVuaWNvZGVfVG9fU3RyKF91bmljb2RlOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB2YXIgc3RyQXJyID0gX3VuaWNvZGUuc3BsaXQoJ1xcXFx1Jyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAyLCBsZW4gPSBzdHJBcnIubGVuZ3RoIC0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0ckFycltpXVwiLCBzdHJBcnJbaV0pO1xuXG4gICAgICAgICAgICBpZiAoc3RyQXJyW2ldKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChzdHJBcnJbaV0sIDE2KSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVW5pY29kZV9Ub19TdHIgc3RyQXJyXCIsIHN0ckFyciwgXCJyZXN1bHRcIiwgcmVzdWx0KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBfdXJsIOe9kee7nOivt+axgui3r+W+hCBcbiAgICAgKi9cbiAgICBzdGF0aWMgQ2hlY2tVUkwoX3VybDogc3RyaW5nKSB7XG4gICAgICAgIGxldCB1cmwgPSBuZXcgU3RyaW5nKF91cmwpXG4gICAgICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly9jYXRob21lOC5jb20nKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHA6Ly9jYXRob21lOC5jb20nKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBfdXJsIOe9kee7nOivt+axgui3r+W+hCBcbiAgICAgKi9cbiAgICBzdGF0aWMgQ2hlY2tBcHBJZChfYXBwaWQ6IHN0cmluZykge1xuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xuICAgICAgICAgICAgaWYgKF9hcHBpZCA9PSAnd3hkZDAzNjc5OWFlNGRjZDlmJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxufVxuIl19