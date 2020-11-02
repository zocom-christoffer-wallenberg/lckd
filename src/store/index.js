import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    accounts: []
  },
  mutations: {
    updateToken(state, token) {
      state.token = token;
    },
    addAccounts(state, accounts) {
      state.accounts = accounts;
    }
  },
  actions: {
    async login(ctx, credentials) {
      const response = await fetch('http://localhost:8000/api/auth/login', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      ctx.commit('updateToken', data.token);
    },

    async addAccount(ctx, account) {
      const response = await fetch('http://localhost:8000/api/accounts/add', {
          method: 'POST',
          body: JSON.stringify(account),
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ctx.state.token
           }
      });
      const data = response.json();
      console.log(data);
    },

    async getAccounts(ctx) {
      const response = await fetch('http://localhost:8000/api/accounts/get', {
          method: 'GET',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ctx.state.token
           }
      });
      const data = await response.json();
      ctx.commit('addAccounts', data.accounts);
    }
  },
  modules: {
  }
})
