"use strict";
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