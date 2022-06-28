import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.js"
import DataProvider from "./contexts/data"
import './sass/main.scss'
import Feedback from "./pages/feedback/feedback.js";
import Add from "./pages/add/add.js";

function App() {

  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback/:id" element={<Feedback />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
