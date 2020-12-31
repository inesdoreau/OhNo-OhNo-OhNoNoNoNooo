<template>
  <div >
      <h2>Leaderboard</h2>
      <article v-for="userB in users" :key="userB.id">
          <div v-if="userB.score != null">
            {{userB.pseudo}} - {{userB.score}}
          </div>
      </article>

      <div>
         <router-link to='/account'>Back</router-link>
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