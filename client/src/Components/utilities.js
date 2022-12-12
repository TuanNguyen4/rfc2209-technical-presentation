// Helper function to draw bounding box using coordinates in detections array
const drawBBox = (detections, ctx) => {
  for (let i = 0; i < detections.length; i++) {
    // Access prediction data from detections
    const [x, y, width, height] = detections[i].bbox;
    const name = detections[i].class;
    const confidence = (detections[i].score * 100).toPrecision(3);
    const colors = ['red', 'green', 'blue', 'orange', 'violet']
    let randIndex = Math.floor(Math.random() * colors.length)
    // Styling bounding box
    let color = colors[randIndex];
    ctx.strokeStyle = color
    ctx.font = '20px Arial'
    ctx.fillStyle = color
    ctx.lineWidth = '2'
    // Draw bounding box on screen
    ctx.beginPath()
    ctx.fillText(`${name} ${confidence}%`, x, y - 2)
    ctx.rect(x, y, width, height)
    ctx.stroke()
  }
}
// Helper function to create canvas of the same size of the input element
const setCanvasDimension = (imgElement, canvas) => {
  canvas.current.width = imgElement.width;
  canvas.current.height = imgElement.height;
  return canvas.current.getContext('2d');
}
// Helper function to generate a random index to set the image source to
const loadRandomImage = (random, canvas) => {
  // Clear old bounding boxes before loading new image
  let oldCtx = canvas.current.getContext('2d')
  oldCtx.clearRect(0, 0, canvas.current.width, canvas.current.height)
  let index = 0;
  // Generate random index to set img source to random is true
  if (random) index = Math.floor(Math.random() * imagesURL.length);
  return imagesURL[index]
}

const imagesURL = [
  'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1658772.jpg',
  'https://previews.123rf.com/images/saracorso/saracorso1507/saracorso150700001/77292011-cow-and-horse-meeting-on-nature-.jpg?fj=1',
  'https://i.guim.co.uk/img/media/3aab8a0699616ac94346c05f667b40844e46322f/0_123_5616_3432/master/5616.jpg?width=445&quality=85&dpr=1&s=none',
  'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1214430325.jpg?crop=1.00xw:0.779xh;0,0.221xh&resize=1200:*',
  'https://as2.ftcdn.net/v2/jpg/02/38/03/23/1000_F_238032371_QLA72I9tqzHQOlAY5QUXLOxXAZElZ2lp.jpg',
  'https://thumbs.dreamstime.com/z/young-man-walking-down-city-street-sunny-day-116389049.jpg',
  'https://media.gettyimages.com/photos/young-woman-working-from-home-with-her-dog-picture-id1351642561?s=612x612',
  'https://thumbs.dreamstime.com/b/cat-dog-26409253.jpg',
  'https://thumbs.dreamstime.com/z/group-different-young-pets-two-sitting-puppies-two-sitting-kittens-facing-camera-isolated-white-background-group-165708190.jpg',
  'https://thumbs.dreamstime.com/z/business-meeting-group-partners-listening-to-colleague-54662492.jpg'
]
export {
  drawBBox,
  setCanvasDimension,
  loadRandomImage,
  imagesURL
}