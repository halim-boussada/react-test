import { useEffect, useState } from "react"

function DataFetch() {

const [count , setCount] = useState(0)
const [count2 , setCount2] = useState(0)

 useEffect(()=> {
   console.log("loaded")
 } , [count])

 useEffect(()=> {
    console.log("fetching data 2 ")
 } , [count2])

  return (
    <div>
    <button onClick={()=>{setCount(count + 1)}}>increment</button>
    <button onClick={()=>{setCount2(count2 + 1)}}>increment2</button>
      <h1>Data Fetching :::::: {count}</h1>
      <h1>Data Fetching 2 ::::: {count2}</h1>
    </div>
  )
}

export default DataFetch