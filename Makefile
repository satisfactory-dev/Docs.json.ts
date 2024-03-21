DOCKER_IMAGE ?= node:21-alpine

DOCKER_PREFIX_NO_LOADER = @docker run --rm -it \
	-u $(shell id -u):$(shell id -g) \
	-v $(shell pwd)/:/app \
	-v ${HOME}/.npm/:/.npm/ \
	-w /app/

DOCKER_PREFIX = ${DOCKER_PREFIX_NO_LOADER} -e NODE_OPTIONS='--no-warnings=ExperimentalWarning --loader ts-node/esm'

shell:
	${DOCKER_PREFIX} --entrypoint sh ${DOCKER_IMAGE}

install:
	${DOCKER_PREFIX_NO_LOADER} ${DOCKER_IMAGE} npm install

validate:
#	${DOCKER_PREFIX_NO_LOADER} ${DOCKER_IMAGE} ./node_modules/.bin/tsc --project ./tsconfig.schema-exports.json
	${DOCKER_PREFIX} ${DOCKER_IMAGE} npm run validate

generate: lint-lib
	${DOCKER_PREFIX} ${DOCKER_IMAGE} npm run generate
	${DOCKER_PREFIX_NO_LOADER} ${DOCKER_IMAGE} ./node_modules/.bin/tsc --project ./tsconfig.generated-types-check.json

lint-lib:
	${DOCKER_PREFIX_NO_LOADER} ${DOCKER_IMAGE} ./node_modules/.bin/tsc --project ./tsconfig.lib-check.json

lint--prettier:
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/prettier . --check

lint--eslint:
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/eslint --cache './*.ts' lib --fix-dry-run
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/eslint --cache './*.ts' lib

lint: lint-lib lint--prettier lint--eslint

lint-fix:
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/prettier . --write
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/eslint --cache './*.ts' lib --fix
