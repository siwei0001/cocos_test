"use strict";
cc._RF.push(module, '0ac255iwJpLRYOI9mdPrukt', 'BaseConfig');
// scripts/config/BaseConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseConfig = /** @class */ (function () {
    function BaseConfig() {
    }
    BaseConfig.IsLoading = false;
    /**
     * 全局配置参数
     */
    BaseConfig.Global = {
        //宝箱关卡数
        Game_Treasurechest_Level: 3,
    };
    /**
     * 网络信息配置
     */
    BaseConfig.NetConfig = {
        //服务器域名
        NetRoot: "https://cathome8.com",
        //游戏资源目录
        NetRes: "/zjkj_h5/huaxiantingche/huaxiantingche_wx/res_1001/",
    };
    return BaseConfig;
}());
exports.BaseConfig = BaseConfig;

cc._RF.pop();