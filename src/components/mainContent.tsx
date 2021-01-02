import { makeStyles, Theme, Toolbar } from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { main } from "../api";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
}))

const MainContent: FC = () => {
  const classes = useStyles()

  useEffect(() => {
    main().then((items) => {
      console.log(items.data)
    })
  },[])

  return (
    <main className={classes.content}>
      <Toolbar />
      あいうえお
    </main>
  )
}

export default MainContent