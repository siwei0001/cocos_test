
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