import React from 'react'

const Category = ({activeMenu, uniqueItem,filterItem}) => {
    console.log(activeMenu,"activeMenu");
    return (
        <div className='category-buttons'>
            {
                uniqueItem.map((item,index)=>{
                    return(
                        <button className={`category ${activeMenu === item ? "activeMenu" : ''}`} key={index} onClick={()=>filterItem(item)}>{item}</button>
                    )
                })
            }
        </div>
    )
}

export default Category;