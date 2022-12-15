import React from "react";
import Pic1 from "../components/images/1.jpg";
import Pic2 from "../components/images/2.jpg";


const TasksCard = (props) => {
  return (
    <div className="w-80 h-auto bg-black rounded-lg mb-10">
    <p className="text-white text-xl mt-5 ml-3">{props.taskName}</p>
    <p className="text-gray-500 text-md mt-1 ml-3">{props.date}</p>
    <p className="text-white text-sm mt-4 ml-3">{props.description}</p>
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
  );
};

export default TasksCard;
