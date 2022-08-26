import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar'
import StoresPage from './StoresPage';
import StoreCard from './StoreCard';
import Home from './Home';



function App() {

  const [storeData , setStoreData] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/stores')
    .then(resp => resp.json())
    .then(data => setStoreData(data))
  },[])

  const createNewStore = (obj) => {
    setStoreData( storeData => [...storeData, obj] )
  }

 
  return (
    <div className="App">
      
      <NavBar />

      <Switch>

        <Route exact path="/" >
          <Home />
        </Route>

        <Route exact path="/stores" >
          <StoresPage storeData={storeData} createNewStore={createNewStore} />
        </Route>

        <Route exact path="/stores/:id">
          <StoreCard storeData={storeData} />
        </Route>
        
{/* 
        <Route exact path="/FlatAppleChicago">
          <FlatAppleChicago />
        </Route>
        
        <Route exact path="/FlatAppleNewYork">
          <FlatAppleNewYork />
        </Route> */}

      </Switch>
    
    </div>
  );
}

export default App;
