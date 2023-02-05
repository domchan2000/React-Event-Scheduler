import { Routes, Route } from "react-router-dom";
import AllEvents from "./pages/AllEvents";
import NewEvent from "./pages/NewEvent";
import PastEvents from "./pages/PastEvents";
import MainNav from "./layout/MainNav";

function App() {
  return (
    <div><MainNav />
    <Routes>
      <Route path="/" element={<AllEvents/>} />
      <Route path="/new" element={<NewEvent />} />
      <Route path="/past" element={<PastEvents/>} />
    </Routes></div>
    
  );
}

export default App;
