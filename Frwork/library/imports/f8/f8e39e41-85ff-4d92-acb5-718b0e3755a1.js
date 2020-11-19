"use strict";
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