import React from 'react'

export const CategoryItem = ({category}) => {
  return (
        //  Category Item component is being rendered
         <div className='category-container'>
         {/* Image url from the parameter is put into the style attribute of the div */}
         <div className='background-image' style={{backgroundImage: `url(${category.imageUrl})`}}/>
         <div
         className='category-body-container'
         >
             <h2>
               {category.title}
             </h2>
             <p>Shop Now</p>
         </div>
       </div>
 
  )
}
