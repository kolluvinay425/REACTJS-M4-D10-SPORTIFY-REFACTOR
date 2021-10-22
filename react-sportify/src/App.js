import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavbarSection from "./components/NavbarSection";
import MusicPlayer from "./components/MusicPlayer";
import Sidebar from "./components/Sidebar";
import SportifyHome from "./components/SportifyHome";
function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Sidebar} />
        <Route path="/" component={MusicPlayer} />
      </Router>
    </>
  );
}

export default App;
