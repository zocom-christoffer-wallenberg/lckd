<template>
    <section class="accounts">
        <header class="header">
            <img alt="Vue logo" src="../assets/logo-small.png" class="logo" />
            <h4>LCKD</h4>
        </header>
        <section class="input-wrapper" v-if="accounts">
            <h4 class="label">Stored passwords</h4>
            <article class="display-accounts">
                <input v-for="(account, index) in accounts" :key=index
                    type="text" class="input-field" v-model="account.site" @click="showAccount(account.password)" />
            </article>
        </section>
        <h2 class="display-accounts" v-else>No accounts added</h2>
        <input type="text" class="input-field" v-model="selectedAccount" />
        <button class="button" @click="addAccount">New LCKD</button>
    </section>
</template>

<script>
export default {
    name: "Accounts",

    data() {
        return {
            selectedAccount: ''
        }
    },
    computed: {
        accounts() {
            return this.$store.state.accounts;
        }
    },
    methods: {
        addAccount() {
            this.$router.push('/add')
        },

        showAccount(account) {
            this.selectedAccount = account;
        }
    },
    mounted() {
        this.$store.dispatch('getAccounts');
    }
}
</script>

<style scoped>
h4 {
    margin: 0;
}

.header {
    display: flex;
    align-self: flex-start;
    align-items: center;
    margin-left: 1.8rem;
    margin-bottom: 1rem;
}

.header h4 {
    margin-left: 0.5rem;
}

.accounts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-top: 2rem;
}

.display-accounts {
    border: 1px solid #ffbd21;
    padding: 2rem;
    border-radius: 8px 8px 8px 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    margin-top: auto;
}

.input-field:last-child {
    margin-bottom: 0;
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