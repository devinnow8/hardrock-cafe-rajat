import React from 'react'
import Logo from "../assets/images/logo.svg";
import { HiShoppingCart } from "react-icons/hi";
const Header = ({handleCartClick,count}) => {
  return (
    <div>
        <div className="menu-top">
                <a href="/" className="logo">
                    <img src={Logo} alt="logo" width="160" />
                </a>
                <div className="text-uppercase size-2x menu-name">Sunrise</div>
                <div className="cart-data">
                <div className="cart-icon" onClick={()=>handleCartClick()}>
                    <HiShoppingCart className="size-2x" />
                    <span>{count}</span>
                </div>
                </div>
            </div>
    </div>
  )
}

export default Header