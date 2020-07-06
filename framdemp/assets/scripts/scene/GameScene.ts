import BaseLayer from "../base/BaseLayer";
import MenuManage, { BaseMenu } from "../manage/MenuManage";
import AudioManage from "../manage/AudioManage";
import Utils from "../utils/Utils";
import NodePoolManage, { PoolName } from "../manage/NodePoolManage";
import SaveManage from "../manage/SaveManage";
import StatisticsServer from "../platform/StatisticsServer";
import AdvServer from "../platform/AdvServer";
import BasePlatform from "../platform/BasePlatform";
import RankManage from "../manage/RankManage";
import { BaseConfig } from "../config/BaseConfig";



const { ccclass, property } = cc._decorator;

@ccclass
export default class GameScene extends BaseLayer {
    // LIFE-CYCLE CALLBACKS:
    onLoad() {
        //开启物理碰撞
        var manager = cc.director.getCollisionManager();
        // let manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        // manager.enabledDebugDraw = true;
    }

    start() {
        MenuManage.getInstance().ShowMenu(BaseMenu.GameLoadingMenu);
    }

    // update (dt) {}

}
