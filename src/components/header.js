import React, { useState } from 'react'
import Styles from './App.module.css'
import Image1 from '../images/Foodinator.png'
import { useSelector } from 'react-redux'
import { BillSystem } from './BillSystem'

export default function Header() {

    let basket = useSelector(item => item.basket);
    const [isBillEnable, setIsBillEnable] = useState(false);

    return (
        <>
            <div className={Styles._header}>
                <div className={Styles.title}>
                    <img src={Image1} alt="title" />
                    <h2>Foodienator</h2>
                </div>
                <button onClick={() => setIsBillEnable(true)}>
                    Cart
                    <span>{basket.length}</span>
                </button>
            </div>

            <div className={isBillEnable ? Styles.cartPopUp : Styles.cartPopUpNo} onClick={() => setIsBillEnable(false)}>
                <div className={Styles.billcard}>
                    <BillSystem />
                </div>
            </div>
        </>
    )
}
