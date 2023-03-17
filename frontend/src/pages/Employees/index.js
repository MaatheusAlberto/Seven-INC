import { useState, useEffect } from "react"
import axios from "axios"

const Employees = () => {

  useEffect(() => {
    axios.get('http://localhost:8080/api/employee/')
      .then(response => {
        console.log(response)
      })

  },[])

  return (
    <h1>
      Employees
    </h1>
  )
}

export default Employees
