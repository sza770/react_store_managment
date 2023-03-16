import axios from "axios";
import { useState, useEffect} from "react";
import '../App.css'

function Clients() {

  const [clients, setClients] = useState([])
  const [newClient, setNewClient] = useState({})
  const [editMode, setEditMode] = useState(true);

  const getData = useEffect( async () => { 
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users")
    const data = resp.data;
    setClients(data)
    }, [])

  const saveToData = async ()=> {
    const resp = await axios.post("https://jsonplaceholder.typicode.com/users", newClient)
    const status = resp.data
    console.log(status)
    
  }

  const eraseData = () => {
    setClients([{name: "", id: "", phone: "", email: "", address: {city: "", street: ""} }])
  }

  return (
    <div className="App">

      <h2>Clients </h2>


      add new client: <br/>
      <div className={editMode ? "visible" : "hidden"}>
        name: <input type="text" onChange={e => setNewClient({...newClient, "name" : e.target.value})} />
        email: <input type="email" onChange={e => setNewClient({...newClient, "email" : e.target.value})} />
        phone: <input type="text" onChange={e => setNewClient({...newClient, "phone" : e.target.value})} />
        city: <input type="text" onChange={e => setNewClient({...newClient, "Address" : {...newClient.Address, "city" : e.target.value}})} />
        country: <input type="text" onChange={e => setNewClient({...newClient,  "Address" : {...newClient.Address, "country" : e.target.value}})} /> 
        <br/>
        <input type="button" value="send" onClick={saveToData}/>
      </div>
      <br/>
      {/* <input type="button" value='get data' onClick = {getData} /> <br/> */}
      <input type="button" value='erase Data' onClick = {eraseData} /> <br/>

      <table border = "1"  style={{"margin" : "auto"}}>
      {clients.map((x, i) => {return (
        <tr key = {i}>
          <td>
            {x.id}
          </td>
          <td>
            {x.name}
          </td>
          <td>
            {x.phone}
          </td>
          <td>
            {x.email}
          </td>
          <td>
            {x.address.city}, {x.address.street}
          </td>
        </tr>
      )})}

      </table>
        
    </div>
  );
}

export default Clients;
