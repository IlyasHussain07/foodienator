import React, { useState } from 'react';
import Styles from './App.module.css';
import Image1 from '../images/Foodinator.png';
import { useSelector, useDispatch } from 'react-redux';
import { Payments } from './Payments';

export function BillSystem() {

    let basket = useSelector(item => item.basket);
    let dispatch = useDispatch()

    let newValue = 0;
    const [isTotalValue, setIsTotalValue] = useState(newValue)
    basket.map((item) => {
        return newValue += item.price
    })

    // Not good 
    setTimeout(() => {
        setIsTotalValue(newValue)
    }, 0)


    // Not resloved
    // const changeTotal = () => {
    //     setIsTotalValue(newValue)
    // }

    const orderHandler = () => {
        alert("Your order is succesfull");
        dispatch({ type: "EMPTY_ITEMS" })
    }

    return (
        <div className={Styles.billingSection}>
            <div className={Styles.billHeader}>
                <img src={Image1} alt="title_image" />
                <h2>Foodienator</h2>
                <span>Q-25, Oberoi Mall, Goregaon East</span>
            </div>
            <div className={Styles.billProducts}>
                <div className={Styles.header}>
                    <p>PARTCULARS</p>
                    <span>QTY</span>
                    <p>AMIT</p>
                </div>
                {
                    basket.length === 0 ?
                        "no items are ordered"
                        : basket.map((item) => {
                            return <Payments
                                key={item._id}
                                name={item.name}
                                count={item.count}
                                price={item.price}
                            // changeTotal={changeTotal}
                            />
                        })
                }
            </div>
            <div className={Styles.billTotal} >
                <p>Grand Total</p>
                <p>₹ {isTotalValue}.00</p>
            </div>
            <div className={Styles.orderbtn}>
                <button onClick={orderHandler}>Order</button>
            </div>
            <p style={{ textAlign: "center" }}>Thanks you for your interest. Visit us soon!</p>
        </div>
    )
}



