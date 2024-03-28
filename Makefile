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

validate: lint-lib build-lib validate--skip-checks

validate--skip-checks:
	${DOCKER_COMPOSER_PREFIX} exec ts-node npm run validate

build-lib:
	@echo 'building from ./tsconfig.lib.json'
	${DOCKER_COMPOSER_PREFIX} exec node ./node_modules/.bin/tsc --project ./tsconfig.lib.json

generate: lint-lib generate--skip-checks generate--post-build

generate--skip-checks: build-lib
	@echo 'running ./discover-types.ts'
	${DOCKER_COMPOSER_PREFIX} exec ts-node ./node_modules/.bin/ts-node ./discover-types.ts

generate--post-build:
	${DOCKER_COMPOSER_PREFIX} exec node ./node_modules/.bin/tsc --project ./tsconfig.generated-types-check.json

lint-lib--tsc:
	@echo 'running syntax check'
	${DOCKER_COMPOSER_PREFIX} exec node ./node_modules/.bin/tsc --project ./tsconfig.lib-check.json

lint-lib: lint-lib--tsc lint--eslint

lint--prettier:
	@echo 'running prettier'
	${DOCKER_COMPOSER_PREFIX} exec ts-node ./node_modules/.bin/prettier . --check

lint--eslint:
	@echo 'checking eslint for fixable issues'
	${DOCKER_COMPOSER_PREFIX} exec ts-node ./node_modules/.bin/eslint --cache './*.ts' lib --fix-dry-run
	@echo 'checking eslint for all issues'
	${DOCKER_COMPOSER_PREFIX} exec ts-node ./node_modules/.bin/eslint --cache './*.ts' lib

lint: lint--prettier lint-lib

lint-fix:
	@echo 'fixing prettier issues'
	${DOCKER_COMPOSER_PREFIX} exec ts-node ./node_modules/.bin/prettier . --write
	@echo 'fixing eslint issues'
	${DOCKER_COMPOSER_PREFIX} exec ts-node ./node_modules/.bin/eslint --cache './*.ts' lib --fix

.PHONY: tests
tests: build-lib
	${DOCKER_COMPOSER_PREFIX} exec ts-node ./node_modules/.bin/jasmine --config=./jasmine.json

.PHONY: coverage
coverage: build-lib
	${DOCKER_COMPOSER_PREFIX} exec ts-node ./node_modules/.bin/c8 ./node_modules/.bin/jasmine --config=./jasmine.json
