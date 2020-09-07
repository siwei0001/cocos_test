/**
 * tg推广服务
 * 管理交叉推广
 * 
 */

export default class TgPromoteServer {

    private static _instance: TgPromoteServer;

    /**
     * 构造函数
     */
    constructor() {
    }

    public static getInstance(): TgPromoteServer {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new TgPromoteServer())
        return this._instance
    }
}