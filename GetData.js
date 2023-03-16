import axios from 'axios'
import useEffect from 'react'
import {useSelector, useDispatch} from 'react-redux'

function GetData() {
  const dispatch = useDispatch();
     console.log("hi") 
  // const getData = useEffect( async () => { 
  //   const resp = await axios.get("http://127.0.0.1:5000/")
  //   const data = resp.data;
  //   console.table(data)
  //   dispatch({type : "SETDATA" , payload : data})
  //   }, [])
      // getData()
}

// function SaveData() {
//   const data = useSelector(state => state)

//   const SendData = async () => {
//     const status = await axios.post("http://127.0.0.1:5000/", {})
//     console.log("status sent 8888888")
//   }
//   SendData()
// }
  
export default GetData;


