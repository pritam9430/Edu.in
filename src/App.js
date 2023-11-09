// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Survice from './Survice';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import EPage from './EPage';
// import Example from './Example';
import BasicExample from './BasicExample';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './User';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
     {/* <BasicExample/> */}
     <Navbar/>
        <Routes>
          <Route path='/survice' element = {<Survice/> } ></Route>
          <Route path="/About" element = {<About/>}></Route>
          <Route path='/Contact' element = {<Contact/>}> </Route>
          <Route path='/Home' element = {<Home/>}></Route>
          <Route path='/*' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
