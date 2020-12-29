<template>
    
    <div class="login-box">
        <h2>Login</h2>
        <!--<form @submit.prevent="loginUser()">
            <input v-model="pseudo" placeholder="pseudo">
            <input
            type="password" v-model="password"
            placeholder="password"
            >
      <button type="submit">Se connecter</button>
    </form>-->
    <!--<link rel="stylesheet" type="text/css" href="css/LoginAndRegister.css">-->
    <form  @submit.prevent="loginUser() ">
        <div class="registerInfo validate-input user-box" >
            <input v-model="pseudo" class="inputinfo" type="text" required>
            <label>Pseudo</label>
        </div>

        <div class="registerInfo validate-input user-box" >
            <input v-model="password" class="inputinfo" type="password" required>
            <label>Mot de Passe</label>
        </div>
        
        <div class="container-login100-form-btn">
            <!--<router-link to='/account' class="login100-form-btn">Login</router-link>-->
            <button class="login100-form-btn">
                Let's GO !
            </button>
    </form>
    

    <div class="text-center p-t-136 registerLink">
        <router-link to='/register' class="login100-form-btn">No account ? Register Now !</router-link>
        <!--<a class="txt2" href="#">
            Register Now !
            <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
        </a>-->
    </div>

    </div>
</template>

<script>
module.exports = {
    data () {
        return {
            pseudo: '',
            password: '',
            isAdmin: ''
        }
    },
    async mounted () {

    },
    methods: {
        async loginUser() {
            this.$emit('login', {
                pseudo: this.pseudo, 
                password: this.password
            })
        }
    }
}
</script>

<style>
      @import '../CSS/LoginAndRegister.css';
</style>