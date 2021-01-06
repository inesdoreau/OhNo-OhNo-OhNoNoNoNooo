<template>
<div class="add-box">
    <form @submit.prevent="addQuestion()">
        <h2 class="add-title">Nouvelle Question</h2>
        <div>
          <input class="input-area" id="move" type="text" v-model="newQuestion.question" placeholder="Je sens que ca va être une question pertinente" required> 
        </div>
        <div class="text">
          {{ newQuestion.id }} {{newQuestion.question}}
        </div>
        <div>
          <button class="button-validate"  type="submit">Ajouter</button>
        </div>
    </form>
    

     
</div>
</template>
 
<script>

module.exports = {
  components: {
  },
  props: {
  },
  data () {
    return {
        newQuestion: {
            question: '',
        },
        showForm: false
    }
  },
  methods: {
    addQuestion () {
        this.$emit('add-question', this.newQuestion)
        this.$router.push('/answer')
    },
  }
}
</script>
 
<style>
  @import '../CSS/AddQuestionsAnswers.css';
</style>