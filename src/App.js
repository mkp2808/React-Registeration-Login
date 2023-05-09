import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Login from './components/login';
import Register from './components/register';
import Details from './components/details';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
