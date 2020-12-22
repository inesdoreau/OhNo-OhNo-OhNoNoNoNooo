<template>
  <div>
    <h2>Register</h2>
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
					<span class="register-form-title">
						Joignez Vous Aux Quiz !
					</span>

					<div class="registerInfo validate-input" >
						<input v-model="pseudo" class="inputinfo" type="text"  placeholder="Entrer votre pseudo" required>
					</div>

					<div class="registerInfo validate-input" >
						<input v-model="password" class="inputinfo" type="password"  placeholder="Password" required>
					</div>

          <div class="registerInfo validate-input" >
						<input v-model="password" class="inputinfo" type="password"  placeholder="Confirm Password" required>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Register
						</button>
					</div>

    </form>
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