<template>
<div>
<div class="add-box" v-if="isConnected">
    <form @submit.prevent="addQuestion()">
        <h2 class="add-title">Nouvelle Question</h2>
        <div>
          <input class="input-area" id="move" type="text" v-model="newQuestion.question" placeholder="Je sens que ca va être une question pertinente" required> 
          <input type="hidden" v-model="newQuestion.id">
        </div>
        <div class="text">
          {{ newQuestion.id }} : {{newQuestion.question}}
        </div>
        <div>
          <button class="button-validate"  type="submit">Ajouter</button>
        </div>
    </form>
</div> 
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
  components: {
  },
  props: {
    questions: { type: Array, default: [] },
     isConnected: { type: Boolean }
  },
  data () {
    return {
        newQuestion: {
            question: '',
            id: '',
        },
        showForm: false
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
    addQuestion () {
        this.$emit('add-question', this.newQuestion)
        this.$router.push('/answer')
    },
  },
  mounted() {
    //str = JSON.stringify(this.questions.length)
    //console.log(str)
    this.newQuestion.id = this.questions.length + 1
  },
}
</script>
 
<style>
  @import '../CSS/AddQuestionsAnswers.css';
  @import '../CSS/Account.css';
</style>