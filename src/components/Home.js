import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
      <div className="container-fluid">
      <div className="row mt-3">
      <div className="col text-center">
        <h1>Welcome to my Nasa APP</h1>
      </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="card p-2 mt-5">
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="col-6 text-center mt-5">
          <img className="img-size" src="https://c8.alamy.com/comp/W0MGM7/this-new-hubble-space-telescope-photo-released-by-nasa-shows-a-portion-of-one-of-the-largest-seen-star-birth-regions-in-the-galaxy-the-carina-nebula-towers-of-cool-hydrogen-laced-with-dust-rise-from-the-wall-of-the-nebula-captured-here-are-the-top-of-a-three-light-year-tall-pillar-of-gas-and-the-dust-that-is-being-eaten-away-by-the-brilliant-light-from-nearby-bright-stars-the-pillar-is-also-being-pushed-apart-from-within-as-infant-stars-buried-inside-it-fire-off-jets-of-gas-that-can-be-seen-streaming-from-towering-peaks-like-arrows-sailing-through-the-air-upinasa-W0MGM7.jpg"/>
        </div>

      </div>
    </div>
    </>
  )
}