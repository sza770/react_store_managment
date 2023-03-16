import {useState} from 'react'
import GetData from './GetData';


function StoreReducer(state = {Products : [], Customers : [], Purchases : [], Clients : []},  action) { 

  switch (action.type) {

    case "SETDATA":
      let data = action.payload;
      return data

    case "UPDATEPRODUCT":
      let id = action.payload.productID;
      let arr = state.Products;
      
      let index = arr.findIndex(x => x.productID == id)
      arr[index] = action.payload;
      
      return { ...state, Products: arr }
        
    case "DELETEPRODUCT":
      let id2 = action.payload;
      let pro2 = state.Products;
      let pur2 = state.Purchases;
      
      let proIndex2 = pro2.findIndex(x => x.productID == id2)
      
      let purCleared = pur2.filter(x => x.productID !== parseInt(id2))

      if (proIndex2 >= 0) {
        pro2.splice(proIndex2, 1)
      }
      return { ...state, Products: pro2, Purchases: purCleared }
          
    case "UPDATECUSTOMER":
      let id3 = action.payload.customerID;
      let arr3 = state.Customers;
      
      let index3 = arr3.findIndex(x => x.customerID == id3)
      arr3[index3] = action.payload;
      
      return { ...state, Customers: arr3 }
        
    case "DELETECUSTOMER":
      let id4 = action.payload;
      let pro4 = state.Customers;
      let pur4 = state.Purchases;
      
      let cusIndex = pro4.findIndex(x => x.customerID == id4)
      
      let purCleared4 = pur4.filter(x => x.customerID !== parseInt(id4))

      if (cusIndex >= 0) {
        pro4.splice(cusIndex, 1)
      }
      return { ...state, Customers: pro4, Purchases: purCleared4 }
          
    case "ADDPURCHASE":
      let today = new Date();
      let month = today.getMonth() +1
      let day = today.getDate().toString();
      let currentDate = `${today.getFullYear()}-${(month.toString()).padStart(2, '0') }-${day.padStart(2, '0')}`
      let lastID = 0
      const nextID = () => {
        for (let p of state.Purchases) {
          if (parseInt(p.purchasID) > lastID) {
            lastID = p.purchasID}
        }
        return lastID
      }
      // lastID = state.Purchases[2].purchasID
      let fullPurchaseDetails = {purchasID: parseInt(nextID()) + 1, ...action.payload, date: currentDate}
      return { ...state, Purchases: [...state.Purchases, fullPurchaseDetails] }

          
          
    default:
      return state;
  }

}

export default StoreReducer;
