import React from 'react'
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";

const MenuMain = ({menuData}) => {
    return (
        <div>
            <div className='menu-data row'>
            {
                menuData.map((item)=>{
                    const {id,image,name,price,desc} = item;
                    return(
                        <div className='row menu-data-inner' key={id}>
                            <div className='col-5'>
                                <div className="image">
                                    <img src={image} alt={name} className='img-fluid'/>
                                </div>
                            </div>
                            <div className='col-7'>
                                <div className="cnt">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h3 className='cnt-title'>{name}</h3>
                                        <span className='cnt-price'>₹{price}</span>
                                    </div>
                                    <div className="underline"></div>
                                    <p className='desc'>{desc}</p>
                                    <div className="menu-button">
                                        <button className='add-btn'>Add <AiOutlinePlus className='addIcon'/></button>
                                            <button className='counter-btn'>
                                            <AiOutlinePlus className='counterIcon'/>
                                            <span>1</span>
                                            <AiOutlineMinus className='counterIcon'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default MenuMain