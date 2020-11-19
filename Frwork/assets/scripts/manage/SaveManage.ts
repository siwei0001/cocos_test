import Utils from "../utils/Utils";

/**
 * 用户存档数据读取 
 */
var BaseSav_Data = {
    UserName: "游客",                //用户名字
    UserHeadIcon: "",               //用户头像地址
    Diamond: 0,                     //钻石
    Coins: 0,                       //金币数
    LastTime: 0,                    //上次游戏时间
    Level: 1,                       //关卡
    KeyNum: 0,                      //钥匙数
    SkinID: 1,                      //皮肤id
    SkinList: [1],                  //皮肤列表
    Guide: false,                   //指导标记                       

}

/**
 * 皮肤数
 */
export var CarSkinMax = 8;

/**
 * 基础关卡
 */
export var LevelBase = 13;

/**
 * 最大关卡数
 */
export var LevelMax = 85;

/**
 * 游戏中显示指导提示时间
 */
export var GameGuideTime = 5;

export default class SaveManage {

    private static _instance: SaveManage;
    private _uuidKey: string = "huaxiantingche2020061804"; //uuid存储key
    private _UserData: any = null;
    private _IsLoading: boolean = false;

    /**
     * 构造函数
     */
    constructor() {
    }

    public static getInstance(): SaveManage {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new SaveManage())
        return this._instance
    }

    /**
     * 存取存档
     */
    SvaveUserData() {
        let uuid = JSON.parse(cc.sys.localStorage.getItem(this._uuidKey));
        cc.sys.localStorage.setItem(uuid, JSON.stringify(this._UserData));
    }

    /**
     * 读取存档
     */
    LoadUserData() {
        let uuid = cc.sys.localStorage.getItem(this._uuidKey);
        if (!uuid) {
            uuid = Utils.GetUUID();
            cc.sys.localStorage.setItem(this._uuidKey, JSON.stringify(uuid));
        }
        else {
            uuid = JSON.parse(uuid);
        }

        let userdata = cc.sys.localStorage.getItem(uuid);

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
    }

    GetUserUUID() {
        let uuid = cc.sys.localStorage.getItem(this._uuidKey);
        if (!uuid) {
            uuid = Utils.GetUUID();
            cc.sys.localStorage.setItem(this._uuidKey, JSON.stringify(uuid));
        }
        else {
            uuid = JSON.parse(uuid);
        }
        return uuid;
    }
    /**
     * 玩家数据初始化
     */
    InitUserData() {
        Utils.CCLog('InitUserData');

        //如果存档为空 则读取存档
        if (this._UserData == null) {
            this.LoadUserData();
            // LastTime
            //更具上次游戏时间更新当天数据
            if (Utils.GetTimeDay(cc.sys.now()) > Utils.GetTimeDay(this._UserData.LastTime)) {
                Utils.CCLog("初始化当天数据", "nowday", Utils.GetTimeDay(cc.sys.now()), "lasteDay", Utils.GetTimeDay(this._UserData.LastTime));
                //更新游戏时间
                this._UserData.LastTime = cc.sys.now();
                this.SetGuide(false);
            }
            Utils.CCLog("savemanage _UserData", this._UserData);
        }
    }

    /**
     * 设置用户的名字
     * @param {string} _username
     */
    SetUserName(_username: string) {
        this._UserData.UserName = _username;
        this.SvaveUserData();
    }

    /**
     * 返回用户的名字
     */
    GetUserName() {
        return this._UserData.UserName;
    }

    /**
     * 设置用户的头像
     * @param {string} _headIconUrl
     */
    SetUserHeadIcon(_headIconUrl: string) {
        this._UserData.UserHeadIcon = _headIconUrl;
        this.SvaveUserData();
    }

    /**
     * 返回的头像
     */
    GetHeadIcon() {
        return this._UserData.UserHeadIcon;
    }

    /**
     * 增加金币
     * @param {number} _num
     */
    AddCoins(_num: number) {
        this._UserData.Coins += _num;
        this.SvaveUserData();
    }

    /**
     * 减少金币
     * @param {number} _num
     */
    DelCoins(_num: number) {
        Utils.CCLog('DelGlod is CoinsNum', _num, "userCoins", this._UserData.Coins);
        if (this._UserData.Coins >= _num) {
            this._UserData.Coins -= _num;
            this.SvaveUserData();
            return true;
        }
        else {
            Utils.CCLog('Coins is less');
            return false;
        }
    }

    /**
     * 返回金币
     */
    GetCoins() {
        return this._UserData.Coins;
    }

    /**
     * 设置游戏第一次加载
     * @param {boolean} _isLoading 
     */
    SetIsLoading(_isLoading: boolean) {
        this._IsLoading = _isLoading;
    }

    /**
     * 返回游戏第一次加载
     */
    GetIsLoading() {
        return this._IsLoading;
    }

    /**
     * 设置关卡数
     * @param {number} _level 
     */
    SetLevel(_level: number) {
        this._UserData.Level = _level;
        this.SvaveUserData();
    }

    /**
     * 返回关卡数
     */
    GetLevel() {
        return this._UserData.Level;
    }

    /**
    * 增加钥匙数
    * @param {number} _num
    */
    AddKeyNum(_num: number) {
        this._UserData.KeyNum += _num;
        this.SvaveUserData();
    }

    /**
    * 减少钥匙数
    * @param {number} _num
    */
    DelKeyNum(_num: number) {
        if (this._UserData.KeyNum >= _num) {
            this._UserData.KeyNum -= _num;
            this.SvaveUserData();
            return true;
        }
        return false;
    }

    /**
     * 返回钥匙数
     */
    GetKeyNum() {
        return this._UserData.KeyNum;
    }

    /**
     * 设置选中的皮肤
     * @param {any} _id 
     */
    SetSkinID(_id: any) {
        this._UserData.SkinID = _id;
        this.SvaveUserData();
    }

    /**
     * 返回选中的皮肤id
     */
    GetSkinID() {
        return this._UserData.SkinID;
    }

    /**
     * 解锁对应id的皮肤
     */
    UnlockSkindID(_id: any) {
        this._UserData.SkinList.push(_id);
        this.SvaveUserData();
    }

    /**
     * 返回对应id的皮肤是否解锁了
     * @param {any} _id 
     */
    SkinIDIsUnlock(_id: any) {
        let skinlist = this._UserData.SkinList;
        for (let index = 0; index < skinlist.length; index++) {
            const id = skinlist[index];
            if (id == _id) {
                return true;
            }
        }
        return false;
    }

    /**
     * 设置指导标记
     */
    SetGuide(_vaule: boolean) {
        this._UserData.Guide = _vaule;
        this.SvaveUserData();
    }

    /**
     * 返回指导标记
     */
    GetGuide() {
        return this._UserData.Guide;
    }

}
