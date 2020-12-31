<template>
<div>


    <form ref="answer" @submit.prevent="addAnswer()">
        <h2>newAnswer:</h2>
        <input type="text" v-model="newAnswer.answer" placeholder="Answer" required><br>
        <input type="radio" name="True" v-model="newAnswer.isGood" value="true"> 
        <label for="True"> True </label><br>
        <input type="radio" name="False" v-model="newAnswer.isGood" value="false" checked> 
        <label for="False"> False </label><br>
        <input type="hidden" v-model="newAnswer.questionID">
        <button type="submit">Ajouter</button>
    </form>

    <div>
     <router-link to='/question'>Ajouter une autre question ?</router-link>
    </div>
     <div>
     <router-link to='/account'>Retourner à l'accueil</router-link>
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
</style>