// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseLayer from "../base/BaseLayer";
import MenuManage, { BaseMenu } from "../manage/MenuManage";
import TgPromoteServer from "../platform/TgPromoteServer";

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
        else if(event.target.name == "Btn_InitPromote"){
            //初始化推广服务
            TgPromoteServer.getInstance().InitTgPromoteServer();
        }
        else if(event.target.name == "Btn_DestroyPromote"){
            //注销推广服务
            TgPromoteServer.getInstance().DestroyTgPromoteServer();
        }
        else if(event.target.name == "Btn_OnePromote"){

        }
        else if(event.target.name == "Btn_ColPromote"){

        }
        else if(event.target.name == "Btn_RowPromote"){

        }
        else if(event.target.name == "Btn_CluingPromote"){

        }
        else if(event.target.name == "Btn_ScreenPromote_1"){

        }
        else if(event.target.name == "Btn_ScreenPromote_2"){

        }
        else if(event.target.name == "Btn_InsterPromote"){

        }
    }
}
