<template>
    <div>
      <img src="../../static/images/g2.jpg" alt="">
      <h1>我是首页</h1>
      <ul class="left-nav">
        <li><router-link :to="'/apple'">苹果</router-link></li>
        <li><router-link :to="'/orange'">橘子</router-link></li>
        <li><router-link :to="'/banana'">香蕉</router-link></li>
        <li><router-link :to="'/cart'">猫</router-link></li>
      </ul>
      <div class="right-count">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    import Content from '../components/content'
    export default {
    		components: {
            Content
            }
    }
</script>

<style>
  .left-nav li{
    font-size: 20px;
    text-align: left;
  }
  .right-count{
    font-size: 25px;
  }
</style>

