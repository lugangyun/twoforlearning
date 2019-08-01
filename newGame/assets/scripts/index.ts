// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Button)
    toLobby: cc.Button = null;


    // LIFE-CYCLE CALLBACKS:

    //onLoad () {}

    start() {
        this.node.getChildByName("indexbtn").on(cc.Node.EventType.TOUCH_START, this.callback, this);
        console.log(this.node.getChildByName("indexbtn"));
    }
    callback(event) {
        console.log(event.target.name);
        switch (event.target.name) {
            case "indexbtn":
                cc.director.loadScene("lobby");
                break;
            default:
                break;
        }
    }
    // update (dt) {}
}
