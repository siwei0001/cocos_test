"use strict";
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