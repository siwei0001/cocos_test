import { _decorator, Component, Node, Vec3, ModelComponent, utils, Mesh, CCObject, Vec2, Material } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('MeshTest')
export class MeshTest extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    @property(Node)
    MeshNode: Node = null;
    @property(Material)
    MeshMaterial: Material = null;

    start() {
        // Your initialization goes here.
    }

    //三角形
    createtTriangleMesh() {
        let positions = [];
        let normals = [];
        let uvs = [];
        let indices = [];
        let mesh: Mesh = null;
        positions.push(0, 0, 0);
        positions.push(0, 1, 0);
        positions.push(1, 0, 0);
        //背面
        indices.push(0, 2, 1);
        //正面
        indices.push(0, 1, 2);
        let Options = {
            positions,
            normals,
            uvs,
            indices,
        }
        mesh = utils.createMesh(Options);
        console.log("Options", Options);
        console.log("mesh", mesh);
        //model组件
        let model = this.MeshNode.getComponent(ModelComponent);
        if (!model) {
            model = this.MeshNode.addComponent(ModelComponent);
        }
        model.mesh = mesh;

    }

    //平面
    createPlanMesh() {
        let positions = [];
        let normals = [];
        let uvs = [];
        let indices = [];
        let mesh: Mesh = null;
        //第一个顶点
        positions.push(0, 0, 0);
        //第二个顶点
        positions.push(0, 1, 0);
        //第三个顶点
        positions.push(1, 0, 0);
        //第四个顶点
        positions.push(1, 1, 0);

        //背面
        indices.push(0, 2, 1);
        indices.push(2, 3, 1);

        //正面
        indices.push(0, 1, 2);
        indices.push(1, 3, 2);

        let Options = {
            positions,
            normals,
            uvs,
            indices,
        }
        mesh = utils.createMesh(Options);
        console.log("Options", Options);
        console.log("mesh", mesh);
        //model组件
        let model = this.MeshNode.getComponent(ModelComponent);
        if (!model) {
            model = this.MeshNode.addComponent(ModelComponent);
        }
        model.mesh = mesh;
    }

    //立方体
    createBoxMesh() {
        let positions = [];
        let normals = [];
        let uvs = [];
        let indices = [];
        let mesh: Mesh = null;
        //顶点8个 四个面
        positions.push(0, 0, 0);
        positions.push(1, 0, 0);
        positions.push(1, 1, 0);
        positions.push(0, 1, 0);
        positions.push(0, 1, 1);
        positions.push(1, 1, 1);
        positions.push(1, 0, 1);
        positions.push(0, 0, 1);
        // 渲染顺序
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
        indices.push(2, 6, 1);

        let Options = {
            positions,
            normals,
            uvs,
            indices,
        }
        mesh = utils.createMesh(Options);
        console.log("Options", Options);
        console.log("mesh", mesh);
        //model组件
        let model = this.MeshNode.getComponent(ModelComponent);
        if (!model) {
            model = this.MeshNode.addComponent(ModelComponent);
        }
        model.mesh = mesh;
    }

    createOctahedronMesh() {
        let positions = [];
        let normals = [];
        let uvs = [];
        let indices = [];
        let mesh: Mesh = null;
        // //设置顶点
        //down
        positions.push(0, 0, 0);
        //forward
        positions.push(0, 0.5, -1);
        //left
        positions.push(-0.5, 0.5, 0);
        //back
        positions.push(0, 0.5, 1);
        //right
        positions.push(0.5, 0.5, 0);
        //up
        positions.push(0, 1, 0);
        // 渲染顺序
        indices.push(0, 1, 2);
        indices.push(0, 2, 3);
        indices.push(0, 3, 4);
        indices.push(0, 4, 1);

        indices.push(5, 2, 1);
        indices.push(5, 3, 2);
        indices.push(5, 4, 3);
        indices.push(5, 1, 4);

        let Options = {
            positions,
            normals,
            uvs,
            indices,
        }
        mesh = utils.createMesh(Options);
        console.log("Options", Options);
        console.log("mesh", mesh);
        //model组件
        let model = this.MeshNode.getComponent(ModelComponent);
        if (!model) {
            model = this.MeshNode.addComponent(ModelComponent);
        }
        model.mesh = mesh;
    };

    //球体
    createSphereMesh() {
        //6:画球
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
    }

    //陶罐
    createPostMesh() {

    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
