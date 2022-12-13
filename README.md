# Object Detection Demo

## Table of Contents
- [Description](https://github.com/TuanNguyen4/rfc2209-technical-presentation/edit/main/README.md#description)
- [Usage](https://github.com/TuanNguyen4/rfc2209-technical-presentation/edit/main/README.md#usage)
- [Installation](https://github.com/TuanNguyen4/rfc2209-technical-presentation/edit/main/README.md#installation)

## Description

This project demo was part of my technical presentation during my time at Hack Reactor. Everyone was tasked with presenting on a technical topic of their choosing. Given my interest in machine learning, I was excited to see there was a TensorFlow library specifically for JavaScript so naturally, I chose to present on [TensorFlow.js](https://www.tensorflow.org/js).

This code showcases one of several pre-trained models from TensorFlow.js. This specific model is the [coco-ssd](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd?utm_source=www.tensorflow.org&utm_medium=referral), an object-detection model trained to [detect 80 common objects](https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts) like person, car, apple, and dog.

<p align="center">
  <img src="https://user-images.githubusercontent.com/107650573/207181555-3793e595-e178-43d0-9c50-488bf2e53b47.png" width="45%">
  <img src="https://user-images.githubusercontent.com/107650573/207181614-f75a6a25-c700-4f46-b325-665760067808.png" width="45%">
</p>

## Usage
The user can either click on the button to generate a random image URL saved in the code or paste an image URL from the internet. Once the image is shown, the user can click on the "Detect Image" button and shortly after, bounding boxes will be drawn around the detected object with the class name and the confidence.

<p align="center">
  <img src="https://user-images.githubusercontent.com/107650573/207181830-c837ffe3-c1d7-4ab8-9964-8c971ab494b3.gif" width="75%">
</p>

## Installation
- Clone this repo locally to your machine
- Inside the root directory of this project, run `npm install`
- In one terminal, run `npm run server-dev` to start the server
- In another terminal, run `npm run react-dev` to start the application
- Go to [http://localhost:3001](http://localhost:3001)
