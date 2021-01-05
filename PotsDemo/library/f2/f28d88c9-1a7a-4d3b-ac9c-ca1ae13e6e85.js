System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, ModelComponent, utils, Material, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, MeshTest;

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
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      ModelComponent = _cc.ModelComponent;
      utils = _cc.utils;
      Material = _cc.Material;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "f28d8jJGnpNO6ycyhrhPm6F", "MeshTest", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MeshTest", MeshTest = (_dec = ccclass('MeshTest'), _dec2 = property(Node), _dec3 = property(Material), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(MeshTest, _Component);

        function MeshTest() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MeshTest);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MeshTest)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "MeshNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "MeshMaterial", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(MeshTest, [{
          key: "start",
          value: function start() {} // Your initialization goes here.
          //三角形

        }, {
          key: "createtTriangleMesh",
          value: function createtTriangleMesh() {
            var positions = [];
            var normals = [];
            var uvs = [];
            var indices = [];
            var mesh = null;
            positions.push(0, 0, 0);
            positions.push(0, 1, 0);
            positions.push(1, 0, 0); //背面

            indices.push(0, 2, 1); //正面

            indices.push(0, 1, 2);
            var Options = {
              positions: positions,
              normals: normals,
              uvs: uvs,
              indices: indices
            };
            mesh = utils.createMesh(Options);
            console.log("Options", Options);
            console.log("mesh", mesh); //model组件

            var model = this.MeshNode.getComponent(ModelComponent);

            if (!model) {
              model = this.MeshNode.addComponent(ModelComponent);
            }

            model.mesh = mesh;
          } //平面

        }, {
          key: "createPlanMesh",
          value: function createPlanMesh() {
            var positions = [];
            var normals = [];
            var uvs = [];
            var indices = [];
            var mesh = null; //第一个顶点

            positions.push(0, 0, 0); //第二个顶点

            positions.push(0, 1, 0); //第三个顶点

            positions.push(1, 0, 0); //第四个顶点

            positions.push(1, 1, 0); //背面

            indices.push(0, 2, 1);
            indices.push(2, 3, 1); //正面

            indices.push(0, 1, 2);
            indices.push(1, 3, 2);
            var Options = {
              positions: positions,
              normals: normals,
              uvs: uvs,
              indices: indices
            };
            mesh = utils.createMesh(Options);
            console.log("Options", Options);
            console.log("mesh", mesh); //model组件

            var model = this.MeshNode.getComponent(ModelComponent);

            if (!model) {
              model = this.MeshNode.addComponent(ModelComponent);
            }

            model.mesh = mesh;
          } //立方体

        }, {
          key: "createBoxMesh",
          value: function createBoxMesh() {
            var positions = [];
            var normals = [];
            var uvs = [];
            var indices = [];
            var mesh = null; //顶点8个 四个面

            positions.push(0, 0, 0);
            positions.push(1, 0, 0);
            positions.push(1, 1, 0);
            positions.push(0, 1, 0);
            positions.push(0, 1, 1);
            positions.push(1, 1, 1);
            positions.push(1, 0, 1);
            positions.push(0, 0, 1); // 渲染顺序

            indices.push(0, 2, 1);
            indices.push(0, 3, 2);
            indices.push(3, 4, 2);
            indices.push(4, 7, 5);
            indices.push(7, 6, 5);
            indices.push(7, 0, 1);
            indices.push(4, 3, 0);
            indices.push(4, 0, 7);
            indices.push(2, 5, 6);
            indices.push(2, 6, 1);
            var Options = {
              positions: positions,
              normals: normals,
              uvs: uvs,
              indices: indices
            };
            mesh = utils.createMesh(Options);
            console.log("Options", Options);
            console.log("mesh", mesh); //model组件

            var model = this.MeshNode.getComponent(ModelComponent);

            if (!model) {
              model = this.MeshNode.addComponent(ModelComponent);
            }

            model.mesh = mesh;
          }
        }, {
          key: "createOctahedronMesh",
          value: function createOctahedronMesh() {
            var positions = [];
            var normals = [];
            var uvs = [];
            var indices = [];
            var mesh = null; // //设置顶点
            //down

            positions.push(0, 0, 0); //forward

            positions.push(0, 0.5, -1); //left

            positions.push(-0.5, 0.5, 0); //back

            positions.push(0, 0.5, 1); //right

            positions.push(0.5, 0.5, 0); //up

            positions.push(0, 1, 0); // 渲染顺序

            indices.push(0, 1, 2);
            indices.push(0, 2, 3);
            indices.push(0, 3, 4);
            indices.push(0, 4, 1);
            indices.push(5, 2, 1);
            indices.push(5, 3, 2);
            indices.push(5, 4, 3);
            indices.push(5, 1, 4);
            var Options = {
              positions: positions,
              normals: normals,
              uvs: uvs,
              indices: indices
            };
            mesh = utils.createMesh(Options);
            console.log("Options", Options);
            console.log("mesh", mesh); //model组件

            var model = this.MeshNode.getComponent(ModelComponent);

            if (!model) {
              model = this.MeshNode.addComponent(ModelComponent);
            }

            model.mesh = mesh;
          }
        }, {
          key: "createSphereMesh",
          //球体
          value: function createSphereMesh() {} //
          // //弧面
          //         //面数
          //         const surfaceNum = 14;
          //         //长度
          //         const surfaceLength = this.m_RoadMeshLnegth;
          //         //宽度
          //         const surfaceWidth = 2;
          //         //弧面高度
          //         const camberedHeight = 4;
          //         //半径
          //         const r = 2;
          //         //计算出弧度
          //         const radian = Math.PI * 4 / 6;//Math.atan((surfaceWidth / 2) / (r - camberedHeight)) * 2;
          //         //开始弧度
          //         const startRadian = (Math.PI - radian) / 2;
          //         //计算出每步的弧度
          //         const camberedStepRadian = radian / surfaceNum;
          //         // Utils.CCLog("radian", radian, "angle", Utils.RadianToAngle(radian));
          //         //该平面需要的顶点数
          //         const vertex_count = (surfaceNum + 1) * 2;
          //         //平面顶点数组
          //         const vertices = [];
          //         let vi = 0;
          //         const normals = [];
          //         let uvs = [];
          //         for (let si = 0; si <= surfaceNum; si++) {
          //             const u = si / surfaceNum;
          //             // const v = y / vSegments;
          //             let x = Math.cos(startRadian + si * camberedStepRadian) * r;
          //             let y = Math.sin(startRadian + si * camberedStepRadian) * r;
          //             // Utils.CCLog("surfaceNum--x--", x, "--y--", y);
          //             //左下
          //             vertices[vi++] = new ccc3d.Vec3(x, -y, -surfaceLength / 2);
          //             normals.push(0, 1, 0);
          //             uvs.push(u, 0);
          //             //左上
          //             vertices[vi++] = new ccc3d.Vec3(x, -y, surfaceLength / 2);
          //             normals.push(0, 1, 0);
          //             uvs.push(u, 1);
          //         }
          //         // Utils.CCLog("--vertices--", vertices);
          //         //绘制索引
          //         const indices = [];
          //         for (let indicesIndex = 0; indicesIndex < surfaceNum; indicesIndex++) {
          //             let a = indicesIndex * 2;
          //             let b = a + 1;
          //             let c = a + 2;
          //             let d = a + 3;
          //             // Utils.CCLog("--a--", a, "--b--", b, "--c--", c, "--d--", d);
          //             //正面
          //             indices.push(a, b, c);
          //             indices.push(b, d, c);
          //             //背面
          //             indices.push(a, c, b);
          //             indices.push(b, c, d);
          //         }
          //         // Utils.CCLog("--indices--", indices);
          //         const positions = [];
          //         for (let index = 0; index < vertices.length; index++) {
          //             let tempvec3 = vertices[index];
          //             positions.push(tempvec3.x, tempvec3.y, tempvec3.z);
          //         }
          //         // Utils.CCLog("--positions--", positions);
          //         let result = {
          //             positions,
          //             normals,
          //             uvs,
          //             indices,
          //             // minPos,
          //             // maxPos,
          //             // boundingRadius,
          //         }
          //         this.m_RoadMesh = ccc3d.utils.createMesh(result);
          //陶罐

        }, {
          key: "createPostMesh",
          value: function createPostMesh() {} // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return MeshTest;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "MeshNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "MeshMaterial", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvc29sL1dvcmsvV29ya19HaXRIdWIvY29jb3NfdGVzdC9Qb3RzRGVtby9hc3NldHMvc2NyaXB0cy9tZXNoRGVtby9NZXNoVGVzdC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIk1vZGVsQ29tcG9uZW50IiwidXRpbHMiLCJNYXRlcmlhbCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk1lc2hUZXN0IiwicG9zaXRpb25zIiwibm9ybWFscyIsInV2cyIsImluZGljZXMiLCJtZXNoIiwicHVzaCIsIk9wdGlvbnMiLCJjcmVhdGVNZXNoIiwiY29uc29sZSIsImxvZyIsIm1vZGVsIiwiTWVzaE5vZGUiLCJnZXRDb21wb25lbnQiLCJhZGRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBWUMsTUFBQUEsYyxPQUFBQSxjO0FBQWdCQyxNQUFBQSxLLE9BQUFBLEs7QUFBNkJDLE1BQUFBLFEsT0FBQUEsUTs7Ozs7O0FBQ2pGQyxNQUFBQSxPLEdBQXNCTixVLENBQXRCTSxPO0FBQVNDLE1BQUFBLFEsR0FBYVAsVSxDQUFiTyxROzswQkFJSkMsUSxXQURaRixPQUFPLENBQUMsVUFBRCxDLFVBUUhDLFFBQVEsQ0FBQ0wsSUFBRCxDLFVBRVJLLFFBQVEsQ0FBQ0YsUUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdELENBRVAsQyxDQURHO0FBR0o7Ozs7Z0RBQ3NCO0FBQ2xCLGdCQUFJSSxTQUFTLEdBQUcsRUFBaEI7QUFDQSxnQkFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxnQkFBSUMsR0FBRyxHQUFHLEVBQVY7QUFDQSxnQkFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxnQkFBSUMsSUFBVSxHQUFHLElBQWpC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Wjs7QUFDQSxnQkFBSSxDQUFDZ0IsS0FBTCxFQUFZO0FBQ1JBLGNBQUFBLEtBQUssR0FBRyxLQUFLQyxRQUFMLENBQWNFLFlBQWQsQ0FBMkJuQixjQUEzQixDQUFSO0FBQ0g7O0FBQ0RnQixZQUFBQSxLQUFLLENBQUNOLElBQU4sR0FBYUEsSUFBYjtBQUNIOzs7QUFFRDs2Q0FDbUIsQ0EwRmxCLEMsQ0F4Rkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdKOzs7OzJDQUNpQixDQUVoQixDLENBRUQ7QUFDQTtBQUNBOzs7OztRQXhSMEJaLFM7Ozs7O2lCQVFULEk7Ozs7Ozs7aUJBRVEsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgTW9kZWxDb21wb25lbnQsIHV0aWxzLCBNZXNoLCBDQ09iamVjdCwgVmVjMiwgTWF0ZXJpYWwgfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5cbkBjY2NsYXNzKCdNZXNoVGVzdCcpXG5leHBvcnQgY2xhc3MgTWVzaFRlc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuICAgIEBwcm9wZXJ0eShOb2RlKVxuICAgIE1lc2hOb2RlOiBOb2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoTWF0ZXJpYWwpXG4gICAgTWVzaE1hdGVyaWFsOiBNYXRlcmlhbCA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgfVxuXG4gICAgLy/kuInop5LlvaJcbiAgICBjcmVhdGV0VHJpYW5nbGVNZXNoKCkge1xuICAgICAgICBsZXQgcG9zaXRpb25zID0gW107XG4gICAgICAgIGxldCBub3JtYWxzID0gW107XG4gICAgICAgIGxldCB1dnMgPSBbXTtcbiAgICAgICAgbGV0IGluZGljZXMgPSBbXTtcbiAgICAgICAgbGV0IG1lc2g6IE1lc2ggPSBudWxsO1xuICAgICAgICBwb3NpdGlvbnMucHVzaCgwLCAwLCAwKTtcbiAgICAgICAgcG9zaXRpb25zLnB1c2goMCwgMSwgMCk7XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKDEsIDAsIDApO1xuICAgICAgICAvL+iDjOmdolxuICAgICAgICBpbmRpY2VzLnB1c2goMCwgMiwgMSk7XG4gICAgICAgIC8v5q2j6Z2iXG4gICAgICAgIGluZGljZXMucHVzaCgwLCAxLCAyKTtcbiAgICAgICAgbGV0IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbnMsXG4gICAgICAgICAgICBub3JtYWxzLFxuICAgICAgICAgICAgdXZzLFxuICAgICAgICAgICAgaW5kaWNlcyxcbiAgICAgICAgfVxuICAgICAgICBtZXNoID0gdXRpbHMuY3JlYXRlTWVzaChPcHRpb25zKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJPcHRpb25zXCIsIE9wdGlvbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lc2hcIiwgbWVzaCk7XG4gICAgICAgIC8vbW9kZWznu4Tku7ZcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5NZXNoTm9kZS5nZXRDb21wb25lbnQoTW9kZWxDb21wb25lbnQpO1xuICAgICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgICAgICBtb2RlbCA9IHRoaXMuTWVzaE5vZGUuYWRkQ29tcG9uZW50KE1vZGVsQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBtb2RlbC5tZXNoID0gbWVzaDtcblxuICAgIH1cblxuICAgIC8v5bmz6Z2iXG4gICAgY3JlYXRlUGxhbk1lc2goKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgbGV0IG5vcm1hbHMgPSBbXTtcbiAgICAgICAgbGV0IHV2cyA9IFtdO1xuICAgICAgICBsZXQgaW5kaWNlcyA9IFtdO1xuICAgICAgICBsZXQgbWVzaDogTWVzaCA9IG51bGw7XG4gICAgICAgIC8v56ys5LiA5Liq6aG254K5XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKDAsIDAsIDApO1xuICAgICAgICAvL+esrOS6jOS4qumhtueCuVxuICAgICAgICBwb3NpdGlvbnMucHVzaCgwLCAxLCAwKTtcbiAgICAgICAgLy/nrKzkuInkuKrpobbngrlcbiAgICAgICAgcG9zaXRpb25zLnB1c2goMSwgMCwgMCk7XG4gICAgICAgIC8v56ys5Zub5Liq6aG254K5XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKDEsIDEsIDApO1xuXG4gICAgICAgIC8v6IOM6Z2iXG4gICAgICAgIGluZGljZXMucHVzaCgwLCAyLCAxKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKDIsIDMsIDEpO1xuXG4gICAgICAgIC8v5q2j6Z2iXG4gICAgICAgIGluZGljZXMucHVzaCgwLCAxLCAyKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKDEsIDMsIDIpO1xuXG4gICAgICAgIGxldCBPcHRpb25zID0ge1xuICAgICAgICAgICAgcG9zaXRpb25zLFxuICAgICAgICAgICAgbm9ybWFscyxcbiAgICAgICAgICAgIHV2cyxcbiAgICAgICAgICAgIGluZGljZXMsXG4gICAgICAgIH1cbiAgICAgICAgbWVzaCA9IHV0aWxzLmNyZWF0ZU1lc2goT3B0aW9ucyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT3B0aW9uc1wiLCBPcHRpb25zKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtZXNoXCIsIG1lc2gpO1xuICAgICAgICAvL21vZGVs57uE5Lu2XG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMuTWVzaE5vZGUuZ2V0Q29tcG9uZW50KE1vZGVsQ29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgbW9kZWwgPSB0aGlzLk1lc2hOb2RlLmFkZENvbXBvbmVudChNb2RlbENvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kZWwubWVzaCA9IG1lc2g7XG4gICAgfVxuXG4gICAgLy/nq4vmlrnkvZNcbiAgICBjcmVhdGVCb3hNZXNoKCkge1xuICAgICAgICBsZXQgcG9zaXRpb25zID0gW107XG4gICAgICAgIGxldCBub3JtYWxzID0gW107XG4gICAgICAgIGxldCB1dnMgPSBbXTtcbiAgICAgICAgbGV0IGluZGljZXMgPSBbXTtcbiAgICAgICAgbGV0IG1lc2g6IE1lc2ggPSBudWxsO1xuICAgICAgICAvL+mhtueCuTjkuKog5Zub5Liq6Z2iXG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKDAsIDAsIDApO1xuICAgICAgICBwb3NpdGlvbnMucHVzaCgxLCAwLCAwKTtcbiAgICAgICAgcG9zaXRpb25zLnB1c2goMSwgMSwgMCk7XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKDAsIDEsIDApO1xuICAgICAgICBwb3NpdGlvbnMucHVzaCgwLCAxLCAxKTtcbiAgICAgICAgcG9zaXRpb25zLnB1c2goMSwgMSwgMSk7XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKDEsIDAsIDEpO1xuICAgICAgICBwb3NpdGlvbnMucHVzaCgwLCAwLCAxKTtcbiAgICAgICAgLy8g5riy5p+T6aG65bqPXG4gICAgICAgIGluZGljZXMucHVzaCgwLCAyLCAxKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKDAsIDMsIDIpO1xuICAgICAgICBpbmRpY2VzLnB1c2goMywgNCwgMik7XG4gICAgICAgIGluZGljZXMucHVzaCg0LCA3LCA1KTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKDcsIDYsIDUpO1xuICAgICAgICBpbmRpY2VzLnB1c2goNywgMCwgMSk7XG4gICAgICAgIGluZGljZXMucHVzaCg0LCAzLCAwKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKDQsIDAsIDcpO1xuICAgICAgICBpbmRpY2VzLnB1c2goMiwgNSwgNik7XG4gICAgICAgIGluZGljZXMucHVzaCgyLCA2LCAxKTtcbiAgICAgICAgbGV0IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbnMsXG4gICAgICAgICAgICBub3JtYWxzLFxuICAgICAgICAgICAgdXZzLFxuICAgICAgICAgICAgaW5kaWNlcyxcbiAgICAgICAgfVxuICAgICAgICBtZXNoID0gdXRpbHMuY3JlYXRlTWVzaChPcHRpb25zKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJPcHRpb25zXCIsIE9wdGlvbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lc2hcIiwgbWVzaCk7XG4gICAgICAgIC8vbW9kZWznu4Tku7ZcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5NZXNoTm9kZS5nZXRDb21wb25lbnQoTW9kZWxDb21wb25lbnQpO1xuICAgICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgICAgICBtb2RlbCA9IHRoaXMuTWVzaE5vZGUuYWRkQ29tcG9uZW50KE1vZGVsQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBtb2RlbC5tZXNoID0gbWVzaDtcbiAgICB9XG5cbiAgICBjcmVhdGVPY3RhaGVkcm9uTWVzaCgpIHtcbiAgICAgICAgbGV0IHBvc2l0aW9ucyA9IFtdO1xuICAgICAgICBsZXQgbm9ybWFscyA9IFtdO1xuICAgICAgICBsZXQgdXZzID0gW107XG4gICAgICAgIGxldCBpbmRpY2VzID0gW107XG4gICAgICAgIGxldCBtZXNoOiBNZXNoID0gbnVsbDtcbiAgICAgICAgLy8gLy/orr7nva7pobbngrlcbiAgICAgICAgLy9kb3duXG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKDAsIDAsIDApO1xuICAgICAgICAvL2ZvcndhcmRcbiAgICAgICAgcG9zaXRpb25zLnB1c2goMCwgMC41LCAtMSk7XG4gICAgICAgIC8vbGVmdFxuICAgICAgICBwb3NpdGlvbnMucHVzaCgtMC41LCAwLjUsIDApO1xuICAgICAgICAvL2JhY2tcbiAgICAgICAgcG9zaXRpb25zLnB1c2goMCwgMC41LCAxKTtcbiAgICAgICAgLy9yaWdodFxuICAgICAgICBwb3NpdGlvbnMucHVzaCgwLjUsIDAuNSwgMCk7XG4gICAgICAgIC8vdXBcbiAgICAgICAgcG9zaXRpb25zLnB1c2goMCwgMSwgMCk7XG4gICAgICAgIC8vIOa4suafk+mhuuW6j1xuICAgICAgICBpbmRpY2VzLnB1c2goMCwgMSwgMik7XG4gICAgICAgIGluZGljZXMucHVzaCgwLCAyLCAzKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKDAsIDMsIDQpO1xuICAgICAgICBpbmRpY2VzLnB1c2goMCwgNCwgMSk7XG5cbiAgICAgICAgaW5kaWNlcy5wdXNoKDUsIDIsIDEpO1xuICAgICAgICBpbmRpY2VzLnB1c2goNSwgMywgMik7XG4gICAgICAgIGluZGljZXMucHVzaCg1LCA0LCAzKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKDUsIDEsIDQpO1xuICAgICBcbiAgICAgICAgbGV0IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbnMsXG4gICAgICAgICAgICBub3JtYWxzLFxuICAgICAgICAgICAgdXZzLFxuICAgICAgICAgICAgaW5kaWNlcyxcbiAgICAgICAgfVxuICAgICAgICBtZXNoID0gdXRpbHMuY3JlYXRlTWVzaChPcHRpb25zKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJPcHRpb25zXCIsIE9wdGlvbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lc2hcIiwgbWVzaCk7XG4gICAgICAgIC8vbW9kZWznu4Tku7ZcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5NZXNoTm9kZS5nZXRDb21wb25lbnQoTW9kZWxDb21wb25lbnQpO1xuICAgICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgICAgICBtb2RlbCA9IHRoaXMuTWVzaE5vZGUuYWRkQ29tcG9uZW50KE1vZGVsQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBtb2RlbC5tZXNoID0gbWVzaDtcbiAgICB9O1xuXG4gICAgLy/nkIPkvZNcbiAgICBjcmVhdGVTcGhlcmVNZXNoKCkge1xuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIC8v5byn6Z2iXG4gICAgICAgIC8vICAgICAgICAgLy/pnaLmlbBcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBzdXJmYWNlTnVtID0gMTQ7XG4gICAgICAgIC8vICAgICAgICAgLy/plb/luqZcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBzdXJmYWNlTGVuZ3RoID0gdGhpcy5tX1JvYWRNZXNoTG5lZ3RoO1xuICAgICAgICAvLyAgICAgICAgIC8v5a695bqmXG4gICAgICAgIC8vICAgICAgICAgY29uc3Qgc3VyZmFjZVdpZHRoID0gMjtcbiAgICAgICAgLy8gICAgICAgICAvL+W8p+mdoumrmOW6plxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGNhbWJlcmVkSGVpZ2h0ID0gNDtcbiAgICAgICAgLy8gICAgICAgICAvL+WNiuW+hFxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHIgPSAyO1xuICAgICAgICAvLyAgICAgICAgIC8v6K6h566X5Ye65byn5bqmXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgcmFkaWFuID0gTWF0aC5QSSAqIDQgLyA2Oy8vTWF0aC5hdGFuKChzdXJmYWNlV2lkdGggLyAyKSAvIChyIC0gY2FtYmVyZWRIZWlnaHQpKSAqIDI7XG4gICAgICAgIC8vICAgICAgICAgLy/lvIDlp4vlvKfluqZcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBzdGFydFJhZGlhbiA9IChNYXRoLlBJIC0gcmFkaWFuKSAvIDI7XG4gICAgICAgIC8vICAgICAgICAgLy/orqHnrpflh7rmr4/mraXnmoTlvKfluqZcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBjYW1iZXJlZFN0ZXBSYWRpYW4gPSByYWRpYW4gLyBzdXJmYWNlTnVtO1xuXG4gICAgICAgIC8vICAgICAgICAgLy8gVXRpbHMuQ0NMb2coXCJyYWRpYW5cIiwgcmFkaWFuLCBcImFuZ2xlXCIsIFV0aWxzLlJhZGlhblRvQW5nbGUocmFkaWFuKSk7XG4gICAgICAgIC8vICAgICAgICAgLy/or6XlubPpnaLpnIDopoHnmoTpobbngrnmlbBcbiAgICAgICAgLy8gICAgICAgICBjb25zdCB2ZXJ0ZXhfY291bnQgPSAoc3VyZmFjZU51bSArIDEpICogMjtcblxuICAgICAgICAvLyAgICAgICAgIC8v5bmz6Z2i6aG254K55pWw57uEXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgdmVydGljZXMgPSBbXTtcbiAgICAgICAgLy8gICAgICAgICBsZXQgdmkgPSAwO1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IG5vcm1hbHMgPSBbXTtcbiAgICAgICAgLy8gICAgICAgICBsZXQgdXZzID0gW107XG5cbiAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBzaSA9IDA7IHNpIDw9IHN1cmZhY2VOdW07IHNpKyspIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgdSA9IHNpIC8gc3VyZmFjZU51bTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc3QgdiA9IHkgLyB2U2VnbWVudHM7XG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB4ID0gTWF0aC5jb3Moc3RhcnRSYWRpYW4gKyBzaSAqIGNhbWJlcmVkU3RlcFJhZGlhbikgKiByO1xuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgeSA9IE1hdGguc2luKHN0YXJ0UmFkaWFuICsgc2kgKiBjYW1iZXJlZFN0ZXBSYWRpYW4pICogcjtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gVXRpbHMuQ0NMb2coXCJzdXJmYWNlTnVtLS14LS1cIiwgeCwgXCItLXktLVwiLCB5KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy/lt6bkuItcbiAgICAgICAgLy8gICAgICAgICAgICAgdmVydGljZXNbdmkrK10gPSBuZXcgY2NjM2QuVmVjMyh4LCAteSwgLXN1cmZhY2VMZW5ndGggLyAyKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgbm9ybWFscy5wdXNoKDAsIDEsIDApO1xuICAgICAgICAvLyAgICAgICAgICAgICB1dnMucHVzaCh1LCAwKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy/lt6bkuIpcbiAgICAgICAgLy8gICAgICAgICAgICAgdmVydGljZXNbdmkrK10gPSBuZXcgY2NjM2QuVmVjMyh4LCAteSwgc3VyZmFjZUxlbmd0aCAvIDIpO1xuICAgICAgICAvLyAgICAgICAgICAgICBub3JtYWxzLnB1c2goMCwgMSwgMCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHV2cy5wdXNoKHUsIDEpO1xuXG4gICAgICAgIC8vICAgICAgICAgfVxuXG4gICAgICAgIC8vICAgICAgICAgLy8gVXRpbHMuQ0NMb2coXCItLXZlcnRpY2VzLS1cIiwgdmVydGljZXMpO1xuXG4gICAgICAgIC8vICAgICAgICAgLy/nu5jliLbntKLlvJVcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBpbmRpY2VzID0gW107XG5cbiAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBpbmRpY2VzSW5kZXggPSAwOyBpbmRpY2VzSW5kZXggPCBzdXJmYWNlTnVtOyBpbmRpY2VzSW5kZXgrKykge1xuXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBhID0gaW5kaWNlc0luZGV4ICogMjtcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGIgPSBhICsgMTtcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGMgPSBhICsgMjtcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGQgPSBhICsgMztcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gVXRpbHMuQ0NMb2coXCItLWEtLVwiLCBhLCBcIi0tYi0tXCIsIGIsIFwiLS1jLS1cIiwgYywgXCItLWQtLVwiLCBkKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy/mraPpnaJcbiAgICAgICAgLy8gICAgICAgICAgICAgaW5kaWNlcy5wdXNoKGEsIGIsIGMpO1xuICAgICAgICAvLyAgICAgICAgICAgICBpbmRpY2VzLnB1c2goYiwgZCwgYyk7XG5cbiAgICAgICAgLy8gICAgICAgICAgICAgLy/og4zpnaJcbiAgICAgICAgLy8gICAgICAgICAgICAgaW5kaWNlcy5wdXNoKGEsIGMsIGIpO1xuICAgICAgICAvLyAgICAgICAgICAgICBpbmRpY2VzLnB1c2goYiwgYywgZCk7XG4gICAgICAgIC8vICAgICAgICAgfVxuXG4gICAgICAgIC8vICAgICAgICAgLy8gVXRpbHMuQ0NMb2coXCItLWluZGljZXMtLVwiLCBpbmRpY2VzKTtcblxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtdO1xuICAgICAgICAvLyAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2ZXJ0aWNlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHRlbXB2ZWMzID0gdmVydGljZXNbaW5kZXhdO1xuICAgICAgICAvLyAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaCh0ZW1wdmVjMy54LCB0ZW1wdmVjMy55LCB0ZW1wdmVjMy56KTtcblxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAvLyBVdGlscy5DQ0xvZyhcIi0tcG9zaXRpb25zLS1cIiwgcG9zaXRpb25zKTtcblxuICAgICAgICAvLyAgICAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHBvc2l0aW9ucyxcbiAgICAgICAgLy8gICAgICAgICAgICAgbm9ybWFscyxcbiAgICAgICAgLy8gICAgICAgICAgICAgdXZzLFxuICAgICAgICAvLyAgICAgICAgICAgICBpbmRpY2VzLFxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBtaW5Qb3MsXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIG1heFBvcyxcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gYm91bmRpbmdSYWRpdXMsXG4gICAgICAgIC8vICAgICAgICAgfVxuXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5tX1JvYWRNZXNoID0gY2NjM2QudXRpbHMuY3JlYXRlTWVzaChyZXN1bHQpO1xuICAgIH1cblxuICAgIC8v6Zm2572QXG4gICAgY3JlYXRlUG9zdE1lc2goKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAvLyB9XG59XG4iXX0=