<template>
  <div class="mainConent">
       <div class="home">
          <el-tabs v-model="tab" @tab-click="tabClicked">
            <el-tab-pane label="全部" name="all">
              <ContentHome :list='list' />
            </el-tab-pane>
            <el-tab-pane label="精华" name="good">
              <ContentHome :list='list' />
            </el-tab-pane>
            <el-tab-pane label="分享" name="share">
              <ContentHome :list='list' />
            </el-tab-pane>
            <el-tab-pane label="问答" name="ask">
              <ContentHome :list='list' />
            </el-tab-pane>
            <el-tab-pane label="招聘" name="job">
              <ContentHome :list='list' />
            </el-tab-pane>
          </el-tabs>
      </div>
      <div class="Aboutus">
          <About/>
      </div>
  </div>
</template>

<script>
import ContentHome from '@/components/ConentHome/ConentHome.vue'
import About from '@/views/About.vue'
import { getTopics } from '@/utils/api';
export default {
  name: 'home',
  data(){
    return{
      page: 1,
      limit: 20,
      tab: "all",
      list: [],
      store: {} // 存储所有Tab对应的数据，因为切换Tab后就没必要重新以limit:20加载数据。
    }
  },
  components: {
    ContentHome,
    About
  },
  methods:{
    //获取数据
    getTopics(){
      console.log("getTopics")
      getTopics({
        page:this.page,
        limit:this.limit,
        tab:this.tab
      }).then(res => {
        this.list = res.data;
        this.limit = this.limit + 10;
        const store =  this.store;
        // 将数据存储到对应的key下
        store[this.tab] = {
          limit: this.limit,
          data: res.data
        };
      })
    },
    //滚动函数
    scrollMethod(){
      //获取对象的滚动高度
      console.log("滚动事件")
      const sumH = document.body.scrollHeight || document.documentElement.scrollHeight;
      //可见局域高度
      const viewH = document.documentElement.clientHeight;
      //距离浏览器顶部的高度
      const scrollH = document.body.scrollTop || document.documentElement.scrollTop;
      if (viewH + scrollH >= sumH) {
          this.getTopics();
      }
    },
    tabClicked(tab,event){
        const store = this.store;
          // 如果未存储当前Tab的数据，重新获取
        console.log(this.tab)
        console.log(this.store)
        if (!store[this.tab]) {
          this.limit = 20;
          this.list = [];
          this.getTopics();
          return;
        }
        this.getTopics()
    }
  },
  created(){
    this.getTopics();
    window.addEventListener("scroll", this.scrollMethod);
  },
  /**
     * 组件被销毁的钩子：移除绑定的滚动事件
     */
  destroyed() {
      window.removeEventListener("scroll", this.scrollMethod);
  }
}
</script>
<style lang="less" scoped>
  .mainConent{
    width: 100%;
    display: flex;
    .home{
        flex: 1;
        padding: 20px 30px;
        -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      }
    .Aboutus{
      float:right;
      width: 290px;
    }
  }
    
</style>

