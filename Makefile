install:
	@npm install

build:
	@echo 'building from ./tsconfig.app.json'
	@./node_modules/.bin/tsc --project ./tsconfig.app.json

lint--tsc:
	@echo 'running syntax check'
	@./node_modules/.bin/tsc --project ./tsconfig.app-check.json

lint--prettier:
	@echo 'running prettier'
	@./node_modules/.bin/prettier . --check

lint--eslint:
	@./node_modules/.bin/tsc --project ./tsconfig.eslint.json
	@echo 'checking eslint for all issues with config'
	@./node_modules/.bin/eslint --config eslint.config.js.mjs --cache './**/*.mjs'
	@echo 'checking eslint for all issues'
	@./node_modules/.bin/eslint --cache './**/*.ts'

lint: lint--prettier lint--tsc lint--eslint

.PHONY: tests
tests: build
	@node ./tests.ts

.PHONY: coverage
coverage: build
	@./node_modules/.bin/c8 node ./tests.ts

npm-prep: tests
	@echo 'building from ./tsconfig.app-npm.json'
	@./node_modules/.bin/tsc --project ./tsconfig.app-npm.json
	@npm publish --dry-run

prepare: prepare--update4

prepare--update3:
	@echo 'prepare 0.3.7.7'
	@node ./prepare-0.3.7.7.ts

prepare--update4: prepare--update3
	@echo 'prepare 0.4.2.11'
	@node ./prepare-0.4.2.11.ts

generate--clean:
	@echo 'cleaning ./generated-types/'
	@git clean -fxd ./generated-types/

generate--wrap-up:
	@echo 'fixing generated types'
	@./node_modules/.bin/eslint --fix ./generated-types/

generate: generate--clean generate--update3 generate--update4 generate--wrap-up

generate--update3: prepare--update3
	@echo 'running generator'
	@node ./generate-update3.ts

generate--update4: prepare--update4
	@echo 'running generator'
	@node ./generate-update4.ts
