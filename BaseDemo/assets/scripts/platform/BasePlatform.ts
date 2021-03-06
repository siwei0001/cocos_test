import { WeChat } from "./WeChat";
import Utils from "../utils/Utils";
import DataManage from "../manage/DataManage";
import BaseLayer from "../base/BaseLayer";
import { BaseConfig } from "../config/BaseConfig";
import { Bytedanace } from "./Bytedanace";

export default class BasePlatform {

    private m_SystemInfo: any = null;   //系统信息
    private m_LaunchOptionsSync: any = null;   //启动信息
    private m_UserInfoButton: any = null;       //授权按钮
    private m_RecorderVideoUrl: string = "";

    private static _instance: BasePlatform;

    /**
     * 构造函数
     */
    constructor() {

    }

    public static getInstance(): BasePlatform {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new BasePlatform())
        return this._instance
    }

    /**
     * 判断是否是web平台
     */
    public IsWeb(): boolean {
        //在桌面浏览器调试
        if (cc.sys.platform == cc.sys.DESKTOP_BROWSER) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * 判断是否是微信平台
     */
    public IsWeChat(): boolean {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            return true;
        }
        else {
            return false;
        }
    }


    /**
     * 判断是否是字节跳动平台
     */
    public IsBytedanace(): boolean {
        if (cc.sys.platform == cc.sys.BYTEDANCE_GAME) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
    * 监听显示函数
    */
    public OnShow() {
        console.log("OnShow");
        if (this.IsWeChat()) {
            WeChat.OnShow((res) => {
                //显示处理
                console.log("wxonshow res", res);
                //上传openid
                // StatisticsServer.getInstance().SendOpenID();
                //显示微信插屏
                // AdvServer.getInstance().ShowWeChatInterstitial();
            });
        }
        else if (this.IsBytedanace()) {
            Bytedanace.OnShow((res) => {
                //显示处理
                // StatisticsServer.getInstance().SetShowQuery(res.query);
                console.log("bytedanaceonshow res", res);
                //上传openid
                // StatisticsServer.getInstance().SendOpenID();
                //显示微信插屏
                // AdvServer.getInstance().ShowWeChatInterstitial();
            });
        }
        else {
        }
    }

    /**
     * 监听隐藏函数
     */
    public OnHide() {
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
    }

    /**
     * 加快触发 JavaScriptCore 垃圾回收（Garbage Collection）
     * GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。
     * 
     */
    public TriggerGC() {
        if (this.IsWeChat()) {
            WeChat.TriggerGC();
        }
        else if (this.IsBytedanace()) {
            Bytedanace.TriggerGC();
        }
        else {
        }
    }

    /**
     * 加载分包 wx的分包加载其他平台不在处理直接返回
     * 
     * @param {string} _subPackageName      分包名字
     * @param {Function} _onSuccess         成功回调函数
     * @param {Function} _onFail            失败回调函数
     * @param {Function} _onProgressUpdate  进度回调函数
     */
    public LoadSubPackage(_subPackageName: string, _onSuccess: Function, _onFail: Function = null, _onProgressUpdate: Function = null) {
        if (this.IsWeChat()) {
            WeChat.LoadSubpackage(_subPackageName, _onSuccess, _onFail, _onProgressUpdate);
        }
        else if (this.IsBytedanace()) {
            if (_onProgressUpdate) {
                let res = {
                    progress: 1,
                    totalBytesWritten: 100,
                }
                _onProgressUpdate(res);
            }
            if (_onSuccess) {
                _onSuccess("非微信平台");
            }
        }
        else {
            if (_onProgressUpdate) {
                let res = {
                    progress: 1,
                    totalBytesWritten: 100,
                }
                _onProgressUpdate(res);
            }
            if (_onSuccess) {
                _onSuccess("非微信平台");
            }
        }
    }

    /**
     * 获取获取系统信息
     */
    public GetSystemInfo(): any {
        if (this.IsWeChat()) {
            //如果系统信息没有则重新获取
            if (!this.m_SystemInfo) {
                this.m_SystemInfo = WeChat.GetSystemInfoSync();
            }
            return this.m_SystemInfo;
        }
        else if (this.IsBytedanace()) {
            //如果系统信息没有则重新获取
            if (!this.m_SystemInfo) {
                this.m_SystemInfo = Bytedanace.GetSystemInfoSync();
            }
            return this.m_SystemInfo;
        }
        else {
            return null;
        }
    }

    /**
     * 获取启动参数
     */
    public GetLaunchOptionsSync(): any {
        if (this.IsWeChat()) {
            //如果没有则重新获取
            if (!this.m_LaunchOptionsSync) {
                this.m_LaunchOptionsSync = WeChat.GetLaunchOptionsSync();
            }
            return this.m_LaunchOptionsSync;
        }
        else if (this.IsBytedanace()) {
            //如果没有则重新获取
            if (!this.m_LaunchOptionsSync) {
                this.m_LaunchOptionsSync = Bytedanace.GetLaunchOptionsSync();
            }
            return this.m_LaunchOptionsSync;
        }
        else {
            return null;
        }
    }


    /**
     * 授权接口
     * 提前向用户发起授权请求。
     * 调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，
     * 但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功
     * @param {Function} _onSuccess 授权成功函数
     * @param {Function} _onFail    授权失败函数
     * 
     */
    public Authorize(_onSuccess: Function, _onFail: Function) {
        if (this.IsWeChat()) {
            WeChat.Authorize(_onSuccess, _onFail);
        }
        else if (this.IsBytedanace()) {
            Bytedanace.Authorize(_onSuccess, _onFail);
        }
        else {
            if (_onSuccess) {
                _onSuccess("非微信平台");
            }
        }
    }

    /**
     * 创建授权按钮
     * @param {any} _btnTexture 按钮纹理
     * @param {Function} _onSuccess 创建成功函数
     * @param {Function} _onFail 创建失败函数
     */
    public CreateUserInfoButton(_btnNode: cc.Node, _onSuccess: Function, _onFail: Function) {
        if (this.IsWeChat()) {
            let frameSize = cc.view.getFrameSize();
            let resolutionsize = cc.view.getDesignResolutionSize();
            let test1 = resolutionsize.width / frameSize.width;
            let test2 = resolutionsize.height / frameSize.height;

            let spriteComnpont = _btnNode.getComponentInChildren(cc.Sprite);
            let width = _btnNode.width / test1;//_btnNode.width / (viewwidth / cc.view.getFrameSize().width);
            let height = _btnNode.height / test1;// _btnNode.height / (viewheight / cc.view.getFrameSize().height);
            let nodePos = _btnNode.position;

            // cc.winSize.width
            let left = (resolutionsize.width / 2 + nodePos.x - _btnNode.width / 2) / test1;
            // let top = (resolutionsize.height - (resolutionsize.height / 2 + nodePos.y + _btnNode.height / 2)) / test2;
            let top = 0;
            if (nodePos.y > 0) {
                top = (nodePos.y - _btnNode.height / 2) / cc.winSize.height * frameSize.height //(resolutionsize.height - (resolutionsize.height / 2 + nodePos.y + _btnNode.height / 2)) / test2;
            }
            else {
                top = Math.abs(nodePos.y + _btnNode.height / 2 - cc.winSize.height / 2) / cc.winSize.height * frameSize.height //(resolutionsize.height - (resolutionsize.height / 2 + nodePos.y + _btnNode.height / 2)) / test2;
            }

            //获取纹理路径
            let imgUrl = spriteComnpont.spriteFrame.getTexture().url;

            // this.m_UserInfoButton = WeChat.CreateUserInfoButton(imgUrl, left, top, width, height);
            // this.m_UserInfoButton.show();
            // this.m_UserInfoButton.onTap((res) => {
            //     console.log(res)
            //     this.m_UserInfoButton.destroy();
            //     this.m_UserInfoButton = null;
            //     if (res.userInfo) {
            //         _onSuccess(res.userInfo);
            //     } else {
            //         _onFail("拒绝授权");
            //     }

            // })
        }
        else if (this.IsBytedanace()) {
            Bytedanace.Authorize(_onSuccess, _onFail);
        }
        else {
            if (_onSuccess) {
                _onSuccess("非微信平台");
            }
        }
    }

    /**
     * 销毁授权按钮
     */
    public DestroyUserInfoButton() {
        if (this.IsWeChat()) {
            if (this.m_UserInfoButton) {
                this.m_UserInfoButton.destroy();
                this.m_UserInfoButton = null;
            }
        }
        else if (this.IsBytedanace()) {

        }
        else {
        }
    }

    /**
     * 获取用户信息
     * @param {Function} _onSuccess 成功函数
     * @param {Function} _onFail 失败函数
     */
    public GetUserInfo(_onSuccess: Function, _onFail: Function) {
        if (this.IsWeChat()) {
            WeChat.GetUserInfo(_onSuccess, _onFail);
        }
        else if (this.IsBytedanace()) {
            Bytedanace.GetUserInfo(_onSuccess, _onFail);
        }
        else {
            if (_onFail) {
                _onFail("非微信平台");
            }
        }
    }

    /**
     * 调用震动
     * 使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
     * @param {Function} _onSuccess 成功函数
     * @param {Function} _onFail 失败函数
     */
    public VibrateShort(_onSuccess: Function = null, _onFail: Function = null) {
        if (this.IsWeChat()) {
            WeChat.VibrateShort(_onSuccess, _onFail);
        }
        else if (this.IsBytedanace()) {
            Bytedanace.VibrateShort(_onSuccess, _onFail);
        }
        else {
            if (_onSuccess) {
                _onSuccess("非微信平台");
            }
        }
    }

    /**
     * 初始化分享
     */
    public InitShare() {
        let resimageurl = BaseConfig.NetConfig.NetRoot + BaseConfig.NetConfig.NetRes + "share/img_share_1.jpg";
        console.log("resimageurl", resimageurl);
        if (this.IsWeChat()) {
            // http://101.37.33.113/zjkj_h5/qiantingwangzhe/res_1002/share/img_share_1.jpg
            // let resimageurl = BaseConfig.NetConfig.NetRoot + BaseConfig.NetConfig.NetRes + "share/img_share_1.jpg";
            // console.log("resimageurl", resimageurl);
            // let url = assets
            //随机生成分享语和图片
            // WeChat.InitWxShare(() => {
            //     let testtitle = "";
            //     let rand = Utils.RandNum(0, 1);
            //     if (rand) {
            //         testtitle = BaseConfig.ShareInfo.Title_1;
            //     }
            //     else {
            //         testtitle = BaseConfig.ShareInfo.Title_2;
            //     }

            //     let resimageurl = BaseConfig.NetConfig.NetRoot + BaseConfig.NetConfig.NetRes + BaseConfig.ShareInfo.Img_1;
            //     return {
            //         title: testtitle,
            //         imageUrl: resimageurl
            //     }
            // });
        }
        else if (this.IsBytedanace()) {
            //随机生成分享语和图片
            // Bytedanace.InitWxShare(() => {
            //     let testtitle = "";
            //     let rand = Utils.RandNum(0, 1);
            //     if (rand) {
            //         testtitle = BaseConfig.ShareInfo.Title_1;
            //     }
            //     else {
            //         testtitle = BaseConfig.ShareInfo.Title_2;
            //     }

            //     let resimageurl = BaseConfig.NetConfig.NetRoot + BaseConfig.NetConfig.NetRes + BaseConfig.ShareInfo.Img_1;
            //     return {
            //         title: testtitle,
            //         imageUrl: resimageurl
            //     }
            // });
        }
        else {
        }
    }

    /**
     * 分享
     * 传入 _imageUrl
     * @param {string} _title 分享标题
     * @param {string} _imageUrl 分享图片路径
     * 
     */
    public ShareMessage(_title: string = "", _imageUrl: string = null) {
        if (this.IsWeChat()) {
            // if (!_title) {
            //     let rand = Utils.RandNum(0, 1);
            //     if (rand) {
            //         _title = BaseConfig.ShareInfo.Title_1;
            //     }
            //     else {
            //         _title = BaseConfig.ShareInfo.Title_2;
            //     }
            // }
            // if (!_imageUrl) {
            //     _imageUrl = BaseConfig.NetConfig.NetRoot + BaseConfig.NetConfig.NetRes + BaseConfig.ShareInfo.Img_1;
            // }

            // WeChat.ShareAppMessage(_title, _imageUrl);
        }
        else if (this.IsBytedanace()) {
            Bytedanace.ShareAppMessage("", _title, _imageUrl);
        }
        else {
        }
    }

    /**
     * 分享视频
     * 
     */
    public ShareVideoMessage(_onSuccess: Function = null, _onFail: Function = null) {
        if (this.IsWeChat()) {

        }
        else if (this.IsBytedanace()) {

            if (!this.m_RecorderVideoUrl) {
                if (_onFail) {
                    _onFail();
                }
                return;
            }

            let desc = "看看耳朵里面还有啥";
            if (Utils.RandNum(0, 1)) {
                desc = "耳朵好痒，去采耳吧";
            }
            
            Bytedanace.ShareAppMessage("video", desc, "", desc, this.m_RecorderVideoUrl,
                ["采耳大师", "休闲"], "", "",
                (res) => {
                    console.log("分享成功");
                    if (_onSuccess) {
                        _onSuccess(res);
                    }
                },
                (err) => {
                    console.log("分享失败 err", err);
                    if (_onFail) {
                        _onFail(err);
                    }
                });
        }
        else {
        }

        // //录屏分享
        // ShareAppVideoMessage(_videoPath, _videoTopics = ["话题1", "话题2"], _title = "分享视频", _desc = "测试描述", _onSuccess = null, _onFail = null) {
        //     if (this.m_Platfrom == PlatformType.Zjkj_ByteDanceide) {
        //         //字节跳动
        //         ByteDanceide.getInstance().ShareAppVideoMessage(_videoPath, _videoTopics, _title, _desc, _onSuccess, _onFail);
        //     }
        //     else {
        //     }
        // }

    }

    /**
     * 游戏录屏开始
     */
    public GameRecorderStart(_onStart: Function = null) {
        if (this.IsBytedanace()) {
            console.log("录屏开始");
            //头条
            Bytedanace.GameRecorderStart(_onStart);
        }

    }

    /**
     * 游戏录屏暂停
     */
    public GameRecorderPause(_onPause: Function = null) {
        if (this.IsBytedanace()) {
            //头条
            Bytedanace.GameRecorderPause(_onPause);
        }
    }

    /**
     * 游戏录屏恢复
     */
    public GameRecorderResume(_onResume: Function = null) {
        if (this.IsBytedanace()) {
            //头条
            Bytedanace.GameRecorderResume(_onResume);
        }
    }

    /**
     * 游戏录屏停止
     */
    public GameRecorderStop(_onStop: Function = null) {
        if (this.IsBytedanace()) {
            console.log("录屏停止");
            this.m_RecorderVideoUrl = null;

            //头条
            Bytedanace.GameRecorderStop((res) => {
                console.log("录屏停止res", res);
                console.log("录屏停止res.videoPath", res.videoPath);
                //记录录屏地址
                this.m_RecorderVideoUrl = res.videoPath;
                if (_onStop) {
                    _onStop(res);
                }
            });
        }
    }

    /**
     * 截图
     * 传入截图node _Rendernode
     * @param {cc.Node} _Rendernode 要截图的node
     *  根据node的宽高可视区域截图 当图片宽比 超出 5：4 会裁剪多出来的部分
     * web 平台不会根据node进行截屏
     */
    public RenderTexture(_Rendernode: cc.Node = null) {
        if (this.IsWeChat()) {
            // if (_Rendernode) {//根据node的可视区域截图 当图片宽比 超出 5：4 会裁剪多出来的部分
            //     //设计宽
            //     let viewwidth = cc.view.getFrameSize().width;
            //     //设计高
            //     let viewheight = cc.view.getFrameSize().height;
            //     //实际视图
            //     let rect = _Rendernode.getBoundingBoxToWorld();
            //     let image = WeChat.RenderTexture(rect.xMin / viewwidth * canvas.width,
            //         (viewheight - rect.yMax) / viewheight * canvas.height,
            //         rect.width / viewwidth * canvas.width,
            //         rect.height / viewheight * canvas.height,
            //         rect.width / viewwidth * canvas.width,
            //         rect.height / viewheight * canvas.height,
            //     )
            //     return image;
            // }
            // else { //默认全屏
            //     return WeChat.RenderTexture(0, 0, canvas.width, canvas.height, canvas.width, canvas.height);
            // }
        }
        else if (this.IsBytedanace()) {

        }
        else {
            // let node = new cc.Node();
            // node.parent = cc.director.getScene();
            // let camera = node.addComponent(cc.Camera);

            // // 设置你想要的截图内容的 cullingMask
            // camera.cullingMask = 0xffffffff;

            // // 新建一个 RenderTexture，并且设置 camera 的 targetTexture 为新建的 RenderTexture，这样 camera 的内容将会渲染到新建的 RenderTexture 中。
            // let texture = new cc.RenderTexture();
            // let gl = cc.game._renderContext;
            // // 如果截图内容中不包含 Mask 组件，可以不用传递第三个参数
            // texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, gl.STENCIL_INDEX8);

            // camera.targetTexture = texture;

            // // 渲染一次摄像机，即更新一次内容到 RenderTexture 中
            // camera.render();

            // // 这样我们就能从 RenderTexture 中获取到数据了
            // let data = texture.readPixels();

            // // 接下来就可以对这些数据进行操作了
            // let canvas = document.createElement('canvas');
            // let ctx = canvas.getContext('2d');
            // canvas.width = texture.width;
            // canvas.height = texture.height;

            // let width = texture.width;
            // let height = texture.height;

            // let rowBytes = width * 4;
            // for (let row = 0; row < height; row++) {
            //     let srow = height - 1 - row;
            //     let imageData = ctx.createImageData(width, 1);
            //     let start = srow * width * 4;
            //     for (let i = 0; i < rowBytes; i++) {
            //         imageData.data[i] = data[start + i];
            //     }

            //     ctx.putImageData(imageData, 0, row);
            // }

            // let dataURL = canvas.toDataURL("image/jpeg");
            // let img = document.createElement("img");
            // img.src = dataURL;

            // // var img = new Image();
            // // img.src = dataURL;
            // // let testtexture = new cc.Texture2D();
            // // testtexture.initWithElement(img);
            // // texture.initWithElement(img);
            // // console.log("testtexture",testtexture);

            // return img;
        }
    }

    /**
     * 上传用户数据到服务器
     */
    public UploadUserCloudData() {
        if (this.IsWeChat()) {
            // let limittimedata = Utils.CloneObj(BaseConfig.CloudData);
            // limittimedata.UUID = DataManage.getInstance().GetUserUUID();
            // limittimedata.Score = DataManage.getInstance().GetLimitTimeMaxScore();
            // limittimedata.UpdateTime = cc.sys.now();

            // let endlessdata = Utils.CloneObj(BaseConfig.CloudData);
            // endlessdata.UUID = DataManage.getInstance().GetUserUUID();
            // endlessdata.Score = DataManage.getInstance().GetEndlessMaxScore();
            // endlessdata.UpdateTime = cc.sys.now();

            // let goodtimedata = Utils.CloneObj(BaseConfig.CloudData);
            // goodtimedata.UUID = DataManage.getInstance().GetUserUUID();
            // goodtimedata.Score = DataManage.getInstance().GetGoodTimeMaxScore();
            // goodtimedata.UpdateTime = cc.sys.now();

            // let kvlist = new Array();

            // kvlist.push({ key: BaseConfig.LimitTimeCloudDataKey, value: JSON.stringify(limittimedata) });
            // kvlist.push({ key: BaseConfig.EndlessCloudDataKey, value: JSON.stringify(endlessdata) });
            // kvlist.push({ key: BaseConfig.GoodTimeCloudDataKey, value: JSON.stringify(goodtimedata) });

            // console.log("kvlist", kvlist);
            // WeChat.UploadUserCloudData(kvlist);
        }
        else if (this.IsBytedanace()) {

        }
        else {
            console.log('非微信平台');
        }
    }

    /**
     * 向子域发送消息
     * @param {string} _opendataMessageType 
     * @param {any} _data 
     */
    public OpenDataContextPostMessage(_opendataMessageType, _data: any = '') {
        if (this.IsWeChat()) {
            // BaseConfig.OpenDataMessageData.MessageType = _opendataMessageType;
            // BaseConfig.OpenDataMessageData.Data = _data;

            // //获取用户信息信息时要传入kvlist数组 其他消息不用处理
            // if (_opendataMessageType == BaseConfig.OpenDataMessageType.GetCloudStorage) {
            //     BaseConfig.OpenDataMessageData.KVDataList = [BaseConfig.LimitTimeCloudDataKey, BaseConfig.EndlessCloudDataKey, BaseConfig.GoodTimeCloudDataKey]
            // }
            // else if (_opendataMessageType == BaseConfig.OpenDataMessageType.ShowEndlessRank) {
            //     BaseConfig.OpenDataMessageData.DataKey = BaseConfig.EndlessCloudDataKey;
            // }
            // else if (_opendataMessageType == BaseConfig.OpenDataMessageType.ShowGoodTimeRank) {
            //     BaseConfig.OpenDataMessageData.DataKey = BaseConfig.GoodTimeCloudDataKey;
            // }
            // else if (_opendataMessageType == BaseConfig.OpenDataMessageType.ShowLimitTimeRank) {
            //     BaseConfig.OpenDataMessageData.DataKey = BaseConfig.LimitTimeCloudDataKey;
            // }

            // WeChat.OpenDataContextPostMessage(BaseConfig.OpenDataMessageData);
        }
        else if (this.IsBytedanace()) {

        }
        else {
            console.log('非微信平台');
        }
    }

}

//监听显示函数
BasePlatform.getInstance().OnShow();
//监听隐藏函数
BasePlatform.getInstance().OnHide();

