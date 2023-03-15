const FuncionariosModel = require('../models/funcionarios')

async function get(req, res) {
  const { id } = req.params
  let obj = id ? { _id: id } : null

  const funcionarios = await FuncionariosModel.find(obj)

  res.send(funcionarios)

}

module.exports = {
  get,
}