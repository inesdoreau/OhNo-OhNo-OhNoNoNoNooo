<template>
  <div class="leaderboard-box" >
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
</template>

<script>
module.exports = {
    props: {
        users: {type: Object},
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
</style>