import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import '../App.css'
import AddPurchByCustom from "./AddPurchByCustom"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Customers() {

  
  const storeData = useSelector(state => state)
  

  return (
    <div className="App m2">

     <h2 > Customers </h2>

     <div className="center ma-bo">
        <TableContainer component={Paper} sx={{ mx: "auto", width: 700 }}>
          <Table sx={{ minWidth: 650 , fontWeight: 'bold' }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{'th': {fontWeight: 'bold'} }}>
                  <TableCell align="center">first and last name</TableCell>
                  <TableCell align="center">products bought</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>



              {storeData.Customers.map((x) =>  (
                <TableRow
                  key={x.customerID}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    <Link to={"/Customers/" + x.customerID}>
                      {x.firstName + " " + x.lastName}
                    </Link>
                  </TableCell>
                  
                  <TableCell align="center">
                    <ul>
                      {storeData.Purchases.map((y , o) => { 
                        if (y.customerID === x.customerID) {
                          return (
                            <li key={o}>
                              <Link to={"/Products/" + y.productID}>
                                {storeData.Products.map((a,b) => {if(a.productID == y.productID) {return a.name}} )}
                              </Link> at: &nbsp; {y.date} </li>
                          )
                        }
                      })}
                    </ul>
                  </TableCell>
                  <TableCell  style={{width: "80px"}}>
                    <AddPurchByCustom customer={x.customerID} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
    </div>
  );
}



export default Customers;
