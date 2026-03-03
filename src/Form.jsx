import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
   const [errors , seterrors] = useState([])
   function validation(){
    const listOfErrors = []
      if(user.username.trim() == ""){
         listOfErrors.push("username could not be empty")
      }
     if(user.password.length < 8 ){
         listOfErrors.push("password should contain mopre than 8 characters")
      }
      seterrors(listOfErrors)
      return listOfErrors.length > 0 ? false : true
   }
   function submit(){
     if(validation() === false){
        return
     }
     console.log("submited")
     navigate("/dashboard/req")
   }
  return (
    <form>
      <input
        type="text"
        name="username"
        id=""
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="password"
        name="password"
        id=""
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button type="submit" onClick={(e)=> {
        e.preventDefault()
        submit()
      }}>login</button>
      <ul>
         {
        errors.map((e) => {
           return  <li style={{color : "red"}}>{e}</li>
        })
      }
      </ul>
    </form>
  );
}

export default Form;
