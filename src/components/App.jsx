import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Home";
import ShoppingCart from "./ShoppingCart";
import OrderForm from "./OrderForm";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/koszyk" element={<ShoppingCart />} />
            <Route path="/zamowienie" element={<OrderForm />} />
        </Routes>
    </Router>
  );
}

export default App;
