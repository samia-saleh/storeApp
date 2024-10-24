"use client"
import { useState } from "react";
import Image from "next/image"
import logo from"../images/store icon.png"
import { FaUserCircle } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
const Navbar = () => {
  const[toggle,setToggle]=useState(false)
  return (
    <nav className='navbar'>
      <div className="menu">
        <a onClick={() => setToggle(prev =>!prev)}><TiThMenu /></a>
      </div>
      <ul style={{clipPath:toggle&& "polygon(0 0,100% 0,100% 100%,0 100%)"|| ""}}>
        <li ><div  className="logo inline"><Image src={logo} width={60} height={60} alt="logo" className="inline"></Image></div></li>
        <li className="active">
            <a href="/"><label>الرئيسية</label></a>
        </li>
        <li>
            <a href="/products"><label>المنتجات</label></a>
        </li>
        <li>
           <a href="/offres"> <label>العروض</label></a>
        </li>
        <li>
           <a href="/register"> <label> اضافة محل </label></a>
        </li>
      </ul>
      <div className="userIcon">
        <a  href="/login"><FaUserCircle /></a>
      </div>
      
    </nav>
  )
}

export default Navbar
