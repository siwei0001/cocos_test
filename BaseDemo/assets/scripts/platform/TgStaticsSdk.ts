import Utils from "../utils/Utils";
import Http, { HttpReqType } from "../utils/Http";
import BaseMd5 from "../utils/BaseMd5";

/**
 * tg统计服务
 * 
 */
export default class TgStaticsSdk {

    /**
    * 新增用户统计
    * @param {string} _game_id  游戏id ，由服务器后台管理员分配
    * @param {string} _uid  用户uuid ，由客户端自己生成，上传到服务器，作为用户的唯一标识
    */
    static NewUser(_urlRoot: string, _game_id: string, _uid: string) {
        if (Utils.IsNull(_game_id)) {
            console.log("Error, StatZjsdk.NewUser _game_id is null");
            return;
        }
        if (Utils.IsNull(_uid)) {
            console.log("Error, StatZjsdk.NewUser _uid is null");
            return;
        }

        let http = new Http();
        http.SetReqType(HttpReqType.GET);
        let url = _urlRoot + "/tgsdk_server/api/game/user/add/" + _game_id + "/" + _uid;
        http.Request(url, (data) => {
            // console.log(data)
        }, (err) => {
            console.error(err)
        })
    }

    /**
    * 新增用户统计2
    * @param {string} _game_id  游戏id ，由服务器后台管理员分配
    * @param {string} _uid  用户uuid ，由客户端自己生成，上传到服务器，作为用户的唯一标识
    * @param {string} _appid  用户来源小程序appid
    * 
    */
    static NewUser2(_urlRoot: string, _game_id: string, _uid: string, _appid: string) {
        if (Utils.IsNull(_game_id)) {
            console.log("Error, StatZjsdk.NewUser _game_id is null");
            return;
        }
        if (Utils.IsNull(_uid)) {
            console.log("Error, StatZjsdk.NewUser _uid is null");
            return;
        }

        let http = new Http();
        http.SetReqType(HttpReqType.GET);
        let url = _urlRoot + "/tgsdk_server/api/game/user/add/" + _game_id + "/" + _uid+ "/" + _appid;
        http.Request(url, (data) => {
            // console.log(data)
        }, (err) => {
            console.error(err)
        })
    }

    /**
     * 获取openid
     * @param {string} _url  网址接口
     * @param {string} _game_id  游戏id ，由服务器后台管理员分配
     * @param {string} _wx_code  微信登录返回的code 必须调用微信的登录接口才能好获取到
     * @param {Function} _onSuccess 调用成功回调函数
     * @param {Function} _onFail 调用失败回调函数
     * 
     */
    static GetOpenID(_url: string, _game_id: string, _wx_code: string, _onSuccess: Function, _onFail: Function) {

        if (Utils.IsNull(_game_id)) {
            console.log("Error, StatZjsdk.AuthUser _game_id is null");
            return;
        }

        if (Utils.IsNull(_wx_code)) {
            console.log("Error, StatZjsdk.AuthUser _tg_code is null");
            return;
        }
        console.log("SendOpenID login code", _wx_code);
        let http = new Http();
        http.AddParam("pid", "10026");
        http.AddParam("game_id", _game_id);
        http.AddParam("wx_login_code", _wx_code);

        http.Request(_url + "10026.php", (data) => {
            console.log(data)
            if (data[0].pid == "30001") {
                if (data[0].openid) {
                    _onSuccess(data[0].openid);
                }
                else {
                    _onFail()
                }
            }
            else {
                _onFail()
            }
        }, (err) => {
            console.error(err);
            _onFail(err)
        })
    }

    /**
     * 自定义事件 计数事件
     * @param {string} _urlRoot  网址
     * @param {string} _game_id  游戏id ，由服务器后台管理员分配
     * @param {string} _eventName  事件名字
     * @param {string} _uid  时间名字
     * @param {string} _appid  时间名字
     * 
     */
    static SendCustomEvent(_urlRoot: string, _game_id: string, _uid: string, _eventName: string) {
        // /tgsdk_server/api/game/event/add/[game_id]/[user_uid]/[event_name]
        if (Utils.IsNull(_game_id)) {
            console.log("Error, StatZjsdk.SendZjkjEvent _game_id is null");
            return;
        }

        if (Utils.IsNull(_eventName)) {
            console.log("Error, StatZjsdk.SendZjkjEvent _eventName is null");
            return;
        }

        let http = new Http();
        http.SetReqType(HttpReqType.GET);
        let url = _urlRoot + "/tgsdk_server/api/game/event/add/" + _game_id + "/" + _uid + "/" + _eventName;
        http.Request(url, (data) => {
            // console.log(data)
        }, (err) => {
            console.error(err)
        })
    }

    /**
     * 自定义事件 计算事件
     * @param {string} _urlRoot  网址
     * @param {string} _game_id  游戏id ，由服务器后台管理员分配
     * @param {string} _uid  用户唯一标识uuid
     * @param {string} _eventName  事件名字
     * @param {string} _eventNum  对应事件的数量
     * 
     * 
     */
    static SendCustomEventNum(_urlRoot: string, _game_id: string, _uid: string, _eventName: string, _eventNum: number) {
        // /tgsdk_server/api/game/event/add/[game_id]/[user_uid]/[event_name]
        if (Utils.IsNull(_game_id)) {
            console.log("Error, StatZjsdk.SendZjkjEvent _game_id is null");
            return;
        }

        if (Utils.IsNull(_eventName)) {
            console.log("Error, StatZjsdk.SendZjkjEvent _eventName is null");
            return;
        }

        let http = new Http();
        http.SetReqType(HttpReqType.GET);
        let url = _urlRoot + "/tgsdk_server/api/game/event/add/" + _game_id + "/" + _uid + "/" + _eventName + "/" + _eventNum;
        http.Request(url, (data) => {
            // console.log(data)
        }, (err) => {
            console.error(err)
        })
    }

    /**
     * 交叉推广统计 点击游戏icon上传
     * @param {string} _urlRoot  网址
     * @param {string} _game_id  游戏id ，由服务器后台管理员分配
     * @param {string} _uid  用户唯一标识uuid
     * @param {string} _appid  事件名字
     * @param {string} _appName  对应事件的数量
     * 
     */
    static SendTgEventClick(_urlRoot: string, _game_id: string, _uid: string, _appid: string, _appName: string) {
        // /tgsdk_server/api/game/user/add-tg/[game_id]/[user_uid]/[app_id]/[app_name]
        if (Utils.IsNull(_game_id)) {
            console.log("Error, StatZjsdk.SendZjkjEvent _game_id is null");
            return;
        }

        if (Utils.IsNull(_appid)) {
            console.log("Error, StatZjsdk.SendZjkjEvent _eventName is null");
            return;
        }

        let http = new Http();
        http.SetReqType(HttpReqType.GET);
        let url = _urlRoot + "/tgsdk_server/api/game/user/add-tg/" + _game_id + "/" + _uid + "/" + _appid + "/" + _appName;
        http.Request(url, (data) => {
            // console.log(data)
        }, (err) => {
            console.error(err)
        })
    }

    /**
     * 交叉推广统计 游戏成功跳转
     * @param {string} _urlRoot  网址
     * @param {string} _game_id  游戏id ，由服务器后台管理员分配
    * @param {string} _uid  用户唯一标识uuid
     * @param {string} _appid  事件名字
     * @param {string} _appName  对应事件的数量
     * 
     */
    static SendTgEventJumpOk(_urlRoot: string, _game_id: string, _uid: string, _appid: string, _appName: string) {
        // /tgsdk_server/api/game/user/add-tg-skip-ok/[game_id]/[user_uid]/[app_id]/[app_name]
        if (Utils.IsNull(_game_id)) {
            console.log("Error, StatZjsdk.SendZjkjEvent _game_id is null");
            return;
        }

        if (Utils.IsNull(_appid)) {
            console.log("Error, StatZjsdk.SendZjkjEvent _eventName is null");
            return;
        }

        let http = new Http();
        http.SetReqType(HttpReqType.GET);
        let url = _urlRoot + "/tgsdk_server/api/game/user/add-tg-skip-ok/" + _game_id + "/" + _uid + "/" + _appid + "/" + _appName;
        http.Request(url, (data) => {
            // console.log(data)
        }, (err) => {
            console.error(err)
        })
    }
}
