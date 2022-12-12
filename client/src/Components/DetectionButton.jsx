import React from 'react'

const DetectionButton = ({ image, setImage, loadRandomImage, canvasRef, detectImage, isDetecting }) => {

  const handleNewImageClick = () => {
    let imageURL = loadRandomImage(true, canvasRef)
    setImage(imageURL)
  }

  return (
    <div id='btn-container'>
      {/* Generate new image */}
      <button id='image-btn'
        type='button'
        onClick={handleNewImageClick}
      >Generate Image</button>
      {/* Detect new image */}
      {image.length !== 0 &&
      <button id='detect-btn'
        type='button'
        onClick={() => detectImage()}
      >
        {isDetecting ? 'Detecting...' : 'Detect Image'}
      </button>}
    </div>
  )
}
export default DetectionButton