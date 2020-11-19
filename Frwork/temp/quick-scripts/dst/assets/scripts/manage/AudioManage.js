
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manage/AudioManage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZS9BdWRpb01hbmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFtQztBQUV4QixRQUFBLFNBQVMsR0FBRztJQUNuQixXQUFXLEVBQUUsYUFBYTtJQUMxQixXQUFXLEVBQUUsYUFBYTtJQUMxQixhQUFhLEVBQUUsZUFBZTtJQUM5QixhQUFhLEVBQUUsZUFBZTtJQUM5QixlQUFlLEVBQUUsaUJBQWlCO0NBQ3JDLENBQUE7QUFFRDtJQVFJOztPQUVHO0lBQ0g7UUFSUSxhQUFRLEdBQVcsaUNBQWlDLENBQUMsQ0FBQyxTQUFTO1FBRS9ELGlCQUFZLEdBQXFCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDM0Msa0JBQWEsR0FBUSxJQUFJLENBQUMsQ0FBRSxlQUFlO1FBTS9DLE1BQU07UUFDTixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVhLHVCQUFXLEdBQXpCO1FBQ0ksdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsQ0FBQTtRQUN0RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gscUNBQWUsR0FBZjtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLElBQUksQ0FBQyxhQUFhLEdBQUc7Z0JBQ2pCLEtBQUssRUFBRSxJQUFJO2dCQUNYLEtBQUssRUFBRSxJQUFJO2FBQ2QsQ0FBQTtZQUNELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjthQUNJO1lBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxD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QUFFLE9BQXdCO1FBQXhCLHdCQUFBLEVBQUEsZUFBd0I7UUFFbEQsUUFBUTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtZQUMzQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLEtBQUssRUFBRTtZQUNQLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3BEO2FBQ0k7WUFDRCxlQUFLLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0JBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0NBQVUsR0FBVjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUNBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0JBQVMsR0FBVCxVQUFVLFFBQWU7UUFDckIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0NBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0F2UEEsQUF1UEMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IHZhciBSZXNNdXNpY3MgPSB7XG4gICAgU291bmRfQ2xpY2s6IFwic291bmRfY2xpY2tcIixcbiAgICBTb3VuZF9Db2luczogXCJzb3VuZF9jb2luc1wiLFxuICAgIFNvdW5kX01vdmVFbmQ6IFwic291bmRfbW92ZWVuZFwiLFxuICAgIFNvdW5kX1N1Y2Nlc3M6IFwic291bmRfc3VjY2Vzc1wiLFxuICAgIFNvdW5kX0NvbGxpc2lvbjogXCJzb3VuZF9jb2xsaXNpb25cIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NYW5hZ2Uge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBBdWRpb01hbmFnZTtcbiAgICBwcml2YXRlIF9zYXZlS2V5OiBzdHJpbmcgPSBcImZlaXBhaXFpZXNodWlndW9hdWRpbzIwMjAwNDE3MDFcIjsgLy/phY3nva7lrZjlgqhrZXlcblxuICAgIHByaXZhdGUgbV9BdWRpb0NpbHBzOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xuICAgIHByaXZhdGUgbV9BdWRpb0NvbmZpZzogYW55ID0gbnVsbDsgIC8v6YWN572u6K6w5b2V552A6Z+z5LmQ5ZKM6Z+z5pWI55qE5byA5YWzXG5cbiAgICAvKipcbiAgICAgKiDmnoTpgKDlh73mlbBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy/or7vlj5bphY3nva5cbiAgICAgICAgdGhpcy5Mb2FkQXVkaW9Db25maWcoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEF1ZGlvTWFuYWdlIHtcbiAgICAgICAgLy8g5aaC5p6cIGluc3RhbmNlIOaYr+S4gOS4quWunuS+iyDnm7TmjqXov5Tlm57vvIwgIOWmguaenOS4jeaYryDlrp7kvovljJblkI7ov5Tlm55cbiAgICAgICAgdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IEF1ZGlvTWFuYWdlKCkpXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9vemfs+S5kOmFjee9rlxuICAgICAqL1xuICAgIExvYWRBdWRpb0NvbmZpZygpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fc2F2ZUtleSlcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLm1fQXVkaW9Db25maWcgPSB7XG4gICAgICAgICAgICAgICAgTXVzaWM6IHRydWUsXG4gICAgICAgICAgICAgICAgU291bmQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuU2F2ZUF1ZGlvQ29uZmlnKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1fQXVkaW9Db25maWcgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5tX0F1ZGlvQ29uZmlnID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fc2F2ZUtleSkpO1xuICAgICAgICAvLyAvL+ayoeaciVxuICAgICAgICAvLyBpZiAoIXRoaXMubV9BdWRpb0NvbmZpZykge1xuICAgICAgICAvLyAgICAgdGhpcy5TYXZlQXVkaW9Db25maWcoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS/neWtmOmfs+S5kOmFjee9rlxuICAgICAqL1xuICAgIFNhdmVBdWRpb0NvbmZpZygpIHtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX3NhdmVLZXksIEpTT04uc3RyaW5naWZ5KHRoaXMubV9BdWRpb0NvbmZpZykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rumfs+S5kOW8gOWFs1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gX3N3aXRjaCBcbiAgICAgKi9cbiAgICBTZXRNdXNpY1N3aXRjaChfc3dpdGNoOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubV9BdWRpb0NvbmZpZy5NdXNpYyA9IF9zd2l0Y2g7XG4gICAgICAgIHRoaXMuU2F2ZUF1ZGlvQ29uZmlnKCk7XG5cbiAgICAgICAgaWYgKF9zd2l0Y2gpIHtcbiAgICAgICAgICAgIC8v5oGi5aSN6Z+z5LmQXG4gICAgICAgICAgICB0aGlzLlJlc3VtZU11c2ljKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL+aaguWBnOaSreaUvumfs+S5kFxuICAgICAgICAgICAgdGhpcy5QYXVzZU11c2ljKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57pn7PkuZDlvIDlhbNcbiAgICAgKi9cbiAgICBHZXRNdXNpY1N3aXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubV9BdWRpb0NvbmZpZy5NdXNpYztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7pn7PmlYjlvIDlhbNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IF9zd2l0Y2ggXG4gICAgICovXG4gICAgU2V0U291bmRTd2l0Y2goX3N3aXRjaDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLm1fQXVkaW9Db25maWcuU291bmQgPSBfc3dpdGNoO1xuICAgICAgICB0aGlzLlNhdmVBdWRpb0NvbmZpZygpO1xuXG4gICAgICAgIGlmICghX3N3aXRjaCkge1xuICAgICAgICAgICAgLy/lgZzmraLmkq3mlL7pn7PkuZBcbiAgICAgICAgICAgIHRoaXMuU3RvcEFsbFNvdW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57pn7PmlYjlvIDlhbNcbiAgICAgKi9cbiAgICBHZXRTb3VuZFN3aXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubV9BdWRpb0NvbmZpZy5Tb3VuZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbmnKzlnLDpn7PkuZBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3BhdGhVcmwgLy/otYTmupDot6/lvoRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBfY2FsbEZ1biAgLy/otYTmupDliqDovb3miJDlip/lm57osIPlh73mlbBcbiAgICAgKi9cbiAgICBJbml0UmVzQXVkaW8oX3BhdGhVcmw6IHN0cmluZywgX2NhbGxGdW46IEZ1bmN0aW9uKSB7XG4gICAgICAgIC8v5Yqg6L296Z+z5LmQXG4gICAgICAgIGxldCBtdXNpY2FycmF5ID0gW10sXG4gICAgICAgICAgICBsb2FkcmVzbnVtID0gMDtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIFJlc011c2ljcykge1xuICAgICAgICAgICAgLy/lvoDmlbDnu4TkuK3mlL7lgLxcbiAgICAgICAgICAgIG11c2ljYXJyYXkucHVzaChSZXNNdXNpY3Nba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXRpbHMuQ0NMb2coJ211c2ljYXJyYXknLCBtdXNpY2FycmF5KTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbXVzaWNhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgdGhpcy5Mb2FkUmVzQXVkaW9DaWxwKF9wYXRoVXJsLCBtdXNpY2FycmF5W2luZGV4XSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRyZXNudW0rKztcbiAgICAgICAgICAgICAgICAvL+i1hOa6kOWKoOi9veWujOavlVxuICAgICAgICAgICAgICAgIGlmIChtdXNpY2FycmF5Lmxlbmd0aCA9PSBsb2FkcmVzbnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfY2FsbEZ1bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NhbGxGdW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb3mnKzlnLDpn7PkuZBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3BhdGhVcmwgLy/otYTmupDot6/lvoRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX211c2ljbmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IF9jYWxsRnVuIFxuICAgICAqL1xuICAgIExvYWRSZXNBdWRpb0NpbHAoX3BhdGhVcmwsIF9tdXNpY25hbWUsIF9jYWxsRnVuID0gbnVsbCkge1xuICAgICAgICBsZXQgYXVkaW91cmwgPSBfcGF0aFVybCArIFwiL1wiICsgX211c2ljbmFtZTtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoYXVkaW91cmwsIChlcnIsIGF1ZGlvKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5tX0F1ZGlvQ2lscHMuc2V0KF9tdXNpY25hbWUsIGF1ZGlvKTtcbiAgICAgICAgICAgIGlmIChfY2FsbEZ1bikge1xuICAgICAgICAgICAgICAgIF9jYWxsRnVuKGF1ZGlvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog572R57uc6L+c56iL6aKE5Yqg6L296Z+z5pWIXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF91cmwgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF9tdXNpY25hbWUgXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gX2NhbGxGdW4gXG4gICAgICovXG4gICAgTG9hZE5ldEF1ZGlvQ2lscChfdXJsLCBfbXVzaWNuYW1lLCBfY2FsbEZ1biA9IG51bGwpIHtcbiAgICAgICAgbGV0IGF1ZGlvdXJsID0gX3VybCArIF9tdXNpY25hbWU7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkKGF1ZGlvdXJsLCAoZXJyLCBhdWRpbykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1fQXVkaW9DaWxwcy5zZXQoX211c2ljbmFtZSwgYXVkaW8pO1xuICAgICAgICAgICAgaWYgKF9jYWxsRnVuKSB7XG4gICAgICAgICAgICAgICAgX2NhbGxGdW4oYXVkaW8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmkq3mlL7og4zmma/pn7PkuZBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX211c2ljbmFtZSBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IF9pc0xvb3BcbiAgICAgKi9cbiAgICBQbGF5TXVzaWMoX211c2ljTmFtZSwgX2lzTG9vcDogYm9vbGVhbiA9IHRydWUpOiBudW1iZXIge1xuXG4gICAgICAgIC8v6Z+z5LmQ5byA5YWz5omT5byAXG4gICAgICAgIGlmICghdGhpcy5tX0F1ZGlvQ29uZmlnLk11c2ljKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXVkaW8gPSB0aGlzLm1fQXVkaW9DaWxwcy5nZXQoX211c2ljTmFtZSk7XG4gICAgICAgIGlmIChhdWRpbykge1xuICAgICAgICAgICAgLy/lgZzmraLlvZPliY3pn7PkuZBcbiAgICAgICAgICAgIHRoaXMuU3RvcE11c2ljKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoYXVkaW8sIF9pc0xvb3ApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgVXRpbHMuQ0NMb2coJ2F1ZGlvIHJlc291cmNlcyBub3QgbG9hZCBfbXVzaWNuYW1lJywgX211c2ljTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmkq3mlL7pn7PmlYhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX3NvdW5kbmFtZSBcbiAgICAgKi9cbiAgICBQbGF5U291bmQoX3NvdW5kbmFtZTogc3RyaW5nLCBfaXNMb29wOiBib29sZWFuID0gZmFsc2UpOiBudW1iZXIge1xuXG4gICAgICAgIC8v6Z+z5pWI5byA5YWz5omT5byAXG4gICAgICAgIGlmICghdGhpcy5tX0F1ZGlvQ29uZmlnLlNvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXVkaW8gPSB0aGlzLm1fQXVkaW9DaWxwcy5nZXQoX3NvdW5kbmFtZSk7XG4gICAgICAgIGlmIChhdWRpbykge1xuICAgICAgICAgICAgcmV0dXJuIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoYXVkaW8sIF9pc0xvb3ApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgVXRpbHMuQ0NMb2coJ2F1ZGlvIHJlc291cmNlcyBub3QgbG9hZCBfc291bmRuYW1lJywgX3NvdW5kbmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlgZzmraLog4zmma/pn7PkuZBcbiAgICAgKi9cbiAgICBTdG9wTXVzaWMoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaaguWBnOiDjOaZr+mfs+S5kFxuICAgICAqL1xuICAgIFBhdXNlTXVzaWMoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmgaLlpI3og4zmma/pn7PkuZBcbiAgICAgKi9cbiAgICBSZXN1bWVNdXNpYygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lTXVzaWMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlgZzmraLmjIflrprpn7PmlYhcbiAgICAgKi9cbiAgICBTdG9wU291bmQoX3NvdW5kSUQ6bnVtYmVyKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QoX3NvdW5kSUQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWBnOatouWFqOmDqOmfs+aViFxuICAgICAqL1xuICAgIFN0b3BBbGxTb3VuZCgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcbiAgICB9XG5cbn0iXX0=