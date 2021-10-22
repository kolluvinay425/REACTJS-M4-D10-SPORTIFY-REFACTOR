import { Row, Col } from "react-bootstrap";
const MusicPlayer = () => {
  return (
    <footer
      style={{ background: "#212120" }}
      className="container-fluid fixed-bottom  text-light  "
    >
      <Col className="text-center col-12 ">
        <i className="bi bi-shuffle icon-size-player ml-2 p-4"></i>
        <i className="bi bi-skip-start-fill icon-size-player ml-3 p-4"></i>
        <i
          className="bi bi-play-circle-fill ml-3 mb-2"
          style={{ fontSize: "1.2rem" }}
        ></i>

        <i className="bi bi-skip-end-fill icon-size-player ml-3 p-4"></i>
        <i className="bi bi-arrow-repeat icon-size-player ml-3 p-4"></i>
        <p className="text-center">i'm progress bar</p>
        <i className="bi bi-music-note-list icon-size-player p-4 text-end"></i>
        <i className="bi bi-laptop icon-size-player  p-4 text-end"></i>
        <i className="bi bi-volume-up icon-size-player  p-4 text-end"></i>
        <Col className=" text-end col-12"></Col>
      </Col>
    </footer>
  );
};

export default MusicPlayer;
