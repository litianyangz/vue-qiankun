<template>
    <div class="home">
        <h2>我是子应用的首页</h2>
        <h5>父应用传过来的数据:{{parentData}}</h5>
        <el-button @click="goMain">跳转主应用</el-button>
        <el-button @click="dialogVisible = true">el-dialog</el-button>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    data() {
        return {
            dialogVisible: false,
            parentData: ''
        }
    },
    mounted() {
        this.$onGlobalStateChange((x) => {
            this.parentData = x.data;
        })
    },
    methods: {
        goMain() {
            this.$setGlobalState({
                href: '/'
            })
        }
    }
}
</script>
