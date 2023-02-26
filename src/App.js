import './App.css';
import Login from './login_page';
import { Route, Routes } from "react-router-dom";
import HomePage from './home_page';
import Footer from './footer';
import Tokenexp from './token_expired';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/homepage' element={<HomePage/>} />
      {/* <Route path='/errorpage' element={<Tokenexp/>}/> */}
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
