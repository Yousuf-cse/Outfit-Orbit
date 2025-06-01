import React from 'react'
import {Link} from 'react-router-dom'
import SaleBanner from "../../assets/Images/SaleBanner.png";

function NewYearSaleBanner() {
  const handleClick = () => {
    // You can define the URL you want to redirect to
    window.location.href = ''; // Replace with your desired URL
  };
  return (
    <div className='max-w-6xl mx-auto text-center p-4'>
      <h1 className="text-2xl font-bold mb-6 cursor-default">Coming Soon!!</h1>   
    <div className='mx-auto flex justify-center'>
      {/* <Link onClick={handleClick} className='cursor-pointer'> */} 
      {/* uncomment the link tag when the sale is live */}
      <img src={SaleBanner} alt="Sale Banner" className='max-w-full h-auto'/>
      {/* </Link> */}
    </div>
    </div>
  )
}

export default NewYearSaleBanner