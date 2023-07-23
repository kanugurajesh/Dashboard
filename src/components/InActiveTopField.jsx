import { CaretDownOutlined} from '@ant-design/icons';
import { Progress, Space } from 'antd';

import '../Hide.css';
function App() {
  return (
    <>
      <main id="main-2">
        <section id="main-inactive">
          <h4>How do I compare to my peers ?</h4>
          <h5>These numbers represent current goal achievement</h5>
        </section>
        <section id="main-inactive-1">
          <div className="main-inactive-1">
            <h4>Age:</h4>
            <h4 style={{opacity:'0.5'}}>Under 30<CaretDownOutlined style={{scale:'0.6'}}/></h4>
          </div>
          <div className="main-inactive-1">
            <h4>Salary:</h4>
            <h4 style={{opacity:'0.5'}}>K 20 - K 30<CaretDownOutlined style={{scale:'0.6'}}/></h4>
          </div>
          <div className="main-inactive-1">
            <h4>Gender: </h4>
            <h4 style={{opacity:'0.5'}}>Male<CaretDownOutlined style={{scale:'0.6'}}/></h4>
          </div>
        </section>
        <section id="main-inactive-2">
          <Space wrap style={{display:'flex',justifyContent:'space-between'}}>
            <Progress type="circle" percent={75} strokeWidth={8} size={90}/>
            <Progress type="circle" percent={98} strokeWidth={8} size={90}/>
            <Progress type="circle" percent={80} strokeWidth={8} size={90}/>
          </Space>
        </section>
      </main>
    </>
  )
}

export default App;