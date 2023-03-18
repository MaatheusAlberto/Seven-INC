import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  Avatar,
  IconButton,
} from '@material-ui/core'

import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import ModalConfirm from '../ModalConfirm'

const useStyles = makeStyles(() => ({
  containerCard: {
    maxWidth: 345,
  },
}))

const EmployeeCard = ({ 
  id,
  name,
  cpf,
  email,
  telefone,
  dataNascimento,
  salario,
  dataContratacao,
  className,
  onRemoveEmployee,
  onEditEmployee
}) => {

  const classes = useStyles()
  const [openModal, setOpenModal] = useState(false)

  const dateNasc = new Date(dataNascimento);
  const formattedDateNasc = dateNasc.toLocaleDateString('pt-BR');

  const dateContratacao = new Date(dataContratacao);
  const formattedDateContr = dateContratacao.toLocaleDateString('pt-BR');

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const toggleConfirmModal = id => {
    onRemoveEmployee(id)
    toggleModal()
  }

  const clickRemoveEmployee = () => {
    toggleModal()
  }

  const clickEditEmployee = id => {
    onEditEmployee(id)
    const data = {
      id: id,
      name: name,
      document: cpf,
      email: email,
      phone: telefone,
      birth_date: dataNascimento,
      salary: salario,
      created_at:dataContratacao 
    }
    localStorage.setItem('data', JSON.stringify(data));
  }

  return (
    <>
      <Card className={classNames(className, classes.containerCard)}>
        <CardHeader
          style={{ paddingBottom: 5}}
          avatar={
            <Avatar aria-label="recipe">
              {name.charAt(0)}
            </Avatar>
          }
          title={name}
          subheader={<div style={{ fontSize: '13px' }}>Email: {email}<br />CPF: {cpf}</div>}
        />
        <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Typography style={{ fontSize: '13px' }} color="textSecondary" gutterBottom>
            Telefone: {telefone}
          </Typography>
          <Typography style={{ fontSize: '13px' }} color="textSecondary" gutterBottom>
            Data de Nascimento: {formattedDateNasc}
          </Typography>
          <Typography style={{ fontSize: '13px' }} color="textSecondary" gutterBottom>
            Salário: R$ {salario}
          </Typography>
          <Typography style={{ fontSize: '13px' }} color="textSecondary" gutterBottom>
            Data de Contratação: {formattedDateContr}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <Link to={{pathname: `/employees/editar/${id}`,}}>
          <IconButton aria-label="Editar cadastro" onClick={() => clickEditEmployee(id)}>
            <EditIcon/>
          </IconButton></Link>
          <IconButton aria-label="Deletar cadastro" onClick={clickRemoveEmployee}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>

      <ModalConfirm 
        title="Deseja realmente excluir este cadastro?"
        message="Ao confirmar não terá como reverter a situação de exclusão deste cadastro."
        open={openModal}
        onClose={toggleModal}
        onConfirm={() => toggleConfirmModal(id)}
      />

    </>
  )
}

export default EmployeeCard