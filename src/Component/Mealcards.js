import React from 'react'
import { NavLink } from 'react-router-dom'

const Mealcards = ({detail}) => {
    //console.log(detail)
  return (
    <div className='meals'>


       {/* map() function is commonly used to render lists of data dynamically.
       syntax:
             array.map((element, index) => {
                // Return JSX or other content for each element
                })
        */}

        {!detail ? "" : detail.map((currItem, i )=>{
            return(
                <div className='mealImg' key={i}>
                    <img src={currItem.strMealThumb}/>
                    <p>{currItem.strMeal}</p>
                    <NavLink to={`/${currItem.idMeal}`}><button>Recipe</button></NavLink>
                    
                </div>
            )
        })
           
        }
    </div>


  )
}

export default Mealcards