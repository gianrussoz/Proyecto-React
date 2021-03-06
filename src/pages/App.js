import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import '../styles/normalize.css';
import Navbar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import CartContextProvider from '../components/CartContext';

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:idTipo' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </>
      );
}
export default App;