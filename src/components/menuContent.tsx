import { Drawer, List, ListItem, ListItemText, makeStyles, Toolbar } from "@material-ui/core";
import { FC } from "react";

const useStyles = makeStyles(() => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerContainer: {
    overflow: 'auto',
  },
})
)

const MenuContent: FC = () => {
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
    <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {['All', 'Search'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  )
}

export default MenuContent