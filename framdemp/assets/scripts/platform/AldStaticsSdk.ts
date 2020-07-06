
/**
 * 阿拉丁服务
 */
export class AldStaticsSdk {

    /**
     * 上传openid
     * @param {string} _openID 
     */
    static SendOpenID(_openID: string) {
        if (_openID) {
            window["wx"].aldSendOpenid(_openID);
        }
    }

    /**
     * 发送gamebox阿拉丁自定义事件
     * @param {string} _gameName
     * @param {any} _appdata
     * @param {string} _menuname
     */
    static SendGameBoxEvent(_gameName: string, _appdata: any, _menuname: string = null) {
        // console.log('SendGameBoxEvent:', _appdata);
        // var data_name = data.name_skip?data.name_skip:_appdata.name;
        let data = {};
        data["自研游戏名称"] = _gameName;
        data["推广游戏名称"] = _appdata.name_skip ? _appdata.name_skip : _appdata.name;
        data["位置统计"] = _menuname ? _menuname : _appdata.tjwz;
        // 统计所有游戏
        window["wx"].aldSendEvent('自研盒子v201905-点击统计', data);

        data = {};
        data[_gameName] = _appdata.name_skip ? _appdata.name_skip : _appdata.name;
        data[_gameName + "_位置"] = _menuname ? _menuname + '_' + _gameName : _appdata.tjwz + '_' + _gameName;
        // 统计当前游戏
        window["wx"].aldSendEvent('自研盒子v201905-游戏统计', data);
    }

    /**
     * 交叉推广位置
     * @param {string} _gameName 
     * @param {any} _gamePos 
     */
    static SendTgAdPosEvent(_gameName: string, _gamePos: any) {
        // 统计所有游戏
        let data = {};
        data["自研游戏名称"] = _gameName;
        data["游戏位置"] = _gamePos;

        window["wx"].aldSendEvent('交叉推广统计', data);
    }

    /**
     * 交叉推广位置
     * @param {string} _eventName 
     * @param {any} _dataJson 
     */
    static SendEvent(_eventName: string, _dataJson: any) {
        window["wx"].aldSendEvent(_eventName, _dataJson);
    }

    /**
     * 关卡统计 关卡开始
     * @param {string} _stageId     关卡ID      该字段只能是 1 , 2 , 3 , 1.1 , 1.2 , 1.3 格式 最多支持 32 个字符 
     * @param {string} _stageName   关卡名字     最多支持 32 个字符
     * @param {string} _uuid   用户uuid
     */
    static Stage_OnStart(_stageId: string = "1", _stageName: string = "第一关", _uuid: string = null) {
        // console.log('Stage_OnStart _stageId:', _stageId, "_stageName:", _stageName);
        //关卡开始
        window["wx"].aldStage.onStart({
            stageId: _stageId,     //关卡ID 该字段必传
            stageName: _stageName, //关卡名称  该字段必传
            userId: _uuid //用户ID 可选
        })
    }

    /**
     * 关卡统计 关卡中使用道具
     * @param {string} _stageId     关卡ID      该字段只能是 1 , 2 , 3 , 1.1 , 1.2 , 1.3 格式 最多支持 32 个字符 
     * @param {string} _stageName   关卡名字     最多支持 32 个字符 
     * @param {string} _uuid        用户ID 
     * @param {string} _event       事件类型     payStart:发起支付 paySuccess:支付成功 payFail:支付失败 tools:使用道具 revive:复活 award:奖励
     * @param {string} _itemName    物品名字     
     * @param {string} _itemId      物品id     
     * @param {number} _itemCount   物品数量         
     * @param {string} _itemdesc    物品描述     
     * @param {number} _itemMoney   物品价格     
     * 
     */
    static Stage_OnRunning(_stageId: string = "1", _stageName: string = "第一关", _uuid: string = null, _event: string = "tools", _itemName: string = "物品名字", _itemId: string = "110", _itemCount: number = 1, _itemdesc: string = "描述", _itemMoney: number = 100) {
        // console.log('Stage_OnRunning _stageId:', _stageId, "_stageName:", _stageName);
        //关卡中
        window["wx"].aldStage.onRunning({
            stageId: _stageId,
            stageName: _stageName,
            userId: _uuid,
            event: _event,
            params: {
                itemName: _itemName,
                itemId: _itemId,
                itemCount: _itemCount,
                desc: _itemdesc,
                itemMoney: _itemMoney,
            }
        })
    }

    /**
     * 关卡统计 关卡结束
     * @param {string} _stageId     关卡ID      该字段只能是 1 , 2 , 3 , 1.1 , 1.2 , 1.3 格式 最多支持 32 个字符 
     * @param {string} _stageName   关卡名字     最多支持 32 个字符 
     * @param {string} _uuid        用户ID
     * @param {string} _event       事件类型     complete:成功 fail:失败 
     * @param {string} _stageDesc   原因描述     
     * 
     */
    static Stage_OnEnd(_stageId: string = "1", _stageName: string = "第一关", _uuid: string = null, _event: string = "complete", _stageDesc: string = "关卡完成") {
        // console.log('Stage_OnEnd _stageId:', _stageId, "_stageName:", _stageName);
        //关卡完成
        window["wx"].aldStage.onEnd({
            stageId: _stageId,    //关卡ID 该字段必传
            stageName: _stageName, //关卡名称  该字段必传
            userId: _uuid,  //用户ID 可选
            event: _event,   //关卡完成  关卡进行中，用户触发的操作    该字段必传
            params: {
                desc: _stageDesc   //描述
            }
        })
    }

}