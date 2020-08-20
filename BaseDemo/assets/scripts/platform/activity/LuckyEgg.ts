import Utils from "../../utils/Utils";
import AdvServer from "../AdvServer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LuckyEgg extends cc.Component {

    @property(cc.ProgressBar)
    LoadProgressBar: cc.ProgressBar = null;

    @property(cc.Node)
    Under: cc.Node = null;

    _m_Progress = 0;
    _m_GetPrize = false;

    _m_LastTime = 0.5;

    _m_BannerPregress = 0.8;

    _m_CloseCallFun = null;
    _m_IssueCallFun = null;


    _m_Update = false;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    InitData(_closeCallFun: Function, _issueCallFun: Function) {
        this._m_CloseCallFun = _closeCallFun;
        this._m_IssueCallFun = _issueCallFun;

        this._m_BannerPregress = Utils.RandNum(90, 95) / 100;
        this._m_Update = true;
    }

    update(dt) {
        if (this._m_Update) {
            this.LoadProgressBar.progress = this._m_Progress;
            this._m_LastTime -= dt;
            if (this._m_Progress > 0 && this._m_LastTime < 0) {
                this._m_LastTime = 0.5;
                this._m_Progress -= 0.02;
            }
        }
    }

    CloseMenu() {
        if (this._m_CloseCallFun) {
            this._m_CloseCallFun();
        }

        this.node.destroy();
    }
    /**
     * 点击事件
     * @param {Object} event 
     */
    OnClick(event) {
        if (event.target.name == "Btn_Back") {
            this.CloseMenu();
        }
        else if (event.target.name == "Btn_Click") {
            if (this._m_GetPrize) {
                return;
                // 1点击返回按钮 进行正常结算  
                // 2进度条长度为100%  
                // 3进度条前60%点击砸开按钮增加10%  隔开点击0.5秒缩回2%
                // 4进度条后百分之40 点击增加5%  在百分之90-95之间弹出banner广告误触
                // 5：banner广告弹出  砸开和其他页面内容 （除 关闭按钮和标题）按钮向上移动
            }
            if (this._m_Progress < 0.6) {
                this._m_Progress += 0.1;
            }
            else {
                this._m_Progress += 0.05;
            }

            this._m_LastTime = 0.5;

            if (this._m_Progress >= this._m_BannerPregress) {
                //显示微信banner
                AdvServer.getInstance().ShowWeChatBanner(() => {
                    //移动按钮
                    // this.Under.setPosition(0, 220);

                    if (!this._m_GetPrize) {
                        this._m_GetPrize = true;
                        this._m_Update = false;
                        this.LoadProgressBar.progress = 1;

                        setTimeout(() => {
                            if (this._m_IssueCallFun) {
                                this._m_IssueCallFun();
                            }
                            this.CloseMenu();
                        }, 500)
                    }
                });
            }
        }

    }
}
