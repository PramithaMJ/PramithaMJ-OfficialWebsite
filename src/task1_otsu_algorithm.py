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
    
    hist_values = hist.flatten()    
    plt.bar(range(256), hist_values, width=1, color='#1f77b4', alpha=1.0)
    plt.axvline(x=threshold, color='r', linestyle='--', 
                label=f'Threshold={threshold}')
    
    legend = plt.legend(fancybox=True, framealpha=1, loc='upper left')
    legend.get_frame().set_edgecolor('black')
    
    plt.xlabel('Pixel Value')
    plt.ylabel('Frequency')
    plt.xlim([-5, 255])
    
    plt.subplot(2, 2, 4)
    plt.title('Otsu Segmentation')
    plt.imshow(segmented_img, cmap='gray', vmin=0, vmax=255)
    
    plt.tight_layout()
    plt.savefig('../output images/task1_otsu_results.png')
    plt.show()

if __name__ == "__main__":
    main()