# Contributing Guide

## How to Contribute

We welcome contributions! Here's how to get started.

## Setup Development Environment

```bash
git clone https://github.com/repinboris312-ux/radio-app-2026.git
cd radio-app-2026
git checkout -b feature/your-feature-name
npm install
npm run dev
```

## Code Style

- Use functional components with hooks
- Follow React best practices
- Use meaningful variable names
- Add comments for complex logic
- Use ESLint: `npm run lint`

## Adding New Stations

1. Edit `src/data/stations.json`
2. Add new station object:

```json
{
  "id": 200,
  "name": "Station Name",
  "url": "http://stream-url.com:port/live",
  "country": "Country",
  "genre": "Genre",
  "bitrate": "128 kbps",
  "quality": "High",
  "tags": ["tag1", "tag2"],
  "listeners": 10000,
  "uptime": 99.5
}
```

3. Test locally: `npm run dev`
4. Commit: `git commit -m "Add new station: Station Name"`

## Adding Features

1. Create feature branch:
```bash
git checkout -b feature/new-feature
```

2. Make changes:
   - Create component in `src/components/`
   - Add logic in appropriate store
   - Add page in `src/pages/` if needed

3. Test:
```bash
npm run dev
# Or
npm test
```

4. Commit:
```bash
git add .
git commit -m "feat: Add new feature description"
```

5. Push:
```bash
git push origin feature/new-feature
```

6. Create Pull Request on GitHub

## Commit Messages

Use conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style
- `refactor:` Code refactoring
- `perf:` Performance improvement
- `test:` Tests
- `chore:` Build, dependencies

Example:
```
feat: Add equalizer control

Implement 10-band equalizer with presets:
- Rock, Pop, Jazz presets
- Custom equalizer settings
- Save user preferences

Fixes #123
```

## Pull Request Process

1. Update `README.md` if needed
2. Ensure all tests pass: `npm test`
3. Ensure code is formatted: `npm run lint`
4. Create PR with clear description
5. Respond to review comments
6. Merge when approved

## Reporting Issues

When reporting bugs, include:
- Clear title
- Detailed description
- Steps to reproduce
- Expected behavior
- Actual behavior
- System info (OS, version, browser)
- Screenshots/logs if applicable

## Feature Requests

Describe:
- Use case/motivation
- Proposed solution
- Alternative solutions
- Additional context

## Development Tips

### Useful Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format

# Clean build
npm run clean
```

### Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Page components
├── stores/         # Zustand state management
├── services/       # API services
├── data/           # Data files (stations)
├── styles/         # CSS/Tailwind
└── App.jsx         # Main app component
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Code Review Checklist

- [ ] Code follows style guide
- [ ] No console errors/warnings
- [ ] Changes tested locally
- [ ] No breaking changes
- [ ] Documentation updated
- [ ] Commit messages clear

## Community

- GitHub Discussions: Project discussions and Q&A
- Issues: Bug reports and feature requests
- Slack: (Coming soon)

## License

By contributing, you agree your work will be licensed under MIT.

## Questions?

Create an issue or contact: repinboris312@gmail.com

Thank you for contributing! 🎉
