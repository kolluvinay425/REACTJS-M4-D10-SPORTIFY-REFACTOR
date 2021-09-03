import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import NavbarSection from "./components/NavbarSection";
import MusicPlayer from "./components/MusicPlayer";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <Sidebar />
      <MusicPlayer />
    </>
  );
}

export default App;
