.PHONY: deep-clean-install clean install build lint-format test dev start storybook test-watch

# Clean task
clean:
	rm -Rf node_modules dist package-lock.json .next storybook-static

# Build task
build:
	npm run build
	npm run build-storybook

# Deep clean install task
deep-clean-install-and-lint-format: clean install build lint-format

# Install task
install:
	npm i

# Clean Install task
clean-install:
	npm ci

# Lint and Format task
lint-format:
	npm run lint
	npm run format

# Start production server task
start:
	npm run start

# Storybook server task
start-storybook:
	npm run storybook

# Development server task
start-dev:
	npm run dev

# Test storybook task
test:
	npm run test

# Test storybook task
test-storybook:
	npm run test-storybook

# Test in watch mode task
test-watch:
	npm run test:watch
