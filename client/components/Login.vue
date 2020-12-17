<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="loginUser()">
            <input v-model="pseudo" placeholder="pseudo">
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
            pseudo: '',
            password: ''
        }
    },
    async mounted () {

    },
    methods: {
        async loginUser() {
            this.$emit('login', {
                pseudo: this.pseudo, 
                password: this.password
            })
        }
    }
}
</script>s