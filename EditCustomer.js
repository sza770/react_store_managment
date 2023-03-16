import {Link , useParams, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'
import '../App.css'

function EditCustomer() {

    const params = useParams();
    const dispatch = useDispatch();
    const Data = useSelector(state => state)
    const navigate = useNavigate();
    
    let customerDetail = Data.Customers.filter(x => x.customerID == params.id)[0];
    if (!customerDetail) {
      customerDetail = {customerID: "", firstName: "", lastName: "" , city: ""}
    }
    
    const [updatedCustomer, setUpdatedCustomer] = useState({customerID : params.id , firstName : customerDetail.firstName , lastName : customerDetail.lastName , city : customerDetail.city});

  const updateToDataBase = () => {
    dispatch({type : "UPDATECUSTOMER" , payload : updatedCustomer})
  }

  const deleteProduct = () => {
    dispatch({type : "DELETECUSTOMER" , payload : params.id})
    setUpdatedCustomer({customerID: "", firstName: "", lastName: "" , city: ""}) 
  }


  return (
    <div>
        <h2>Edit Customer Page</h2>
        <strong> <u>Customer ID:</u> {params.id} </strong> <br/> 
          <ul >
              <img src={`https://robohash.org/storeManagment${params.id}?size=200x200`} />
            <li>
              first name: <input type="text" value={updatedCustomer.firstName} onChange={e => setUpdatedCustomer({...updatedCustomer, firstName: e.target.value})} />
            </li>
            <li>
              last name: <input type="text" value={updatedCustomer.lastName} onChange={e => setUpdatedCustomer({...updatedCustomer, lastName: e.target.value})} />
            </li>
            <li>
              city:  <input type="text" value={updatedCustomer.city} onChange={e => setUpdatedCustomer({...updatedCustomer, city: e.target.value})}/>
            </li>
          </ul>
          <br/>
          <input type= "button" value="UPDATE" onClick={updateToDataBase}/> 
          <button onClick={deleteProduct}>DELETE</button> <br/>
          <br/>
          <br/>

        <h3>customer purchases</h3>
        <ul>
          {Data.Purchases.map((y , o) => { 
            if (y.customerID == params.id) {
              return (
                <li key={o}>
                  <Link to={"/Products/" + y.productID}>
                    {Data.Products.map((a,b) => {if(a.productID == y.productID) {return a.name}} )}
                  </Link> at: &nbsp;
                {y.date}</li>
              )
            }
          })}
        </ul>


    </div>
  )
}

export default EditCustomer