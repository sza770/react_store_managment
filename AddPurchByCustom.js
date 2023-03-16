import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'

function AddPurchByCustom(props) {
  
  const storeData = useSelector(state => state)
  const dispatch = useDispatch();
  const [revealNames, setRevealNames] = useState("hidden")
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = storeData.Products
  
  const changeSelection = x => {
    setSelectedProduct(products[x.target.value])
  }
   
  const reveal = x => {
    setRevealNames("visible")
  } 

  const sendNewPurchase = () => {
    if (selectedProduct !== null ) {
      dispatch({type : "ADDPURCHASE" , payload : {productID: selectedProduct.productID, customerID: props.customer}})
      setRevealNames("hidden")
      setSelectedProduct({})
    }
  }

  return ( <div >   
      
    <div style={{visibility : revealNames}}>
       <select onChange={changeSelection}>
      <option disabled selected>-select a product-</option>
        {products.map((y,i) => {return ( 
        <option value={i} key={i}>{y.name}</option>)})}          
      </select>
    </div>

    <input type={"button"} value={"ADD PRODUCT"} onClick={reveal} style={{display : revealNames == "hidden" ? "block" : "none"}}/>
    <input type={"button"} value={"SAVE"} onClick={sendNewPurchase} style={{visibility : revealNames}}/>
  
  </div>);
}

export default AddPurchByCustom;
