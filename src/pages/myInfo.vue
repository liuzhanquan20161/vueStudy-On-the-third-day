<template>
    <div>
      <img src="../../static/images/g4.jpg" alt="">
      <h1>我的信息页</h1>
      <input type="text" v-model="inputVal">
      <span>{{contrast}}</span>
    </div>
</template>

<script>
  export default {
    data (){
      return{
        inputVal:''
      }
    },
    computed : {
      contrast : function () {
          return this.inputVal+'.00'
      }
    }
  }
</script>

<style scoped>

</style>
