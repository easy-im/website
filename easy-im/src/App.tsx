import { useState } from 'react'
import { Row, Col, Image } from 'antd';
import './App.css'
import 'antd/dist/antd.css'
import EasyIm from './img/easy-im.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='easy-container'>
        <div style={{position:'absolute',left:'150px',top:'100px'}}>
        <Image
          width={125}
          src={EasyIm}
          style={{borderRadius:'25px'}}
        />
        <span className='fontStyle'>易聊</span>
      </div>
      {/* <Row>
        <Col span={18} style={{ background: 'blue',float:'left' }}>
          col-6 col-pull-18
        </Col>
        <Col span={6} style={{ background: 'red' }}>
        </Col>

      </Row> */}
    </div>
  )
}

export default App
