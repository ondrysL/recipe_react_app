import { useEffect, useState } from 'react'
import './Slider.css'
import { motion } from 'framer-motion'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Recipe from './Recipe';
import breakfest from '../img/pic2.svg'
import MealList from './MealList';
import CategoryList from './CategoryList';

const Slider = (props) => {
    const [currentRecipe, setCurrentRecipe] = useState()

    const handleName = (name) => {
        props.changeName(name)
    }

    if(props.load){
        return <div className='loading'>
            <h1>Loading...</h1>
        </div>
    }

    return <div className='eat__container'>
        <h1 className='eat__title'>What you want to cook?</h1>
        <div className='circle_2'>
            <form>
                <input className='eat__input' value={props.name} onChange={e => props.changeName(e.target.value)}></input>
            </form>
            <a href='#meal'>
                <SearchIcon className='search__icon' sx={{fontSize:50, color: '#2C5364'}}></SearchIcon>
            </a>
        </div>
        <motion.div className='slider'>
            <MealList mealArray={props.recipes} changeRecipe={currentRecipe=>setCurrentRecipe(currentRecipe)}></MealList>
        </motion.div>
        <div id='meal'>
            {currentRecipe!=null?<Recipe object={currentRecipe}></Recipe>:<Recipe object={props.recipes[0]}></Recipe>}
        </div>
    </div>
}

export default Slider