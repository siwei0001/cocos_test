
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/base/BaseLayer');
require('./assets/scripts/config/BaseConfig');
require('./assets/scripts/manage/AudioManage');
require('./assets/scripts/manage/DataManage');
require('./assets/scripts/manage/GameManage');
require('./assets/scripts/manage/MenuManage');
require('./assets/scripts/manage/NodePoolManage');
require('./assets/scripts/manage/RankManage');
require('./assets/scripts/manage/SaveManage');
require('./assets/scripts/platform/BasePlatform');
require('./assets/scripts/scenes/BaseDemo');
require('./assets/scripts/scenes/Debug');
require('./assets/scripts/ui/GamePlayMenu');
require('./assets/scripts/ui/MainMenu');
require('./assets/scripts/ui/PopMenu');
require('./assets/scripts/ui/ResultMenu');
require('./assets/scripts/utils/BaseMd5');
require('./assets/scripts/utils/Http');
require('./assets/scripts/utils/Utils');

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