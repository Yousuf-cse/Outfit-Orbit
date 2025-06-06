import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import LoginUiImg from "../../assets/Images/loginUiImg.jpeg";

const LoginPage = () => {
  const [numberOrEmail, setNumberOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();



    console.log('Email or Number:', numberOrEmail);
    console.log('Password:', password);
  };

  return (
    <div className="relative min-h-screen">
      <h1 className='font-playfair absolute inset-x-0 top-12 left-60 text-center text-9xl cursor-default font-light z-0'>
          OUTFIT ORBIT
      </h1>
      {/* <h1 className='font-playfair absolute inset-x-0 top-44 right-36 text-center text-9xl font-light z-0'>
          ORBIT
      </h1> */}
    <div className="grid grid-cols-[1fr_1fr_70px] min-h-screen">
      <div className=" items-start justify-start ">
        <img 
        src={LoginUiImg}
        alt="LoginUiImg" 
        className='ml-16 mt-16 w-2/3 h-auto bg-pink-700'
        />
      </div>
      <div className="flex items-center justify-center">
  <form onSubmit={handleSubmit} className="w-full max-w-sm h-64 bg-[#d1e7ae] p-8 rounded-2xl shadow-md leading-none mt-16 mr-40">
    {/* <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2> */}
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOrEmail">
        Enter you Email or Number
      </label>
      <input
        type="text"
        id="numberOrEmail"
        value={numberOrEmail}
        onChange={(e) => setNumberOrEmail(e.target.value)}
        required
        className="appearance-none border-b border-black w-1/2 py-2 px-2 leading-tight focus:outline-none focus:ring-0 focus:border-[#6495ED] bg-[#d1e7ae]"
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="appearance-none border-b border-black w-1/2 py-2 px-2 leading-tight focus:outline-none focus:ring-0 focus:border-[#6495ED] bg-[#d1e7ae]"
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        type="submit"
        className="bg-[#6495ED] hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Login
      </button>
    </div>
    <p className="text-center text-gray-600 text-sm mt-7">
      Don't have an account?{' '}
      <Link to="/register" className="text-purple-600 hover:text-purple-500 font-semibold">
        Sign Up
      </Link>
    </p>
  </form>
</div>
<div className="bg-[#d1e7ae] w-full"></div>
</div>
</div>

  );
};

export default LoginPage;