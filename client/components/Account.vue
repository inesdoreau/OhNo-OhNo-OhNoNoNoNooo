<template>
    <div>
        <h2>Mon compte</h2>
         Name : {{ user.pseudo }}

         <div>
            Score : {{ user.score }}
        </div>

        <div>
         <router-link to='/quizz'>quizz</router-link>
        </div>
        <div>
         <router-link to='/leaderboard'>leaderboard</router-link>
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
    
    async mounted () {
        
    },
    methods: {
        async logout() {
            this.$emit('logout')
        }
    }
}
</script>