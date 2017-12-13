<template>
    <div id="app">
      <Headers></Headers>
      <div class="content">
        <router-view></router-view>
      </div>
      <Footers></Footers>
    </div>
</template>

<script>
  import Headers from './components/header'
  import Footers from './components/footer'
  export default {
    components: {
      Headers,
      Footers
    }
  }
</script>

<style>
@import "../static/less/basePc.less";
  #app{
    width: 1300px;
    margin: 0 auto;
    text-align: center;
  }
h2{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
  .router-link-exact-active{
    color: #ff0000;
  }
  img{
    margin: 50px 0;
  }
</style>
