# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus 2 documentation website containing technical articles, blog posts, and documentation on various topics including web development, databases, algorithms, tools, and books. The site is organized into several main sections:

1. **Blog**: Personal articles and tutorials
2. **Docs**: Technical documentation organized by topic (JavaScript, TypeScript, CSS, Libraries, Database, Python, Tools, Algorithms)
3. **Books**: Summaries and notes on various books organized by category

## Development Commands

### Installation
```bash
yarn
```

### Local Development
```bash
yarn start
# or
yarn dev
```
Starts a local development server with live reload.

### Build
```bash
yarn build
```
Generates static content into the `build` directory.

### Deployment
```bash
yarn deploy
```
Builds the website and deploys to GitHub Pages.

## Codebase Architecture

### Directory Structure
- `/blog` - Blog posts in Markdown format with dates in filenames
- `/docs` - Documentation organized by topic categories
- `/src` - Custom React components and styling
- `/static` - Static assets (images, fonts, etc.)

### Documentation Organization
Documentation is organized in `sidebars.js` with the following main categories:
- **General**: Core web concepts (DOM, network, security, etc.)
- **JavaScript**: Language features and concepts
- **TypeScript**: Type system and advanced features
- **CSS**: Styling concepts and techniques
- **Library**: Framework and library documentation (React, Vue, Node, etc.)
- **Database**: MySQL, PostgreSQL documentation
- **Python**: Python and SQLAlchemy documentation
- **Tools**: Development tools, shell commands, IDEs
- **Algorithm**: Data structures and algorithms

### Content Format
- Blog posts follow the naming convention `YYYY-MM-DD-title.md`
- Documentation files are in Markdown format
- Supports MDX for interactive components
- Mermaid diagrams are enabled for visual documentation

## Key Dependencies
- Docusaurus 2 for static site generation
- React 16 for UI components
- Prism for syntax highlighting
- Mermaid for diagrams
- Algolia for search functionality