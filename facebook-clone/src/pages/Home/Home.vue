<template>
  <div class="wrapper">
      <div class="header">
          <div class="image"></div>
          <div class="username">{{username}}</div>
      </div>
  </div>
</template>

<script>
export default {
name:'Home'
}
</script>

<style scoped>
.username{
    border-bottom: 1px solid #171717;
    margin: auto 0px auto 30px;
}
.image{
    margin: auto 0px auto 20px;
    border-radius: 50%;
    background-color: #171717;
    width: 128px;
    height: 128px;
}
.header{
    display: flex;
    margin: auto;
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #171717;
}
.wrapper{
    width: 85%;
    margin: auto;
    border: 1px solid #171717;
    height: 800px;
}
</style>