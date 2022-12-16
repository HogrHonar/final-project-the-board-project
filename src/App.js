import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext"; // import this
import Register from "./components/register";
import Login from "./components/login";
import About from "./components/About";
import Home from "./components/Home";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/About" element={<About/>} />
          <Route exact path="/Home" element={<Home/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
