<template>
    <center>
        <div class="div-home">
            <h2 class="home-title">WELCOME to the Oh No Oh No Oh Nononono quizz</h2>   
        </div>  
        <div id="wrapper" v-if="isConnected">
            <router-link to='/account' class="my-super-cool-btn" >
                <div class="dots-container">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                </div>
                <span>Go!</span>
            </router-link>
        </div>
        <div id="wrapper" v-else>
            <router-link to='/register' class="my-super-cool-btn" >
                <div class="dots-container">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                </div>
                <span>Go!</span>
            </router-link>
        </div>

    <center>
</template>


<script>
module.exports = {
    props: {
        user: {type: Object},
        isConnected: { type: Boolean }
    },
    data () {
    return {
    }
  },
    async mounted () {
    },
}
</script>

<style>
      @import '../CSS/index.css';
</style>