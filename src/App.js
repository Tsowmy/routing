
import "./App.css";
import Home from "./Home.js"
import { BrowserRouter,Routes,Route }from "react-router-dom"
import Contact from "./Contact.js"
import Login from "./Login.js"
import About from "./About.js"
import Logged from "./Logged.js"
import Calculator from "./Calculator.js"


      
function App() {
  return (
   
  <>
      <BrowserRouter>
        <div className="bg-container">
        <h2 className="body">Calculator component</h2>
         <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/about"element={<About/>}/>
          <Route path="/contact"element={<Contact/>}/>
          <Route path="/login"element={<Login/>}/>
          <Route path ="/logged"element={<Logged/>}/>
          <Route path ="/Calculator"element={<Calculator/>}/>
         </Routes>
         </div>
      </BrowserRouter>
  </>
      
  );
}

export default App;
