import { useState } from 'react'
import { BellOutlined, AntDesignOutlined} from '@ant-design/icons'
import { Avatar } from '@mui/material'
import './App.css'

function App() {
  return (
    <header>
      <div id='header'>
        <div>
        <BellOutlined style = {{fontSize: '26px'}} id='notification'/>
        </div>
        <div id="badge">
          <Avatar alt="Remy Sharp" src="https://ik.imagekit.io/hbzknb1hm/rajesh1.jpeg?updatedAt=1687880887870" style={{width:'90px',height:'90px'}}/>
          <div>
            <h1>Hi Rajesh</h1>
            <p>Here's what's happening with your projects today</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default App