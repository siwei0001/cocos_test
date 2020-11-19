"use strict";
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