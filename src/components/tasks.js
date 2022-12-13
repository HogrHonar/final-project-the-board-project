import { Link } from "react-router-dom";
import Pic1 from "./src/components/images/1.jpg";
import Pic2 from "./src/components/images/2.jpg";

export default function Tasks() {
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
