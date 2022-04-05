<template>
<div>
  <div class="loginForm">

    <input class="input" placeholder="Username">
    <input type="password" class="input" placeholder="Password">

    <button class="input">Login</button>

    <router-link class="routerLink" to="/register">Register</router-link>

  </div>
</div>
</template>

<script>
export default {
name:'Login'
}
</script>

<style>
.routerLink{
  text-decoration: none;
  font-size: 13pt;
  margin-left: auto;
  color: darkblue;
}
.loginForm{
  border: 1px solid #171717;
  padding: 20px;
  margin: 100px auto auto;
  display: flex;
  flex-direction: column;
  max-width: 20%;
  border-radius: 10px;
}
.input{
  font-size:13pt;
  margin: 10px;
}
</style>