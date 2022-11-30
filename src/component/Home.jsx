import React from 'react'
import light from '../assets/lights.png';
import spinner from '../assets/spin 2.png';

const Home=()=> {
  return (
    <div className='Home'>
        <div>
    <img className='light' style={{width:"750px"}} src={light}/>
    </div>
    <div>
    <img className='spinner loader' style={{width:"300px"}} src={spinner}/>
    </div>
    </div>
  );
}

export default Home;