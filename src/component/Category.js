import React from 'react'

const Category = ({uniqueItem,filterItem}) => {
    console.log(uniqueItem,"menuData")
    return (
        <div className='category-buttons'>
            {
                uniqueItem.map((item,index)=>{
                    return(
                        <button className='category' key={index} onClick={()=>filterItem(item)}>{item}</button>
                    )
                })
            }
            {/* <button className='category'>All</button>
            <button className='category'>Lunch</button>
            <button className='category'>Dinner</button> */}
        </div>
    )
}

export default Category;