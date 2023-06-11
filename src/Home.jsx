import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const [counter, setCounter] = useState(0);
 
    //increase counter
    const increase = () => {
      setCounter( counter + 1000000000000000000);
    };
   
    //decrease counter
    const decrease = () => {
      if(counter > 0){
        setCounter(counter - 1000000000000000000);
      }
    };
   
    //reset counter 
    const reset = () =>{
      setCounter(counter => counter = 0)
    }
   
  
  return (
 <div className=' flex flex-col con items-center '>
        <h1 className=' text-[3rem] font-bold '>Counter is <span className=' text-blue-400'>{counter}</span></h1>
        <div className=' flex  cursor-pointer'>
      <div onClick={increase} className="">
        <button className='bg-blue-700 p-2 m-2 text-white rounded-md hover:bg-blue-900 transition' >
        increase
        </button>
      </div>
      <div onClick={decrease} className="bg-green-400 p-2 m-2 text-white rounded-md hover:bg-green-500 transition">
        <button >
        decrease
        </button>
      </div>
      <div onClick={reset} className="bg-red-600 p-2 m-2 text-white rounded-md hover:bg-red-500 transition">
        <button >
         Reset
        </button>
      </div>
        </div>
        <Link to="/validation">Validation</Link>
      </div> 
  )
}

export default Home