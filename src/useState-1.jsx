import React, {useState} from 'react';

const App = () => {

  const [count,setCount] = useState(0);

  const increment = () =>{
    setCount((prevCount)=>prevCount+1);
  };
  const decrement = () =>{
    setCount((prevCount)=>prevCount-1);
  };
  const reset = () =>{
    setCount((prevCount)=>prevCount=0);
  }
  
  return(
    <div>
        <button className="dec" onClick={decrement}>-</button>
        <span className='num'>{count}</span>
        <button className='inc' onClick={increment}>+</button>
        <button className='reset' onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
