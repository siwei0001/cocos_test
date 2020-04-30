// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import CustomAssembler from "./CustomAssembler";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CustomRender extends cc.RenderComponent {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    _assembler:any = null;

    ctor () {
        // 顶点数据装配器
        this._assembler = null;
        
    }

    _resetAssembler () {
        CustomRender.init(this);
        
        this._updateColor();
        this.setVertsDirty();
    }

    // update (dt) {}
}
