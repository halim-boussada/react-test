import GrandChild from "./grandChild.JSX"
import GrandChild2 from "./grandchild2"

function Child1(){

    
    return <div >

       <h1>this is the child component </h1>
       <GrandChild />
       <GrandChild2 />
    </div>
}

export default Child1