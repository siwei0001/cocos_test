
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
    GameLoadingMenu: 'prefabs/GameLoadingMenu',
    MainMenu: 'prefabs/MainMenu',
    ResultMenu: 'prefabs/ResultMenu',
    CarLibaryMenu: 'prefabs/CarLibaryMenu',
    TipsMenu: 'prefabs/TipsMenu',
    GetCoinsMenu: 'prefabs/GetCoinsMenu',
    GuideMenu: 'prefabs/GuideMenu',
    ADMenu: 'prefabs/ADMenu',
    TgPromoteMenu: 'prefabs/TgPromoteMenu',
};
var UILayer;
(function (UILayer) {
    UILayer[UILayer["UI_Base"] = 10] = "UI_Base";
    UILayer[UILayer["UI_Menu"] = 11] = "UI_Menu";
    UILayer[UILayer["UI_Adv"] = 12] = "UI_Adv";
    UILayer[UILayer["UI_Tips"] = 13] = "UI_Tips";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZS9NZW51TWFuYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW1DO0FBQ25DLCtDQUEwQztBQUUvQixRQUFBLFFBQVEsR0FBRztJQUNsQixlQUFlLEVBQUUseUJBQXlCO0lBQzFDLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsVUFBVSxFQUFFLG9CQUFvQjtJQUNoQyxhQUFhLEVBQUUsdUJBQXVCO0lBQ3RDLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsWUFBWSxFQUFFLHNCQUFzQjtJQUNwQyxTQUFTLEVBQUUsbUJBQW1CO0lBQzlCLE1BQU0sRUFBRSxnQkFBZ0I7SUFDeEIsYUFBYSxFQUFFLHVCQUF1QjtDQUN6QyxDQUFBO0FBRUQsSUFBWSxPQU1YO0FBTkQsV0FBWSxPQUFPO0lBQ2YsNENBQVksQ0FBQTtJQUNaLDRDQUFPLENBQUE7SUFDUCwwQ0FBTSxDQUFBO0lBQ04sNENBQU8sQ0FBQTtBQUVYLENBQUMsRUFOVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFNbEI7QUFFRDtJQU1JOztPQUVHO0lBQ0g7UUFMUSxZQUFPLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7SUFNOUMsQ0FBQztJQUVhLHNCQUFXLEdBQXpCO1FBQ0ksdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQTtRQUNyRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUNBQVksR0FBWjtRQUNJLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxQyxJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkMsR0FBRyxDQUFDLE1B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O09BR0c7SUFDSyw2QkFBUSxHQUFoQixVQUFpQixRQUFnQjtRQUM3QixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtnQkFDL0MsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNaLE9BQU87aUJBQ1Y7Z0JBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNEJBQU8sR0FBUCxVQUFRLFFBQWdCO1FBQ3BCLFdBQVc7UUFDWCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLE9BQU8sRUFBRTtZQUNULFdBQVc7WUFDWCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUM7YUFDL0M7aUJBQ0k7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLGlCQUFDO0FBQUQsQ0EvSUEsQUErSUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcbmltcG9ydCBCYXNlTGF5ZXIgZnJvbSBcIi4uL2Jhc2UvQmFzZUxheWVyXCI7XG5cbmV4cG9ydCB2YXIgQmFzZU1lbnUgPSB7XG4gICAgR2FtZUxvYWRpbmdNZW51OiAncHJlZmFicy9HYW1lTG9hZGluZ01lbnUnLFxuICAgIE1haW5NZW51OiAncHJlZmFicy9NYWluTWVudScsXG4gICAgUmVzdWx0TWVudTogJ3ByZWZhYnMvUmVzdWx0TWVudScsXG4gICAgQ2FyTGliYXJ5TWVudTogJ3ByZWZhYnMvQ2FyTGliYXJ5TWVudScsXG4gICAgVGlwc01lbnU6ICdwcmVmYWJzL1RpcHNNZW51JyxcbiAgICBHZXRDb2luc01lbnU6ICdwcmVmYWJzL0dldENvaW5zTWVudScsXG4gICAgR3VpZGVNZW51OiAncHJlZmFicy9HdWlkZU1lbnUnLFxuICAgIEFETWVudTogJ3ByZWZhYnMvQURNZW51JyxcbiAgICBUZ1Byb21vdGVNZW51OiAncHJlZmFicy9UZ1Byb21vdGVNZW51Jyxcbn1cblxuZXhwb3J0IGVudW0gVUlMYXllciB7XG4gICAgVUlfQmFzZSA9IDEwLCAgIC8v5Z+656GA5bGCXG4gICAgVUlfTWVudSwgICAgICAgIC8v55WM6Z2i5oiQXG4gICAgVUlfQWR2LCAgICAgICAgIC8v5bm/5ZGK5bGCXG4gICAgVUlfVGlwcywgICAgICAgIC8v5o+Q56S65bGCICBcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51TWFuYWdlIHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTWVudU1hbmFnZTtcblxuICAgIHByaXZhdGUgbV9NZW51czogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXAoKTtcblxuICAgIC8qKlxuICAgICAqIOaehOmAoOWHveaVsFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTWVudU1hbmFnZSB7XG4gICAgICAgIC8vIOWmguaenCBpbnN0YW5jZSDmmK/kuIDkuKrlrp7kvosg55u05o6l6L+U5Zue77yMICDlpoLmnpzkuI3mmK8g5a6e5L6L5YyW5ZCO6L+U5ZueXG4gICAgICAgIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyBNZW51TWFuYWdlKCkpXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaSreaUvui9rOWculxuICAgICAqL1xuICAgIFBsYXlUcmFuZm9ybSgpIHtcbiAgICAgICAgbGV0IHRyYW5mb3JtID0gY2MuZmluZChcIkNhbnZhcy9UcmFuZnJvbVwiKTtcbiAgICAgICAgaWYgKHRyYW5mb3JtKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0gY2MuaW5zdGFudGlhdGUodHJhbmZvcm0pO1xuICAgICAgICAgICAgb2JqLnpJbmRleCA9IDEwMDAwO1xuICAgICAgICAgICAgb2JqLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBvYmoucGFyZW50ID0gdGhpcy5HZXRNZW51Um9vdCgpO1xuICAgICAgICAgICAgLy8gdHJhbmZvcm0uZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55WM6Z2i6buY6K6k57uR5a6a55qE5qC56IqC54K5XG4gICAgICovXG4gICAgR2V0TWVudVJvb3QoKSB7XG4gICAgICAgIHZhciBub2RlID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaYvuekuueVjOmdolxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBfdXJsTmFtZSDnlYzpnaLot6/lvoRcbiAgICAgKiBAcGFyYW0ge2FueX0gX2N1c3RvbWVEYXRhIOWIneWni+WMluS8oOWFpeeahOaVsOaNrlxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gX3BhcmVudCDniLboioLngrlcbiAgICAgKiBcbiAgICAgKi9cbiAgICBTaG93TWVudShfdXJsTmFtZTogc3RyaW5nLCBfY3VzdG9tZURhdGE6IGFueSA9IG51bGwsIF9wYXJlbnQ6IGNjLk5vZGUgPSBudWxsKSB7XG4gICAgICAgIC8vIFV0aWxzLkNDTG9nKFwiU2hvd01lbnUgbV9NZW51c1wiLCB0aGlzLm1fTWVudXMsIFwiR2V0TWVudVJvb3Q6XCIsIHRoaXMuR2V0TWVudVJvb3QoKSlcblxuICAgICAgICAvL+WFiOWIpOaWreaYr+WQpuacieW3suaYvuekuui/meS4queVjOmdolxuICAgICAgICBpZiAodGhpcy5tX01lbnVzLmhhcyhfdXJsTmFtZSkpIHtcbiAgICAgICAgICAgIFV0aWxzLkNDTG9nKFwiU2hvd01lbnUgbWVudSBpcyBzaG93XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgVXRpbHMuQ0NMb2coXCJTaG93TWVudSBzaG93IFwiKTtcbiAgICAgICAgICAgIC8v55WM6Z2i5pWw5o2uXG4gICAgICAgICAgICBsZXQgbWVudWRhdGEgPSB7XG4gICAgICAgICAgICAgICAgbm9kZTogbnVsbFxuICAgICAgICAgICAgICAgIC8vIHR5cGU6IF90eXBlICE9IG51bGwgPyBfdHlwZSA6IE1lbnVUeXBlLlR5cGUuTm9ybWFsLC8v57G75Z6L5rKh5pyJ5Lyg5YC85YiZ5L2/55So6buY6K6k5YC8XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1fTWVudXMuc2V0KF91cmxOYW1lLCBtZW51ZGF0YSlcbiAgICAgICAgICAgIHRoaXMuTG9hZE1lbnUoX3VybE5hbWUpLnRoZW4oKGFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvYmptZW51OiBhbnkgPSBjYy5pbnN0YW50aWF0ZShhc3NldHMpOyAvL2luc3RhbnRpYXRlKGFzc2V0cyk7XG4gICAgICAgICAgICAgICAgb2JqbWVudS5wYXJlbnQgPSBfcGFyZW50ICE9IG51bGwgPyBfcGFyZW50IDogdGhpcy5HZXRNZW51Um9vdCgpO1xuICAgICAgICAgICAgICAgIC8v5Yid5aeL5YyW5Y+C5pWwXG4gICAgICAgICAgICAgICAgb2JqbWVudS5nZXRDb21wb25lbnQoQmFzZUxheWVyKS5Jbml0KF9jdXN0b21lRGF0YSk7XG4gICAgICAgICAgICAgICAgbWVudWRhdGEubm9kZSA9IG9iam1lbnU7XG4gICAgICAgICAgICAgICAgVXRpbHMuQ0NMb2coXCJvYmptZW51LnBhcmVudFwiLCBvYmptZW51LnBhcmVudCk7XG5cbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAvL+WKoOi9vemUmeivr+ebtOaOpeWwhuaVsOaNruWIoOmZpFxuICAgICAgICAgICAgICAgIHRoaXMubV9NZW51cy5kZWxldGUoX3VybE5hbWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIFV0aWxzLkNDTG9nKFwibV9NZW51c1wiLCB0aGlzLm1fTWVudXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog56e76Zmk55WM6Z2iXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF91cmxOYW1lICAgICDnlYzpnaLot6/lvoRcbiAgICAgKiBAcGFyYW0ge2FueX0gX2N1c3RvbWVEYXRhIOmHiuaUvuS8oOWFpeeahOaVsOaNrlxuICAgICAqIFxuICAgICAqL1xuICAgIFJtb3ZlTWVudShfdXJsTmFtZTogc3RyaW5nLCBfY3VzdG9tZURhdGE6IGFueSA9IG51bGwpIHtcblxuICAgICAgICBsZXQgb2JqTWVudSA9IHRoaXMubV9NZW51cy5nZXQoX3VybE5hbWUpO1xuICAgICAgICBpZiAob2JqTWVudSkge1xuICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbliqDovb3lroznlYzpnaJcbiAgICAgICAgICAgIGlmIChVdGlscy5Jc051bGwob2JqTWVudS5ub2RlKSkge1xuICAgICAgICAgICAgICAgIFV0aWxzLkNDTG9nKFwibWVudSBsb2FkaW5nXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy/ph4rmlL7lh73mlbBcbiAgICAgICAgICAgICAgICBvYmpNZW51Lm5vZGUuZ2V0Q29tcG9uZW50KEJhc2VMYXllcikuRnJlZShfY3VzdG9tZURhdGEpO1xuICAgICAgICAgICAgICAgIC8v6ZSA5q+B55WM6Z2ibm9kZVxuICAgICAgICAgICAgICAgIG9iak1lbnUubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tX01lbnVzLmRlbGV0ZShfdXJsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb3nlYzpnaJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3VybE5hbWUg55WM6Z2i6Lev5b6EXG4gICAgICovXG4gICAgcHJpdmF0ZSBMb2FkTWVudShfdXJsTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhfdXJsTmFtZSwgY2MuUHJlZmFiLCAoZXJyLCBhc3NldHMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoYXNzZXRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57lr7nlupTnmoTnlYzpnaJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3VybE5hbWUg55WM6Z2i6Lev5b6EXG4gICAgICovXG4gICAgR2V0TWVudShfdXJsTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIC8v5p+l5om+55WM6Z2i5piv5ZCm5Yqg6L295LqGXG4gICAgICAgIGxldCBvYmpNZW51ID0gdGhpcy5tX01lbnVzLmdldChfdXJsTmFtZSk7XG4gICAgICAgIGlmIChvYmpNZW51KSB7XG4gICAgICAgICAgICAvL+i1hOa6kOaYr+WQpuWKoOi9veaIkOWKn+S6hlxuICAgICAgICAgICAgaWYgKG9iak1lbnUubm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmpNZW51Lm5vZGUuZ2V0Q29tcG9uZW50KEJhc2VMYXllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxufVxuIl19