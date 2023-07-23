import React from 'react'
import { Avatar } from '@mui/material'
import BarField from './BarField'

function App() {
    return (
    <div id="toplayer">
      <header>
        <div id='header'>
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
          <div id='transaction'>
            <h3>Recent Transactions</h3>
            <div className="transaction">
              <h4>2020-08-07</h4>
              <h4>Withdrawal Transfer to Bank-XXX11</h4>
            </div>
            <div className="transaction">
              <h4>2020-08-07</h4>
              <h4>Withdrawal Transfer to Bank-XXX11</h4>
            </div>
            <div className="transaction">
              <h4>2020-08-07</h4>
              <h4>Withdrawal Transfer to Bank-XXX11</h4>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="main-section-1">
          <h4>Retirement Income</h4>
          <h2>Starting Year 2056</h2>
        </section>
        <section id='main-section-2'>
          <div>
            <h1>$300,000</h1>
            <h5>My Goal</h5>
          </div>
          <div>
            <div>
              <h2>59%</h2>
              <h5>Goal Achieved</h5>
            </div>
            <div>
              <h2>K 300</h2>
              <h5>Est Monthly Income</h5>
            </div>
          </div>
        </section>
        <section id='main-section-3'>
          <h3>Contributions Overtime</h3>
          <div>
            <div className='main-section-3-div'>
              <div style={{backgroundColor:'#000080'}}></div>
              <h5>Employer</h5>
              <h4>$73,500</h4>
            </div>
            <div className='main-section-3-div'>
              <div style={{backgroundColor:'#0047AB'}}></div>
              <h5>Employee</h5>
              <h4>$52,500</h4>
            </div>
            <div className='main-section-3-div'>
              <div style={{backgroundColor:'#4169e1'}}></div>
              <h5>Total Intrest</h5>
              <h4>$244,313</h4>
            </div>
          </div>
          <BarField/>
        </section>
      </main>
      </div>
    )
}

export default App;