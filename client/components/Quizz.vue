<template>
  <div>
    <!--
    <h2> {{ questions[number*4 - 1].question}} </h2>
    
    <article v-for="question in questions" :key="question.id">
      <div class="question-content" v-if="question.idQuestion == number">
          <p> - {{ question.answer }}</p>
      </div>
    </article>
    <div>
        <button @click="nextQues(number++)">Next</button>
    </div>-->
    <h1 id="logo-headline">Quiz</h1>
    <!-- div#correctAnswers -->
    <hr class="divider" />
    <div>
      <h1 v-html="loading ? 'Loading...' : currentQuestion.question"></h1>
      <form v-if="currentQuestion">
        <button
          v-for="answer in answers"
          :index="currentQuestion.key"
          :key="answer"
          v-html="answer"
          @click.prevent="handleButtonClick"
        ></button>
      </form>
      <!--<h2> {{ questions[number].question}} </h2>
      <div v-for="answer in answers" :key="answer.id" >
        <button class="answers" 
        v-if="questions[number].id == answer.idQuestion" 
        @click.prevent="handleButtonClick">
          - {{ answer.answer }}
        </button>        
      </div>
      -->

    <hr class="divider" />
  </div>
</template>

<script>
module.exports = {
  props: {
    questions: {type: Array, default: []},
    answers: {type: Array, default:[]},
    loading: true
  },
  data () {
    return {
        index: 0,
    }
  },
  computed: {
      currentQuestion() {
        if (this.questions !== []) {
          return this.questions[this.index];
        }
        return null;
      },
      currentAnswers(){
        
      }
    },
  methods: {
    nextQues (number) {
      this.$emit('next-quest', number)
    },
    // methods of Quiz.vue
    handleButtonClick: function(event) {
      /* Invoke checkAnswer to check Answer */
      number++
    },
  }
}
</script>

<style scoped>
article {
  display: flex;
}

.question-title {
  display: flex;
  justify-content: space-between;
}

textarea {
  width: 100%;
}

  h1 {
    font-size: 1.3rem;
    padding: 0.7rem;
  }

  .divider {
    margin: 0.5rem 0;
    border: 3px solid rgba(102, 255, 166, 0.7);
    border-radius: 2px;
    box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.3);
  }
</style>
