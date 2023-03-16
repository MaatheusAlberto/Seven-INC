const mongoose = require('mongoose')

function formatDate(date) {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
  return date.toLocaleString('pt-BR', options);
}

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  document: { type: String, required: true },
  email: String,
  phone: String,
  birth_date: { type: Date, default: null, get: formatDate },
  salary: Number,
  created_at: Date
})

schema.pre('save', function(next) {
  if (!this.created_at) {
    this.created_at = new Date();
  }
  next();
});

const Model = mongoose.model('funcionarios', schema)

module.exports = Model