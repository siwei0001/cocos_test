
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