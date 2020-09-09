/**
 * tg推广服务
 * 管理交叉推广
 * 
 */

/**
 * 推广风格
 */

export enum LayoutType {
    NONE = 1,
    HORIZONTAL,
    VERTICAL,
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
    moreGame: boolean,          //更多游戏标记
}

export default class TgPromoteServer {

    private static _instance: TgPromoteServer;

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
        cc.assetManager.loadBundle("tgPromote", (err, bundle) => {
            // bundle.load('xxx');

        });
    }

    //显示推广

    /**
     * 显示推广
     * @param _option 
     * parent //父节点
     * 
     */
    ShowPromote(_option: PromoteParam) {
       
    }

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