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
	${DOCKER_PREFIX} ${DOCKER_IMAGE} npm run validate

utf8ify:
	${DOCKER_PREFIX} ${DOCKER_IMAGE} npm run utf8ify
