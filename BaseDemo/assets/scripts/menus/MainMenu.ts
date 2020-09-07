// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseLayer from "../base/BaseLayer";
import AdvServer from "../platform/AdvServer";
import MenuManage, { BaseMenu } from "../manage/MenuManage";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainMenu extends BaseLayer {

    // onLoad () {}

    start() {
        // this.node.on()

    }

    // update (dt) {}

    OnClick(event) {
        console.log("OnClick event", event);
        if (event.target.name == "Btn_ADMenu") {
            MenuManage.getInstance().ShowMenu(BaseMenu.ADMenu);
        }
    }
}
