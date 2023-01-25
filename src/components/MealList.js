import './MealList.css'
import { motion } from 'framer-motion'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'


const MealList = (props) => {
    const mealArray = props.mealArray
    return <div className='meal__list'>
        {
            mealArray.map((meal, index) => {
                const {strMeal, strMealThumb} = meal
                return <div key={index} className='meal__list__one'>
                    <img src={strMealThumb} alt="" className='meal__list__img'/>
                    <div className='meal__list__down__part'>
                        <h1 className='meal__list__title'>{strMeal}</h1>
                        <motion.a onClick={()=>props.changeRecipe(meal)} href='#meal' animate={{y:[0, 10, 0]}} transition={{ease:"linear" ,duration:2, repeat:Infinity}}>
                            <KeyboardArrowDownIcon sx={{fontSize:70, color:'white'}}></KeyboardArrowDownIcon>
                        </motion.a>
                    </div>
                </div>
            })
        }
    </div>
}

export default MealList