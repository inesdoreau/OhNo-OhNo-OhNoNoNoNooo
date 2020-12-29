<template>
<div>
    <form @submit.prevent="addQuestion()">
        <h2>New Question:</h2>
        <input type="text" v-model="newQuestion.question" placeholder="Question" required>
        <button type="submit">Ajouter</button>
    </form>

     <button @click="showForm = !showForm">Add new answer</button>
     <add-answers
      :show="showForm"
      @create-answer="addAnswers"
    ></add-answers>
</div>
</template>
 
<script>
const AddAnswers = window.httpVueLoader('./components/AddAnswers.vue')

module.exports = {
  props: {
  },
  data () {
    return {
        newQuestion: {
            id: '',
            question: '',
        },
        showForm: false
    }
  },
  methods: {
    addQuestion () {
        this.$emit('add-question', this.newQuestion)
    },

    addAnswers (answer) {
        this.$emit('add-answer', answer)
    }
  }
}
</script>
 
<style>
</style>