// Main script for Image Segmentation Demo
document.addEventListener('DOMContentLoaded', function() {
    // Theme switching functionality
    const themeSwitch = document.getElementById('theme-switch');
    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', themeSwitch.checked);
    });

    // Tab switching functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to current button and content
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Otsu's Algorithm Implementation
    const otsuFileUpload = document.getElementById('otsu-file-upload');
    const otsuFileName = document.getElementById('otsu-file-name');
    const noiseSlider = document.getElementById('noise-slider');
    const noiseValue = document.getElementById('noise-value');
    const otsuApplyBtn = document.getElementById('otsu-apply');
    const otsuDownloadBtn = document.getElementById('otsu-download');
    const showStepsOtsu = document.getElementById('show-steps-otsu');
    
    const otsuOriginalCanvas = document.getElementById('otsu-original');
    const otsuNoisyCanvas = document.getElementById('otsu-noisy');
    const otsuHistogramCanvas = document.getElementById('otsu-histogram');
    const otsuResultCanvas = document.getElementById('otsu-result');
    const otsuThresholdValue = document.getElementById('otsu-threshold-value');
    const otsuSteps = document.getElementById('otsu-steps');
    
    // Original image data
    let originalImage = null;
    let noisyImage = null;
    let otsuThreshold = 0;
    let otsuSegmentedImage = null;
    
    // Canvas contexts
    const otsuOriginalCtx = otsuOriginalCanvas.getContext('2d');
    const otsuNoisyCtx = otsuNoisyCanvas.getContext('2d');
    const otsuHistogramCtx = otsuHistogramCanvas.getContext('2d');
    const otsuResultCtx = otsuResultCanvas.getContext('2d');
    
    // Update noise slider value display
    noiseSlider.addEventListener('input', () => {
        noiseValue.textContent = noiseSlider.value;
    });
    
    // Handle file upload for Otsu
    otsuFileUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            otsuFileName.textContent = file.name;
            loadImage(file, otsuOriginalCanvas, otsuOriginalCtx).then(img => {
                originalImage = img;
                otsuApplyBtn.disabled = false;
            });
        }
    });
    
    // Apply Otsu's algorithm
    otsuApplyBtn.addEventListener('click', function() {
        if (!originalImage) return;
        
        // Reset steps highlighting
        resetStepsHighlighting(otsuSteps);
        
        // Show progress of algorithm if steps are enabled
        if (showStepsOtsu.checked) {
            runOtsuWithSteps();
        } else {
            runOtsuAlgorithm();
        }
    });
    
    // Handle download for Otsu result
    otsuDownloadBtn.addEventListener('click', function() {
        if (!otsuSegmentedImage) return;
        downloadCanvas(otsuResultCanvas, 'otsu_segmentation_result.png');
    });
    
    // Region Growing Algorithm Implementation
    const regionFileUpload = document.getElementById('region-file-upload');
    const regionFileName = document.getElementById('region-file-name');
    const thresholdSlider = document.getElementById('threshold-slider');
    const thresholdValue = document.getElementById('threshold-value');
    const regionApplyBtn = document.getElementById('region-apply');
    const regionDownloadBtn = document.getElementById('region-download');
    const clearSeedsBtn = document.getElementById('clear-seeds');
    const showStepsRegion = document.getElementById('show-steps-region');
    const seedCount = document.getElementById('seed-count');
    
    const regionOriginalCanvas = document.getElementById('region-original');
    const regionSeedsCanvas = document.getElementById('region-seeds');
    const regionProgressCanvas = document.getElementById('region-progress');
    const regionResultCanvas = document.getElementById('region-result');
    
    // Play controls
    const stepBackBtn = document.getElementById('step-back');
    const pausePlayBtn = document.getElementById('pause-play');
    const stepForwardBtn = document.getElementById('step-forward');
    const speedSlider = document.getElementById('speed-slider');
    
    // Region growing variables
    let regionImage = null;
    let seedPoints = [];
    let regionGrowingResult = null;
    let regionGrowingSteps = [];
    let currentStepIndex = 0;
    let isPlaying = false;
    let playInterval = null;
    
    // Canvas contexts
    const regionOriginalCtx = regionOriginalCanvas.getContext('2d');
    const regionSeedsCtx = regionSeedsCanvas.getContext('2d');
    const regionProgressCtx = regionProgressCanvas.getContext('2d');
    const regionResultCtx = regionResultCanvas.getContext('2d');
    
    // Update threshold slider value display
    thresholdSlider.addEventListener('input', () => {
        thresholdValue.textContent = thresholdSlider.value;
    });
    
    // Handle file upload for Region Growing
    regionFileUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            regionFileName.textContent = file.name;
            loadImage(file, regionOriginalCanvas, regionOriginalCtx).then(img => {
                regionImage = img;
                clearSeeds();
                setupSeedSelection();
            });
        }
    });
    
    // Clear seed points
    function clearSeeds() {
        seedPoints = [];
        updateSeedCount();
        if (regionImage) {
            drawImageToCanvas(regionImage.data, regionSeedsCanvas, regionSeedsCtx);
        } else {
            clearCanvas(regionSeedsCtx, regionSeedsCanvas);
        }
    }
    
    clearSeedsBtn.addEventListener('click', clearSeeds);
    
    // Update the seed count display
    function updateSeedCount() {
        seedCount.textContent = seedPoints.length.toString();
        regionApplyBtn.disabled = seedPoints.length === 0;
    }
    
    // Setup seed point selection on original image
    function setupSeedSelection() {
        regionOriginalCanvas.onclick = function(e) {
            if (!regionImage) return;
            
            const rect = regionOriginalCanvas.getBoundingClientRect();
            const scaleX = regionOriginalCanvas.width / rect.width;
            const scaleY = regionOriginalCanvas.height / rect.height;
            
            const x = Math.floor((e.clientX - rect.left) * scaleX);
            const y = Math.floor((e.clientY - rect.top) * scaleY);
            
            // Add the seed point
            seedPoints.push({x, y});
            updateSeedCount();
            
            // Draw on the seeds canvas
            drawSeedPoints();
        };
    }
    
    // Draw seed points on the seeds canvas
    function drawSeedPoints() {
        // Draw the original image first
        drawImageToCanvas(regionImage.data, regionSeedsCanvas, regionSeedsCtx);
        
        // Then draw the seed points
        regionSeedsCtx.fillStyle = 'red';
        seedPoints.forEach(point => {
            regionSeedsCtx.beginPath();
            regionSeedsCtx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
            regionSeedsCtx.fill();
        });
    }
    
    // Apply Region Growing algorithm
    regionApplyBtn.addEventListener('click', function() {
        if (!regionImage || seedPoints.length === 0) return;
        
        const threshold = parseInt(thresholdSlider.value);
        
        // Reset controls
        currentStepIndex = 0;
        isPlaying = false;
        pausePlayBtn.innerHTML = '<i class="fas fa-play"></i>';
        clearInterval(playInterval);
        
        // Run the algorithm
        if (showStepsRegion.checked) {
            runRegionGrowingWithSteps(threshold);
        } else {
            runRegionGrowingAlgorithm(threshold);
        }
    });
    
    // Play/Pause controls for region growing visualization
    pausePlayBtn.addEventListener('click', function() {
        if (!regionGrowingSteps.length) return;
        
        isPlaying = !isPlaying;
        
        if (isPlaying) {
            pausePlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
            playRegionGrowingSteps();
        } else {
            pausePlayBtn.innerHTML = '<i class="fas fa-play"></i>';
            clearInterval(playInterval);
        }
    });
    
    stepBackBtn.addEventListener('click', function() {
        if (!regionGrowingSteps.length || currentStepIndex <= 0) return;
        
        isPlaying = false;
        pausePlayBtn.innerHTML = '<i class="fas fa-play"></i>';
        clearInterval(playInterval);
        
        currentStepIndex--;
        updateRegionGrowingVisualization();
    });
    
    stepForwardBtn.addEventListener('click', function() {
        if (!regionGrowingSteps.length || currentStepIndex >= regionGrowingSteps.length - 1) return;
        
        isPlaying = false;
        pausePlayBtn.innerHTML = '<i class="fas fa-play"></i>';
        clearInterval(playInterval);
        
        currentStepIndex++;
        updateRegionGrowingVisualization();
    });
    
    // Handle download for Region Growing result
    regionDownloadBtn.addEventListener('click', function() {
        if (!regionGrowingResult) return;
        downloadCanvas(regionResultCanvas, 'region_growing_result.png');
    });
    
    // Load image from file input
    function loadImage(file, canvas, context) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    // Set canvas size to match image
                    canvas.width = img.width;
                    canvas.height = img.height;
                    context.drawImage(img, 0, 0);
                    
                    // Get image data
                    const imageData = context.getImageData(0, 0, img.width, img.height);
                    
                    // Convert to grayscale if needed
                    const grayscaleData = convertToGrayscale(imageData);
                    context.putImageData(grayscaleData, 0, 0);
                    
                    resolve({
                        element: img,
                        data: grayscaleData,
                        width: img.width,
                        height: img.height
                    });
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });
    }
    
    // Convert image data to grayscale
    function convertToGrayscale(imageData) {
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = avg;     // R
            data[i + 1] = avg; // G
            data[i + 2] = avg; // B
        }
        return imageData;
    }
    
    // Add Gaussian noise to an image
    function addGaussianNoise(imageData, mean, sigma) {
        const result = new ImageData(
            new Uint8ClampedArray(imageData.data), 
            imageData.width, 
            imageData.height
        );
        const data = result.data;
        
        for (let i = 0; i < data.length; i += 4) {
            // Generate random Gaussian noise
            const noise = gaussianRandom(mean, sigma);
            
            // Add noise to each channel
            data[i] = Math.min(255, Math.max(0, data[i] + noise)); // R
            data[i + 1] = data[i]; // G
            data[i + 2] = data[i]; // B
        }
        
        return result;
    }
    
    // Generate Gaussian random number using Box-Muller transform
    function gaussianRandom(mean, std) {
        const u1 = Math.random();
        const u2 = Math.random();
        const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
        return z0 * std + mean;
    }
    
    // Calculate histogram from image data
    function calculateHistogram(imageData) {
        const data = imageData.data;
        const histogram = new Array(256).fill(0);
        
        for (let i = 0; i < data.length; i += 4) {
            histogram[data[i]]++;
        }
        
        return histogram;
    }
    
    // Otsu's threshold calculation
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
    
    // Apply threshold to image
    function applyThreshold(imageData, threshold) {
        const result = new ImageData(
            new Uint8ClampedArray(imageData.data), 
            imageData.width, 
            imageData.height
        );
        const data = result.data;
        
        for (let i = 0; i < data.length; i += 4) {
            const value = data[i] > threshold ? 255 : 0;
            data[i] = value;     // R
            data[i + 1] = value; // G
            data[i + 2] = value; // B
        }
        
        return result;
    }
    
    // Run Otsu's algorithm and show results
    function runOtsuAlgorithm() {
        // 1. Add Gaussian noise
        const noiseSigma = parseInt(noiseSlider.value);
        noisyImage = addGaussianNoise(originalImage.data, 0, noiseSigma);
        drawImageToCanvas(noisyImage, otsuNoisyCanvas, otsuNoisyCtx);
        
        // 2. Calculate histogram
        const histogram = calculateHistogram(noisyImage);
        drawHistogram(histogram, otsuHistogramCanvas, otsuHistogramCtx);
        
        // 3. Calculate Otsu's threshold
        const pixelCount = noisyImage.width * noisyImage.height;
        otsuThreshold = calculateOtsuThreshold(histogram, pixelCount);
        otsuThresholdValue.textContent = `Threshold: ${otsuThreshold}`;
        
        // Draw threshold on histogram
        drawThresholdLine(otsuThreshold, otsuHistogramCanvas, otsuHistogramCtx);
        
        // 4. Apply threshold and show result
        otsuSegmentedImage = applyThreshold(noisyImage, otsuThreshold);
        drawImageToCanvas(otsuSegmentedImage, otsuResultCanvas, otsuResultCtx);
        
        // Enable download button
        otsuDownloadBtn.disabled = false;
    }
    
    // Run Otsu's algorithm with step-by-step visualization
    function runOtsuWithSteps() {
        // Reset UI
        clearCanvas(otsuNoisyCtx, otsuNoisyCanvas);
        clearCanvas(otsuHistogramCtx, otsuHistogramCanvas);
        clearCanvas(otsuResultCtx, otsuResultCanvas);
        otsuThresholdValue.textContent = 'Threshold: -';
        otsuDownloadBtn.disabled = true;
        
        // Step 1: Load grayscale image
        highlightStep(otsuSteps, 0);
        setTimeout(() => {
            // Step 2: Add Gaussian noise
            highlightStep(otsuSteps, 1);
            const noiseSigma = parseInt(noiseSlider.value);
            noisyImage = addGaussianNoise(originalImage.data, 0, noiseSigma);
            drawImageToCanvas(noisyImage, otsuNoisyCanvas, otsuNoisyCtx);
            
            setTimeout(() => {
                // Step 3: Calculate histogram
                highlightStep(otsuSteps, 2);
                const histogram = calculateHistogram(noisyImage);
                drawHistogram(histogram, otsuHistogramCanvas, otsuHistogramCtx);
                
                setTimeout(() => {
                    // Step 4: Calculate threshold
                    highlightStep(otsuSteps, 3);
                    
                    setTimeout(() => {
                        // Step 5: Find optimal threshold
                        highlightStep(otsuSteps, 4);
                        const pixelCount = noisyImage.width * noisyImage.height;
                        otsuThreshold = calculateOtsuThreshold(histogram, pixelCount);
                        otsuThresholdValue.textContent = `Threshold: ${otsuThreshold}`;
                        drawThresholdLine(otsuThreshold, otsuHistogramCanvas, otsuHistogramCtx);
                        
                        setTimeout(() => {
                            // Step 6: Apply threshold
                            highlightStep(otsuSteps, 5);
                            otsuSegmentedImage = applyThreshold(noisyImage, otsuThreshold);
                            drawImageToCanvas(otsuSegmentedImage, otsuResultCanvas, otsuResultCtx);
                            
                            // Enable download button
                            otsuDownloadBtn.disabled = false;
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }
    
    // Region Growing algorithm implementation
    function runRegionGrowingAlgorithm(threshold) {
        // Get image data
        const width = regionImage.data.width;
        const height = regionImage.data.height;
        const imageData = regionImage.data;
        
        // Create a result canvas of the same size
        const resultData = new ImageData(
            new Uint8ClampedArray(imageData.data), 
            width, 
            height
        );
        
        // Initialize result with zeros (black)
        for (let i = 0; i < resultData.data.length; i += 4) {
            resultData.data[i] = 0;     // R
            resultData.data[i + 1] = 0; // G
            resultData.data[i + 2] = 0; // B
            resultData.data[i + 3] = 255; // Alpha
        }
        
        // Calculate mean intensity of seed points
        let meanIntensity = 0;
        seedPoints.forEach(point => {
            const index = (point.y * width + point.x) * 4;
            meanIntensity += imageData.data[index];
        });
        meanIntensity /= seedPoints.length;
        
        // Create a queue for BFS
        const queue = [...seedPoints];
        
        // Create a visited array
        const visited = new Array(width * height).fill(false);
        
        // BFS to grow the region
        while (queue.length > 0) {
            const point = queue.shift();
            const x = point.x;
            const y = point.y;
            
            // Check if this point is already visited
            const index = y * width + x;
            if (visited[index]) continue;
            
            // Mark as visited
            visited[index] = true;
            
            // Get intensity of current pixel
            const pixelIndex = index * 4;
            const intensity = imageData.data[pixelIndex];
            
            // Check if it's within threshold
            if (Math.abs(intensity - meanIntensity) <= threshold) {
                // Add to result (white)
                resultData.data[pixelIndex] = 255;     // R
                resultData.data[pixelIndex + 1] = 255; // G
                resultData.data[pixelIndex + 2] = 255; // B
                
                // Check neighbors (8-connected)
                const neighbors = [
                    {x: x-1, y: y-1}, {x: x, y: y-1}, {x: x+1, y: y-1},
                    {x: x-1, y: y},                    {x: x+1, y: y},
                    {x: x-1, y: y+1}, {x: x, y: y+1}, {x: x+1, y: y+1}
                ];
                
                neighbors.forEach(neighbor => {
                    const nx = neighbor.x;
                    const ny = neighbor.y;
                    
                    // Check bounds
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                        const neighborIndex = ny * width + nx;
                        if (!visited[neighborIndex]) {
                            queue.push({x: nx, y: ny});
                        }
                    }
                });
            }
        }
        
        // Save the result and display
        regionGrowingResult = resultData;
        drawImageToCanvas(resultData, regionResultCanvas, regionResultCtx);
        regionDownloadBtn.disabled = false;
    }
    
    // Run Region Growing with steps visualization
    function runRegionGrowingWithSteps(threshold) {
        // Reset UI
        clearCanvas(regionProgressCtx, regionProgressCanvas);
        clearCanvas(regionResultCtx, regionResultCanvas);
        regionDownloadBtn.disabled = true;
        
        // Get image data
        const width = regionImage.data.width;
        const height = regionImage.data.height;
        const imageData = regionImage.data;
        
        // Create a result canvas of the same size
        const resultData = new ImageData(
            new Uint8ClampedArray(imageData.data), 
            width, 
            height
        );
        
        // Initialize result with zeros (black)
        for (let i = 0; i < resultData.data.length; i += 4) {
            resultData.data[i] = 0;     // R
            resultData.data[i + 1] = 0; // G
            resultData.data[i + 2] = 0; // B
            resultData.data[i + 3] = 255; // Alpha
        }
        
        // Calculate mean intensity of seed points
        let meanIntensity = 0;
        seedPoints.forEach(point => {
            const index = (point.y * width + point.x) * 4;
            meanIntensity += imageData.data[index];
        });
        meanIntensity /= seedPoints.length;
        
        // Create a queue for BFS
        const queue = [...seedPoints];
        
        // Create a visited array
        const visited = new Array(width * height).fill(false);
        
        // Initialize steps for visualization
        regionGrowingSteps = [];
        
        // Add initial step with seed points
        const initialStep = new ImageData(
            new Uint8ClampedArray(resultData.data), 
            width, 
            height
        );
        
        // Mark seed points in red
        seedPoints.forEach(point => {
            const index = (point.y * width + point.x) * 4;
            initialStep.data[index] = 255;     // R
            initialStep.data[index + 1] = 0;   // G
            initialStep.data[index + 2] = 0;   // B
        });
        
        regionGrowingSteps.push(initialStep);
        
        // BFS to grow the region
        const pixelsPerStep = 100; // Number of pixels to process per step
        let pixelsProcessed = 0;
        let currentResult = new ImageData(
            new Uint8ClampedArray(initialStep.data), 
            width, 
            height
        );
        
        while (queue.length > 0) {
            const point = queue.shift();
            const x = point.x;
            const y = point.y;
            
            // Check if this point is already visited
            const index = y * width + x;
            if (visited[index]) continue;
            
            // Mark as visited
            visited[index] = true;
            pixelsProcessed++;
            
            // Get intensity of current pixel
            const pixelIndex = index * 4;
            const intensity = imageData.data[pixelIndex];
            
            // Check if it's within threshold
            if (Math.abs(intensity - meanIntensity) <= threshold) {
                // Add to result (white)
                currentResult.data[pixelIndex] = 255;     // R
                currentResult.data[pixelIndex + 1] = 255; // G
                currentResult.data[pixelIndex + 2] = 255; // B
                
                // Check neighbors (8-connected)
                const neighbors = [
                    {x: x-1, y: y-1}, {x: x, y: y-1}, {x: x+1, y: y-1},
                    {x: x-1, y: y},                    {x: x+1, y: y},
                    {x: x-1, y: y+1}, {x: x, y: y+1}, {x: x+1, y: y+1}
                ];
                
                neighbors.forEach(neighbor => {
                    const nx = neighbor.x;
                    const ny = neighbor.y;
                    
                    // Check bounds
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                        const neighborIndex = ny * width + nx;
                        if (!visited[neighborIndex]) {
                            queue.push({x: nx, y: ny});
                        }
                    }
                });
            }
            
            // Create a step after processing pixelsPerStep pixels
            if (pixelsProcessed % pixelsPerStep === 0 || queue.length === 0) {
                regionGrowingSteps.push(new ImageData(
                    new Uint8ClampedArray(currentResult.data), 
                    width, 
                    height
                ));
            }
        }
        
        // Save the final result
        regionGrowingResult = regionGrowingSteps[regionGrowingSteps.length - 1];
        
        // Set up controls for the visualization
        currentStepIndex = 0;
        stepBackBtn.disabled = true;
        stepForwardBtn.disabled = regionGrowingSteps.length <= 1;
        
        // Draw the first step
        drawImageToCanvas(regionGrowingSteps[0], regionProgressCanvas, regionProgressCtx);
        
        // Start playing if there are steps
        if (regionGrowingSteps.length > 1) {
            isPlaying = true;
            pausePlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
            playRegionGrowingSteps();
        } else {
            drawImageToCanvas(regionGrowingResult, regionResultCanvas, regionResultCtx);
            regionDownloadBtn.disabled = false;
        }
    }
    
    // Play the region growing steps animation
    function playRegionGrowingSteps() {
        clearInterval(playInterval);
        
        const speed = 6 - parseInt(speedSlider.value); // Invert for intuitive speed control
        playInterval = setInterval(() => {
            if (currentStepIndex < regionGrowingSteps.length - 1) {
                currentStepIndex++;
                updateRegionGrowingVisualization();
            } else {
                // We reached the end
                isPlaying = false;
                pausePlayBtn.innerHTML = '<i class="fas fa-play"></i>';
                clearInterval(playInterval);
                
                // Display final result and enable download
                drawImageToCanvas(regionGrowingResult, regionResultCanvas, regionResultCtx);
                regionDownloadBtn.disabled = false;
            }
        }, speed * 200);
    }
    
    // Update the region growing visualization based on current step
    function updateRegionGrowingVisualization() {
        // Update step controls
        stepBackBtn.disabled = currentStepIndex <= 0;
        stepForwardBtn.disabled = currentStepIndex >= regionGrowingSteps.length - 1;
        
        // Draw current step
        drawImageToCanvas(regionGrowingSteps[currentStepIndex], regionProgressCanvas, regionProgressCtx);
        
        // If we're at the last step, show the result
        if (currentStepIndex === regionGrowingSteps.length - 1) {
            drawImageToCanvas(regionGrowingResult, regionResultCanvas, regionResultCtx);
            regionDownloadBtn.disabled = false;
        }
    }
    
    // Draw histogram on canvas
    function drawHistogram(histogram, canvas, context) {
        // Clear canvas first
        clearCanvas(context, canvas);
        
        // Find the maximum value
        const max = Math.max(...histogram);
        
        // Set canvas dimensions if needed
        const width = canvas.width || 256;
        const height = canvas.height || 150;
        
        // Draw the histogram
        context.fillStyle = 'rgba(30, 144, 255, 0.7)';
        
        for (let i = 0; i < histogram.length; i++) {
            const barHeight = (histogram[i] / max) * height;
            context.fillRect(
                i, // x
                height - barHeight, // y (start from bottom)
                1, // width
                barHeight // height
            );
        }
        
        // Draw axes
        context.strokeStyle = '#333';
        context.beginPath();
        context.moveTo(0, height);
        context.lineTo(width, height);
        context.stroke();
    }
    
    // Draw threshold line on histogram
    function drawThresholdLine(threshold, canvas, context) {
        const height = canvas.height || 150;
        
        context.strokeStyle = 'red';
        context.lineWidth = 2;
        context.setLineDash([5, 3]);
        context.beginPath();
        context.moveTo(threshold, 0);
        context.lineTo(threshold, height);
        context.stroke();
        context.setLineDash([]);
    }
    
    // Draw an image data object to a canvas
    function drawImageToCanvas(imageData, canvas, context) {
        // Set canvas dimensions if needed
        if (canvas.width !== imageData.width || canvas.height !== imageData.height) {
            canvas.width = imageData.width;
            canvas.height = imageData.height;
        }
        
        context.putImageData(imageData, 0, 0);
    }
    
    // Clear a canvas
    function clearCanvas(context, canvas) {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    // Download canvas as image
    function downloadCanvas(canvas, filename) {
        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }
    
    // Highlight a specific step in the algorithm explanation
    function highlightStep(stepsElement, stepIndex) {
        // Remove highlighting from all steps
        const steps = stepsElement.querySelectorAll('li');
        steps.forEach(step => step.classList.remove('active-step'));
        
        // Add highlighting to current step
        if (steps[stepIndex]) {
            steps[stepIndex].classList.add('active-step');
            steps[stepIndex].scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    }
    
    // Reset step highlighting
    function resetStepsHighlighting(stepsElement) {
        const steps = stepsElement.querySelectorAll('li');
        steps.forEach(step => step.classList.remove('active-step'));
    }
});
