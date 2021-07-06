// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

cc.macro.CLEANUP_IMAGE_CACHE = false;
cc.dynamicAtlasManager.enabled = true;

@ccclass
export default class shader_autoAtlas_main extends cc.Component {


    @property(cc.Node)
    img_round_shader: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}

    onClick(eventHandler: cc.Component.EventHandler, customEventData: any) {
        let nodeName = eventHandler.target.name;
        console.log("onClick =====", nodeName)
        switch (nodeName) {
            case "btn_loadUrlImg":
                this.loadUrlImg();
                break;
            case "btn_loadUrlImg_Shader":
                this.loadUrlImg_Shader();
                break;
            case "btn_loadResImg":
                this.loadResImg();
                break;

            default:
                break;
        }
    }

    loadResImg() {
        let parentNode = this.node.getChildByName("img_layout");
        if (parentNode) {
            let imgPtah = "textures/wolf_setting_img_mic_no.png";
            cc.loader.loadRes(imgPtah, (err, asset) => {
                if (err) {
                    console.log("loadUrlImg err", err);
                    return;
                }
                console.log("loadUrlImg urlImg", imgPtah);
                console.log("loadUrlImg urlImg", asset);
                let obj = new cc.Node("img_url");
                obj.parent = parentNode;
                let spriteCom = obj.addComponent(cc.Sprite);
                spriteCom.spriteFrame = new cc.SpriteFrame(asset);
            })
        }
    }

    loadUrlImg() {

        let parentNode = this.node.getChildByName("img_layout");
        if (parentNode) {
            let urlImg = "https://qiniustatic.wodidashi.com/avatar2.0/makeup/0/86/fengche_nv.png";
            cc.loader.load(urlImg, (err, asset) => {
                if (err) {
                    console.log("loadUrlImg err", err);
                    return;
                }

                console.log("loadUrlImg urlImg", urlImg);
                console.log("loadUrlImg urlImg", asset);
                let obj = new cc.Node("img_url");
                obj.parent = parentNode;

                let spriteCom = obj.addComponent(cc.Sprite);
                spriteCom.spriteFrame = new cc.SpriteFrame(asset);
            })
        }
    }

    loadUrlImg_Shader() {

        // let obj = this.node.getChildByName("img_round_shader");
        // if (obj) {
        let urlImg = "http://wx.qlogo.cn/mmopen/ajNVdqHZLLDbia3DV1HyfiavnfQ93VmqYy3RBCa794HPicWWYVBLMwRbV21l38WGUgXcTxjGCyzJj1dAUDlN7UMMQ/132.png";
        cc.loader.load({ url: urlImg, type: "png" }, (err, asset: cc.Texture2D) => {
            if (err) {
                console.log("loadUrlImg err", err);
                return;
            }
            console.log("loadUrlImg urlImg", urlImg);
            console.log("loadUrlImg urlImg", asset);
            asset.packable = false;
            let spriteCom = this.img_round_shader.getComponent(cc.Sprite);
            spriteCom.spriteFrame = new cc.SpriteFrame(asset);
        })
        // }
    }
}
