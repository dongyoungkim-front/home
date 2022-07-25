import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Viewer from "./routes/Viewer";
import Launcher from "./routes/Launcher";
import Portfolio from "./routes/Portfolio";
import Team from "./routes/Team";
import Home from "./routes/Home";

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Team />} />
        <Route path="/launcher" element={<Launcher />} />
        <Route path="/launcher/viewer/:page" element={<Viewer />} />
        <Route path="/viewer" element={<Viewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
