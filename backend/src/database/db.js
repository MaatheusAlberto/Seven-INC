const mongoose = require('mongoose')

function connect(){

  // mongoose.set('useNewUrlParser', true)
  // mongoose.set('useUnifiedTopology', true)

  mongoose.connect('mongodb://127.0.0.1:27017/seven-inc?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')

  const db = mongoose.connection

  db.once('open', () => {
    console.log('Database connected!!')
  })

  db.on('error', console.error.bind(console, 'error connection: '))


}

module.exports = {
  connect
}