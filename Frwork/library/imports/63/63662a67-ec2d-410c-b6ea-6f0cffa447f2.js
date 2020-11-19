"use strict";
cc._RF.push(module, '63662pn7C1BDLbqbwz/pEfy', 'AudioManage');
// scripts/manage/AudioManage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../utils/Utils");
exports.ResMusics = {
    Sound_Click: "sound_click",
    Sound_Coins: "sound_coins",
    Sound_MoveEnd: "sound_moveend",
    Sound_Success: "sound_success",
    Sound_Collision: "sound_collision",
};
var AudioManage = /** @class */ (function () {
    /**
     * 构造函数
     */
    function AudioManage() {
        this._saveKey = "feipaiqieshuiguoaudio2020041701"; //配置存储key
        this.m_AudioCilps = new Map();
        this.m_AudioConfig = null; //配置记录着音乐和音效的开关
        //读取配置
        this.LoadAudioConfig();
    }
    AudioManage.getInstance = function () {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new AudioManage());
        return this._instance;
    };
    /**
     * 加载音乐配置
     */
    AudioManage.prototype.LoadAudioConfig = function () {
        var data = cc.sys.localStorage.getItem(this._saveKey);
        if (!data) {
            this.m_AudioConfig = {
                Music: true,
                Sound: true
            };
            this.SaveAudioConfig();
        }
        else {
            this.m_AudioConfig = JSON.parse(data);
        }
        // this.m_AudioConfig = JSON.parse(cc.sys.localStorage.getItem(this._saveKey));
        // //没有
        // if (!this.m_AudioConfig) {
        //     this.SaveAudioConfig();
        // }
    };
    /**
     * 保存音乐配置
     */
    AudioManage.prototype.SaveAudioConfig = function () {
        cc.sys.localStorage.setItem(this._saveKey, JSON.stringify(this.m_AudioConfig));
    };
    /**
     * 设置音乐开关
     * @param {boolean} _switch
     */
    AudioManage.prototype.SetMusicSwitch = function (_switch) {
        this.m_AudioConfig.Music = _switch;
        this.SaveAudioConfig();
        if (_switch) {
            //恢复音乐
            this.ResumeMusic();
        }
        else {
            //暂停播放音乐
            this.PauseMusic();
        }
    };
    /**
     * 返回音乐开关
     */
    AudioManage.prototype.GetMusicSwitch = function () {
        return this.m_AudioConfig.Music;
    };
    /**
     * 设置音效开关
     * @param {boolean} _switch
     */
    AudioManage.prototype.SetSoundSwitch = function (_switch) {
        this.m_AudioConfig.Sound = _switch;
        this.SaveAudioConfig();
        if (!_switch) {
            //停止播放音乐
            this.StopAllSound();
        }
    };
    /**
     * 返回音效开关
     */
    AudioManage.prototype.GetSoundSwitch = function () {
        return this.m_AudioConfig.Sound;
    };
    /**
     * 初始化本地音乐
     * @param {string} _pathUrl //资源路径
     * @param {Function} _callFun  //资源加载成功回调函数
     */
    AudioManage.prototype.InitResAudio = function (_pathUrl, _callFun) {
        //加载音乐
        var musicarray = [], loadresnum = 0;
        for (var key in exports.ResMusics) {
            //往数组中放值
            musicarray.push(exports.ResMusics[key]);
        }
        // Utils.CCLog('musicarray', musicarray);
        for (var index = 0; index < musicarray.length; index++) {
            this.LoadResAudioCilp(_pathUrl, musicarray[index], function () {
                loadresnum++;
                //资源加载完毕
                if (musicarray.length == loadresnum) {
                    if (_callFun) {
                        _callFun();
                    }
                }
            });
        }
    };
    /**
     * 加载本地音乐
     * @param {string} _pathUrl //资源路径
     * @param {string} _musicname
     * @param {Function} _callFun
     */
    AudioManage.prototype.LoadResAudioCilp = function (_pathUrl, _musicname, _callFun) {
        var _this = this;
        if (_callFun === void 0) { _callFun = null; }
        var audiourl = _pathUrl + "/" + _musicname;
        cc.loader.loadRes(audiourl, function (err, audio) {
            if (err) {
                console.error(err);
                return;
            }
            _this.m_AudioCilps.set(_musicname, audio);
            if (_callFun) {
                _callFun(audio);
            }
        });
    };
    /**
     * 网络远程预加载音效
     * @param {string} _url
     * @param {string} _musicname
     * @param {Function} _callFun
     */
    AudioManage.prototype.LoadNetAudioCilp = function (_url, _musicname, _callFun) {
        var _this = this;
        if (_callFun === void 0) { _callFun = null; }
        var audiourl = _url + _musicname;
        cc.loader.load(audiourl, function (err, audio) {
            if (err) {
                console.error(err);
                return;
            }
            _this.m_AudioCilps.set(_musicname, audio);
            if (_callFun) {
                _callFun(audio);
            }
        });
    };
    /**
     * 播放背景音乐
     * @param {string} _musicname
     * @param {boolean} _isLoop
     */
    AudioManage.prototype.PlayMusic = function (_musicName, _isLoop) {
        if (_isLoop === void 0) { _isLoop = true; }
        //音乐开关打开
        if (!this.m_AudioConfig.Music) {
            return;
        }
        var audio = this.m_AudioCilps.get(_musicName);
        if (audio) {
            //停止当前音乐
            this.StopMusic();
            return cc.audioEngine.playMusic(audio, _isLoop);
        }
        else {
            Utils_1.default.CCLog('audio resources not load _musicname', _musicName);
        }
    };
    /**
     * 播放音效
     * @param {string} _soundname
     */
    AudioManage.prototype.PlaySound = function (_soundname, _isLoop) {
        if (_isLoop === void 0) { _isLoop = false; }
        //音效开关打开
        if (!this.m_AudioConfig.Sound) {
            return;
        }
        var audio = this.m_AudioCilps.get(_soundname);
        if (audio) {
            return cc.audioEngine.playEffect(audio, _isLoop);
        }
        else {
            Utils_1.default.CCLog('audio resources not load _soundname', _soundname);
        }
    };
    /**
     * 停止背景音乐
     */
    AudioManage.prototype.StopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    /**
     * 暂停背景音乐
     */
    AudioManage.prototype.PauseMusic = function () {
        cc.audioEngine.pauseMusic();
    };
    /**
     * 恢复背景音乐
     */
    AudioManage.prototype.ResumeMusic = function () {
        cc.audioEngine.resumeMusic();
    };
    /**
     * 停止指定音效
     */
    AudioManage.prototype.StopSound = function (_soundID) {
        cc.audioEngine.stopEffect(_soundID);
    };
    /**
     * 停止全部音效
     */
    AudioManage.prototype.StopAllSound = function () {
        cc.audioEngine.stopAllEffects();
    };
    return AudioManage;
}());
exports.default = AudioManage;

cc._RF.pop();