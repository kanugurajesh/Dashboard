import { useState } from 'react'
import { BellOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <>
      <header>
        <Div>
          <BellOutlined style={{fontSize:'30px'}}/>
        </Div>
      </header>
    </>
  )
}

export default App