DOCKER_IMAGE ?= node:21-alpine

DOCKER_PREFIX_NO_LOADER = @docker run --rm -it \
	-u $(shell id -u):$(shell id -g) \
	-v $(shell pwd)/:/app \
	-v ${HOME}/.npm/:/.npm/ \
	-v /etc/passwd:/etc/passwd:ro \
	-v /etc/group:/etc/group:ro \
	-w /app/

DOCKER_PREFIX = ${DOCKER_PREFIX_NO_LOADER} -e NODE_OPTIONS='--enable-source-maps --no-warnings=ExperimentalWarning --loader ts-node/esm'

DOCKER_COMPOSER_PREFIX = @USER=$(shell id -u):$(shell id -g) docker compose

up:
	${DOCKER_COMPOSER_PREFIX} up -d

down:
	${DOCKER_COMPOSER_PREFIX} down

logs:
	${DOCKER_COMPOSER_PREFIX} logs -f

shell:
	${DOCKER_PREFIX} --entrypoint sh ${DOCKER_IMAGE}

install:
	${DOCKER_PREFIX_NO_LOADER} ${DOCKER_IMAGE} npm install

validate: lint build validate--skip-checks

validate--skip-checks:
	${DOCKER_PREFIX} ${DOCKER_IMAGE} npm run validate

build:
	@echo 'building from ./tsconfig.app.json'
	${DOCKER_PREFIX_NO_LOADER} ${DOCKER_IMAGE} ./node_modules/.bin/tsc --project ./tsconfig.app.json

clean:
	@echo 'running ./clean.ts'
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/ts-node ./clean.ts

generate: lint generate--skip-checks generate--post-build

generate--skip-checks: build
	@echo 'running ./discover-types.ts'
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/ts-node ./discover-types.ts

generate--post-build:
	${DOCKER_PREFIX_NO_LOADER} ${DOCKER_IMAGE} ./node_modules/.bin/tsc --project ./tsconfig.generated-types-check.json

lint--tsc:
	@echo 'running syntax check'
	${DOCKER_PREFIX_NO_LOADER} ${DOCKER_IMAGE} ./node_modules/.bin/tsc --project ./tsconfig.app-check.json

lint--prettier:
	@echo 'running prettier'
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/prettier . --check

lint--eslint:
	@echo 'checking eslint for fixable issues'
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/eslint --cache './*.ts' lib assert tests --fix-dry-run
	@echo 'checking eslint for all issues'
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/eslint --cache './*.ts' lib assert tests

lint: lint--prettier lint--tsc lint--eslint

lint-fix:
	@echo 'fixing prettier issues'
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/prettier . --write
	@echo 'fixing eslint issues'
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/eslint --cache './*.ts' lib assert tests --fix

.PHONY: tests
tests: build
	${DOCKER_PREFIX} ${DOCKER_IMAGE} npm test

tests--only-unstaged: build
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/ts-node ./tests--only-these.ts '$(shell git diff HEAD --name-only)'

.PHONY: coverage
coverage: build
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/c8 npm test

coverage--only-unstaged: build
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/c8 ./node_modules/.bin/ts-node ./tests--only-these.ts '$(shell git diff HEAD --name-only)'
