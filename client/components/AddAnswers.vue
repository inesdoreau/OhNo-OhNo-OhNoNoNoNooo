<template>
    <form v-show="show" @submit.prevent="addAnswers()">
        <h2>New Answer</h2>
        <input type="text" v-model="newAnswer.name" placeholder="Answer" required>
        <div>
            <input type="checkbox" id="isGood" name="isGood" >
            <label for="isGood"> Is Good</label>
        </div>
        <button type="submit">Ajouter</button>
    </form>
</template>
 
<script>
module.exports = {
  props: {
    show: Boolean
  },
  data () {
    return {
        newAnswer: {
            answer: '',
            isGood: '',
            quuestionId: 4
        }
    }
  },
  methods: {
    addAnswers () {
        this.$emit('create-answer', this.newAnswer)
    },
  }
}
</script>
 
<style>
</style>
