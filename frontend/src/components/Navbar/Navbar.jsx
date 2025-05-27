import React, { useContext, useState } from 'react'
import './Navbar.css' 
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { FiHome } from "react-icons/fi";
import { IoRestaurantOutline } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs"
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("Home");

    const {getTotalCartAmount} = useContext(StoreContext);

    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className='navbar'>
            <Link to='/'><div className="logo">CoupanApp</div></Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={()=> setMenu("Home")} className={menu==="Home"?"active":""}><FiHome/>Home</Link>
                <a href='#explore-menu' onClick={()=> setMenu("Restaurants")} className={menu==="Restaurants"?"active":""}><IoRestaurantOutline/>Restaurants</a>
                <a href='#app-download' onClick={()=> setMenu("Store")} className={menu==="Store"?"active":""}><FaStore/>Store</a>        
                <a href='#footer' onClick={()=> setMenu("About us")} className={menu==="About us"?"active":""}><BsFillPersonFill/>About us</a>
            </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}>
            
          </div>
          
        </div>
        <div className='heart-symbol' onClick={() => setIsLiked(!isLiked)}>
          {isLiked ? <FaHeart className="filled" /> : <CiHeart />}
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
        </div>
    )
    }
export default Navbar