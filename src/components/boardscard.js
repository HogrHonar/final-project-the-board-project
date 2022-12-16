import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Taskscard from "../components/taskscard.js";
import { TasksArray } from "../components/taskArray.js";
import { BoardArray } from "../components/boardArray.js";
import Pic1 from "../components/images/1.jpg";
import Pic2 from "../components/images/2.jpg";

export default function Boardscard(props) {
 const [show, setShow] = useState(false);
 const [val, setVal] = useState({});
const [taskList, setTaskList] = useState(TasksArray);

const change= event =>{
  const keyName=event.target.name;
  const value=event.target.value;
  setVal((prev) =>{
  return{...prev,[keyName]:value};
  });
}


console.log(val);

const submit = (event) => {
  event.preventDefault();
  setTaskList((prev) => {
    return [val, ...prev];
  })};


  return(



<div className="w-96 h-auto ml-16 mr-16 bg-emerald-900 rounded-lg">
  <div className="flex mt-5">
  <div className="w-4 h-4 rounded-full bg-black mt-2.5 ml-10 mr-5 shadow-lg shadow-white">
  </div>
  <p className="text-white text-2xl ">{props.boardTittle}</p>
  <button type="button" name="button" className="flex  ml-auto    " onClick={() => setShow(!show)}>
  <i className="fa-solid fa-plus text-lg text-white  mr-7 "></i>
  </button>
</div>
<div className="flex justify-center mt-5"><div className="w-80 h-0.5 center bg-white mb-5"></div></div>

<div className="flex  flex-col items-center ">


{ show && <div className="w-80 h-auto bg-black rounded-lg mb-10">
  <p className="text-white text-xl mt-5 mb-5 ml-5">Task Name</p>
  <div className="flex justify-center">
  <input onChange={change} vlaue={val.taskName} name="taskName" type="text" id="large-input" className="block w-72 p-2 text-gray-900   rounded-full outline-none bg-gray-50 sm:text-md  dark:placeholder-gray-400 dark:text-white "></input>
  </div>

<p className="text-white text-xl mt-5 mb-5 ml-5">Date</p>
<div className="flex justify-center">
<input onChange={change} vlaue={val.date} name="date" type="text" id="large-input" className="block w-72 p-2 text-gray-900   rounded-full outline-none bg-gray-50 sm:text-md  dark:placeholder-gray-400 dark:text-white "></input>
</div>

<p className="text-white text-xl mt-5 mb-5 ml-5">Description</p>
<div className="flex justify-center">
<input  onChange={change} vlaue={val.description} name="description" type="text" id="large-input" className="block w-72 p-5 text-gray-900   rounded-full outline-none bg-gray-50 sm:text-md  dark:placeholder-gray-400 dark:text-white " ></input>
</div>
<div className="flex justify-center">
<button onClick={submit} type="button" name="button" className="flex  bg-emerald-900  mt-8 mb-8 py-2 px-6 rounded-full shadow-md shadow-white">
<p className="text-lg  text-white ">create</p>
</button>
</div>

  </div>}


  {taskList.map((Taskss) => {
           return <Taskscard {...Taskss} />;
         })}
</div>
</div>



  );}
