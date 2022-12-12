import React from 'react'

const Detection = ({ image, canvasRef }) => {

  return (
    <div id='detection'>
      {/* Display image */}
      {image.length !== 0 && (<img id='image'
        src={image}
        crossOrigin='anonymous'
        alt='stock'
      />)}
      {/* Display canvas for bounding boxes */}
      <canvas id='bbox'
        ref={canvasRef}
      />
  </div>
  )
}
export default Detection