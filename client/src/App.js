import './App.css';
import Main from './views/Main'
import ProductDetail from './views/ProductDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:id' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
