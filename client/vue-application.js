const Home = window.httpVueLoader('./components/Home.vue')
const Register = window.httpVueLoader('./components/Register.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Account = window.httpVueLoader('./components/Account.vue')
const Quizz = window.httpVueLoader('./components/Quizz.vue')
const AddQuestions = window.httpVueLoader('./components/AddQuestions.vue')
const AddAnswers = window.httpVueLoader('./components/AddAnswers.vue')
const Final = window.httpVueLoader('./components/Final.vue')
const Leaderboard = window.httpVueLoader('./components/Leaderboard.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/account', component: Account },
  { path: '/quizz', component: Quizz },
  { path: '/question', component: AddQuestions},
  { path: '/answer', component: AddAnswers},
  { path: '/final', component: Final},
  { path: '/leaderboard', component: Leaderboard},
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    user: {},
    users: [],
    isConnected: false,
    questions: [],
    answers: [],
    score: {},
  },
  async mounted () {

    const res2 = await axios.get('/api/ques')
    this.questions = res2.data
    const res3 = await axios.get('/api/ans')
    this.answers = res3.data
    const res4 = await axios.get('/api/users')
    this.users = res4.data
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
    },

    async addQuestion (question) {
      const res = await axios.post('/api/question', question)
      this.questions.push(res.data)
    },

    async addAnswers (answer) {
      const res = await axios.post('/api/answers', answer)
      this.answers.push(res.data)
    },

    async addScore (user) {
      const res = await axios.put('/api/score', user)
      
      this.$router.push('/final')
    },

    async logout(){
      await axios.get('/api/logout')
      this.isConnected = false
      this.$router.push('/')
    }
  }
})
