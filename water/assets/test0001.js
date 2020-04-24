// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},
    // MouseMove = function (p) {
    //     if (this.drawing) {
    //         var shape = new b2CircleShape;
    //         shape.position = p;
    //         shape.radius = 0.2;
    //         var xf = new b2Transform;
    //         xf.SetIdentity();

    //         this.particleSystem.DestroyParticlesInShape(shape, xf);

    //         var joinGroup =
    //             this.lastGroup && this.groupFlags === this.lastGroup.GetGroupFlags();
    //         if (!joinGroup) {
    //             this.colorIndex = (this.colorIndex + 1) % particleColors.length;
    //         }
    //         var pd = new b2ParticleGroupDef;
    //         pd.shape = shape;
    //         pd.flags = this.particleFlags;
    //         if ((this.particleFlags &
    //             (b2_wallParticle | b2_springParticle | b2_elasticParticle)) ||
    //             (this.particleFlags === (b2_wallParticle | b2_barrierParticle))) {
    //             pd.flags |= b2_reactiveParticle;
    //         }
    //         pd.groupFlags = this.groupFlags;
    //         pd.color = particleColors[this.colorIndex];
    //         if (this.lastGroup !== null) {
    //             pd.group = this.lastGroup;
    //         }
    //         this.lastGroup = this.particleSystem.CreateParticleGroup(pd);
    //         this.mouseTracing = false;
    //     }
    // }
});
