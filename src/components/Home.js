import React, { useState } from 'react'
import Styles from './App.module.css'
import { foods } from './foodInfo'
import { FoodProduct } from './FoodProduct'
import { BillSystem } from './BillSystem'
import { functionHandler } from './functionHandler'
import FilterIcon from '@material-ui/icons/FilterListSharp'
import CrossIcon from '@material-ui/icons/Close'


export default function Home() {

  const [isState, setIsState] = useState(foods)

  const [isCurrentState, setIsCurrentState] = useState(isState.filter((item) => item.category === "south"))

  const [isSouth, setIsSouth] = useState(false)
  const [isRice, setIsRice] = useState(false)
  const [isCurry, setIsCurry] = useState(false)
  const [isParatha, setIsParatha] = useState(false)
  const [isDessert, setIsDessert] = useState(false)


  const { handleHighToLowPrice, handleLowToHighPrice, handleHighToLowRating, handleLowToHighRating, handleSouth, handleRice, handleCurry, handleParatha, handleDessert } = functionHandler(setIsCurrentState, isState, setIsSouth, setIsRice, setIsCurry, setIsParatha, setIsDessert, setIsState)


  const [isFilterEnable, setIsFilterEnable] = useState(false);
  const [isCatergoryEnable, setIsCatergoryEnable] = useState(false);

  return (
    <>
      <div className={Styles._body}>
        <div className={Styles.filterSection}>
          <p>Filter</p>
          <ul>
            <p>Price</p>
            <li><input type="radio" name="filter" onClick={handleHighToLowPrice} /> High to Low</li>
            <li><input type="radio" name="filter" onClick={handleLowToHighPrice} /> Low to High</li>
            <p>Ratings</p>
            <li><input type="radio" name="filter" onClick={handleHighToLowRating} /> High to Low</li>
            <li><input type="radio" name="filter" onClick={handleLowToHighRating} /> Low to High</li>
          </ul>
        </div>
        <div className={Styles.productSection}>
          <div className={Styles.menu}>
            <ul>
              <li className={isSouth ? Styles.listOn : Styles.listOff}
                onClick={handleSouth}
              >South Indian</li>
              <li className={isRice ? Styles.listOff : Styles.listOn}
                onClick={handleRice}
              >Rice and Biryani</li>
              <li className={isCurry ? Styles.listOff : Styles.listOn}
                onClick={handleCurry}
              >Curry</li>
              <li className={isParatha ? Styles.listOff : Styles.listOn}
                onClick={handleParatha}
              >Paratha and Roti</li>
              <li className={isDessert ? Styles.listOff : Styles.listOn}
                onClick={handleDessert}
              >Desserts</li>
            </ul>
            <div className={Styles.category}>
              <div>
                <button onClick={() => setIsCatergoryEnable(true)}>Category</button>
              </div>
              <FilterIcon className={Styles.filter} onClick={() => setIsFilterEnable(true)} />
            </div>
          </div>
          <div className={Styles.foodProducts}>
            {
              isCurrentState.map((item) => {
                return <FoodProduct
                  key={item._id}
                  _id={item._id}
                  name={item.name}
                  image={item.image}
                  rating={item.rating}
                  price={item.price}
                  count={item.count}
                  category={item.category}
                />
              })
            }
          </div>
        </div>
        <div className={Styles.billSystemHome}>
          <BillSystem />
        </div>
      </div>

      {/* Pop ups */}
      <div className={isFilterEnable ? Styles.filterPopUp : Styles.filterPopUpNo}>
        <div className={Styles.cardFilter}>
          <p>Filters <CrossIcon className={Styles.closeIcon} onClick={() => setIsFilterEnable(false)} /></p>
          <ul onClick={() => setIsFilterEnable(false)}>
            <p>Price</p>
            <li><input type="radio" name="filter" onClick={handleHighToLowPrice} />High to Low</li>
            <li><input type="radio" name="filter" onClick={handleLowToHighPrice} />Low to High</li>
            <p>Rating</p>
            <li><input type="radio" name="filter" onClick={handleHighToLowRating} />High to Low</li>
            <li><input type="radio" name="filter" onClick={handleLowToHighRating} />Low to High</li>
          </ul>
        </div>
      </div>


      <div className={isCatergoryEnable ? Styles.categoryPopUp : Styles.categoryPopUpNo}>
        <div className={Styles.cardCatergory}>
          <p>Catergory  <CrossIcon className={Styles.closeIcon} onClick={() => setIsCatergoryEnable(false)} /></p>
          <ul onClick={() => setIsCatergoryEnable(false)}>
            <li onClick={handleSouth}>South Indian</li>
            <li onClick={handleRice}>Rice and Biryani</li>
            <li onClick={handleCurry}>Curry</li>
            <li onClick={handleParatha}>Paratha and Roti</li>
            <li onClick={handleDessert}>Desserts</li>
          </ul>
        </div>
      </div>




    </>
  )
}









