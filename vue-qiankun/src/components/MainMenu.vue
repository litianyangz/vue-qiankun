<template>
    <el-container style="height:100%;">
        <el-header class="header">
            <div class="el-icon-s-operation toggle" @click="isCollapse = !isCollapse"></div>
        </el-header>
        <el-container style="height:calc(100% - 60px);">
            <el-aside width="200px" style="height:100%;">
                <el-menu @select="handleselect" :default-active="$route.path" :collapse="isCollapse" active-text-color="#ffffff" text-color="#A8B7C5" background-color="#222C3C">
                    <template v-for="(item,index) in $router.options.routes" :index="index">
                        <el-submenu :index="index + ''" :key="index+''" v-if="!item.leaf">
                            <template slot="title">
                                <i :class="item.icon"></i>
                                <span slot="title">{{item.name}}</span>
                            </template>
                            <template v-for="child in item.children">
                                <el-menu-item :key="child.path" :index="child.path">{{child.name}}</el-menu-item>
                            </template>
                        </el-submenu>
                        <el-menu-item :key="index+''" v-if="item.leaf && item.children.length>0" :index="item.children[0].path">
                            <i :class="item.icon"></i>
                            <span slot="title">{{item.children[0].name}}</span>
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-aside>
            <el-main>
                是否是子应用：{{isChildApp ? '是' : '否'}}
                <template v-if="!isChildApp">
                    <router-view/>
                </template>
                <template v-show="isChildApp">
                    <div id="root-view"></div>
                </template>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
               isCollapse: false
            }
        },
        methods: {
             handleselect(a,b) {
                this.$router.push({path:a})
            }
        },
        props: {
            isChildApp: {
                type:Boolean,
                default(){
                    return false;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px 4px 0px rgba(0,21,41,0.12);
}

.el-menu {
    border: none;
    height: 100%;
		background:#222c3c;
		li {
			span {
				margin-left: 10px;
			}
		}
  }
.el-menu-item.is-active {
  background-color: #36B2B2!important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>