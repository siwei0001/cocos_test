// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class casesList extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}

    onClick(eventHandler: cc.Component.EventHandler, customEventData: any) {
        let nodeName = eventHandler.target.name;
        switch (nodeName) {
            case "btn_shader_autoAtlas":
                cc.director.loadScene("shader_autoAtlas");
                break;
            case "btn_spine_autoBatch":
                cc.director.loadScene("spine_autoBatch");
                break;

            default:
                break;
        }
    }
}
