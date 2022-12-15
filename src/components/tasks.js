import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Pic1 from "../components/images/1.jpg";
import Pic2 from "../components/images/2.jpg";

export default function Tasks() {
 const [show, setShow] = useState(false);
 const [val1, setVal1] = useState("");
 const [val2, setVal2] = useState("");
 const [val3, setVal3] = useState("");

 const change1= event =>{
  setVal1(event.target.value);
}
const change2= event =>{
 setVal2(event.target.value);
}
const change3= event =>{
 setVal3(event.target.value);
}

 const submit= ()=>{
   console.log(val1);
   console.log(val2);
   console.log(val3);
 }

  return(

    <div className="w-full h-full bg-gray-900">

  <div className="flex w-full h-auto bg-emerald-900 ">
  <button type="button" name="button" className="flex  ml-auto bg-black mt-3 mb-3 py-2 px-6 rounded-full shadow-md shadow-white">
<p className="text-lg text-white mr-3">create</p>
<i className="fa-solid fa-plus text-lg text-white "></i>
  </button>
  <div className="mt-3 ml-5 mr-5 "><img src={Pic2} alt="" className=" rounded-full w-10 h-10 object-cover"></img></div>
  </div>
  <h1 className="text-white text-4xl pt-24 pl-16">Tasks</h1>

  <div className="flex justify-around mt-10 pb-20">

    <div className="w-96 h-auto bg-emerald-900 rounded-lg">
    <div className="flex mt-5">
    <div className="w-4 h-4 rounded-full bg-black mt-2.5 ml-10 mr-5 shadow-lg shadow-white">
    </div>
    <p className="text-white text-2xl ">To-Do</p>
    <button type="button" name="button" className="flex  ml-auto    " onClick={() => setShow(!show)}>
    <i className="fa-solid fa-plus text-lg text-white  mr-7 "></i>
    </button>
  </div>
  <div className="flex justify-center mt-5"><div className="w-80 h-0.5 center bg-white mb-5"></div></div>

  <div className="flex  flex-col items-center ">


  { show && <div className="w-80 h-auto bg-black rounded-lg mb-10">
    <p className="text-white text-xl mt-5 mb-5 ml-5">Task Name</p>
    <div className="flex justify-center">
    <input onChange={change1} vlaue={val1} type="text" id="large-input" className="block w-72 p-2 text-gray-900   rounded-full outline-none bg-gray-50 sm:text-md  dark:placeholder-gray-400 dark:text-white "></input>
    </div>

 <p className="text-white text-xl mt-5 mb-5 ml-5">Date</p>
 <div className="flex justify-center">
<input onChange={change2} vlaue={val2} type="text" id="large-input" className="block w-72 p-2 text-gray-900   rounded-full outline-none bg-gray-50 sm:text-md  dark:placeholder-gray-400 dark:text-white "></input>
</div>

<p className="text-white text-xl mt-5 mb-5 ml-5">Description</p>
<div className="flex justify-center">
<input  onChange={change3} vlaue={val3} type="text" id="large-input" className="block w-72 p-5 text-gray-900   rounded-full outline-none bg-gray-50 sm:text-md  dark:placeholder-gray-400 dark:text-white " ></input>
</div>
<div className="flex justify-center">
  <button onClick={submit} type="button" name="button" className="flex  bg-emerald-900  mt-8 mb-8 py-2 px-6 rounded-full shadow-md shadow-white">
  <p className="text-lg  text-white ">create</p>
</button>
</div>

    </div>}

  <div className="w-80 h-auto bg-black rounded-lg mb-10">
  <p className="text-white text-xl mt-5 ml-3">Task Name</p>
  <p className="text-gray-500 text-md mt-1 ml-3">Dec.3.2022</p>
  <p className="text-white text-sm mt-4 ml-3">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a ...</p>
  <div className="flex justify-center mt-5 mb-5 "><img src={Pic1} alt="background" className="w-72 h-20 rounded-lg object-cover"></img></div>
  <div className="flex  mt-6 mb-5">
  <i className="fa-regular fa-comment text-3xl ml-3 text-white"></i>
  <div className="flex ml-auto mr-3">
    <div className="     "><img src={Pic2} alt="" className=" rounded-full w-10 h-10 object-cover"></img></div>
    <div className="     "><img src={Pic2} alt="" className="rounded-full w-10 h-10 object-cover"></img></div>
    <div className="    "><img src={Pic2} alt="" className="rounded-full w-10 h-10 object-cover"></img></div>
  </div>

  </div>
  </div>

    </div>

    </div>

    <div className="w-96 h-auto bg-emerald-900 rounded-lg">
    <div className="flex mt-5">
    <div className="w-4 h-4 rounded-full bg-black mt-2.5 ml-10 mr-5 shadow-lg shadow-white">
    </div>
    <p className="text-white text-2xl ">To-Do</p>
    <i className="fa-solid fa-plus text-lg text-white ml-auto mr-7 "></i>
  </div>
  <div className="flex justify-center mt-5"><div className="w-80 h-0.5 center bg-white mb-5"></div></div>

  <div className="flex justify-center ">
  <div className="w-80 h-auto bg-black rounded-lg mb-10">
  <p className="text-white text-xl mt-5 ml-3">Task Name</p>
  <p className="text-gray-500 text-md mt-1 ml-3">Dec.3.2022</p>
  <p className="text-white text-sm mt-4 ml-3">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a ...</p>
  <div className="flex justify-center mt-5 mb-5 "><img src={Pic1} alt="background" className="w-72 h-20 rounded-lg object-cover"></img></div>
  <div className="flex  mt-6 mb-5">
  <i className="fa-regular fa-comment text-3xl ml-3 text-white"></i>
  <div className="flex ml-auto mr-3">
    <div className="     "><img src={Pic2} alt="" className=" rounded-full w-10 h-10 object-cover"></img></div>
    <div className="     "><img src={Pic2} alt="" className="rounded-full w-10 h-10 object-cover"></img></div>
    <div className="    "><img src={Pic2} alt="" className="rounded-full w-10 h-10 object-cover"></img></div>
  </div>

  </div>
  </div>

    </div>

    </div>

  <div className="w-96 h-auto bg-emerald-900 rounded-lg">
  <div className="flex mt-5">
  <div className="w-4 h-4 rounded-full bg-black mt-2.5 ml-10 mr-5 shadow-lg shadow-white">
  </div>
  <p className="text-white text-2xl ">To-Do</p>
  <i className="fa-solid fa-plus text-lg text-white ml-auto mr-7 "></i>
</div>
<div className="flex justify-center mt-5"><div className="w-80 h-0.5 center bg-white mb-5"></div></div>

<div className="flex justify-center ">
<div className="w-80 h-auto bg-black rounded-lg mb-10">
<p className="text-white text-xl mt-5 ml-3">Task Name</p>
<p className="text-gray-500 text-md mt-1 ml-3">Dec.3.2022</p>
<p className="text-white text-sm mt-4 ml-3">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a ...</p>
<div className="flex justify-center mt-5 mb-5 "><img src={Pic1} alt="background" className="w-72 h-20 rounded-lg object-cover"></img></div>
<div className="flex  mt-6 mb-5">
<i className="fa-regular fa-comment text-3xl ml-3 text-white"></i>
<div className="flex ml-auto mr-3">
  <div className="     "><img src={Pic2} alt="" className=" rounded-full w-10 h-10 object-cover"></img></div>
  <div className="     "><img src={Pic2} alt="" className="rounded-full w-10 h-10 object-cover"></img></div>
  <div className="    "><img src={Pic2} alt="" className="rounded-full w-10 h-10 object-cover"></img></div>
</div>

</div>
</div>

  </div>

  </div>

  </div>

     </div>



  );}
