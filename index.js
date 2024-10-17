const express = require('express');
const app = express();

app.get('/image-process', (req, res) => {
  // simulate image processing in non-blocking way
  const processingTask = () => {
    // making a CPU-intensive task with for loop and setImmediate
    for (let i = 0; i < 10; i++) { // Split into 10 chunks
      setImmediate(() => {
        // simulating image processing operations
        for (let j = 0; j < 100; j++) {
          // simulated work (image processing)
          console.log('image processing')
        }
        // send response when image processing is completed
        if (i === 9) { // after the last iteration
            console.log('Image processed=====')
          res.send('Image processed=====');
        }
      });
    }
  };

  processingTask(); // start the image processing task
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
