import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Nav/Header";
import Home from "./Home/Home";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import OrderForm from "./Form/OrderForm";

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
