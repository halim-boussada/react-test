import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

function Form() {
  const { t } = useTranslation()
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
  async function submit(){
     if(validation() === false){
        return
     }
    try {
    const { data } = await axios.post("https://dummyjson.com/auth/login" , {...user , expiresInMins : 1})
     console.log("data " , data)
     localStorage.setItem("userData" , JSON.stringify(data))
     navigate("/profile")
    } catch(err){
       seterrors([...errors , err.message])
    }
   
   }
  return (
    <form>
         <h1>{t("wecometext")}</h1>
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
