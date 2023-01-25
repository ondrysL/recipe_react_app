import { useEffect, useState } from 'react'
import './CategoryList.css'
import MealList from './MealList'

const CategoryList = () => {
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
            .then(data => setMealList(data['meals'].slice(0,5)))
    }, [category])

    if(load){
        return <h1>loading..</h1>
    }

    return <div className='category__container'>
        <h1 className='category__title'>Find by category</h1>
        <ul className='category__list'>
            {
                categories.map((category, index) => {
                    const {strCategory, strCategoryThumb} = category
                    return <li onClick={() => setCategory(strCategory)} key={index} className='category__one'>{strCategory}</li>
                })
            }
        </ul>
        {mealList!==null?<MealList mealArray={mealList}></MealList>:<h1>Loading..</h1>}
    </div>
}

export default CategoryList