// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseLayer from "../base/BaseLayer";
import GameManage, { CarColor, CarType, ObsType, PileState } from "../manage/GameManage";
import Utils from "../utils/Utils";
import AudioManage, { ResMusics } from "../manage/AudioManage";
import SaveManage from "../manage/SaveManage";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Car extends BaseLayer {

    @property(cc.Sprite)
    Img_Car: cc.Sprite = null;

    @property(cc.SpriteFrame)
    SpriteFrame_Forklift: cc.SpriteFrame = null;

    @property(cc.ParticleSystem)
    MoveEnd_Particle: cc.ParticleSystem = null;

    @property(cc.ParticleSystem)
    Dead_Particle: cc.ParticleSystem = null;

    // LIFE-CYCLE CALLBACKS:
    _m_RestPos: cc.Vec2 = cc.v2();

    _m_CarType: CarType = 0;
    _m_Color: CarColor = 0;
    _m_Path: Array<cc.Vec2> = [];
    _m_PathIndex: number = 0;

    _m_MoveSleep: number = 300; //移动速度

    _m_PathEnd: boolean = false;

    _m_MoveEnd: boolean = false;

    _m_Collision: boolean = false;

    // onLoad () {}

    start() {
        this.MoveEnd_Particle.node.active = false;
        this.Dead_Particle.node.active = false;

        this.node.getComponent(BaseLayer)
    }

    /**
     * 初始化数据
     */
    InitData(_cartype: CarType, _colorType: CarColor) {
        //记录出生点
        this._m_RestPos = this.node.getPosition();
        //记录汽车类型
        this._m_CarType = _cartype;
        //记录汽车颜色类型
        this._m_Color = _colorType;

        if (this._m_CarType == CarType.Forklift) {
            this.Img_Car.spriteFrame = this.SpriteFrame_Forklift;
            //铲车的碰撞矩形增大
            let collision = this.node.getComponent(cc.BoxCollider);
            collision.size.width = 82.6;
            collision.size.height = 53.3;
        }
        else {
            //皮肤
            let skinID = SaveManage.getInstance().GetSkinID();
            let url = "/data/textures/car/";
            if (this._m_Color == CarColor.Red) {
                url = "/data/textures/car/" + "img_car_red_" + skinID;
            }
            else if (this._m_Color == CarColor.Blue) {
                url = "/data/textures/car/" + "img_car_blue_" + skinID;
            }
            else if (this._m_Color == CarColor.Yellow) {
                url = "/data/textures/car/" + "img_car_yellow_" + skinID;
            }
            else if (this._m_Color == CarColor.Green) {
                url = "/data/textures/car/" + "img_car_green_" + skinID;
            }
            cc.loader.loadRes(url, cc.SpriteFrame, (err, spriteFrame) => {
                this.Img_Car.spriteFrame = spriteFrame;
            })
            //矩形
            let collision = this.node.getComponent(cc.BoxCollider);
            collision.size.width = 72.6;
            collision.size.height = 43.3;
        }

    }

    /**
     * 更新车的皮肤
     */
    UpdateSkin() {

        if (this._m_CarType != CarType.Forklift) {
            //皮肤
            let skinID = SaveManage.getInstance().GetSkinID();
            let url = "/data/textures/car/";
            if (this._m_Color == CarColor.Red) {
                url = "/data/textures/car/" + "img_car_red_" + skinID;
            }
            else if (this._m_Color == CarColor.Blue) {
                url = "/data/textures/car/" + "img_car_blue_" + skinID;
            }
            else if (this._m_Color == CarColor.Yellow) {
                url = "/data/textures/car/" + "img_car_yellow_" + skinID;
            }
            else if (this._m_Color == CarColor.Green) {
                url = "/data/textures/car/" + "img_car_green_" + skinID;
            }
            cc.loader.loadRes(url, cc.SpriteFrame, (err, spriteFrame) => {
                this.Img_Car.spriteFrame = spriteFrame;
            })
        }
    }

    /**
     * 设置移动路径
     */
    SetMovePath(_path: Array<cc.Vec2>) {
        Utils.CCLog("SetMovePath _path", _path);
        this._m_Path = _path;
    }

    /**
     * 增加移动路径
     */
    AddMovePath(_pos: cc.Vec2) {
        this._m_Path.push(_pos);

    }

    /**
     * 开始移动
     */
    StartMove() {
        this.node.stopAllActions();
        this.prePos = null;
        //回归原点
        this.RestPos();
        //计算目标点
        this._m_PathIndex = 0;
        this.NextMove();
        this._m_Collision = true;
        // this._m_PathIndex
    }

    /**
     * 下次移动
     */
    NextMove() {
        if (this._m_PathIndex >= this._m_Path.length) {
            Utils.CCLog("移动完成");
            if (this._m_PathEnd) {
                this._m_MoveEnd = true;
                this.PlayMoveEndAction();
                //已画到目标点 判断成功
                GameManage.getInstance().GameWin();
            }
            return;
        }

        //移动的目标点
        let pos = this._m_Path[this._m_PathIndex];
        //
        let testlen = this.node.position.sub(pos).mag();
        Utils.CCLog("NextMove testlen", testlen);
        if (testlen < 30) {
            this._m_PathIndex++;
            this.NextMove();
        }
        else {
            //移动时间
            let time = Utils.Vec2Distance(this.node.position, pos) / this._m_MoveSleep;
            //角度
            let ave2 = Utils.Vec2Radian(Utils.Vec2Sub(pos, this.node.position));
            // Utils.CCLog("NextMove this.node.angle", this.node.angle);
            let enAngle = Utils.RadianToAngle(ave2);
            // Utils.CCLog("NextMove enAngle", enAngle);
            if (this.prePos) {
                let nextPos = Utils.Vec2Sub(pos, this.node.position);
                let crossa = this.prePos.normalize().cross(nextPos.normalize());
                let a = this.prePos.angle(nextPos);
                // Utils.CCLog("NextMove crossa", crossa);
                // Utils.CCLog("NextMove a", Utils.RadianToAngle(a));
                let a2 = nextPos.angle(this.prePos);
                if (crossa > 0) {
                    // Utils.CCLog("NextMove 逆时针", crossa);
                    //逆时针
                    a2 = this.node.angle + Utils.RadianToAngle(a);
                }
                else if (crossa < 0) {
                    // Utils.CCLog("NextMove 顺时针", crossa);
                    //顺时针
                    a2 = this.node.angle - Utils.RadianToAngle(a);
                }
                else {
                    // Utils.CCLog("NextMove 反向", crossa);
                    //反向
                    a2 = this.node.angle + Utils.RadianToAngle(a);
                }
                // Utils.CCLog("NextMove a2", a2);
                // let rotationtime = Utils.RadianToAngle(a) / this._m_MoveSleep * 5;
                cc.tween(this.node).to(0.1, { angle: a2 }).start();
            }
            else {
                // let rotationtime = enAngle / this._m_MoveSleep * 5;
                cc.tween(this.node).to(0.1, { angle: enAngle }).start();
            }

            this.prePos = Utils.Vec2Sub(pos, this.node.position);
            // cc.tween(this.node).by(0.5, { angle: testa }).start();
            cc.tween(this.node).to(time, { x: pos.x, y: pos.y }).call(() => {
                this._m_PathIndex++;
                this.NextMove();
            }).start();
        }
    }

    /**
     * 停止移动
     */
    StopMove() {
        this._m_Collision = false;
        this.node.stopAllActions();
        // this.prePos = null;
        //回归原点
        // this.RestPos();
        // this._m_PathIndex = 0;
    }

    /**
     * 返回是否移动到目标点
     */
    GetMoveEnd() {
        return this._m_MoveEnd;
    }

    update(dt) {
    }

    /**
     * 返回颜色
     */
    GetColor() {
        return this._m_Color;
    }

    /**
     * 返回移动路径
     */
    GetMovePath() {
        return this._m_Path;
    }

    /**
     * 返回车的类型
     */
    GetCarType() {
        return this._m_CarType;
    }

    /**
     * 播放移动到终点的动画
     */
    PlayMoveEndAction() {
        this.MoveEnd_Particle.resetSystem();
        if (this._m_Color == CarColor.Red) {
            this.MoveEnd_Particle.startColor = cc.Color.RED;
            this.MoveEnd_Particle.endColor = cc.Color.RED;
        }
        else if (this._m_Color == CarColor.Blue) {
            this.MoveEnd_Particle.startColor = cc.Color.BLUE;
            this.MoveEnd_Particle.endColor = cc.Color.BLUE;
        }
        else if (this._m_Color == CarColor.Yellow) {
            this.MoveEnd_Particle.startColor = cc.Color.YELLOW;
            this.MoveEnd_Particle.endColor = cc.Color.YELLOW;
        }
        else if (this._m_Color == CarColor.Green) {
            this.MoveEnd_Particle.startColor = cc.Color.GREEN;
            this.MoveEnd_Particle.endColor = cc.Color.GREEN;
        }
        this.MoveEnd_Particle.node.active = true;
    }

    /**
     * 播放移动到终点的动画
     */
    PlayDeadAction() {
        this.Dead_Particle.resetSystem();
        this.Dead_Particle.node.active = true;
    }

    /**
     * 重置位置
     */
    RestPos() {
        this.MoveEnd_Particle.node.active = false;
        this.Dead_Particle.node.active = false;

        this.node.setPosition(this._m_RestPos);
        this.node.angle = 90;
        this._m_MoveEnd = false;
    }

    /**
     * 清除路线
     */
    ClearPath() {
        this.node.stopAllActions();
        //重置位置
        this.RestPos();
        this._m_Path = [];
        //终点标记
        this._m_PathEnd = false;
        this._m_Collision = false;
        // this.prePos = null;
    }

    /**
     * 设置终点标记
     */
    SetPathEnd() {
        //终点标记
        this._m_PathEnd = true;
    }

    /**
      * 返回是否画完路径
      */
    GetPathEnd() {
        return this._m_PathEnd;
    }

    /**
     * 释放
     */
    Free() {
        this._m_CarType = 0;
        this._m_Color = 0;
        this.ClearPath();
        this._m_RestPos = cc.v2();
        this._m_PathIndex = 0;
        // this._m_MoveSleep: number = 100; //移动速度
        this._m_MoveEnd = false;
        this._m_Collision = false;
        this.MoveEnd_Particle.node.active = false;
        this.Dead_Particle.node.active = false;

    }

    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionEnter(other, self) {
        // console.log('on collision enter');
        if (!this._m_Collision) {
            return;
        }
        if (other.node.group == "obs") {
            // Utils.CCLog("撞到障碍物");
            //障碍物类型
            let obsType = other.node.getComponent(BaseLayer).GetObsType();
            // Null = 0, //
            // Ground,     //地面1
            // RedCar_Start,       //红车起点
            // BuleCar_Start,      //蓝车起点
            // YellowCar_Start,    //黄车起点
            // GreenCar_Start,     //绿车起点
            // RedCar_End,         //红车起点
            // BuleCar_End,        //蓝车起点
            // YellowCar_End,      //黄车起点
            // GreenCar_End,       //绿车起点
            // Forklift,           //铲车起点
            // Box,       //箱子
            // Pile_1,    //地桩1
            // Pile_2,    //地桩2
            // Wall,      //墙体
            // Coins,     //金币
            // Key,       //钥匙
            Utils.CCLog("撞到障碍物 obsType", obsType);
            if (obsType == ObsType.Box) {
                if (this._m_CarType == CarType.Car) {
                    AudioManage.getInstance().PlaySound(ResMusics.Sound_Collision);
                    this.StopMove();
                    this.PlayDeadAction();
                    //箱子
                    GameManage.getInstance().GameOver();
                }
                else if (this._m_CarType == CarType.Forklift) {
                    //铲车可以推动箱子
                    //计算方向
                    // let dir = other.node.position.sub(this.node.position).normalize();
                    // Utils.CCLog("撞到箱子 dir x", dir.x, "dir.y", dir.x);
                    // other.node.getComponent(BaseLayer).BoxMove(dir);
                }
            }
            else if (obsType == ObsType.Pile_1) {
                if (this._m_CarType == CarType.Car) {
                    //地桩1
                    //地桩状态 碰到了触发的地桩则失败
                    if (other.node.getComponent(BaseLayer).GetPileState() == PileState.Trigger) {
                        AudioManage.getInstance().PlaySound(ResMusics.Sound_Collision);
                        this.StopMove();
                        this.PlayDeadAction();
                        //失败
                        GameManage.getInstance().GameOver();
                    }
                }
                else if (this._m_CarType == CarType.Forklift) {
                    //地桩1
                    //地桩状态 碰到了触发的地桩则失败
                    if (other.node.getComponent(BaseLayer).GetPileState() == PileState.Trigger) {
                        //失败
                        // GameManage.getInstance().GameOver();
                        AudioManage.getInstance().PlaySound(ResMusics.Sound_Collision);
                        //停止移动
                        this.StopMove();
                        this.PlayDeadAction();
                    }
                }
            }
            else if (obsType == ObsType.Pile_2) {
                if (this._m_CarType == CarType.Car) {
                    //地桩2
                    //地桩状态 碰到了触发的地桩则失败
                    if (other.node.getComponent(BaseLayer).GetPileState() == PileState.Trigger) {
                        AudioManage.getInstance().PlaySound(ResMusics.Sound_Collision);
                        this.StopMove();
                        this.PlayDeadAction();
                        //失败
                        GameManage.getInstance().GameOver();
                    }
                }
                else if (this._m_CarType == CarType.Forklift) {
                    //地桩2
                    //地桩状态 碰到了触发的地桩则失败
                    if (other.node.getComponent(BaseLayer).GetPileState() == PileState.Trigger) {
                        //失败
                        // GameManage.getInstance().GameOver();
                        AudioManage.getInstance().PlaySound(ResMusics.Sound_Collision);
                        //停止移动
                        this.StopMove();
                        this.PlayDeadAction();
                    }
                }
            }
            else if (obsType == ObsType.Wall) {
                this.StopMove();
                //墙
                if (this._m_CarType == CarType.Car) {
                    AudioManage.getInstance().PlaySound(ResMusics.Sound_Collision);
                    this.PlayDeadAction();
                    GameManage.getInstance().GameOver();
                }
                else if (this._m_CarType == CarType.Forklift) {
                    //停止移动
                }
            }
            else if (obsType == ObsType.Coins) {
                AudioManage.getInstance().PlaySound(ResMusics.Sound_Coins);
                other.node.getComponent(BaseLayer).CoinsAction();
                //金币
                GameManage.getInstance().AddCoins();
            }
            else if (obsType == ObsType.Key) {
                AudioManage.getInstance().PlaySound(ResMusics.Sound_Coins);
                other.node.getComponent(BaseLayer).KeyAction();
                //钥匙
                GameManage.getInstance().AddKey();
            }
        }
        else if (other.node.group == "car") {
            Utils.CCLog("撞到车");
            AudioManage.getInstance().PlaySound(ResMusics.Sound_Collision);
            this.StopMove();
            other.node.getComponent(BaseLayer).StopMove();
            if (this._m_CarType == CarType.Car) {
                this.PlayDeadAction();
            }
            if (other.node.getComponent(BaseLayer).GetCarType() == CarType.Car) {
                other.node.getComponent(BaseLayer).PlayDeadAction();
            }
            GameManage.getInstance().GameOver();
            // if (this._m_CarType == CarType.Car && other.node.) {
            // }
        }
    }

    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionStay(other, self) {
        // console.log('on collision stay');
        if (!this._m_Collision) {
            return;
        }
        if (other.node.group == "obs") {
            // Utils.CCLog("撞到障碍物");
            //障碍物类型
            let obsType = other.node.getComponent(BaseLayer).GetObsType();
            // Utils.CCLog("撞到障碍物 obsType", obsType);
            if (obsType == ObsType.Box) {
                if (this._m_CarType == CarType.Forklift) {
                    //铲车可以推动箱子
                    //计算方向
                    let dir = other.node.position.sub(this.node.position).normalize();
                    // Utils.CCLog("撞到箱子 dir x", dir.x, "dir.y", dir.x);
                    other.node.x += dir.x * this._m_MoveSleep / 50;
                    other.node.y += dir.y * this._m_MoveSleep / 50;
                }
            }
        }
    }

    /**
     * 当碰撞结束后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionExit(other, self) {
        // console.log('on collision exit');
        if (!this._m_Collision) {
            return;
        }
        if (other.node.group == "obs") {
            Utils.CCLog("撞完障碍物");
            //障碍物类型
            let obsType = other.node.getComponent(BaseLayer).GetObsType();
            // PileAction
            if (obsType == ObsType.Pile_1) {
                //地桩1 连锁地桩
                let mapGrid = GameManage.getInstance().NodeToMapGrid(other.node.position);
                mapGrid.x = mapGrid.x + 1;
                GameManage.getInstance().TriggerPile(mapGrid);
            }
            else if (obsType == ObsType.Pile_2) {
                //地桩2
                //地桩状态 碰到了触发的地桩则失败
                other.node.getComponent(BaseLayer).PileAction();
            }
        }
    }

}
