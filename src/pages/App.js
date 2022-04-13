import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import '../css/normalize.css';
import Navbar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes> */}
          <style>@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Ubuntu&display=swap');</style>
          <Navbar/>
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
        {/* </Routes>
      </BrowserRouter> */}
    </>
  );
}
export default App;