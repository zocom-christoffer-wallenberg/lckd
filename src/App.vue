<template>
  <div id="app">
    <section class="cookie-wrapper">
      <button @click="openCookieConsent">Cookies</button>
    </section>
    <router-view/>
    <CookieConsent :show="showCookieConsent" @toggleCookieConsent="showCookieConsent = $event" />
  </div>
</template>

<script>
import CookieConsent from "@/components/CookieConsent.vue";

export default {
  components: {
    CookieConsent,
  },
  data() {
    return {
      showCookieConsent: false
    };
  },
  methods: {
    openCookieConsent() {
        this.showCookieConsent = true;
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-color: #15085F;
}

h1, h2, h4 {
  color: #ffffff;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
}

.cookie-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
  position: fixed;
}

.cookie-wrapper button {
  background-color: #ffffff;
  border-radius: 8px;
  font-family: Open Sans;
  font-weight: bold;
  border: none;
  padding: 0.3rem;
}
</style>
