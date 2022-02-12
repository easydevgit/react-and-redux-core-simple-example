import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import { useEffect } from "react"
import { makeStyles } from "@mui/styles"
import Header from "./components/Header"

function App() {
  const classes = useStyles()
  useEffect(() => {})

  return (
    <Container maxWidth="sm">
      <Header></Header>
      <div className={classes.buttonWrapper}>
        <Button variant="contained">Get Starships</Button>
        <Button variant="contained">Get Planets</Button>
      </div>
    </Container>
  )
}

const useStyles = makeStyles({
  buttonWrapper: {
    display: "flex",
    justifyContent: "space-around",
  },
})

export default App
