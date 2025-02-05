import React from 'react';
import { Link } from "react-router-dom"
import Baptismimage from "../assets/baptism2.jpg";
import { AlignLeft } from 'lucide-react';
import Kidsbdayimage from "../assets/kidsbday.jpg";
import weddingcakeimage from "../assets/weddingcake_pinkbg_right.png";

function Home() {
  return (
    <div className="home">
      <div
        className="headercontainer"
        style={{ backgroundImage: `url(${Baptismimage})`}}
        >
          <h1>CHECKOUT!</h1>
          <h1>BAPTISM</h1>
          <h1>COLLECTION</h1>
          <br></br>
          <Link to="/baptism menu">
          <button >ORDER NOW</button>
          </Link>
      </div>
      <div className='secondsection'>

      
        <div className='leftsecond' style={{ backgroundImage: `url(${Kidsbdayimage})`}}>
        
        
       
          <h1>KIDS BDAY</h1>
          <h1>COLLECTION</h1>
          <br></br>
          <Link to="/kids bday menu">
          <button >ORDER NOW</button>
          </Link>
        </div>

        <div className='rightsecond' style={{ backgroundImage: `url(${weddingcakeimage})`}}>
        <h1>WEDDING CAKE</h1>
          <h1>COLLECTION</h1>
          <br></br>
          <Link to="/wedding cake menu">
          <button >ORDER NOW</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home
