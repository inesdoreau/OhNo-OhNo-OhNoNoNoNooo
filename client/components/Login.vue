<template>
    
    <div>
        <h2>Login</h2>
        <form @submit.prevent="loginUser()">
            <input v-model="pseudo" placeholder="pseudo">
            <input
            type="password" v-model="password"
            placeholder="password"
            >
      <button type="submit">Se connecter</button>
    </form>
    <link rel="stylesheet" type="text/css" href="css/LoginAndRegister.css">
    <form  @submit.prevent="loginUser() ">
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
							Login
						</button>
					</div>

					<div class="text-center p-t-136">
						<a class="txt2" href="#">
							Register Now !
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
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
        async loginUser() {
            this.$emit('login', {
                pseudo: this.pseudo, 
                password: this.password
            })
        }
    }
}
</script>s