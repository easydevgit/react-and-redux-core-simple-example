import { makeStyles } from "@mui/styles"

const Header = () => {
  const classes = useStyles()
  return <div className={classes.header}>SWAPI Test APP</div>
}

const useStyles = makeStyles({
  header: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    fontSize: "2rem",
    marginBottom: "30px"
  },
})

export default Header
