// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameMain extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    @property(cc.Graphics)
    Draw: cc.Graphics = null;

    world = null;
    // onLoad () {}

    // start() {
    //     //开启物理
    //     cc.director.getPhysicsManager().enabled = true;
    //     // //设置物理绘制
    //     var Bits = cc.PhysicsManager.DrawBits;
    //     cc.director.getPhysicsManager().debugDrawFlags = Bits.e_aabbBit |
    //         Bits.e_jointBit |
    //         Bits.e_shapeBit;

    //     console.log("b2DrawFlags", b2.DrawFlags);
    //     //返回物理世界
    //     this.world = cc.director.getPhysicsManager()._getWorld();

    //     //重力
    //     // var gravity = new b2.Vec2(0, -10);
    //     // //创建物理世界
    //     // this.world = new b2.World(gravity);
    //     let worldScale = 32;
    //     {
    //         //圆形
    //         var bodyDef = new b2.BodyDef();
    //         bodyDef.type = b2.BodyType.b2_dynamicBody;//b2.Body.b2_dynamicBody;
    //         // 1米 = 30像素
    //         // new b2.Vec2(360 / 32, 640 / 32);
    //         bodyDef.position.Set(360 / worldScale, 640 / worldScale);
    //         //图形
    //         var circleShape = new b2.CircleShape(25 / worldScale);
    //         //创建夹具
    //         var fixtureDef = new b2.FixtureDef();
    //         fixtureDef.density = 1;
    //         fixtureDef.restitution = 0.6;
    //         fixtureDef.restitution = 0.1;

    //         fixtureDef.shape = circleShape;
    //                     //将小球加入 到 物理世界
    //         var theBall = this.world.CreateBody(bodyDef);
    //         theBall.CreateFixture(fixtureDef);

    //         console.log("this.world", this.world);

    //     }
    //     {
    //         //方形
    //         //圆形
    //         var bodyDef = new b2.BodyDef();
    //         bodyDef.type = b2.BodyType.b2_staticBody;//b2.Body.b2_staticBody;
    //         console.log("b2.Body.",b2.Body)
    //         // 1米 = 30像素
    //         // new b2.Vec2(360 / 32, 640 / 32);
    //         bodyDef.position.Set(0  / worldScale, 0 / worldScale);
    //         //图形
    //         var polygonShape = new b2.PolygonShape();
    //         polygonShape.SetAsBox(320 / worldScale, 10 / worldScale, new b2.Vec2(10, 0));
    //         //创建夹具
    //         var fixtureDef = new b2.FixtureDef();
    //         fixtureDef.density = 1;
    //         fixtureDef.restitution = 0.6;
    //         fixtureDef.restitution = 1; 
    //         fixtureDef.shape = polygonShape;
    //         //将小球加入到物理世界
    //         var theFloor = this.world.CreateBody(bodyDef);
    //         theFloor.CreateFixture(fixtureDef);
    //     }
    //     {
    //         //粒子
    //         //创建粒子系统
    //         var particleSystem = new b2.ParticleSystemDef();

    //         particleSystem.radius = 0.035;
    //         particleSystem.dampingStrength = 0.2;//阻尼
    //         particleSystem.radius = 0.1;        //每个粒子的半径，半径越小模拟程度越高，但同时对硬件性能要求更高
    //         particleSystem = this.world.CreateParticleSystem(particleSystem);//创建b2ParticleSystem
    //         particleSystem.SetGravityScale(0.4);//重力比例
    //         particleSystem.SetDensity(0.8);//粒子的密度

    //         var pd = new b2.ParticleGroupDef;
    //         pd.flags = b2.ParticleFlag.b2_waterParticle;
    //         pd.position.Set(300 / worldScale, 640 / worldScale);

    //         var shape = new b2.PolygonShape;
    //         shape.SetAsBox(5, 6, new b2.Vec2(0, 0), 0);
    //         pd.shape = shape;
    //         //粒子组的形状，如下粒子组形状为5*6的box(盒子)，通俗讲，即创建出一盒子的粒子
    //         particleSystem.CreateParticleGroup(pd);
    //         console.log("particleSystem", particleSystem);
            
    //     } 

    // }

    // update(dt) {
    //     var timeStep = 1.0 / 60.0;
    //     var velocityIterations = 8;
    //     var positionIterations = 3;
    //     //设置物理世界数据
    //     this.world.Step(timeStep, velocityIterations, positionIterations);
    //     this.world.DrawDebugData(); // 显示刚体debug轮廓
    //     this.world.ClearForces(); // 清除作用力
    // }
}
