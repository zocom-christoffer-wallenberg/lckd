<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png" class="logo" />
    <h1 class="title">LCKD</h1>
    <section class="input-wrapper">
      <label class="label">Email</label>
      <input type="text" class="input-field" v-model="credentials.email" />
    </section>
    <section class="input-wrapper">
      <label class="label">Password</label>
      <input type="password" class="input-field" v-model="credentials.password" />
    </section>
    <button type="submit" class="button" @click="login">Let me in</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Login",
  data() {
    return {
      credentials: {
        email: "",
        password: "",
      }
    };
  },
  computed: {
      token() {
          return this.$store.state.token;
      }
  },
  watch: {
      token() {
          this.$router.push('/accounts');
      }
  },
  methods: {
      async login() {
          this.$store.dispatch('login', this.credentials);
      }
  }
};
</script>

<style scoped>
.logo {
    margin-top: auto;
}

.title {
    margin-bottom: auto;
}

.login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.input-wrapper {
    display: flex;
    flex-direction: column;
}

.label {
    color: #000000;
    align-self: flex-start;
    background-color: #ffbd21;
    text-transform: uppercase;
    padding: 0.2rem;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 0.9em;
    line-height: 19px;
    border-radius: 8px 8px 0px 0px;
}

.input-field {
    min-width: 250px;
    border: 1px solid #ffbd21;
    border-radius: 0px 4px 4px 4px;
    background-color: transparent;
    padding: 1rem;
    color: #ffbd21;
    margin-bottom: 2rem;
    font-size: 1.3em;
}

.button {
    min-width: 250px;
    padding: 0.8rem;
    background-color: #FFFFFF;
    border-radius: 8px;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 1.3em;
    margin-top: auto;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
}
</style>