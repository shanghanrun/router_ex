import './App.css';
import About from './page/About';
import Home from './page/Home';
import ProductDetail from './page/ProductDetail';
import Products from './page/Products';
import {Routes, Route} from 'react-router-dom'

function App() {
  const PrivateRoute =()=>{
    return 
  }
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
