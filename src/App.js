import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import { Container } from 'react-bootstrap';
// import ProductDetail from './ProductDetail';

function App() {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Container className="d-block">
          <h1 className='text-center'>Numbers</h1>
          <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="/product" element={<ProductDetail />} /> */}
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
