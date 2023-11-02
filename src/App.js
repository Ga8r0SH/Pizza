import './App.css';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mainContent' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
