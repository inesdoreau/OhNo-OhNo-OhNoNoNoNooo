const { Client } = require('pg')

const client = new Client({
 user: 'kwhpxbdf ',
 host: 'postgres://kwhpxbdf:ExLfu8pV-U4wutH840he161Wm8VGq3Py@suleiman.db.elephantsql.com:5432/kwhpxbdf',
 password: 'ExLfu8pV-U4wutH840he161Wm8VGq3Py',
 database: 'kwhpxbdf '
})

/*client.connect()

async function run () {
  for (const article of articles) {
    await client.query({
      text: `INSERT INTO articles(name, description, image, price)
      VALUES ($1, $2, $3, $4)`,
      values: [article.name, article.description, article.image, article.price]
    })
  }
  console.log('importation terminée')
  client.end()
}

run() */