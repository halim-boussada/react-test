import { useContext } from "react"
import { UserContext } from "../userContext"

function GrandChild(){
const { user } = useContext(UserContext)
    
    return <div style={{background : "pink"}}>

       <h1>this is the GrandChild component </h1>
       <h1> this is the username {user.username}</h1>

    </div>
}

export default GrandChild