import { motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import cook from './img/cook.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { green, red } from '@mui/material/colors';

function App() {  
  return <div>
    <section className='idk'>
      <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{duration: .6}}>
        <Navbar></Navbar>
      </motion.div>
      <section className='main__container'>
        <motion.div className='main__header__container' animate={{x:0}} initial={{x:-450}} transition={{duration: .6}}>
          <h1 className='main__header'>Best way to <span className='main__span'>cook!</span></h1>
        </motion.div>
        <motion.img animate={{opacity:1}} initial={{opacity:0}} transition={{duration: 2}} src={cook} alt="" className='main__img'/>
        <motion.div className='main__find' animate={{x:0}} initial={{x:-450}} transition={{duration: .6}}>
          <a href='#eat'>
            <p className='main__arrow'>Find new recipe</p>
          </a>
          <ArrowForwardIcon sx={{fontSize:40, color: '#2C5364'}}></ArrowForwardIcon>
        </motion.div>
        <div className='circle'></div>
      </section>
      <section id='eat'>
        <Slider></Slider>
      </section>
    </section>
  </div>
}

export default App;
