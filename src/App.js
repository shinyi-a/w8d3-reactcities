import React, { useState } from "react";
import './App.css';
import imagesArr from './imageData';

function App() {
  const [bigImage, setBigImage] = useState(imagesArr[6].img);
  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
        {/* RENDER THE IMAGES ARRAY  */}
        {imagesArr.map((img) => {
          return <img key={img.city} className="thumb" src={img.img} alt={img.city}></img>
        })}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {/* <img src="" id="bigimage" alt='bigImage'/> */}
        <img id="bigimage" src={bigImage} alt="bigImage"></img>
      </div>
    </div>
  );
}

export default App;