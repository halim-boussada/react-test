import { useEffect, useState } from "react";

function useDebounce(query , delay){
  const [debounceQuery, setDebounceQuery] = useState("");

  useEffect(()=>{
     const timer = setTimeout(()=>{
        setDebounceQuery(query)
     } , delay) 

    return () => clearTimeout(timer)
  } , [query , debounceQuery])
    return debounceQuery
}

export default useDebounce