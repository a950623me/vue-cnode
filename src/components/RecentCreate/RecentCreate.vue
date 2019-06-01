<template>
    <div class="panel">
    <header>最近创建的话题</header>
    <Divider class="divider" />
    <template v-for='item in user.recent_topics'>
      <div :key='item.id'>
        <router-link v-if='simple' :to="{path: '/topic/' + item.id}">{{item.title}}</router-link>
        <div v-else>
          <div class='main'>
            <div>
              <router-link class="avatar" :to="{path: '/user/' + item.author.loginname}">
                <img :src='item.author && item.author.avatar_url' alt="头像" />
              </router-link>
              <router-link key={item.id} :to="{path: '/topic/' + item.id}" class="title">
                {{item.title}}
              </router-link>
            </div>
            <span class="time">
              {{$moment(item.last_reply_at, 'YYYY-MM-DD')
              .startOf('day')
              .fromNow()}}
            </span>
          </div>
          <Divider class="inside-divider" />
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import { getUserByName } from "@/utils/api";
import Divider from '@/components/Divider/Divider.vue'
import eventProxy from "@/utils/eventProxy";
/**
 * 评论组件
 */
export default {
  /**
   * 给此组件起的名字，会显示在Vue的DevTool里面
   */
  name: "RecentCreate",
  /**
   * 通过在这里定义变量，可以让父组件通过这些变量向此组件传递数据
   * props有两种定义方式：
   * 1. 简单的数组
   * 2. 带有类型生命和默认值的 相对复杂的对象
   * P.S. https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87-Prop-%E5%90%91%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE
   */
  props:{
    simple: {
      default: true,
      type: Boolean
    },
    loginname:{
      default:'',
      type:String
    }
  },
  data() {
    return {
      user: {}
    };
  },
  components:{
     Divider
  },
  /**
   * 任何属于此组件的方法都定义在这里
   */
  methods: {
    /**
     * 封装好的获取数据的函数，这样就不需要每次使用都copy一遍代码了
     */
    fetchData(loginname) {
      getUserByName(loginname).then(res => {
        this.user = res.data;
        console.log(this.user)
      });
    }
  },
  /**
   * 一般此钩子下面调用接口获取数据
   */
  created() {
     // 增加属性，表示当前实例未被卸载
    this.isUnmounted = false;
    eventProxy.on("user", data => {
      // 如果当前实例被卸载了，就没有必要更新其state了（会引起内存泄漏）
      if (!this.isUnmounted) {
        this.user = data;
      }
    });
  },
  /**
   * 组件被销毁的钩子
   * 给this增加属性，表示当前实例已被卸载
   */
  destroyed() {
    this.isUnmounted = true;
  }
};
</script>
<style lang="less" scoped>
.panel {
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  header {
    color: black;
    font-weight: bold;
  }
  > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        display: flex;
        align-items: center;
        width: 85%;
      }
       .title{
       width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .time {
      float: right;
      color: #777;
      font-size: 11px;
    }
    .inside-divider {
      margin: 10px 0;
    }
    .avatar {
      margin-left: 10px;
    }
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    margin-right: 5px;
  }
}
.divider {
  margin: 12px 0;
}
</style>