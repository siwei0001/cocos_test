export class Bytedanace {

    /**
     * 监听的显示函数
     * @param {Function} _callFun 显示事件回调函数
     */
    static OnShow(_callFun: Function) {
        window["tt"].onShow((res) => {
            //配置详情页
            console.log("onShow res", res);
            // this.ResumeMusic();
            if (_callFun) {
                _callFun(res);
            }
        });
    }

    /**
     * 监听的隐藏函数
     * @param {Function} _callFun 隐藏事件回调函数
     */
    static OnHide(_callFun: Function) {
        window["tt"].onHide((res) => {
            console.log('zijie onhide res', res);
            // this.PauseMusic();
            if (_callFun) {
                _callFun(res);
            }
        })
    }
    /**
     * 登录
     * @param {Function} _onSuccess 登录成功回调函数
     * @param {Function} _onFail 登录失败回调函数
     */
    static Login(_onSuccess: Function, _onFail: Function) {

        window["tt"].login({
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
        return window["tt"].getSystemInfoSync();
    }

    /**
     * 获取启动参数
     */
    static GetLaunchOptionsSync(): any {
        return window["tt"].getLaunchOptionsSync();
    }

    /**
     * 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
     */
    static GetMenuButtonBoundingClientRect(): any {
        const version = Bytedanace.GetSystemInfoSync().SDKVersion
        if (Bytedanace.CompareVersion(version, '2.1.0') >= 0) {
            return window["tt"].getMenuButtonBoundingClientRect();
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // Bytedanace.ShowModal("提示", '当前版本过低，无法使用该功能，请升级到最新版本后重试。');
            return null;
        }
    }

    /**
     * 在用户授权的情况下获取用户信息
     * @param {Function} _onSuccess    成功返回函数
     * @param {Function} _onFail       失败返回函数
     */
    static GetUserInfo(_onSuccess: Function, _onFail: Function) {
        window["tt"].getUserInfo({
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
     * scope.userInfo	boolean	是否授权用户信息，对应接口 tt.getUserInfo
        scope.userLocation	boolean	是否授权地理位置，对应接口 tt.getLocation
        scope.address	boolean	是否授权通讯地址，对应接口 tt.chooseAddress
        scope.record	boolean	是否授权录音功能，对应接口 tt.getRecorderManager.start
        scope.album	boolean	是否授权保存到相册 tt.saveImageToPhotosAlbum, tt.saveVideoToPhotosAlbum
        scope.camera	boolean	是否授权摄像头 对应接口 tt.scanCode，tt.chooseImage，tt.chooseVideo
     */
    static Authorize(_onSuccess: Function, _onFail: Function) {
        const version = Bytedanace.GetSystemInfoSync().SDKVersion
        if (Bytedanace.CompareVersion(version, '1.3.0') >= 0) {
            // 可以通过 qq.getSetting 先查询一下用户是否授权了 "scope.userInfo" 这个 scope
            window["tt"].getSetting({
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
            // Bytedanace.ShowModal("提示", '当前版本过低，无法使用该功能，请升级到最新版本后重试。');
            _onFail();
        }
    }

    /**
     * 分享转发监听
     * @param {Function} _onShareCallFun 分享事件回调函数
     */
    static InitWxShare(_onShareCallFun: Function) {
        const version = Bytedanace.GetSystemInfoSync().SDKVersion
        if (Bytedanace.CompareVersion(version, '1.1.0') >= 0) {
            //显示当前转发按钮
            window["tt"].showShareMenu({
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
            window["tt"].onShareAppMessage(_onShareCallFun)
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // Bytedanace.ShowModal("提示", '当前版本过低，无法使用该功能，请升级到最新版本后重试。');
        }
    }

    /**
     * 分享 
     * @param {string} _title 分享标题
     * @param {string} _imageUrl 分享图片地址
     * channel	string	否	转发内容类型 article video token
        templateId	string	否	分享素材模板 id，指定通过平台审核的 templateId 来选择分享内容，需在平台设置且通过审核。	1.22.3
        desc	string	否	分享文案，不传则默认使用后台配置内容或平台默认。	1.30.0
        title	string	否	转发标题，不传则默认使用后台配置或当前小游戏的名称。	
        imageUrl	string	否	转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径，显示图片长宽比推荐 5:4	
        query	string	否	查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 tt.getLaunchOptionsSync() 或 tt.onShow() 获取启动参数中的 query。	
        extra	object	否	附加信息
     */
    static ShareAppMessage(_channel: string, _title: string, _imageUrl: string, _desc: string = "",
        _videoPath: string = "", _videoTopics: Array<string> = [], _templateId: string = "", _query: string = "", _onSuccess: Function = null, _onFail: Function = null) {

        window["tt"].shareAppMessage({
            channel: _channel,
            title: _title,
            desc: _desc,
            imageUrl: _imageUrl,
            templateId: _templateId, // 替换成通过审核的分享ID
            query: _query,
            extra: {
                videoPath: _videoPath, // 可替换成录屏得到的视频地址
                videoTopics: _videoTopics
            },
            success(res) {
                console.log("分享视频成功");
                if (_onSuccess) {
                    _onSuccess(res);
                }
            },
            fail(err) {
                console.log("分享视频失败");
                if (_onFail) {
                    _onFail(err);
                }
            }
        })
    }

    /**
     * 加快触发 JavaScriptCore 垃圾回收（Garbage Collection）
     * GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。
     * window["tt"].triggerGC()
     */
    static TriggerGC() {
        const version = Bytedanace.GetSystemInfoSync().SDKVersion
        if (Bytedanace.CompareVersion(version, '1.15.0') >= 0) {
            window["tt"].triggerGC();
        }
    }

    /**
     * 向子域发送消息
     * @param {any} _messagedata
     */
    static OpenDataContextPostMessage(_messagedata: any) {
        const version = Bytedanace.GetSystemInfoSync().SDKVersion
        if (Bytedanace.CompareVersion(version, '1.11.0') >= 0) {
            window["tt"].getOpenDataContext().postMessage(_messagedata);
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // Bytedanace.ShowModal("提示", '当前版本过低，无法使用该功能，请升级到最新版本后重试。');
        }
    }

    /**
     * 对用户托管数据进行写数据操作。允许同时写多组 KV 数据
     * @param {any} _kvDataList kv数据
     */
    static UploadUserCloudData(_kvDataList: any) {
        const version = Bytedanace.GetSystemInfoSync().SDKVersion
        if (Bytedanace.CompareVersion(version, '1.11.0') >= 0) {
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

            window["tt"].setUserCloudStorage(userdata);
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // Bytedanace.ShowModal("提示", '当前版本过低，无法使用该功能，请升级到最新版本后重试。');
        }
    }

    /**
     * 创建一个banner广告
     * @param {string} _adUnitId 广告id
     * @param {number} _left 左边位置
     * @param {number} _top 顶部位置
     * @param {number} _width 宽度
     * @param {number} _height 高度
     */
    static CreateBannerAd(_adUnitId: string, _left: number, _top: number, _width: number, _height: number) {
        const version = Bytedanace.GetSystemInfoSync().SDKVersion;
        const appName = Bytedanace.GetSystemInfoSync().appName;
        // Bytedanace.GetSystemInfoSync().appName == 'Douyin'
        if (appName != 'Douyin' && Bytedanace.CompareVersion(version, '1.3.0') >= 0) {
            let banner = window["tt"].createBannerAd({
                adUnitId: _adUnitId,
                style: {
                    left: _left,
                    top: _top,
                    width: _width,
                    height: _height
                },
                adIntervals: 30,
            })

            return banner;
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // Bytedanace.ShowModal("提示", '当前版本过低，无法使用该功能，请升级到最新版本后重试。');
            return null;
        }
    }

    /**
     * 创建视频广告
     * @param {string} _adUnitId 广告id
     */
    static CreateRewardedVideoAd(_adUnitId: string) {
        const version = Bytedanace.GetSystemInfoSync().SDKVersion
        console.log("CreateRewardedVideoAd version", version);
        if (Bytedanace.CompareVersion(version, '1.3.0') >= 0) {
            console.log("CreateRewardedVideoAd ");
            let rewardedVideoAd = window["tt"].createRewardedVideoAd({
                adUnitId: _adUnitId
            })
            return rewardedVideoAd;
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // Bytedanace.ShowModal("提示", '当前版本过低，无法使用该功能，请升级到最新版本后重试。');
            return null;
        }
    }

    /**
     * 创建插屏广告
     * @param {string} _adUnitId 广告id
     */
    static CreateInterstitialAd(_adUnitId: string) {
        const version = Bytedanace.GetSystemInfoSync().SDKVersion
        if (Bytedanace.CompareVersion(version, '1.3.0') >= 0) {
            let interstitialAd = window["tt"].createInterstitialAd({
                adUnitId: _adUnitId
            })

            return interstitialAd;
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // Bytedanace.ShowModal("提示", '当前版本过低，无法使用该功能，请升级到最新版本后重试。');
            return null;
        }
    }

    /**
     * 预览图片
     * @param {string} _imageUrl 图片地址
     */
    static PreviewImage(_imageUrl: string) {

        return new Promise((resolve, reject) => {
            window["tt"].previewImage({
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
        const version = Bytedanace.GetSystemInfoSync().SDKVersion
        if (Bytedanace.CompareVersion(version, '2.6.0') >= 0) {
            window["tt"].vibrateShort({
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
            // Bytedanace.ShowModal("提示", '当前版本过低，无法使用该功能，请升级到最新版本后重试。');
            _onFail();
        }

    }

    /**
     * 游戏录屏开始
     */
    static GameRecorderStart(_onStart: Function = null) {
        const version = Bytedanace.GetSystemInfoSync().SDKVersion
        if (Bytedanace.CompareVersion(version, '1.0.0') >= 0) {
            let systemInfo = Bytedanace.GetSystemInfoSync();
            const screenWidth = systemInfo.screenWidth;
            const screenHeight = systemInfo.screenHeight;
            const recorder = window["tt"].getGameRecorderManager();
            // var maskInfo = recorder.getMark();
            // var x = (screenWidth - maskInfo.markWidth) / 2;
            // var y = (screenHeight - maskInfo.markHeight) / 2;
            // console.log("maskInfo",maskInfo);

            recorder.onStart((res) => {
                console.log("录屏开始");
                // do something;
                if (_onStart) {
                    _onStart();
                }
            });

            recorder.onError((res) => {
                console.log("录屏错误 errMsg", res.errMsg);
            })

            recorder.onInterruptionBegin(() => {
                console.log("录屏中断");
                recorder.pause();
            })

            recorder.onInterruptionEnd(() => {
                console.log("录屏结束");
                recorder.resume();
            })

            //添加水印并且居中处理
            recorder.start({
                duration: 300,
            });

        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // Bytedanace.ShowModal("提示", '当前版本过低，无法使用该功能，请升级到最新版本后重试。');
            return null;
        }
    }

    /**
     * 游戏录屏暂停
     */
    static GameRecorderPause(_onPause: Function = null) {
        const version = Bytedanace.GetSystemInfoSync().SDKVersion
        if (Bytedanace.CompareVersion(version, '1.6.1') >= 0) {
            window["tt"].getGameRecorderManager().onPause(() => {
                console.log("录屏暂停");
                // do something;
                if (_onPause) {
                    _onPause();
                }
            })
            window["tt"].getGameRecorderManager().pause();
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // Bytedanace.ShowModal("提示", '当前版本过低，无法使用该功能，请升级到最新版本后重试。');
            return null;
        }
    }

    /**
     * 游戏录屏恢复
     */
    static GameRecorderResume(_onResume: Function = null) {
        const version = Bytedanace.GetSystemInfoSync().SDKVersion
        if (Bytedanace.CompareVersion(version, '1.6.1') >= 0) {
            window["tt"].getGameRecorderManager().onResume(() => {
                console.log("录屏恢复");
                // do something;
                if (_onResume) {
                    _onResume();
                }
            })
            window["tt"].getGameRecorderManager().resume();

        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // Bytedanace.ShowModal("提示", '当前版本过低，无法使用该功能，请升级到最新版本后重试。');
            return null;
        }
    }

    /**
     * 游戏录屏停止
     */
    static GameRecorderStop(_onStop: Function = null) {
        const version = Bytedanace.GetSystemInfoSync().SDKVersion
        if (Bytedanace.CompareVersion(version, '1.0.0') >= 0) {
            console.log("GameRecorderStop");
            window["tt"].getGameRecorderManager().onStop((res) => {
                console.log("录屏停止");
                // do something;
                if (_onStop) {
                    _onStop(res);
                }
            });

            window["tt"].getGameRecorderManager().stop();
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // Bytedanace.ShowModal("提示", '当前版本过低，无法使用该功能，请升级到最新版本后重试。');
            return null;
        }
    }


    /**
     * 创建音频实例
     * @param {string} _audioUrl 音频地址
     * @param {number} _startTime  音频开始时间
     * @param {boolean} _loop   音频循环
     */
    static CreateInnerAudioContext(_audioUrl: string, _startTime: number = 0, _loop: boolean = false) {
        const version = Bytedanace.GetSystemInfoSync().SDKVersion
        if (Bytedanace.CompareVersion(version, '1.0.0') >= 0) {
            const innerAudioContext = window["tt"].createInnerAudioContext();
            innerAudioContext.startTime = _startTime;
            innerAudioContext.loop = _loop;
            innerAudioContext.src = _audioUrl;

            return innerAudioContext;
        } else {
            // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
            // Bytedanace.ShowModal("提示", '当前版本过低，无法使用该功能，请升级到最新版本后重试。');
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
        const version = Bytedanace.GetSystemInfoSync().SDKVersion
        if (Bytedanace.CompareVersion(version, '1.33.0') >= 0) {
            window["tt"].navigateToMiniProgram(
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
            // Bytedanace.ShowModal("提示", '当前版本过低，无法使用该功能，请升级到最新版本后重试。');
            if (_onFail) {
                _onFail();
            }
        }

    }


    /**
    * 发送一个请求
    * @param {string} _url  设置请求响应的URL, 例如： http://xxxx/xxx.php
    * @param {string} _data  发送请求数据转换为字符串， 格式：pid=10003&appid=cycckhlb&appChannel=zijie
    * 
    * @param {Function} _cbSuccess 请求成功回调函数，函数格式：success(data)
    * @param {Function} _cbFail 请求失败回调函数 ,函数格式： fail(_info)
    * 
    * @param {string} _mothed 请求方式， 'GET', 'POST'
    * @param {number} _retry 超时重连次数
    * @param {number} _timeout 超时时间设置 (超时时间在配置文件里面设置，此处无效)
    * 
    */
    static HttpRequest(_url: string, _data: string, _cbSuccess: Function, _cbFail: Function, _mothed: string = 'GET', _retry: number = 3, _timeout: number = 1000) {

        window["tt"].request({
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
        window["tt"].showModal({
            title: _title,
            content: _content
        })
    }
}