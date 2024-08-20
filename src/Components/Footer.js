import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div style={{backgroundColor:"black",bottom:"0",left:"0",width:"100%",position:"fixed", color:"white",textAlign:"center"}}>
            <h5>LIBIL E-BOOKS</h5>
            <p>Read Anywhere At Anytime</p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{marginLeft:"20px"}}>
                    <p>Copyright@2024|Libil Books</p>
                </div>
                <div style={{display:"flex",justifyContent:"space-around",columnGap:"20px" ,marginRight:"20px"}}>
                    <CiFacebook />
                    <FaInstagram />
                    <FaSquareXTwitter />
                    <FaWhatsapp />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer