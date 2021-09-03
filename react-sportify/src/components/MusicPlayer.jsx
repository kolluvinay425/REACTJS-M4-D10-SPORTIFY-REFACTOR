import { Row, Col } from "react-bootstrap";
const MusicPlayer = () => {
  return (
    <Row>
      <footer
        style={{ background: "#212120" }}
        className="container-fluid fixed-bottom text-center text-light "
      >
        <i className="bi bi-shuffle icon-size-player ml-2 p-4"></i>
        <i className="bi bi-skip-start-fill icon-size-player ml-3 p-4"></i>
        <i
          className="bi bi-play-circle-fill ml-3 mb-2"
          style={{ fontSize: "1.2rem" }}
        ></i>
        <i className="bi bi-skip-end-fill icon-size-player ml-3 p-4"></i>
        <i className="bi bi-arrow-repeat icon-size-player ml-3 p-4"></i>

        <Col>
          <i className="bi bi-music-note-list icon-size-player p-4 justify-content-end"></i>
          <i className="bi bi-laptop icon-size-player  p-4 justify-content-end"></i>
          <i className="bi bi-volume-up icon-size-player  p-4 justify-content-end"></i>
        </Col>
      </footer>
    </Row>
  );
};

export default MusicPlayer;
