System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Quat, Vec2, Vec3, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, v2_1, v2_2, v3_1, qt_1, KEYCODE, FirstPersonCamera;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Quat = _cc.Quat;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "15968Z7u39FEI48TToWol0V", "first-person-camera", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      v2_1 = new Vec2();
      v2_2 = new Vec2();
      v3_1 = new Vec3();
      qt_1 = new Quat();
      KEYCODE = {
        W: 'W'.charCodeAt(0),
        S: 'S'.charCodeAt(0),
        A: 'A'.charCodeAt(0),
        D: 'D'.charCodeAt(0),
        Q: 'Q'.charCodeAt(0),
        E: 'E'.charCodeAt(0),
        SHIFT: cc.macro.KEY.shift
      };

      _export("FirstPersonCamera", FirstPersonCamera = (_dec = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), ccclass(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(FirstPersonCamera, _Component);

        function FirstPersonCamera() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, FirstPersonCamera);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FirstPersonCamera)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "moveSpeed", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "moveSpeedShiftScale", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "damp", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rotateSpeed", _descriptor4, _assertThisInitialized(_this));

          _this._euler = new Vec3();
          _this._velocity = new Vec3();
          _this._position = new Vec3();
          _this._speedScale = 1;
          return _this;
        }

        _createClass(FirstPersonCamera, [{
          key: "onLoad",
          value: function onLoad() {
            cc.systemEvent.on(cc.SystemEvent.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
            cc.systemEvent.on(cc.SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
            cc.systemEvent.on(cc.SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
            cc.systemEvent.on(cc.SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
            Vec3.copy(this._euler, this.node.eulerAngles);
            Vec3.copy(this._position, this.node.position);
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            cc.systemEvent.off(cc.SystemEvent.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
            cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
            cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
            cc.systemEvent.off(cc.SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
            cc.systemEvent.off(cc.SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
            cc.systemEvent.off(cc.SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
          }
        }, {
          key: "update",
          value: function update(dt) {
            // position
            Vec3.transformQuat(v3_1, this._velocity, this.node.rotation);
            Vec3.scaleAndAdd(this._position, this._position, v3_1, this.moveSpeed * this._speedScale);
            Vec3.lerp(v3_1, this.node.position, this._position, dt / this.damp);
            this.node.setPosition(v3_1); // rotation

            Quat.fromEuler(qt_1, this._euler.x, this._euler.y, this._euler.z);
            Quat.slerp(qt_1, this.node.rotation, qt_1, dt / this.damp);
            this.node.setRotation(qt_1);
          }
        }, {
          key: "onMouseWheel",
          value: function onMouseWheel(e) {
            var delta = -e.getScrollY() * this.moveSpeed * 0.1; // delta is positive when scroll down

            Vec3.transformQuat(v3_1, Vec3.UNIT_Z, this.node.rotation);
            Vec3.scaleAndAdd(this._position, this.node.position, v3_1, delta);
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(e) {
            var v = this._velocity;

            if (e.keyCode === KEYCODE.SHIFT) {
              this._speedScale = this.moveSpeedShiftScale;
            } else if (e.keyCode === KEYCODE.W) {
              if (v.z === 0) {
                v.z = -1;
              }
            } else if (e.keyCode === KEYCODE.S) {
              if (v.z === 0) {
                v.z = 1;
              }
            } else if (e.keyCode === KEYCODE.A) {
              if (v.x === 0) {
                v.x = -1;
              }
            } else if (e.keyCode === KEYCODE.D) {
              if (v.x === 0) {
                v.x = 1;
              }
            } else if (e.keyCode === KEYCODE.Q) {
              if (v.y === 0) {
                v.y = -1;
              }
            } else if (e.keyCode === KEYCODE.E) {
              if (v.y === 0) {
                v.y = 1;
              }
            }
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp(e) {
            var v = this._velocity;

            if (e.keyCode === KEYCODE.SHIFT) {
              this._speedScale = 1;
            } else if (e.keyCode === KEYCODE.W) {
              if (v.z < 0) {
                v.z = 0;
              }
            } else if (e.keyCode === KEYCODE.S) {
              if (v.z > 0) {
                v.z = 0;
              }
            } else if (e.keyCode === KEYCODE.A) {
              if (v.x < 0) {
                v.x = 0;
              }
            } else if (e.keyCode === KEYCODE.D) {
              if (v.x > 0) {
                v.x = 0;
              }
            } else if (e.keyCode === KEYCODE.Q) {
              if (v.y < 0) {
                v.y = 0;
              }
            } else if (e.keyCode === KEYCODE.E) {
              if (v.y > 0) {
                v.y = 0;
              }
            }
          }
        }, {
          key: "onTouchStart",
          value: function onTouchStart(e) {
            if (cc.game.canvas.requestPointerLock) {
              cc.game.canvas.requestPointerLock();
            }
          }
        }, {
          key: "onTouchMove",
          value: function onTouchMove(e) {
            e.getStartLocation(v2_1);

            if (v2_1.x > cc.game.canvas.width * 0.4) {
              // rotation
              e.getDelta(v2_2);
              this._euler.y -= v2_2.x * this.rotateSpeed * 0.1;
              this._euler.x += v2_2.y * this.rotateSpeed * 0.1;
            } else {
              // position
              e.getLocation(v2_2);
              Vec2.subtract(v2_2, v2_2, v2_1);
              this._velocity.x = v2_2.x * 0.01;
              this._velocity.z = -v2_2.y * 0.01;
            }
          }
        }, {
          key: "onTouchEnd",
          value: function onTouchEnd(e) {
            if (document.exitPointerLock) {
              document.exitPointerLock();
            }

            e.getStartLocation(v2_1);

            if (v2_1.x < cc.game.canvas.width * 0.4) {
              // position
              this._velocity.x = 0;
              this._velocity.z = 0;
            }
          }
        }]);

        return FirstPersonCamera;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeedShiftScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damp", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvc29sL1dvcmsvV29ya19HaXRIdWIvY29jb3NfdGVzdC9Qb3RzRGVtby9hc3NldHMvc2NyaXB0cy9tZXNoRGVtby9maXJzdC1wZXJzb24tY2FtZXJhLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJRdWF0IiwiVmVjMiIsIlZlYzMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJ2Ml8xIiwidjJfMiIsInYzXzEiLCJxdF8xIiwiS0VZQ09ERSIsIlciLCJjaGFyQ29kZUF0IiwiUyIsIkEiLCJEIiwiUSIsIkUiLCJTSElGVCIsImNjIiwibWFjcm8iLCJLRVkiLCJzaGlmdCIsIkZpcnN0UGVyc29uQ2FtZXJhIiwic2xpZGUiLCJyYW5nZSIsIl9ldWxlciIsIl92ZWxvY2l0eSIsIl9wb3NpdGlvbiIsIl9zcGVlZFNjYWxlIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiTU9VU0VfV0hFRUwiLCJvbk1vdXNlV2hlZWwiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsIktFWV9VUCIsIm9uS2V5VXAiLCJUT1VDSF9TVEFSVCIsIm9uVG91Y2hTdGFydCIsIlRPVUNIX01PVkUiLCJvblRvdWNoTW92ZSIsIlRPVUNIX0VORCIsIm9uVG91Y2hFbmQiLCJjb3B5Iiwibm9kZSIsImV1bGVyQW5nbGVzIiwicG9zaXRpb24iLCJvZmYiLCJkdCIsInRyYW5zZm9ybVF1YXQiLCJyb3RhdGlvbiIsInNjYWxlQW5kQWRkIiwibW92ZVNwZWVkIiwibGVycCIsImRhbXAiLCJzZXRQb3NpdGlvbiIsImZyb21FdWxlciIsIngiLCJ5IiwieiIsInNsZXJwIiwic2V0Um90YXRpb24iLCJlIiwiZGVsdGEiLCJnZXRTY3JvbGxZIiwiVU5JVF9aIiwidiIsImtleUNvZGUiLCJtb3ZlU3BlZWRTaGlmdFNjYWxlIiwiZ2FtZSIsImNhbnZhcyIsInJlcXVlc3RQb2ludGVyTG9jayIsImdldFN0YXJ0TG9jYXRpb24iLCJ3aWR0aCIsImdldERlbHRhIiwicm90YXRlU3BlZWQiLCJnZXRMb2NhdGlvbiIsInN1YnRyYWN0IiwiZG9jdW1lbnQiLCJleGl0UG9pbnRlckxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTs7Ozs7O0FBQ3BDQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxRO0FBRVhDLE1BQUFBLEksR0FBTyxJQUFJSixJQUFKLEU7QUFDUEssTUFBQUEsSSxHQUFPLElBQUlMLElBQUosRTtBQUNQTSxNQUFBQSxJLEdBQU8sSUFBSUwsSUFBSixFO0FBQ1BNLE1BQUFBLEksR0FBTyxJQUFJUixJQUFKLEU7QUFDUFMsTUFBQUEsTyxHQUFVO0FBQ1pDLFFBQUFBLENBQUMsRUFBRSxJQUFJQyxVQUFKLENBQWUsQ0FBZixDQURTO0FBRVpDLFFBQUFBLENBQUMsRUFBRSxJQUFJRCxVQUFKLENBQWUsQ0FBZixDQUZTO0FBR1pFLFFBQUFBLENBQUMsRUFBRSxJQUFJRixVQUFKLENBQWUsQ0FBZixDQUhTO0FBSVpHLFFBQUFBLENBQUMsRUFBRSxJQUFJSCxVQUFKLENBQWUsQ0FBZixDQUpTO0FBS1pJLFFBQUFBLENBQUMsRUFBRSxJQUFJSixVQUFKLENBQWUsQ0FBZixDQUxTO0FBTVpLLFFBQUFBLENBQUMsRUFBRSxJQUFJTCxVQUFKLENBQWUsQ0FBZixDQU5TO0FBT1pNLFFBQUFBLEtBQUssRUFBRUMsRUFBRSxDQUFDQyxLQUFILENBQVNDLEdBQVQsQ0FBYUM7QUFQUixPOzttQ0FXSEMsaUIsV0FRUmxCLFFBQVEsQ0FBQztBQUFFbUIsUUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZUMsUUFBQUEsS0FBSyxFQUFFLENBQUMs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R0FBUyxLQUFLa0IsV0FBZCxHQUE0QixHQUE3QztBQUNBLG1CQUFLcEQsTUFBTCxDQUFZa0MsQ0FBWixJQUFpQnJELElBQUksQ0FBQ3NELENBQUwsR0FBUyxLQUFLaUIsV0FBZCxHQUE0QixHQUE3QztBQUNILGFBSkQsTUFJTztBQUFFO0FBQ0xiLGNBQUFBLENBQUMsQ0FBQ2MsV0FBRixDQUFjeEUsSUFBZDtBQUNBTCxjQUFBQSxJQUFJLENBQUM4RSxRQUFMLENBQWN6RSxJQUFkLEVBQW9CQSxJQUFwQixFQUEwQkQsSUFBMUI7QUFDQSxtQkFBS3FCLFNBQUwsQ0FBZWlDLENBQWYsR0FBbUJyRCxJQUFJLENBQUNxRCxDQUFMLEdBQVMsSUFBNUI7QUFDQSxtQkFBS2pDLFNBQUwsQ0FBZW1DLENBQWYsR0FBbUIsQ0FBQ3ZELElBQUksQ0FBQ3NELENBQU4sR0FBVSxJQUE3QjtBQUNIO0FBQ0o7OztxQ0FFa0JJLEMsRUFBRztBQUNsQixnQkFBSWdCLFFBQVEsQ0FBQ0MsZUFBYixFQUE4QjtBQUFFRCxjQUFBQSxRQUFRLENBQUNDLGVBQVQ7QUFBNkI7O0FBQzdEakIsWUFBQUEsQ0FBQyxDQUFDVSxnQkFBRixDQUFtQnJFLElBQW5COztBQUNBLGdCQUFJQSxJQUFJLENBQUNzRCxDQUFMLEdBQVN6QyxFQUFFLENBQUNxRCxJQUFILENBQVFDLE1BQVIsQ0FBZUcsS0FBZixHQUF1QixHQUFwQyxFQUF5QztBQUFFO0FBQ3ZDLG1CQUFLakQsU0FBTCxDQUFlaUMsQ0FBZixHQUFtQixDQUFuQjtBQUNBLG1CQUFLakMsU0FBTCxDQUFlbUMsQ0FBZixHQUFtQixDQUFuQjtBQUNIO0FBQ0o7Ozs7UUF4R2tDOUQsUyxxRkFFbENLLFE7Ozs7O2lCQUNrQixDOzs4RkFFbEJBLFE7Ozs7O2lCQUM0QixDOzs7Ozs7O2lCQUdmLEc7O3NGQUViQSxROzs7OztpQkFDb0IsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgUXVhdCwgVmVjMiwgVmVjMyB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbmNvbnN0IHYyXzEgPSBuZXcgVmVjMigpO1xuY29uc3QgdjJfMiA9IG5ldyBWZWMyKCk7XG5jb25zdCB2M18xID0gbmV3IFZlYzMoKTtcbmNvbnN0IHF0XzEgPSBuZXcgUXVhdCgpO1xuY29uc3QgS0VZQ09ERSA9IHtcbiAgICBXOiAnVycuY2hhckNvZGVBdCgwKSxcbiAgICBTOiAnUycuY2hhckNvZGVBdCgwKSxcbiAgICBBOiAnQScuY2hhckNvZGVBdCgwKSxcbiAgICBEOiAnRCcuY2hhckNvZGVBdCgwKSxcbiAgICBROiAnUScuY2hhckNvZGVBdCgwKSxcbiAgICBFOiAnRScuY2hhckNvZGVBdCgwKSxcbiAgICBTSElGVDogY2MubWFjcm8uS0VZLnNoaWZ0LFxufTtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBGaXJzdFBlcnNvbkNhbWVyYSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHlcbiAgICBwdWJsaWMgbW92ZVNwZWVkID0gMTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHB1YmxpYyBtb3ZlU3BlZWRTaGlmdFNjYWxlID0gNTtcblxuICAgIEBwcm9wZXJ0eSh7IHNsaWRlOiB0cnVlLCByYW5nZTogWzAuMDUsIDAuNSwgMC4wMV0gfSlcbiAgICBwdWJsaWMgZGFtcCA9IDAuMjtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHB1YmxpYyByb3RhdGVTcGVlZCA9IDE7XG5cbiAgICBwcml2YXRlIF9ldWxlciA9IG5ldyBWZWMzKCk7XG4gICAgcHJpdmF0ZSBfdmVsb2NpdHkgPSBuZXcgVmVjMygpO1xuICAgIHByaXZhdGUgX3Bvc2l0aW9uID0gbmV3IFZlYzMoKTtcbiAgICBwcml2YXRlIF9zcGVlZFNjYWxlID0gMTtcblxuICAgIHB1YmxpYyBvbkxvYWQgKCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfV0hFRUwsIHRoaXMub25Nb3VzZVdoZWVsLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIFZlYzMuY29weSh0aGlzLl9ldWxlciwgdGhpcy5ub2RlLmV1bGVyQW5nbGVzKTtcbiAgICAgICAgVmVjMy5jb3B5KHRoaXMuX3Bvc2l0aW9uLCB0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRlc3Ryb3kgKCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX1dIRUVMLCB0aGlzLm9uTW91c2VXaGVlbCwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy8gcG9zaXRpb25cbiAgICAgICAgVmVjMy50cmFuc2Zvcm1RdWF0KHYzXzEsIHRoaXMuX3ZlbG9jaXR5LCB0aGlzLm5vZGUucm90YXRpb24pO1xuICAgICAgICBWZWMzLnNjYWxlQW5kQWRkKHRoaXMuX3Bvc2l0aW9uLCB0aGlzLl9wb3NpdGlvbiwgdjNfMSwgdGhpcy5tb3ZlU3BlZWQgKiB0aGlzLl9zcGVlZFNjYWxlKTtcbiAgICAgICAgVmVjMy5sZXJwKHYzXzEsIHRoaXMubm9kZS5wb3NpdGlvbiwgdGhpcy5fcG9zaXRpb24sIGR0IC8gdGhpcy5kYW1wKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHYzXzEpO1xuICAgICAgICAvLyByb3RhdGlvblxuICAgICAgICBRdWF0LmZyb21FdWxlcihxdF8xLCB0aGlzLl9ldWxlci54LCB0aGlzLl9ldWxlci55LCB0aGlzLl9ldWxlci56KTtcbiAgICAgICAgUXVhdC5zbGVycChxdF8xLCB0aGlzLm5vZGUucm90YXRpb24sIHF0XzEsIGR0IC8gdGhpcy5kYW1wKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFJvdGF0aW9uKHF0XzEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk1vdXNlV2hlZWwgKGUpIHtcbiAgICAgICAgY29uc3QgZGVsdGEgPSAtZS5nZXRTY3JvbGxZKCkgKiB0aGlzLm1vdmVTcGVlZCAqIDAuMTsgLy8gZGVsdGEgaXMgcG9zaXRpdmUgd2hlbiBzY3JvbGwgZG93blxuICAgICAgICBWZWMzLnRyYW5zZm9ybVF1YXQodjNfMSwgVmVjMy5VTklUX1osIHRoaXMubm9kZS5yb3RhdGlvbik7XG4gICAgICAgIFZlYzMuc2NhbGVBbmRBZGQodGhpcy5fcG9zaXRpb24sIHRoaXMubm9kZS5wb3NpdGlvbiwgdjNfMSwgZGVsdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbktleURvd24gKGUpIHtcbiAgICAgICAgY29uc3QgdiA9IHRoaXMuX3ZlbG9jaXR5O1xuICAgICAgICBpZiAgICAgIChlLmtleUNvZGUgPT09IEtFWUNPREUuU0hJRlQpIHsgdGhpcy5fc3BlZWRTY2FsZSA9IHRoaXMubW92ZVNwZWVkU2hpZnRTY2FsZTsgfVxuICAgICAgICBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREUuVykgeyBpZiAodi56ID09PSAwKSB7IHYueiA9IC0xOyB9IH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLRVlDT0RFLlMpIHsgaWYgKHYueiA9PT0gMCkgeyB2LnogPSAgMTsgfSB9XG4gICAgICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERS5BKSB7IGlmICh2LnggPT09IDApIHsgdi54ID0gLTE7IH0gfVxuICAgICAgICBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREUuRCkgeyBpZiAodi54ID09PSAwKSB7IHYueCA9ICAxOyB9IH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLRVlDT0RFLlEpIHsgaWYgKHYueSA9PT0gMCkgeyB2LnkgPSAtMTsgfSB9XG4gICAgICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERS5FKSB7IGlmICh2LnkgPT09IDApIHsgdi55ID0gIDE7IH0gfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbktleVVwIChlKSB7XG4gICAgICAgIGNvbnN0IHYgPSB0aGlzLl92ZWxvY2l0eTtcbiAgICAgICAgaWYgICAgICAoZS5rZXlDb2RlID09PSBLRVlDT0RFLlNISUZUKSB7IHRoaXMuX3NwZWVkU2NhbGUgPSAxOyB9XG4gICAgICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERS5XKSB7IGlmICh2LnogPCAwKSB7IHYueiA9IDA7IH0gfVxuICAgICAgICBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREUuUykgeyBpZiAodi56ID4gMCkgeyB2LnogPSAwOyB9IH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLRVlDT0RFLkEpIHsgaWYgKHYueCA8IDApIHsgdi54ID0gMDsgfSB9XG4gICAgICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERS5EKSB7IGlmICh2LnggPiAwKSB7IHYueCA9IDA7IH0gfVxuICAgICAgICBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREUuUSkgeyBpZiAodi55IDwgMCkgeyB2LnkgPSAwOyB9IH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLRVlDT0RFLkUpIHsgaWYgKHYueSA+IDApIHsgdi55ID0gMDsgfSB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uVG91Y2hTdGFydCAoZSkge1xuICAgICAgICBpZiAoY2MuZ2FtZS5jYW52YXMucmVxdWVzdFBvaW50ZXJMb2NrKSB7IGNjLmdhbWUuY2FudmFzLnJlcXVlc3RQb2ludGVyTG9jaygpOyB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uVG91Y2hNb3ZlIChlKSB7XG4gICAgICAgIGUuZ2V0U3RhcnRMb2NhdGlvbih2Ml8xKTtcbiAgICAgICAgaWYgKHYyXzEueCA+IGNjLmdhbWUuY2FudmFzLndpZHRoICogMC40KSB7IC8vIHJvdGF0aW9uXG4gICAgICAgICAgICBlLmdldERlbHRhKHYyXzIpO1xuICAgICAgICAgICAgdGhpcy5fZXVsZXIueSAtPSB2Ml8yLnggKiB0aGlzLnJvdGF0ZVNwZWVkICogMC4xO1xuICAgICAgICAgICAgdGhpcy5fZXVsZXIueCArPSB2Ml8yLnkgKiB0aGlzLnJvdGF0ZVNwZWVkICogMC4xO1xuICAgICAgICB9IGVsc2UgeyAvLyBwb3NpdGlvblxuICAgICAgICAgICAgZS5nZXRMb2NhdGlvbih2Ml8yKTtcbiAgICAgICAgICAgIFZlYzIuc3VidHJhY3QodjJfMiwgdjJfMiwgdjJfMSk7XG4gICAgICAgICAgICB0aGlzLl92ZWxvY2l0eS54ID0gdjJfMi54ICogMC4wMTtcbiAgICAgICAgICAgIHRoaXMuX3ZlbG9jaXR5LnogPSAtdjJfMi55ICogMC4wMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblRvdWNoRW5kIChlKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5leGl0UG9pbnRlckxvY2spIHsgZG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrKCk7IH1cbiAgICAgICAgZS5nZXRTdGFydExvY2F0aW9uKHYyXzEpO1xuICAgICAgICBpZiAodjJfMS54IDwgY2MuZ2FtZS5jYW52YXMud2lkdGggKiAwLjQpIHsgLy8gcG9zaXRpb25cbiAgICAgICAgICAgIHRoaXMuX3ZlbG9jaXR5LnggPSAwO1xuICAgICAgICAgICAgdGhpcy5fdmVsb2NpdHkueiA9IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=