<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="loginUser()">
            <input v-model="email" placeholder="email">
            <input
            type="password" v-model="password"
            placeholder="password"
            >
      <button type="submit">Se connecter</button>
    </form>
    </div>
</template>

<script>
module.exports = {
    data () {
        return {
            email: '',
            password: ''
        }
    },
    async mounted () {

    },
    methods: {
        async loginUser() {
            this.$emit('login', {
                email: this.email, 
                password: this.password
            })
        }
    }
}
</script>s