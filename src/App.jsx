import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./pages/loading/Loading";
import SetTimer from "./pages/settimer/SetTimer";
import DigitalTimer from "./pages/digitaltimer/DigitalTimer";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/set-timer" element={<SetTimer />} />
        <Route path="/timer" element={<DigitalTimer />} />
      </Routes>
    </Router>
  )
};

export default App;
