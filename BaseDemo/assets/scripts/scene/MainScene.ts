// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import MenuManage, { BaseMenu } from "../manage/MenuManage";
import AdvServer from "../platform/AdvServer";
import TgServer from "../platform/TgServer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainScene extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        AdvServer.getInstance().InitAdvServer();
        MenuManage.getInstance().ShowMenu(BaseMenu.MainMenu);
        TgServer.getInstance().InitTgServer(() => {

        }, () => {

        });
    }

    // update (dt) {}
}
