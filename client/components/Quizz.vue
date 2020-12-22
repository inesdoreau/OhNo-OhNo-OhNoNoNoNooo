<template>
  <div>
    <h2> {{ questions[number*4 - 1].question}} </h2>
    <article v-for="question in questions" :key="question.id">
      <div class="question-content" v-if="question.idQuestion == number">
          <p> - {{ question.answer }}</p>
      </div>
    </article>
    <div>
        <button @click="nextQues(number++)">Next</button>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
    questions: { type: Array, default: [] },
    
  },
  data () {
    return {
        number: 1,
    }
  },
  methods: {
    nextQues (number) {
      this.$emit('next-quest', number)
    }
  }
}
</script>

<style scoped>
article {
  display: flex;
}

.question-title {
  display: flex;
  justify-content: space-between;
}

textarea {
  width: 100%;
}
</style>
