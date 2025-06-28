# Computer Vision Assignment 2 Submission

**Name**: Pramitha Jayasooriya  
**Date**: June 27, 2025

## GitHub Repository

Repository URL: [https://github.com/pramithajayasooriya/computer-vision-assignment-2](https://github.com/pramithajayasooriya/computer-vision-assignment-2)

## Tasks Overview

This assignment implements two image segmentation algorithms:

1. **Task 1**: Otsu's Thresholding Algorithm with Gaussian Noise
2. **Task 2**: Region Growing Segmentation

## Task 1: Otsu's Thresholding Algorithm

### Input Image
<div align="center">
    <img src="./input%20images/task1_input.png" alt="Task 1 Input Image" width="500"/>
    <p><i>Fig 1: Original input image with two objects (letter P and star shape) on gray background</i></p>
</div>

### Output Results
<div align="center">
    <img src="./output%20images/task1_otsu_results.png" alt="Task 1 Results" width="700"/>
    <p><i>Fig 2: Results showing original image, noisy image, histogram with Otsu threshold, and segmentation result</i></p>
</div>

## Task 2: Region Growing Segmentation

### Input Image
<div align="center">
    <img src="./input%20images/task2_input.png" alt="Task 2 Input Image" width="500"/>
    <p><i>Fig 3: CT scan image used for region growing segmentation</i></p>
</div>

### Output Results
<div align="center">
    <img src="./output%20images/task2_region_growing_results.png" alt="Task 2 Results" width="700"/>
    <p><i>Fig 4: Results showing original image, seed points, and region growing segmentation result</i></p>
</div>

## Implementation Details

### Task 1: Otsu's Thresholding Algorithm

```python
import numpy as np
import cv2
import matplotlib.pyplot as plt

def add_gaussian_noise(img, mean=0, sigma=15):
    img_float = img.astype(float)
    noise = np.random.normal(mean, sigma, img.shape)
    noisy_img = img_float + noise    
    noisy_img = np.clip(noisy_img, 0, 255)    
    return noisy_img.astype(np.uint8)

def calculate_histogram(img):
    hist = np.zeros(256)
    for i in range(img.shape[0]):
        for j in range(img.shape[1]):
            hist[img[i, j]] += 1
    
    total_pixels = img.shape[0] * img.shape[1]
    hist = hist / total_pixels
    
    return hist

def otsu_threshold(img):
    hist = calculate_histogram(img)
    
    max_variance = 0
    optimal_threshold = 0
    
    for threshold in range(1, 256):
        w0 = np.sum(hist[:threshold])
        if w0 == 0:
            continue
            
        w1 = 1 - w0
        if w1 == 0:
            continue
        
        mean0 = np.sum(np.arange(threshold) * hist[:threshold]) / w0 if w0 > 0 else 0
        mean1 = np.sum(np.arange(threshold, 256) * hist[threshold:]) / w1 if w1 > 0 else 0
        
        variance = w0 * w1 * ((mean0 - mean1) ** 2)
        
        if variance > max_variance:
            max_variance = variance
            optimal_threshold = threshold
    
    return optimal_threshold

def apply_threshold(img, threshold):
    return (img > threshold).astype(np.uint8) * 255
```

#### Algorithm Description

The Otsu algorithm works by finding the threshold that maximizes between-class variance:

1. Calculate histogram of pixel intensities
2. For each possible threshold (1-255):
   - Calculate class probabilities (background and foreground)
   - Calculate class means
   - Calculate between-class variance
3. Select the threshold that maximizes between-class variance
4. Apply the threshold to segment the image

### Task 2: Region Growing Segmentation

```python
import cv2
import numpy as np
import matplotlib.pyplot as plt
from collections import deque

def region_growing(image, seeds, threshold=5):
    height, width = image.shape
    segmented = np.zeros_like(image, dtype=np.uint8)
    visited = np.zeros_like(image, dtype=bool)

    queue = deque(seeds)
    
    seed_values = [image[y, x] for x, y in seeds]
    mean_value = np.mean(seed_values)
    
    print(f"Starting region growing with {len(seeds)} seed points")
    print(f"Seed point mean intensity: {mean_value:.2f}, threshold: {threshold}")

    while queue:
        x, y = queue.popleft()
        if visited[y, x]:
            continue
        
        visited[y, x] = True
        current_value = image[y, x]
        
        if abs(int(current_value) - int(mean_value)) <= threshold:
            segmented[y, x] = 255

            for dx in [-1, 0, 1]:
                for dy in [-1, 0, 1]:
                    nx, ny = x + dx, y + dy
                    if (0 <= nx < width) and (0 <= ny < height) and not visited[ny, nx]:
                        queue.append((nx, ny))

    return segmented
```

#### Algorithm Description

Region Growing is a segmentation technique that starts from seed points and grows regions by including neighboring pixels based on similarity:

1. Start with predefined seed points
2. Calculate mean intensity of seed points
3. Use breadth-first search to explore neighboring pixels
4. Add pixels to the region if their intensity is within a threshold of the region mean
5. Continue until no more pixels meet the criteria

## Conclusion

Both segmentation algorithms were successfully implemented and tested on the provided images:

1. **Otsu's Algorithm**: Provides an automatic, optimal threshold for image segmentation and is effective even in the presence of Gaussian noise. The algorithm successfully segments the dark and light regions of the image.

2. **Region Growing**: Provides a more controlled segmentation approach by starting from specific seed points and growing regions based on pixel similarity. This method is particularly useful for segmenting specific regions of interest within an image.

Each method has its strengths depending on the segmentation task. Otsu's method is better suited for global thresholding, while region growing is more effective for segmenting specific regions of interest.

## References

1. Otsu, N. (1979). A threshold selection method from gray-level histograms. IEEE transactions on systems, man, and cybernetics, 9(1), 62-66.

2. Adams, R., & Bischof, L. (1994). Seeded region growing. IEEE Transactions on pattern analysis and machine intelligence, 16(6), 641-647.

### Description
Otsu's algorithm automatically calculates an optimal threshold to separate an image into foreground and background. In this implementation, we add Gaussian noise to the original image and then apply Otsu's algorithm to find the best threshold.

### Code
```python
import numpy as np
import cv2
import matplotlib.pyplot as plt

def add_gaussian_noise(img, mean=0, sigma=15):
    img_float = img.astype(float)
    noise = np.random.normal(mean, sigma, img.shape)
    noisy_img = img_float + noise    
    noisy_img = np.clip(noisy_img, 0, 255)    
    return noisy_img.astype(np.uint8)

def calculate_histogram(img):
    hist = np.zeros(256)
    for i in range(img.shape[0]):
        for j in range(img.shape[1]):
            hist[img[i, j]] += 1
    
    total_pixels = img.shape[0] * img.shape[1]
    hist = hist / total_pixels
    
    return hist

def otsu_threshold(img):
    hist = calculate_histogram(img)
    
    max_variance = 0
    optimal_threshold = 0
    
    for threshold in range(1, 256):
        w0 = np.sum(hist[:threshold])
        if w0 == 0:
            continue
            
        w1 = 1 - w0
        if w1 == 0:
            continue
        
        mean0 = np.sum(np.arange(threshold) * hist[:threshold]) / w0 if w0 > 0 else 0
        mean1 = np.sum(np.arange(threshold, 256) * hist[threshold:]) / w1 if w1 > 0 else 0
        
        variance = w0 * w1 * ((mean0 - mean1) ** 2)
        
        if variance > max_variance:
            max_variance = variance
            optimal_threshold = threshold
    
    return optimal_threshold

def apply_threshold(img, threshold):
    return (img > threshold).astype(np.uint8) * 255

def main():
    original_img = cv2.imread('../input images/task1_input.png', cv2.IMREAD_GRAYSCALE)
    
    if original_img is None:
        print("Error: Could not load ../input images/task1_input.png")
        return
        
    noisy_img = add_gaussian_noise(original_img)
    
    threshold = otsu_threshold(noisy_img)
    print(f"Optimal threshold value: {threshold}")
    
    segmented_img = apply_threshold(noisy_img, threshold)
    
    plt.figure(figsize=(12, 10), facecolor='white')
    plt.subplots_adjust(left=0.05, right=0.95, bottom=0.05, top=0.95, wspace=0.2, hspace=0.3)
    
    plt.subplot(2, 2, 1)
    plt.title('Original Image')
    plt.imshow(original_img, cmap='gray', vmin=0, vmax=255)
    
    plt.subplot(2, 2, 2)
    plt.title('Noisy Image')
    plt.imshow(noisy_img, cmap='gray', vmin=0, vmax=255)
    
    plt.subplot(2, 2, 3)
    plt.title('Histogram of Noisy Image')
    hist = cv2.calcHist([noisy_img], [0], None, [256], [0, 256])
    plt.fill_between(range(256), hist.flatten(), color='#1f77b4', alpha=1.0)
    plt.axvline(x=threshold, color='r', linestyle='--', 
                label=f'Otsu Threshold: {threshold}')
    plt.xlabel('Pixel Value')
    plt.ylabel('Frequency')
    plt.xlim([0, 255])
    plt.legend()
    
    plt.subplot(2, 2, 4)
    plt.title('Otsu Segmentation')
    plt.imshow(segmented_img, cmap='gray', vmin=0, vmax=255)
    
    plt.tight_layout()
    plt.savefig('../output images/task1_otsu_results.png')
    plt.show()

if __name__ == "__main__":
    main()
```

### Results

The Otsu's thresholding algorithm successfully segmented the image with an optimal threshold value of 93. The results show:

- Original image containing two objects with different gray levels
- Noisy version of the image with added Gaussian noise
- Histogram of the noisy image with the optimal threshold marked (red dashed line)
- Segmentation result after applying the threshold

## Task 2: Region Growing Segmentation

### Description
Region growing algorithm segments an image by starting from seed points and growing regions based on pixel similarity. Neighboring pixels with intensities within a threshold of the seed region's mean intensity are included in the segmentation.

### Code
```python
#!/usr/bin/env python3
"""
Computer Vision Assignment 2 - Task 2
Implementing Region Growing Segmentation with task2_input.png image
"""

import cv2
import numpy as np
import matplotlib.pyplot as plt
from collections import deque

def region_growing(image, seeds, threshold=5):
    height, width = image.shape
    segmented = np.zeros_like(image, dtype=np.uint8)
    visited = np.zeros_like(image, dtype=bool)

    queue = deque(seeds)
    
    seed_values = [image[y, x] for x, y in seeds]
    mean_value = np.mean(seed_values)
    
    print(f"Starting region growing with {len(seeds)} seed points")
    print(f"Seed point mean intensity: {mean_value:.2f}, threshold: {threshold}")

    while queue:
        x, y = queue.popleft()
        if visited[y, x]:
            continue
        
        visited[y, x] = True
        current_value = image[y, x]
        
        if abs(int(current_value) - int(mean_value)) <= threshold:
            segmented[y, x] = 255

            for dx in [-1, 0, 1]:
                for dy in [-1, 0, 1]:
                    nx, ny = x + dx, y + dy
                    if (0 <= nx < width) and (0 <= ny < height) and not visited[ny, nx]:
                        queue.append((nx, ny))

    return segmented

print("Reading task2_input.png...")
image_path = "../input images/task2_input.png"
image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    
if image is None:
    raise FileNotFoundError(f"Input image '{image_path}' not found. Please check the file path.")

seed_points = [(250, 530), (300, 550), (320, 530), (280,480), (370, 470), (280, 280)]
threshold = 50

print(f"Using {len(seed_points)} seed points for region growing with threshold {threshold}")
segmented_mask = region_growing(image, seed_points, threshold=threshold)

image_marked = cv2.cvtColor(image, cv2.COLOR_GRAY2BGR)

for x, y in seed_points:
    cv2.circle(image_marked, (x, y), radius=4, color=(0, 0, 255), thickness=-1)  

segmented_pixels = np.sum(segmented_mask > 0)
total_pixels = segmented_mask.size
print(f"Segmentation complete: {segmented_pixels} pixels segmented ({segmented_pixels/total_pixels*100:.2f}% of image)")

plt.figure(figsize=(18, 5))

plt.subplot(1, 3, 1)
plt.title("Original Image")
plt.imshow(image, cmap='gray')

plt.subplot(1, 3, 2)
plt.title("Seed Points")
plt.imshow(cv2.cvtColor(image_marked, cv2.COLOR_BGR2RGB))

plt.subplot(1, 3, 3)
plt.title("Region Growing Segmentation")
plt.imshow(segmented_mask, cmap='gray')

plt.tight_layout()
plt.savefig("../output images/task2_region_growing_results.png", dpi=300)
plt.show()
```

### Results

The region growing algorithm successfully segmented the image using 6 seed points and a threshold of 50. The results show:

- Original image
- Image with seed points marked in red
- Segmentation result showing the region that was grown from the seed points

## Algorithms Explanation

### Otsu's Algorithm
1. Adds Gaussian noise to the input image
2. Calculates the image histogram
3. For each possible threshold (1-255), calculates the between-class variance
4. Selects the threshold that maximizes this variance
5. Applies the threshold to segment the image

### Region Growing
1. Starts from multiple seed points
2. Uses a breadth-first search approach to grow regions
3. Includes pixels that are within a specified threshold of the seed region's mean intensity
4. Outputs a binary mask of the segmented region

---

## Conclusion

Both segmentation algorithms successfully segmented their respective images. Otsu's algorithm automatically determined an optimal threshold without requiring manual input, while region growing required seed points but was able to segment specific regions of interest.

The results demonstrate that both methods are effective for image segmentation, with Otsu's method being more suitable for global thresholding and region growing being better for targeting specific structures in an image.
