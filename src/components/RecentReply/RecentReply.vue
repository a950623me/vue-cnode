<template>
    <div class="panel">
      <header>最近参与的话题</header>
      <Divider class="divider" />
      <template v-for='item in user.recent_replies'>
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
/**
 * 用户最新回复的话题 组件
 */
import { getUserByName } from "@/utils/api";
import eventProxy from "@/utils/eventProxy";
import Divider from '@/components/Divider/Divider.vue';
/**
 * 评论组件
 */
export default {
  name: "RecentReply",
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
  div {
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