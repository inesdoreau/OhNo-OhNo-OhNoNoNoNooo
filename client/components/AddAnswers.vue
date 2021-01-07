<template>
<div >
  <div class="add-box" v-if="isConnected">
    <form ref="answer" @submit.prevent="addAnswer()">
        <h2 class='add-title'>Réponses possibles</h2>
        <div class="text" v-if="showForm == false">Il vous faut au moins une réponse vraie </div>
        <div class="text" v-if="showForm == true">Il ne peux y avoir qu'une seule réponse vraie </div>

        <input class="input-area answer" type="text" v-model="newAnswer.answer" placeholder="Une des réponses possibles" required><br>

        <div class="container">
          <ul >
            <li v-if="showForm == false">
                <input type="radio" id="True" name="True" v-model="newAnswer.isGood" value="true" > 
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

    <div class="box-answer" v-if="showForm == true">
     <router-link to='/question' class="link-answer">Ajouter une autre question ?</router-link>
    </div>
     <div class="box-answer" v-if="showForm == true">
     <router-link to='/account' class="link-answer">Terminer et retourner à l'accueil</router-link>
    </div>
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
     user: {type: Object},
     questions: { type: Array, default: [] },
     isConnected: { type: Boolean }
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
        if(this.newAnswer.isGood == 'true'){
          this.showForm = true;
        }
    },
  },
  mounted() {
    //str = JSON.stringify(this.questions.length)
    //console.log(str)
    this.newAnswer.questionID = this.questions.length
  },
}
</script>
 
<style>
  @import '../CSS/AddQuestionsAnswers.css';
  @import '../CSS/Account.css';
</style>