import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
  }
}))

const Page = ({ title, Component }) => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h4">
        {title}
      </Typography>
      <Component />
    </>
  )
}

export default Page