DOCKER_COMPOSER_PREFIX = @USER=$(shell id -u):$(shell id -g) docker compose

up:
	${DOCKER_COMPOSER_PREFIX} up -d

down:
	${DOCKER_COMPOSER_PREFIX} down

logs:
	${DOCKER_COMPOSER_PREFIX} logs -f

shell:
	${DOCKER_COMPOSER_PREFIX} exec ts-node sh

install:
	${DOCKER_COMPOSER_PREFIX} exec node npm install

validate: lint build validate--skip-checks

validate--skip-checks:
	${DOCKER_COMPOSER_PREFIX} exec ts-node npm run validate

build:
	@echo 'building from ./tsconfig.app.json'
	${DOCKER_COMPOSER_PREFIX} exec node ./node_modules/.bin/tsc --project ./tsconfig.app.json

generate: lint generate--skip-checks generate--post-build

generate--skip-checks: build
	@echo 'running ./discover-types.ts'
	${DOCKER_COMPOSER_PREFIX} exec ts-node ./node_modules/.bin/ts-node ./discover-types.ts

generate--post-build:
	${DOCKER_COMPOSER_PREFIX} exec node ./node_modules/.bin/tsc --project ./tsconfig.generated-types-check.json

lint--tsc:
	@echo 'running syntax check'
	${DOCKER_COMPOSER_PREFIX} exec node ./node_modules/.bin/tsc --project ./tsconfig.app-check.json

lint--prettier:
	@echo 'running prettier'
	${DOCKER_COMPOSER_PREFIX} exec ts-node ./node_modules/.bin/prettier . --check

lint--eslint:
	@echo 'checking eslint for fixable issues'
	${DOCKER_COMPOSER_PREFIX} exec ts-node ./node_modules/.bin/eslint --cache './*.ts' lib assert tests --fix-dry-run
	@echo 'checking eslint for all issues'
	${DOCKER_COMPOSER_PREFIX} exec ts-node ./node_modules/.bin/eslint --cache './*.ts' lib assert tests

lint: lint--prettier lint--tsc lint--eslint

lint-fix:
	@echo 'fixing prettier issues'
	${DOCKER_COMPOSER_PREFIX} exec ts-node ./node_modules/.bin/prettier . --write
	@echo 'fixing eslint issues'
	${DOCKER_COMPOSER_PREFIX} exec ts-node ./node_modules/.bin/eslint --cache './*.ts' lib assert tests --fix

.PHONY: tests
tests: build
	${DOCKER_COMPOSER_PREFIX} exec ts-node npm test

.PHONY: coverage
coverage: build
	${DOCKER_COMPOSER_PREFIX} exec ts-node ./node_modules/.bin/c8 npm test
