<template>
  <div >
      <h2>Leaderboard</h2>
      <article v-for="user in users" :key="user.id">
          <div v-if="user.score != null">
            {{user.pseudo}} - {{user.score}}
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