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
          songs.slice(0, 8).map((song) => (
            <Col xs={2} md={4} lg={3}>
              <Card className="mb-3" style={{ width: "200px" }}>
                <Card.Img variant="top" src={song.artist.picture_small} />
                <Card.Body>
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
