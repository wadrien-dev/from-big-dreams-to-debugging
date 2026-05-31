/*
  Name: Woodna Adrien
  Date: May 2026
  Assignment: Week 7 Final Project
  Description:
  This React TypeScript final project uses routing, reusable components,
  temporary stored data, and a table that allows users to add and remove records.
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import ChildhoodDream from "./pages/ChildhoodDream";
import Skills from "./pages/Skills";
import FuturePlan from "./pages/FuturePlan";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dream" element={<ChildhoodDream />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/future" element={<FuturePlan />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;