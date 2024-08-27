import React, { useState } from 'react';
import './App.css';
import {  createTheme, CssBaseline, Grid, IconButton, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { routesList } from '../src/routes/routes';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function App() {
  const [themeSelected, setThemeSelected] = useState('dark');
 
  const darkMode = createTheme({
    palette: {
      mode: 'dark',
      background: {
        paper: '#2e2d2c',
        default: '#2e2d2c' 
      }
    }
  })

  const lightMode = createTheme({
    palette: {
      mode: 'light',
      background: {
        paper: '#f3f3f3',
        default: '#f3f3f3'
      }
    }
  })


  return (
    <ThemeProvider theme={themeSelected === 'dark' ? darkMode : lightMode}>
      <CssBaseline/>
      <IconButton sx={{position: 'absolute', top: 2, right: 2}} onClick={() => setThemeSelected(themeSelected === 'dark' ? 'light' : 'dark' )}>
        {themeSelected === 'dark' ? <FaMoon color='#ffffff'/> : <FaSun color='#2b2b2b'/>}
      </IconButton>
    <Grid container spacing={1}>
      <Grid item xs={12} style={{ marginTop:"0.5em"}}>
        <Routes>
          {(routesList || []).map((m) => 
            <Route element={m?.component} path={m?.path}/>
          )}
        </Routes>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}

export default App;
