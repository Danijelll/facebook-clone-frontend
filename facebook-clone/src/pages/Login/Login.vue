<template>
  <div>
    <div class="loginForm">
      <input
        v-model="username"
        type="text"
        class="input"
        placeholder="Username"
      />
      <input
        v-model="password"
        type="password"
        class="input"
        placeholder="Password"
      />

      <button @click="submitLogin" class="button">Login</button>

      <router-link class="routerLink" to="/register">Register</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    // submitLogin(){
    //   const userDTO = {
    //     username: this.username,
    //     password: this.password
    //   };
    //   AuthService.login(userDTO)
    // },
    submitLogin(){
      const userDTO = {
        username: this.username,
        password: this.password
      };

      this.$store.dispatch('submitLogin', userDTO);
    }
  },
  mounted() {
    console.log('aaa', this.$store.getters.getCurrentUser);
  }
};
</script>

<style scoped>
.routerLink {
  text-decoration: none;
  font-size: 13pt;
  margin-left: auto;
  color: white;
}
.loginForm {
  border: 1px solid #171717;
  padding: 20px;
  margin: 100px auto auto;
  display: flex;
  flex-direction: column;
  max-width: 20%;
  border-radius: 10px;
}
.input {
  font-size: 13pt;
  margin: 10px;
}
.input:focus{
  outline: none;
}
.button{
  font-size: 15pt;
  margin: 10px;
}
</style>