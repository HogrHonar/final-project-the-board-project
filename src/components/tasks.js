import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Taskscard from "../components/taskscard.js";
import Boardscard from "../components/boardscard.js";
import { TasksArray } from "../components/taskArray.js";
import { BoardArray } from "../components/boardArray.js";
import Pic1 from "../components/images/1.jpg";
import Pic2 from "../components/images/2.jpg";

export default function Tasks() {
  const [show, setShow] = useState(false);
  const [val, setVal] = useState({});
  const [boardList, setBoardList] = useState(BoardArray);

 const change= event =>{
   const keyName=event.target.name;
   const value=event.target.value;
   setVal((prev) =>{
   return{...prev,[keyName]:value};
   });
 }


 console.log(val);



const create = (event) => {
    event.preventDefault();
    setBoardList((prev) => {
      return [val,...prev];
    })};


  return(

<div className="w-full bg-gray-900 " style={{height: "3000px"}}>

<div className="flex w-full h-auto bg-emerald-900 ">

{show && <div className="flex w-20 h-10  ml-3 mt-3 mb-3">
<input onChange={change} vlaue={val.boardTittle} name="boardTittle" type="text" id="large-input" className="block w-72 p-2 text-gray-900   rounded-full outline-none bg-gray-50 sm:text-md  dark:placeholder-gray-400 dark:text-white "></input>
<button  onClick={create} type="button" name="button" className="flex text-lg text-white  bg-black center ml-32 absolute  py-2 px-3 rounded-full ">
submit
</button>
</div>}
<button onClick={() => setShow(!show)} type="button" name="button" className="flex  ml-auto bg-black mt-3 mb-3 py-2 px-6 rounded-full shadow-md shadow-white">
<p className="text-lg text-white mr-3">create</p>
<i className="fa-solid fa-plus text-lg text-white "></i>
</button>
<div className="mt-3 ml-5 mr-5 "><img src={Pic2} alt="" className=" rounded-full w-10 h-10 object-cover"></img></div>
</div>
<h1 className="text-white text-4xl pt-24 pl-16">Tasks</h1>

<div className="grid gap-4 grid-cols-2 mt-10 m3 pb-20">
{boardList.map((boards) => {
         return <Boardscard {...boards} />;
       })}

</div>
</div>


  );}
