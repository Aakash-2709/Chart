import React, { useEffect, useState } from "react";
import OrderTab from "./tab";

const Test = () => {
  const [gdrxOrder, setGdrx] = useState([]);
  const [CmsOreder, setCMS] = useState([]);

  const getGDRXApiData = async () => {
    const response = await fetch(
      //"https://www.goodrxmedicine.com/customreport/index"
    ).then((response) => response.json());

    // update the state
    setGdrx(response);
    // console.log(response.reverse());
  };
  const getCMSApiData = async () => {
    const response = await fetch(
      //"https://www.cheapmedicineshop.com/customreport/index"
    ).then((response) => response.json());

    // update the state
    setCMS(response);
  };
  // getApiData()
  useEffect(() => {
    getCMSApiData();
    getGDRXApiData();
  }, []);

  let totalGdrxOr = gdrxOrder.reduce((total, value) => {
    return total + +value.OrderCount;
  }, 0);
  let totalCmsOr = CmsOreder.reduce((total, value) => {
    return total + +value.OrderCount;
  }, 0);
  const total = totalCmsOr + totalGdrxOr;

  return (
    <>
      <div className="header">
        {/*<h5>To check accurate data click on individual website's tab</h5>*/}
        <div className="order">
          <p>Last 30 days Orders</p>
          <span>CMS: {totalCmsOr}</span>
          <span style={{ margin: "0" }}>GDRX: {totalGdrxOr}</span>
        </div>
      </div>
      <div className="total" style={{ fontSize: "18px" }}>
        <div className="color-div">
          <div className="main-color">
            CMS <span className="cms"></span>
            <div className="main-color">
              GDRX <span className="gdrx"></span>
            </div>
          </div>
        </div>
        <p style={{ margin: "0" }}>
          <strong>Total Numbers : {total}</strong>
        </p>
      </div>
      <OrderTab props={[CmsOreder, gdrxOrder]} />
      {/* <div className="container">
        {
          CmsOreder.map((data, index) => (
            <div className="box" key={index}>
              <p>{data.Orderdate}</p>
              <span className='gdrx'>{data.OrderCount}</span>
              <span className='cms'>{gdrxOrder[index]?.OrderCount}</span>
            </div>
          ))
        }
      </div> */}
    </>
  );
};

export default Test;
