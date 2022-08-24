import { useState, useEffect } from 'react';
import NavBar from './NavBar'
import './App.css';
import RenderProducts from './RenderProducts';
import FlatAppleChicago from './FlatAppleChicago';
import { Switch, Route } from 'react-router-dom';
import FlatAppleNewYork from './FlatAppleNewYork';
import Home from './Home';



function App() {

  const [data , SetData] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/stores')
    .then(infor => infor.json())
    .then(infor => SetData(infor))
  },[])

  const createNewStore = (obj)=>{
    SetData(data => [...data,obj])
  }

  return (
    <div className="App">
      <NavBar data={data}/>
      <Switch>
      <Route exact path='/Home' ><Home data={data} createNewStore={createNewStore}/></Route>
				<Route exact path='/FlatAppleChicago' ><FlatAppleChicago/></Route>
				<Route exact path='/FlatAppleNewYork'><FlatAppleNewYork /></Route>
      </Switch>
    
      
    </div>
  );
}

export default App;
