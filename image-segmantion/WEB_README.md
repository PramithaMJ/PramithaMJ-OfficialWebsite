# Image Segmentation Web Interface

This directory contains a web interface for the Image Segmentation algorithms project, deployed at `https://pramithamj.live/image-segmantion`.

## Project Overview

This web interface showcases two fundamental computer vision algorithms implemented as part of the EC-7212 Computer Vision coursework:

1. **Otsu's Thresholding Algorithm** - Automatic image thresholding with Gaussian noise simulation
2. **Region Growing Segmentation** - Pixel-based segmentation with seed point selection

## Web Interface Files

- `index.html` - Main webpage with algorithm demonstrations and documentation
- `styles.css` - Responsive CSS styling with modern design
- `script.js` - Interactive JavaScript features (image zoom, animations, copy functionality)

## Features

### Visual Demonstrations
- Side-by-side comparison of input and output images
- Interactive image viewing with click-to-zoom
- Responsive design for all device sizes

### Interactive Elements
- Smooth scrolling navigation
- Hover animations on cards and elements
- Code snippet copy-to-clipboard functionality
- Scroll progress indicator
- Typing animation for the title

### Technical Documentation
- Complete algorithm explanations
- Implementation details and code snippets
- Dependencies and setup instructions
- Project structure overview
- Direct links to source code repository

## Algorithm Source Code

The actual Python implementations are located in the `src/` directory:
- `src/task1_otsu_algorithm.py` - Otsu's thresholding implementation
- `src/task2_region_glowing.py` - Region growing implementation

## Deployment

This interface is deployed as part of the GitHub Pages site and accessible at:
**https://pramithamj.live/image-segmantion**

### Deployment Process

1. Added as Git subtree from source repository
2. Created responsive web interface
3. Committed to `gh-pages` branch
4. Automatically deployed via GitHub Pages

## Development

To update the web interface:

1. Make changes to the HTML/CSS/JS files
2. Test locally by opening `index.html` in a browser
3. Commit changes to the `gh-pages` branch
4. Push to deploy

## Source Repository

Original algorithms repository: [EC-7212-Take-Home-Assignment-02](https://github.com/PramithaMJ/EC-7212-Take-Home-Assignment-02)

## Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive features and animations
- **Google Fonts** - Typography (Karla, Ubuntu Mono)

### Computer Vision Algorithms
- **Python 3.x** - Core programming language
- **OpenCV** - Computer vision operations
- **NumPy** - Numerical computations
- **Matplotlib** - Visualization and plotting

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

The web interface is optimized for:
- Fast loading times
- Responsive design
- Smooth animations
- Mobile compatibility
- SEO-friendly structure

---

*Part of PramithaMJ's Computer Vision Portfolio*
