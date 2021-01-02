import { makeStyles, Theme, Toolbar } from "@material-ui/core";
import { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
}))

const MainContent: FC = () => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <Toolbar />
      おはよう
    </main>
  )
}

export default MainContent