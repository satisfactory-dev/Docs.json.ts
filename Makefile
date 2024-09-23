install:
	@NODE_OPTIONS='' npm install

validate: lint build validate--skip-checks--update8 validate--skip-checks--version-1

validate--skip-checks--update8:
	@npm run validate

validate--skip-checks--version-1:
	@npm run validate--version-1

build:
	@echo 'building from ./tsconfig.app.json'
	@NODE_OPTIONS='' ./node_modules/.bin/tsc --project ./tsconfig.app.json

clean:
	@echo 'running ./clean.ts'
	@./node_modules/.bin/ts-node ./clean.ts

generate: lint generate--skip-checks generate--post-build

generate--skip-checks: build generate--skip-checks--update8 generate--skip-checks--version-1

generate--skip-checks--update8:
	@echo 'running ./discover-types.ts'
	@./node_modules/.bin/ts-node ./discover-types.ts

generate--skip-checks--version-1:
	@echo 'running ./discover-types--1.0.ts'
	@./node_modules/.bin/ts-node ./discover-types--1.0.ts

generate--post-build:
	@NODE_OPTIONS='' ./node_modules/.bin/tsc --project ./tsconfig.generated-types-check.json

lint--tsc:
	@echo 'running syntax check'
	@NODE_OPTIONS='' ./node_modules/.bin/tsc --project ./tsconfig.app-check.json

lint--prettier:
	@echo 'running prettier'
	@./node_modules/.bin/prettier . --check

lint--eslint:
	@NODE_OPTIONS='' ./node_modules/.bin/tsc --project ./tsconfig.eslint.json
	@echo 'checking eslint for all issues with config'
	@./node_modules/.bin/eslint --config eslint.config.js.mjs --cache './**/eslint.config*.mjs'
	@echo 'checking eslint for all issues'
	@./node_modules/.bin/eslint --cache './**/*.ts' --ignore-pattern 'generated-types'

lint: lint--prettier lint--tsc lint--eslint

.PHONY: tests
tests: build
	@npm test

tests--only-unstaged: build
	@./node_modules/.bin/ts-node ./tests--only-these.ts '$(shell git diff HEAD --name-only)'

.PHONY: coverage
coverage: build
	@./node_modules/.bin/c8 npm test

coverage--only-unstaged: build
	@./node_modules/.bin/c8 ./node_modules/.bin/ts-node ./tests--only-these.ts '$(shell git diff HEAD --name-only)'

npm-prep: tests
	@echo 'building from ./tsconfig.app-npm.json'
	@NODE_OPTIONS='' ./node_modules/.bin/tsc --project ./tsconfig.app-npm.json
	@npm publish --dry-run
