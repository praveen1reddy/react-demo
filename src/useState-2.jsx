import React, {useState} from 'react';

const App = () => {

  const initData = {
    movie:"Bahubali",
    actress:"Anushka",
  }  
  const [data,setData]=useState(initData);

  const changeMovie = () => {
    setData({
      ...data,
      movie:"Bahubali 2",
    })
  }
  const changeActress = () => {
    setData({
      ...data,
      actress:"Thamannah",
    })
  }
  return(
    <div>
        <h1>Movie: {data.movie}</h1>
        <button className='changeMovie' onClick={changeMovie}>Change Movie</button>
        <h1>Actress: {data.actress}</h1>
        <button className='changeActress' onClick={changeActress}>Change Actress</button>
    </div>
  );
};

export default App;
