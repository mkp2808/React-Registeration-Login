import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page_not_found from './components/page_note_found';
import Home from './components/home';
import Header from './components/header';
import Login from './components/login';
import Register from './components/register';
import Products from './components/products';
import Details from './components/details';
import {Routes,Route} from 'react-router-dom';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='*' element={<Page_not_found />} />
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
