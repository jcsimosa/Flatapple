import NavBar from './NavBar'
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [data , SetData] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/products')
    .then(infor => infor.json())
    .then(infor => SetData(infor))
  },[])

  
  return (
    <div className="App">
      <NavBar data={data}/>
    </div>
  );
}

export default App;
