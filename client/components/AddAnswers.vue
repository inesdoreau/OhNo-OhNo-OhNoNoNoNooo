<template>
<div class="add-box">


    <form ref="answer" @submit.prevent="addAnswer()">
        <h2 class='add-title'>Réponses possibles</h2>
        <div class="text">Ca peut paraitre évident mais c'est mieux si au moins une réponse est vraie </div>

        <input class="input-area answer" type="text" v-model="newAnswer.answer" placeholder="Une des réponses possibles" required><br>

        <div class="container">
          <ul>
            <li>
                <input type="radio" id="True" name="True" v-model="newAnswer.isGood" value="true"> 
                <label for="True" class="label"> Vrai </label><br>

              <div class="check"></div>
            </li>
            <li>
              <input type="radio" id="False" name="False" v-model="newAnswer.isGood" value="false" checked> 
              <label for="False" class="label"> Faux </label><br>

              <div class="check"><div class="inside"></div></div>
            </li>

        <input type="hidden" v-model="newAnswer.questionID">
        
        <button class="add-answer" type="submit">Ajouter</button>
        
    </form>

    <div class="box-answer">
     <router-link to='/question' class="link-answer">Ajouter une autre question ?</router-link>
    </div>
     <div class="box-answer">
     <router-link to='/account' class="link-answer">Terminer et retourner à l'accueil</router-link>
    </div>
</div>
</template>
 
<script>

module.exports = {
  components: {
  },
  props: {
    questions: { type: Array, default: [] },
  },
  data () {
    return {
        newAnswer: {
            answer: '',
            isGood: '',
            questionId: ''
        },
        showForm: false,
    }
  },
  computed: {
    questionID() {
      if (this.questions !== []) {
        return this.questions.length + 1
      }
      return null
    },
  },
  methods: {

    addAnswer () {
        this.$emit('add-answer', this.newAnswer)
        this.$refs.answer.reset();
    },
  },
  mounted() {
    //str = JSON.stringify(this.questions.length)
    //console.log(str)
    this.newAnswer.questionID = this.questions.length + 1
  },
}
</script>
 
<style>
  @import '../CSS/AddQuestionsAnswers.css';
</style>