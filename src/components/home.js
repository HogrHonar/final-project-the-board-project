import React, { useState } from 'react';
import Pic2 from "../components/images/2.jpg";



export default function Home() {

return(
  <div className="w-full bg-gray-900 " style={{height: "3000px"}}>

  <div className="flex w-full h-auto bg-emerald-900 ">
<div className="mt-2 mb-2 ml-auto mr-5 "><img src={Pic2} alt="" className=" rounded-full w-10 h-10 object-cover"></img></div>
  </div>
  <h1 className="text-white text-4xl pt-24 pl-16">Home</h1>

  <div className="flex" >

  <div className="w-72 h-14 bg-black rounded-lg shadow-md shadow-emerald-900 mr-38">
  <div className="w-36 h-14 bg-emerald-900 rounded-lg z-30 ">
   </div>
  </div>

  <div className="w-72 h-14 bg-black rounded-lg shadow-md shadow-emerald-900">
  <div className="w-36 h-14 bg-emerald-900 rounded-lg z-30 ">
   </div>
  </div>


  </div>


</div>





);}
