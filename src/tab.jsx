import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const OrderTab = ({ props }) => {
  const [cms, gdrx] = props;
  const reversedArrayGDRX = [...gdrx].reverse();
  const reversedArrayCMS = [...cms].reverse();

 const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const label_cms = cms.map((item) => item.Orderdate);
  const data_cms = cms.map((item) => item.OrderCount);

  const label_gdrx = gdrx.map((item) => item.Orderdate);
  const data_gdrx = gdrx.map((item) => item.OrderCount);

  const dataCMS = {
    labels: label_cms,
    datasets: [
      {
        label: "Number of Orders in CMS",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "red",
        data: data_cms,
      },
    ],
  };

  const dataGDRX = {
    labels: label_gdrx,
    datasets: [
      {
        label: "Number of Orders in GDRX",
        backgroundColor: "lightblue",
        borderColor: "blue",
        data: data_gdrx,
      },
    ],
  };

  const dataBoth = {
    labels: label_cms,
    datasets: [
      {
        label: "Number of Orders in CMS",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "red",
        data: data_cms,
      },
      {
        label: "Number of Orders in GDRX",
        backgroundColor: "lightblue",
        borderColor: "blue",
        data: data_gdrx,
      },
    ],
  };

  return (
    <Tabs
      defaultActiveKey="total"
      transition={false}
      id="noanim-tab-example"
      className="mb-3 mt-3"
    >
      <Tab eventKey="total" title="TOTAL">
        <div className="container">
          <div className="box-outer">
  {reversedArrayCMS.map((cmsData, index) => {
              const gdrxData = reversedArrayGDRX.find(
                (gdrxItem) => gdrxItem.Orderdate === cmsData.Orderdate
              );
              return (
                <div className="box" key={index}>
                  <p>{formatDate(cmsData.Orderdate)}</p>
                  <span className="cms">{cmsData.OrderCount}</span>
                  <span className="gdrx">
                    {gdrxData ? gdrxData.OrderCount : "-"}
                  </span>
                </div>
              );
            })}

            {/*  {reversedArrayCMS.map((data, index) => (
              <div className="box" key={index}>
                <p>{data.Orderdate}</p>
                <span className="cms">{data.OrderCount}</span>
                <span className="gdrx">
                  {reversedArrayGDRX[index]?.OrderCount}
                </span>
              </div>
            ))} */}
          </div>
          <diV className="graph-outer">
            <Line data={dataBoth} />
            <Line data={dataCMS} />
            <Line data={dataGDRX} />
          </diV>
        </div>
      </Tab>

      <Tab eventKey="cms" title="CMS">
        <div className="container">
          {reversedArrayCMS.map((data, index) => (
            <div className="box box_individual" key={index}>
              <p>{data.Orderdate}</p>
              <span className="cms m-0">{data.OrderCount}</span>
            </div>
          ))}
        </div>
      </Tab>

      <Tab eventKey="cms_graph" title="CMS_Graph">
        <div className="graph_container">
          <Line data={dataCMS} />
        </div>
      </Tab>

      <Tab eventKey="gdrx" title="GDRX">
        <div className="container">
          {reversedArrayGDRX.map((data, index) => (
            <div className="box box_individual" key={index}>
              <p>{data.Orderdate}</p>
              <span className="gdrx">{data.OrderCount}</span>
            </div>
          ))}
        </div>
      </Tab>

      <Tab eventKey="gdrx_graph" title="GDRX_Graph">
        <div className="graph_container">
          <Line data={dataGDRX} />
        </div>
      </Tab>
    </Tabs>
  );
};

export default OrderTab;
