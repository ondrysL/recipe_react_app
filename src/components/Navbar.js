import './Navbar.css'
import { motion } from 'framer-motion'

const Navbar = () => {
    return <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{duration: .6}}>
        <nav className='nav__container'>
            <p className='nav__logo'>Cookies</p>
            <button className='nav__button'>Find more!</button>
        </nav>
    </motion.div>
}

export default Navbar