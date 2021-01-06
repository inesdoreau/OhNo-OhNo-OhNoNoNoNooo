<template>
  <div class="form-box">
    <h2 class="title-form">Inscription</h2>
    <!-- <form @submit.prevent="createUser()">
      <input v-model="pseudo" placeholder="pseudo">
      <input
      type="password" v-model="password"
      placeholder="password"
      >
      <button type="submit">Se créer un compte</button>
    </form> -->

    <!--<link rel="stylesheet" type="text/css" href="CSS/LoginAndRegister.css">-->
    <form  @submit.prevent="createUser() ">

					<div class="registerInfo validate-input user-box" >
						<input v-model="pseudo" class="inputinfo" type="text" required>
            <label>Entrer votre Pseudo</label>
					</div>

					<div class="registerInfo validate-input user-box" >
						<input v-model="password" class="inputinfo" type="password"  required>
            <label>Mot de Passe</label>
					</div>

          <!--<div class="registerInfo validate-input user-box" >
						<input v-model="password" class="inputinfo" type="password" required>
            <label>Confirmer le Mot de Passe</label>
					</div>-->
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							<div class='boo'>Let's GO !</div>
						</button>
					</div>

    </form>

     <div class="text-center p-t-136 registerLink">
        <router-link to='/login' class="login100-form-btn redirection-form">Deja un compte ? Venez vous connecter !</router-link>
    </div>
  </div>

</template>

<script>
module.exports = {
    data () {
        return {
            pseudo: '',
            password: ''
        }
    },
    async mounted () {

    },
    methods: {
        async createUser() {
            await axios.post('/api/register', {
                pseudo: this.pseudo,
                password: this.password
            })
            this.$router.push('/')
        }
    }
}
</script>

<style>
      @import '../CSS/LoginAndRegister.css';
</style>