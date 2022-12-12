# Object Detection Demo

## Description
This code was part of my technical presentation during my time at Hack Reactor. Everyone was tasked with presenting on a technical topic of their choosing. Given my interest in machine learning, I was excited to see there was a TensorFlow library specifically for Javascript so naturally, I chose to present on [TensorFlow.js](https://www.tensorflow.org/js).

This code showcases one of the many available pre-trained models from TensorFlow.js. The specific model is the [coco-ssd model](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd?utm_source=www.tensorflow.org&utm_medium=referral) which is an object-detection model trained to [detect 80 common objects](https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts) like person, car, apple, and laptop.

## Usage
The user can either click on the button to generate a random image url saved in the code or paste an image URL from the internet. When searching images, it is recommended to include the term "stock" in the search i.e. 'dogs and cats stock' or the image may not render due to cross origin issues. Once the image is displayed, the user can click on the "Detect Image" button to run the object detection. Shortly after, bounding boxes will be drawn around the detected object in the image along with the class name and the model's confidence.

## Installation
- Clone this repo locally to your machine
- Inside the root directory of this project, run `npm install`
- In one terminal, run `npm run server-dev` to start the server
- In another terminal, run `npm run client-dev` to start the application
- Go to [http://localhost:3001](http://localhost:3001)
