import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return(
    <header className="container-fluid py-4 bg-dark">
    <div className="row">
      <div className="col-1">
        <h5>
        <Link className="link" to="/" style={{ textDecoration: 'none' }}>Home</Link>
        </h5>
      </div>
        <div className="col-1">
        <h5>
        <Link className="link" to="/nasaphoto" style={{ textDecoration: 'none' }}>A.P.O.D.</Link>
        </h5>
        </div>
        
     
    </div>
    </header>
  )
}