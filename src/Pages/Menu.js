import React, { useEffect, useState } from "react";

import Category from "../component/Category";
import menuData from "./MenuApi";
import MenuMain from "../component/MenuMain";
import CartList from "../component/CartList";
import Header from "../component/Header";

const Menu = () => {
    const [menuCnt, setMenuCnt] = useState(menuData);
    const [activeMenu,setActiveMenu] = useState("All");
    const [cart,setCart] = useState([]);
    const [showCart,setShowCart] = useState(false);
    const [showBtn,setShowBtn] = useState(false);
    // const [count,setCount] = useState(false);


    // useEffect(()=>{
    //     if(cart.length === 0){
    //         setShowCart(false);
    //         console.log(showCart,"showCart22")
    //     }
    // },[cart])

    const uniqueItem = [
        "All",...new Set(
            menuData.map((item) => {
            return item.category;
        })
        ),
    ];

    const filterItem = (category) => {
        const updatedList = menuData.filter((item,index)=>{
            if(category === 'All'){
                return item
            }else{
                return item.category === category
            }
        })
        setActiveMenu(category)
        setMenuCnt(updatedList);
    };
    
    const addToCart = (product) =>{
        console.log(product,"product");
        // setCart([...cart,{...item,quantity:1}])
        menuCnt.map((item,index)=>{
            console.log()
            return index === product.id;
        })
        setShowBtn(!showBtn);


        const index = cart.findIndex((item)=>item.id === product.id);
        if(index === -1){
            const updatedCart = cart.concat({...product,quantity:1});
            setCart(updatedCart)
        }
        else{
            cart[index].quantity += 1;
            const updatedCart = [...cart];
            setCart(updatedCart);
        }
    }

    const handleCartClick = () =>{
        setShowCart(!showCart)
    }

    const removeItem = (id) =>{
        console.log(id,"removeremove");
        const remove = cart.filter((item,index)=>{
            return index !== id
        })
        setCart(remove);  
    }

    const removeAll = () =>{
        console.log("clicked")
        setCart([]);
    }

    const countInc = (id) =>{
        const updatecart = cart.map((item,index)=>{
            console.log(index === id,"matchmatch")
            return index === id ? {...item,quantity:item.quantity+1}:item;
        })
        setCart(updatecart)
    }

    const countDec = (id) =>{
        const updatecart = cart.map((item,index)=>{
            console.log(index === id,"matchmatch")
            return index === id ? {...item,quantity:item.quantity>0?item.quantity-1:0}:item;
        })
        setCart(updatecart)
    }
    return (
        <div className="menu">
            <Header count={cart.length} handleCartClick={handleCartClick}/>
            {
                !showCart && (
                    <>
                        <div className="text-center fw-bold menu-title">Our Menu</div>
                        <Category activeMenu={activeMenu} uniqueItem={uniqueItem} filterItem={filterItem} />
                    </>
                )
            }
            {
                showCart ?<CartList cart={cart} removeItem={removeItem} removeAll={removeAll} countInc={countInc} countDec={countDec}/>:<MenuMain menuCnt={menuCnt} addToCart={addToCart} showBtn={showBtn}/>
            }
        </div>
    );
};

export default Menu;
