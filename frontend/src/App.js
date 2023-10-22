
import './App.css';
import Nav from './components/Nav'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Signup from './components/SIgnup';
import Product from './components/Product';
import PrivateCompo from './components/PrivateComp';
import Login from './components/Login ';
import { useEffect,useNavigate } from 'react';
import AddProduct from './components/AddProduct';
import UpdateList from './components/UpdateList';

function App() {

  
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
      <Routes>

        <Route element={<PrivateCompo/>}>
        <Route path='/' element={<Product/>}></Route>
        <Route path='/add' element={<AddProduct/>}></Route>
        <Route path='/update/:id' element={<UpdateList/>}></Route>
        <Route path='/logout' element={<h1>Logout Product </h1>}></Route>
        <Route path='/profile' element={<h1>profile </h1>}></Route>
        </Route>

        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>

      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
