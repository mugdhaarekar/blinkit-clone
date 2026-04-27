import { useSelector } from 'react-redux';
import logo from '../utils/images/logo.svg';
import React, { useState } from 'react';
import CartSidebar from './CartSidebar';

const Header = () => {
const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const totalCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className='flex justify-between items-center px-6 py-4 bg-white shadow-sm sticky top-0 z-50'>
      <img src={logo} className="h-10" alt="logo" />
      <div className='border border-green-500 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50' onClick={()=>setOpen(!open)}>Cart: {totalCount}</div>
      <CartSidebar isOpen={open} setIsOpen={setOpen}/>
    </div> 
  );
};

export default Header;