<template>
    <div class="ContentHome">
        <div class="topic" v-for='item in list' :key='item.id'>
            <router-link :to='{path: "/user/"+item.author.loginname}'>
                <img :src='item.author.avatar_url' alt="用户头像" />
            </router-link>
            <span class="count">
                <em>{{item.reply_count}}</em>/<em>{{item.visit_count}}</em>
            </span>
            <el-tag :type='$tab[item.tab] && $tab[item.tab].type'>
                {{$tab[item.tab] && $tab[item.tab].name}}
            </el-tag>
            <router-link class="title" :to='{path: "/topic/"+ item.id}'>
                {{item.title}}
            </router-link>
             <span class="time">
                {{$moment(item.last_reply_at)
                .startOf('day')
                .fromNow()}}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name:'ContentHome',
    props:['list'],
    data(){
        return{
           
        }
    },
    methods:{
       
    }
}
</script>
<style lang="less" scoped>
   .ContentHome{
       .topic{
           margin: 10px;
           display: flex;
           align-items: center;
           justify-content: space-between;
           img{
               width: 50px;
               height: 50px;
               border-radius: 50%;
           }
           span.count{
               width: 100px;
           }
           a.title{
               width: 60%;
               overflow: hidden;
               text-overflow: ellipsis;
               white-space: nowrap;
               margin: 0;
           }
           span.time{
               width: 70px;
           }
       }
   }
</style>


