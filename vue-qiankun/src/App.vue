<template>
    <div id="main-root">
        <router-view/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MainMenu from '@/components/MainMenu.vue'

export default {
  name: "App",
  methods: {
    chageChildValue() {
      this.$actions.setGlobalState({
        mt: 2
      })
    }
  },
  components: {
      MainMenu
  },
  computed: {
       
  }
};
</script>

<style lang="scss">
#main-root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  height: 100%;
  width: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
