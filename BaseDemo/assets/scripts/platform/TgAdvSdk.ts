import Http, { HttpReqType } from "../utils/Http";
import AdvServer from "./AdvServer";

/**
 * tg广告服务
 * 
 */

// export var MenuAdv = {
//     MainMenu:"tg_mainmenu"
// }

var AdvPrefab = {
    TgInterstitial: "tgdata/tgadv/prefabs/TgInterstitial",
    TgFullScreen: "tgdata/tgadv/prefabs/TgFullScreen",
    TgCapsule: "tgdata/tgadv/prefabs/TgCapsule",
    TgCollect: "tgdata/tgadv/prefabs/TgCollect",
    TgRemind: "tgdata/tgadv/prefabs/TgRemind",
    TgBanner: "tgdata/tgadv/prefabs/TgBanner",
    TgClickJump: "tgdata/tgadv/prefabs/TgClickJump",
    TgTypeFullScreen: "tgdata/tgadv/prefabs/TgTypeFullScreen",
}

export default class TgAdvSdk {

    private static _instance: TgAdvSdk;

    private m_TgServerUrl: string = "/tgsdk_server/api/game/tg/";    //请求地址
    private m_GameID: string = "";   //游戏id
    private m_DataVersion: string = ""; //数据版本

    private m_DataList: Array<any> = [];
    private m_JumpToProgramCallFun: Function = null; //绑定的点击回调函数

    private m_MenuAdv: Map<string, any> = new Map(); //界面广告数据
    private m_MenuName: string = "";    //界面名字
    private m_ExtData: any = null;      //界面参数

    private m_NodePool: Map<string, any> = new Map(); //对象池数据

    private m_FullScreenAdv: any = null;    //全屏广告实例
    private m_TypeFullScreenAdv: any = null;    //全屏广告实例
    private m_InterstitialAdv: any = null;    //插屏广告实例

    private m_TgCapsule: any = null;    //胶囊体广告实例
    private m_TgCollect: any = null;    //假收藏广告实例

    private m_Debug: boolean = false; //log 输出开关

    /**
     * 构造函数
     */
    constructor() {
    }

    public static getInstance(): TgAdvSdk {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new TgAdvSdk())
        return this._instance
    }

    /**
     * 初始化
     * @param {string} _netRoot 网址域名
     * @param {Function} _onSuccess 成功回调函数
     * @param {Function} _onFail 失败回调函数
     * 
     */
    public Init(_urlRoot: string, _gameID: string, _version: string, _onSuccess: Function = null, _onFail: Function = null) {
        // this.m_TgServerUrl
        this.m_GameID = _gameID;
        this.m_DataVersion = _version;

        //请求端口
        let http = new Http();
        http.SetReqType(HttpReqType.GET);
        // http://cathome8.com/tgsdk_server/api/game/config/testgame/20203171737672
        http.Request(_urlRoot + "/" + this.m_TgServerUrl + "/" + this.m_GameID + "/" + this.m_DataVersion, (data) => {
            this.TgLog("tgsdk Init  data", data);

            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const advData = data[key];
                    this.TgLog("tgsdk Init advData", advData);
                    if (advData["status"] == "上线") {
                        // m_DataList
                        this.m_DataList.push(advData);
                    }

                }
            }
            this.TgLog("tgsdk Init  this.m_DataList", this.m_DataList);

            if (_onSuccess) {
                _onSuccess();
            }

        }, (err) => {
            if (_onFail) {
                _onFail("广告数据初始化失败 err" + err);
            }
        })

        this.InitNoodePool();
    }

    /**
     * 返回指尖科技TgBar配置
      * @param {number} _num 取出游戏的数量 默认为0 取出所有数据
      * @param {boolean} _isRand 是否随机 默认不随机
      * @param {number} _start 开始位置  默认从0开始
     */
    GetZjkjTgBarConfig(_num: number = 0, _isRand: boolean = true, _start: number = 0): Array<any> {
        let showData: Array<any> = [];

        let tempDataList = [];//this.CloneObj(this.m_DataList);
        for (let index = 0; index < this.m_DataList.length; index++) {
            const tempdata = this.m_DataList[index];
            if (tempdata.ggz_name == "指尖科技") {
                tempDataList.push(this.CloneObj(tempdata));
            }
        }

        //判断是否有广告数据
        if (tempDataList.length > 0) {
            //判断开始位置是否超出数据长度
            if (_start > tempDataList.length - 1) {
                _start = 0;
            }

            //根据开始位置筛选数据
            let tgBarData = tempDataList.slice(_start, tempDataList.length);

            if (_num == 0) {
                //如果传入的数量为0则表示从开始位置取出全部的数据
                _num = tgBarData.length;
            }

            //随机
            if (_isRand) {
                for (let index = 0; index < _num; index++) {
                    if (tgBarData.length > 0) {
                        // Math.random()
                        let randindex = this.RandNum(0, tgBarData.length - 1);
                        showData.push(tgBarData[randindex])
                        tgBarData.splice(randindex, 1);
                    }
                }
            }
            else {
                for (let index = 0; index < _num; index++) {
                    if (tgBarData.length - index > 0) {
                        showData.push(tgBarData[index])
                    }
                }
            }

        }
        return showData;
    }


    /**
     * 返回TgBar配置
      * @param {number} _num 取出游戏的数量 默认为0 取出所有数据
      * @param {boolean} _isRand 是否随机 默认不随机
      * @param {number} _start 开始位置  默认从0开始
     */
    public GetTgBarConfig(_num: number = 0, _isRand: boolean = true, _start: number = 0): Array<any> {
        let showData: Array<any> = [];

        let tempDataList = this.CloneObj(this.m_DataList);
        //判断是否有广告数据
        if (tempDataList.length > 0) {

            //判断开始位置是否超出数据长度
            if (_start > tempDataList.length - 1) {
                _start = 0;
            }

            //根据开始位置筛选数据
            let tgBarData = tempDataList.slice(_start, tempDataList.length);

            if (_num == 0) {
                //如果传入的数量为0则表示从开始位置取出全部的数据
                _num = tgBarData.length;
            }

            //随机
            if (_isRand) {
                for (let index = 0; index < _num; index++) {
                    if (tgBarData.length > 0) {
                        // Math.random()
                        let randindex = this.RandNum(0, tgBarData.length - 1);
                        showData.push(tgBarData[randindex])
                        tgBarData.splice(randindex, 1);
                    }
                }
            }
            else {
                for (let index = 0; index < _num; index++) {
                    if (tgBarData.length - index > 0) {
                        showData.push(tgBarData[index])
                    }
                }
            }

        }
        return showData;
    }

    /**
     * 加载预制体
     */
    public LoadAdvPrefab(_advPrefab: string, _onSuccess: Function = null, _onFail: Function = null) {
        cc.loader.loadRes(_advPrefab, cc.Prefab, (err, assets) => {
            if (err) {
                if (_onFail) {
                    _onFail();
                }
                return;
            }

            if (_onSuccess) {
                _onSuccess(assets);
            }
        });
    }

    /**
     * 移除界面广告
     * @param _menuName 界面名字
     */
    public RemoveMenuAdv(_menuName: string = null) {

        this.TgLog("RemoveMenuAdv");
        let menuData = this.m_MenuAdv.get(_menuName);
        if (menuData) {
            for (let index = 0; index < menuData.length; index++) {
                const element = menuData[index];
                element.Free();
                element.node.active = false;
                this.PutNodeToNoodePool(element._m_NodePoolName, element.node);
            }
            this.m_MenuAdv.set(_menuName, []);
        }
    }

    /**
     * 显示tgbanenr
     * 显示样式：
     *      let extData = {
            parent: _parent ? _parent : cc.find("Canvas"),
            style: {
                left: 0,            //左边对齐位置
                top: 0,             //右边对齐位置
                width: 0,           //宽
                height: 0,          //高比例为
                horizontal: false,  //水平排列
                vertical: false,    //垂直排列
                spacingX: 0,        //水平距离
                spacingY: 0,        //垂直距离
                cellSize: {         //每个Item的大小
                    width: 100,
                    height: 100,
                },
            },
            adv: {
                start: 0,           //广告显示的开始标记
                num: 0,             //广告数量 0默认为全部
                autoswitch: 0,      //是否自动更换推广 0为不更换 其他为更换时间
                autoscrolle: true,  //是否自动移动scrolle
                moreGame: true,     //是否显示更多游戏
                moreGameCallFun: //更多游戏回调
                jumpCallFun: //跳转回调
            },
            success: //加载成功
            fail: //加载失败
            close: //界面关闭回调函数
        }
     */
    public ShowTgBanner(_menuName: string, _tgPos: string, _extData: any) {
        this.TgLog("ShowTgBanner _extData", _extData);
        let obj = this.GetNodeToNoodePool(AdvPrefab.TgBanner, _extData.parent);
        if (obj) {
            obj.getComponent("TgBanner").InitTgData(AdvPrefab.TgBanner, _tgPos, _extData.style, _extData.adv);
            obj.getComponent("TgBanner").BingColseFuntion(_extData.close);

            let menudata = this.m_MenuAdv.get(_menuName);
            if (!menudata) {
                menudata = [];
            }
            menudata.push(obj.getComponent("TgBanner"))
            this.m_MenuAdv.set(_menuName, menudata);
            this.TgLog("tgsdk ShowTgBanner m_MenuName", this.m_MenuAdv);
            if (_extData && _extData.success) {
                _extData.success(obj);
            }
        }

    }

    /**
     * 显示微信banner更新底部banner位置上调
     * @param {number} _wechatHeight 屏幕像素
     */
    public UpdateBottomBannerWidget(_wechatHeight: number) {
        //_wechatHeight
        let bottom = cc.view.getDesignResolutionSize().width / cc.view.getFrameSize().width
            * _wechatHeight;
        //遍历当前界面的bottombanner 
        let menuData = this.m_MenuAdv.get(this.m_MenuName);
        if (menuData) {
            for (let index = 0; index < menuData.length; index++) {
                const element = menuData[index];
                if (element._m_NodePoolName == AdvPrefab.TgBanner) {
                    element.UpdateWidget(null, bottom, null, null);
                }
            }
        }
    }

    public ShowTgClickJump(_menuName: string, _tgPos: string, _extData: any) {
        this.TgLog("ShowTgClickJump _extData", _extData);
        let obj = this.GetNodeToNoodePool(AdvPrefab.TgClickJump, _extData.parent);
        if (obj) {
            obj.getComponent("TgClickJump").InitTgData(AdvPrefab.TgClickJump, _tgPos, _extData.style, _extData.adv);

            let menudata = this.m_MenuAdv.get(_menuName);
            if (!menudata) {
                menudata = [];
            }
            menudata.push(obj.getComponent("TgClickJump"))
            this.m_MenuAdv.set(_menuName, menudata);
            this.TgLog("tgsdk ShowTgClickJump m_MenuName", this.m_MenuAdv);
            if (_extData && _extData.success) {
                _extData.success(obj);
            }
        }
    }

    /**
    * 显示插屏
    * @param {string} _menuName 界面名字
    * @param {any} _extData    界面参数
    */
    public ShowTgInterstitial(_extData: any) {

        if (this.m_InterstitialAdv) {
            return;
        }

        let obj = this.GetNodeToNoodePool(AdvPrefab.TgInterstitial, _extData.parent);
        if (obj) {
            let colsecallfun = () => {
                this.PutNodeToNoodePool(AdvPrefab.TgInterstitial, this.m_InterstitialAdv.node);
                this.m_InterstitialAdv = null;
                if (_extData && _extData.close) {
                    _extData.close();
                }
            }

            obj.getComponent("TgInterstitial").InitTgData(AdvPrefab.TgInterstitial,
                colsecallfun.bind(this), _extData.showBack, _extData.initJump, _extData.jumpCallFun);

            this.m_InterstitialAdv = obj.getComponent("TgInterstitial");
            if (_extData && _extData.success) {
                _extData.success(obj);
            }
        }
    }

    /**
     * 显示提醒界面
     * @param {any} _extData
     */
    public ShowRemind(_menuName: string, _extData: any) {
        // m_TgRemind
        let obj = this.GetNodeToNoodePool(AdvPrefab.TgRemind, _extData.parent);
        if (obj) {
            obj.getComponent("TgRemind").InitTgData(AdvPrefab.TgRemind);
            obj.setPosition(_extData.x, _extData.y);
            let menudata = this.m_MenuAdv.get(_menuName);
            if (!menudata) {
                menudata = [];
            }
            menudata.push(obj.getComponent("TgRemind"))
            this.m_MenuAdv.set(_menuName, menudata);
            this.TgLog("tgsdk ShowRemind m_MenuName", this.m_MenuAdv);
            if (_extData && _extData.success) {
                _extData.success(obj);
            }
        }
    }

    /**
    * 显示全屏
    * @param {any} _extData    界面参数
    */
    public ShowTgFullScreen(_extData: any) {
        if (this.m_FullScreenAdv) {
            return;
        }

        let obj = this.GetNodeToNoodePool(AdvPrefab.TgFullScreen, _extData.parent);
        if (obj) {
            let colsecallfun = () => {
                this.PutNodeToNoodePool(AdvPrefab.TgFullScreen, this.m_FullScreenAdv.node);
                this.m_FullScreenAdv = null;
                if (_extData && _extData.close) {
                    _extData.close();
                }
            }

            obj.getComponent("TgFullScreen").InitTgData(AdvPrefab.TgFullScreen,
                colsecallfun.bind(this), _extData.initJump, _extData.jumpCallFun,
                _extData.comtinue, _extData.backjump, _extData.randjumpzjkj);

            this.m_FullScreenAdv = obj.getComponent("TgFullScreen");
            if (_extData && _extData.success) {
                _extData.success(obj);
            }
        }
    }

    /**
    * 显示分类全屏
    * @param {any} _extData    界面参数
    */
    public ShowTgTypeFullScreen(_extData: any) {
        if (this.m_TypeFullScreenAdv) {
            return;
        }

        let obj = this.GetNodeToNoodePool(AdvPrefab.TgTypeFullScreen, _extData.parent);
        if (obj) {
            let colsecallfun = () => {
                this.PutNodeToNoodePool(AdvPrefab.TgTypeFullScreen, this.m_TypeFullScreenAdv.node);
                this.m_TypeFullScreenAdv = null;
                if (_extData && _extData.close) {
                    _extData.close();
                }
            }

            obj.getComponent("TgTypeFullScreen").InitTgData(AdvPrefab.TgTypeFullScreen,
                colsecallfun.bind(this), _extData.jumpCallFun,
                _extData.startJump, _extData.randjumpzjkj);

            this.m_TypeFullScreenAdv = obj.getComponent("TgTypeFullScreen");
            if (_extData && _extData.success) {
                _extData.success(obj);
            }
        }
    }

    /**
    * 显示胶囊体
    * @param {any} _extData
    */
    public ShowTgCapsule(_extData: any) {

        if (this.m_TgCapsule && !this.m_TgCapsule.node.active) {
            this.m_TgCapsule.node.active = true;
            return;
        }

        //加载对应预制体
        this.LoadAdvPrefab(AdvPrefab.TgCapsule, (assets) => {
            let objNode = cc.instantiate(assets);
            objNode.parent = cc.find("Canvas"); // 加入节点树
            objNode.setPosition(_extData.x, _extData.y);
            objNode.getComponent("TgCapsule").InitTgData(AdvPrefab.TgCapsule,
                (_extData && _extData.click) ? _extData.click : null);

            objNode.zIndex = 10;
            this.m_TgCapsule = objNode.getComponent("TgCapsule");
            if (_extData && _extData.success) {
                _extData.success(objNode);
            }
        }, (err) => {
            this.TgLog("ShowTgCapsule err", err);
            if (_extData && _extData.fail) {
                _extData.fail(err);
            }
        })
    }

    /**
    * 隐藏胶囊体
    */
    public HideTgCapsule() {
        if (this.m_TgCapsule) {
            this.m_TgCapsule.Free();
            this.m_TgCapsule.node.active = false;
        }
    }

    /**
     * 显示假收藏界面
     * @param {any} _extData
     */
    public ShowTgCollect(_extData: any) {

        //如果有显示界面则退出
        if (this.m_TgCollect) {
            return;
        }

        let obj = this.GetNodeToNoodePool(AdvPrefab.TgCollect, null);
        if (obj) {
            let colsecallfun = () => {
                this.m_TgCollect.Free();
                this.PutNodeToNoodePool(AdvPrefab.TgCollect, this.m_TgCollect.node);
                this.m_TgCollect = null;
                if (_extData && _extData.close) {
                    _extData.close();
                }
            }
            obj.getComponent("TgCollect").InitTgData(AdvPrefab.TgCollect,
                colsecallfun.bind(this),
                (_extData && _extData.top) ? _extData.top : 0
                , _extData.jumpCallFun);
            this.m_TgCollect = obj.getComponent("TgCollect");
            if (_extData && _extData.success) {
                _extData.success(obj);
            }
        }
    }

    /**
     * 初始化对象池
     */
    InitNoodePool() {
        this.TgLog("tgsdk InitNoodePool");
        //创建tgbanner对象池
        this.CreateNoodePool(AdvPrefab.TgBanner, 1)
        //创建强跳转对象池
        this.CreateNoodePool(AdvPrefab.TgClickJump, 1);
        //创建全屏对象池
        this.CreateNoodePool(AdvPrefab.TgFullScreen, 1);
        //创建插屏对象池
        this.CreateNoodePool(AdvPrefab.TgInterstitial, 1);
        //创建收藏对象池
        this.CreateNoodePool(AdvPrefab.TgCollect, 1);
        //创建提醒对象池
        this.CreateNoodePool(AdvPrefab.TgRemind, 1);
        //创建分类全屏对象池
        this.CreateNoodePool(AdvPrefab.TgTypeFullScreen, 1);
    }
    /**
     * 创建对象池
     * @param {string} _key 对象池名字
     * @param {cc.Node} _parent 父节点
     * @param {Function} _onSuccess 成功函数
     * @param {Function} _onFail 失败函数
     * 
     */
    public CreateNoodePool(_key: string, _count: number = 1) {
        if (_key == "") {
            return;
        }
        let nodePoolData = this.m_NodePool.get(_key);
        if (!nodePoolData) {
            //不存在则创建对象池
            //加载对应预制体
            this.LoadAdvPrefab(_key, (assets) => {
                nodePoolData = {
                    nodePool: new cc.NodePool(),
                    prefab: assets,
                };
                let objnode = cc.instantiate(nodePoolData.prefab);
                nodePoolData.nodePool.put(objnode);
                this.m_NodePool.set(_key, nodePoolData)
            }, (err) => {

            })
        }
    }

    /**
     * 获取一个node
     * @param {string} _key 对象池名字
     * @param {cc.Node} _parent
     */
    public GetNodeToNoodePool(_key: string, _parent: cc.Node): cc.Node {
        let objNode = null;
        //先判断是否有该对象池
        let nodePoolData = this.m_NodePool.get(_key);
        //如果不存在
        if (!nodePoolData) {
            this.TgLog(_key + "__nodepool_not_create");
            return objNode;
        }

        // 通过 size 接口判断对象池中是否有空闲的对象
        if (nodePoolData.nodePool.size()) {
            objNode = nodePoolData.nodePool.get();
        }
        else {
            //生成一个新的对象
            objNode = cc.instantiate(nodePoolData.prefab);
        }

        if (_parent) {
            objNode.parent = _parent;
        }
        else {
            objNode.parent = cc.find("Canvas")
        }

        return objNode;
    }

    /**
     * 将单独的node归还对象池
     * @param {string} _key 对象池名字
     * @param {cc.Node} _node 
     */
    public PutNodeToNoodePool(_key: string, _node: cc.Node) {
        //先判断是否有该对象池
        let nodePoolData = this.m_NodePool.get(_key);
        //如果不存在
        if (!nodePoolData) {
            this.TgLog(_key + "__nodepool_not_create");
            return;
        }
        //将node放回节点
        nodePoolData.nodePool.put(_node);
        this.TgLog("this.m_NodePool", this.m_NodePool);
    }

    /**
     * 清除对应的对象池
     * @param {string} _key 对象池名字
     */
    public ClearNoodePool(_key: string) {

        //先判断是否有该对象池
        let nodePoolData = this.m_NodePool.get(_key);
        //如果不存在
        if (!nodePoolData) {
            this.TgLog(_key + "__nodepool_not_create");
            return;
        }
        //调用clear清除对象池
        nodePoolData.nodePool.clear();
        //将对象在map删除
        this.m_NodePool.delete(_key);
    }

    /**
     * 设置debug模式
     * @param {boolean} _isDebug 
     */
    public SetDebug(_isDebug: boolean) {
        this.m_Debug = _isDebug
    }

    /**
     * 输出log
     * @param {...any} _custome
     */
    public TgLog(..._custome) {
        if (this.m_Debug) {
            console.log.apply(console, _custome);
        }
    }

    /**
     * 深度拷贝对象
     * @param {any} obj 
     */
    private CloneObj(obj: any): any {
        var newObj = {};
        if (obj instanceof Array) {
            newObj = [];
        }
        for (var key in obj) {
            var val = obj[key];
            if (val === null) {
                newObj[key] = null;
            }
            else {
                newObj[key] = typeof val === 'object' ? this.CloneObj(val) : val;
            }
        }
        return newObj;
    }

    /**
     * 返回一个随机数
     * @param {number} _min 
     * @param {number} _max 
     * 返回一个整数
     */
    private RandNum(_min: number, _max: number): number {

        if (_max < _min) {
            return Math.round(_max) + Math.round(Math.random() * (_min - _max));
        }
        else if (_max === _min) {
            return Math.round(_min);
        }
        else {
            return Math.round(_min) + Math.round(Math.random() * (_max - _min));
        }
    }
}