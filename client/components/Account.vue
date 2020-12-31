<template>
    <div>
        <h2>Mon compte</h2>
         Name : {{ user.pseudo }}
         Score : {{ user.score }}
        <div>
         <router-link to='/quizz'>quizz</router-link>
        </div>
        <div>
         <router-link to='/learderboard'>learderboard</router-link>
        </div>
        <div v-if="user.isAdmin">
            <router-link to='/question'>Ajouter une question</router-link>
        </div>

        <form @submit.prevent="logout() ">
            <button type="submit">Deconnexion
            </button>
        </form>

    </div>   
</template>

<script>
module.exports = {
    props: {
        user: {type: Object},
    },
    data () {
        return {
        }
    },
    async mounted () {
    },
    methods: {
        async logout() {
            this.$emit('logout')
        }
    }
}
</script>