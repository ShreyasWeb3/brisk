import "./App.css";
import Header from "./components/Header";
import Orders from "./components/Orders";
import Sidepanel from "./components/Sidepanel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className=" h-screen">
        <Header />
        <div className="flex">
          <Sidepanel />
          <Routes>
            <Route path="/orders" element={<Orders />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
