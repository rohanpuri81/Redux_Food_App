import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart" element={<CardsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
