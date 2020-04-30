// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class CustomAssembler extends cc.Assembler {

    _renderComp = null;
    constructor () {
        super()
        // this._extendNative && this._extendNative();
    }

    init (renderComp) {
        this._renderComp = renderComp;
    }
    
    updateRenderData (comp) {

    }

    fillBuffers (comp, renderer) {
    }
    
    getVfmt () {
        // return vfmtPosUvColor;
        
    }

    register(renderCompCtor, assembler) {
        renderCompCtor.__assembler__ = assembler;
    }

    static init(renderComp) {
        let renderCompCtor = renderComp.constructor;
        let assemblerCtor = renderCompCtor.__assembler__;
        while (!assemblerCtor) {
            renderCompCtor = renderCompCtor.$super;
            if (!renderCompCtor) {
                cc.warn(`Can not find assembler for render component : [${cc.js.getClassName(renderComp)}]`);
                return;
            }
            assemblerCtor = renderCompCtor.__assembler__;
        }
        if (assemblerCtor.getConstructor) {
            assemblerCtor = assemblerCtor.getConstructor(renderComp);
        }

        // if (!renderComp._assembler || renderComp._assembler.constructor !== assemblerCtor) {
        //     let assembler = assemblerPool.get(assemblerCtor);
        //     assembler.init(renderComp);
        //     renderComp._assembler = assembler;
        // }
    }

    // update (dt) {}
}

