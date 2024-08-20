import React, { useContext } from 'react'
import img from './Images/Content_img.jpeg'
import { ThemeContext } from '../Context/ThemeContext'

const Content = () => {
  const{color}=useContext(ThemeContext)
  return (
    <div style={{backgroundColor:color}}>
        <div style={{height:"100%", display:"flex",justifyContent:"space-around",alignItems:"center",   marginTop:"100px"}}>
            <img style={{height:"300px", width:"400px",border:"2px solid black",borderRadius:"10px"}}src={img} alt="E-book"/>
            <p style={{width:"800px",color:"red",fontSize:"20px",fontWeight:"bold",marginRight:"200px"}}>“The man who does not read good books is no better than the man who can't.” <br/>E-books offer the convenience of carrying an entire library in your pocket, making it easy to read anytime, anywhere. They also often include interactive features like search functions and adjustable text sizes for a customizable reading experience.</p>
        </div>
        <div style={{color:"green",textAlign:"center",marginTop:"100px"}}> 
            <h2>Contact Us</h2>
            <p>Address:</p>
            <p>Builders Engineering College
            Nathakadaiyur.</p>
            <p>Contact:</p>
            <p>6265789013.</p>
        </div>
    </div>
  )
}

export default Content