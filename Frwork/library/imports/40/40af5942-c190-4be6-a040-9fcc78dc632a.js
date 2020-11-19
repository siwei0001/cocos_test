"use strict";
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