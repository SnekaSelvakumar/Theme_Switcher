import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import { ThemeContext } from '../Context/ThemeContext'

const Home = () => {
  const[color,setColor]=useState("white")
   function DarkTheme(){
      setColor("Black")
   }
   function lightTheme(){
    setColor("white")
  }
  

  return (
    <div>
      <ThemeContext.Provider value={{color,DarkTheme,lightTheme}}>
        <Header/>
        <Content/>
        <Footer/>
      </ThemeContext.Provider>
    </div>
  )
}

export default Home