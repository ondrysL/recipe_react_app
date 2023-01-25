import './Recipe.css'

const Recipe = (props) => {
    const {strArea, strCategory, strInstructions, strMeal, strMealThumb, strTags} = props.object
    return <div className="meal__container">
        <h1 className="meal__title">{strMeal}</h1>
        <div className='meal__box'>
            <p className="meal__category">{strCategory}</p>
            <p className="meal__area">{strArea}</p>
        </div>
        <img className="meal__img" src={strMealThumb} alt="" />
        <p className="meal__instructions">{strInstructions}</p>
        <p className="meal__tags">{strTags}</p>
        <div className='circle_4'></div>
        <div className='circle_5'></div>
    </div>
}

export default Recipe