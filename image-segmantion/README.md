# Image Segmentation Interactive Demo

This interactive web application demonstrates two important image segmentation algorithms:

1. **Otsu's Thresholding Algorithm** - Automatically finds an optimal threshold to separate an image into foreground and background.
2. **Region Growing Segmentation** - Grows regions from seed points by including neighboring pixels with similar intensity.

## Features

### Otsu's Thresholding
- Upload custom images
- Adjust Gaussian noise level (sigma)
- See histogram with optimal threshold calculation
- Step-by-step visualization of the algorithm
- Download segmentation result

### Region Growing Segmentation
- Upload custom images
- Interactive seed point placement by clicking on the image
- Adjust intensity threshold
- Real-time visualization of region growing process
- Download segmentation result

### Additional Features
- Dark/Light mode toggle
- Responsive design for desktop and mobile
- Detailed algorithm explanations

## How to Use

1. Launch the website by opening `index.html` in a web browser.
2. Toggle between Otsu's Thresholding and Region Growing using the tabs at the top.
3. Upload an image using the "Upload Image" button.
4. For Region Growing, click on the image to place seed points.
5. Adjust parameters as needed.
6. Click "Apply Algorithm" to run the segmentation.
7. View the result and download if desired.

## Technical Implementation

The website is built using:
- HTML5 for structure
- CSS3 for styling and responsive design
- Vanilla JavaScript for all algorithms and interactivity

No external libraries or frameworks are required.

### Otsu's Algorithm Implementation:
```javascript
function calculateOtsuThreshold(histogram, pixelCount) {
    // Calculate probability for each intensity level
    const probabilities = histogram.map(count => count / pixelCount);
    
    let maxVariance = 0;
    let threshold = 0;
    
    for (let t = 0; t < 256; t++) {
        // Calculate weights
        let w0 = 0;
        let w1 = 0;
        
        // Calculate means
        let mean0 = 0;
        let mean1 = 0;
        
        // Calculate class probabilities
        for (let i = 0; i < 256; i++) {
            if (i <= t) {
                w0 += probabilities[i];
                mean0 += i * probabilities[i];
            } else {
                w1 += probabilities[i];
                mean1 += i * probabilities[i];
            }
        }
        
        // Avoid division by zero
        if (w0 === 0 || w1 === 0) continue;
        
        mean0 /= w0;
        mean1 /= w1;
        
        // Calculate between-class variance
        const variance = w0 * w1 * Math.pow(mean0 - mean1, 2);
        
        // Update threshold if we found a higher variance
        if (variance > maxVariance) {
            maxVariance = variance;
            threshold = t;
        }
    }
    
    return threshold;
}
```

### Region Growing Algorithm Implementation:
```javascript
function runRegionGrowingAlgorithm(threshold) {
    // Calculate mean intensity of seed points
    let meanIntensity = 0;
    seedPoints.forEach(point => {
        const index = (point.y * width + point.x) * 4;
        meanIntensity += imageData.data[index];
    });
    meanIntensity /= seedPoints.length;
    
    // BFS to grow the region
    while (queue.length > 0) {
        const point = queue.shift();
        const x = point.x;
        const y = point.y;
        
        // Check if intensity is within threshold of mean
        if (Math.abs(intensity - meanIntensity) <= threshold) {
            // Add to result
            resultData.data[pixelIndex] = 255; // Mark as part of region
            
            // Check neighbors (8-connected)
            const neighbors = [
                {x: x-1, y: y-1}, {x: x, y: y-1}, {x: x+1, y: y-1},
                {x: x-1, y: y},                    {x: x+1, y: y},
                {x: x-1, y: y+1}, {x: x, y: y+1}, {x: x+1, y: y+1}
            ];
            
            // Add unvisited neighbors to queue
            neighbors.forEach(neighbor => {
                if (!visited[neighborIndex]) {
                    queue.push({x: nx, y: ny});
                }
            });
        }
    }
}
```

## Author
Pramitha Jayasooriya
June 2025
