import React from 'react';
import './App.css';
import SideMenu from '../Components/SideMenu';
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import Header from '../Components/Header';
import Employees from '../pages/Employees/Employees';

const theme = createMuiTheme({
  palette:{
    primary:{
      main:"#333996",
      light:"#3c44b126"
  },
  secondary:{
    main:"#f83245",
    light:"#f8324526"
    },
    background: {
      default:"#f4f5fd"
    },
    overrides:{
      MuiAppBar:{
        root:{
         transform:'translateZ(0)'
        }
      }
    }
  }
})


const useStyles = makeStyles({
  appMain:{
    paddingLeft: '320px',
    width:'100%'
  }
})

function App() {
  const classes = useStyles();
  
  return (
    <ThemeProvider theme={theme}>
   <SideMenu />
    <div className={classes.appMain}>
      <Header />
      <Employees />
    </div>
    <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
