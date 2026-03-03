import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Fetching2(){
    const navigate = useNavigate()
    const [posts , setPosts] = useState([])
    const [error , seterror] = useState("")
    const [loading , setloading] = useState(false)

   const fetchdata = async () => {
     try {
      setloading(true)
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(data)
      setloading(false)
     } catch(err){
      seterror(err.message)
      setloading(false)
     }
   }

   useEffect(()=>{
    fetchdata()
   } , [])

   function seeDetails(id){
     navigate("/posts/" + id)
   }


    return <div>
         {loading && <h1>Loading ......</h1>}
         {error && <h1>Erroor : {error}</h1>}
         {posts.map((e)=>{
            return <div key={e.id}> <h3>{e.title}</h3>  <p>{e.body}</p> <button onClick={()=>{seeDetails(e.id)}} >
                  see details
                </button></div>
         })}
    </div>
}


export default Fetching2