const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  document: { type: String, required: true },
  email: String,
  phone: String,
  birth_date: Date,
  salary: Number,
  created_at: Date
})

const Model = mongoose.model('funcionarios', schema)

module.exports = Model