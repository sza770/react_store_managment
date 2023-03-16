import {useSelector} from 'react-redux'
import {useState, useEffect} from 'react'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Purchases() {
  const [date, setDate] = useState("")
  const [product, setProduct] = useState("all")
  const [customer, setCustomer] = useState("all")
  const data = useSelector(state => state)
  const [searchResult, setSearchResult] = useState([])
  
  useEffect(() => {setSearchResult(data.Purchases)}, [data]) 
  
  function goSearch () {
    let result1 = data.Purchases.filter(x => parseInt(product) == x.productID || product === "all" );
    let result2 = result1.filter(x => parseInt(customer) == x.customerID || customer === "all" );
    let result3 = result2.filter(x => date == x.date || date === "" );
    setSearchResult(result3)
      return console.log(searchResult)
    }

    function clearSearch () {
      setDate("") 
      setCustomer("all")
      setProduct("all")
    }
    
    searchResult.map((x) => {
      for (const prod of data.Products) {
        if (x.productID == prod.productID) {
          x.productName = prod.name;
        }
      }
    })
    
    searchResult.map((x) => {
      for (const cus of data.Customers) {
        if (x.customerID == cus.customerID) {
          x.customerName = cus.firstName + " " + cus.lastName;
          x.city = cus.city;
        }
      }
    })
    
    
  
    
    
    return (
    <div className="App m2">

      <h2>Purchases </h2>
      customer: &nbsp; 
      <select onChange={ x => setCustomer(x.target.value)} style={{padding: "5px 10px"}}>
        <option value={"all"} >ALL</option>
        {data.Customers.map((x,i)=> {return (
          <option key={x.customerID} value={x.customerID} >{`${x.firstName} ${x.lastName}`}</option>
        )})}
      </select> 


      &nbsp; product: &nbsp; 
      <select onChange={ x => setProduct(x.target.value)} style={{padding: "5px 10px"}}>
        <option value={"all"} >ALL</option>
        {data.Products.map((x,i)=> {return (
          <option key={x.productID} value={x.productID} >{x.name}</option>
        )})}
      </select> &nbsp; 
      date: &nbsp; 
      <input type={'date'} onChange={x => setDate(x.target.value)} style={{padding: "4px 10px"}}/> &nbsp; 
      <input type={'button'} value="SEARCH" onClick={goSearch} className='css-button-arrow--red'/> 
      &nbsp; <a onClick={clearSearch} href="" >clear</a> <br/>
      
      
        
          <TableContainer component={Paper} sx={{ mt:5, mx: "auto", width: 700 }}>
          <Table sx={{ minWidth: 650 , fontWeight: 'bold' }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{'th': {fontWeight: 'bold'} }}>
                <TableCell align="center">purchase ID</TableCell>
                <TableCell align="center">customer name</TableCell>
                <TableCell align="center">city</TableCell>
                <TableCell align="center">product</TableCell>
                <TableCell align="center">date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {searchResult.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.purchasID}
                  </TableCell>
                  <TableCell align="center">{row.customerName }</TableCell>
                  <TableCell align="center">{row.city }</TableCell>
                  <TableCell align="center">{row.productName}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      
    </div>
  );
}
export default Purchases;
