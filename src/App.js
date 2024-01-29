import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { Container } from "react-bootstrap";
// import ProductDetail from './ProductDetail';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <h2 className="text-center main_head">Orders detail for GDRX & CMS</h2>
        <Container className="d-block">
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
