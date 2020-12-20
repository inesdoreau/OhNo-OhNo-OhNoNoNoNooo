const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const { Client, Connection } = require('pg')

const client = new Client({
  
  user: 'slwtkbrbtbvabe',
  host: 'ec2-54-78-127-245.eu-west-1.compute.amazonaws.com',
  password: '86f50c1a4be2e9d887b1e083d40432d89335705f5d2a1d9021152a9e59c9c22c',
  database: 'd8mn9uj7ubh1e0',
  
  //process.env.DATABASE_URL
})

client.connect()

const users = []

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
    // si on a pas trouvé l'utilisateur
    // alors on le crée
    const user = result.rows[0]
  
    if (await bcrypt.compare(password, user.password)) {
      // alors connecter l'utilisateur
      req.session.userId = user.id
      res.json({
        id: user.id,
        pseudo: user.pseudo
      })
    } else {
      res.status(401).json({
        message: 'bad password'
      })
      return
    }
  })
  
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
  
  router.get('/me', async (req, res) => {
    if (typeof req.session.userId === 'undefined') {
      res.status(401).json({ message: 'not connected' })
      return
    }
  
    const result = await client.query({
      text: 'SELECT id, pseudo FROM users WHERE id=$1',
      values: [req.session.userId]
    })
  
    res.json(result.rows[0])
  })

module.exports = router