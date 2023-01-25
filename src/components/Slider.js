import { useEffect, useState } from 'react'
import './Slider.css'
import { motion } from 'framer-motion'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Recipe from './Recipe';

const Slider = () => {
    const [recipes, setRecipes] = useState([])
    const [load, setLoad] = useState(true)
    const [query, setQuery] = useState("spaghetti")
    const [currentRecipe, setCurrentRecipe] = useState()

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`

    useEffect(() => {
        fetch(url)
            .then (res => res.json())
            .then(data => {
                setRecipes(data['meals'].slice(0,3))
                setLoad(false)
            })
    }, [query])

    if(load){
        return <div className='loading'>
            <h1>Loading...</h1>
        </div>
    }

    return <div className='eat__container'>
        <h1 className='eat__title'>What you want to cook?</h1>
        <div className='circle_2'>
            <form>
                <input className='eat__input' value={query} onChange={e => setQuery(e.target.value)}></input>
            </form>
          <SearchIcon className='search__icon' sx={{fontSize:50, color: '#2C5364'}}></SearchIcon>
        </div>
        <motion.div className='slider'>
            {recipes.map((recipe, index) => {
                const {idMeal, strMeal, strMealThumb} = recipe
                return <div key={index} className='recipe__container'>
                    <img src={strMealThumb} alt="" className='recipe__img' />
                    <div className='recipe__down'>
                        <h1 className='recipe__title'>{strMeal}</h1>
                        <motion.a href='#meal' animate={{y:[0, 10, 0]}} transition={{ease:"linear" ,duration:2, repeat:Infinity}}>
                            <KeyboardArrowDownIcon onClick={()=>{setCurrentRecipe(recipe)}} sx={{fontSize:70, color:'white'}}></KeyboardArrowDownIcon>
                        </motion.a>
                    </div>
                </div>
            })}
        </motion.div>
        <div id='meal'>
            {currentRecipe!=null?<Recipe object={currentRecipe}></Recipe>:<Recipe object={recipes[0]}></Recipe>}
        </div>
    </div>
}

export default Slider