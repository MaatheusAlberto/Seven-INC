const router = require('express').Router()

const FuncionariosController = require('../controllers/funcionarios')

router.get('/employee/:id?', FuncionariosController.get) // Restfull
// router.post('/employee', FuncionariosController.post)
// router.put('/employee/:id', FuncionariosController.put)
// router.delete('/employee/:id', FuncionariosController.delete)


module.exports = router