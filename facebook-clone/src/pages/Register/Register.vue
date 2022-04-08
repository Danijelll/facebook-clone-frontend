<template>
  <div>
    <div class="registerForm">
      <input
        v-model="username"
        type="text"
        class="input"
        placeholder="Username"
      />
      <input
        v-model="email"
        type="email"
        class="input"
        placeholder="Email"
      />
      <input
        v-model="password"
        type="password"
        class="input"
        placeholder="Password"
      />

      <button @click="submitRegister" class="input">Register</button>

      <router-link class="routerLink" to="/">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    username: "",
    email:"",
    password: "",
  }),
  methods: {
    submitRegister(){
      const userDTO = {
        username: this.username,
        email: this.email,
        password: this.password
      };

      this.$store.dispatch('submitRegister', userDTO);
    }
  },
};
</script>

<style scoped>
.routerLink {
  text-decoration: none;
  font-size: 13pt;
  margin-left: auto;
  color: darkblue;
}
.registerForm {
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