import { motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Main from './components/Main';
import CategoryList from './components/CategoryList';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';

function App() {  
  const [currentRecipe, setCurrentRecipe] = useState()
  const [recipes, setRecipes] = useState([])
  const [name, setName] = useState("spaghetti")
  const [load, setLoad] = useState(true)

  const urlByName = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`

  useEffect(()=>{
    console.log(window.innerWidth);
  })

  useEffect(() => {
      fetch(urlByName)
      .then (res => res.json())
      .then(data => {
          setRecipes(data['meals'].slice(0,3))
          setLoad(false)
      })
  }, [name])

  return <div className='background'>
      <Navbar/>
      <Main/>
      <section id='eat'>
        <Slider load={load} recipes={recipes} changeName={name=>setName(name)} name={name}/>
      </section>
      <CategoryList changeCurrentName={(test)=>{
        setName(test)
        console.log(name)
      }}/>
      <Footer></Footer>
    </div>
}

export default App;
