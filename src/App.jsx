import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Dashboard from "./containers/Dashboard";
import GoogleSheets from "./containers/Integrations";
import { useState } from "react";
import Sheets from "./containers/Sheets";
import SpreadSheets from "./containers/SpreadSheets";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div>
      {token ? (
        <div className="flex">
          <Dashboard setToken={setToken} />
          <Routes>
            <Route path="/integrations" element={<GoogleSheets />} />
            <Route path="/sheets" element={<Sheets />} />
            <Route path="/spreadsheets/:id" element={<SpreadSheets />} />
          </Routes>
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Login setToken={setToken} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
