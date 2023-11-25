import React  from 'react';
import { FaSearch } from 'react-icons/fa';
import filter from "../images/filter.png";
import ques from "../images/ques.png";
import noti from "../images/noti.png";
import man from "../images/man.png";
import englis from "../images/english.png";




function Navbar() {
  return (
<div className="flex flex-row space-x-[275px]  max-sm:space-x-5 ml-12  pt-5 max-sm:ml-10">

      <div className="relative flex items-center">
        <div className="absolute left-3">
          <FaSearch className="text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search Patient"
          className="w-[480px] max-sm:w-64  pl-12  py-2  max-sm:py-1 rounded-lg border border-black focus:outline-none focus:border-gray-400"
        />
        <div className="absolute left-[440px]">
          <img src={filter} alt="" width={30} />
        </div>
      </div>
      <div className="flex flex-row gap-3  items-center pr-5 ">
        <div className='max-sm:hidden'>
          <img src={ques} alt="" width={30} />
        </div>
        <div className='max-sm:hidden'> 
          <img src={noti} alt="" width={30} />
        </div>
        <div className='max-sm:hidden'>
          <img src={man} alt="" width={30} />
        </div>
        <div className='max-sm:hidden'>
          Ajit B...
        </div>
        <div className='max-sm:hidden'>
          <img src={englis} alt="" width={30} />
        </div>
      
      </div>
 
    </div>
    

   
  );
}

export default Navbar;
