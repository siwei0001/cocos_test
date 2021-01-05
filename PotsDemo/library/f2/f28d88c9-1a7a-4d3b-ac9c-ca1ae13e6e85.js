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
            0;
            positions.push(1, 0, 0);
            1;
            positions.push(1, 1, 0);
            2;
            positions.push(0, 1, 0);
            3;
            positions.push(0, 1, 1);
            4;
            positions.push(1, 1, 1);
            5;
            positions.push(1, 0, 1);
            6;
            positions.push(0, 0, 1);
            7; // 渲染顺序

            indices.push(0, 2, 1);
            indices.push(0, 3, 2);
            indices.push(6, 7, 1);
            indices.push(3, 2, 5);
            indices.push(3, 4, 2);
            indices.push(4, 7, 5);
            indices.push(7, 6, 5);
            indices.push(7, 0, 1);
            indices.push(4, 3, 0);
            indices.push(4, 0, 7);
            indices.push(2, 5, 6);
            indices.push(2, 6, 1);
            indices.push(2, 6, 1); // indices.push(0, 1, 6);

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
          value: function createSphereMesh() {} //6:画球
          // 思路：首先是画出一个正八面体，然后我们的思路是取每条边的重点，细分三角形，如下图：
          // admin > 2021/01/04 > 自定义mesh模型 > image2021-1-5_17-14-45.png
          // 计算三角形的个数：
          //  我们以正八面体中的一个面为例，我们拆分一次会有四个小三角形（这里不算总共，我们Mesh画以最小单位的三角形画），拆分两次会有16个三角形，这样的话我们假设拆分次数为s(subdivisions),这样每个面会有4^s个三角形，我们的正八面体有八个面，我们一共就有8*4^s个三角形，也就是2^(2s+3)个三角形。
          // 结论：三角形的个数是：2^（2s+3）
          // 计算三角形顶点数:
          // 1次拆分：1+2+1=4
          // 2次拆分：1+2+3+2+1=9
          // 3次拆分：1+2+3+4+5+4+3+2+1=25
          // 以一个面来说我们用r（row）表示三角形的行数，r=2^s就代表一个面的三角形的行数，这样我们四分之一的正八面体有的顶点数为（r+1）^2.两个合并，我们会发现重合了四条边
          //
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvc29sL1dvcmsvV29ya19HaXRIdWIvY29jb3NfdGVzdC9Qb3RzRGVtby9hc3NldHMvc2NyaXB0cy9tZXNoRGVtby9NZXNoVGVzdC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIk1vZGVsQ29tcG9uZW50IiwidXRpbHMiLCJNYXRlcmlhbCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk1lc2hUZXN0IiwicG9zaXRpb25zIiwibm9ybWFscyIsInV2cyIsImluZGljZXMiLCJtZXNoIiwicHVzaCIsIk9wdGlvbnMiLCJjcmVhdGVNZXNoIiwiY29uc29sZSIsImxvZyIsIm1vZGVsIiwiTWVzaE5vZGUiLCJnZXRDb21wb25lbnQiLCJhZGRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBWUMsTUFBQUEsYyxPQUFBQSxjO0FBQWdCQyxNQUFBQSxLLE9BQUFBLEs7QUFBNkJDLE1BQUFBLFEsT0FBQUEsUTs7Ozs7O0FBQ2pGQyxNQUFBQSxPLEdBQXNCTixVLENBQXRCTSxPO0FBQVNDLE1BQUFBLFEsR0FBYVAsVSxDQUFiTyxROzswQkFJSkMsUSxXQURaRixPQUFPLENBQUMsVUFBRCxDLFVBUUhDLFFBQVEsQ0FBQ0wsSUFBRCxDLFVBRVJLLFFBQVEsQ0FBQ0YsUUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdELENBRVAsQyxDQURHO0FBR0o7Ozs7Z0RBQ3NCO0FBQ2xCLGdCQUFJSSxTQUFTLEdBQUcsRUFBaEI7QUFDQSxnQkFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxnQkFBSUMsR0FBRyxHQUFHLEVBQVY7QUFDQSxnQkFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxnQkFBSUMsSUFBVSxHQUFHLElBQWpC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Ozs7O2lCQVFULEk7Ozs7Ozs7aUJBRVEsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgTW9kZWxDb21wb25lbnQsIHV0aWxzLCBNZXNoLCBDQ09iamVjdCwgVmVjMiwgTWF0ZXJpYWwgfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5cbkBjY2NsYXNzKCdNZXNoVGVzdCcpXG5leHBvcnQgY2xhc3MgTWVzaFRlc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuICAgIEBwcm9wZXJ0eShOb2RlKVxuICAgIE1lc2hOb2RlOiBOb2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoTWF0ZXJpYWwpXG4gICAgTWVzaE1hdGVyaWFsOiBNYXRlcmlhbCA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgfVxuXG4gICAgLy/kuInop5LlvaJcbiAgICBjcmVhdGV0VHJpYW5nbGVNZXNoKCkge1xuICAgICAgICBsZXQgcG9zaXRpb25zID0gW107XG4gICAgICAgIGxldCBub3JtYWxzID0gW107XG4gICAgICAgIGxldCB1dnMgPSBbXTtcbiAgICAgICAgbGV0IGluZGljZXMgPSBbXTtcbiAgICAgICAgbGV0IG1lc2g6IE1lc2ggPSBudWxsO1xuICAgICAgICBwb3NpdGlvbnMucHVzaCgwLCAwLCAwKTtcbiAgICAgICAgcG9zaXRpb25zLnB1c2goMCwgMSwgMCk7XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKDEsIDAsIDApO1xuICAgICAgICAvL+iDjOmdolxuICAgICAgICBpbmRpY2VzLnB1c2goMCwgMiwgMSk7XG4gICAgICAgIC8v5q2j6Z2iXG4gICAgICAgIGluZGljZXMucHVzaCgwLCAxLCAyKTtcbiAgICAgICAgbGV0IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbnMsXG4gICAgICAgICAgICBub3JtYWxzLFxuICAgICAgICAgICAgdXZzLFxuICAgICAgICAgICAgaW5kaWNlcyxcbiAgICAgICAgfVxuICAgICAgICBtZXNoID0gdXRpbHMuY3JlYXRlTWVzaChPcHRpb25zKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJPcHRpb25zXCIsIE9wdGlvbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lc2hcIiwgbWVzaCk7XG4gICAgICAgIC8vbW9kZWznu4Tku7ZcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5NZXNoTm9kZS5nZXRDb21wb25lbnQoTW9kZWxDb21wb25lbnQpO1xuICAgICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgICAgICBtb2RlbCA9IHRoaXMuTWVzaE5vZGUuYWRkQ29tcG9uZW50KE1vZGVsQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBtb2RlbC5tZXNoID0gbWVzaDtcblxuICAgIH1cblxuICAgIC8v5bmz6Z2iXG4gICAgY3JlYXRlUGxhbk1lc2goKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgbGV0IG5vcm1hbHMgPSBbXTtcbiAgICAgICAgbGV0IHV2cyA9IFtdO1xuICAgICAgICBsZXQgaW5kaWNlcyA9IFtdO1xuICAgICAgICBsZXQgbWVzaDogTWVzaCA9IG51bGw7XG4gICAgICAgIC8v56ys5LiA5Liq6aG254K5XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKDAsIDAsIDApO1xuICAgICAgICAvL+esrOS6jOS4qumhtueCuVxuICAgICAgICBwb3NpdGlvbnMucHVzaCgwLCAxLCAwKTtcbiAgICAgICAgLy/nrKzkuInkuKrpobbngrlcbiAgICAgICAgcG9zaXRpb25zLnB1c2goMSwgMCwgMCk7XG4gICAgICAgIC8v56ys5Zub5Liq6aG254K5XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKDEsIDEsIDApO1xuXG4gICAgICAgIC8v6IOM6Z2iXG4gICAgICAgIGluZGljZXMucHVzaCgwLCAyLCAxKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKDIsIDMsIDEpO1xuXG4gICAgICAgIC8v5q2j6Z2iXG4gICAgICAgIGluZGljZXMucHVzaCgwLCAxLCAyKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKDEsIDMsIDIpO1xuXG4gICAgICAgIGxldCBPcHRpb25zID0ge1xuICAgICAgICAgICAgcG9zaXRpb25zLFxuICAgICAgICAgICAgbm9ybWFscyxcbiAgICAgICAgICAgIHV2cyxcbiAgICAgICAgICAgIGluZGljZXMsXG4gICAgICAgIH1cbiAgICAgICAgbWVzaCA9IHV0aWxzLmNyZWF0ZU1lc2goT3B0aW9ucyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT3B0aW9uc1wiLCBPcHRpb25zKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtZXNoXCIsIG1lc2gpO1xuICAgICAgICAvL21vZGVs57uE5Lu2XG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMuTWVzaE5vZGUuZ2V0Q29tcG9uZW50KE1vZGVsQ29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgbW9kZWwgPSB0aGlzLk1lc2hOb2RlLmFkZENvbXBvbmVudChNb2RlbENvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kZWwubWVzaCA9IG1lc2g7XG4gICAgfVxuXG4gICAgLy/nq4vmlrnkvZNcbiAgICBjcmVhdGVCb3hNZXNoKCkge1xuICAgICAgICBsZXQgcG9zaXRpb25zID0gW107XG4gICAgICAgIGxldCBub3JtYWxzID0gW107XG4gICAgICAgIGxldCB1dnMgPSBbXTtcbiAgICAgICAgbGV0IGluZGljZXMgPSBbXTtcbiAgICAgICAgbGV0IG1lc2g6IE1lc2ggPSBudWxsO1xuICAgICAgICAvL+mhtueCuTjkuKog5Zub5Liq6Z2iXG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKDAsIDAsIDApOzBcbiAgICAgICAgcG9zaXRpb25zLnB1c2goMSwgMCwgMCk7MVxuICAgICAgICBwb3NpdGlvbnMucHVzaCgxLCAxLCAwKTsyXG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKDAsIDEsIDApOzNcbiAgICAgICAgcG9zaXRpb25zLnB1c2goMCwgMSwgMSk7NFxuICAgICAgICBwb3NpdGlvbnMucHVzaCgxLCAxLCAxKTs1XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKDEsIDAsIDEpOzZcbiAgICAgICAgcG9zaXRpb25zLnB1c2goMCwgMCwgMSk7N1xuICAgICAgICAvLyDmuLLmn5Ppobrluo9cbiAgICAgICAgaW5kaWNlcy5wdXNoKDAsIDIsIDEpO1xuICAgICAgICBpbmRpY2VzLnB1c2goMCwgMywgMik7XG4gICAgICAgIGluZGljZXMucHVzaCg2LCA3LCAxKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKDMsIDIsIDUpO1xuXG4gICAgICAgIGluZGljZXMucHVzaCgzLCA0LCAyKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKDQsIDcsIDUpO1xuICAgICAgICBpbmRpY2VzLnB1c2goNywgNiwgNSk7XG4gICAgICAgIGluZGljZXMucHVzaCg3LCAwLCAxKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKDQsIDMsIDApO1xuICAgICAgICBpbmRpY2VzLnB1c2goNCwgMCwgNyk7XG4gICAgICAgIGluZGljZXMucHVzaCgyLCA1LCA2KTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKDIsIDYsIDEpO1xuICAgICAgICBpbmRpY2VzLnB1c2goMiwgNiwgMSk7XG5cbiAgICAgICAgLy8gaW5kaWNlcy5wdXNoKDAsIDEsIDYpO1xuXG5cbiAgICAgICAgbGV0IE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbnMsXG4gICAgICAgICAgICBub3JtYWxzLFxuICAgICAgICAgICAgdXZzLFxuICAgICAgICAgICAgaW5kaWNlcyxcbiAgICAgICAgfVxuICAgICAgICBtZXNoID0gdXRpbHMuY3JlYXRlTWVzaChPcHRpb25zKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJPcHRpb25zXCIsIE9wdGlvbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lc2hcIiwgbWVzaCk7XG4gICAgICAgIC8vbW9kZWznu4Tku7ZcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5NZXNoTm9kZS5nZXRDb21wb25lbnQoTW9kZWxDb21wb25lbnQpO1xuICAgICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgICAgICBtb2RlbCA9IHRoaXMuTWVzaE5vZGUuYWRkQ29tcG9uZW50KE1vZGVsQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICBtb2RlbC5tZXNoID0gbWVzaDtcbiAgICB9XG5cbiAgICBjcmVhdGVPY3RhaGVkcm9uTWVzaCgpIHtcbiAgICAgICAgbGV0IHBvc2l0aW9ucyA9IFtdO1xuICAgICAgICBsZXQgbm9ybWFscyA9IFtdO1xuICAgICAgICBsZXQgdXZzID0gW107XG4gICAgICAgIGxldCBpbmRpY2VzID0gW107XG4gICAgICAgIGxldCBtZXNoOiBNZXNoID0gbnVsbDtcbiAgICAgICAgLy8gLy/orr7nva7pobbngrlcbiAgICAgICAgLy9kb3duXG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKDAsIDAsIDApO1xuICAgICAgICAvL2ZvcndhcmRcbiAgICAgICAgcG9zaXRpb25zLnB1c2goMCwgMC41LCAtMSk7XG4gICAgICAgIC8vbGVmdFxuICAgICAgICBwb3NpdGlvbnMucHVzaCgtMC41LCAwLjUsIDApO1xuICAgICAgICAvL2JhY2tcbiAgICAgICAgcG9zaXRpb25zLnB1c2goMCwgMC41LCAxKTtcbiAgICAgICAgLy9yaWdodFxuICAgICAgICBwb3NpdGlvbnMucHVzaCgwLjUsIDAuNSwgMCk7XG4gICAgICAgIC8vdXBcbiAgICAgICAgcG9zaXRpb25zLnB1c2goMCwgMSwgMCk7XG4gICAgICAgIC8vIOa4suafk+mhuuW6j1xuICAgICAgICBpbmRpY2VzLnB1c2goMCwgMSwgMik7XG4gICAgICAgIGluZGljZXMucHVzaCgwLCAyLCAzKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKDAsIDMsIDQpO1xuICAgICAgICBpbmRpY2VzLnB1c2goMCwgNCwgMSk7XG5cbiAgICAgICAgaW5kaWNlcy5wdXNoKDUsIDIsIDEpO1xuICAgICAgICBpbmRpY2VzLnB1c2goNSwgMywgMik7XG4gICAgICAgIGluZGljZXMucHVzaCg1LCA0LCAzKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKDUsIDEsIDQpO1xuXG4gICAgICAgIGxldCBPcHRpb25zID0ge1xuICAgICAgICAgICAgcG9zaXRpb25zLFxuICAgICAgICAgICAgbm9ybWFscyxcbiAgICAgICAgICAgIHV2cyxcbiAgICAgICAgICAgIGluZGljZXMsXG4gICAgICAgIH1cbiAgICAgICAgbWVzaCA9IHV0aWxzLmNyZWF0ZU1lc2goT3B0aW9ucyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT3B0aW9uc1wiLCBPcHRpb25zKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtZXNoXCIsIG1lc2gpO1xuICAgICAgICAvL21vZGVs57uE5Lu2XG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMuTWVzaE5vZGUuZ2V0Q29tcG9uZW50KE1vZGVsQ29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgbW9kZWwgPSB0aGlzLk1lc2hOb2RlLmFkZENvbXBvbmVudChNb2RlbENvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kZWwubWVzaCA9IG1lc2g7XG4gICAgfTtcblxuICAgIC8v55CD5L2TXG4gICAgY3JlYXRlU3BoZXJlTWVzaCgpIHtcbiAgICAgICAgLy82OueUu+eQg1xuICAgICAgICAvLyDmgJ3ot6/vvJrpppblhYjmmK/nlLvlh7rkuIDkuKrmraPlhavpnaLkvZPvvIznhLblkI7miJHku6znmoTmgJ3ot6/mmK/lj5bmr4/mnaHovrnnmoTph43ngrnvvIznu4bliIbkuInop5LlvaLvvIzlpoLkuIvlm77vvJpcbiAgICAgICAgLy8gYWRtaW4gPiAyMDIxLzAxLzA0ID4g6Ieq5a6a5LmJbWVzaOaooeWeiyA+IGltYWdlMjAyMS0xLTVfMTctMTQtNDUucG5nXG4gICAgICAgIC8vIOiuoeeul+S4ieinkuW9oueahOS4quaVsO+8mlxuICAgICAgICAvLyAg5oiR5Lus5Lul5q2j5YWr6Z2i5L2T5Lit55qE5LiA5Liq6Z2i5Li65L6L77yM5oiR5Lus5ouG5YiG5LiA5qyh5Lya5pyJ5Zub5Liq5bCP5LiJ6KeS5b2i77yI6L+Z6YeM5LiN566X5oC75YWx77yM5oiR5LusTWVzaOeUu+S7peacgOWwj+WNleS9jeeahOS4ieinkuW9oueUu++8ie+8jOaLhuWIhuS4pOasoeS8muaciTE25Liq5LiJ6KeS5b2i77yM6L+Z5qC355qE6K+d5oiR5Lus5YGH6K6+5ouG5YiG5qyh5pWw5Li6cyhzdWJkaXZpc2lvbnMpLOi/meagt+avj+S4qumdouS8muaciTRec+S4quS4ieinkuW9ou+8jOaIkeS7rOeahOato+WFq+mdouS9k+acieWFq+S4qumdou+8jOaIkeS7rOS4gOWFseWwseaciTgqNF5z5Liq5LiJ6KeS5b2i77yM5Lmf5bCx5pivMl4oMnMrMynkuKrkuInop5LlvaLjgIJcbiAgICAgICAgLy8g57uT6K6677ya5LiJ6KeS5b2i55qE5Liq5pWw5piv77yaMl7vvIgycysz77yJXG4gICAgICAgIC8vIOiuoeeul+S4ieinkuW9oumhtueCueaVsDpcblxuICAgICAgICAvLyAx5qyh5ouG5YiG77yaMSsyKzE9NFxuICAgICAgICAvLyAy5qyh5ouG5YiG77yaMSsyKzMrMisxPTlcbiAgICAgICAgLy8gM+asoeaLhuWIhu+8mjErMiszKzQrNSs0KzMrMisxPTI1XG5cbiAgICAgICAgLy8g5Lul5LiA5Liq6Z2i5p2l6K+05oiR5Lus55Socu+8iHJvd++8ieihqOekuuS4ieinkuW9oueahOihjOaVsO+8jHI9Ml5z5bCx5Luj6KGo5LiA5Liq6Z2i55qE5LiJ6KeS5b2i55qE6KGM5pWw77yM6L+Z5qC35oiR5Lus5Zub5YiG5LmL5LiA55qE5q2j5YWr6Z2i5L2T5pyJ55qE6aG254K55pWw5Li677yIcisx77yJXjIu5Lik5Liq5ZCI5bm277yM5oiR5Lus5Lya5Y+R546w6YeN5ZCI5LqG5Zub5p2h6L65XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gLy/lvKfpnaJcbiAgICAgICAgLy8gICAgICAgICAvL+mdouaVsFxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHN1cmZhY2VOdW0gPSAxNDtcbiAgICAgICAgLy8gICAgICAgICAvL+mVv+W6plxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHN1cmZhY2VMZW5ndGggPSB0aGlzLm1fUm9hZE1lc2hMbmVndGg7XG4gICAgICAgIC8vICAgICAgICAgLy/lrr3luqZcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBzdXJmYWNlV2lkdGggPSAyO1xuICAgICAgICAvLyAgICAgICAgIC8v5byn6Z2i6auY5bqmXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgY2FtYmVyZWRIZWlnaHQgPSA0O1xuICAgICAgICAvLyAgICAgICAgIC8v5Y2K5b6EXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgciA9IDI7XG4gICAgICAgIC8vICAgICAgICAgLy/orqHnrpflh7rlvKfluqZcbiAgICAgICAgLy8gICAgICAgICBjb25zdCByYWRpYW4gPSBNYXRoLlBJICogNCAvIDY7Ly9NYXRoLmF0YW4oKHN1cmZhY2VXaWR0aCAvIDIpIC8gKHIgLSBjYW1iZXJlZEhlaWdodCkpICogMjtcbiAgICAgICAgLy8gICAgICAgICAvL+W8gOWni+W8p+W6plxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHN0YXJ0UmFkaWFuID0gKE1hdGguUEkgLSByYWRpYW4pIC8gMjtcbiAgICAgICAgLy8gICAgICAgICAvL+iuoeeul+WHuuavj+atpeeahOW8p+W6plxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGNhbWJlcmVkU3RlcFJhZGlhbiA9IHJhZGlhbiAvIHN1cmZhY2VOdW07XG5cbiAgICAgICAgLy8gICAgICAgICAvLyBVdGlscy5DQ0xvZyhcInJhZGlhblwiLCByYWRpYW4sIFwiYW5nbGVcIiwgVXRpbHMuUmFkaWFuVG9BbmdsZShyYWRpYW4pKTtcbiAgICAgICAgLy8gICAgICAgICAvL+ivpeW5s+mdoumcgOimgeeahOmhtueCueaVsFxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHZlcnRleF9jb3VudCA9IChzdXJmYWNlTnVtICsgMSkgKiAyO1xuXG4gICAgICAgIC8vICAgICAgICAgLy/lubPpnaLpobbngrnmlbDnu4RcbiAgICAgICAgLy8gICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IFtdO1xuICAgICAgICAvLyAgICAgICAgIGxldCB2aSA9IDA7XG4gICAgICAgIC8vICAgICAgICAgY29uc3Qgbm9ybWFscyA9IFtdO1xuICAgICAgICAvLyAgICAgICAgIGxldCB1dnMgPSBbXTtcblxuICAgICAgICAvLyAgICAgICAgIGZvciAobGV0IHNpID0gMDsgc2kgPD0gc3VyZmFjZU51bTsgc2krKykge1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCB1ID0gc2kgLyBzdXJmYWNlTnVtO1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyBjb25zdCB2ID0geSAvIHZTZWdtZW50cztcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHggPSBNYXRoLmNvcyhzdGFydFJhZGlhbiArIHNpICogY2FtYmVyZWRTdGVwUmFkaWFuKSAqIHI7XG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB5ID0gTWF0aC5zaW4oc3RhcnRSYWRpYW4gKyBzaSAqIGNhbWJlcmVkU3RlcFJhZGlhbikgKiByO1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyBVdGlscy5DQ0xvZyhcInN1cmZhY2VOdW0tLXgtLVwiLCB4LCBcIi0teS0tXCIsIHkpO1xuICAgICAgICAvLyAgICAgICAgICAgICAvL+W3puS4i1xuICAgICAgICAvLyAgICAgICAgICAgICB2ZXJ0aWNlc1t2aSsrXSA9IG5ldyBjY2MzZC5WZWMzKHgsIC15LCAtc3VyZmFjZUxlbmd0aCAvIDIpO1xuICAgICAgICAvLyAgICAgICAgICAgICBub3JtYWxzLnB1c2goMCwgMSwgMCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHV2cy5wdXNoKHUsIDApO1xuICAgICAgICAvLyAgICAgICAgICAgICAvL+W3puS4ilxuICAgICAgICAvLyAgICAgICAgICAgICB2ZXJ0aWNlc1t2aSsrXSA9IG5ldyBjY2MzZC5WZWMzKHgsIC15LCBzdXJmYWNlTGVuZ3RoIC8gMik7XG4gICAgICAgIC8vICAgICAgICAgICAgIG5vcm1hbHMucHVzaCgwLCAxLCAwKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdXZzLnB1c2godSwgMSk7XG5cbiAgICAgICAgLy8gICAgICAgICB9XG5cbiAgICAgICAgLy8gICAgICAgICAvLyBVdGlscy5DQ0xvZyhcIi0tdmVydGljZXMtLVwiLCB2ZXJ0aWNlcyk7XG5cbiAgICAgICAgLy8gICAgICAgICAvL+e7mOWItue0ouW8lVxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGluZGljZXMgPSBbXTtcblxuICAgICAgICAvLyAgICAgICAgIGZvciAobGV0IGluZGljZXNJbmRleCA9IDA7IGluZGljZXNJbmRleCA8IHN1cmZhY2VOdW07IGluZGljZXNJbmRleCsrKSB7XG5cbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGEgPSBpbmRpY2VzSW5kZXggKiAyO1xuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgYiA9IGEgKyAxO1xuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgYyA9IGEgKyAyO1xuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZCA9IGEgKyAzO1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyBVdGlscy5DQ0xvZyhcIi0tYS0tXCIsIGEsIFwiLS1iLS1cIiwgYiwgXCItLWMtLVwiLCBjLCBcIi0tZC0tXCIsIGQpO1xuICAgICAgICAvLyAgICAgICAgICAgICAvL+ato+mdolxuICAgICAgICAvLyAgICAgICAgICAgICBpbmRpY2VzLnB1c2goYSwgYiwgYyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGluZGljZXMucHVzaChiLCBkLCBjKTtcblxuICAgICAgICAvLyAgICAgICAgICAgICAvL+iDjOmdolxuICAgICAgICAvLyAgICAgICAgICAgICBpbmRpY2VzLnB1c2goYSwgYywgYik7XG4gICAgICAgIC8vICAgICAgICAgICAgIGluZGljZXMucHVzaChiLCBjLCBkKTtcbiAgICAgICAgLy8gICAgICAgICB9XG5cbiAgICAgICAgLy8gICAgICAgICAvLyBVdGlscy5DQ0xvZyhcIi0taW5kaWNlcy0tXCIsIGluZGljZXMpO1xuXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gW107XG4gICAgICAgIC8vICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZlcnRpY2VzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgdGVtcHZlYzMgPSB2ZXJ0aWNlc1tpbmRleF07XG4gICAgICAgIC8vICAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKHRlbXB2ZWMzLngsIHRlbXB2ZWMzLnksIHRlbXB2ZWMzLnopO1xuXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIC8vIFV0aWxzLkNDTG9nKFwiLS1wb3NpdGlvbnMtLVwiLCBwb3NpdGlvbnMpO1xuXG4gICAgICAgIC8vICAgICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgcG9zaXRpb25zLFxuICAgICAgICAvLyAgICAgICAgICAgICBub3JtYWxzLFxuICAgICAgICAvLyAgICAgICAgICAgICB1dnMsXG4gICAgICAgIC8vICAgICAgICAgICAgIGluZGljZXMsXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIG1pblBvcyxcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gbWF4UG9zLFxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBib3VuZGluZ1JhZGl1cyxcbiAgICAgICAgLy8gICAgICAgICB9XG5cbiAgICAgICAgLy8gICAgICAgICB0aGlzLm1fUm9hZE1lc2ggPSBjY2MzZC51dGlscy5jcmVhdGVNZXNoKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgLy/pmbbnvZBcbiAgICBjcmVhdGVQb3N0TWVzaCgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIC8vIH1cbn1cbiJdfQ==