# ResumeWeb

This is a Next.js project, likely a personal resume or portfolio website, configured for deployment to GitHub Pages.

## Table of Contents

*   [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
    *   [Running Locally](#running-locally)
*   [Deployment to GitHub Pages](#deployment-to-github-pages)
*   [Project Structure](#project-structure)
*   [Technologies Used](#technologies-used)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

*   Node.js (version 20 or higher recommended)
*   pnpm (or npm/yarn, but pnpm is used in the provided `pnpm-lock.yaml` and GitHub Actions workflow)
    *   To install pnpm: `npm install -g pnpm`

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/YOUR_USERNAME/ResumeWeb.git
    cd ResumeWeb
    ```
    (Replace `YOUR_USERNAME` with your GitHub username)

2.  Install dependencies:
    ```bash
    pnpm install
    ```

### Running Locally

To run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deployment to GitHub Pages

This project is configured for static export and deployment to GitHub Pages using GitHub Actions.

1.  **Ensure `next.config.mjs` is configured**:
    The `next.config.mjs` file should include `output: 'export'`, `basePath`, and `assetPrefix` for GitHub Pages compatibility. This has already been set up.

2.  **GitHub Actions Workflow**:
    A GitHub Actions workflow (`.github/workflows/deploy.yml`) is provided to automate the build and deployment process. It will trigger on pushes to the `main` branch.

3.  **Enable GitHub Pages**:
    *   Go to your `ResumeWeb` repository on GitHub.
    *   Click on the "Settings" tab.
    *   In the left sidebar, click on "Pages".
    *   Under "Build and deployment", select "GitHub Actions" as the source.

Once enabled, the workflow will run, and your site will be deployed to `https://YOUR_USERNAME.github.io/ResumeWeb/`.

## Project Structure

```
.
├── .github/              # GitHub Actions workflows
├── app/                  # Next.js application pages and global CSS
├── components/           # Reusable React components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets (images, etc.)
├── styles/               # Additional stylesheets
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies and scripts
├── pnpm-lock.yaml        # pnpm lock file
├── postcss.config.mjs    # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## Technologies Used

*   **Next.js**: React framework for building web applications.
*   **React**: JavaScript library for building user interfaces.
*   **TypeScript**: Superset of JavaScript that adds static typing.
*   **Tailwind CSS**: A utility-first CSS framework.
*   **Shadcn/ui**: Reusable components built with Radix UI and Tailwind CSS.
*   **pnpm**: Fast, disk space efficient package manager.
*   **GitHub Actions**: For CI/CD and automated deployment.
