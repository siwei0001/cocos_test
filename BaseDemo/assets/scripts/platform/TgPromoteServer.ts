/**
 * tg推广服务
 * 管理交叉推广
 * 
 */

/**
 * 推广风格
 */

export enum LayoutType {
    HORIZONTAL = 1,
    VERTICAL,
    Grid,
}

interface PromoteStyle {
    left?: number,  //左边
    top?: number,   //顶部
    width?: number, //宽
    height?: number //高
}

interface PromoteAdv {
    start?: number,     //数据开始
    num?: number,       //数据数量
    rand?: boolean,     //数据是否是随机
}

interface PromoteLayout {
    type?: LayoutType,  //类型  
    spacingX?: number,  //横向间隔
    spacingY?: number   //竖向间隔
}

/**
 * 推广参数
 */
interface PromoteParam {
    parent?: cc.Node,           //父节点
    style?: PromoteStyle,       //格式
    PromoteLayout?: PromoteLayout,//排序
    cellstyle: PromoteStyle,    //单元格式
    promoteAdv: PromoteAdv,     //广告数据
    updateWidget: boolean       //更新标记
    autoswitch: number,         //自动更换数据间隔时间
    autoscrolle: boolean,       //自动滚动标记
}

/**
 * 推广类型
 */
export enum PromoteType {
    TgPromote = "TgPromote",                //基础推广
    TgCapsule = "TgCapsule",                //假退出
    TgCollect = "TgCollect",                //假收藏
    TgFullScreen = "TgFullScreen",          //全屏
    TgInterstitial = "TgInterstitial",      //插屏
    TgTypeFullScreen = "TgTypeFullScreen",  //分类全屏
}

export default class TgPromoteServer {

    private static _instance: TgPromoteServer;


    private m_BundleName: string = "tgPromote"; //assbundle 名字

    private m_MenuAdv: Map<string, Array<cc.Node>> = new Map(); //界面广告数组

    /**
     * 构造函数
     */
    constructor() {

    }

    public static getInstance(): TgPromoteServer {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new TgPromoteServer())
        return this._instance
    }

    /**
     * 初始化交叉推广
     */
    public InitTgPromoteServer() {
        //加载asste bundle
        // TgPromote
        cc.assetManager.loadBundle(this.m_BundleName, (err, bundle) => {
            // bundle.load('xxx');
            // cc.AssetManager.Bundle()
            // 预加载
            // bundle.preload();

        });
    }

    /**
     * 显示推广
     * @param _option 
     * parent //父节点
     * 
     */
    ShowPromote(_option: PromoteParam) {
        //
        let bundle = cc.assetManager.getBundle(this.m_BundleName);
        bundle.load("Prefabs/" + PromoteType.TgPromote, cc.Prefab, (err, asset: cc.Prefab) => {
            //加载推广预制体 传入参数
            let obj = cc.instantiate(asset);
            obj.parent = _option.parent ? _option.parent : cc.find("Canvas");
            //判断是否有widget
            let widgetCom = obj.getComponent(cc.Widget);
            widgetCom.top = _option.style.top ? _option.style.top : 0;
            widgetCom.left = _option.style.left ? _option.style.left : 0;
            //再次对齐一次
            widgetCom.updateAlignment();

            //长宽
            obj.width = _option.style.width ? _option.style.width : 120;
            obj.height = _option.style.height ? _option.style.height : 120;

            //传入脚本参数
            let self = obj.getComponent(PromoteType.TgPromote);
            self.InitTgData(_option.PromoteLayout,  //排序
                _option.cellstyle,  //单元格式
                _option.promoteAdv, //广告数据
                _option.updateWidget,//更新标记
                _option.autoswitch, //自动更换数据间隔时间
                _option.autoscrolle //自动滚动标记
            );

            //用父节点uuid记住界面编号
            let objList = this.m_MenuAdv.get(obj.parent.uuid);
            if (objList) {
                objList.push(obj);
            }
            else {
                objList = [];
                objList.push(obj);
                this.m_MenuAdv.set(obj.parent.uuid, objList);
            }
        })
    }

    //显示抽屉
    ShowDrawer(_option: PromoteParam) {

    }

    //显示收藏界面
    ShowCollect(_option: PromoteParam) {

    }

    //显示大屏1
    ShowFunllScreen_1(_option: PromoteParam) {

    }

    //显示大屏2
    ShowFunllScreen_2(_option: PromoteParam) {

    }

    //显示最上层的假退出

    //显示插屏

    //显示金蛋

    //显示视频

    /**
     * 显示插屏
     */

    /**
     * 显示全屏1
     */

    /**
     * 显示全屏2
     */


    /**
     * 注销交叉推广
     */
    public DestroyTgPromoteServer() {

    }
}