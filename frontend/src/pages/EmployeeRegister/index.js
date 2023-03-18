import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import axios from 'axios'
import { Formik } from 'formik'
import * as yup from 'yup'

import Toast from '../../components/Toast'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  space: {
    margin: theme.spacing(2),
  },
  field: {
    width: '50%',
  },

}))

const validation = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  document: yup.string().required('Campo obrigatório')
    .max(11, 'Maximo 11 caracteres')
    .min(11, 'Digite seu CPF sem caracteres, apenas numeros'),
  email: yup.string().email('Digite um e-mail valido'),
  phone: yup.string()
    .min(11, 'Digite seu Telefone sem caracteres, apenas numeros')
    .max(11, 'Maximo 11 caracteres'),
  birth_date: yup.string().required('Campo obrigatório').matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, 'Data inválida.'),
  salary: yup.number(),
  created_at: yup.string().matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, 'Data inválida.'),
})

const EmployeeRegister = () => {
  const classes = useStyles()
  const [toastOpen, setToastOpen] = useState({open: false, text: '', color: ''})
  const [isLoading, setIsLoading] = useState(false)

  const formatDate = (value) => {
    const onlyNums = value.replace(/[^\d]/g, '');

    if (onlyNums.length <= 2) {
      return onlyNums;
    } else if (onlyNums.length <= 4) {
      return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2)}`;
    } else {
      return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}/${onlyNums.slice(4, 8)}`;
    }
  }

  const submitDados = (values) => {
    setIsLoading(true)
    const birthDate = new Date(values.birth_date)
    const isoBirthDate = birthDate.toISOString()

    const payload = {
      name: values.name,
      document: values.document,
      email: values.email,
      phone: values.phone,
      birth_date: isoBirthDate ? isoBirthDate : '',
      salary: parseFloat(values.salary),
      created_at:values.created_at ? values.created_at : ''  
    }

    axios.post('http://localhost:8080/api/employee', payload)
    .then(response => {
      console.log('Success:', response.data);
      setToastOpen({open: true, text: 'Cadastro realizado com sucesso!!', color:'1'})
      setIsLoading(false)
    })
    .catch(error => {
      console.error('Error:', error);
      setToastOpen({open: true, text: 'Algum dado está incorreto!!', color:'2'})
    });
  }

  return (
    <>
      <Formik
        initialValues={{
          name:'',
          document: '',
          email: '',
          phone: '',
          birth_date: '',
          salary: '',
          created_at: '',
        }}
        validationSchema={validation}
        onSubmit={(values) => submitDados(values)}
      >
        {
          ({
            values,
            errors,
            handleChange,
            handleSubmit,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className={classes.space}>
                  <TextField
                    name="name"
                    value={values.name} 
                    onChange={handleChange} 
                    error={Boolean(errors.name)} 
                    helperText={errors.name}
                    className={classes.field} 
                    label="Digite o nome do funcionario" 
                  />
                </div>
                <div className={classes.space}>
                  <TextField
                    name="document"
                    value={values.document} onChange={handleChange} 
                    error={Boolean(errors.document)} 
                    helperText={errors.document}
                    className={classes.field} 
                    label="Digite o CPF do funcionario" 
                  />
                </div>
                <div className={classes.space}>
                  <TextField
                    name="email"
                    value={values.email} 
                    onChange={handleChange}
                    error={Boolean(errors.email)} 
                    helperText={errors.email} 
                    className={classes.field} 
                    label="Digite o e-mail do funcionario" 
                  />
                </div>
                <div className={classes.space}>
                  <TextField
                    name="phone"
                    value={values.phone} 
                    error={Boolean(errors.phone)} 
                    helperText={errors.phone} 
                    onChange={handleChange} 
                    className={classes.field} 
                    label="Digite o telefone do funcionario" 
                  />
                </div>
                <div className={classes.space}>
                  <TextField
                    name="birth_date"
                    value={formatDate(values.birth_date)} 
                    error={Boolean(errors.birth_date)} 
                    helperText={errors.birth_date} 
                    onChange={handleChange}
                    className={classes.field} 
                    label="Digite a data de nascimento do funcionario" 
                  />
                </div>
                <div className={classes.space}>
                  <TextField
                    name="salary" 
                    value={values.salary} 
                    error={Boolean(errors.salary)} 
                    helperText={errors.salary} 
                    onChange={handleChange} 
                    className={classes.field} 
                    label="Digite o salario do funcionario" 
                  />
                </div>
                <div className={classes.space}>
                  <TextField
                    name="created_at" 
                    value={formatDate(values.created_at)} 
                    error={Boolean(errors.created_at)} 
                    helperText={errors.created_at} 
                    onChange={handleChange} 
                    className={classes.field} 
                    label="Digite a data de contratação do funcionario" 
                  />
                </div>
                <div className={classes.space}>
                  <Button type="submit" variant='contained' color="primary" disabled={isLoading}>
                    {isLoading ? 'Loading...' :'Salvar'}
                  </Button>
                </div>
              </form>
            )
          }
        }
      </Formik>
      <Toast 
        open={toastOpen.open}
        severity={toastOpen.color === '1' ? "success" : "error" }
        message={toastOpen.text} 
        onClose={() => setToastOpen({open: false, text: '', color: 'success'})}
      />
    </>
  )
}

export default EmployeeRegister