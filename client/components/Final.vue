<template>
    <transition name="final"
    ><div class="final-mask">
      <div class="final-wrapper">
        <div class="final-container">
          <div class="final-header">
            <h2>Congrats {{ user.pseudo }}! </h2>
          </div>

          <div class="final-body">
            <div id="score">
              Congrats ! You finish the quiz 
              This is your score : {{ user.score }}
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
</template>

<script>
module.exports = {
  props: {
    user: {type: Object},
  },
}
</script>

<style >
    @import '../CSS/Final.css';
</style>