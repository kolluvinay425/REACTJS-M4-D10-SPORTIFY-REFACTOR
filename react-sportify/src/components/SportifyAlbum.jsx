import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const SportifyAlbum = ({ albumId }) => {
  const [albumSongs, setAlbumSongs] = useState([]);

  useEffect(() => {
    const fetchAlbum = async () => {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId
      );
      try {
        if (response.ok) {
          const album = await response.json();
          console.log("album songs------->", album);
          setAlbumSongs(album);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAlbum();
  });

  return (
    <Container>
      <Row>
        <Col>
          <h1>{albumSongs.id}</h1>
        </Col>
      </Row>
    </Container>
  );
};
export default SportifyAlbum;
