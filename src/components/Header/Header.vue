<template>
    <div class="Header">
        <div class="info">
            <a href="/">
                <img :src='require("@/assets/image/cnodejs.svg")' alt="网站logo" />
            </a>
            <span @click='dialogVisible = true'>关于</span>
        </div>
        <el-dialog title="关于本项目" :visible.sync="dialogVisible" width="35%">
            <!-- /* P.S. 当使用_blank时有一个容易忽略的安全漏洞，需要注意：https://developers.google.com/web/tools/lighthouse/audits/noopener?hl=zh-cn */ -->
            <div class='inside-dialog'>
                <p>
                作者：
                <a href="https://blog.csdn.net/weixin_40147786" target="_blank">
                    某某某
                </a>
                </p>
                <p>
                源码：
                <el-icon type="star" class='el-icon-star-off' />
                <a href="https://github.com/a950623me/vue-cnode" target="_blank" >
                    Vue-Cnode
                </a>
                <el-icon type="star" class='el-icon-star-off' />
                &nbsp;欢迎Star~&nbsp;
                <el-icon type="star" class='el-icon-star-off' />
                </p>
                <div>
                <p>技术栈：</p>
                <ul>
                    <li>Vue</li>
                    <li>Vue Router</li>
                    <li>ElementUI</li>
                    <li>Axios</li>
                </ul>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name:'Header',
    data(){
        return{
           dialogVisible: false
        }
    }
}
</script>
<style lang="less" scoped>
    .Header {
        width: 100%;
        height: 50px;
        background: #444;
        div.info {
            width: 90%;
            height: 100%;
            margin: auto;
            a {
            width: 120px;
            height: 50px;
            display: block;
            float: left;
                img {
                    padding-top: 10px;
                    display: block;
                    width: 100%;
                }
            }
            span {
            float: right;
            height: 50px;
            line-height: 50px;
            color: #fff;
            cursor: pointer;
            font-size: 15px;
            font-weight: bold;
            }
        }
    }
    .Header {
        .el-dialog__body {
            padding-top: 10px;
            padding-bottom: 0;
            .inside-dialog {
            p {
                margin: auto;
            }
            .el-icon-star-off::before {
                color: #eb2f96;
            }
            }
        }
        }
</style>


