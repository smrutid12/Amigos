import React from 'react'
import { Link } from 'react-router-dom';
import {Card,CardGroup} from 'react-bootstrap';
import biology from "../img/biology.svg"
import maths from "../img/maths.svg"
import Economy from "../img/economics.svg" 
import Psycho from "../img/Psycho.svg";
import Business from "../img/business.svg";
import Physics from "../img/Physics.svg";
function Education() {
  return (
    <div>
        <CardGroup>
        <Card className="Card" style={{ width: '10rem' }}>
          <Card.Img variant="top" src={biology} />
          <Card.Text><Link to="/education">Biology</Link></Card.Text>
        </Card>
        <Card className="Card" style={{ width: '10rem' }}>
          <Card.Img variant="top" src={maths} />
          <Card.Text>Mathematics</Card.Text>
        </Card>
        <Card className="Card" style={{ width: '10rem' }}>
          <Card.Img variant="top" src={Economy} />
          <Card.Text>Economics</Card.Text>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="Card" style={{ width: '10rem' }}>
          <Card.Img variant="top" src={Psycho} />
          <Card.Text>Psychology</Card.Text>
        </Card>
        <Card className="Card" style={{ width: '10rem' }}>
          <Card.Img variant="top" src={Business}/>
          <Card.Text>Business</Card.Text>
        </Card>
        <Card className="Card" style={{ width: '10rem' }}>
          <Card.Img variant="top" src={Physics} />
          <Card.Text>Physics</Card.Text>
        </Card>
      </CardGroup>
    </div>
  )
}

export default Education
