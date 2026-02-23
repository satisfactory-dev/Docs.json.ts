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

ci--basic-checks:
	./node_modules/.bin/tsc --project ./tsconfig.app-check.json
	./node_modules/.bin/prettier . --check
	./node_modules/.bin/eslint --config eslint.config.js.mjs './**/*.mjs'
	./node_modules/.bin/eslint --cache './**/*.ts'

prepare: prepare--update8

prepare--update3:
	@echo 'prepare 0.3.7.7'
	@node ./prepare-0.3.7.7.ts

prepare--update4: prepare--update3
	@echo 'prepare 0.4.2.11'
	@node ./prepare-0.4.2.11.ts

prepare--update5: prepare--update4
	@echo 'prepare 0.5.2.1'
	@node ./prepare-0.5.2.1.ts

prepare--update6: prepare--update5
	@echo 'prepare 0.6.1.5'
	@node ./prepare-0.6.1.5.ts

prepare--update7: prepare--update6
	@echo 'prepare 0.7.1.1'
	@node ./prepare-0.7.1.1.ts

prepare--update8: prepare--update7
	@echo 'prepare 0.8.3.3'
	@node ./prepare-0.8.3.3.ts

prepare--version1_0: prepare--update8
	@echo 'prepare 1.0.1.4'
	@node ./prepare-1.0.1.4.ts

generate--clean:
	@echo 'cleaning ./generated-types/'
	@git clean -fxd ./generated-types/

generate--wrap-up:
	@echo 'fixing generated types'
	@./node_modules/.bin/eslint --fix ./generated-types/

generate--early-access: generate--update3 generate--update4 generate--update5 generate--update6 generate--update7 generate--update8

generate--1.x: generate--version1_0

generate: generate--clean generate--early-access generate--1.x generate--wrap-up

generate--update3: prepare--update3
	@echo 'running generator'
	@node ./generate-update3.ts

generate--update4: prepare--update4
	@echo 'running generator'
	@node ./generate-update4.ts

generate--update5: prepare--update5
	@echo 'running generator'
	@node ./generate-update5.ts

generate--update6: prepare--update6
	@echo 'running generator'
	@node ./generate-update6.ts

generate--update7: prepare--update7
	@echo 'running generator'
	@node ./generate-update7.ts

generate--update8: prepare--update8
	@echo 'running generator'
	@node ./generate-update8.ts

generate--version1_0: prepare--version1_0
	@echo 'running generator'
	@node ./generate-version1.0.ts
