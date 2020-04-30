// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    world: any = null;
    _ratio: number = 31;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //返回物理世界
        this.world = cc.director.getPhysicsManager()._getWorld();
    }

    start() {

        var bodyDef = new b2.BodyDef();
        bodyDef.position.Set(this.node.x / this._ratio, this.node.y / this._ratio);
        
        var polygonShape = new b2.PolygonShape();
        polygonShape.SetAsBox(this.node.width / (this._ratio * 2), this.node.height / (this._ratio * 2));
        var fixtureDef = new b2.FixtureDef();
        fixtureDef.shape = polygonShape;
        fixtureDef.restitution = .4;
        fixtureDef.friction = .5;
        var theFloor = this.world.CreateBody(bodyDef);
        theFloor.CreateFixture(fixtureDef);

    }

    // update (dt) {}
}
