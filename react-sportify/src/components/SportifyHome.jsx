import { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

const SportifyHome = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever"
      );
      if (response.ok) {
        const allSongs = await response.json();
        setSongs(allSongs.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Row>
        <h1 className="text-white">#ThrowbackThursday's</h1>
        {songs &&
          songs.slice(0, 12).map((song) => (
            <Col xs={12} sm={6} md={4} lg={3} xl={2}>
              <Card className="mr-2 mb-2 " style={{ background: "#443d3e4f" }}>
                <Card.Img
                  style={{ maxwidth: "100%" }}
                  variant="top"
                  src={song.artist.picture}
                />
                <Card.Body style={{ color: "white" }}>
                  <Card.Title>{song.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};
export default SportifyHome;
