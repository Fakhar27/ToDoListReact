import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CssBaseline from '@mui/material/CssBaseline'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList'
import Navbar from './Navbar'
import './App.css'
import './index.css'

function App() {
  return (
    <>
      {/* <CssBaseline />       */}
      <Navbar />
      <TodoList />
    </>
  )
}

export default App
