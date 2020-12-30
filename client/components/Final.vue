<template>
    <transition name="final"
    ><div class="final-mask">
      <div class="final-wrapper">
        <div class="final-container">
          <div class="final-header">
            <h2>{{ header }}</h2>
            <h3>{{ subheader }}</h3>
          </div>

          <div class="final-body">
            <div id="score">
              Congrats ! You finish the quiz
            </div>
            <div id="chooseCategory">
              Wanna choose another category? (I am working on this feature!)
            </div>
          </div>

          <div class="final-footer">
            <!--<button
              id="play-again"
              class="button-footer"
              @click="$emit('/quizz')"
            >
              Play Again
            </button>-->
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
            
            <!--<button
              id="close-button"
              class="button-footer"
              @click="$emit('/account')"
            >
              Close
            </button>-->
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