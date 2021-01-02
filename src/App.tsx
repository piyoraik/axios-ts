import { CssBaseline, makeStyles } from '@material-ui/core';
import React from 'react';
import './App.css';
import Header from './components/header';
import MainContent from './components/mainContent';
import MenuContent from './components/menuContent';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  }
}))

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <CssBaseline />
      <Header />
      <MenuContent />
      <MainContent />
    </div>
  );
}

export default App;
