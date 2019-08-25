const { connect: dbConnect } = require('mongoose')

function connect() {

  const dbOptions = {
    useNewUrlParser: true,
    useFindAndModify: false
  }

  const dbName = 'cte'
  const dbPort = '27017'
  const dbUrl = `mongodb://localhost:${dbPort}/${dbName}`

  dbConnect(dbUrl, dbOptions)
}

module.exports = {
  connect
}