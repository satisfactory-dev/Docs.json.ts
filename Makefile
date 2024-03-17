DOCKER_IMAGE ?= node:19-alpine

DOCKER_PREFIX = @docker run --rm -it \
	-u $(shell id -u):$(shell id -g) \
	-v $(shell pwd)/:/app \
	-v ${HOME}/.npm/:/.npm/ \
	-w /app/

shell:
	${DOCKER_PREFIX} --entrypoint sh ${DOCKER_IMAGE}

install:
	${DOCKER_PREFIX} ${DOCKER_IMAGE} npm install

validate:
#	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/tsc --project ./tsconfig.schema-exports.json
	${DOCKER_PREFIX} ${DOCKER_IMAGE} npm run validate

generate: lint-lib
	${DOCKER_PREFIX} ${DOCKER_IMAGE} npm run generate
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/tsc --project ./tsconfig.generated-types-check.json

lint-lib:
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/tsc --project ./tsconfig.lib-check.json

lint: lint-lib
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/prettier . --check

lint-fix:
	${DOCKER_PREFIX} ${DOCKER_IMAGE} ./node_modules/.bin/prettier . --write
