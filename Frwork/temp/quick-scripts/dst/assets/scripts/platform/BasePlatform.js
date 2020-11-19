
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