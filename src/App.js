import './App.css';
import About from './page/About';
import Home from './page/Home';
import LoginPage from './page/LoginPage';
import ProductDetail from './page/ProductDetail';
import Products from './page/Products';
import {Routes, Route, Navigate} from 'react-router-dom'
import UserPage from './page/UserPage';
import {useState} from 'react'

function App() {
  const [authenticate, setAuthenticate] = useState(false)
  const PrivateRoute =()=>{
    return authenticate ==true ?<UserPage /> : <Navigate to="/login" />
  }
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/user' element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
