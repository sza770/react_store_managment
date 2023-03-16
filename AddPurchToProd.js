import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'

function AddPurchToProd(props) {
  
  const storeData = useSelector(state => state)
  const dispatch = useDispatch();
  const [revealNames, setRevealNames] = useState("hidden")
  const [selectedName, setSelectedName] = useState(null)
  
  const Names = storeData.Customers
  
  const changeSelection = x => {
    setSelectedName(Names[x.target.value])
  }
  
  const reveal = x => {
    setRevealNames("visible")
  } 
  
  const sendNewPurchase = () => {
    if (selectedName !== null ) {
      dispatch({type : "ADDPURCHASE" , payload : {productID: props.product, customerID: selectedName.customerID}})
      setRevealNames("hidden")
      // setSelectedName({})
    }
  }

  return ( <div>   
      
    <div style={{visibility : revealNames}}>
      <select onChange={changeSelection} >
         <option disabled selected>-select a customer-</option>
        {Names.map((y,i) => {return ( 
        <option value={i} key={i}>{y.firstName + " " + y.lastName}</option>)})}          
      </select>
    </div>
    <input type={"button"} value={"ADD CUSTOMER"} onClick={reveal} style={{display : revealNames == "hidden" ? "block" : "none"}}/>
    <input type={"button"} value={"SAVE"} onClick={sendNewPurchase} style={{visibility : revealNames}}/>
  
  </div>);
}

export default AddPurchToProd;
