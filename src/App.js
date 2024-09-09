
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home.jsx'
import About from './components/Pages/About.jsx'
import Register from './components/Pages/Register.jsx'
import Contact from './components/Pages/Contact.jsx'
import Show from './components/Pages/Show.jsx'
import Update from './components/Pages/Update.jsx';
import Delete from './components/Pages/Delete.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/show' element={<Show/>}></Route>
          <Route path='/update/stud/:studID' element={<Update/>}></Route>
          <Route path='/delete/stud/:studID' element={<Delete/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
