# TODO: Fix Image Display Issue on GitHub Pages

- [x] Update base path in vite.config.js to correct repository name
- [x] Change imageUrl paths in src/data/projectsData.js to relative paths (remove leading "/")
- [ ] Test locally and on GitHub Pages to verify image display

# Deployment Validation Checklist for Vercel

- [ ] Run `npm install` to ensure all dependencies are installed
- [ ] Run `npm run lint` to check for linting errors or warnings
- [ ] Run `npm run build` to create a production build without errors
- [ ] Run `npm run preview` to locally preview the production build and verify UI functionality
- [ ] Verify image paths and URLs are loading correctly in the preview
- [ ] Check console logs in the browser for any runtime errors or warnings
- [ ] Review vercel.json to confirm build and route configurations
- [ ] Confirm vite.config.js base path is set correctly ("/" for root deploy)
- [ ] Confirm README.md or documentation is updated with deployment instructions if applicable
- [ ] Deploy to Vercel and verify deployment logs for build success
- [ ] Test deployed site for UI correctness, image loading, navigation, and client-side routing
- [ ] Monitor analytics or error tracking tools (if configured) after deployment

# Troubleshooting

- If images do not load, verify relative paths in src/data/projectsData.js
- If build fails, check for missing or incompatible dependencies
- For routing issues, ensure vercel.json rewrites all paths to /index.html for SPA
- Validate environment variables if used in the project setup

This checklist ensures the project is ready and validated for deployment on Vercel.
