const FuncionariosModel = require('../models/funcionarios')
const db = require('../database/db')

async function get(req, res) {
  const { id } = req.params
  let obj = id ? { _id: id } : null

  const funcionarios = await FuncionariosModel.find(obj)

  res.send(funcionarios)
}

async function post(req, res) {
  const {
    name,
    document,
    email,
    phone,
    birth_date,
    salary,
    created_at,
  } = req.body

  const funcionario = new FuncionariosModel({
    name,
    document,
    email,
    phone,
    birth_date,
    salary,
    created_at,
  })

  funcionario.save()

  res.send({message: "save success"})

}

async function put(req, res) {
  const { id } = req.params
  let obj = id ? { _id: id } : null

  try {
    const funcionarioId = await FuncionariosModel.findById(obj)

    if(!funcionarioId) {
      return res.status(404).send({ message: 'Employee not exist' })
    }

    const funcionario = await FuncionariosModel.findOneAndUpdate({ _id: id}, req.body, { new: true })

    res.send({
      message: 'Update success',
      funcionario
    })
  } catch (err) {

  }
}

async function del(req, res) {
  const { id } = req.params
  let obj = id ? { _id: id } : null

  try {
    const funcionarios = await FuncionariosModel.findById(obj)

    console.log(funcionarios)

    if (!funcionarios) {
      return res.status(404).send({ message: 'Employee not exist' })
    }

    await FuncionariosModel.deleteOne({ _id: id })
    
    res.send({ message: 'deleted successfully' })

  } catch (err) {
    console.error(err)
    res.status(500).send({ message: 'Internal server error' })
  }

}


module.exports = {
  get,
  post,
  put,
  del,
}