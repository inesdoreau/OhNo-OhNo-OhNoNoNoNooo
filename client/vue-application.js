const Home = window.httpVueLoader('./components/Home.vue')
const Register = window.httpVueLoader('./components/Register.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Account = window.httpVueLoader('./components/Account.vue')
const Quizz = window.httpVueLoader('./components/Quizz.vue')
const AddQuestions = window.httpVueLoader('./components/AddQuestions.vue')
const Final = window.httpVueLoader('./components/Final.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/account', component: Account },
  { path: '/quizz', component: Quizz },
  { path: '/question', component: AddQuestions},
  { path: '/final', component: Final}
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    user: {},
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
      const res = await axios.post('/api/score', user)
      this.user = res.data
      this.$router.push('/final')
    }
  }
})
