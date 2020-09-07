/**
 * tg策略服务
 * 管理交叉推广
 * 
 */

export default class TgStrategyServer {

    private static _instance: TgStrategyServer;

    /**
     * 构造函数
     */
    constructor() {
    }

    public static getInstance(): TgStrategyServer {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new TgStrategyServer())
        return this._instance
    }
    
}