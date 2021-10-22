import React from 'react';
import Styles from './App.module.css';

export function Payments(props) {

    let { name, count, price } = props;

    return (
        <div className={Styles.productsBillBody} >
            <p>{name}</p>
            <span>{count}</span>
            <p>₹ {price}.00</p>
        </div>
    )
}
