import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {useState} from 'react'

function ProdPurchComp(props) {
  
  const storeData = useSelector(state => state)

  const customer = storeData.Customers.filter(x => x.customerID == props.purchase.customerID)
  

  return (
    
  <li>
    <Link to={"/Customers/" + customer[0].customerID}>
      {customer[0].firstName + " " + customer[0].lastName}</Link> at: &nbsp;
      {props.purchase.date}
  </li>
      
  );
}

export default ProdPurchComp;
