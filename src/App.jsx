import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./pages/loading/Loading";
import SetTimer from "./pages/settimer/SetTimer";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/set-timer" element={<SetTimer />} />
      </Routes>
    </Router>
  )
};

export default App;
