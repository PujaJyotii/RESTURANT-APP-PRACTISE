import { Fragment } from "react"
import classes from './Header.module.css'

import MealImage from '../../assests/Meals.jpg'
import HeaderCartButton from "./HeaderCartButton"

const Header=(props) => 
{
return (
    <Fragment   >
        <header className={classes.header}>
         <h1>Hey! Want Some Food</h1>
         <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
         <img src={MealImage} alt="A table full of delicious food"/>
        </div>
    </Fragment>
)
}

export default Header