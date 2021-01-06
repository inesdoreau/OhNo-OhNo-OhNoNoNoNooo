<template>
<div>
  <div class="leaderboard-box" v-if="isConnected">
      <h2 class="title">Leaderboard</h2>
      <article v-for="userB in users" :key="userB.id">
          <div v-if="userB.score != null" class="row">
            <div class="row-name">{{userB.pseudo}} </div><div class="row-score"> {{userB.score}}</div>
          </div>
      </article>

      <div class="back-div">
         <router-link to='/account' class="back-link" >GO BACK</router-link>
        </div>
  </div>

  <div class= "account-box" v-else>
        <h2 class="title">Vous n'êtes pas connecté</h2>
        <div class="box">
         <router-link to='/login' class="link">Connexion</router-link>
        </div>
    </div>
</div>
</template>

<script>
module.exports = {
    props: {
        users: {type: Object},
        isConnected: { type: Boolean }
    },
    data () {
        return {
        }
    },
    async mounted () {
    },
    methods: {
    }
}
</script>

<style>
      @import '../CSS/Leaderboard.css';
      @import '../CSS/Account.css';
</style>