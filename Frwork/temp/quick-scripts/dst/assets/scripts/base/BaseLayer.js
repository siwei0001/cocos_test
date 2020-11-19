
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/base/BaseLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40af5lCwZBL5qBAn8x43GMq', 'BaseLayer');
// scripts/base/BaseLayer.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 事件句柄
 */
var BaseEventHandler = /** @class */ (function () {
    function BaseEventHandler() {
        this.m_Hander = [];
    }
    BaseEventHandler.prototype.on = function () {
    };
    BaseEventHandler.prototype.off = function () {
    };
    BaseEventHandler.prototype.clear = function () {
    };
    return BaseEventHandler;
}());
exports.BaseEventHandler = BaseEventHandler;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseLayer = /** @class */ (function (_super) {
    __extends(BaseLayer, _super);
    function BaseLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.m_BaseEveneHander = null;
        return _this;
    }
    // onLoad () {}
    BaseLayer.prototype.start = function () {
        // Your initialization goes here.
    };
    // update(deltaTime) {
    //     // Your update function goes here.
    // }
    BaseLayer.prototype.Init = function (_customeData) {
        if (_customeData === void 0) { _customeData = null; }
        // console.log("BaseLayer  Init _customeData:", _customeData)
    };
    BaseLayer.prototype.Free = function (_customeData) {
        if (_customeData === void 0) { _customeData = null; }
        // console.log("BaseLayer  Free _customeData:", _customeData)
    };
    /**
     * 监听数据事件
     */
    BaseLayer.prototype.onDataEvenet = function () {
    };
    /**
     * 监听数据事件
     */
    BaseLayer.prototype.offDataEvenet = function () {
    };
    /**
     * 监听按钮事件
     */
    BaseLayer.prototype.onButtonEvenet = function () {
    };
    /**
     * 移除按钮事件
     */
    BaseLayer.prototype.offButtonEvenet = function () {
    };
    /**
     * 按钮点击事件
     * @param {cc.Touch} touch
     */
    BaseLayer.prototype.OnClick = function (touch) {
        //实现方法 示例
    };
    BaseLayer = __decorate([
        ccclass()
    ], BaseLayer);
    return BaseLayer;
}(cc.Component));
exports.default = BaseLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2Jhc2UvQmFzZUxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztHQUVHO0FBQ0g7SUFBQTtRQUNZLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFhMUIsQ0FBQztJQVhHLDZCQUFFLEdBQUY7SUFFQSxDQUFDO0lBRUQsOEJBQUcsR0FBSDtJQUVBLENBQUM7SUFFRCxnQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSw0Q0FBZ0I7QUFnQnZCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUErREM7UUExREcsd0JBQXdCO1FBQ2hCLHVCQUFpQixHQUFxQixJQUFJLENBQUM7O0lBeUR2RCxDQUFDO0lBdkRHLGVBQWU7SUFFZix5QkFBSyxHQUFMO1FBQ0ksaUNBQWlDO0lBQ3JDLENBQUM7SUFFRCxzQkFBc0I7SUFDdEIseUNBQXlDO0lBQ3pDLElBQUk7SUFFSix3QkFBSSxHQUFKLFVBQUssWUFBbUI7UUFBbkIsNkJBQUEsRUFBQSxtQkFBbUI7UUFDcEIsNkRBQTZEO0lBQ2pFLENBQUM7SUFFRCx3QkFBSSxHQUFKLFVBQUssWUFBbUI7UUFBbkIsNkJBQUEsRUFBQSxtQkFBbUI7UUFDcEIsNkRBQTZEO0lBQ2pFLENBQUM7SUFFRDs7T0FFRztJQUNILGdDQUFZLEdBQVo7SUFFQSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQ0FBYSxHQUFiO0lBRUEsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0NBQWMsR0FBZDtJQUVBLENBQUM7SUFFRDs7T0FFRztJQUNILG1DQUFlLEdBQWY7SUFFQSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMkJBQU8sR0FBUCxVQUFRLEtBQXFCO1FBQ3pCLFNBQVM7SUFFYixDQUFDO0lBNURnQixTQUFTO1FBRDdCLE9BQU8sRUFBRTtPQUNXLFNBQVMsQ0E4RDdCO0lBQUQsZ0JBQUM7Q0E5REQsQUE4REMsQ0E5RHNDLEVBQUUsQ0FBQyxTQUFTLEdBOERsRDtrQkE5RG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyoqXG4gKiDkuovku7blj6Xmn4RcbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VFdmVudEhhbmRsZXIge1xuICAgIHByaXZhdGUgbV9IYW5kZXIgPSBbXTtcblxuICAgIG9uKCkge1xuXG4gICAgfVxuXG4gICAgb2ZmKCkge1xuXG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG5cbiAgICB9XG59XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VMYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgW3k6IHN0cmluZ106IGFueTtcblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgcHJpdmF0ZSBtX0Jhc2VFdmVuZUhhbmRlcjogQmFzZUV2ZW50SGFuZGxlciA9IG51bGw7XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUoZGVsdGFUaW1lKSB7XG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAvLyB9XG5cbiAgICBJbml0KF9jdXN0b21lRGF0YSA9IG51bGwpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJCYXNlTGF5ZXIgIEluaXQgX2N1c3RvbWVEYXRhOlwiLCBfY3VzdG9tZURhdGEpXG4gICAgfVxuXG4gICAgRnJlZShfY3VzdG9tZURhdGEgPSBudWxsKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQmFzZUxheWVyICBGcmVlIF9jdXN0b21lRGF0YTpcIiwgX2N1c3RvbWVEYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebkeWQrOaVsOaNruS6i+S7tlxuICAgICAqL1xuICAgIG9uRGF0YUV2ZW5ldCgpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebkeWQrOaVsOaNruS6i+S7tlxuICAgICAqL1xuICAgIG9mZkRhdGFFdmVuZXQoKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnm5HlkKzmjInpkq7kuovku7ZcbiAgICAgKi9cbiAgICBvbkJ1dHRvbkV2ZW5ldCgpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOenu+mZpOaMiemSruS6i+S7tlxuICAgICAqL1xuICAgIG9mZkJ1dHRvbkV2ZW5ldCgpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaMiemSrueCueWHu+S6i+S7tlxuICAgICAqIEBwYXJhbSB7Y2MuVG91Y2h9IHRvdWNoIFxuICAgICAqL1xuICAgIE9uQ2xpY2sodG91Y2g6IGNjLkV2ZW50VGFyZ2V0KSB7XG4gICAgICAgIC8v5a6e546w5pa55rOVIOekuuS+i1xuXG4gICAgfVxuXG59XG4iXX0=