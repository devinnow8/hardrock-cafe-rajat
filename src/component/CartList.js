import React from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Sad from "../assets/images/sad.png";

const CartList = ({ cart,removeItem,removeAll,countInc,countDec }) => {
    console.log(cart, "cartcart");
    return (
        <div className="cartList">
        <p className="customerInfo">
            <div className="customerNum">+91 9637410659</div>
            <div className="itemDetail">
                {cart.length} Items
                - ₹
                    {cart.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0)}
            </div>
        </p>
        <div className="cartListItem">
            {cart.length === 0 ? 
            <div className="mesg">
                <img src={Sad} alt="sad face" width="200px"/>
                <p>Please, select an Item</p>
            </div>:
            cart.map((item,index) => {
                return (
                    <div key={item.id} className="cart-item">
                    <div className="cart-img">
                        <img src={item.image} alt={item.name} width="180px" />
                    </div>
                    <div className="cart-desc">
                        <h4>{item.name}</h4>
                        <div className="priceCount">
                        <p className="mb-0">
                            <span>₹</span>
                            {item.price * item.quantity}
                        </p>
                        <div className="counter-btn">
                            <AiOutlinePlus className="counterIconPlus" onClick={()=>countInc(index)}/>
                            <span>{item.quantity}</span>
                            <AiOutlineMinus className="counterIconMinus" onClick={()=>countDec(index)}/>
                        </div>
                        </div>
                    </div>
                    <div className="cart-remove">
                        <MdDelete className="remove-icon" onClick={()=>removeItem(index)}/>
                    </div>
                    </div>
                );
                })}
                
        </div>
        <p className="totalamount">
            <span>Total</span>
            <p>
            ₹
            {cart
                .map((item) => item.price * item.quantity)
                .reduce((total, value) => total + value, 0)}
            </p>
        </p>
            <div className="clearItems">
                <button className="clear-cart" onClick={removeAll}>
                    <MdDelete className="clearicon"/><span>Clear Cart</span>
                </button>
            </div>
        </div>
    );
};

export default CartList;
