
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manage/NodePoolManage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8e395Bhf9Nkqy1cYsON1Wh', 'NodePoolManage');
// scripts/manage/NodePoolManage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../utils/Utils");
exports.PoolName = {
    Obs: "Obs",
    Car: "Car",
    Map: "map"
};
var NodePoolData = {
    nodePool: null,
    prefab: null,
};
var NodePoolManage = /** @class */ (function () {
    /**
     * 构造函数
     */
    function NodePoolManage() {
        this.m_NodePool = new Map();
    }
    NodePoolManage.getInstance = function () {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new NodePoolManage());
        return this._instance;
    };
    /**
     * 创建对象池
     * @param {string} _key 对象池名字
     * @param {any} _prefab 预制体
     * @param {number} _count 创建的数量
     */
    NodePoolManage.prototype.CreateNoodePool = function (_key, _prefab, _count) {
        Utils_1.default.CCLog("CreateNpcNoodePool", _count);
        if (_key == "" || _prefab == null || _count == 0) {
            return;
        }
        //先判断是否有该对象池
        var nodePoolData = this.m_NodePool.get(_key);
        //如果不存在就新建一个对象池
        if (!nodePoolData) {
            nodePoolData = Utils_1.default.CloneObj(NodePoolData);
            nodePoolData.nodePool = new cc.NodePool();
            nodePoolData.prefab = _prefab;
            this.m_NodePool.set(_key, nodePoolData);
        }
        for (var index = 0; index < _count; index++) {
            var objnode = cc.instantiate(nodePoolData.prefab);
            nodePoolData.nodePool.put(objnode);
        }
        Utils_1.default.CCLog("this.m_NodePool", this.m_NodePool);
    };
    /**
     * 获取一个node
     * @param {string} _key 对象池名字
     * @param {cc.Node} _parent
     */
    NodePoolManage.prototype.GetNodeToNoodePool = function (_key, _parent) {
        if (_parent === void 0) { _parent = null; }
        var objNode = null;
        //先判断是否有该对象池
        var nodePoolData = this.m_NodePool.get(_key);
        //如果不存在
        if (!nodePoolData) {
            Utils_1.default.CCLog(_key + "__nodepool_not_create");
            return objNode;
        }
        // 通过 size 接口判断对象池中是否有空闲的对象
        if (nodePoolData.nodePool.size()) {
            objNode = nodePoolData.nodePool.get();
        }
        else {
            //生成一个新的对象
            objNode = cc.instantiate(nodePoolData.prefab);
        }
        objNode.parent = _parent; // 将生成的敌人加入节点树
        return objNode;
    };
    /**
     * 将单独的node归还对象池
     * @param {string} _key 对象池名字
     * @param {cc.Node} _npcNode
     */
    NodePoolManage.prototype.PutNodeToNoodePool = function (_key, _node) {
        //先判断是否有该对象池
        var nodePoolData = this.m_NodePool.get(_key);
        //如果不存在
        if (!nodePoolData) {
            Utils_1.default.CCLog(_key + "__nodepool_not_create");
            return;
        }
        //将node放回节点
        nodePoolData.nodePool.put(_node);
        // Utils.CCLog("this.m_NodePool", this.m_NodePool);
    };
    /**
     * 清除对应的对象池
     * @param {string} _key 对象池名字
     */
    NodePoolManage.prototype.ClearNoodePool = function (_key) {
        //先判断是否有该对象池
        var nodePoolData = this.m_NodePool.get(_key);
        //如果不存在
        if (!nodePoolData) {
            Utils_1.default.CCLog(_key + "__nodepool_not_create");
            return;
        }
        //调用clear清除对象池
        nodePoolData.nodePool.clear();
        //将对象在map删除
        this.m_NodePool.delete(_key);
    };
    return NodePoolManage;
}());
exports.default = NodePoolManage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZS9Ob2RlUG9vbE1hbmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFtQztBQUV4QixRQUFBLFFBQVEsR0FBRztJQUNsQixHQUFHLEVBQUUsS0FBSztJQUNWLEdBQUcsRUFBRSxLQUFLO0lBQ1YsR0FBRyxFQUFFLEtBQUs7Q0FDYixDQUFBO0FBRUQsSUFBSSxZQUFZLEdBQUc7SUFDZixRQUFRLEVBQUUsSUFBSTtJQUNkLE1BQU0sRUFBRSxJQUFJO0NBQ2YsQ0FBQTtBQUVEO0lBTUk7O09BRUc7SUFDSDtRQUxRLGVBQVUsR0FBcUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQU9qRCxDQUFDO0lBRWEsMEJBQVcsR0FBekI7UUFDSSx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQyxDQUFBO1FBQ3pELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUN6QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSx3Q0FBZSxHQUF0QixVQUF1QixJQUFZLEVBQUUsT0FBWSxFQUFFLE1BQWM7UUFDN0QsZUFBSyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUN6QyxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzlDLE9BQU87U0FDVjtRQUVELFlBQVk7UUFDWixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxlQUFlO1FBQ2YsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNmLFlBQVksR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzVDLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDMUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7WUFFOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFBO1NBQzFDO1FBRUQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN6QyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRCxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QztRQUVELGVBQUssQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksMkNBQWtCLEdBQXpCLFVBQTBCLElBQVksRUFBRSxPQUF1QjtRQUF2Qix3QkFBQSxFQUFBLGNBQXVCO1FBQzNELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztRQUNuQixZQUFZO1FBQ1osSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsT0FBTztRQUNQLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDZixlQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyx1QkFBdUIsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sT0FBTyxDQUFDO1NBQ2xCO1FBRUQsMkJBQTJCO1FBQzNCLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM5QixPQUFPLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN6QzthQUNJO1lBQ0QsVUFBVTtZQUNWLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsY0FBYztRQUN4QyxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDJDQUFrQixHQUF6QixVQUEwQixJQUFZLEVBQUUsS0FBYztRQUVsRCxZQUFZO1FBQ1osSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsT0FBTztRQUNQLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDZixlQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyx1QkFBdUIsQ0FBQyxDQUFDO1lBQzVDLE9BQU87U0FDVjtRQUNELFdBQVc7UUFDWCxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxtREFBbUQ7SUFDdkQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHVDQUFjLEdBQXJCLFVBQXNCLElBQVk7UUFFOUIsWUFBWTtRQUNaLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLE9BQU87UUFDUCxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2YsZUFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsdUJBQXVCLENBQUMsQ0FBQztZQUM1QyxPQUFPO1NBQ1Y7UUFDRCxjQUFjO1FBQ2QsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixXQUFXO1FBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FwSEEsQUFvSEMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IHZhciBQb29sTmFtZSA9IHtcbiAgICBPYnM6IFwiT2JzXCIsXG4gICAgQ2FyOiBcIkNhclwiLFxuICAgIE1hcDogXCJtYXBcIlxufVxuXG52YXIgTm9kZVBvb2xEYXRhID0ge1xuICAgIG5vZGVQb29sOiBudWxsLFxuICAgIHByZWZhYjogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVBvb2xNYW5hZ2Uge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBOb2RlUG9vbE1hbmFnZTtcblxuICAgIHByaXZhdGUgbV9Ob2RlUG9vbDogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXAoKTtcblxuICAgIC8qKlxuICAgICAqIOaehOmAoOWHveaVsFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBOb2RlUG9vbE1hbmFnZSB7XG4gICAgICAgIC8vIOWmguaenCBpbnN0YW5jZSDmmK/kuIDkuKrlrp7kvosg55u05o6l6L+U5Zue77yMICDlpoLmnpzkuI3mmK8g5a6e5L6L5YyW5ZCO6L+U5ZueXG4gICAgICAgIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyBOb2RlUG9vbE1hbmFnZSgpKVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJvlu7rlr7nosaHmsaBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX2tleSDlr7nosaHmsaDlkI3lrZdcbiAgICAgKiBAcGFyYW0ge2FueX0gX3ByZWZhYiDpooTliLbkvZNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX2NvdW50IOWIm+W7uueahOaVsOmHj1xuICAgICAqL1xuICAgIHB1YmxpYyBDcmVhdGVOb29kZVBvb2woX2tleTogc3RyaW5nLCBfcHJlZmFiOiBhbnksIF9jb3VudDogbnVtYmVyKSB7XG4gICAgICAgIFV0aWxzLkNDTG9nKFwiQ3JlYXRlTnBjTm9vZGVQb29sXCIsIF9jb3VudClcbiAgICAgICAgaWYgKF9rZXkgPT0gXCJcIiB8fCBfcHJlZmFiID09IG51bGwgfHwgX2NvdW50ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5YWI5Yik5pat5piv5ZCm5pyJ6K+l5a+56LGh5rGgXG4gICAgICAgIGxldCBub2RlUG9vbERhdGEgPSB0aGlzLm1fTm9kZVBvb2wuZ2V0KF9rZXkpO1xuICAgICAgICAvL+WmguaenOS4jeWtmOWcqOWwseaWsOW7uuS4gOS4quWvueixoeaxoFxuICAgICAgICBpZiAoIW5vZGVQb29sRGF0YSkge1xuICAgICAgICAgICAgbm9kZVBvb2xEYXRhID0gVXRpbHMuQ2xvbmVPYmooTm9kZVBvb2xEYXRhKTtcbiAgICAgICAgICAgIG5vZGVQb29sRGF0YS5ub2RlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICAgICAgICAgICAgbm9kZVBvb2xEYXRhLnByZWZhYiA9IF9wcmVmYWI7XG5cbiAgICAgICAgICAgIHRoaXMubV9Ob2RlUG9vbC5zZXQoX2tleSwgbm9kZVBvb2xEYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IF9jb3VudDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IG9iam5vZGUgPSBjYy5pbnN0YW50aWF0ZShub2RlUG9vbERhdGEucHJlZmFiKTtcbiAgICAgICAgICAgIG5vZGVQb29sRGF0YS5ub2RlUG9vbC5wdXQob2Jqbm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBVdGlscy5DQ0xvZyhcInRoaXMubV9Ob2RlUG9vbFwiLCB0aGlzLm1fTm9kZVBvb2wpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluS4gOS4qm5vZGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX2tleSDlr7nosaHmsaDlkI3lrZdcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IF9wYXJlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgR2V0Tm9kZVRvTm9vZGVQb29sKF9rZXk6IHN0cmluZywgX3BhcmVudDogY2MuTm9kZSA9IG51bGwpOiBjYy5Ob2RlIHtcbiAgICAgICAgbGV0IG9iak5vZGUgPSBudWxsO1xuICAgICAgICAvL+WFiOWIpOaWreaYr+WQpuacieivpeWvueixoeaxoFxuICAgICAgICBsZXQgbm9kZVBvb2xEYXRhID0gdGhpcy5tX05vZGVQb29sLmdldChfa2V5KTtcbiAgICAgICAgLy/lpoLmnpzkuI3lrZjlnKhcbiAgICAgICAgaWYgKCFub2RlUG9vbERhdGEpIHtcbiAgICAgICAgICAgIFV0aWxzLkNDTG9nKF9rZXkgKyBcIl9fbm9kZXBvb2xfbm90X2NyZWF0ZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBvYmpOb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6YCa6L+HIHNpemUg5o6l5Y+j5Yik5pat5a+56LGh5rGg5Lit5piv5ZCm5pyJ56m66Zey55qE5a+56LGhXG4gICAgICAgIGlmIChub2RlUG9vbERhdGEubm9kZVBvb2wuc2l6ZSgpKSB7XG4gICAgICAgICAgICBvYmpOb2RlID0gbm9kZVBvb2xEYXRhLm5vZGVQb29sLmdldCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy/nlJ/miJDkuIDkuKrmlrDnmoTlr7nosaFcbiAgICAgICAgICAgIG9iak5vZGUgPSBjYy5pbnN0YW50aWF0ZShub2RlUG9vbERhdGEucHJlZmFiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iak5vZGUucGFyZW50ID0gX3BhcmVudDsgLy8g5bCG55Sf5oiQ55qE5pWM5Lq65Yqg5YWl6IqC54K55qCRXG4gICAgICAgIHJldHVybiBvYmpOb2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWwhuWNleeLrOeahG5vZGXlvZLov5jlr7nosaHmsaBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX2tleSDlr7nosaHmsaDlkI3lrZdcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IF9ucGNOb2RlIFxuICAgICAqL1xuICAgIHB1YmxpYyBQdXROb2RlVG9Ob29kZVBvb2woX2tleTogc3RyaW5nLCBfbm9kZTogY2MuTm9kZSkge1xuXG4gICAgICAgIC8v5YWI5Yik5pat5piv5ZCm5pyJ6K+l5a+56LGh5rGgXG4gICAgICAgIGxldCBub2RlUG9vbERhdGEgPSB0aGlzLm1fTm9kZVBvb2wuZ2V0KF9rZXkpO1xuICAgICAgICAvL+WmguaenOS4jeWtmOWcqFxuICAgICAgICBpZiAoIW5vZGVQb29sRGF0YSkge1xuICAgICAgICAgICAgVXRpbHMuQ0NMb2coX2tleSArIFwiX19ub2RlcG9vbF9ub3RfY3JlYXRlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8v5bCGbm9kZeaUvuWbnuiKgueCuVxuICAgICAgICBub2RlUG9vbERhdGEubm9kZVBvb2wucHV0KF9ub2RlKTtcbiAgICAgICAgLy8gVXRpbHMuQ0NMb2coXCJ0aGlzLm1fTm9kZVBvb2xcIiwgdGhpcy5tX05vZGVQb29sKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuIXpmaTlr7nlupTnmoTlr7nosaHmsaBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX2tleSDlr7nosaHmsaDlkI3lrZdcbiAgICAgKi9cbiAgICBwdWJsaWMgQ2xlYXJOb29kZVBvb2woX2tleTogc3RyaW5nKSB7XG5cbiAgICAgICAgLy/lhYjliKTmlq3mmK/lkKbmnInor6Xlr7nosaHmsaBcbiAgICAgICAgbGV0IG5vZGVQb29sRGF0YSA9IHRoaXMubV9Ob2RlUG9vbC5nZXQoX2tleSk7XG4gICAgICAgIC8v5aaC5p6c5LiN5a2Y5ZyoXG4gICAgICAgIGlmICghbm9kZVBvb2xEYXRhKSB7XG4gICAgICAgICAgICBVdGlscy5DQ0xvZyhfa2V5ICsgXCJfX25vZGVwb29sX25vdF9jcmVhdGVcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy/osIPnlKhjbGVhcua4hemZpOWvueixoeaxoFxuICAgICAgICBub2RlUG9vbERhdGEubm9kZVBvb2wuY2xlYXIoKTtcbiAgICAgICAgLy/lsIblr7nosaHlnKhtYXDliKDpmaRcbiAgICAgICAgdGhpcy5tX05vZGVQb29sLmRlbGV0ZShfa2V5KTtcbiAgICB9XG5cbn0iXX0=