import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css";
const Home = () => {
  const image = require("../Img/Main-pg.jpg")
  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
        <div className="row container">
            <div
            className="col-lg-6 d-flex justify-content-center align-items-center align-items-lg-start flex-column"
            style={ {height: "91.5vh"}}
            >
             <h2 style={{ fontSize:"90px"}}> BOOK STORE </h2>
             <h2 style={{ fontSize:"60px"}}> FOR YOU</h2>
             <p className="mb-8" style={{ color: "silver"}}>
              Checkout The Books From Here
             </p>
             <Link to="/books" className="viewBooks my-3">View Books</Link>            
            </div>
            <div 
            className="col-lg-6 d-flex justify-content-center align-items-center flex-column"
            style={ {height: "91.5vh"}}
            >
                <img className="img-fluid homeimg"
                 src={image} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Home