<template>
  <div class="user">
    <ProfilePanel :loginname='loginname' />
    <RecentCreate :simple='false' :loginname='loginname' />
    <RecentReply :simple='false' :loginname='loginname' />
  </div>
</template>

<script>
/**
 * 用户个人中心页
 */
import ProfilePanel from '@/components/ProfilePanel/ProfilePanel.vue'
import RecentReply from '@/components/RecentReply/RecentReply.vue'
import RecentCreate from '@/components/RecentCreate/RecentCreate.vue'
export default {
  /**
   * 给此组件起的名字，会显示在Vue的DevTool里面
   */
  name: "User",
  /**
   * 当前组件的‘数据中心'
   */
  data() {
    return {
      loginname: ""
    };
  },
  /**
   * 一般此钩子下面调用接口获取数据
   */
  created() {
    this.loginname = this.$route.params.id;
  },
  /**
   * 在当前路由改变，但是该组件被复用时调用
   * 举例来说，对于一个带有动态参数的路径 /user/:id，在 /user/shuiRong 和 /user/martin 之间跳转的时候，
   * 由于会渲染同样的 User 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
   * 可以访问组件实例 `this`
   */
  beforeRouteUpdate(to, from, next) {
    this.loginname = to.params.id;
    next();
  },
  /**
   * 注册引用进来的其他组件
   */
  components: {
    RecentReply,
    RecentCreate,
    ProfilePanel
  }
};
</script>

<style lang="less" scoped>
.user {
  width: 75%;
  margin: auto;
}
</style>