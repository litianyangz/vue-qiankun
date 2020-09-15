<template>
  <div class="main-root">
    <main-menu :isChildApp="isChildApp"></main-menu>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'Home',
  components: {
    MainMenu
  },
  data() {
      return {
        
      }
  },
  methods: {
   
  },
  mounted() {
    
  },
  watch: {
      isQiankun(val) {
          console.log(val);
      }
  },
  computed: {
      isChildApp() {
           if(this.$route.path.match('qiankunchild')) {
               return true
           } else {
               return false
           }
      },
      ...mapGetters([
          'isQiankun'
      ])
  }
}
</script>
<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px 4px 0px rgba(0,21,41,0.12);
}
.main-root{
    height: 100%;
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
