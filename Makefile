build:
	make clean
	node generate-index-html.js
	npx --yes -p sass sass src/index.scss index.css
	node generate-resume.js

.PHONY: test
test:
	node --test test/*.spec.js

format:
	npx --yes prettier --write '**/*.jsonc' '**/*.json' '**/*.js' '**/*.scss' --ignore-path .gitignore

new:
ifndef name
	$(error Usage: make new name=2026-06)
endif
	@if [ -f "src/data/$(name).jsonc" ]; then echo "Error: src/data/$(name).jsonc already exists"; exit 1; fi
	@echo '// $(name) resume variant\n// Overrides: Experience\n{\n  "Experience": {\n    "rows": []\n  }\n}' > src/data/$(name).jsonc
	@echo "Created src/data/$(name).jsonc"

clean:
	rm -f *.html *.css *.pdf *.map

validate:
	make format
	make test
	make build

dev:
	curl -fsSL https://raw.githubusercontent.com/synle/gha-workflows/refs/heads/main/dev.sh | bash -s -- '*.json *.scss *.js *.html' 'make build'

start:
	make dev
