import React, { useState, useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from '@tensorflow-models/coco-ssd';
import { Search, DetectionButton, Detection } from './index.js'
import { drawBBox, setCanvasDimension, loadRandomImage, imagesURL } from './utilities.js'

const App = () => {
  const canvasRef = useRef(null); // State for canvas
  const [image, setImage] = useState(''); // Image URL
  const [isDetecting, setDetecting] = useState(false); // Set detecting text

  const detectImage = () => {
    setDetecting(true)
    // Get image element for object detection
    let imgElement = document.getElementById('image')
    const ctx = setCanvasDimension(imgElement, canvasRef)
    // Run Object-detection on image
    cocossd.load() // Load model
      .then(model => {
        model.detect(imgElement) // Then detect using the image element
          .then(detections => {
            console.log('Detections:', detections)
            drawBBox(detections, ctx)
            setDetecting(false)
          })
          .catch(err => console.log('Could not detect image :('))
      })
      .catch(err => console.log('Could not load model. Error:', err))
  }
  useEffect(() => setImage(loadRandomImage(false, canvasRef)), []);

  return (
    <div className="App">
      <h1>Object Detection Demo</h1>
      <Search
        image={image}
        setImage={setImage}
      />
      <DetectionButton
        image={image}
        setImage={setImage}
        loadRandomImage={loadRandomImage}
        canvasRef={canvasRef}
        isDetecting={isDetecting}
        detectImage={detectImage}
      />
      <Detection
        image={image}
        canvasRef={canvasRef}
      />
    </div>
  );
}
export default App;