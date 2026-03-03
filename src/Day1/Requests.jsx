import axios from "axios"
import { useState , useEffect} from "react"
import ProductCard from "./ProductCard"
import './Requests.css'
import Popup from "./Popup"

function Requests(){
  const [products , setProducts] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const getDataFromApi = async () => {
    var { data } = await axios.get("https://api.escuelajs.co/api/v1/products")
    console.log(data)
    setProducts(data)
  } 
  useEffect(()=>{
    getDataFromApi()
  },[])
    return <div>
        <div className="cards">
            {products.map((e)=> <ProductCard product={e} setIsOpen={setIsOpen} setProduct={setSelectedProduct} />)}
            <Popup isOpen={isOpen} setIsOpen={setIsOpen} product={selectedProduct} />
        </div>
    </div>
}

export default Requests