const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const { Client, Connection } = require('pg')

const client = new Client({
  
  user: 'postgres',
  host: 'localhost',
  password: 'secret',
  database: 'project'
  
  //process.env.DATABASE_URL
})

client.connect()

const users = []

const questions = []

/*class Quizz {
  constructor () {
    this.createdAt = new Date()
    this.updatedAt = new Date()
    this.questions = []
  }
}
*/
/**
 * LOGIN
 */
router.post('/login', async (req, res) => {
    const pseudo = req.body.pseudo
    const password = req.body.password
  
    const result = await client.query({
      text: 'SELECT * FROM users WHERE pseudo=$1',
      values: [pseudo]
    })
  
    if (result.rows.length === 0) {
      res.status(401).json({
        message: 'user doesnt exist'
      })
      return
    }
    const user = result.rows[0]
  
    if (await bcrypt.compare(password, user.password)) {
      // alors connecter l'utilisateur
      req.session.userId = user.id
      res.json({
        id: user.id,
        pseudo: user.pseudo,
        isAdmin:user.isAdmin
      })
    } else {
      res.status(401).json({
        message: 'bad password'
      })
      return
    }
  })


  /**
   * REGISTER
   */
  router.post('/register', async (req, res) => {
    const pseudo = req.body.pseudo
    const password = req.body.password
  
    const result = await client.query({
      text: 'SELECT * FROM users WHERE pseudo=$1',
      values: [pseudo]
    })
  
    if (result.rows.length > 0) {
      res.status(401).json({
        message: 'user already exists'
      })
      return
    }
    // si on a pas trouvé l'utilisateur
    // alors on le crée
  
    const hash = await bcrypt.hash(password, 10)
  
    await client.query({
      text: `INSERT INTO users(pseudo, password)
      VALUES ($1, $2)
      `,
      values: [pseudo, hash]
    })
    res.send('ok')
  })
  
  /**
   * RECUPERER L'USER
   */
  router.get('/me', async (req, res) => {
    if (typeof req.session.userId === 'undefined') {
      res.status(401).json({ message: 'not connected' })
      return
    }
  
    const result = await client.query({
      text: 'SELECT id, pseudo, "isAdmin" FROM users WHERE id=$1',
      values: [req.session.userId]
    })
  
    res.json(result.rows[0])
  })

  /**
   * RECUPERER LES QUESTIONS
   */
  router.get('/ques', async (req, res) => {
    const result = await client.query({
      text: 'select * from questions'
    })
  
    res.json(result.rows)
  })

  /**
   * RECUPERER LES REPONSES
   */
  router.get('/ans', async (req, res) => {
    const result = await client.query({
      text: 'select * from answers'
    })
  
    res.json(result.rows)
  })

  async function parseQuestion(req, res, next) {
    const questionId = parseInt(req.params.questionId)

    if(isNaN(questionId)){
      res.status(400).json({ message: 'questionId should be a number' })
    return
    }

    res.questionId = questionId

    const result = await client.query({
      text: 'select * from questions inner join answers on answers."idQuestion" = questions.id where questions.id = $1',
      values: [questionId]
    })

    if (!result.rows.length) {
      res.status(404).json({ message: 'question ' + questionId + ' does not exist' })
      return
    }

    req.question = result.rows
    next()
  }

  router.route('/ques/:questionId')
    .get(parseQuestion, (req, res) =>{
      res.json(req.question)
    })

  /**
   * Creer une question
   */
  router.post('/question', async (req, res) => {
    const question = req.body.question
  
    await client.query({
      text: `INSERT INTO questions(question) VALUES ($1)
      `,
      values: [question]
    })
    res.send('ok')
  })

  /**
   * Creer une question
   */
  router.post('/answers', async (req, res) => {
    const questionID = req.body.questionID
    const answer = req.body.answer
    const isGood = req.body.isGood
  
    await client.query({
      text: `
      INSERT INTO answers(answer, "isGood", "idQuestion") VALUES ($1, $2, $3)
      `,
      values: [answer, isGood, questionID]
    })
    res.send('ok')
  })


module.exports = router