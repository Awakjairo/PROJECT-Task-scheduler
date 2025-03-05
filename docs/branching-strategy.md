# Branching Strategy

## Overview
This document outlines the branching strategy used for the Task Scheduler project. We use a simplified GitFlow-inspired approach with separate branches for different development purposes.

## Branch Structure
Our repository follows this branch structure:

- **main**: The principal branch containing production-ready code
- **Development**: Main integration branch where features are combined
- **Testing**: Branch for testing features before integrating into Development
- **Bug-Fixing**: Branch dedicated to bug fixes

## Branch Purposes

### Main Branch
- **Purpose**: Contains stable, production-ready code
- **Restrictions**: Direct commits are not allowed; changes come only through pull requests
- **Naming Convention**: Always named `main`

### Development Branch
- **Purpose**: Integration branch where multiple features come together
- **Source**: Created from `main`
- **Destination**: Merged back to `main` when stable
- **Naming Convention**: Always named `Development`

### Testing Branch
- **Purpose**: Dedicated environment for testing features before they are integrated
- **Source**: Created from `Development`
- **Destination**: Merged back to `Development` after testing passes
- **Naming Convention**: Always named `Testing`

### Bug-Fixing Branch
- **Purpose**: Dedicated branch for fixing issues found in production or development
- **Source**: Created from the branch where the bug was found
- **Destination**: Merged back to the source branch after fixes are complete
- **Naming Convention**: Always named `Bug-Fixing`

## Workflow

### Feature Development:
1. Create feature branches from `Development` when needed
2. Name format: `feature/feature-name`
3. Merge into `Testing` for verification
4. After successful testing, merge into `Development`

### Bug Fixes:
1. Use the `Bug-Fixing` branch for all bug fixes
2. Critical fixes may be merged directly to `main` after testing
3. Regular fixes follow the normal flow through `Testing` and `Development`

### Releases:
1. When `Development` is stable and tested, create a pull request to `main`
2. Tag the `main` branch with version numbers after merging

## Commit Guidelines
- Write clear, descriptive commit messages
- Reference issue numbers in commit messages when applicable
- Keep commits focused on single logical changes

## Pull Request Process
1. Create a pull request from your working branch to the target branch
2. Ensure all CI checks pass
3. Request review from at least one team member
4. Address any feedback from code reviews
5. Merge only after approval

## Version Tagging
- **Major releases**: `v1.0`, `v2.0`, etc.
- **Minor releases**: `v1.1`, `v1.2`, etc.
- **Patches**: `v1.0.1`, `v1.0.2`, etc.
