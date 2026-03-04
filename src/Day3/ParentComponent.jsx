import { useState } from "react"
import Child1 from "./Child1"
import { UserContext  } from "../userContext"

function ParentComponent(){
    const [user , setUser] = useState({
        age : 88 ,
        username : "halim"
    })
   
    const test = "hjjsajasj"

    return <div>
        <UserContext.Provider value={{ user , setUser , test }}>
            <Child1 />
        </UserContext.Provider>
    </div>

}

export default ParentComponent