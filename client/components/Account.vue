<template>
    <div class="wrap">
    <div class= "account-box">
        <h2 class="title">Mon compte</h2>
         <div class="text greeting">
             Salut {{ user.pseudo }} ! 
         </div>
         <div class="text">
             Tranquille la famille ?
         </div>
         <div class="text">
            Aux dernières nouvelles ton super score est de :
        </div>
        <div class="score">
           {{ user.score }}
        </div>

        <div class="box">
         <router-link to='/quizz' class="link">GO TO QUIZZ</router-link>
        </div>
        <div class="box" >
         <router-link to='/leaderboard' class="link" >Tableau des scores</router-link>
        </div>
        <div v-if="user.isAdmin" class="box" >
            <router-link to='/question' class="link">Ajouter une question</router-link>
        </div>

        <form @submit.prevent="logout() ">
            <button class="logout-button" type="submit" >Deconnexion
            </button>
        </form>

    </div>
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

<style>
      @import '../CSS/Account.css';
</style>