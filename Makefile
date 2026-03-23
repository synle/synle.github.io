build:
	npm run build

dev:
	curl -fsSL https://raw.githubusercontent.com/synle/gha-workflow/refs/heads/main/dev.sh | bash -s -- '*.json *.less *.js *.html' 'npm run start'

start:
	make dev
