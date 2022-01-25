import './App.css';

import Header from './components/Header';

import {useState, useMemo} from 'react';

function App() {

  const [number, setNumber]=useState(0);
  const data=useMemo(()=>{
    return {name:'Mehmet', number}
  },[number]);


  return (
    <div className="App">
      <Header number={number< 5 ? 0 : number}  data={data}/>
      <hr></hr>
     <h1>{number}</h1>
     <button onClick={()=>setNumber(number+1)}>Click</button>

     
    </div>
  );
}

export default App;
