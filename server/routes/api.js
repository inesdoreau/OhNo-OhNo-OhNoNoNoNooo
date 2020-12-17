const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const { Client, Connection } = require('pg')

const client = new Client({
  /*user: 'kwhpxbdf',
  host: 'suleiman.db.elephantsql.com',
  password: 'ExLfu8pV-U4wutH840he161Wm8VGq3Py',
  database: 'kwhpxbdf',
  */
  connectionString: process.env.DATABASE_URL
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