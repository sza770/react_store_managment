import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import ProdPurchComp from "./ProdPurchComp"
import AddPurchToProd from "./AddPurchToProd"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Products() {
  
  const storeData = useSelector(state => state)

  const totalPrice = storeData.Purchases.reduce(getPrice, 0)

  function getPrice (total, proID) {
    const product = storeData.Products.filter(x => x.productID == proID.productID);
    if (product) {
      const productPrice = product[0].price
      return total + productPrice
    }
  } 
  

  return (
    <div className="App m2" >

      <div>
        <h2>Products</h2>
        <p> total sales:  {totalPrice} </p>
        
        <div className="center ma-bo">
          <TableContainer component={Paper} sx={{ mx: "auto", width: 700 }}>
            <Table sx={{ minWidth: 650 , fontWeight: 'bold' }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{'th': {fontWeight: 'bold'} }}>
                    <TableCell align="center">product name</TableCell>
                    <TableCell align="center">quantity</TableCell>
                    <TableCell align="center">Customers</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>



                {storeData.Products.map((x) =>  (
                  <TableRow
                    key={x. productID}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      <Link to={"/Products/" + x.productID}>
                        {x.name}
                      </Link>
                    </TableCell>
                    
                    <TableCell align="center" component="th" scope="row">
                        {x.quantity}
                    </TableCell>
                    
                    <TableCell align="center">
                      <ul>
                        {storeData.Purchases.map((y , o) => { 
                          if (y.productID === x.productID) {
                            return (
                              <li key={o}>
                                <Link to={"/Customer/" + y.customerID}>
                                  {storeData.Customers.map((a,b) => {if(a.customerID == y.customerID) {return a.firstName + " " + a.lastName}} )}
                                </Link> at: &nbsp;
                              {y.date}</li>
                            )
                          }
                        })}
                      </ul>
                    </TableCell>
                    <TableCell  style={{width: "80px"}}>
                      <AddPurchToProd product={x.productID} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>





{/* 

        <table>
          <tbody>
            <tr>
              <th>product name</th><th>quantity</th><th>Customers</th>
            </tr>
              {storeData.Products.map((x , i ) => { return (
                 <tr key= {i}>
                    <td> 
                      <Link to={"/Products/" + x.productID}> {x.name}</Link>
                    </td>
                    <td>
                    {x.quantity}
                    </td>
                  <td>
                    <ul>
                        {storeData.Purchases.map((y , o) => { 
                          if (y.productID === x.productID) {
                            return (
                              <ProdPurchComp purchase={y} key = {o} />
                            )
                          }
                        })}

                        <AddPurchToProd product={x.productID} />                  
                      
                    </ul>
                  </td>
               </tr>
            )})}
          </tbody>
        </table> */}
          <br/>

        </div>
        <Link to="/">home</Link>

      </div>
      
    </div>
  );
}

export default Products;
