System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, ModelComponent, _dec, _class, _crd, ccclass, property, MeshTest;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      ModelComponent = _cc.ModelComponent;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "f28d8jJGnpNO6ycyhrhPm6F", "MeshTest", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MeshTest", MeshTest = (_dec = ccclass('MeshTest'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(MeshTest, _Component);

        function MeshTest() {
          _classCallCheck(this, MeshTest);

          return _possibleConstructorReturn(this, _getPrototypeOf(MeshTest).apply(this, arguments));
        }

        _createClass(MeshTest, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {} // Your initialization goes here.
          //三角形

        }, {
          key: "createtTriangleMesh",
          value: function createtTriangleMesh() {
            //     positions,
            //     normals,
            //     uvs,
            //     indices,
            //     minPos,
            //     maxPos,
            //     boundingRadius
            var positions = [];
            var mesh = null;
            var Options = {}; // utils.createMesh(Options,mesh,Options);
            //model组件

            var model = this.node.getComponent(ModelComponent);

            if (!model) {
              model = this.node.addComponent(ModelComponent);
            } // model.material = 
            // model.mesh = 

          } //平面

        }, {
          key: "createPlanMesh",
          value: function createPlanMesh() {
            var temp1 = new Vec3(0, 0, 0);
            var temp2 = new Vec3(0, 0, 0);
            var temp3 = new Vec3(0, 0, 0);
            var r = new Vec3(0, 0, 0);
            var c00 = new Vec3(0, 0, 0);
            var c10 = new Vec3(0, 0, 0);
            var c01 = new Vec3(0, 0, 0); // let uSegments = opts.widthSegments !== undefined ? opts.widthSegments : 10;
            // let vSegments = opts.lengthSegments !== undefined ? opts.lengthSegments : 10;
            // let hw = width * 0.5;
            // let hl = length * 0.5;
            // let positions = [];
            // let normals = [];
            // let uvs = [];
            // let indices = [];
            // let minPos = vec3.create(-hw, 0, -hl);
            // let maxPos = vec3.create(hw, 0, hl);
            // let boundingRadius = Math.sqrt(width * width + length * length);
            // vec3.set(c00, -hw, 0,  hl);
            // vec3.set(c10,  hw, 0,  hl);
            // vec3.set(c01, -hw, 0, -hl);
            // for (let y = 0; y <= vSegments; y++) {
            //   for (let x = 0; x <= uSegments; x++) {
            //     let u = x / uSegments;
            //     let v = y / vSegments;
            //     vec3.lerp(temp1, c00, c10, u);
            //     vec3.lerp(temp2, c00, c01, v);
            //     vec3.sub(temp3, temp2, c00);
            //     vec3.add(r, temp1, temp3);
            //     positions.push(r.x, r.y, r.z);
            //     normals.push(0, 1, 0);
            //     uvs.push(u, v);
            //     if ((x < uSegments) && (y < vSegments)) {
            //       let useg1 = uSegments + 1;
            //       let a = x + y * useg1;
            //       let b = x + (y + 1) * useg1;
            //       let c = (x + 1) + (y + 1) * useg1;
            //       let d = (x + 1) + y * useg1;
            //       indices.push(a, d, b);
            //       indices.push(d, c, b);
            //     }
            //   }
            //   return {
            //     positions,
            //     normals,
            //     uvs,
            //     indices,
            //     minPos,
            //     maxPos,
            //     boundingRadius
            //   };
          } //立方体

        }, {
          key: "createBoxMesh",
          value: function createBoxMesh() {} //球体

        }, {
          key: "createSphereMesh",
          value: function createSphereMesh() {} //陶罐

        }, {
          key: "createPostMesh",
          value: function createPostMesh() {} // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return MeshTest;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvc29sL1dvcmsvV29ya19HaXRIdWIvY29jb3NfdGVzdC9Qb3RzRGVtby9hc3NldHMvc2NyaXB0cy9tZXNoRGVtby9NZXNoVGVzdC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiVmVjMyIsIk1vZGVsQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTWVzaFRlc3QiLCJwb3NpdGlvbnMiLCJtZXNoIiwiT3B0aW9ucyIsIm1vZGVsIiwibm9kZSIsImdldENvbXBvbmVudCIsImFkZENvbXBvbmVudCIsInRlbXAxIiwidGVtcDIiLCJ0ZW1wMyIsInIiLCJjMDAiLCJjMTAiLCJjMDEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLGMsT0FBQUEsYzs7Ozs7O0FBQ3BDQyxNQUFBQSxPLEdBQXNCSixVLENBQXRCSSxPO0FBQVNDLE1BQUFBLFEsR0FBYUwsVSxDQUFiSyxROzswQkFJSkMsUSxXQURaRixPQUFPLENBQUMsVUFBRCxDOzs7Ozs7Ozs7Ozs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtrQ0FFUyxDQUVSLEMsQ0FERztBQUdKOzs7O2dEQUNxQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGdCQUFJRyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxnQkFBSUMsSUFBUyxHQUFFLElBQWY7QUFDQSxnQkFBSUMsT0FBTyxHQUFHLEVBQWQsQ0FYaUIsQ0FjakI7QUFDQTs7QUFDQSxnQkFBSUMsS0FBSyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QlQsY0FBdkIsQ0FBWjs7QUFDQSxnQkFBSSxDQUFDTyxLQUFMLEVBQVk7QUFDUkEsY0FBQUEsS0FBSyxHQUFHLEtBQUtDLElBQUwsQ0FBVUUsWUFBVixDQUF1QlYsY0FBdkIsQ0FBUjtBQUNILGFBbkJnQixDQXFCakI7QUFDQTs7QUFDSCxXLENBRUQ7Ozs7MkNBQ2dCO0FBQ1osZ0JBQUlXLEtBQUssR0FBRyxJQUFJWixJQUFKLENBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLENBQVo7QUFDQSxnQkFBSWEsS0FBSyxHQUFHLElBQUliLElBQUosQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsQ0FBWjtBQUNBLGdCQUFJYyxLQUFLLEdBQUcsSUFBSWQsSUFBSixDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixDQUFaO0FBQ0EsZ0JBQUllLENBQUMsR0FBRyxJQUFJZixJQUFKLENBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLENBQVI7QUFDQSxnQkFBSWdCLEdBQUcsR0FBRyxJQUFJaEIsSUFBSixDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixDQUFWO0FBQ0EsZ0JBQUlpQixHQUFHLEdBQUcsSUFBSWpCLElBQUosQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsQ0FBVjtBQUNBLGdCQUFJa0IsR0FBRyxHQUFHLElBQUlsQixJQUFKLENBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLENBQVYsQ0FQWSxDQVFaO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxXLENBRUQ7Ozs7MENBQ2UsQ0FFZCxDLENBRUQ7Ozs7NkNBQ2tCLENBRWpCLEMsQ0FFRDs7OzsyQ0FDZ0IsQ0FFZixDLENBRUQ7QUFDQTtBQUNBOzs7OztRQXZIMEJELFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIE1vZGVsQ29tcG9uZW50LCB1dGlscywgTWVzaCB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cblxuQGNjY2xhc3MoJ01lc2hUZXN0JylcbmV4cG9ydCBjbGFzcyBNZXNoVGVzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXG4gICAgLy8gZHVtbXkgPSAnJztcblxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cbiAgICAvLyBAcHJvcGVydHlcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxuICAgIH1cblxuICAgIC8v5LiJ6KeS5b2iXG4gICAgY3JlYXRldFRyaWFuZ2xlTWVzaCgpe1xuICAgICAgICAvLyAgICAgcG9zaXRpb25zLFxuICAgICAgICAvLyAgICAgbm9ybWFscyxcbiAgICAgICAgLy8gICAgIHV2cyxcbiAgICAgICAgLy8gICAgIGluZGljZXMsXG4gICAgICAgIC8vICAgICBtaW5Qb3MsXG4gICAgICAgIC8vICAgICBtYXhQb3MsXG4gICAgICAgIC8vICAgICBib3VuZGluZ1JhZGl1c1xuXG4gICAgICAgIGxldCBwb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgbGV0IG1lc2g6TWVzaCA9bnVsbDtcbiAgICAgICAgbGV0IE9wdGlvbnMgPSB7XG5cbiAgICAgICAgfVxuICAgICAgICAvLyB1dGlscy5jcmVhdGVNZXNoKE9wdGlvbnMsbWVzaCxPcHRpb25zKTtcbiAgICAgICAgLy9tb2RlbOe7hOS7tlxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KE1vZGVsQ29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgbW9kZWwgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KE1vZGVsQ29tcG9uZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vZGVsLm1hdGVyaWFsID0gXG4gICAgICAgIC8vIG1vZGVsLm1lc2ggPSBcbiAgICB9XG5cbiAgICAvL+W5s+mdolxuICAgIGNyZWF0ZVBsYW5NZXNoKCl7XG4gICAgICAgIGxldCB0ZW1wMSA9IG5ldyBWZWMzKDAsIDAsIDApO1xuICAgICAgICBsZXQgdGVtcDIgPSBuZXcgVmVjMygwLCAwLCAwKTtcbiAgICAgICAgbGV0IHRlbXAzID0gbmV3IFZlYzMoMCwgMCwgMCk7XG4gICAgICAgIGxldCByID0gbmV3IFZlYzMoMCwgMCwgMCk7XG4gICAgICAgIGxldCBjMDAgPSBuZXcgVmVjMygwLCAwLCAwKTtcbiAgICAgICAgbGV0IGMxMCA9IG5ldyBWZWMzKDAsIDAsIDApO1xuICAgICAgICBsZXQgYzAxID0gbmV3IFZlYzMoMCwgMCwgMCk7XG4gICAgICAgIC8vIGxldCB1U2VnbWVudHMgPSBvcHRzLndpZHRoU2VnbWVudHMgIT09IHVuZGVmaW5lZCA/IG9wdHMud2lkdGhTZWdtZW50cyA6IDEwO1xuICAgICAgICAvLyBsZXQgdlNlZ21lbnRzID0gb3B0cy5sZW5ndGhTZWdtZW50cyAhPT0gdW5kZWZpbmVkID8gb3B0cy5sZW5ndGhTZWdtZW50cyA6IDEwO1xuICAgICAgXG4gICAgICAgIC8vIGxldCBodyA9IHdpZHRoICogMC41O1xuICAgICAgICAvLyBsZXQgaGwgPSBsZW5ndGggKiAwLjU7XG4gICAgICBcbiAgICAgICAgLy8gbGV0IHBvc2l0aW9ucyA9IFtdO1xuICAgICAgICAvLyBsZXQgbm9ybWFscyA9IFtdO1xuICAgICAgICAvLyBsZXQgdXZzID0gW107XG4gICAgICAgIC8vIGxldCBpbmRpY2VzID0gW107XG4gICAgICAgIC8vIGxldCBtaW5Qb3MgPSB2ZWMzLmNyZWF0ZSgtaHcsIDAsIC1obCk7XG4gICAgICAgIC8vIGxldCBtYXhQb3MgPSB2ZWMzLmNyZWF0ZShodywgMCwgaGwpO1xuICAgICAgICAvLyBsZXQgYm91bmRpbmdSYWRpdXMgPSBNYXRoLnNxcnQod2lkdGggKiB3aWR0aCArIGxlbmd0aCAqIGxlbmd0aCk7XG4gICAgICBcbiAgICAgICAgLy8gdmVjMy5zZXQoYzAwLCAtaHcsIDAsICBobCk7XG4gICAgICAgIC8vIHZlYzMuc2V0KGMxMCwgIGh3LCAwLCAgaGwpO1xuICAgICAgICAvLyB2ZWMzLnNldChjMDEsIC1odywgMCwgLWhsKTtcbiAgICAgIFxuICAgICAgICAvLyBmb3IgKGxldCB5ID0gMDsgeSA8PSB2U2VnbWVudHM7IHkrKykge1xuICAgICAgICAvLyAgIGZvciAobGV0IHggPSAwOyB4IDw9IHVTZWdtZW50czsgeCsrKSB7XG4gICAgICAgIC8vICAgICBsZXQgdSA9IHggLyB1U2VnbWVudHM7XG4gICAgICAgIC8vICAgICBsZXQgdiA9IHkgLyB2U2VnbWVudHM7XG4gICAgICBcbiAgICAgICAgLy8gICAgIHZlYzMubGVycCh0ZW1wMSwgYzAwLCBjMTAsIHUpO1xuICAgICAgICAvLyAgICAgdmVjMy5sZXJwKHRlbXAyLCBjMDAsIGMwMSwgdik7XG4gICAgICAgIC8vICAgICB2ZWMzLnN1Yih0ZW1wMywgdGVtcDIsIGMwMCk7XG4gICAgICAgIC8vICAgICB2ZWMzLmFkZChyLCB0ZW1wMSwgdGVtcDMpO1xuICAgICAgXG4gICAgICAgIC8vICAgICBwb3NpdGlvbnMucHVzaChyLngsIHIueSwgci56KTtcbiAgICAgICAgLy8gICAgIG5vcm1hbHMucHVzaCgwLCAxLCAwKTtcbiAgICAgICAgLy8gICAgIHV2cy5wdXNoKHUsIHYpO1xuICAgICAgXG4gICAgICAgIC8vICAgICBpZiAoKHggPCB1U2VnbWVudHMpICYmICh5IDwgdlNlZ21lbnRzKSkge1xuICAgICAgICAvLyAgICAgICBsZXQgdXNlZzEgPSB1U2VnbWVudHMgKyAxO1xuICAgICAgICAvLyAgICAgICBsZXQgYSA9IHggKyB5ICogdXNlZzE7XG4gICAgICAgIC8vICAgICAgIGxldCBiID0geCArICh5ICsgMSkgKiB1c2VnMTtcbiAgICAgICAgLy8gICAgICAgbGV0IGMgPSAoeCArIDEpICsgKHkgKyAxKSAqIHVzZWcxO1xuICAgICAgICAvLyAgICAgICBsZXQgZCA9ICh4ICsgMSkgKyB5ICogdXNlZzE7XG4gICAgICBcbiAgICAgICAgLy8gICAgICAgaW5kaWNlcy5wdXNoKGEsIGQsIGIpO1xuICAgICAgICAvLyAgICAgICBpbmRpY2VzLnB1c2goZCwgYywgYik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgfVxuXG4gICAgICAgIC8vICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIHBvc2l0aW9ucyxcbiAgICAgICAgLy8gICAgIG5vcm1hbHMsXG4gICAgICAgIC8vICAgICB1dnMsXG4gICAgICAgIC8vICAgICBpbmRpY2VzLFxuICAgICAgICAvLyAgICAgbWluUG9zLFxuICAgICAgICAvLyAgICAgbWF4UG9zLFxuICAgICAgICAvLyAgICAgYm91bmRpbmdSYWRpdXNcbiAgICAgICAgLy8gICB9O1xuICAgIH1cblxuICAgIC8v56uL5pa55L2TXG4gICAgY3JlYXRlQm94TWVzaCgpe1xuXG4gICAgfVxuXG4gICAgLy/nkIPkvZNcbiAgICBjcmVhdGVTcGhlcmVNZXNoKCl7XG5cbiAgICB9XG5cbiAgICAvL+mZtue9kFxuICAgIGNyZWF0ZVBvc3RNZXNoKCl7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAvLyB9XG59XG4iXX0=