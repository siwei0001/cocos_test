export class WeChat {

    /**
     * 监听微信的显示函数
     * @param {Function} _callFun 显示事件回调函数
     */
    static OnShow(_callFun: Function) {
        window["wx"].onShow((res) => {
            //配置详情页
            console.log("onShow res", res);
            // this.ResumeMusic();
            if (_callFun) {
                _callFun(res);
            }
        });
    }

    /**
     * 监听微信的隐藏函数
     * @param {Function} _callFun 隐藏事件回调函数
     */
    static OnHide(_callFun: Function) {
        window["wx"].onHide((res) => {
            console.log('weixin onhide res', res);
            // this.PauseMusic();
            if (_callFun) {
                _callFun(res);
            }
        })
    }
    /**
     * 微信登录
     * @param {Function} _onSuccess 登录成功回调函数
     * @param {Function} _onFail 登录失败回调函数
     */
    static Login(_onSuccess: Function, _onFail: Function) {

        window["wx"].login({
            success(res) {
                if (res.code) {
                    console.log('登录成功！' + res.code);
                    if (_onSuccess) {
                        _onSuccess(res.code);
                    }
                } else {
                    console.log('登录失败！' + res.errMsg);
                    if (_onFail) {
                        _onFail(res);
                    }
                }
            },
            fail(err) {
                console.log('登录失败！' + err)
                if (_onFail) {
                    _onFail(err);
                }
            }
        })



    }

    /**
     * 获取设备信息同步接口
     */
    static GetSystemInfoSync(): any {
        return window["wx"].getSystemInfoSync();
    }

    /**
     * 获取启动参数
     */
    static GetLaunchOptionsSync(): any {
        return window["wx"].getLaunchOptionsSync();
    }

    /**
     * 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
     */
    static GetMenuButtonBoundingClientRect(): any {
        const version = WeChat.GetSystemInfoSync().SDKVersion
        if (WeChat.CompareVersion(version, '2.1.0') >= 0) {
            return window["wx"].getMenuButtonBoundingClientRect();
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // WeChat.ShowModal("提示", '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。');
            return null;
        }
    }

    /**
     * 加载分包
     * @param {string} _subPackageName      分包名字
     * @param {Function} _onSuccess         成功回调函数
     * @param {Function} _onFail            失败回调函数
     * @param {Function} _onProgressUpdate  进度回调函数
     */
    static LoadSubpackage(_subPackageName: string, _onSuccess: Function, _onFail: Function, _onProgressUpdate: Function) {
        const version = WeChat.GetSystemInfoSync().SDKVersion
        if (WeChat.CompareVersion(version, '2.1.0') >= 0) {
            const loadTask = window["wx"].loadSubpackage({
                name: _subPackageName, // name 可以填 name 或者 root
                success: function (res) {
                    // 分包加载成功后通过 success 回调
                    if (_onSuccess) {
                        _onSuccess(res)
                    }
                },
                fail: function (res) {
                    // 分包加载失败通过 fail 回调
                    if (_onFail) {
                        _onFail(res)
                    }
                }
            })

            loadTask.onProgressUpdate(res => {
                if (_onProgressUpdate) {
                    _onProgressUpdate(res);
                }

                // '下载进度', res.progress
                // '已经下载的数据长度', res.totalBytesWritten
                // '预期需要下载的数据总长度', res.totalBytesExpectedToWrite
            })
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            WeChat.ShowModal("提示", '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。');
        }
    }

    /**
     * 在用户授权的情况下获取用户信息
     * @param {Function} _onSuccess    成功返回函数
     * @param {Function} _onFail       失败返回函数
     */
    static GetUserInfo(_onSuccess: Function, _onFail: Function) {

        window["wx"].getUserInfo({
            success: (res) => {
                _onSuccess(res.userInfo);
            },
            fail: (err) => {
                _onFail(err);
            }
        })
    }

    /**
     * 请求授权接口
     * @param {Function} _onSuccess    成功返回函数
     * @param {Function} _onFail       失败返回函数
     */
    static Authorize(_onSuccess: Function, _onFail: Function) {
        const version = WeChat.GetSystemInfoSync().SDKVersion
        if (WeChat.CompareVersion(version, '1.2.0') >= 0) {
            // 可以通过 qq.getSetting 先查询一下用户是否授权了 "scope.userInfo" 这个 scope
            window["wx"].getSetting({
                success: (res) => {
                    // console.log("qq.getSetting success res.authSetting", res.authSetting);
                    if (res.authSetting['scope.userInfo']) {
                        _onSuccess();
                    }
                    else {
                        _onFail();
                    }
                },
                fail: (err) => {
                    _onFail(err);
                }
            })
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // WeChat.ShowModal("提示", '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。');
            _onFail();
        }
    }

    /**
     * 创建授权按钮
     * @param {string} _textureUrl       按钮纹理地址
     * @param {number} _left             靠左边多少像素
     * @param {number} _top              靠上边多少像素
     * @param {number} _width            宽
     * @param {number} _height           高
     * @param {Function} _onSuccess      成功返回函数
     * @param {Function} _onFail         失败返回函数
     */
    static CreateUserInfoButton(_textureUrl: string, _left: number, _top: number, _width: number, _height: number, _onSuccess: Function, _onFail: Function) {
        console.log("CreateUserInfoButton ");
        const version = WeChat.GetSystemInfoSync().SDKVersion
        if (WeChat.CompareVersion(version, '2.0.1') >= 0) {
            let button = window["wx"].createUserInfoButton({
                type: 'image',
                image: _textureUrl,
                style: {
                    left: _left,
                    top: _top,
                    width: _width,
                    height: _height,
                }
            })
            console.log("CreateUserInfoButton button", button);
            button.show();
            button.onTap((res) => {
                console.log(res)
                button.destroy();
                if (res.userInfo) {
                    _onSuccess(res.userInfo);
                } else {
                    _onFail("拒绝授权");
                }
            })
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // WeChat.ShowModal("提示", '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。');
            _onFail("拒绝授权");
        }
    }

    /**
     * 微信分享转发监听
     * @param {Function} _onShareCallFun 分享事件回调函数
     */
    static InitWxShare(_onShareCallFun: Function) {
        const version = WeChat.GetSystemInfoSync().SDKVersion
        if (WeChat.CompareVersion(version, '1.1.0') >= 0) {
            //显示当前转发按钮
            window["wx"].showShareMenu({
                withShareTicket: true,
                success: function () {
                    // console.log("wei xin showShareMenu success....");
                },
                fail: function () {
                    // console.log("wei xin showShareMenu fail....");
                },
                complete: function () {
                    // console.log("wei xin showShareMenu complete....");
                }
            });
            //被动转发的设置
            window["wx"].onShareAppMessage(_onShareCallFun)
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // WeChat.ShowModal("提示", '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。');
        }
    }

    /**
     * 分享 
     * @param {string} _title 分享标题
     * @param {string} _imageUrl 分享图片地址
     * 
     */
    static ShareAppMessage(_title: string, _imageUrl: string) {

        window["wx"].shareAppMessage({
            title: _title,
            // imageUrlId: '转发标题',
            imageUrl: _imageUrl // 图片 URL
        })

    }

    /**
     *  截图功能
     * 
     *  @param {number} x 	 	0 	否 	截取 canvas 的左上角横坐标
     *  @param {number} y 	 	0 	否 	截取 canvas 的左上角纵坐标
     *  @param {number} width 	 	canvas 的宽度 	否 	截取 canvas 的宽度
     *  @param {number} height 	 	canvas 的高度 	否 	截取 canvas 的高度
     *  @param {number} destWidth 	canvas 的宽度 	否 	目标文件的宽度，会将截取的部分拉伸或压缩至该数值
     *  @param {number} destHeight  canvas 的高度 	否 	目标文件的高度，会将截取的部分拉伸或压缩至该数值
     *  @param {string} fileType 	png 	否 	目标文件的类型
     *  @param {number} quality 	1.0 	否 	jpg图片的质量，仅当 fileType 为 jpg 时有效。取值范围为 0.0（最低）- 1.0（最高），不含 0。不在范围内时当作 1.0
     */
    static RenderTexture(_x: number = 0, _y: number = 0, _width: number = 200, _height: number = 150, _destWidth: number = 500, _destHeight: number = 400, _fileType: string = "png", _quality: number = 1.0) {
        // console.log("_x", _x, "_y", _y, "_width", _width, "_height", _height, "_destWidth", _destWidth, "_destHeight", _destHeight);
        // const tempFilePath = canvas.toTempFilePathSync({
        //     x: _x,
        //     y: _y,
        //     width: _width,
        //     height: _height,
        //     destWidth: _destWidth,
        //     destHeight: _destHeight,
        //     fileType: _fileType,
        //     quality: _quality,
        // })
        // return tempFilePath;
    }

    /**
     * 加快触发 JavaScriptCore 垃圾回收（Garbage Collection）
     * GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。
     * window["wx"].triggerGC()
     */
    static TriggerGC() {
        window["wx"].triggerGC()
    }

    /**
     * 向子域发送消息
     * @param {any} _messagedata
     */
    static OpenDataContextPostMessage(_messagedata: any) {
        // 1.9.92
        const version = WeChat.GetSystemInfoSync().SDKVersion
        if (WeChat.CompareVersion(version, '1.9.92') >= 0) {
            window["wx"].getOpenDataContext().postMessage(_messagedata);
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // WeChat.ShowModal("提示", '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。');
        }
    }

    /**
     * 对用户托管数据进行写数据操作。允许同时写多组 KV 数据
     * @param {any} _kvDataList kv数据
     */
    static UploadUserCloudData(_kvDataList: any) {
        const version = WeChat.GetSystemInfoSync().SDKVersion
        if (WeChat.CompareVersion(version, '1.9.92') >= 0) {
            let userdata = {
                KVDataList: _kvDataList,
                success: function (res) {
                    console.log("success：res", res);
                },
                fail: function (res) {
                    console.log("fail：res", res);
                },
                complete: function (res) {
                    console.log("complete：res", res);
                },
            }

            window["wx"].setUserCloudStorage(userdata);
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // WeChat.ShowModal("提示", '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。');
        }
    }

    /**
     * 创建一个banner广告
     * @param {string} _adUnitId 广告id
     * @param {number} _left 左边位置 默认0
     * @param {number} _top 顶部位置 默认0
     * @param {number} _width 宽度 默认300
     * @param {number} _height 高度 默认100
     * @param {number} _adIntervals 广告刷新时间 默认30
     * 
     */
    static CreateBannerAd(_adUnitId: string, _left: number = 0, _top: number = 0, _width: number = 300, _height: number = 100, _adIntervals: number = 30) {
        const version = WeChat.GetSystemInfoSync().SDKVersion
        if (WeChat.CompareVersion(version, '2.0.4') >= 0) {
            let banner = window["wx"].createBannerAd({
                adUnitId: _adUnitId,
                style: {
                    left: _left,
                    top: _top,
                    width: _width,
                    height: _height
                },
                adIntervals: _adIntervals,
            })

            return banner;
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // WeChat.ShowModal("提示", '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。');
            return null;
        }
    }

    /**
     * 创建视频广告
     * @param {string} _adUnitId 广告id
     */
    static CreateRewardedVideoAd(_adUnitId: string) {
        const version = WeChat.GetSystemInfoSync().SDKVersion
        if (WeChat.CompareVersion(version, '2.0.4') >= 0) {
            let rewardedVideoAd = window["wx"].createRewardedVideoAd({
                adUnitId: _adUnitId
            })
            return rewardedVideoAd;
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // WeChat.ShowModal("提示", '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。');
            return null;
        }
    }

    /**
     * 创建插屏广告
     * @param {string} _adUnitId 广告id
     */
    static CreateInterstitialAd(_adUnitId: string) {
        // 2.6.0
        const version = WeChat.GetSystemInfoSync().SDKVersion
        if (WeChat.CompareVersion(version, '2.6.0') >= 0) {
            let interstitialAd = window["wx"].createInterstitialAd({
                adUnitId: _adUnitId
            })
            return interstitialAd;
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // WeChat.ShowModal("提示", '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。');
            return null;
        }
    }

    /**
    * 创建格子广告
    * @param {string} _adUnitId 广告id
    * @param {number} _left 左边位置 默认0
    * @param {number} _top 顶部位置 默认0
    * @param {number} _width 宽度   默认300
    * @param {number} _height 高度  默认100
    * @param {number} _adIntervals 广告刷新间隔 默认30
    * @param {string} _adTheme 主题 分white black 默认white
    * @param {number} _gridCount 广告组件的格子个数，可设置爱5，8两种格子个数样式，默认值为5
    * 
    */
    static CreateGridAd(_adUnitId: string, _left: number = 0, _top: number = 0, _width: number = 300, _height: number = 100, _adIntervals: number = 30, _adTheme: string = "white", _gridCount: number = 5) {
        // 2.9.2
        const version = WeChat.GetSystemInfoSync().SDKVersion
        if (WeChat.CompareVersion(version, '2.9.2') >= 0) {
            let gridAd = window["wx"].createGridAd({
                adUnitId: _adUnitId,
                style: {
                    left: _left,
                    top: _top,
                    width: _width,
                    height: _height
                },
                adIntervals: _adIntervals,
                adTheme: _adTheme,
                gridCount: _gridCount
            })

            return gridAd;
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // WeChat.ShowModal("提示", '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。');
            return null;
        }
    }


    /**
    * 创建原生广告
    * @param {string} _adUnitId 广告id
    * @param {number} _left 左边位置 默认0
    * @param {number} _top 顶部位置 默认0
    * @param {number} _width 宽度   默认300
    * @param {number} _height 高度  默认100
    * @param {number} _adIntervals 广告刷新间隔 默认30
    */
    static CreateCustomAd(_adUnitId: string, _left: number = 0, _top: number = 0, _fixed: boolean = false, _adIntervals: number = 30) {
        // 2.11.1 
        const version = WeChat.GetSystemInfoSync().SDKVersion
        if (WeChat.CompareVersion(version, '2.11.1') >= 0) {
            let customAd = window["wx"].createCustomAd({
                adUnitId: _adUnitId,
                style: {
                    left: _left,
                    top: _top,
                    fixed: _fixed
                },
                adIntervals: _adIntervals
            })

            return customAd;
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // WeChat.ShowModal("提示", '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。');
            return null;
        }
    }

    /**
     * 预览图片
     * @param {string} _imageUrl 图片地址
     */
    static PreviewImage(_imageUrl: string) {

        return new Promise((resolve, reject) => {
            window["wx"].previewImage({
                urls: [_imageUrl],
                success: () => {
                    console.log("wei xin previewImage success....");
                    resolve("success");
                },
                fail: () => {
                    reject("fail");
                }
            })
        })

    }
    /**
     * 调用震动
     * 使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
     * @param {Function} _onSuccess    成功返回函数
     * @param {Function} _onFail       失败返回函数
     */
    static VibrateShort(_onSuccess: Function, _onFail: Function) {
        // 1.2.0
        const version = WeChat.GetSystemInfoSync().SDKVersion
        if (WeChat.CompareVersion(version, '2.6.0') >= 0) {
            window["wx"].vibrateShort({
                success: () => {
                    // console.log("VibrateShort success");
                    if (_onSuccess) {
                        _onSuccess();
                    }
                },
                fail: (err) => {
                    // console.log("VibrateShort fail", err);
                    if (_onFail) {
                        _onFail();
                    }
                }
            });
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // WeChat.ShowModal("提示", '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。');
            _onFail();
        }

    }



    /**
     * 创建wx音频实例
     * @param {string} _audioUrl 音频地址
     * @param {number} _startTime  音频开始时间
     * @param {boolean} _loop   音频循环
     */
    static CreateInnerAudioContext(_audioUrl: string, _startTime: number = 0, _loop: boolean = false) {
        // 1.6.0
        const version = WeChat.GetSystemInfoSync().SDKVersion
        if (WeChat.CompareVersion(version, '1.6.0') >= 0) {
            const innerAudioContext = window["wx"].createInnerAudioContext();
            innerAudioContext.startTime = _startTime;
            innerAudioContext.loop = _loop;
            innerAudioContext.src = _audioUrl;

            return innerAudioContext;
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // WeChat.ShowModal("提示", '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。');
            return null;
        }
    }

    /**
     * 跳转到其他小游戏
     * 小游戏的appid一定要在game.json 的配置列表里
     * @param {string} _appid   appid
     * @param {string} _path    路径
     * @param {string} _extData 参数
     * @param {string} _envVersion  版本
     * @param {function} _onSuccess    成功返回函数
     * @param {function} _onFail       失败返回函数
     */
    static JumpToMiniProgram(_appid: string, _path: string, _extData: string = "", _envVersion: string = 'release', _onSuccess: Function = null, _onFail: Function = null) {
        // 2.2.0
        const version = WeChat.GetSystemInfoSync().SDKVersion
        if (WeChat.CompareVersion(version, '2.2.0') >= 0) {
            window["wx"].navigateToMiniProgram(
                {
                    appId: _appid,
                    path: _path,
                    extraData: _extData,
                    envVersion: _envVersion,
                    success: (data) => {
                        console.log("navigateToMiniProgram success", data);
                        if (_onSuccess) {
                            _onSuccess(data);
                        }
                    },
                    fail: (err) => {
                        console.log("navigateToMiniProgram fail", err);

                        if (_onFail) {
                            _onFail();
                        }
                    }
                }
            );
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // WeChat.ShowModal("提示", '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。');
            if (_onFail) {
                _onFail();
            }
        }

    }


    /**
    * 发送一个请求
    * @param {string} _url  设置请求响应的URL, 例如： http://xxxx/xxx.php
    * @param {string} _data  发送请求数据转换为字符串， 格式：pid=10003&appid=cycckhlb&appChannel=weixin
    * 
    * @param {Function} _cbSuccess 请求成功回调函数，函数格式：success(data)
    * @param {Function} _cbFail 请求失败回调函数 ,函数格式： fail(_info)
    * 
    * @param {string} _mothed 请求方式， 'GET', 'POST'
    * @param {number} _retry 超时重连次数
    * @param {number} _timeout 超时时间设置 (超时时间在微信配置文件里面设置，此处无效)
    * 
    */
    static HttpRequest(_url: string, _data: string, _cbSuccess: Function, _cbFail: Function, _mothed: string = 'GET', _retry: number = 3, _timeout: number = 1000) {

        window["wx"].request({
            url: _url,
            data: _data,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: _mothed,
            success: (res) => {
                // console.log("HttpRequest success", res);
                if (_cbSuccess) {
                    _cbSuccess(res.data);
                }
            },
            fail: (err) => {
                console.log("HttpRequest fail", err);
                if (err.errMsg.search(/timeout/g)) {
                    _retry--;
                    console.log("超时次数", _retry);
                    if (_retry <= 0) {
                        if (_cbFail) {
                            _cbFail("请求超时次数已达上限");
                        }
                    }
                    else {
                        this.HttpRequest(_url, _data, _cbSuccess, _cbFail, _mothed, _retry, _timeout);
                    }
                }
                else {
                    if (_cbFail) {
                        _cbFail(err);
                    }
                }
            },
            complete: (data) => {
                // console.log("HttpRequest complete", data);
            }
        })

    }

    static CompareVersion(v1, v2) {
        v1 = v1.split('.')
        v2 = v2.split('.')
        const len = Math.max(v1.length, v2.length)

        while (v1.length < len) {
            v1.push('0')
        }
        while (v2.length < len) {
            v2.push('0')
        }

        for (let i = 0; i < len; i++) {
            const num1 = parseInt(v1[i])
            const num2 = parseInt(v2[i])

            if (num1 > num2) {
                return 1
            } else if (num1 < num2) {
                return -1
            }
        }

        return 0
    }

    static ShowModal(_title: string, _content: string) {
        // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
        window["wx"].showModal({
            title: _title,
            content: _content
        })
    }
}