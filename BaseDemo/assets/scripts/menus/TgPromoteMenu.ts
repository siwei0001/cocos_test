// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseLayer from "../base/BaseLayer";
import MenuManage, { BaseMenu } from "../manage/MenuManage";
import TgPromoteServer, { LayoutType } from "../platform/TgPromoteServer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TgPromoteMenu extends BaseLayer {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}

    OnClick(event) {
        console.log("OnClick event", event);

        if (event.target.name == "Btn_Back") {
            MenuManage.getInstance().RmoveMenu(BaseMenu.TgPromoteMenu)
        }
        else if (event.target.name == "Btn_InitPromote") {
            //初始化推广服务
            TgPromoteServer.getInstance().InitTgPromoteServer();
        }
        else if (event.target.name == "Btn_DestroyPromote") {
            //注销推广服务
            TgPromoteServer.getInstance().DestroyTgPromoteServer();
        }
        else if (event.target.name == "Btn_OnePromote") {
            TgPromoteServer.getInstance().ShowPromote({ parent: this.node });
        }
        else if (event.target.name == "Btn_ColPromote") {
            TgPromoteServer.getInstance().ShowPromote({
                parent: this.node,
                style: { width: 120, height: 520, left: 100, top: 0 },
                PromoteLayout: { type: LayoutType.VERTICAL, spacingY: 10 },
                promoteAdv: { num: 4, start: 0, rand: true }
            });
        }
        else if (event.target.name == "Btn_RowPromote") {
            TgPromoteServer.getInstance().ShowPromote({
                parent: this.node,
                style: { width: 720, height: 120, left: 0, top: 0 },
                PromoteLayout: { type: LayoutType.HORIZONTAL, spacingX: 10 },
                promoteAdv: { num: 10, start: 0, rand: true },
            });
        }
        else if (event.target.name == "Btn_CluingPromote") {
            // TgPromoteServer.getInstance().ShowPromote({
            //     parent: this.node,
            //     style: { width: 720, height: 120, left: 0, top: 0 },
            //     PromoteLayout: { type: LayoutType.HORIZONTAL, spacingX: 10 },
            //     promoteAdv: { num: 0, start: 0, rand: true },
            //     autoscrolle: true,
            // });

            TgPromoteServer.getInstance().ShowPromote({
                parent: this.node,
                style: { width: 400, height: 400, left: 0, top: 0 },
                PromoteLayout: { type: LayoutType.Grid, spacingX: 10, spacingY: 10 },
                promoteAdv: { num: 0, start: 0, rand: true },
                autoscrolle: true,
            });
        }
        else if (event.target.name == "Btn_DrawerPromote") {
            TgPromoteServer.getInstance().ShowDrawer();
        }
        else if (event.target.name == "Btn_ScreenPromote_1") {

        }
        else if (event.target.name == "Btn_ScreenPromote_2") {

        }
        else if (event.target.name == "Btn_InsterPromote") {

        }
        else if (event.target.name == "Btn_RmovePromote") {
            //移除当前界面推广
            TgPromoteServer.getInstance().RmovePromote(this.node);

        }

    }
}
