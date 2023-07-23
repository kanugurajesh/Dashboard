import { useState } from 'react'
import { BellOutlined, AntDesignOutlined, HomeOutlined} from '@ant-design/icons'
import { Avatar } from '@mui/material'
import './App.css'

function App() {
  return (
    <>
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
          <div id="metric">
            <div>
              <h3>Today</h3>
              <h1>$19,892</h1>
              <h4>Account Balance</h4>
            </div>
            <div>
              <div>
                <h2>$4,000</h2>
                <h4>Year-to-Date</h4>
              </div>
              <div>
                <h2>$1,892</h2>
                <h4>Total Intrest</h4>
              </div>
            </div>
            <button>I want to...</button>
          </div>
        </div>
      </header>
      <main></main>
      <footer>
        <div>
          <img src="/public/home.png" alt="" />
        </div>
        <div>
          <img src="/public/letter1.png" alt="" />
        </div>
        <div>
        <img src="/public/letter2.png" alt="" />
        </div>
        <div>
          <img src="/public/user.png" alt="" />
        </div>
        <div>
          <img src="/public/search.png" alt="" />
        </div>
      </footer>
      </>  
  )
}

export default App