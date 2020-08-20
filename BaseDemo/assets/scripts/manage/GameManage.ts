import BaseLayer from "../base/BaseLayer";
import SaveManage, { LevelMax, LevelBase } from "./SaveManage";
import DataManage, { ResJson } from "./DataManage";
import Utils from "../utils/Utils";
import { BaseConfig } from "../config/BaseConfig";
import MenuManage, { BaseMenu } from "./MenuManage";
import AudioManage, { ResMusics } from "./AudioManage";
import NodePoolManage, { PoolName } from "./NodePoolManage";
import AdvServer from "../platform/AdvServer";
import BasePlatform from "../platform/BasePlatform";
import StatisticsServer from "../platform/StatisticsServer";

/**
 * 车子类型
 */
export enum CarType {
    Null = 301, //
    Car,        //汽车
    Forklift    //铲车
}

/**
 * 障碍物类型、
 * 箱子
 * 地桩1
 * 地桩2
 * 墙体
 * 金币
 * 钥匙
 */
export enum ObsType {
    Null = 0, //
    Ground,     //地面1
    RedCar_Start,       //红车起点
    BuleCar_Start,      //蓝车起点
    YellowCar_Start,    //黄车起点
    GreenCar_Start,     //绿车起点
    RedCar_End,         //红车起点
    BuleCar_End,        //蓝车起点
    YellowCar_End,      //黄车起点
    GreenCar_End,       //绿车起点
    Forklift,           //铲车起点
    Box,       //箱子
    Pile_1,    //地桩1
    Pile_2,    //地桩2
    Wall,      //墙体
    Coins,     //金币
    Key,       //钥匙
}

/**
 * 车子颜色
 */
export enum CarColor {
    Red = 3,    //红色
    Blue,       //蓝色
    Yellow,     //黄色
    Green       //绿色
}

export enum PileState {
    Null = 101,
    PreTrigger,
    Trigger
}

export default class GameManage {

    private static _instance: GameManage;

    private m_MapRoot: cc.Node = null;
    private m_MapPrefab: cc.Prefab = null;
    private m_MapConfig: Array<any> = [];
    private m_MapList: Array<any> = [];

    private m_BolckWidth: number = 58;
    private m_BolckHeight: number = 58;
    private m_Col: number = 9;
    private m_Row: number = 15;

    private m_ObsRoot: cc.Node = null;
    private m_ObsPrefab: cc.Prefab = null;
    private m_ObsList: Array<any> = [];

    private m_BgNode: cc.Node = null;

    private m_CarRoot: cc.Node = null;
    private m_CarPrefab: cc.Prefab = null;
    private m_CarList: Array<cc.Node> = [];
    private m_CarSelecIndex: number = -1;

    private m_LevelConfig: any = null;

    private m_MoveLength: number = 30;

    private m_PathIndexList: Array<number> = [];

    private m_CoinsNum: number = 0;
    private m_KeyNum: number = 0;

    public m_Update: boolean = false;

    /**
     * 构造函数
     */
    constructor() {
    }

    public static getInstance(): GameManage {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new GameManage())
        return this._instance
    }

    /**
     * 初始化战斗场景
     */
    InitGameScenes(_bgNode: cc.Node, _mapRoot: cc.Node, _carRoot: cc.Node, _obsRoot: cc.Node, _carPrefab: cc.Prefab, _mapPrefab: cc.Prefab, _obsPrefab: cc.Prefab) {
        this.m_BgNode = _bgNode;
        this.m_MapRoot = _mapRoot;
        this.m_CarRoot = _carRoot;
        this.m_CarPrefab = _carPrefab;
        this.m_MapPrefab = _mapPrefab;
        this.m_ObsRoot = _obsRoot;
        this.m_ObsPrefab = _obsPrefab;

        //加载地图配置
        this.LoadMapConfig();

    }

    /**
     * 加载地图配置
     */
    LoadMapConfig() {
        let level = SaveManage.getInstance().GetLevel();
        if (level > LevelBase) {
            //到达最大关卡数
            level = ((level - LevelBase) % (LevelMax - LevelBase)) + LevelBase;
        }
        Utils.CCLog("LoadMapConfig level", level);
        this.m_LevelConfig = DataManage.getInstance().GetJsonVaule(ResJson.Game_Level_Config_Json, level);
        Utils.CCLog("LoadMapConfig this.m_LevelConfig", this.m_LevelConfig);
        //更换背景
        let bgUrl = "/data/textures/bg/" + this.m_LevelConfig.BgImg;
        cc.loader.loadRes(bgUrl, cc.SpriteFrame, (err, spriteFrame) => {
            this.m_BgNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            this.m_BgNode.getComponent(cc.Widget).updateAlignment();
        })
        //地图配置
        this.m_MapConfig = [];
        let mapJson = DataManage.getInstance().GetJson(ResJson.Game_Map_Config_Json);
        for (let index = (level - 1) * 15 + level; index < level * 15 + level; index++) {
            this.m_MapConfig.push(mapJson[index]);
        }
        Utils.CCLog("LoadMapConfig this.m_MapConfig", this.m_MapConfig);
        for (let i = 0; i < this.m_Row; i++) {
            for (let j = 0; j < this.m_Col; j++) {
                let x = -this.m_Col / 2 * this.m_BolckWidth + j * this.m_BolckWidth + this.m_BolckWidth / 2;
                let y = this.m_Row / 2 * this.m_BolckHeight - i * this.m_BolckHeight - this.m_BolckHeight / 2;
                let obstype = this.m_MapConfig[i][j + 1];
                //空地生成任何东西
                if (obstype != ObsType.Null) {
                    this.CreateMap(cc.v2(x, y));
                    //有障碍物
                    if (obstype != ObsType.Ground) {
                        //生汽车
                        if (obstype == ObsType.RedCar_Start ||
                            obstype == ObsType.BuleCar_Start ||
                            obstype == ObsType.YellowCar_Start ||
                            obstype == ObsType.GreenCar_Start ||
                            obstype == ObsType.Forklift) {

                            let carType = CarType.Car;
                            let colorType = CarColor.Blue;
                            if (obstype == ObsType.RedCar_Start) {
                                colorType = CarColor.Red;
                            } else if (obstype == ObsType.BuleCar_Start) {
                                colorType = CarColor.Blue;
                            } else if (obstype == ObsType.YellowCar_Start) {
                                colorType = CarColor.Yellow;
                            } else if (obstype == ObsType.GreenCar_Start) {
                                colorType = CarColor.Green;
                            } else if (obstype == ObsType.Forklift) {
                                carType = CarType.Forklift;
                                colorType = CarColor.Yellow;
                            }

                            this.CreateCar(cc.v2(x, y), carType, colorType);
                        }
                        else {
                            let obs = this.CreateObs(cc.v2(x, y), obstype);
                            this.m_MapConfig[i][j + 1]
                            if (this.m_ObsList[i]) {
                                this.m_ObsList[i][j + 1] = obs;
                            }
                            else {
                                this.m_ObsList[i] = [];
                                this.m_ObsList[i][j + 1] = obs;
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * 生成地图
     */
    CreateMap(_pos: cc.Vec2) {
        // let obj = cc.instantiate(this.m_MapPrefab);
        // obj.parent = this.m_MapRoot;
        // obj.setPosition(_pos);
        let obj = NodePoolManage.getInstance().GetNodeToNoodePool(PoolName.Map, this.m_MapRoot);
        obj.setPosition(_pos);
        this.m_MapList.push(obj);
    }

    /**
     * 生成障碍物
     */
    CreateObs(_pos: cc.Vec2, _obsType: ObsType) {
        // let obj = cc.instantiate(this.m_ObsPrefab);
        // obj.parent = this.m_ObsRoot;
        let obj = NodePoolManage.getInstance().GetNodeToNoodePool(PoolName.Obs, this.m_ObsRoot);
        obj.setPosition(_pos);
        obj.getComponent(BaseLayer).SetObsType(_obsType);
        return obj;
    }

    /**
     * 生成车
     */
    CreateCar(_pos: cc.Vec2, _carType: CarType, _colorType: CarColor) {
        // let carObj = cc.instantiate(this.m_CarPrefab);
        // carObj.parent = this.m_CarRoot;
        let obj = NodePoolManage.getInstance().GetNodeToNoodePool(PoolName.Car, this.m_CarRoot);
        obj.setPosition(_pos);
        obj.getComponent(BaseLayer).InitData(_carType, _colorType);
        this.m_CarList.push(obj);
    }

    /**
    * 创建路线
    */
    CreateCarPath(_wordPos: cc.Vec2) {
        //判断是否可以画线
        for (let index = 0; index < this.m_CarList.length; index++) {
            const element = this.m_CarList[index];
            Utils.CCLog("TouchCar element", element);
            let box = element.getBoundingBoxToWorld();
            if (box.contains(_wordPos)) {
                //判断是否已经有路线了
                if (element.getComponent(BaseLayer).GetMovePath().length) {
                    return false;
                }
                this.m_CarSelecIndex = index
                //记住画图顺序
                this.m_PathIndexList.push(this.m_CarSelecIndex);
                return true;
            }
        }
        this.m_CarSelecIndex = -1;
        return false;
    }

    /**
    * 更新车的皮肤
    */
    UpdateCarSkin() {
        for (let index = 0; index < this.m_CarList.length; index++) {
            let obj = this.m_CarList[index];
            obj.getComponent(BaseLayer).UpdateSkin();
        }
    }

    /**
     * 回退
     */
    GoBack() {
        //障碍物还原
        for (let index = 0; index < this.m_ObsList.length; index++) {
            const element = this.m_ObsList[index];
            if (element) {
                for (let j = 0; j < element.length; j++) {
                    const obj = element[j];
                    if (obj) {
                        obj.getComponent(BaseLayer).RestState();
                    }
                }
            }
        }

        //
        Utils.CCLog("GoBack this.m_PathIndexList", this.m_PathIndexList);
        if (this.m_PathIndexList.length > 0) {
            let selseindex = this.m_PathIndexList.pop();
            let preCar = this.m_CarList[selseindex];
            //清除路线
            preCar.getComponent(BaseLayer).ClearPath();
        }
        for (let index = 0; index < this.m_CarList.length; index++) {
            const element = this.m_CarList[index];
            element.getComponent(BaseLayer).RestPos();
        }

    }

    /**
     * 返回第一辆车的路线
     */
    GetFirstCar() {
        for (let index = 0; index < this.m_CarList.length; index++) {
            const carobj = this.m_CarList[index];
            if (carobj.getComponent(BaseLayer).GetCarType() == CarType.Car && !carobj.getComponent(BaseLayer).GetMovePath().length) {
                return carobj.position;
            }
        }
        return null;
    }

    /**
    * 移动路线
    */
    AddCarPath(_nodePos: cc.Vec2) {
        //原路径
        let obj = this.m_CarList[this.m_CarSelecIndex];

        if (obj.getComponent(BaseLayer).GetPathEnd()) {
            //画到终点
            return;
        }

        let pathList = obj.getComponent(BaseLayer).GetMovePath();
        //是否在地图上
        let mapRect: cc.Rect = cc.Rect.fromMinMax(
            cc.v2(-this.m_Col / 2 * this.m_BolckWidth, this.m_Row / 2 * this.m_BolckHeight),
            cc.v2(this.m_Col / 2 * this.m_BolckWidth, -this.m_Row / 2 * this.m_BolckHeight));

        // Utils.CCLog("_nodePos", _nodePos);
        // Utils.CCLog("mapRect", mapRect);
        if (!mapRect.contains(_nodePos)) {
            Utils.CCLog("出界");
            return;
        }

        //判断距离
        if (pathList.length > 0) {
            let _prePos = pathList[pathList.length - 1];
            let _dir = _nodePos.sub(_prePos);
            let poslength = _dir.mag();

            //移动的距离超过两倍的单位距离则不生效
            // if (poslength / this.m_MoveLength > 1.5) {
            //     return;
            // }

            //分割移动点
            //计算分割点数量
            let count = Math.floor(poslength / this.m_MoveLength);
            // Utils.CCLog("floor count", count);
            if (count) {
                for (let index = 1; index <= count; index++) {
                    let nodepos = _prePos.add(_dir.normalize().scale(cc.v2(this.m_MoveLength * index, this.m_MoveLength * index)));
                    // Utils.CCLog("floor nodepos x", nodepos.x, "nodepos y ", nodepos.y);
                    let mapGrid = this.NodeToMapGrid(nodepos);
                    // Utils.CCLog("TouchToMap mapGrid x", mapGrid.x, "mapGrid y", mapGrid.y);
                    let obsType = this.m_MapConfig[mapGrid.y][mapGrid.x + 1];
                    // Utils.CCLog("TouchToMap obsType", obsType);
                    if (obsType == ObsType.Null) {
                        // Utils.CCLog("TouchToMap 空的");
                        return;
                    }

                    if (obsType == ObsType.Wall) {
                        // Utils.CCLog("TouchToMap 墙");
                        return;
                    }

                    pathList.push(nodepos);
                    BasePlatform.getInstance().VibrateShort();

                    //车的颜色
                    let carTyep = obj.getComponent(BaseLayer).GetCarType();
                    let carColor = obj.getComponent(BaseLayer).GetColor();
                    let centerPos = this.MapGridToNode(mapGrid);
                    if (carTyep != CarType.Forklift && carColor == CarColor.Red && obsType == ObsType.RedCar_End) {
                        pathList.push(centerPos);
                        obj.getComponent(BaseLayer).SetPathEnd();
                    }
                    else if (carTyep != CarType.Forklift && carColor == CarColor.Blue && obsType == ObsType.BuleCar_End) {
                        pathList.push(centerPos);
                        obj.getComponent(BaseLayer).SetPathEnd();
                    }
                    else if (carTyep != CarType.Forklift && carColor == CarColor.Yellow && obsType == ObsType.YellowCar_End) {
                        pathList.push(centerPos);
                        obj.getComponent(BaseLayer).SetPathEnd();
                    }
                    else if (carTyep != CarType.Forklift && carColor == CarColor.Green && obsType == ObsType.GreenCar_End) {
                        pathList.push(centerPos);
                        obj.getComponent(BaseLayer).SetPathEnd();
                    }
                    else {
                        //扩大范围点的位置 扩大一圈
                        //左边
                        let leftObsType = this.m_MapConfig[mapGrid.y][mapGrid.x];
                        if (carTyep != CarType.Forklift && carColor == CarColor.Red && leftObsType == ObsType.RedCar_End) {
                            let centerPos = this.MapGridToNode(cc.v2(mapGrid.x - 1, mapGrid.y));
                            pathList.push(centerPos);
                            obj.getComponent(BaseLayer).SetPathEnd();
                        }
                        else if (carTyep != CarType.Forklift && carColor == CarColor.Blue && leftObsType == ObsType.BuleCar_End) {
                            let centerPos = this.MapGridToNode(cc.v2(mapGrid.x - 1, mapGrid.y));
                            pathList.push(centerPos);
                            obj.getComponent(BaseLayer).SetPathEnd();
                        }
                        else if (carTyep != CarType.Forklift && carColor == CarColor.Yellow && leftObsType == ObsType.YellowCar_End) {
                            let centerPos = this.MapGridToNode(cc.v2(mapGrid.x - 1, mapGrid.y));
                            pathList.push(centerPos);
                            obj.getComponent(BaseLayer).SetPathEnd();
                        }
                        else if (carTyep != CarType.Forklift && carColor == CarColor.Green && leftObsType == ObsType.GreenCar_End) {
                            let centerPos = this.MapGridToNode(cc.v2(mapGrid.x - 1, mapGrid.y));
                            pathList.push(centerPos);
                            obj.getComponent(BaseLayer).SetPathEnd();
                        }

                        // Utils.CCLog("AddCarPath left.x", mapGrid.x);
                        // Utils.CCLog("AddCarPath left.y", mapGrid.y);
                        // Utils.CCLog("AddCarPath leftObsType", leftObsType);

                        //右边
                        // Utils.CCLog("AddCarPath right.x", mapGrid.x + 2);
                        // Utils.CCLog("AddCarPath right.y", mapGrid.y);
                        if (mapGrid.x + 2 > 8) {
                            Utils.CCLog("AddCarPath 右边出界");
                        }
                        else {
                            let rightObsType = this.m_MapConfig[mapGrid.y][mapGrid.x + 2];
                            if (carTyep != CarType.Forklift && carColor == CarColor.Red && rightObsType == ObsType.RedCar_End) {
                                let centerPos = this.MapGridToNode(cc.v2(mapGrid.x + 1, mapGrid.y));
                                pathList.push(centerPos);
                                obj.getComponent(BaseLayer).SetPathEnd();
                            }
                            else if (carTyep != CarType.Forklift && carColor == CarColor.Blue && rightObsType == ObsType.BuleCar_End) {
                                let centerPos = this.MapGridToNode(cc.v2(mapGrid.x + 1, mapGrid.y));
                                pathList.push(centerPos);
                                obj.getComponent(BaseLayer).SetPathEnd();
                            }
                            else if (carTyep != CarType.Forklift && carColor == CarColor.Yellow && rightObsType == ObsType.YellowCar_End) {
                                let centerPos = this.MapGridToNode(cc.v2(mapGrid.x + 1, mapGrid.y));
                                pathList.push(centerPos);
                                obj.getComponent(BaseLayer).SetPathEnd();
                            }
                            else if (carTyep != CarType.Forklift && carColor == CarColor.Green && rightObsType == ObsType.GreenCar_End) {
                                let centerPos = this.MapGridToNode(cc.v2(mapGrid.x + 1, mapGrid.y));
                                pathList.push(centerPos);
                                obj.getComponent(BaseLayer).SetPathEnd();
                            }
                            // Utils.CCLog("AddCarPath rightObsType", rightObsType);
                        }

                        //上边
                        // Utils.CCLog("AddCarPath up.x", mapGrid.x + 1);
                        // Utils.CCLog("AddCarPath up.y", mapGrid.y - 1);
                        if (mapGrid.y - 1 < 0) {
                            Utils.CCLog("AddCarPath 上边出界");
                        }
                        else {
                            let upObsType = this.m_MapConfig[mapGrid.y - 1][mapGrid.x + 1];
                            if (carTyep != CarType.Forklift && carColor == CarColor.Red && upObsType == ObsType.RedCar_End) {
                                let centerPos = this.MapGridToNode(cc.v2(mapGrid.x, mapGrid.y - 1));
                                pathList.push(centerPos);
                                obj.getComponent(BaseLayer).SetPathEnd();
                            }
                            else if (carTyep != CarType.Forklift && carColor == CarColor.Blue && upObsType == ObsType.BuleCar_End) {
                                let centerPos = this.MapGridToNode(cc.v2(mapGrid.x, mapGrid.y - 1));
                                pathList.push(centerPos);
                                obj.getComponent(BaseLayer).SetPathEnd();
                            }
                            else if (carTyep != CarType.Forklift && carColor == CarColor.Yellow && upObsType == ObsType.YellowCar_End) {
                                let centerPos = this.MapGridToNode(cc.v2(mapGrid.x, mapGrid.y - 1));
                                pathList.push(centerPos);
                                obj.getComponent(BaseLayer).SetPathEnd();
                            }
                            else if (carTyep != CarType.Forklift && carColor == CarColor.Green && upObsType == ObsType.GreenCar_End) {
                                let centerPos = this.MapGridToNode(cc.v2(mapGrid.x, mapGrid.y - 1));
                                pathList.push(centerPos);
                                obj.getComponent(BaseLayer).SetPathEnd();
                            }
                            // Utils.CCLog("AddCarPath upObsType", upObsType);
                        }

                        //下边     
                        // Utils.CCLog("AddCarPath down.x", mapGrid.x + 1);
                        // Utils.CCLog("AddCarPath down.y", mapGrid.y + 1);
                        if (mapGrid.y + 1 > 14) {
                            Utils.CCLog("AddCarPath 下边出界");
                        }
                        else {
                            let downObsType = this.m_MapConfig[mapGrid.y + 1][mapGrid.x + 1];
                            if (carTyep != CarType.Forklift && carColor == CarColor.Red && downObsType == ObsType.RedCar_End) {
                                let centerPos = this.MapGridToNode(cc.v2(mapGrid.x, mapGrid.y + 1));
                                pathList.push(centerPos);
                                obj.getComponent(BaseLayer).SetPathEnd();
                            }
                            else if (carTyep != CarType.Forklift && carColor == CarColor.Blue && downObsType == ObsType.BuleCar_End) {
                                let centerPos = this.MapGridToNode(cc.v2(mapGrid.x, mapGrid.y + 1));
                                pathList.push(centerPos);
                                obj.getComponent(BaseLayer).SetPathEnd();
                            }
                            else if (carTyep != CarType.Forklift && carColor == CarColor.Yellow && downObsType == ObsType.YellowCar_End) {
                                let centerPos = this.MapGridToNode(cc.v2(mapGrid.x, mapGrid.y + 1));
                                pathList.push(centerPos);
                                obj.getComponent(BaseLayer).SetPathEnd();
                            }
                            else if (carTyep != CarType.Forklift && carColor == CarColor.Green && downObsType == ObsType.GreenCar_End) {
                                let centerPos = this.MapGridToNode(cc.v2(mapGrid.x, mapGrid.y + 1));
                                pathList.push(centerPos);
                                obj.getComponent(BaseLayer).SetPathEnd();
                            }
                            // Utils.CCLog("AddCarPath downObsType", downObsType);
                        }
                    }
                }
            }
            else {
                let mapGrid = this.NodeToMapGrid(_nodePos);
                // Utils.CCLog("TouchToMap mapGrid x", mapGrid.x, "mapGrid y", mapGrid.y);
                let obsType = this.m_MapConfig[mapGrid.y][mapGrid.x + 1];
                // Utils.CCLog("TouchToMap obsType", obsType);
                if (obsType == ObsType.Null) {
                    // Utils.CCLog("TouchToMap 空的");
                    return;
                }

                if (obsType == ObsType.Wall) {
                    // Utils.CCLog("TouchToMap 墙");
                    return;
                }
                if (poslength > this.m_MoveLength) {
                    pathList.push(_nodePos);
                    BasePlatform.getInstance().VibrateShort();
                }

                //判断是否是终点
                //车的颜色
                //车的颜色
                let carTyep = obj.getComponent(BaseLayer).GetCarType();
                let carColor = obj.getComponent(BaseLayer).GetColor();
                let centerPos = this.MapGridToNode(mapGrid);
                if (carTyep != CarType.Forklift && carColor == CarColor.Red && obsType == ObsType.RedCar_End) {
                    pathList.push(centerPos);
                    obj.getComponent(BaseLayer).SetPathEnd();
                }
                else if (carTyep != CarType.Forklift && carColor == CarColor.Blue && obsType == ObsType.BuleCar_End) {
                    pathList.push(centerPos);
                    obj.getComponent(BaseLayer).SetPathEnd();
                }
                else if (carTyep != CarType.Forklift && carColor == CarColor.Yellow && obsType == ObsType.YellowCar_End) {
                    pathList.push(centerPos);
                    obj.getComponent(BaseLayer).SetPathEnd();
                }
                else if (carTyep != CarType.Forklift && carColor == CarColor.Green && obsType == ObsType.GreenCar_End) {
                    pathList.push(centerPos);
                    obj.getComponent(BaseLayer).SetPathEnd();
                }
                else {
                    //扩大范围点的位置 扩大一圈
                    //左边
                    let leftObsType = this.m_MapConfig[mapGrid.y][mapGrid.x];
                    if (carTyep != CarType.Forklift && carColor == CarColor.Red && leftObsType == ObsType.RedCar_End) {
                        let centerPos = this.MapGridToNode(cc.v2(mapGrid.x - 1, mapGrid.y));
                        pathList.push(centerPos);
                        obj.getComponent(BaseLayer).SetPathEnd();
                    }
                    else if (carTyep != CarType.Forklift && carColor == CarColor.Blue && leftObsType == ObsType.BuleCar_End) {
                        let centerPos = this.MapGridToNode(cc.v2(mapGrid.x - 1, mapGrid.y));
                        pathList.push(centerPos);
                        obj.getComponent(BaseLayer).SetPathEnd();
                    }
                    else if (carTyep != CarType.Forklift && carColor == CarColor.Yellow && leftObsType == ObsType.YellowCar_End) {
                        let centerPos = this.MapGridToNode(cc.v2(mapGrid.x - 1, mapGrid.y));
                        pathList.push(centerPos);
                        obj.getComponent(BaseLayer).SetPathEnd();
                    }
                    else if (carTyep != CarType.Forklift && carColor == CarColor.Green && leftObsType == ObsType.GreenCar_End) {
                        let centerPos = this.MapGridToNode(cc.v2(mapGrid.x - 1, mapGrid.y));
                        pathList.push(centerPos);
                        obj.getComponent(BaseLayer).SetPathEnd();
                    }

                    // Utils.CCLog("AddCarPath left.x", mapGrid.x);
                    // Utils.CCLog("AddCarPath left.y", mapGrid.y);
                    // Utils.CCLog("AddCarPath leftObsType", leftObsType);

                    //右边
                    // Utils.CCLog("AddCarPath right.x", mapGrid.x + 2);
                    // Utils.CCLog("AddCarPath right.y", mapGrid.y);
                    if (mapGrid.x + 2 > 8) {
                        Utils.CCLog("AddCarPath 右边出界");
                    }
                    else {
                        let rightObsType = this.m_MapConfig[mapGrid.y][mapGrid.x + 2];
                        if (carTyep != CarType.Forklift && carColor == CarColor.Red && rightObsType == ObsType.RedCar_End) {
                            let centerPos = this.MapGridToNode(cc.v2(mapGrid.x + 1, mapGrid.y));
                            pathList.push(centerPos);
                            obj.getComponent(BaseLayer).SetPathEnd();
                        }
                        else if (carTyep != CarType.Forklift && carColor == CarColor.Blue && rightObsType == ObsType.BuleCar_End) {
                            let centerPos = this.MapGridToNode(cc.v2(mapGrid.x + 1, mapGrid.y));
                            pathList.push(centerPos);
                            obj.getComponent(BaseLayer).SetPathEnd();
                        }
                        else if (carTyep != CarType.Forklift && carColor == CarColor.Yellow && rightObsType == ObsType.YellowCar_End) {
                            let centerPos = this.MapGridToNode(cc.v2(mapGrid.x + 1, mapGrid.y));
                            pathList.push(centerPos);
                            obj.getComponent(BaseLayer).SetPathEnd();
                        }
                        else if (carTyep != CarType.Forklift && carColor == CarColor.Green && rightObsType == ObsType.GreenCar_End) {
                            let centerPos = this.MapGridToNode(cc.v2(mapGrid.x + 1, mapGrid.y));
                            pathList.push(centerPos);
                            obj.getComponent(BaseLayer).SetPathEnd();
                        }
                        // Utils.CCLog("AddCarPath rightObsType", rightObsType);
                    }

                    //上边
                    // Utils.CCLog("AddCarPath up.x", mapGrid.x + 1);
                    // Utils.CCLog("AddCarPath up.y", mapGrid.y - 1);
                    if (mapGrid.y - 1 < 0) {
                        Utils.CCLog("AddCarPath 上边出界");
                    }
                    else {
                        let upObsType = this.m_MapConfig[mapGrid.y - 1][mapGrid.x + 1];
                        if (carTyep != CarType.Forklift && carColor == CarColor.Red && upObsType == ObsType.RedCar_End) {
                            let centerPos = this.MapGridToNode(cc.v2(mapGrid.x, mapGrid.y - 1));
                            pathList.push(centerPos);
                            obj.getComponent(BaseLayer).SetPathEnd();
                        }
                        else if (carTyep != CarType.Forklift && carColor == CarColor.Blue && upObsType == ObsType.BuleCar_End) {
                            let centerPos = this.MapGridToNode(cc.v2(mapGrid.x, mapGrid.y - 1));
                            pathList.push(centerPos);
                            obj.getComponent(BaseLayer).SetPathEnd();
                        }
                        else if (carTyep != CarType.Forklift && carColor == CarColor.Yellow && upObsType == ObsType.YellowCar_End) {
                            let centerPos = this.MapGridToNode(cc.v2(mapGrid.x, mapGrid.y - 1));
                            pathList.push(centerPos);
                            obj.getComponent(BaseLayer).SetPathEnd();
                        }
                        else if (carTyep != CarType.Forklift && carColor == CarColor.Green && upObsType == ObsType.GreenCar_End) {
                            let centerPos = this.MapGridToNode(cc.v2(mapGrid.x, mapGrid.y - 1));
                            pathList.push(centerPos);
                            obj.getComponent(BaseLayer).SetPathEnd();
                        }
                        // Utils.CCLog("AddCarPath upObsType", upObsType);
                    }

                    //下边     
                    // Utils.CCLog("AddCarPath down.x", mapGrid.x + 1);
                    // Utils.CCLog("AddCarPath down.y", mapGrid.y + 1);
                    if (mapGrid.y + 1 > 14) {
                        Utils.CCLog("AddCarPath 下边出界");
                    }
                    else {
                        let downObsType = this.m_MapConfig[mapGrid.y + 1][mapGrid.x + 1];
                        if (carTyep != CarType.Forklift && carColor == CarColor.Red && downObsType == ObsType.RedCar_End) {
                            let centerPos = this.MapGridToNode(cc.v2(mapGrid.x, mapGrid.y + 1));
                            pathList.push(centerPos);
                            obj.getComponent(BaseLayer).SetPathEnd();
                        }
                        else if (carTyep != CarType.Forklift && carColor == CarColor.Blue && downObsType == ObsType.BuleCar_End) {
                            let centerPos = this.MapGridToNode(cc.v2(mapGrid.x, mapGrid.y + 1));
                            pathList.push(centerPos);
                            obj.getComponent(BaseLayer).SetPathEnd();
                        }
                        else if (carTyep != CarType.Forklift && carColor == CarColor.Yellow && downObsType == ObsType.YellowCar_End) {
                            let centerPos = this.MapGridToNode(cc.v2(mapGrid.x, mapGrid.y + 1));
                            pathList.push(centerPos);
                            obj.getComponent(BaseLayer).SetPathEnd();
                        }
                        else if (carTyep != CarType.Forklift && carColor == CarColor.Green && downObsType == ObsType.GreenCar_End) {
                            let centerPos = this.MapGridToNode(cc.v2(mapGrid.x, mapGrid.y + 1));
                            pathList.push(centerPos);
                            obj.getComponent(BaseLayer).SetPathEnd();
                        }
                        // Utils.CCLog("AddCarPath downObsType", downObsType);
                    }
                }
            }
        }
        else {
            pathList.push(_nodePos);
            BasePlatform.getInstance().VibrateShort();
        }
    }

    /**
    * 清空路线
    */
    ClearCarPath() {
        //
        for (let index = 0; index < this.m_CarList.length; index++) {
            const carObj = this.m_CarList[index];
            carObj.getComponent(BaseLayer).ClearPath();
        }
    }

    /**
     * 返回车子的数据
     */
    GetCarList() {
        return this.m_CarList;
    }

    /**
     * 将节点坐标转换为地图grid
     * @param {cc.Vec2} _nodePos 节点坐标
     */
    NodeToMapGrid(_nodePos: cc.Vec2) {
        let mapx = _nodePos.x + this.m_Col / 2 * this.m_BolckWidth;
        let mapy = _nodePos.y - this.m_Row / 2 * this.m_BolckWidth;
        let gridx = Math.floor(mapx / this.m_BolckWidth);
        let gridy = Math.floor(Math.abs(mapy) / this.m_BolckHeight);

        return cc.v2(gridx, gridy);
    }

    /**
     * 将地图grid转换为节点坐标
     * @param {cc.Vec2} _nodePos 节点坐标
     */
    MapGridToNode(_gridPos: cc.Vec2) {
        let x = -this.m_Col / 2 * this.m_BolckWidth + _gridPos.x * this.m_BolckWidth + this.m_BolckWidth / 2;
        let y = this.m_Row / 2 * this.m_BolckHeight - _gridPos.y * this.m_BolckHeight - this.m_BolckHeight / 2;
        // let mapx = (_gridPos.y - 1) * this.m_BolckWidth;
        // let mapy = _gridPos.x * this.m_BolckHeight;
        // Utils.CCLog("MapGridToNode _gridPos x ", _gridPos.x);
        // Utils.CCLog("MapGridToNode _gridPos y ", _gridPos.y);
        // // let mapx = (_gridPos.y - 1) * this.m_BolckWidth;
        // // let mapy = _gridPos.x * this.m_BolckHeight;
        // Utils.CCLog("MapGridToNode x ", x);
        // Utils.CCLog("MapGridToNode y ", y);
        return cc.v2(x, y);
    }

    /**
     * 车子开始移动
     */
    StartCarMove() {
        //障碍物还原
        for (let index = 0; index < this.m_ObsList.length; index++) {
            const element = this.m_ObsList[index];
            if (element) {
                for (let j = 0; j < element.length; j++) {
                    const obj = element[j];
                    if (obj) {
                        obj.getComponent(BaseLayer).RestState();
                    }
                }
            }
        }
        let showBackTips = false;
        let moveNopath = false;

        //        
        for (let index = 0; index < this.m_CarList.length; index++) {
            const element = this.m_CarList[index];
            if (element.getComponent(BaseLayer).GetMovePath().length) {
                element.getComponent(BaseLayer).StartMove();
                if (!moveNopath && !element.getComponent(BaseLayer).GetPathEnd()) {
                    showBackTips = true;
                }
            }
            else {
                showBackTips = false;
                moveNopath = true;
            }
        }

        this.m_Update = true;

        //如果画完没有完成则进行回退提醒
        if (showBackTips) {
            let mainmenu = MenuManage.getInstance().GetMenu(BaseMenu.MainMenu);
            if (mainmenu) {
                mainmenu.PlayBackAction();
            }
        }
    }

    /**
     * 停止移动
     */
    StopCarMove() {
        //障碍物还原
        for (let index = 0; index < this.m_ObsList.length; index++) {
            const element = this.m_ObsList[index];
            if (element) {
                for (let j = 0; j < element.length; j++) {
                    const obj = element[j];
                    if (obj) {
                        obj.getComponent(BaseLayer).RestState();
                    }
                }
            }
        }

        //停止移动
        for (let index = 0; index < this.m_CarList.length; index++) {
            const element = this.m_CarList[index];
            element.getComponent(BaseLayer).StopMove();
        }
    }

    /**
     * 触发连锁地桩
     */
    TriggerPile(_mapGrid) {
        // Utils.CCLog("TriggerPile x", _pos.x, "y", _pos.y);
        Utils.CCLog("TriggerPile this.m_ObsList", this.m_ObsList);

        // let mapGrid = this.NodeToMapGrid(_pos);
        // _mapGrid.x = _mapGrid.x + 1;
        Utils.CCLog("TriggerPile x", _mapGrid.x, "y", _mapGrid.y);
        //上
        if (this.m_ObsList[_mapGrid.y + 1]) {
            let upobs = this.m_ObsList[_mapGrid.y + 1][_mapGrid.x];
            Utils.CCLog("TriggerPile upobs", upobs);
            if (upobs && upobs.getComponent(BaseLayer).GetObsType() == ObsType.Pile_1) {
                if (upobs.getComponent(BaseLayer).GetPileState() == PileState.Null) {
                    //连续地桩
                    upobs.getComponent(BaseLayer).GetObsType().PileAction();
                    this.TriggerPile(cc.v2(_mapGrid.x, _mapGrid.y + 1));
                }
            }
        }

        //下
        if (this.m_ObsList[_mapGrid.y - 1]) {
            let dowobs = this.m_ObsList[_mapGrid.y - 1][_mapGrid.x];
            Utils.CCLog("TriggerPile dowobs", dowobs);
            if (dowobs && dowobs.getComponent(BaseLayer).GetObsType() == ObsType.Pile_1) {
                if (dowobs.getComponent(BaseLayer).GetPileState() == PileState.Null) {
                    //连续地桩
                    dowobs.getComponent(BaseLayer).GetObsType().PileAction();
                    this.TriggerPile(cc.v2(_mapGrid.x, _mapGrid.y - 1));
                }
            }
        }

        //左
        let leftobs = this.m_ObsList[_mapGrid.y][_mapGrid.x - 1];
        Utils.CCLog("TriggerPile leftobs", leftobs);
        if (leftobs && leftobs.getComponent(BaseLayer).GetObsType() == ObsType.Pile_1) {
            // leftobs.getComponent(BaseLayer).PileAction();
            Utils.CCLog("leftobs.getComponent(BaseLayer).GetPileState()", leftobs.getComponent(BaseLayer).GetPileState());
            if (leftobs.getComponent(BaseLayer).GetPileState() == PileState.Null) {
                //连续地桩
                leftobs.getComponent(BaseLayer).PileAction();
                this.TriggerPile(cc.v2(_mapGrid.x - 1, _mapGrid.y));
            }
        }

        //右
        let rightobs = this.m_ObsList[_mapGrid.y][_mapGrid.x + 1];
        Utils.CCLog("TriggerPile rightobs", rightobs);
        if (rightobs && rightobs.getComponent(BaseLayer).GetObsType() == ObsType.Pile_1) {
            //
            if (rightobs.getComponent(BaseLayer).GetPileState() == PileState.Null) {
                //连续地桩
                rightobs.getComponent(BaseLayer).PileAction();
                this.TriggerPile(cc.v2(_mapGrid.x + 1, _mapGrid.y));
            }
        }
    }

    /**
     * 增加金币
     */
    AddCoins() {
        this.m_CoinsNum++;
    }

    GetCoins() {
        return this.m_CoinsNum;
    }

    /**
     * 增加钥匙
     */
    AddKey() {
        this.m_KeyNum++;
    }

    GetKey() {
        return this.m_KeyNum;
    }

    /**
     * 下一关
     */
    NextLevel() {
        let level = SaveManage.getInstance().GetLevel();
        level++;
        SaveManage.getInstance().SetLevel(level);

        //统计关卡
        StatisticsServer.getInstance().SendCustomEvent("关卡" + level);
        this.LoadMapConfig();
        //主界面
        let mainmenu = MenuManage.getInstance().GetMenu(BaseMenu.MainMenu)
        if (mainmenu) {
            mainmenu.UpdateLevel();
            mainmenu.SetGuideTime();
        }
    }

    /**
     * 继续游戏
     */
    ContinueGame() {
    }

    /**
     * 更新
     */
    UpdateGame(dt: number) {
        if (this.m_Update) {
        }
    }

    /**
     * 重新开始游戏
     */
    RestartGame() {
        this.FreeGame();
        this.LoadMapConfig();

        //统计关卡
        let level = SaveManage.getInstance().GetLevel();
        StatisticsServer.getInstance().SendCustomEvent("关卡" + level);
        let mainmenu = MenuManage.getInstance().GetMenu(BaseMenu.MainMenu)
        if (mainmenu) {
            mainmenu.UpdateLevel();
            mainmenu.SetGuideTime();
        }
    }

    /**
     * 游戏失败
     */
    GameOver() {
        //判断除铲车之外的车是否都有路径
        for (let index = 0; index < this.m_CarList.length; index++) {
            const carobj = this.m_CarList[index];
            if (carobj.getComponent(BaseLayer).GetCarType() == CarType.Car && !carobj.getComponent(BaseLayer).GetMovePath().length) {
                return;
            }
        }
        //主界面
        let mainmenu = MenuManage.getInstance().GetMenu(BaseMenu.MainMenu)
        if (mainmenu) {
            mainmenu.UpdateLevel();
            mainmenu.PlayFaildAnimation(() => {
                //失败
                MenuManage.getInstance().ShowMenu(BaseMenu.ResultMenu, 0);
                this.StopCarMove();
            });
        }
    }

    /**
     * 游戏胜利
     */
    GameWin() {
        AudioManage.getInstance().PlaySound(ResMusics.Sound_MoveEnd);
        //判断所有车辆都到达目标点
        for (let index = 0; index < this.m_CarList.length; index++) {
            const carobj = this.m_CarList[index];
            if (carobj.getComponent(BaseLayer).GetCarType() == CarType.Car && !carobj.getComponent(BaseLayer).GetMoveEnd()) {
                return;
            }
        }

        //主界面
        let mainmenu = MenuManage.getInstance().GetMenu(BaseMenu.MainMenu)
        if (mainmenu) {
            mainmenu.UpdateLevel();
            mainmenu.PlayWinAnimation(() => {
                MenuManage.getInstance().ShowMenu(BaseMenu.ResultMenu, 1);
                this.StopCarMove();
            });
        }
    }

    /**
     * 释放游戏
     */
    FreeGame() {
        this.m_Update = false;
        //回收地图块
        for (let index = 0; index < this.m_MapList.length; index++) {
            const obj = this.m_MapList[index];
            NodePoolManage.getInstance().PutNodeToNoodePool(PoolName.Map, obj);
        }

        //回收障碍物
        for (let index = 0; index < this.m_ObsList.length; index++) {
            const element = this.m_ObsList[index];
            if (element) {
                for (let j = 0; j < element.length; j++) {
                    const obj = element[j];
                    if (obj) {
                        obj.getComponent(BaseLayer).RestState();
                        NodePoolManage.getInstance().PutNodeToNoodePool(PoolName.Obs, obj);
                    }
                }
            }
        }

        //回收车
        for (let index = 0; index < this.m_CarList.length; index++) {
            const obj = this.m_CarList[index];
            // obj.getComponent(BaseLayer).ClearPath();
            obj.getComponent(BaseLayer).Free();
            NodePoolManage.getInstance().PutNodeToNoodePool(PoolName.Car, obj);
        }

        this.m_MapList = [];
        //初始化障碍物数组
        this.m_ObsList = [];
        //初始化车数组
        this.m_CarList = [];
        //初始化地图数组
        this.m_MapConfig = [];
        //初始化绘画顺序数组
        this.m_PathIndexList = [];
        this.m_CoinsNum = 0;
        this.m_KeyNum = 0;
        //主界面清除画图
        let mainmenu = MenuManage.getInstance().GetMenu(BaseMenu.MainMenu)
        if (mainmenu) {
            mainmenu.ClearPathGraphics();
            mainmenu.StopPathShow();
        }
    }
}