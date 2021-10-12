import React, { useState } from "react";
import './App.css';
import imagesArr from './imageData';

function App() {
  // USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

	// CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
	// THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  function Clicked(event) {
    const clickedimg = event.target.src;
    setBigImage(clickedimg);
  }

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
        {/* RENDER THE IMAGES ARRAY  */}
        {imagesArr.map((img) => {
          return <img key={img.city} className="thumb" src={img.img} alt={img.city} onClicked={Clicked}></img>
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