install:
	@NODE_OPTIONS='' npm install

validate: lint build validate--skip-checks

validate--skip-checks:
	@npm run validate

build:
	@echo 'building from ./tsconfig.app.json'
	@NODE_OPTIONS='' ./node_modules/.bin/tsc --project ./tsconfig.app.json

clean:
	@echo 'running ./clean.ts'
	@./node_modules/.bin/ts-node ./clean.ts

generate: lint generate--skip-checks generate--post-build

generate--skip-checks: build
	@echo 'running ./discover-types.ts'
	@./node_modules/.bin/ts-node ./discover-types.ts

generate--post-build:
	@NODE_OPTIONS='' ./node_modules/.bin/tsc --project ./tsconfig.generated-types-check.json

lint--tsc:
	@echo 'running syntax check'
	@NODE_OPTIONS='' ./node_modules/.bin/tsc --project ./tsconfig.app-check.json

lint--prettier:
	@echo 'running prettier'
	@./node_modules/.bin/prettier . --check

lint--eslint:
	@echo 'checking eslint for fixable issues'
	@./node_modules/.bin/eslint --cache './*.ts' lib assert tests --fix-dry-run
	@echo 'checking eslint for all issues'
	@./node_modules/.bin/eslint --cache './*.ts' lib assert tests

lint: lint--prettier lint--tsc lint--eslint

lint-fix:
	@echo 'fixing prettier issues'
	@./node_modules/.bin/prettier . --write
	@echo 'fixing eslint issues'
	@./node_modules/.bin/eslint --cache './*.ts' lib assert tests --fix

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
