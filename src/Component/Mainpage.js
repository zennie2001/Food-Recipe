import React, { useState } from 'react'
import Mealcards from './Mealcards'
import axios from 'axios'

const Mainpage = () => {
    const [data, setData]= useState()  /*After calling APU, fetched data will be stored here  */
    const[search, setSearch]=useState("")  /*User enter the text to search will be stored or handled here */
    const[msg, setMsg] = useState("Search and Get Recipes")

    const handleInput =(event) =>{
        setSearch(event.target.value) /*event.target.value is used to retrieve the value of an input field  */
        /*jun value input gareko xa tyo value setSearch ma gayera basxa , using useState we can change the value of input everytime */
    }

    const myFun = () =>{
        if(search === ""){
            setMsg("Please Enter Any Dishname")
        }
        else{
            axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then((res)=>res.data)
            .then((finalRes)=>{
                setData(finalRes.meals)
                setMsg("Your Search Results")
            })
           
        }
       

    }
  return (
    <>
        <h1 className='head'>FOOD RECIPE APP</h1>
        <div className='container'>
            <div className='searchBar'>
                <input type='text' placeholder='Enter Dishname' onChange={handleInput}/>
                <button onClick={myFun}>Search</button>   {/* onCLick huda balla myFun vanne function call hunxa ani api fetch hunxa according to given name */}
            </div>
            <h3 className='msg'>{msg}</h3>
            <div>
                <Mealcards detail={data}/>
            </div>
        </div>

    </>
  )
}

export default Mainpage
