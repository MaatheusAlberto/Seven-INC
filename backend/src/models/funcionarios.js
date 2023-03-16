const mongoose = require('mongoose')
const moment = require('moment-timezone');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  document: { type: String, required: true },
  email: String,
  phone: String,
  birth_date: { type: Date, default: null },
  salary: Number,
  created_at: { type: Date,  default: Date.now }
})

schema.pre('save', function(next) {
  const now = moment().tz('America/Sao_Paulo').format();
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});

const Model = mongoose.model('funcionarios', schema)

module.exports = Model