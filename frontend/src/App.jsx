import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";
import Register from "./Register";
import Home from "./Home";
import Forget from "./Forget";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Test></Test>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/forget" element={<Forget></Forget>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
