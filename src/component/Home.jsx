import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigator = useNavigate();
    const viewCard = () =>{
       navigator('/card');
    }
  return (
    <>

    <div className='font-semibold'>Home Page</div>
    <div className='flex justify-center'>
    <button onClick={viewCard} className="px-6 py-2 min-w-[120px] text-center text-violet-600 border border-violet-600 rounded hover:border-violet-950 hover:text-violet-950 active:border-indigo-500 active:text-indigo-500">View Card</button> 
    </div>
    </>   
  )
}

export default Home