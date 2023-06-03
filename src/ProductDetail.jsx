import React from 'react';
import gdrxOrder from './order.json';
import cmsOrder from './CmsOrder.json';

const ProductDetail = () => {

    let currMonth = new Date().getMonth()
    let currYear = new Date().getFullYear()
    let daysInMonth = new Date(currYear, currMonth + 1, 0).getDate();

    const culender = []
    for (let index = 0; index < daysInMonth; index++) {
        culender.push(`${currYear}-0${currMonth + 1}-${index + 1}`)
    }
    const gdrxOr = []
    const cmsOr = []

    for (let i = 0; i < culender.length; i++) {
        let test = culender[i]
        for (let e = 0; e < gdrxOrder.length; e++) {
            if (test == gdrxOrder[e].Orderdate) {
                gdrxOr.push(gdrxOrder[e]);
                break
            } else {
                let arr = { 'Orderdate': culender[i], 'OrderCount': 0 }
                gdrxOr.push(arr)
            }
        }
    }

    for (let i = 0; i < culender.length; i++) {
        let test = culender[i]
        for (let e = 0; e < cmsOrder.length; e++) {
            if (test == cmsOrder[e].Orderdate) {
                cmsOr.push(cmsOrder[e]);
                break
            } else {
                let arr = { 'Orderdate': culender[i], 'OrderCount': 0 }
                cmsOr.push(arr)
            }
        }
    }
    // console.log(cmsOr);
    function uniqByKeepLast(data, key) {
        return [...new Map(data.map(x => [key(x), x])).values()]
    }
    const abc = uniqByKeepLast(gdrxOr, it => it.Orderdate)
    const resultCMS = uniqByKeepLast(cmsOr, it => it.Orderdate)
    console.log(abc);
    const totalOrderGDrx = abc.reduce((total, value) => {
        return total + +value.OrderCount
    }, 0)
    const totalOrderCMS = abc.reduce((total, value) => {
        return total + +value.OrderCount
    }, 0)
    console.log(totalOrderGDrx);
    return (
        <>
            <div className="header">
                <h1>order</h1>
                <div className="order">
                    <span>GDRX: {totalOrderGDrx}</span>
                    <span>CMS: {totalOrderCMS}</span>
                </div>
            </div>
            <div className="total" style={{fontSize:"18px"}}>total Order : {totalOrderCMS+totalOrderGDrx}</div>
            <div className="container">
                {
                    abc.map((data, index) => (
                        <div className="box" key={index}>
                            <p>{data.Orderdate}</p>
                            <span className='gdrx'>{data.OrderCount}</span>
                            <span className='cms'>{resultCMS[index].OrderCount}</span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ProductDetail;