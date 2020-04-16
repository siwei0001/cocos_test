const { ccclass, property } = cc._decorator;

@ccclass
export default class spritearrow extends cc.Component {

  time = 0
  _material

  start() {
    this.time = 0;
    this._material = this.getComponent(cc.Sprite).getMaterial(0);
  }
 
  update() {
    this.time += (0.01 * 5.2109375);
    this._material.setProperty('time', this.time);
  }
}
