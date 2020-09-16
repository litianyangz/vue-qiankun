<template>
    <el-container style="height:100%;">
        <el-header class="header">
            <div class="el-icon-s-operation toggle" @click="isCollapse = !isCollapse"></div>
            <div class="v-header">
                <router-link class="header-item" to="/home">首页</router-link>
                <router-link class="header-item" to="/mine/mines">关于</router-link>
                <router-link class="header-item" to="/qiankunchild">微应用</router-link>
                <div @click="golink('waibu')">外部链接</div>
            </div>
        </el-header>
        <el-container style="height:calc(100% - 60px);">
            <el-aside width="200px" style="height:100%;">
                <el-menu @select="handleselect" :default-active="$route.path" :collapse="isCollapse" active-text-color="#ffffff" text-color="#A8B7C5" background-color="#222C3C">
                    <template v-for="(item,index) in $router.options.routes" :index="index">
                        <template v-if="!item.hidden">
                            <el-submenu :index="index + ''" :key="index+''" v-if="!item.leaf">
                                <template slot="title">
                                    <i :class="item.icon"></i>
                                    <span slot="title">{{item.name}}</span>
                                </template>
                                <template v-for="child in item.children">
                                    <el-menu-item :key="child.path" :index="child.path">{{child.name}}</el-menu-item>
                                </template>
                            </el-submenu>
                            <el-menu-item :key="index+''" v-if="item.leaf" :index="item.path">
                                <i :class="item.icon"></i>
                                <span slot="title">{{item.name}}</span>
                            </el-menu-item>
                        </template>
                    </template>
                </el-menu>
            </el-aside>
            <el-main>
                <template v-show="!isChildApp">
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
               isCollapse: false,
               actived: ''
            }
        },
        methods: {
             handleselect(a,b) {
                this.$router.push({path:a});
                this.$actions.setGlobalState({
                    data: 2
                })
            },
            golink(url) {
                if (url == 'waibu') {
                    window.open('https://www.baidu.com','_self')
                } else {
                    this.$router.push({path: url})
                }
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
.router-link-active {
    color: #36B2B2 !important;
}
.header {
    display: flex;
    align-items: center;
    box-shadow: 0px 1px 4px 0px rgba(0,21,41,0.12);
}
.v-header {
    display: flex;
    .header-item,div {
        padding: 0 20px;
        cursor: pointer;
        color: #2c3e50;
    }
    .active {
        color: #36B2B2 !important;
    }
}
.el-menu {
    border: none;
    height: 100%;
		// background:#222c3c;
		li {
            text-align: left;
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