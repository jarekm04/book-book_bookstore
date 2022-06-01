import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Form from "./Form/Form";

function App() {
    return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/koszyk" element={<ShoppingCart />} />
            <Route path="/zamowienie" element={<Form />} />
        </Routes>
    </Router>
  );
}

export default App;
