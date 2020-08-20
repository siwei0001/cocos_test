import Utils from "../utils/Utils";
import BaseLayer from "../base/BaseLayer";

export var BaseMenu = {
    GameLoadingMenu: 'data/prefabs/GameLoadingMenu',
    MainMenu: 'data/prefabs/MainMenu',
    ResultMenu: 'data/prefabs/ResultMenu',
    CarLibaryMenu: 'data/prefabs/CarLibaryMenu',
    TipsMenu: 'data/prefabs/TipsMenu',
    GetCoinsMenu: 'data/prefabs/GetCoinsMenu',
    GuideMenu: 'data/prefabs/GuideMenu',
}

export default class MenuManage {

    private static _instance: MenuManage;

    private m_Menus: Map<string, any> = new Map();

    /**
     * 构造函数
     */
    constructor() {
    }

    public static getInstance(): MenuManage {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new MenuManage())
        return this._instance
    }

    /**
     * 播放转场
     */
    PlayTranform() {
        let tranform = cc.find("Canvas/Tranfrom");
        if (tranform) {
            let obj = cc.instantiate(tranform);
            obj.zIndex = 10000;
            obj.active = true;
            obj.parent = this.GetMenuRoot();
            // tranform.getComponent(cc.ParticleSystem).active = true;
        }
    }

    /**
     * 界面默认绑定的根节点
     */
    GetMenuRoot() {
        var node = cc.find("Canvas");
        if (node) {
            return node;
        }
        return null;
    }

    /**
     * 显示界面
     * @param {string} _urlName 界面路径
     * @param {any} _customeData 初始化传入的数据
     * @param {cc.Node} _parent 父节点
     * 
     */
    ShowMenu(_urlName: string, _customeData: any = null, _parent: cc.Node = null) {
        // Utils.CCLog("ShowMenu m_Menus", this.m_Menus, "GetMenuRoot:", this.GetMenuRoot())

        //先判断是否有已显示这个界面
        if (this.m_Menus.has(_urlName)) {
            Utils.CCLog("ShowMenu menu is show");
            return;
        }
        else {
            Utils.CCLog("ShowMenu show ");
            //界面数据
            let menudata = {
                node: null
                // type: _type != null ? _type : MenuType.Type.Normal,//类型没有传值则使用默认值
            }
            this.m_Menus.set(_urlName, menudata)
            this.LoadMenu(_urlName).then((assets) => {
                let objmenu: any = cc.instantiate(assets); //instantiate(assets);
                objmenu.parent = _parent != null ? _parent : this.GetMenuRoot();
                //初始化参数
                objmenu.getComponent(BaseLayer).Init(_customeData);
                menudata.node = objmenu;
                Utils.CCLog("objmenu.parent", objmenu.parent);

            }, (err) => {
                //加载错误直接将数据删除
                this.m_Menus.delete(_urlName);
            })
            // Utils.CCLog("m_Menus", this.m_Menus);
        }
    }

    /**
     * 移除界面
     * @param {string} _urlName     界面路径
     * @param {any} _customeData 释放传入的数据
     * 
     */
    RmoveMenu(_urlName: string, _customeData: any = null) {

        let objMenu = this.m_Menus.get(_urlName);
        if (objMenu) {
            //判断是否加载完界面
            if (Utils.IsNull(objMenu.node)) {
                Utils.CCLog("menu loading")
                return;
            }
            else {
                //释放函数
                objMenu.node.getComponent(BaseLayer).Free(_customeData);
                //销毁界面node
                objMenu.node.destroy();
                this.m_Menus.delete(_urlName);
            }
        }
    }

    /**
     * 加载界面
     * @param {string} _urlName 界面路径
     */
    private LoadMenu(_urlName: string) {
        return new Promise((resolve, reject) => {
            cc.loader.loadRes(_urlName, cc.Prefab, (err, assets) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(assets);
            });
        });
    }

    /**
     * 返回对应的界面
     * @param {string} _urlName 界面路径
     */
    GetMenu(_urlName: string) {
        //查找界面是否加载了
        let objMenu = this.m_Menus.get(_urlName);
        if (objMenu) {
            //资源是否加载成功了
            if (objMenu.node) {
                return objMenu.node.getComponent(BaseLayer);
            }
            else {
                return null;
            }
        }

        return null;
    }

}
