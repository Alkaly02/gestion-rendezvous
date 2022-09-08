import { Route, Routes } from "react-router-dom";
import Signup from './components/Signup';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
