<template>
  <div class="panel">
    <div class="header">
      <span class="col_fade">友情社区</span>
    </div>
    <div class="inner">
      <ol class="friendship-community">
        <li>
          <a href="https://ruby-china.org/" target="_blank">
            <img src="//static2.cnodejs.org/public/images/ruby-china-20150529.png">
          </a>
        </li>
        <div class="sep10"></div>
        <li>
          <a href="http://golangtc.com/" target="_blank">
            <img src="//static2.cnodejs.org/public/images/golangtc-logo.png">
          </a>
        </li>
        <div class="sep10"></div>
        <li>
          <a href="http://phphub.org/" target="_blank">
            <img src="//static2.cnodejs.org/public/images/phphub-logo.png">
          </a>
        </li>
        <div class="sep10"></div>
        <li>
          <a href="https://testerhome.com/" target="_blank">
            <img src="//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK">
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  name:'About',
  data(){
    return{

    }
  }
}
</script>
<style lang="less" scoped>
    .panel{
      font-size: 13px;
      margin-bottom: 13px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      margin-left: 10px;
      .header {
          color: #51585c;
          border-radius: 3px 3px 0 0;
          padding: 10px;
          background-color: #f6f6f6;
          .col_fade {
              color: #444;
          }
      }
      .inner {
          padding: 10px;
          border-radius: 0 0 3px 3px;
          line-height: 2em;
          ol{
            margin: 4px 0;
            list-style: none;
            li{
              line-height: 2em;
               a {
                  color: #778087;
                  img {
                      max-width: 150px;
                  }
              }
            }
            .sep10 {
                height: 10px;
            }
          }
      }
    }
</style>


