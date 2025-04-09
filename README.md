# Task Scheduler

A modern, feature-rich task management application built with JavaScript, featuring automated testing, CI/CD pipeline, and GitHub Pages deployment.

## Features

- **Task Management**
  - Add new tasks with name, description, and deadline
  - Edit existing tasks
  - Delete tasks
  - View task list with all details
  - Task validation for name and deadline

- **Development Tools**
  - Webpack for bundling
  - Babel for JavaScript transpilation
  - ESLint for code quality
  - Jest for testing
  - Husky for git hooks

- **Testing & Quality**
  - Comprehensive test suite
  - Code coverage reporting
  - Automated testing in CI/CD
  - ESLint code style enforcement

- **CI/CD Pipeline**
  - Automated testing on every push
  - Coverage reporting
  - Automated builds
  - GitHub Pages deployment
  - Release management

## Getting Started

### Prerequisites

- Node.js (v20.x or later)
- npm (v9.x or later)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/PROJECT-Task-scheduler.git
cd PROJECT-Task-scheduler
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run tests:
```bash
npm test
```

5. Check test coverage:
```bash
npm run test:coverage
```

6. Build for production:
```bash
npm run build
```

## Project Structure

```
PROJECT-Task-scheduler/
├── src/                    # Source files
│   ├── script.js          # Main application logic
│   ├── styles.css         # Application styles
│   └── index.html         # Main HTML file
├── tests/                  # Test files
│   ├── script.test.js     # Main test suite
│   └── redirect.test.js   # Redirect test
├── dist/                   # Production build
├── .github/               # GitHub configuration
│   └── workflows/         # CI/CD workflows
├── .eslintrc.js          # ESLint configuration
├── .gitignore            # Git ignore rules
├── babel.config.js       # Babel configuration
├── package.json          # Project configuration
├── webpack.config.js     # Webpack configuration
├── CHANGELOG.md          # Version history
└── README.md             # Project documentation
```

## Testing

The project includes a comprehensive test suite with Jest:

- Unit tests for task management functions
- Validation tests for task input
- DOM manipulation tests
- Event handling tests

Run tests with:
```bash
npm test
```

View coverage report with:
```bash
npm run test:coverage
```

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

1. **Test Job**
   - Runs on every push and pull request
   - Executes test suite
   - Generates coverage reports
   - Uploads coverage to Codecov

2. **Build Job**
   - Creates production build
   - Uploads build artifacts

3. **Deploy Job**
   - Deploys to GitHub Pages
   - Updates on every push to main
   - Updates on releases

4. **Release Job**
   - Creates release notes
   - Tags releases
   - Marks beta releases appropriately

## Build and Deployment Process

### Build Process

The application uses Webpack for bundling and optimization:

1. **Development Build**
   ```bash
   npm start
   ```
   - Uses webpack-dev-server for hot reloading
   - Source maps enabled for debugging
   - Development-specific optimizations
   - Accessible at `http://localhost:8080`

2. **Production Build**
   ```bash
   npm run build
   ```
   - Creates optimized bundle in `dist/` directory
   - Minifies JavaScript and CSS
   - Optimizes assets
   - Generates unique filenames for caching
   - Removes development-only code

### Deployment Process

The application is automatically deployed to GitHub Pages:

1. **Automatic Deployment**
   - Triggered on every push to `main` branch
   - Triggered on every release
   - Builds the application
   - Deploys to `gh-pages` branch

2. **Manual Deployment**
   ```bash
   npm run build
   ```
   Then push the `dist` directory to the `gh-pages` branch.

3. **Environment Configuration**
   - Development: `http://localhost:8080`
   - Production: `https://yourusername.github.io/PROJECT-Task-scheduler`

4. **Deployment Verification**
   - Automated tests run before deployment
   - Build must pass all checks
   - Coverage must meet requirements
   - No ESLint errors allowed

### Build Configuration

The build process is configured in `webpack.config.js`:

```javascript
module.exports = {
  mode: 'production', // or 'development'
  entry: './src/script.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  // ... other configuration
};
```

Key features:
- Content hashing for cache busting
- Automatic cleanup of old builds
- Source map generation in development
- Asset optimization in production

### Deployment Configuration

The deployment is configured in `.github/workflows/ci.yml`:

```yaml
deploy:
  needs: build
  if: github.event_name == 'push' || github.event_name == 'release'
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - name: Download build artifacts
      uses: actions/download-artifact@v4
      with:
        name: dist
        path: dist/
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
        publish_branch: gh-pages
```

Key features:
- Automatic deployment on push/release
- Secure token handling
- Artifact management
- Branch-specific deployment

## Release Management

The project follows semantic versioning (MAJOR.MINOR.PATCH):

- **Beta Releases** (e.g., 1.0.0-beta.1)
  ```bash
  npm run release:beta
  ```

- **Patch Releases** (e.g., 1.0.1)
  ```bash
  npm run release:patch
  ```

- **Minor Releases** (e.g., 1.1.0)
  ```bash
  npm run release:minor
  ```

- **Major Releases** (e.g., 2.0.0)
  ```bash
  npm run release:major
  ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Jest for testing framework
- Webpack for bundling
- GitHub Actions for CI/CD
- ESLint for code quality
- Husky for git hooks