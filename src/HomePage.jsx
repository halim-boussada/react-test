import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home(){
  const navigate = useNavigate()
  const { lang } = useParams()
  const { t , i18n } = useTranslation();

    useEffect(()=>{
        if(lang){
          i18n.changeLanguage(lang)
        }
    }, [])




    return <div>

    <select name="" id="" onChange={(e)=>{
        navigate("/home/" + e.target.value)
        i18n.changeLanguage(lang)
    }}>
       <option value="en"> English</option>
       <option value="el"> Greek</option>
       <option value="tr"> Turkish</option>
    </select>


         <h1>{t("wecometext")}</h1>
         <p>{t("description")}</p>
         <button>{t("buttontext")}</button>
    </div>
}

export default Home