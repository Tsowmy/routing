
import "./App.css";
import Home from "./Home.js"
import { BrowserRouter,Routes,Route }from "react-router-dom"
import Contact from "./Contact.js"
import Login from "./Login.js"
import About from "./About.js"
import Logout from "./Logout.js"



      
function App() {
  return (
   
  <>
      <BrowserRouter>
        <div className="bg-container">
        <h2 className="body">App component</h2>
         <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/about"element={<About/>}/>
          <Route path="/contact"element={<Contact/>}/>
          <Route path="/login"element={<Login/>}/>
          <Route path ="/logout"element={<Logout/>}/>
         </Routes>
         </div>
      </BrowserRouter>
  </>
      
  );
}

export default App;
