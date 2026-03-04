import { useContext } from "react"
import { UserContext } from "../userContext"

function GrandChild2(){
const {  setUser } = useContext(UserContext)
    
    return <div style={{background : "lightblue"}}>

       <button onClick={()=>{
        setUser({ 
            username : "lalalalalala" ,
            age : 33
            
        })
       }}>this is fake button that change the name of the user</button>

    </div>
}

export default GrandChild2