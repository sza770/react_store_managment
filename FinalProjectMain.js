import { Routes, Link, Route, useNavigate } from "react-router-dom";
import MainMenu from "./MainMenu"
import Products from "./Products"
import Customers from "./Customers"
import Purchases from "./Purchases"
import Clients from "./Clients"
import EditProduct from "./EditProduct"
import EditCustomer from "./EditCustomer";
import GetData  from './GetData';



function FinalProjectMain() {
  const navigate = useNavigate();

  GetData();


  return (
    <div className="App"  >
        <header >
            <div style={{textDecoration: "none"}}>
              <Link className="Link" to="/">home</Link>
              <Link className="Link" to="/Products">Products</Link>
              <Link className="Link" to="/Customers">Customers</Link>
              <Link className="Link" to="/Purchases">Purchases</Link>          
              <Link className="Link" to="/Clients">Clients</Link>          
            </div>
          <h1 >store managment</h1> 
          
          </header>

          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Products/:id" element={<EditProduct />} />
            <Route path="/Customers" element={<Customers />} />
            <Route path="/Customers/:id" element={<EditCustomer />} />
            <Route path="/Purchases" element={<Purchases />} />
            <Route path="/Clients" element={<Clients />} />
            
            
          </Routes>
        <br/>
        

        <footer style={{backgroundColor : " lightGreen"}}><p>
        <button onClick={() => navigate(-1)} className="css-button-arrow--blue">BACK</button> &nbsp;
        {/* <button onClick={SaveData()} className="css-button-arrow--red">SAVE CHANGES</button>  */}
           {/* footer */}
        </p>
        <br/> </footer>
      
    </div>
  );
}

export default FinalProjectMain;
