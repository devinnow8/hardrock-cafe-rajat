import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import { HiShoppingCart } from "react-icons/hi";
import Category from "../component/Category";
import menuData from "./MenuApi";
import MenuMain from "../component/MenuMain";

const Menu = () => {
    const [menuCnt, setMenuCnt] = useState(menuData);

    const uniqueItem = [
        "All",...new Set(
        menuCnt.map((item) => {
            return item.category;
        })
        ),
    ];
    console.log(uniqueItem, "uniqueItem");
    // setMenuCnt(uniqueItem);

    const filterItem = (category) => {
        console.log(category,"clicked")
        const updatedList = menuData.filter((item,index)=>{
            console.log(item.category === category)
            return item.category === category
        })
        setMenuCnt(<updatedList></updatedList>);
    };
    return (
        <div className="menu">
        <div className="menu-top">
            <a href="/" className="logo">
            <img src={Logo} alt="logo" width="160" />
            </a>
            <div className="text-uppercase size-2x menu-name">Foodnoop</div>
            <div className="cart-data">
            <div className="cart-icon">
                <HiShoppingCart className="size-2x" />
                <span>1</span>
            </div>
            </div>
        </div>
        <div className="text-center fw-bold menu-title">Our Menu</div>
        <Category uniqueItem={uniqueItem} filterItem={filterItem} />
        <MenuMain menuData={menuData} />
        </div>
    );
};

export default Menu;
