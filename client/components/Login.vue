<template>
    
    <div class="form-box">
        <h2 class="title-form">Login</h2>
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
            <button class="login100-form-btn">
                <div class="boo">Let's GO !</div>
            </button>
        </div>
    </form>
    

    <div class="text-center p-t-136 registerLink">
        <router-link to='/register' class="login100-form-btn redirection-form">Pas encore de compte ? Allez-vous inscrire !</router-link>
    </div>

    </div>
</template>

<script>
module.exports = {
    data () {
        return {
            pseudo: '',
            password: '',
            isAdmin: '', 
            score: ''
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