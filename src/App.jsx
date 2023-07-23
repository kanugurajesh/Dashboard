import { useState } from 'react'
import { BellOutlined, AntDesignOutlined, HomeOutlined} from '@ant-design/icons'
import { Avatar } from '@mui/material'
import './App.css'

function App() {
  const [index, setIndex] = useState(0)
  return (
    <>
    <div id="toplayer">
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
            <div id="metric1">
              <h3>Today</h3>
              <h1>$19,892</h1>
              <h4>Account Balance</h4>
            </div>
            <div id='metric2'>
              <div>
                <h3>$4,000</h3>
                <h4>Year-to-Date</h4>
              </div>
              <div>
                <h3>$1,892</h3>
                <h4>Total Intrest</h4>
              </div>
            </div>
            <button>I want to...</button>
          </div>
        </div>
      </header>
      <main></main>
      </div>
      <footer>
        <div className={`footer-element ${index === 0 ? 'violet': ''}`} onClick={() => setIndex(0)}>
          <img src="https://ik.imagekit.io/hbzknb1hm/home.png?updatedAt=1690089551208" alt="" />
        </div>
        <div className={`footer-element ${index === 1 ? 'violet': ''}`} onClick={() => setIndex(1)}>
          <img src="https://ik.imagekit.io/hbzknb1hm/letter1.png?updatedAt=1690089551603" alt="" />
        </div>
        <div className={`footer-element ${index === 2 ? 'violet': ''}`} onClick={() => setIndex(2)}>
        <img src="https://ik.imagekit.io/hbzknb1hm/letter2.png?updatedAt=1690089551592" alt="" />
        </div>
        <div className={`footer-element ${index === 3 ? 'violet': ''}`} onClick={() => setIndex(3)}>
          <img src="https://ik.imagekit.io/hbzknb1hm/user.png?updatedAt=1690089551598" alt="" />
        </div>
        <div className={`footer-element ${index === 4 ? 'violet': ''}`} onClick={() => setIndex(4)}>
          <img src="https://ik.imagekit.io/hbzknb1hm/search.png?updatedAt=1690089551593" alt="" />
        </div>
      </footer>
      </>  
  )
}

export default App