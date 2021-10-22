import React from 'react';
import Styles from './App.module.css';
import StarIcon from '@material-ui/icons/Star';
import HalfStarIcon from '@material-ui/icons/StarHalf';

import { useDispatch } from 'react-redux';

export function FoodProduct(props) {

    let { _id, name, image, rating, price, count, category } = props;

    let dispatch = useDispatch();


    const dispatchHandler = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                _id: _id,
                name: name,
                image: image,
                rating: rating,
                price: price,
                count: count,
                category: category
            }
        })
    }




    return <div className={Styles.product}>
        <div className={Styles.image_container}>
            <img src={image} alt="image1" />
        </div>
        <div className={Styles.productDetails}>
            <p>{name}</p>
            <div className={Styles.rating}>
                <StarIcon className={Styles.StarIcons} />
                <StarIcon className={Styles.StarIcons} />
                <StarIcon className={Styles.StarIcons} />
                <StarIcon className={Styles.StarIcons} />
                <HalfStarIcon className={Styles.StarIcons} />
                <span>{rating}</span>
            </div>
            <p>₹ {price}</p>
            <button onClick={() => {
                dispatchHandler()
            }}>Buy</button>
        </div>
    </div>;
}
