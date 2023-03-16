import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'
import '../App.css'
import ProdPurchComp from "./ProdPurchComp"
import AddPurchToProd from "./AddPurchToProd"


function EditProduct() {
  
  const params = useParams();
  const dispatch = useDispatch();
  const productsData = useSelector(state => state.Products)
  const Purchases = useSelector(state => state.Purchases)
 
  
  let productDetail = productsData.filter(x => x.productID == params.id)[0];
  if (!productDetail) {
    productDetail = {productID: "", name: "", price: "", quantity: "", img: ""}
  }
  
  const [updatedProduct, setUpdatedProduct] = useState({productID : params.id , name : productDetail.name , price : productDetail.price , quantity : productDetail.quantity ,img : productDetail.img});
  
  const updateToDataBase = () => {
    dispatch({type : "UPDATEPRODUCT" , payload : updatedProduct})

  }

  const deleteProduct = () => {
    dispatch({type : "DELETEPRODUCT" , payload : params.id})
    productDetail = {productID : params.id , name : 0 , price : 0 , quantity : 0 ,img : 0} 
  }

  return (
    <div className='App'>

        <h2>Edit Product Page</h2>
        <strong> <u>product ID:</u> {params.id} </strong> <br/>

          <ul  >
            <img src={updatedProduct.img} alt="tv" height = "200px"/>
            <li>
              name: <input type="text" value={updatedProduct.name} onChange={e => setUpdatedProduct({...updatedProduct, name: e.target.value})} />
            </li>
            <li>
              price: <input type="number" value={updatedProduct.price}  onChange={e => setUpdatedProduct({...updatedProduct, price: e.target.value})}/>
            </li>
            <li>
              quantity:  <input type="number" value={updatedProduct.quantity} onChange={e => setUpdatedProduct({...updatedProduct, quantity: e.target.value})}/>
            </li> 
             <ul className='greyBG'>
              costomers: 
                    {Purchases.map((y , o) => { 
                      if (y.productID == params.id) {
                        return (
                          <ProdPurchComp purchase={y} key = {o} />
                          )
                        }
                      })}

                    <AddPurchToProd product={params.id} />                  
                  
                </ul>
          </ul> 


          <br/>
        <input type= "button" value="UPDATE" onClick={updateToDataBase}/> 
        <button onClick={deleteProduct}>DELETE</button> <br/>

    </div>
  );
}

export default EditProduct;
