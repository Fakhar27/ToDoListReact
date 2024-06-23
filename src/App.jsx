import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TodoList from './TodoList';
import Navbar from './Navbar';
import Guide from './Guide';
import './App.css';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
