const Home = window.httpVueLoader('./components/Home.vue')
const Register = window.httpVueLoader('./components/Register.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Account = window.httpVueLoader('./components/Account.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/account', component: Account },
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    user: {},
    isConnected: false
  },
  async mounted () {
    try {
      const res = await axios.get('/api/me')
      this.user = res.data
      this.isConnected = true
    } catch (err) {
      // if (err.response && err.response.statusCode === 401) {
      if (err.response?.status === 401) {
        this.isConnected = false
      } else {
        console.log('error', err)
      }
    }
  },
  methods: {
    async login (user) {
      const res = await axios.post('/api/login', user)
      this.user = res.data
      this.isConnected = true
      this.$router.push('/account')
    }
  }
})
