import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import Deaths from "./pages/Deaths";
import Episodes from "./pages/Episodes";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Quotes from "./pages/Quotes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/deaths" element={<Deaths />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
