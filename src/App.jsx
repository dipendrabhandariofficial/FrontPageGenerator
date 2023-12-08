import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Frontpage from "./pages/Front/FrontPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Frontpage name="Dipendra Bhandari" roll="1" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
