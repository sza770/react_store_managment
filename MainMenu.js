import Button from '@mui/material/Button';


function MainMenu() {


  return (
    <div className="App">

        <h2>MainMenu</h2>
          <Button variant="contained" href="/Products"  sx={{ m: 1 }}>Products</Button> <br/> 
          <Button variant="contained" href="/Customers" sx={{ m: 1 }} color='error'>Customers</Button> <br/>
          <Button variant="contained" href="/Purchases" sx={{ m: 1 }} color='warning' >Purchases</Button> <br/>
          <Button variant="contained" href="/Clients" sx={{ m: 1 }} color= 'primary' >Clients</Button> <br/>


    </div>
  );
}

export default MainMenu;
