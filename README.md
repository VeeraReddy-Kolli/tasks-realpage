# tasks-realpage
=======================================================
Problem 1 – general logic
Given an integer array – [6,13,22,18,0,3,45,57,5,12]
Write a function that finds the second largest integer in the array using only a single loop, and outputs the result to the console.
========================================================

Problem 3 – Concurrency
Given the sample code below, update it so the “image processing” logic is non-blocking to the main thread:

const express = require('express');
const app = express();

app.get('/image-process', (req, res) => {
  // CPU-intensive task: image processing
  for (let i = 0; i < 100000000; i++) {
    // Perform image processing operations
  }
  res.send('Image processed');
});
