import { useState } from 'react'
import { BellOutlined } from '@ant-design/icons'
import './App.css'

function App() {
  return (
    <header>
      <div id='header'>
        <BellOutlined style={{fontSize:'25px'}} id='notification'/>
      </div>
    </header>
  )
}

export default App