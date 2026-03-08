# Mihir Sahu Portfolio

This is the source code for my personal portfolio website, built with modern web technologies and a focus on sleek, responsive design.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.
- **Rich Aesthetics**: Custom CSS animations, smooth scrolling, and a dark-mode optimized layout.
- **Vanilla Setup**: Built predominantly with simple HTML, CSS, and vanilla JavaScript (aided by Tailwind CSS via CDN for rapid utility classes) to serve as a fast, clean blueprint.
- **Automated Deployment**: Configured with GitHub Actions to automatically deploy to GitHub Pages on every push to the main branch.

## File Structure

- `index.html`: The main markup and structure of the portfolio.
- `css/style.css`: Custom styling, scrollbars, and animations not covered by Tailwind.
- `js/main.js`: Interactivity, including the mobile menu toggle and scroll spy/reveal effects.
- `.github/workflows/deploy.yml`: The deployment pipeline configuration.

## Setup & Local Development

No build tools are required for this vanilla setup! To view the site locally:

1. Clone the repository.
2. Open `index.html` in any modern web browser.
3. Keep editing HTML/CSS/JS files—just refresh the page to see your updates.

## Deployment

This repository is set up with GitHub Pages and GitHub Actions.

1. Ensure your repository is public (or you have GitHub Pro/Enterprise for private pages).
2. Go to **Settings > Pages** in your GitHub repository.
3. Under **Build and deployment**, change the Source to **GitHub Actions**.
4. Pushing or merging code to your `main` or `master` branch will trigger the workflow and publish your site automatically.

## Customization

- **Colors**: The primary aesthetic colors are defined in the Tailwind configuration script block inside `<head>` of `index.html`.
- **Content**: Update the placeholders inside sections (`#about`, `#experience`, `#projects`) in `index.html` with your actual resume details.
- **Images**: Place your profile picture and project thumbnails in a new `assets/` folder and link them appropriately.
