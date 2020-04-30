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
    nodeBox: cc.Node = null;

    @property(cc.Node)
    nodeOut: cc.Node = null;

    @property(cc.Graphics)
    graphics: cc.Graphics = null;

    @property(cc.SpriteFrame)
    SpriteFrameCom: cc.SpriteFrame = null;

    world: any = null;
    particleSystem: any = null;
    _material: any = null;

    _ratio: number = 31;

    private canUpDate: boolean = false;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //开启物理
        cc.director.getPhysicsManager().enabled = true;
        // //设置物理绘制
        var Bits = cc.PhysicsManager.DrawBits;
        cc.director.getPhysicsManager().debugDrawFlags = Bits.e_aabbBit |
            Bits.e_jointBit |
            Bits.e_shapeBit;
        //返回物理世界
        this.world = cc.director.getPhysicsManager()._getWorld();
    }

    start() {
        // this.scheduleOnce(this.waterParticle, 1)
        this.waterParticle();
    }

    waterParticle() {
        // console.log("b2DrawFlags", b2.DrawFlags);
        //粒子
        //创建粒子系统
        this.particleSystem = new b2.ParticleSystemDef();

        // this.particleSystem.radius = 0.035;
        this.particleSystem.dampingStrength = 0.2;//阻尼
        this.particleSystem.radius = 0.1;        //每个粒子的半径，半径越小模拟程度越高，但同时对硬件性能要求更高
        this.particleSystem = this.world.CreateParticleSystem(this.particleSystem);//创建b2ParticleSystem
        this.particleSystem.SetGravityScale(0.4);//重力比例
        this.particleSystem.SetDensity(0.8);//粒子的密度

        var pd = new b2.ParticleGroupDef;
        pd.flags = b2.ParticleFlag.b2_waterParticle;
        pd.position.Set(this.node.x / this._ratio, this.node.y / this._ratio);

        var shape = new b2.PolygonShape;
        //粒子组的形状，如下粒子组形状为5*6的box(盒子)，通俗讲，即创建出一盒子的粒子
        shape.SetAsBox(5, 6, new b2.Vec2(0, 0), 0);
        pd.shape = shape;

        this.particleSystem.CreateParticleGroup(pd);

        console.log("this.particleSystem", this.particleSystem);
        console.log("this.particleSystem GetPositionBuffer", this.particleSystem.GetPositionBuffer());

        console.log("this.world", this.world);
        console.log("this.world.m_particleSystemList", this.world.m_particleSystemList);

        // this.drawParticleSystem(this.particleSystem);
        this.scheduleOnce(() => {
            console.log("this.canUpDate = true");
            this.canUpDate = true
        }, 1)
    }

    //graphics画粒子
    private drawParticleSystem(system): void {
        // console.log("drawParticleSystem system", system)
        var particles = system.GetPositionBuffer();
        var maxParticles = particles.length;
        // console.log("drawParticleSystem particles", particles)
        // console.log("drawParticleSystem maxParticles", maxParticles)

        var count = 0;
        var minX = this.nodeOut.x - this.nodeOut.width / 2;
        var maxX = this.nodeOut.x + this.nodeOut.width / 2;
        var minY = this.nodeOut.y - this.nodeOut.height / 2;
        var maxY = minY + this.nodeOut.height * 0.6;
        this.graphics.clear();
        this.graphics.fillColor = cc.Color.RED;
        for (var i = 0; i < maxParticles; i += 2) {
            if (particles[i]) {
                let x = particles[i].x * this._ratio;
                let y = particles[i].y * this._ratio;
                // console.log("drawParticleSystem particles[i]", particles[i]);
                // console.log("drawParticleSystem x", x);
                // console.log("drawParticleSystem x", y);
                this.graphics.circle(x, y, 0.12 * this._ratio);
                this.graphics.fill();
                if ((minX < x && x < maxX) && (minY < y && y < maxY)) {
                    ++count;
                }
            }
        }

        // if (!this.schedulefalg) {
        //     this.scheduleOnce(this.failed, 10);
        //     this.schedulefalg = true;
        // }
        // if (!this.passfalg && count > LIQUID_COUNT) {
        //     this.unschedule(this.failed);
        //     this.scheduleOnce(this.pass, 2);
        //     this.passfalg = true;
        // }
    }

    //着色器画节点
    private drawParticleSystemShader(system): void {
        //顶点数据


    }


    private convertToPWorld(pos): any {
        return new b2.Vec2(pos.x / 32, pos.y / 32);
    }

    update(dt) {
        if (!this.canUpDate) return;
        // this.world.Step(dt, 8, 3);
        this.drawParticleSystem(this.particleSystem);
        // for (var i = 0, max = this.world.m_particleSystemList.length; i < max; i++) {
        //     this.drawParticleSystem(this.world.m_particleSystemList[i]);
        // }
    }

    //初始化shader
    // InitShader() {
    //     this._material = this.getComponent(cc.Sprite).getMaterial(0);
    //     this._material.setProperty('u_texture', this.SpriteFrameCom.getTexture());
    //     this._material.setProperty('u_texSize', cc.v2(this.SpriteFrameCom.getRect().width, this.SpriteFrameCom.getRect().height));
    //     this._material.setProperty('u_color', cc.v4(1, 1, 1, 0.7));
    //     this._material.setProperty('u_ratio', this._ratio);
    //     this._material.setProperty('u_pointSize', this.particleSystem.GetRadius()*this._ratio*2);
    //     let vertsCount = this.particleSystem.GetParticleCount();//b2ParticleSystem函数，获取粒子数量

    //     let texCoords = [];
    //     let posVerts = this.particleSystem.GetPositionBuffer();//b2ParticleSystem函数，获取粒子位置数组
    //     for (let index = 0; index < vertsCount; index++) {
    //         let vec = posVerts[index];
    //         texCoords.push(cc.v2(vec.x * this._ratio / this.SpriteFrameCom.getRect().width,
    //                 1 - vec.y * this._ratio / this.SpriteFrameCom.getRect().height));
    //     }

    //     this._material.setProperty('a_position', this.particleSystem.GetRadius()*this._ratio*2);
    //     this._material.setProperty('a_texCoord', this.particleSystem.GetRadius()*this._ratio*2);

    //     // pState->setVertexAttribPointer("a_position", 2, GL_FLOAT, GL_FALSE, sizeof(Vec2), &posVerts[0]);//传入shader
    //     // pState->setVertexAttribPointer("a_texCoord", 2, GL_FLOAT, GL_FALSE, sizeof(Vec2), &texCoords[0]);//传入shader

    //     // auto uTexture = Director::getInstance()->getTextureCache()->addImage("HelloWorld.png");
    //     // auto texSize = uTexture->getContentSize();
    //     // pState->setUniformTexture("u_texture", uTexture);//纹理贴图传入shader
    //     // //pState->setUniformVec2("u_texSize", texSize);//纹理的大小
    //     // pState->setUniformVec4("u_color", Vec4(1, 1, 1, 0.7));  //要进行混合的颜色
    //     // pState->setUniformVec4("u_ratio", _ratio);
    //     // pState->setUniformFloat("u_pointSize", _pSystem->GetRadius()*_ratio*2);//绘制点的大小，粒子半径*比例*2即粒子直径
    //     // this->setGLProgramState(pState);//应用Shader
    // }

    // update(dt) {
    // }
}
