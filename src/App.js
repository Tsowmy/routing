
import "./App.css";
import Home from "./Home.js"
import { BrowserRouter,Routes,Route }from "react-router-dom"
import Contact from "./Contact.js"
import Login from "./Login.js"
import About from "./About.js"



function App() {
  return (
    
   <>
    
      <BrowserRouter>
        <h2>App component</h2>
         <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/about"element={<About/>}/>
          <Route path="/contact"element={<Contact/>}/>
          <Route path="/login"element={<Login/>}/>
         </Routes>
      </BrowserRouter>
  
    </>     
  );
}

export default App;
