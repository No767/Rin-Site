import { useState } from 'react'
import logo from './Rin-Logo.webp'
import { Button, DatePicker } from 'antd';
import './App.css'
import "./tailwindcss.css"


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Rin</p>
        <p>
          A Discord Bot focused on obtaining data from third-party
        </p>
        <Button type="primary">PRESS ME</Button>
        <Button type="primary">Here's another button</Button>
        <button class="bg-white hover:bg-gray-200 text-black font-semibold py-7 px-20 sm:px-20 rounded-lg shadow-md inline-flex items-center">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@5.10.0/icons/github.svg" height="48" width="48" class="pr-4" alt="GitHub"/>GitHub
        </button>
      </header>
    </div>
  )

}

export default App

