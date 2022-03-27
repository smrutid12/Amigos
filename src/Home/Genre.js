import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "../Css/genre.css";
import education from "../img/educationbrown.svg";
import sports from "../img/sportsbrown.svg";
import business from "../img/business.svg";
import music from "../img/music.svg";
import fashion from "../img/fashion.svg";
import astronomy from "../img/astronomy.svg";
import animalenthu from "../img/animalenthu.svg";
import plantenthu from "../img/plantenthu.svg";
import dance from "../img/dance.svg";
import { Link} from "react-router-dom";

function Genre() {
  return (
    <div className="Genre">
      <CardGroup>
        <Card className="Card" style={{ width: '10rem' }}>
          <Card.Img variant="top" src={education} />
          <Card.Text><Link to="/education">Education</Link></Card.Text>
        </Card>
        <Card className="Card" style={{ width: '10rem' }}>
          <Card.Img variant="top" src={sports} />
          <Card.Text><Link to="/sport">Sports</Link></Card.Text>
        </Card>
        <Card className="Card" style={{ width: '10rem' }}>
          <Card.Img variant="top" src={business} />
          <Card.Text>Business</Card.Text>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="Card" style={{ width: '10rem' }}>
          <Card.Img variant="top" src={music} />
          <Card.Text>Music</Card.Text>
        </Card>
        <Card className="Card" style={{ width: '10rem' }}>
          <Card.Img variant="top" src={fashion}/>
          <Card.Text><Link to="/fashion">Fashion</Link></Card.Text>
        </Card>
        <Card className="Card" style={{ width: '10rem' }}>
          <Card.Img variant="top" src={animalenthu} />
          <Card.Text>Animal Enthusiast</Card.Text>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card className="Card" style={{ width: '10rem' }}>
          <Card.Img variant="top" src={astronomy} />
          <Card.Text>Astronomy</Card.Text>
        </Card>
        <Card className="Card" style={{ width: '10rem' }}>
          <Card.Img variant="top" src={dance}/>
          <Card.Text>Dance</Card.Text>
        </Card>
        <Card className="Card" style={{ width: '10rem' }}>
          <Card.Img variant="top" src={plantenthu} />
          <Card.Text>PLant Enthusiast</Card.Text>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Genre;
