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