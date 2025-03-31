import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const Mealinfo = () => {
  //the useParams hook is a part of the React Router library. It is used to extract and access the parameters from the URL in a dynamic route.
    const {mealid} = useParams();  // Extract the 'mealid' parameter from the URL
    //console.log(mealid)

   const[info, setInfo] = useState()

    const getInfo = () =>{
      axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
      .then((res)=>res.data)
      .then((finalRes)=>{
      setInfo(finalRes.meals[0])
      })
      
    }

    if(info != ""){
        getInfo()
    }


  return (
    <div>
            {
            !info ? "" : 
                <div className='mealInfo'>
                <img src={info.strMealThumb} />
                <div className='info'>
                  <h1>Recipe's Detail</h1>
                  <button>{info.strMeal}</button>
                  <h3>Instructions</h3>
                  <p>{info.strInstructions}</p>
                </div>
              </div>
          }
    </div>
    
  )
}

export default Mealinfo

