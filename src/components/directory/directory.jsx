import React from 'react'
import './directoy.style.scss'
import { CategoryItem } from '../category-item/category-item'

const Directory = ({categories}) => {
  return (
    <div className='categories-container'>
      {

        categories.map((category)=>{
        return(
        /* Generate Elements*/
          <CategoryItem key={category.id} category={category}
          />
        )
        
        })
        
      }
    </div>
  )
}

export default Directory