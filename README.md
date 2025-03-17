# Task Scheduler

A web application that enables the process of task automation through the application or execution of scheduled programs at specific times or on the occurrence of certain events. You can schedule scripts, launch applications, or even maintenance tasks to be executed automatically, without user intervention.

## Features

- **User Authentication**: Secure login system to protect your tasks
- **Task Management**: Create, edit, and delete tasks
- **Task Scheduling**: Set deadlines for your tasks
- **Visual Feedback**: Clean interface to track your upcoming tasks
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
PROJECT-Task-scheduler/
├── .github/
│   └── workflows/
│       └── ci.yml                # GitHub Actions workflow file
├── src/
│   ├── index.html                # Main application file with login and task management
│   ├── redirect.js               # Authentication script
│   ├── script.js                 # Task management functionality
│   └── styles.css                # Combined stylesheet for the application
├── docs/
│   ├── branching-strategy.md     # Documentation of Git branching strategy
│   ├── change-management-process.md  # Documentation of change management process
│
├── tests/
│   └── script.test.js            # Unit tests for task management functions
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Git ignore file
├── LICENSE                       # MIT License
├── package.json                  # Project dependencies and scripts
└── README.md                     # This file
```

## Getting Started

### Prerequisites

- Web browser (Chrome, Firefox, Safari, Edge)
- Git
- Node.js and npm (for development)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Awakjairo/PROJECT-Task-scheduler.git
   cd PROJECT-Task-scheduler
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Open the application:
   ```bash
   npm start
   ```
   This will open `index.html` in your default browser.

### Default Login

- Username: `awakjairo`
- Password: `password`

**Note**: This is for demonstration purposes only. In a production environment, implement proper authentication.

## Development

### Branching Strategy

We follow a modified Gitflow workflow:

- `main` - Production branch
- `develop` - Integration branch
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `hotfix/*` - Hot fix branches
- `release/*` - Release preparation branches

For details, see [docs/branching-strategy.md](./docs/branching-strategy.md).

### Change Management

All changes follow our change request (CR) process:

1. Create a CR using the template
2. Get CR approved
3. Implement changes in a feature branch
4. Create a PR referencing the CR
5. Get PR reviewed and approved
6. Merge changes

CRs are tracked in GitHub Issues and Trello. For details, see [docs/change-management-process.md](./docs/change-management-process.md).

### Build and Test

Run linting:
```bash
npm run lint
```

Run tests:
```bash
npm test
```

Generate test coverage:
```bash
npm run test:coverage
```

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration:

- Automated linting
- Automated testing
- Build verification
- Deployment to preview (for PRs)
- Deployment to production (for `main` branch)

CI configuration is in `.github/workflows/ci.yml`.



## Contributing

1. Create a feature branch from `develop`
2. Make your changes
3. Submit a PR to merge back to `develop`
4. Ensure CI passes
5. Get approval from a reviewer

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

- Awakjairo - Initial work and project management