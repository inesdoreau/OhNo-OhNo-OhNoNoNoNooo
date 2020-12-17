<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="createUser()">
      <input v-model="pseudo" placeholder="pseudo">
      <input
      type="password" v-model="password"
      placeholder="password"
      >
      <button type="submit">Se créer un compte</button>
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
        async createUser() {
            await axios.post('/api/register', {
                pseudo: this.pseudo,
                password: this.password
            })
            this.$router.push('/')
        }
    }
}
</script>