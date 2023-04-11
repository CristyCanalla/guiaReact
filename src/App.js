import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Componentes
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CarritoProvider } from './components/context/CartContext';
import { ToastContainer } from 'react-toastify';


const App = () => {

  return (
    <> 
      <BrowserRouter>
      <CarritoProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        <ToastContainer/>
      </CarritoProvider>
      </BrowserRouter>
    </>

  );
}

export default App;
