function Popup({isOpen , setIsOpen , product}){
    return  <div>
        {isOpen ? (
        <div className="popup">
          <div className="popup-content">
            <button onClick={()=>{setIsOpen(false)}}>close</button>
            {product.images.map((e) => {
              return <img src={e} alt={product.title} />;
            })}
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ) : null}
    </div>
}

export default Popup