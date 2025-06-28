# Computer Vision Assignment 2

This repository contains the implementation of two image segmentation algorithms:

1. **Task 1**: Otsu's Thresholding Algorithm
2. **Task 2**: Region Growing Segmentation

## Project Structure

```
Computer Vision Assignment 2/
├── input images/
│   ├── task1_input.png       # Input image for Otsu's algorithm
│   └── task2_input.png       # Input image for Region Growing
├── output images/            # Folder where results are saved
│   ├── task1_otsu_results.png
│   └── task2_region_growing_results.png
├── src/
│   ├── task1_otsu_algorithm.py   # Implementation of Otsu's algorithm
│   └── task2_region_glowing.py   # Implementation of Region Growing
└── README.md
```

## Requirements

- Python 3.x
- OpenCV (cv2)
- NumPy
- Matplotlib

## Setup Instructions

1. Ensure you have Python 3.x installed
2. Install required packages:

```bash
pip3 install numpy opencv-python matplotlib
```

## How to Run the Tasks

### Task 1: Otsu's Thresholding Algorithm

This algorithm implements Otsu's method for automatic image thresholding. It adds Gaussian noise to the original image and finds an optimal threshold to segment the image.

To run Task 1:

```bash
cd src/
python3 task1_otsu_algorithm.py
```

Output will be saved to `../output images/task1_otsu_results.png`

### Task 2: Region Growing Segmentation

This algorithm implements region growing for image segmentation. It starts from seed points and grows regions by including neighboring pixels with similar intensity values.

To run Task 2:

```bash
cd src/
python3 task2_region_glowing.py
```

Output will be saved to `../output images/task2_region_growing_results.png`
