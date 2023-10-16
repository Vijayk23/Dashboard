import "./App.css";
import Dashboard from "./Dashboard";
import Product from "./Product";
import Customers from "./Customers";
import Chartdesign from "./Chart";
import Income from "./Income";
import Help from "./Help";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="Product" element={<Product />} />
          <Route path="Customers" element={<Customers />} />
          <Route path="Income" element={<Income />} />
          <Route path="Chart" element={<Chartdesign />} />
          <Route path="Help" element={<Help />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
