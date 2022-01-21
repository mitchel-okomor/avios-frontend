import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './pages/Home/Home';
import Create from './pages/create/create';
import DetailProduct from './pages/product/Details';

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>is loading</div>}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailProduct />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </BrowserRouter>
        ,
      </Suspense>
    </div>
  );
}

export default App;
