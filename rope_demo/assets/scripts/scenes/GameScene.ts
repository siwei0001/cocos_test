// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    Rope_1: cc.Node = null;

    @property(cc.Node)
    Rope_3: cc.Node = null;

    @property(cc.Graphics)
    Draw: cc.Graphics = null;

    _m_RopeIndex: number = 0;
    _m_Rope: cc.Node = null;

    _m_Update: boolean = false;

    _m_Touch: boolean = false;

    _m_Force: cc.Vec2 = cc.v2();
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        // manager.debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        //     cc.PhysicsManager.DrawBits.e_jointBit |
        //     cc.PhysicsManager.DrawBits.e_shapeBit;
    }

    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            console.log("按下");
            if (this._m_RopeIndex == 0) {
                this._m_Rope = this.Rope_1;
                this._m_RopeIndex = 1;
            }
            else {
                this._m_Rope = this.Rope_3;
                this._m_RopeIndex = 0;
            }
            this._m_Force.x = 10000;
            this._m_Force.y = 10000;
            this._m_Touch = true;
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            console.log("抬起");
            this._m_Rope.getComponent(cc.RigidBody).applyForce(this._m_Force, cc.v2(0, 0), true);
            this._m_Touch = false;
            this._m_Force.x = 0;
            this._m_Force.y = 0;
            // this._m_Rope.getComponent(cc.RigidBody).
        }, this);
    }

    update(dt) {
        if (this._m_Touch) {
            this._m_Force.x += 3000;
            this._m_Force.y += 3000;
        }

        this.Draw.clear();
        this.Draw.moveTo(this.Rope_1.x, this.Rope_1.y);
        let pos = this.GetCenterPos(this.Rope_1.position, this.Rope_3.position, 300);
        let length = this.Rope_3.position.sub(this.Rope_1.position).mag();
        if (length > 200) {
            this.Draw.lineTo(this.Rope_3.x, this.Rope_3.y);
        }
        else {
            this.Draw.bezierCurveTo(this.Rope_1.x, this.Rope_1.y, pos.x, pos.y, this.Rope_3.x, this.Rope_3.y);
        }
        this.Draw.stroke();
    }

    //返回中点
    GetCenterPos(_startPos: cc.Vec2, _endPos: cc.Vec2, _length: number) {
        //根据起点，终点，弧长 计算中点
        //弧长公式 计算角度 L = N * π * r / 180 
        // let r = _startPos.sub(_endPos)
        // let n = _length / Math.PI / r / 180
        let l = _length;
        // 线段的中点
        let centerpos = _startPos.add(_endPos.sub(_startPos).scale(cc.v2(0.5, 0.5)));
        // console.log("GetCenterPos centerpos", centerpos);
        // 计算三角形
        let a = _endPos.sub(centerpos).mag();
        // console.log("GetCenterPos a", a);
        let b1 = (l - a * 2) / 2;
        // let c = Math.sqrt(a * a + b1 * b1);
        // console.log("GetCenterPos c", c);

        // let qa = Math.atan(c / a);
        // console.log("GetCenterPos qa", qa / Math.PI * 180);
        // let va = cc.v2(Math.cos(qa) * 1, Math.sin(qa) * 1);
        // console.log("GetCenterPos va", va);
        // let sa = va.mul(c)
        // console.log("GetCenterPos sa", sa);
        // 计算角度
        // 计算长度
        let sa = cc.v2(centerpos.x, -b1);
        // this.Draw.clear();
        // this.Draw.moveTo(_startPos.x, _startPos.y);
        // this.Draw.lineTo(_endPos.x, _endPos.y);
        // this.Draw.lineTo(sa.x, sa.y);
        // this.Draw.lineTo(_startPos.x, _startPos.y);
        // this.Draw.stroke();
        return sa;
    }
}
