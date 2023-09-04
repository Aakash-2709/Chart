import React from 'react'
import { Tab, Tabs } from 'react-bootstrap';

const OrderTab = ({props}) => {

  const [cms, gdrx] = props;

  return (
    <Tabs
      defaultActiveKey="total"
      transition={false}
      id="noanim-tab-example"
      className="mb-3 mt-3"
    >
      <Tab eventKey="total" title="TOTAL">
      <div className="container">
        {cms.map((data, index) => (
            <div className="box" key={index}>
              <p>{data.Orderdate}</p>
              <span className='cms'>{data.OrderCount}</span>
              <span className='gdrx'>{gdrx[index]?.OrderCount}</span>
            </div>
        ))}
        </div>
      </Tab>
      <Tab eventKey="cms" title="CMS">
      <div className="container">
        {cms.map((data, index) => (
            <div className="box" key={index}>
              <p>{data.Orderdate}</p>
              <span className='cms m-0'>{data.OrderCount}</span>
            </div>
        ))}
        </div>
      </Tab>
      <Tab eventKey="gdrx" title="GDRX">
      <div className="container">
        {gdrx.map((data, index) => (
            <div className="box" key={index}>
              <p>{data.Orderdate}</p>
              <span className='gdrx'>{data.OrderCount}</span>
            </div>
        ))}
        </div>
      </Tab>
    </Tabs>
  )
}

export default OrderTab
