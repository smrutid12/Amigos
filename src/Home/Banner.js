import React from 'react'
import banner from "../img/thebanner.png";
import { Link} from "react-router-dom";
import "../Css/banner.css"
// import Genre from '../Home/Genre';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
function Banner() {
  return (
    <div className='Banner'>
        <Button className="getstarted"><Link to="/genre" >Get Started!</Link></Button>
        <h1 className="heading">Want To Start Your Career?</h1>
        <img src={banner} alt=""/>
    </div>
  )
}

export default Banner