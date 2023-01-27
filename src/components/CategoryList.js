import { useEffect, useState } from 'react'
import './CategoryList.css'
import MealList from './MealList'

const CategoryList = (props) => {
    const [categories, setCategories] = useState([])
    const [mealList, setMealList] = useState(null)
    const [load, setLoading] = useState(true)
    const [category, setCategory] = useState("Beef")

    const url = `https://www.themealdb.com/api/json/v1/1/categories.php`
    const urlCategory = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`

    useEffect(()=>{
        fetch(url)
            .then((res => res.json()))
            .then(data => {
                setCategories(data['categories'])
                setLoading(false)
            })
    }, [])

    useEffect(()=> {
        fetch(urlCategory)
            .then(res => res.json())
            .then(data => setMealList(data['meals'].slice(0,3)))
    }, [category])

    const nameHandler = (name) => {
        props.changeCurrentName(name.strMeal)
    }

    if(load){
        return <h1>loading..</h1>
    }

    return <div className='category__container'>
        <div className="circle_7"></div>
        <h1 className='category__title'>Find by category</h1>
        <ul className='category__list'>
            {
                categories.map((category, index) => {
                    const {strCategory, strCategoryThumb} = category
                    return <li onClick={() => setCategory(strCategory)} key={index} className='category__one'>{strCategory}</li>
                })
            }
        </ul>
        {mealList!==null?<MealList mealArray={mealList} changeRecipe={(name) => nameHandler(name)}></MealList>:<h1>Loading..</h1>}
    </div>
}

export default CategoryList