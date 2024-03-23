DOCKER_IMAGE ?= node:21-alpine

DOCKER_PREFIX_NO_LOADER = @docker run --rm -it \
	-u $(shell id -u):$(shell id -g) \
	-v $(shell pwd)/:/app \
	-v ${HOME}/.npm/:/.npm/ \
	-w /app/

DOCKER_PREFIX = ${DOCKER_PREFIX_NO_LOADER} -e NODE_OPTIONS='--enable-source-maps --no-warnings=ExperimentalWarning --loader ts-node/esm'

shell:
	${DOCKER_PREFIX} --entrypoint sh ${DOCKER_IMAGE}

install:
	${DOCKER_PREFIX_NO_LOADER} ${DOCKER_IMAGE} npm install

validate: lint-lib build-lib
#	${DOCKER_PREFIX_NO_LOADER} ${DOCKER_IMAGE} ./node_modules/.bin/tsc --project ./tsconfig.schema-exports.json
	${DOCKER_PREFIX} ${DOCKER_IMAGE} npm run validate

build-lib:
	${DOCKER_PREFIX_NO_LOADER} ${DOCKER_IMAGE} ./node_modules/.bin/tsc --project ./tsconfig.lib.json

generate: lint-lib build-lib
	${DOCKER_PREFIX} ${DOCKER_IMAGE} npm run generate
	${DOCKER_PREFIX_NO_LOADER} ${DOCKER_IMAGE} ./node_modules/.bin/tsc --project ./tsconfig.generated-types-check.json

discover: lint-lib build-lib
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/ts-node ./discover-types.ts

lint-lib--tsc:
	${DOCKER_PREFIX_NO_LOADER} ${DOCKER_IMAGE} ./node_modules/.bin/tsc --project ./tsconfig.lib-check.json

lint-lib: lint-lib--tsc lint--eslint

lint--prettier:
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/prettier . --check

lint--eslint:
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/eslint --cache './*.ts' lib --fix-dry-run
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/eslint --cache './*.ts' lib

lint: lint--prettier lint-lib

lint-fix:
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/prettier . --write
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/eslint --cache './*.ts' lib --fix
