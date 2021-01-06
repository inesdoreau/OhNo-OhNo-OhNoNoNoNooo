<template>
<div>
    <transition name="final" v-if="isConnected"
    ><div class="final-mask">
      <div class="final-wrapper">
        <div class="final-container">
          <div class="final-header">
            <h2>Congrats {{ user.pseudo }}! </h2>
          </div>

          <div class="final-body">
            <div class="final-text">
              You finish the quiz 
              This is your score : <span class="final-score">{{ user.score }}<span>
            </div>
          </div>

          <div class="final-footer">
            <router-link to='/quizz' 
              id="play-again"
              class="button-footer">
            Play Again
            </router-link>

            <router-link to='/account' 
              id="close-button"
              class="button-footer">
              Close
            </router-link>
          </div>
        </div>
      </div>
    </div>
    </transition>
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
    user: {type: Object},
     isConnected: { type: Boolean }
  },
}
</script>

<style >
    @import '../CSS/Final.css';
    @import '../CSS/Account.css';
</style>