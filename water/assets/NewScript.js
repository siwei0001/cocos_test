
b2.Draw.prototype.DrawParticles = function (positionBuffer, radius, colorBuffer, particleCount) {

    let temp_vec2 = cc.v2(0, 0)
    let PTM_RATIO = 32;
    let drawer = this._drawer;
    for (let i = 0; i < particleCount; i += 3) {

        b2.Transform.MulXV(this._xf, positionBuffer[i], temp_vec2);
        let x = temp_vec2.x * PTM_RATIO;
        let y = temp_vec2.y * PTM_RATIO;

        drawer.circle(x, y, 2);
    }
}


// cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
// cc.PhysicsManager.DrawBits.e_pairBit |
// cc.PhysicsManager.DrawBits.e_centerOfMassBit |
// cc.PhysicsManager.DrawBits.e_jointBit |
// cc.PhysicsManager.DrawBits.e_shapeBit |
// cc.PhysicsManager.DrawBits.e_particleBit