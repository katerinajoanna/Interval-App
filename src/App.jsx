import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./pages/loading/Loading";
import SetTimer from "./pages/settimer/SetTimer";
import DigitalTimer from "./pages/digitaltimer/DigitalTimer";
import AnalogTimer from "./pages/analogtimer/AnalogTimer";
import TextTimer from './pages/texttimer/TextTimer';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/set-timer" element={<SetTimer />} />
        <Route path="/digital-timer" element={<DigitalTimer />} />
        <Route path="/analog-timer" element={<AnalogTimer />} />
        <Route path="/visual-timer" element={<TextTimer />} />
      </Routes>
    </Router>
  )
};

export default App;
