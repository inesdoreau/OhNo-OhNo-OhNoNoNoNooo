<template>
<div>
    <form @submit.prevent="addQuestion()">
        <h2>New Question:</h2>
        <input type="text" v-model="newQuestion.question" placeholder="Question" required>
        <button type="submit">Ajouter</button>
    </form>
    {{ newQuestion.id }} - {{newQuestion.question}}

     
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
</style>