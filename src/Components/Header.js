import React,{useContext} from 'react'
import img from './Images/book_img.png'
import { ThemeContext } from '../Context/ThemeContext'

const Header = () => {
  const{DarkTheme,lightTheme}=useContext(ThemeContext);
  return (
    <div>
        <div id='head-container' style={{display:"flex",justifyContent:"space-between", alignItems:"center" ,backgroundColor:"black",top:"0",left:"0",position:"fixed",width:"100%"}}>
            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",paddingRight:"100px" ,columnGap:"50px"}}>
              <img src={img} alt="Logo" style={{width:"50px",height:"50px"}} />
              <h3 style={{color:"white"}}>LIBIL</h3>
            </div>
            <div id='nav-bar' style={{display:"flex",justifyContent:"space-around",alignItems:"center",paddingRight:"20px" ,columnGap:"30px"}}>
                <button style={{width:"80px",height:"30px"}}>About</button>
                <button style={{width:"100px",height:"30px"}}>Contact Us</button>
                <button style={{width:"80px",height:"30px"}} onClick={()=>DarkTheme()}>Theme</button>
            </div>
        </div>
    </div>
  )
}

export default Header