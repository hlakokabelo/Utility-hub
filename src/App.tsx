import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import TransportCostCalculator from "./pages/TransportCostCalculator";
import UnitConverter from "./pages/UnitConverter";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="min-h-[calc(100vh-73px)] flex items-center justify-center p-6">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/transport-calculator"
            element={<TransportCostCalculator />}
          />
          <Route path="/unit-converter" element={<UnitConverter />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
