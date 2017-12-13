<template>
    <div>
        <ul class="nav">
            <li><router-link :to="'/'">首页</router-link></li>
            <li><router-link :to="'/other'">其他</router-link></li>
            <li><router-link :to="'/detail'">详情</router-link></li>
            <li><router-link :to="'/list'">列表</router-link></li>
            <li><router-link :to="'/myInfo'">我的</router-link></li>
            <li><router-link :to="'/about'">相关</router-link></li>
        </ul>
    </div>
</template>

<script>

</script>

<style>
  .nav{
    text-align: center;
    margin-top: 50px;
    font-size: 0;
  }
  .nav li{
    display: inline-block;
    font-size: 20px;
    border-right: 1px #ccc solid;
    padding: 10px;
  }
  li:last-child{
    border: none;
  }
</style>
