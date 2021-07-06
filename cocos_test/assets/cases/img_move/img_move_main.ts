// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class img_move_main extends cc.Component {

    @property(cc.Graphics)
    Draw: cc.Graphics = null;

    @property(cc.Sprite)
    Img_Item:cc.Sprite = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        console.log("Img_Item",this.Img_Item);
        //监听触摸事件
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchEnd, this);
    }

    // update (dt) {}

    onTouchStart(event:cc.Touch) {

    }

    onTouchMove(event:cc.Touch) {
        this.Draw.clear();
        let worldPos = this.node.convertToWorldSpaceAR(cc.v2());
        this.Draw.moveTo(event.getStartLocation().x - worldPos.x, event.getStartLocation().y - worldPos.y)
        this.Draw.lineTo(event.getLocation().x - worldPos.x, event.getLocation().y - worldPos.y)
        this.Draw.stroke();
    }

    onTouchEnd(event:cc.Touch) {
        // this.Draw.clear();

    }
}
