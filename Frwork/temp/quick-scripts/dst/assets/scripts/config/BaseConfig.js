
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/config/BaseConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbmZpZy9CYXNlQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQW9CQSxDQUFDO0lBbkJVLG9CQUFTLEdBQUcsS0FBSyxDQUFDO0lBRXpCOztPQUVHO0lBQ0ksaUJBQU0sR0FBRztRQUNaLE9BQU87UUFDUCx3QkFBd0IsRUFBRSxDQUFDO0tBQzlCLENBQUE7SUFFRDs7T0FFRztJQUNJLG9CQUFTLEdBQUc7UUFDZixPQUFPO1FBQ1AsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixRQUFRO1FBQ1IsTUFBTSxFQUFFLHFEQUFxRDtLQUNoRSxDQUFBO0lBQ0wsaUJBQUM7Q0FwQkQsQUFvQkMsSUFBQTtBQXBCWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCYXNlQ29uZmlnIHtcbiAgICBzdGF0aWMgSXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiDlhajlsYDphY3nva7lj4LmlbBcbiAgICAgKi9cbiAgICBzdGF0aWMgR2xvYmFsID0ge1xuICAgICAgICAvL+WuneeuseWFs+WNoeaVsFxuICAgICAgICBHYW1lX1RyZWFzdXJlY2hlc3RfTGV2ZWw6IDMsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog572R57uc5L+h5oGv6YWN572uXG4gICAgICovXG4gICAgc3RhdGljIE5ldENvbmZpZyA9IHtcbiAgICAgICAgLy/mnI3liqHlmajln5/lkI1cbiAgICAgICAgTmV0Um9vdDogXCJodHRwczovL2NhdGhvbWU4LmNvbVwiLFxuICAgICAgICAvL+a4uOaIj+i1hOa6kOebruW9lVxuICAgICAgICBOZXRSZXM6IFwiL3pqa2pfaDUvaHVheGlhbnRpbmdjaGUvaHVheGlhbnRpbmdjaGVfd3gvcmVzXzEwMDEvXCIsXG4gICAgfVxufSJdfQ==