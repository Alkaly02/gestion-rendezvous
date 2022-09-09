import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from './components/Signup';
import DashboardAdmin from './pages/admin/dashboard/DashboardAdmin';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<DashboardAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
