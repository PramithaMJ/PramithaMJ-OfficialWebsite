# Project Routing Setup Guide

## Overview
This setup allows you to access all your projects through your custom domain `pramithamj.live` with clean URLs:

- `https://pramithamj.live/ballerina-lint/`
- `https://pramithamj.live/cpu-scheduling-visualizer/`
- `https://pramithamj.live/ms-petclinic/`
- `https://pramithamj.live/gonexus/`
- `https://pramithamj.live/image-segmantion/`
- `https://pramithamj.live/projects.html` (Projects overview page)

## Steps to Deploy

### 1. Repository Setup
For each project repository, you need to:

#### For Ballerina Lint:
1. Go to your `ballerina-lint` repository
2. Copy all files from the `website-deployment` branch
3. Create a new folder in your main website repo: `/ballerina-lint/`
4. Add the actual project files there (or keep the landing page that redirects)

#### For CPU Scheduling Visualizer:
1. Copy the deployment files from your `cpu-scheduling-visualizer` repo
2. Place them in `/cpu-scheduling-visualizer/` folder
3. Update any relative paths if needed

#### For MS Pet Clinic:
1. Copy files from the `website` branch of `ms-petclinic` repo
2. Place them in `/ms-petclinic/` folder
3. Update configuration files for the new domain

### 2. GitHub Pages Configuration
1. Push all changes to your main website repository
2. Ensure GitHub Pages is enabled and pointing to the main branch
3. The CNAME file should contain: `pramithamj.live`

### 3. DNS Configuration
Make sure your domain DNS is properly configured:
- A record pointing to GitHub Pages IP addresses
- CNAME record for www subdomain

### 4. Testing
After deployment, test all URLs:
- Main site: https://pramithamj.live/
- Projects page: https://pramithamj.live/projects.html
- Each project endpoint

## Current Structure Created:
```
/
├── index.html (your main React app)
├── projects.html (projects overview)
├── ballerina-lint/
│   └── index.html (landing page with redirect)
├── cpu-scheduling-visualizer/
│   └── index.html (landing page with redirect)
├── ms-petclinic/
│   └── index.html (landing page with redirect)
├── gonexus/
│   └── index.html (VS Code extension info)
└── image-segmantion/
    └── index.html (already exists)
```

## Next Steps:
1. Replace the landing pages with actual project files
2. Update your main website to include a "Projects" link
3. Test all routes work correctly
4. Update README files in each project repo with new URLs

## Notes:
- Each landing page currently redirects to the GitHub Pages deployment
- You can replace these with the actual project files
- The GoNexus page is informational since it's a VS Code extension
- All pages include navigation back to your main website
