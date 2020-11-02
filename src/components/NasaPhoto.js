import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from "./Navbar";

const apiKey = process.env.REACT_APP_NASA_KEY;
export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch( `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);
  if (!photoData) return <div />;
  return (
    <>
    <Navbar/>
<div className='container-fluid'>
  <div className='row mt-1'>
   
    <div className='col text-left'>


  {photoData.media_type == "image" ? (
    
    <img 
    src={photoData.url}
    alt={photoData.title}
    />
    ) : (
      <iframe
      title="space-video"
      src={photoData.url}
      frameBorder="0"
      // gesture="media"
      allow="encrypted-media"
      allowFullScreen
      className="photo"
      />
      )
      
}
    
      </div>
    </div>
  <div className="text-center">
    <h1 className="mt-5">{photoData.title}</h1>
    <p>{photoData.date}</p>
    <p>{photoData.explanation}</p>
  </div>
</div>

</>
  )
}