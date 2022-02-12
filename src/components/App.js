import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import { useEffect } from "react"
import { makeStyles } from "@mui/styles"
import Header from "./Header"
import { useSelector, useDispatch } from "react-redux"
import { loadingStarshipsSuccess } from "../store/actions/starships"

function App() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const starships = useSelector((state) => state.starships.data)
  useEffect(() => {})

  const getStarships = () => {
    dispatch(loadingStarshipsSuccess())
  }

  return (
    <Container maxWidth="sm">
      <Header></Header>
      <div className={classes.buttonWrapper}>
        <Button variant="contained" onClick={getStarships}>
          Get Starships
        </Button>
        <Button variant="contained">Get Planets</Button>
      </div>

      <div>{starships}</div>
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
