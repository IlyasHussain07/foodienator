
import { createStore } from 'redux'

let initialState = {
    basket: [],
    totalPrice: 0
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_CART":

            let myActions = action.item

            // state.basket.map((items) => {
            //     if (items._id === myActions._id) {
            //         items.count += 1
            //         myActions = []
            //     }
            //     return items
            // })
            return { ...state, basket: [...state.basket, myActions] }
        case "EMPTY_ITEMS":
            return { ...state, basket: [] }
        default:
            return state;
    }
}



let foodStore = createStore(reducer);

export default foodStore;










// import { createStore } from 'redux';

// let initState = {
//     basket: [],
//     user: null
// }

// function reducer(state = initState, action) {

//     switch (action.type) {
//         case "ADD_TO_CART":
//             return { ...state, basket: [...state.basket, action.item] }
//         case "REMOVE_PRODUCT":
//             let newBasket = [...state.basket]
//             let index = newBasket.findIndex(item => item.id === action.id);
//             if (index >= 0) {
//                 newBasket.splice(index, 1);
//             }
//             else {
//                 console.warn(`can't remove product id ${action.id} as it is not in baskets!`);
//             }
//             return { ...state, basket: newBasket }
//         case "SET_USER":
//             return { ...state, user: action.user }
//         case 'EMPTY_BASKET':
//             return { ...state, basket: [] }
//         default:
//             return state;
//     }
// }

// let amazonStore = createStore(reducer);

// export default amazonStore;


//<button className='prd4__btn' onClick= {()=> dispatch({type: "ADD_TO_CART" ,item: {id: id, image : image,title : title ,reviews : reviews,price : price,oldprice : oldprice }})} >Add to Cart</button>


//  let basket = useSelector(state => state.basket);
//  let checkoutProductDetails = basket.map(item => <CheckoutProduct id={item.id} image={item.image} title={item.title} reviews={item.reviews} price={item.price} oldPrice={item.oldPrice} />);