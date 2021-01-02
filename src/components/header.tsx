import { AppBar, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}))

const Header = () => {

  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Axios Api
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header