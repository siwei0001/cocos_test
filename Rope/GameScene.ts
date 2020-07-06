import Rope from './Rope';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {

    @property(cc.Prefab)
    prefabRope: cc.Prefab = null;

    @property(cc.Node)
    nodeRope: cc.Node = null;

    @property()
    fixed: boolean = false;


    _arrayRope: cc.Node[] = [];
    _canvas: cc.Graphics = null;
    _touchLocation: cc.Vec2 = cc.Vec2.ZERO;

    _touch: boolean = true;

    start() {
        let length = 12;
        let angle = 0;

        for (let index = 0; index < 32; index++) {
            let rope = cc.instantiate(this.prefabRope);
            rope.parent = this.nodeRope;
            this._arrayRope.push(rope);

            let script = rope.getComponent(Rope);
            if (index == 0) {
                script.init(0, 0, length, angle)
            } else {
                let last = this._arrayRope[index - 1].getComponent(Rope);
                script.init(last.getTargetPoint().x, last.getTargetPoint().y, length, angle - index);
            }
        }

        this.node.on("touchstart", this.onTouchMove, this);
        this.node.on("touchmove", this.onTouchMove, this);
        this.node.on("touchend", this.onTouchMove, this);

        this._canvas = this.nodeRope.getComponent(cc.Graphics);

        this.update(0);
        this._touch = false;
    }

    update(dt) {
        if (!this._touch) {
            return;
        }

        for (let index = this._arrayRope.length - 1; index >= 0; index--) {
            let script = this._arrayRope[index].getComponent(Rope);
            if (index == this._arrayRope.length - 1) {
                script.calcSelf(this._touchLocation);
            } else {
                let last = this._arrayRope[index + 1].getComponent(Rope);
                script.calcSelf(last.getSelfPoint());
            }
            script.calcTarget();
        }

        if (this.fixed) {
            this._arrayRope[0].getComponent(Rope).setSelfPoint(cc.Vec2.ZERO);

            for (let index = 1; index < this._arrayRope.length; index++) {
                let script = this._arrayRope[index].getComponent(Rope);
                let last = this._arrayRope[index - 1].getComponent(Rope);
                script.calcSelf(last.getSelfPoint());
                script.calcTarget();
            }
        }

        this._canvas.clear();
        for (let index = 1; index < this._arrayRope.length; index++) {
            let script = this._arrayRope[index].getComponent(Rope);

            let ptThis = script.getSelfPoint();
            let ptTarget = script.getTargetPoint();
            this._canvas.moveTo(ptThis.x, ptThis.y);
            this._canvas.lineTo(ptTarget.x, ptTarget.y);
            this._canvas.circle(ptThis.x, ptThis.y, 1);
            this._canvas.stroke();
        }
    }

    onTouchMove(event: cc.Event.EventTouch) {
        this._touch = true;
        this._touchLocation = this.node.convertToNodeSpaceAR(event.getLocation());
    }

    onTouchEnd(event: cc.Event.EventTouch) {
        this._touch = false;
    }
}