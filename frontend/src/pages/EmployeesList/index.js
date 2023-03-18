import React, { useState, useEffect } from "react"
import axios from "axios"

import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import EmployeeCard from "../../components/EmployeeCard"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: theme.spacing(2),
  } 
}))

const EmployeesList = () => {
  const classes = useStyles();
  const [employees, setEmployees] = useState([])

  useEffect(() => {

    axios.get('http://localhost:8080/api/employee/')
      .then(response => {
        setEmployees(response.data)
      })

  },[])

  const handleRemoveEmployee = id => {
    axios.delete(`http://localhost:8080/api/employee/${id}`)
      .then(() => {
        const newEmpoyees = employees.filter(employee => employee._id !== id)
        setEmployees(newEmpoyees)
      })
  }

  return (
    <Grid container>
      {
        employees?.length > 0 && employees.map((item) => (
          <Grid item xs={12} md={6} lg={3}>
            <EmployeeCard 
              id={item._id}
              name={item.name}
              cpf={item.document}
              email={item.email}
              telefone={item.phone}
              dataNascimento={item.birth_date}
              salario={item.salary}
              dataContratacao={item.created_at}
              className={classes.card}
              onRemoveEmployee={handleRemoveEmployee}
              onEditEmployee={() => item._id}
            />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default EmployeesList
