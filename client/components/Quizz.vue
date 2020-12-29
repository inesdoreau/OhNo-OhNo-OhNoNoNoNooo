<template>
  <div id="quiz-container">
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
      <h1 v-html="currentQuestion.question"></h1>
      <form v-if="currentQuestion">
      <!--<div v-for="answer in answers" :key="answer" >-->
        <button
          v-for="answer in currentAnswers"
          :index="currentQuestion.id"
          :key="answer"
          v-html="answer.answer"
          @click.prevent="handleButtonClick"
        ></button>
      
      </form>

    <hr class="divider" />
  </div>
</template>

<script>
module.exports = {
  props: {
    questions: {type: Array, default: []},
    answers: {type: Array, default:[]},
  },
  data () {
    return {
      index: 0,
      score:0,
    }
  },
  computed: {
      currentQuestion() {
        if (this.questions !== []) {
          return this.questions[this.index]
        }
        return null
      },
      currentAnswers: function() {
        return this.answers.filter(i=> i.idQuestion === this.questions[this.index].id )
      },
      correctAnswer: function(){
        return this.answers.filter(j=>j.isGood === true)
      },
      
    },
  methods: {
    handleButtonClick: function(event) {
      /* Find index to identiy question object in data */
      let index = event.target.getAttribute("index")

      let pollutedUserAnswer = event.target.innerHTML // innerHTML is polluted with decoded HTML entities e.g ' from &#039;
      /* Clear from pollution with ' */
      let userAnswer = pollutedUserAnswer.replace(/'/, "&#039;")
      /* Set userAnswer on question object in data */
      this.questions[index].userAnswer = userAnswer

      /* Set class "clicked" on button with userAnswer -> for CSS Styles; Disable other sibling buttons */
      event.target.classList.add("clicked")
      let allButtons = document.querySelectorAll(`[index="${index}"]`)

      for (let i = 0; i < allButtons.length; i++) {
        if (allButtons[i] === event.target) continue

        allButtons[i].setAttribute("disabled", "")
      }

      /* Invoke checkAnswer to check Answer */
      this.checkAnswer(event, index)
    },

    checkAnswer: function(event, index) {
      let question = this.questions[index]
      let answer = this.correctAnswer[this.index]

      if (question.userAnswer) {
        if (this.index < this.questions.length - 1) {
          setTimeout(
            function() {
              this.index += 1
            }.bind(this),
            3000
          );
        }

        if (question.userAnswer === answer.answer) {

          /* Set class on Button if user answered right, to celebrate right answer with animation joyfulButton */
          event.target.classList.add("rightAnswer")
          /* Set rightAnswer on question to true, computed property can track a streak out of 10 questions */
          this.questions[index].rightAnswer = true
          
        } else {
          /* Mark users answer as wrong answer */
          event.target.classList.add("wrongAnswer")
          this.questions[index].rightAnswer = false
          /* Show right Answer */
          let correct_answer = this.correctAnswer[this.index]
          let allButtons = document.querySelectorAll(`[index="${index}"]`)
          allButtons.forEach(function(button) {
            if (button.innerHTML === correct_answer.answer) {
              button.classList.add("showRightAnswer")
            }
          });
        }
      }  
    },
  }
}
</script>

<style>
  @import '../CSS/Quizz.css';
</style>
