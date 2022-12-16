import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext"; // import this
import Register from "./components/register";
import Login from "./components/login";
import Tasks from "./components/tasks";
import {AiFillHome} from "react-icons/ai"
import {FaClipboardList} from "react-icons/fa"
import {BiTask} from "react-icons/bi"
import {FiLogIn} from "react-icons/fi"
import {AiOutlineMenu} from "react-icons/ai"

//immport logo from "./logo.svg"
import "./App.css"


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <ul>
            <li className="menu"><a href="/home/ramyar/final-project-the-board-project/src/MenuPages.js"><AiOutlineMenu className="icon1" size="20px" color="white" /> Menu </a></li>
            <li className="home"><a href="C:\Users\spark\Desktop\board-project\me\src\HomePage.js"><AiFillHome className="icon2" size="20px" padding-left="30%" color="white" /> Home </a></li>
            <li className="about"><a href="C:\Users\spark\Desktop\board-project\me\src\AboutPage.js"><FaClipboardList className="icon3" size="20px" color="white" /> About </a></li>
            <li className="tasks"><a href="C:\Users\spark\Desktop\board-project\me\src\TasksPage.js"><BiTask className="icon4" size="20px" color="white" /> Tasks </a></li>
            <li className="login1"><a href="/home/ramyar/final-project-the-board-project/src/login1.js"><FiLogIn className="icon5" size="30px" color="white" />login</a></li>
            
        </ul>
        </div>
        <section className="login-page">
      <Router>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
      </section>
      
    </AuthProvider>
    
  );
}

export default App;
