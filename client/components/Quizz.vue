<template>
  <div id="quiz-container">
    <h1 id="logo-headline">Quiz</h1>
    <!-- div#correctAnswers -->
    {{ user.score }}
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
    user: { type: Object },
    questions: { type: Array, default: [] },
    answers: { type: Array, default: [] },
    score: {},
  },
  data() {
    return {
      index: 0,
      score: 0,
    };
  },
  computed: {
    currentQuestion() {
      if (this.questions !== []) {
        return this.questions[this.index]
      }
      return null
    },
    currentAnswers: function () {
      return this.answers.filter(
        (i) => i.idQuestion === this.questions[this.index].id
      )
    },
    correctAnswer: function () {
      return this.answers.filter((j) => j.isGood === true)
    },
    /* TO DO: impelment fonction quizz completed to check if all questions are answered  */
    quizComplet: function () {
      if (this.questions.length === 0) {
        return false
      }
      let questionsAnswered = 0
      this.questions.forEach(function (question) {
         questionsAnswered++ 
      })
      return this.index+1 === this.questions.length
    },
  },
  methods: {
    /* TO DO : Shuffle the questions in the db and the answer using math.random() */
    quizCompleted: function (completed) {
      completed &&
        setTimeout(() => {
          this.$emit("add-score", this.user)
        }, 300) // DONT FORGET TO CHANGE THE TIME
    },

    handleButtonClick: function (event) {
      /* Find index to identiy question object in data */
      let index = event.target.getAttribute("index")

      let pollutedUserAnswer = event.target.innerHTML // innerHTML is polluted with decoded HTML entities e.g ' from &#039;
      /* Clear from pollution with ' */
      let userAnswer = pollutedUserAnswer.replace(/'/, "&#039;")
      /* Set userAnswer on question object in data */
      this.questions[this.index].userAnswer = userAnswer

      /* Set class "clicked" on button with userAnswer -> for CSS Styles; Disable other sibling buttons */
      event.target.classList.add("clicked")
      let allButtons = document.querySelectorAll(`[index="${index}"]`)

      for (let i = 0; i < allButtons.length; i++) {
        if (allButtons[i] === event.target) continue

        allButtons[i].setAttribute("disabled", "")
      }

      /* Invoke checkAnswer to check Answer */
      this.checkAnswer(event, index)
      
      this.quizCompleted(this.quizComplet)
    },

    checkAnswer: function (event, index) {
      str = JSON.stringify(this.questions[this.index])
      console.log(str)

      let question = this.questions[this.index]
      let answer = this.correctAnswer[this.index]

      if (question.userAnswer) {
        if (this.index < this.questions.length  ) {
          setTimeout(
            function () {
              this.index += 1
            }.bind(this),
            300 //DONT FORGET TO CHANGE THE TIME TO 3000
          )
        }
        str = JSON.stringify(this.index)
        console.log(str)

        if (question.userAnswer === answer.answer) {
          this.user.score += 1;
          /* Set class on Button if user answered right, to celebrate right answer with animation joyfulButton */
          event.target.classList.add("rightAnswer")
        } else {
          /* Mark users answer as wrong answer */
          event.target.classList.add("wrongAnswer")
          /* Show right Answer */
          let correct_answer = this.correctAnswer[this.index];
          let allButtons = document.querySelectorAll(`[index="${index}"]`)
          allButtons.forEach(function (button) {
            if (button.innerHTML === correct_answer.answer) {
              button.classList.add("showRightAnswer")
            }
          });
        }
      }
    },
  },
};
</script>

<style>
@import "../CSS/Quizz.css";
</style>
