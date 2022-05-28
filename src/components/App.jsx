import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/koszyk" element={<ShoppingCart />} />
        </Routes>
    </Router>
  );
}

export default App;
