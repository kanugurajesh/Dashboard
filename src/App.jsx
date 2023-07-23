import { useState } from 'react'
import { BellOutlined, CloseOutlined} from '@ant-design/icons'
import TopField from './components/TopField'
import ActiveFooter from './components/ActiveFooter'
import InActiveTopField from './components/InActiveTopField'
import InActiveFooter from './components/InActiveFooter'
import './App.css'

function App() {
  const [index, setIndex] = useState(0)
  const [active, setActive] = useState(true)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
       {active ? 
        <>
          <BellOutlined onClick={handleClick} style={{fontSize:'30px'}} id='notification'/>
          <TopField/>
          <ActiveFooter index={index} setIndex={setIndex}/>
        </>
       :
        <>
          <CloseOutlined onClick={handleClick} style={{fontSize:'30px'}} id='notification'/>
          <InActiveTopField />
          <InActiveFooter />
        </>
       }
    </>
  )
}

export default App;