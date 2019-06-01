<template>
  <div id="app">
    <cHeader></cHeader>
    <div class='main-section'>
      <router-view></router-view>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>
<script>
import cHeader from '@/components/Header/Header.vue'
export default {
  name:'app',
  data(){
    return{
       
    }
  },
  components:{
    cHeader
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  font-size: 14px;
}
a{
  color: #42b983;
  font-weight: 600;
  padding: 0 2px;
  text-decoration: none;
}
img{
  max-width: 100%;
}
.main-section{
  width: 95%;
  margin: 20px auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
