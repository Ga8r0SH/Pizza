import './App.css';
import { CartProvider } from './components/UseContext/useCart';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path='/' element={<MainPage  />} />
          <Route path='/mainContent' element={<CartPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
