import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.js"
import DataProvider from "./contexts/data"
import './sass/main.scss'

function App() {

  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
