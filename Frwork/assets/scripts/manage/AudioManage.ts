import Utils from "../utils/Utils";

export var ResMusics = {
    Sound_Click: "sound_click",
    Sound_Coins: "sound_coins",
    Sound_MoveEnd: "sound_moveend",
    Sound_Success: "sound_success",
    Sound_Collision: "sound_collision",
}

export default class AudioManage {

    private static _instance: AudioManage;
    private _saveKey: string = "feipaiqieshuiguoaudio2020041701"; //配置存储key

    private m_AudioCilps: Map<string, any> = new Map();
    private m_AudioConfig: any = null;  //配置记录着音乐和音效的开关

    /**
     * 构造函数
     */
    constructor() {
        //读取配置
        this.LoadAudioConfig();
    }

    public static getInstance(): AudioManage {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new AudioManage())
        return this._instance
    }

    /**
     * 加载音乐配置
     */
    LoadAudioConfig() {
        let data = cc.sys.localStorage.getItem(this._saveKey)
        if (!data) {
            this.m_AudioConfig = {
                Music: true,
                Sound: true
            }
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
    }

    /**
     * 保存音乐配置
     */
    SaveAudioConfig() {
        cc.sys.localStorage.setItem(this._saveKey, JSON.stringify(this.m_AudioConfig));
    }

    /**
     * 设置音乐开关
     * @param {boolean} _switch 
     */
    SetMusicSwitch(_switch: boolean) {
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
    }

    /**
     * 返回音乐开关
     */
    GetMusicSwitch() {
        return this.m_AudioConfig.Music;
    }

    /**
     * 设置音效开关
     * @param {boolean} _switch 
     */
    SetSoundSwitch(_switch: boolean) {
        this.m_AudioConfig.Sound = _switch;
        this.SaveAudioConfig();

        if (!_switch) {
            //停止播放音乐
            this.StopAllSound();
        }
    }

    /**
     * 返回音效开关
     */
    GetSoundSwitch() {
        return this.m_AudioConfig.Sound;
    }

    /**
     * 初始化本地音乐
     * @param {string} _pathUrl //资源路径
     * @param {Function} _callFun  //资源加载成功回调函数
     */
    InitResAudio(_pathUrl: string, _callFun: Function) {
        //加载音乐
        let musicarray = [],
            loadresnum = 0;
        for (let key in ResMusics) {
            //往数组中放值
            musicarray.push(ResMusics[key]);
        }
        // Utils.CCLog('musicarray', musicarray);

        for (let index = 0; index < musicarray.length; index++) {

            this.LoadResAudioCilp(_pathUrl, musicarray[index], () => {
                loadresnum++;
                //资源加载完毕
                if (musicarray.length == loadresnum) {
                    if (_callFun) {
                        _callFun();
                    }
                }
            })
        }
    }

    /**
     * 加载本地音乐
     * @param {string} _pathUrl //资源路径
     * @param {string} _musicname
     * @param {Function} _callFun 
     */
    LoadResAudioCilp(_pathUrl, _musicname, _callFun = null) {
        let audiourl = _pathUrl + "/" + _musicname;
        cc.loader.loadRes(audiourl, (err, audio) => {
            if (err) {
                console.error(err);
                return;
            }

            this.m_AudioCilps.set(_musicname, audio);
            if (_callFun) {
                _callFun(audio);
            }
        });
    }

    /**
     * 网络远程预加载音效
     * @param {string} _url 
     * @param {string} _musicname 
     * @param {Function} _callFun 
     */
    LoadNetAudioCilp(_url, _musicname, _callFun = null) {
        let audiourl = _url + _musicname;
        cc.loader.load(audiourl, (err, audio) => {
            if (err) {
                console.error(err);
                return;
            }
            this.m_AudioCilps.set(_musicname, audio);
            if (_callFun) {
                _callFun(audio);
            }
        });
    }

    /**
     * 播放背景音乐
     * @param {string} _musicname 
     * @param {boolean} _isLoop
     */
    PlayMusic(_musicName, _isLoop: boolean = true): number {

        //音乐开关打开
        if (!this.m_AudioConfig.Music) {
            return;
        }

        let audio = this.m_AudioCilps.get(_musicName);
        if (audio) {
            //停止当前音乐
            this.StopMusic();

            return cc.audioEngine.playMusic(audio, _isLoop);
        }
        else {
            Utils.CCLog('audio resources not load _musicname', _musicName);
        }
    }

    /**
     * 播放音效
     * @param {string} _soundname 
     */
    PlaySound(_soundname: string, _isLoop: boolean = false): number {

        //音效开关打开
        if (!this.m_AudioConfig.Sound) {
            return;
        }

        let audio = this.m_AudioCilps.get(_soundname);
        if (audio) {
            return cc.audioEngine.playEffect(audio, _isLoop);
        }
        else {
            Utils.CCLog('audio resources not load _soundname', _soundname);
        }
    }

    /**
     * 停止背景音乐
     */
    StopMusic() {
        cc.audioEngine.stopMusic();
    }

    /**
     * 暂停背景音乐
     */
    PauseMusic() {
        cc.audioEngine.pauseMusic();
    }

    /**
     * 恢复背景音乐
     */
    ResumeMusic() {
        cc.audioEngine.resumeMusic();
    }

    /**
     * 停止指定音效
     */
    StopSound(_soundID:number) {
        cc.audioEngine.stopEffect(_soundID);
    }

    /**
     * 停止全部音效
     */
    StopAllSound() {
        cc.audioEngine.stopAllEffects();
    }

}