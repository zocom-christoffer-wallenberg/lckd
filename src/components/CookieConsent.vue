<template>
    <section class="cookie-consent" :class="{ 'show' : show }"> 
        <h1>Cookie consent</h1>
        <label for="">Nivå 1</label>
        <input type="checkbox" name="consent" value="one" v-model="consent">
        <label for="">Nivå 2</label>
        <input type="checkbox" name="consent" value="two" v-model="consent">
        <button type="submit" class="button" @click="submit" :disabled="consent.length < 1">Jag godkänner cookies</button>
    </section>
</template>

<script>
/**
 1. Visa om användaren ej godkänt cookie consent (det finns ingen cookie satt)
 2. Sätt en cookie med användarens val
 3. Om användaren väljer nivå 1 läs bara in nödvändiga cookies
 4. Om användaren valt nivå 2 läs in även externt script
 5. Om användaren ändrar tillbaka till nivå 1 ta bort cookies från externt script
 */

const settingCookie = require('../settingCookie');

export default {
    name: 'CookieConsent',
    props: {
        show: Boolean
    },
    data() {
        return {
            consent: [],
        }
    },
    methods: {
        submit() {
            if (this.consent.indexOf('two') !== -1) {
                settingCookie();
            } else {
                this.$cookies.remove('info');
            }

            this.$cookies.set('cookie-consent', this.consent);
            this.$emit('toggleCookieConsent', false);
        }
    },
    mounted() {
        console.log('Cookie consent: ', this.$cookies.get('cookie-consent'));
        const hasCookieConsent = this.$cookies.get('cookie-consent');

        if (!hasCookieConsent) {
            this.$emit('toggleCookieConsent', true);
        }
    }
}
</script>

<style scoped>
h1 {
    color: #000000;
}

.cookie-consent {
    position: absolute;
    background: #f8f8f8;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 30%;
    box-shadow: 1px 1px 21px #dcdcdc;
    padding: 1rem;
}

.button {
    min-width: 250px;
    padding: 0.8rem;
    background-color: #FFFFFF;
    border-radius: 8px;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 0.8em;
    text-transform: uppercase;
    margin-top: 0.5rem;
}

.button:active {
    box-shadow: none;
}

.button:disabled {
    background-color: rgba(239, 239, 239, 0.3);
    border-color: rgba(118, 118, 118, 0.3);
}

.show {
    display: flex;
}
</style>