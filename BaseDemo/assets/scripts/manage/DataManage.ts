import Utils from "../utils/Utils";
import Http, { HttpReqType } from "../utils/Http";
import { BaseConfig } from "../config/BaseConfig";

// /**
// * 网络配置文件列表
// */
// export var NetJson = {
//     Game_Level_Config_Json: "game_level_config.json",
//     Game_SignIn_Config_Json: "game_signin_config.json",
//     Game_Item_Config_Json: "game_item_config.json",
//     Game_Treasurechest_Config_Json: "game_treasurechest_config.json",
// }

/**
* 本地配置文件列表
*/
export var ResJson = {
    Game_Level_Config_Json: "game_level_config.json",
    Game_Map_Config_Json: "game_map_config.json",
}

export default class DataManage {

    private static _instance: DataManage;

    private m_JsonData: Map<string, any> = new Map();

    /**
     * 构造函数
     */
    constructor() {
    }

    public static getInstance(): DataManage {
        // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
        this._instance || (this._instance = new DataManage())
        return this._instance
    }

    /**
     * 加载远程json文件 多文件形式
     * @param {Function} _callFun 
     * @param {string} _netUrl 
     * @param {...any} _jsonFile 
     */
    loadNetJson(_callFun: Function, _netUrl: string, ..._jsonFile) {
        Utils.CCLog('loadNetJson', _jsonFile);
        let fileCount = _jsonFile.length;
        let arrLoadSuccess = new Array();

        for (let i = 0; i < fileCount; i++) {
            let fileName = _jsonFile[i];
            if (fileName != '') {

                let objJson = this.m_JsonData.get(fileName);
                if (objJson) {
                    arrLoadSuccess.push(fileName);
                    if (arrLoadSuccess.length == fileCount) {
                        _callFun("success", arrLoadSuccess.length);
                    }
                    else {
                        _callFun("loading " + fileName, arrLoadSuccess.length);
                    }
                    continue;
                }

                let http = new Http();
                http.SetReqType(HttpReqType.GET);
                http.Request(_netUrl + fileName, (data) => {
                    Utils.CCLog('loadNetJson succes', data);
                    this.m_JsonData.set(fileName, data);
                    arrLoadSuccess.push(fileName);
                    if (arrLoadSuccess.length == fileCount) {
                        _callFun("success", arrLoadSuccess.length);
                    }
                    else {
                        _callFun("loading " + fileName, arrLoadSuccess.length);
                    }
                }, (err) => {
                    Utils.CCLog('loadNetJson err', err);
                })
            }
        }
    }

    /**
     * 加载远程json文件 数组形式
     * @param {Function} _callFun 
     * @param {string} _netUrl 
     * @param {Array<string>} _jsonFile 
     */
    loadNetJsonArray(_callFun: Function, _netUrl: string, _jsonFileArray: Array<string>) {
        Utils.CCLog('loadNetJsonArray', _jsonFileArray);
        let fileCount = _jsonFileArray.length;
        let arrLoadSuccess = new Array();

        for (let i = 0; i < fileCount; i++) {
            let fileName = _jsonFileArray[i];
            if (fileName != '') {

                let objJson = this.m_JsonData.get(fileName);
                if (objJson) {
                    arrLoadSuccess.push(fileName);
                    if (arrLoadSuccess.length == fileCount) {
                        _callFun("success", arrLoadSuccess.length);
                    }
                    else {
                        _callFun("loading " + fileName, arrLoadSuccess.length);
                    }
                    continue;
                }
                let http = new Http();
                http.SetReqType(HttpReqType.GET);
                http.Request(_netUrl + fileName, (data) => {
                    Utils.CCLog('LoadNetJsonArray succes', data);
                    this.m_JsonData.set(fileName, data);
                    arrLoadSuccess.push(fileName);
                    if (arrLoadSuccess.length == fileCount) {
                        _callFun("success", arrLoadSuccess.length);
                    }
                    else {
                        _callFun("loading " + fileName, arrLoadSuccess.length);
                    }
                }, (err) => {
                    Utils.CCLog('LoadNetJsonArray err', err);
                })
            }
        }
    }

    /**
     * 加载本地json文件 多文件形式
     * @param {Function} _callFun 
     * @param {string} _pathUrl 
     * @param {...any} _jsonFile 
     */
    loadResJson(_callFun: Function, _pathUrl: string, ..._jsonFile) {
        Utils.CCLog('loadResJson', _jsonFile);
        let fileCount = _jsonFile.length;
        let arrLoadSuccess = new Array();

        for (let i = 0; i < fileCount; i++) {
            let fileName = _jsonFile[i];
            if (fileName != '') {

                let objJson = this.m_JsonData.get(fileName);
                if (objJson) {
                    arrLoadSuccess.push(fileName);
                    if (arrLoadSuccess.length == fileCount) {
                        _callFun("success", arrLoadSuccess.length);
                    }
                    else {
                        _callFun("loading " + fileName, arrLoadSuccess.length);
                    }
                    continue;
                }

                cc.loader.loadRes(_pathUrl + fileName, cc.JsonAsset, (err, data) => {
                    if (err) {
                        Utils.CCLog('loadRes err', err);
                        return;
                    }
                    Utils.CCLog("loadResJson ", _pathUrl + fileName, "data", data);
                    this.m_JsonData.set(fileName, data.json);
                    arrLoadSuccess.push(fileName);
                    if (arrLoadSuccess.length == fileCount) {
                        _callFun("success", arrLoadSuccess.length);
                    }
                    else {
                        _callFun("loading " + fileName, arrLoadSuccess.length);
                    }
                })
            }
        }
    }

    /**
     * 返回对应json的数据
     * @param {string} _keyName 
     */
    getJson(_keyName: string) {
        return this.m_JsonData.get(_keyName);
    }

    /**
     * 返回对应 id 某一行的数据
     * @param {string} _keyName 
     * @param {any} _id 
     * 
     */
    getJsonValue(_keyName: string, _id: any) {
        let json = this.m_JsonData.get(_keyName);
        for (let index = 0; index < json.length; index++) {
            let data = json[index];
            if (data.ID == _id) {
                return data;
            }
        }

        return null;
    }

    /**
     * 初始化json数据
     * @param {Function} _callFun 
     */
    initJsonData(_callFun: Function) {
        let url = BaseConfig.NetConfig.NetRoot + BaseConfig.NetConfig.NetRes;
        //加载json
        this.loadNetJson((state, res) => {
            //配置资源加载完成
            if (state == "success") {
                if (_callFun) {
                    Utils.CCLog("this.m_JsonData", this.m_JsonData);
                    _callFun();
                }
            }
        }, url + "json/",
            ResJson.Game_Level_Config_Json,
            ResJson.Game_Map_Config_Json
        )
    }

}
