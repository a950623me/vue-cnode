<template>
    <div class="topic">
        <div class="leftSlider">
            <div class="title" v-html="topic.title"></div>
            <div class="info">
                <span>
                    发布于&nbsp;
                    {{$moment(topic.create_at, 'YYYY-MM-DD')
                    .startOf('day')
                    .fromNow()}}
                    &nbsp;•&nbsp;
                </span>
                作者：
                <router-link :to="{path: '/user/' + topic.loginname}">
                    {{topic.loginname}}
                </router-link>
                &nbsp;•&nbsp;
                <span>{{topic.visit_count}}次浏览&nbsp;•&nbsp;</span>
                <span>
                    来自：
                    {{$tab[topic.tab] && $tab[topic.tab].name}}
                </span>
            </div>
            <div class="content" v-html="topic.content"></div>
            <Reply :replies='topic.replies' />
        </div>
        <div class="rightSlider">
            <ProfilePanel :loginname ='topic.loginname' />
            <RecentCreate :loginname ='topic.loginname' :simple='false' />  
            <RecentReply  :loginname ='topic.loginname' :simple='false'/>   
        </div>
    </div>
</template>
<script>
import { getTopicById } from '@/utils/api'
import Reply from '@/components/Reply/Reply.vue'
import ProfilePanel from '@/components/ProfilePanel/ProfilePanel.vue'
import RecentReply from '@/components/RecentReply/RecentReply.vue'
import RecentCreate from '@/components/RecentCreate/RecentCreate.vue'
export default {
    name:'Topic',
    data(){
        return{
            topic:{}
        }
    },
    components:{
        Reply,
        ProfilePanel,
        RecentCreate,
        RecentReply
    },
    methods:{
        fetchData(id){
            getTopicById(id).then(res=>{
                this.topic = {
                    ...res.data,
                    ...res.data.author
                }
            })
        }
    },
    created(){
        this.fetchData(this.$route.params.id);
    },
    /**
   * 在当前路由改变，但是该组件被复用时调用
   * 举例来说，对于一个带有动态参数的路径 /topic/:id，在 /topic/asdsd 和 /topic/sdfsdfa 之间跳转的时候，
   * 由于会渲染同样的 Topic 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
   * 可以访问组件实例 `this`
   */
    beforeRouteUpdate(to, from, next) {
        this.fetchData(to.params.id);
        next();
    }
}
</script>
<style lang="less" scoped>
@grey-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
.topic {
  display: flex;
  margin-bottom: 100px;
  .title {
    color: black;
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 8px;
  }
  .content {
    color: #333;
    line-height: 1.6;
    margin-bottom: 50px;
    img {
      width: 100%;
    }
  }
  .leftSlider {
    width: 72%;
    float: left;
    box-shadow: @grey-shadow;
    padding: 20px;
    .info {
      display: flex;
      align-items: center;
      color: #838383;
      font-size: 12px;
    }
  }
  .rightSlider {
    float: right;
    width: 25%;
    height: 100%;
    margin-left: 2%;
  }
}
</style>

