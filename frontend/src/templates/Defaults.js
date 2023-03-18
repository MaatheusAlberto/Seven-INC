import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import Header from "../partials/Header"

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
    margin: '0 50px',
  }
}))

const Default = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Header />
      <Container className={classes.container}>
        {children}
      </Container>
    </>
  )
}

export default Default