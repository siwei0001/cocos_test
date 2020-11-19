

export default class Utils {

    public static m_ShowLog: boolean = false;

    /**
    * 输出log
    */
    static CCLog(..._custome) {
        if (Utils.m_ShowLog) {
            console.log.apply(console, _custome);
        }
    }

    /**
     * 计数输出log
     */
    static CCLogCount(..._custome) {
        console.count.apply(console, _custome);
    }

    /**
     * 输出跟踪
     */
    static CCLogTrace(..._custome) {
        console.trace.apply(console, _custome);
    }

    /**
     * 分组输出log
     */
    static CCLogGroup(..._custome) {
        console.group.apply(console, _custome);
    }

    /**
     * 分组结束输出log
     */
    static CCLogGroupEnd(..._custome) {
        console.groupEnd.apply(console, _custome);
    }

    /**
     * 时间输出log
     */
    static CCLogTime(..._custome) {
        console.time.apply(console, _custome);
    }

    /**
     * 时间结束输出log
     */
    static CCLogTimeEnd(..._custome) {
        console.timeEnd.apply(console, _custome);
    }

    /**
     * 输出错误
     */
    static CCLogError(..._custome) {
        console.error.apply(console, _custome);
    }

    /**
     * 输出警告
     */
    static CCLogWarn(..._custome) {
        console.warn.apply(console, _custome);
    }
    /**
     * 清理输出log
     */
    static CCLogClear() {
        console.clear();
    }

    /**
     * 返回一个随机数
     * @param {number} _min 
     * @param {number} _max 
     * 返回一个整数
     */
    static RandNum(_min: number, _max: number) {

        if (_max < _min) {
            return Math.round(_max) + Math.round(Math.random() * (_min - _max));
        }
        else if (_max === _min) {
            return Math.round(_min);
        }
        else {
            return Math.round(_min) + Math.round(Math.random() * (_max - _min));
        }
    }

    /**
     * 返回一个随机数
     * @param {number} _min 
     * @param {number} _max 
     * 返回一个浮点数
     */
    static Randnumber(_min: number, _max: number) {

        if (_max < _min) {
            return _max + Math.random() * (_min - _max);
        }
        else if (_max === _min) {
            return _min;
        }
        else {
            return _min + Math.random() * (_max - _min);
        }
    }

    /**
     * 返回一个随机弧度
     * 范围(-π,+π)
     * 返回一个浮点数
     */
    static RandRadian() {
        return Math.random() > 0.5 ? Math.random() % Math.PI : -Math.random() % Math.PI;
    }

    /**
     * 判读对象是否为空
     * @param {object} _arr 
     */
    static IsNull(_value: any) {

        if (_value === null ||
            _value === "" ||
            _value === "null" ||
            _value === "Null" ||
            _value === "NULL" ||
            _value === undefined
        ) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * 深度拷贝对象
     * @param {object} obj 
     */
    static CloneObj(obj: object) {
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
    }

    /**
     * 返回一个唯一的uuid
     * 
     */
    static GetUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    /**
     * 返回一个字符串对应字节的长度的片段
     * @param {string} _str 
     * @param {number} _bytes
     * 
     */
    static GetStringCutOut(_str: string, _bytes: number = 10) {

        let result = "";

        if (_str == null) {
            return result;
        }

        var len = 0;
        for (var i = 0; i < _str.length; i++) {

            if (_str.charCodeAt(i) > 127 || _str.charCodeAt(i) == 94) {
                len += 2;

            } else {
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
    }

    /**
     * 返回字符串根据 字符 分割数组
     * @param {string} _str 
     * @param {string} _key 
     */
    static GetStringToArray(_arr: string, _key: string = ';') {

        if (Utils.IsNull(_arr)) {
            return [];
        }
        _arr += "";

        return _arr.split(_key);
    }

    /**
     * 返回弧度对应长度的位置 
     * 默认为1长度
     * @param {number} _eadian 
     */
    static RadianToVec2(_eadian: number, _lenght: number = 1) {
        return cc.v2(Math.cos(_eadian) * _lenght, Math.sin(_eadian) * _lenght);
    }

    /**
     * 返回角度对应的弧度
     * @param {number} _angle
     */
    static AngleToRadian(_angle: number) {
        return _angle / 180 * Math.PI// (_eadian/Math.PI)*180;
    }

    /**
     * 返回弧度对应的角度
     * @param {number} _eadian 
     */
    static RadianToAngle(_eadian: number) {
        return (_eadian / Math.PI) * 180;
    }

    /**
     * 返回两个向量的距离
     * @param {cc.Vec2} _vec21
     * @param {cc.Vec2} _vec22 
     */
    static Vec2Distance(_vec21: cc.Vec2, _vec22: cc.Vec2) {
        let out = new cc.Vec2(0, 0);
        out.x = _vec21.x - _vec22.x;
        out.y = _vec21.y - _vec22.y;
        // let length =  Math.sqrt(_vec2.x * _vec2.x + _vec2.y * _vec2.y);
        return Math.sqrt(out.x * out.x + out.y * out.y);
    }

    /**
     * 返回二维向量的减法
     * @param {cc.Vec2} _vec21
     * @param {cc.Vec2} _vec22 
     * 
     */
    static Vec2Sub(_vec21: cc.Vec2, _vec22: cc.Vec2) {
        let out = new cc.Vec2(0, 0);
        out.x = _vec21.x - _vec22.x;
        out.y = _vec21.y - _vec22.y;
        return out;
    }

    /**
     * 返回二维向量的弧度
     * @param {cc.Vec2} _vec2 
     */
    static Vec2Radian(_vec2: cc.Vec2) {
        return Math.atan2(_vec2.y, _vec2.x);
    }

    /**
     * 返回二维向量的长度
     * @param {cc.Vec2} _vec2 
     */
    static Vec2Lenght(_vec2: cc.Vec2) {
        return Math.sqrt(_vec2.x * _vec2.x + _vec2.y * _vec2.y);
    }

    /**
     * 返回二维向量归一化
     * @param {cc.Vec2} _vec2 
     */
    static Vec2Normalize(_vec2: cc.Vec2) {
        let out = new cc.Vec2(0, 0);
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
    }

    /**
     * 返回二维向量的缩放
     * @param {cc.Vec2} _vec2 
     * @param {Number} _lenght 
     * 
     */
    static Vec2Mul(_vec2: cc.Vec2, _lenght: number) {
        let out = new cc.Vec2(0, 0);
        out.x = _vec2.x * _lenght;
        out.y = _vec2.y * _lenght;
        return out;
    }

    /**
     * 将毫秒数转换成时间格式 2019:05:30:10:12:10
     * @param {number} _time
     */
    static GetTimeFormat(_time: number) {
        var now = new Date(_time),
            y = now.getFullYear(),
            m = now.getMonth() + 1,
            d = now.getDate();
        return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
    }

    /**
     * 将秒数转换成时间格式 10:50 秒
     * @param {number} _time 
     */
    static GetTimeMinutesSeconds(_time: number) {
        let minutes = Math.floor(_time / 60);
        let seconds = _time - (minutes * 60);
        return (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    }

    /**
     * 将毫秒数转换成时间格式  分钟
     * @param {number} _time 
     */
    static GetTimeMinutes(_time: number) {
        return Math.ceil(_time / 60);
    }

    /**
     * 将毫秒数转换成时间格式  天
     * @param {number} _time 
     */
    static GetTimeDay(_time: number) {
        return Math.ceil(_time / 1000 / 60 / 60 / 24);
    }

    /**
     * 将毫秒数转换成时间格式  小时
     * @param {number} _time 
     */
    static GetTimeHour(_time: number) {
        return Math.ceil(_time / 1000 / 60 / 60);
    }

    /**
     * 返回今天时间 小时
     */
    static GetToDayHour() {
        var now = new Date();
        return now.getHours();
    }

    /**
     * 返回今天时间 几分钟
     */
    static GetToDayMinutes() {
        var now = new Date();
        return now.getMinutes();
    }

    /**
     * 返回今天周几
     */
    static GetToDayWeek() {
        var now = new Date();
        return now.getDay();
    }

    /**
     * 数字字符串相加
     * @param {string} _strA
     * @param {string} _strB
     * 
     */
    static StringCalculateSum(_strA: string, _strB: string) {

        //先判断是否是字符串
        if (typeof _strA !== 'string') {
            _strA = _strA + '';
        }

        if (typeof _strB !== 'string') {
            _strB = _strB + '';
        }

        let raList = _strA.split(''),
            rbList = _strB.split(''),
            result: any = '',
            count: any = 0;
        // Utils.CCLog('StringCalculateAddition  raList', raList, 'rbList', rbList);

        while (raList.length || rbList.length || count) {
            // Utils.CCLogCount('StringCalculateSum whiel')
            count += ~~raList.pop() + ~~rbList.pop();
            result = count % 10 + result;
            count = count > 9;
        }
        // Utils.CCLog('StringCalculateSum  raList', raList, 'rbList', rbList, 'result', result);

        return result;

    }

    /**
     * 数字字符串相减
     * @param {string} _strA 被减数
     * @param {string} _strB 减数
     * 
     */
    static StringCalculateSub(_strA: string, _strB: string) {

        //先判断是否是字符串
        if (typeof _strA !== 'string') {
            _strA = _strA + '';
        }

        if (typeof _strB !== 'string') {
            _strB = _strB + '';
        }
        let raList = _strA.split(''),
            rbList = _strB.split(''),
            result = '',
            count: any = 0,
            desc = 0;

        if (parseInt(_strA) < parseInt(_strB)) {
            // Utils.CCLog('_strA < _strB');
            let temp = raList;
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
            let ad = ~~raList.pop() - ~~rbList.pop() - count;
            Utils.CCLog('ad', ad, 'count', count);
            result = (ad < 0 ? 10 + ad : ad) + result;
            count = ad < 0;
        }

        let relist = result.split('');

        for (let index = 0; index < relist.length; index++) {
            const element: any = relist[index];
            if (element != 0) {
                relist.splice(0, index)
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
    }

    /**
     * 返回换算后的字符串
     * @param {any} _strA 
     * 
     */
    static StringGetConversionUnit(_strA) {

        //先判断是否是字符串
        if (typeof _strA !== 'string') {
            _strA = _strA + '';
        }

        let unitSymbols = ['', 'K', 'M', 'B', 'T', 'Qd', 'Qt', 'Z', 'Y', 'S', 'L', 'X', 'D'],
            ra = _strA.replace(/(^|\s)\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ',')),
            result = '',
            desc: any = 0;

        let splitArray = ra.split(',');
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
    }

    /**
     * 字符串转Unicode编码
     * @param {string} _str
     * 
     */
    static Str_To_Unicode(_str: string) {
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

    /**
     * Unicode编码转字符串
     * @param {string} _unicode 
     * 
     */
    static Unicode_To_Str(_unicode: string) {
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
    }

    /**
     * @param {string} _url 网络请求路径 
     */
    static CheckURL(_url: string) {
        let url = new String(_url)
        if (url.startsWith('https://cathome8.com')) {
            return true;
        }

        if (url.startsWith('http://cathome8.com')) {
            return true;
        }
        return false;
    }

    /**
     * @param {string} _url 网络请求路径 
     */
    static CheckAppId(_appid: string) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            if (_appid == 'wxdd036799ae4dcd9f') {
                return true;
            }
            return false;
        }
        return true;
    }

}
