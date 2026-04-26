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

lint--oxlint:
	@echo 'checking oxlint for all issues'
	@./node_modules/.bin/oxlint

lint: lint--prettier lint--tsc lint--oxlint

.PHONY: tests
tests:
	@node --test

.PHONY: coverage
coverage: build
coverage: lint coverage--skip-lint

coverage--skip-lint:
	@node --experimental-test-coverage --test-coverage-include='${PWD}/src/**/*.ts' --test

coverage--lcov:
	@node --experimental-test-coverage --test-coverage-include='${PWD}/src/**/*.ts' --test --test-reporter=lcov --test-reporter-destination=coverage/lcov.info

npm-prep: generate--types tests
	@echo 'building from ./tsconfig.app-npm.json'
	@./node_modules/.bin/tsc --project ./tsconfig.app-npm.json
	@npm publish --dry-run

ci--basic-checks:
	./node_modules/.bin/tsc --project ./tsconfig.app-check.json
	./node_modules/.bin/prettier . --check
	./node_modules/.bin/oxlint

prepare: prepare--version1_1

prepare--quick: prepare--update8
	@node ./prepare-1.0.1.4.ts en-US
	@node ./prepare-1.1.2.2.ts en-US
	@node ./prepare-1.2.0.0.ts en-US
	@node ./prepare-1.2.1.0.ts en-US

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
	@node ./prepare-1.0.1.4.ts af
	@node ./prepare-1.0.1.4.ts ar
	@node ./prepare-1.0.1.4.ts bg
	@node ./prepare-1.0.1.4.ts ca
	@node ./prepare-1.0.1.4.ts cs
	@node ./prepare-1.0.1.4.ts da
	@node ./prepare-1.0.1.4.ts de
	@node ./prepare-1.0.1.4.ts el
	@node ./prepare-1.0.1.4.ts en-AE
	@node ./prepare-1.0.1.4.ts en-AU
	@node ./prepare-1.0.1.4.ts en-CA
	@node ./prepare-1.0.1.4.ts en-GB
	@node ./prepare-1.0.1.4.ts en-US
	@node ./prepare-1.0.1.4.ts eo
	@node ./prepare-1.0.1.4.ts es-419
	@node ./prepare-1.0.1.4.ts es-ES
	@node ./prepare-1.0.1.4.ts et
	@node ./prepare-1.0.1.4.ts fa
	@node ./prepare-1.0.1.4.ts fi
	@node ./prepare-1.0.1.4.ts fr
	@node ./prepare-1.0.1.4.ts he
	@node ./prepare-1.0.1.4.ts hi
	@node ./prepare-1.0.1.4.ts hr
	@node ./prepare-1.0.1.4.ts hu
	@node ./prepare-1.0.1.4.ts ia-001
	@node ./prepare-1.0.1.4.ts id
	@node ./prepare-1.0.1.4.ts ie
	@node ./prepare-1.0.1.4.ts io
	@node ./prepare-1.0.1.4.ts it
	@node ./prepare-1.0.1.4.ts ja
	@node ./prepare-1.0.1.4.ts ko
	@node ./prepare-1.0.1.4.ts kw
	@node ./prepare-1.0.1.4.ts lb
	@node ./prepare-1.0.1.4.ts lt
	@node ./prepare-1.0.1.4.ts lv
	@node ./prepare-1.0.1.4.ts mt
	@node ./prepare-1.0.1.4.ts nl
	@node ./prepare-1.0.1.4.ts no
	@node ./prepare-1.0.1.4.ts pl
	@node ./prepare-1.0.1.4.ts pt-BR
	@node ./prepare-1.0.1.4.ts pt-PT
	@node ./prepare-1.0.1.4.ts ro
	@node ./prepare-1.0.1.4.ts ru
	@node ./prepare-1.0.1.4.ts sk
	@node ./prepare-1.0.1.4.ts sr-Cyrl
	@node ./prepare-1.0.1.4.ts sr-Latn
	@node ./prepare-1.0.1.4.ts sv
	@node ./prepare-1.0.1.4.ts th
	@node ./prepare-1.0.1.4.ts tr
	@node ./prepare-1.0.1.4.ts uk
	@node ./prepare-1.0.1.4.ts vi
	@node ./prepare-1.0.1.4.ts vo
	@node ./prepare-1.0.1.4.ts vun
	@node ./prepare-1.0.1.4.ts zh-Hans
	@node ./prepare-1.0.1.4.ts zh-Hant

prepare--version1_1: prepare--version1_0
	@node ./prepare-1.1.2.2.ts af
	@node ./prepare-1.1.2.2.ts ar
	@node ./prepare-1.1.2.2.ts bg
	@node ./prepare-1.1.2.2.ts ca
	@node ./prepare-1.1.2.2.ts cs
	@node ./prepare-1.1.2.2.ts da
	@node ./prepare-1.1.2.2.ts de
	@node ./prepare-1.1.2.2.ts el
	@node ./prepare-1.1.2.2.ts en-AE
	@node ./prepare-1.1.2.2.ts en-AU
	@node ./prepare-1.1.2.2.ts en-CA
	@node ./prepare-1.1.2.2.ts en-GB
	@node ./prepare-1.1.2.2.ts en-US
	@node ./prepare-1.1.2.2.ts eo
	@node ./prepare-1.1.2.2.ts es-419
	@node ./prepare-1.1.2.2.ts es-ES
	@node ./prepare-1.1.2.2.ts et
	@node ./prepare-1.1.2.2.ts fa
	@node ./prepare-1.1.2.2.ts fi
	@node ./prepare-1.1.2.2.ts fr
	@node ./prepare-1.1.2.2.ts he
	@node ./prepare-1.1.2.2.ts hi
	@node ./prepare-1.1.2.2.ts hr
	@node ./prepare-1.1.2.2.ts hu
	@node ./prepare-1.1.2.2.ts ia-001
	@node ./prepare-1.1.2.2.ts id
	@node ./prepare-1.1.2.2.ts ie
	@node ./prepare-1.1.2.2.ts io
	@node ./prepare-1.1.2.2.ts it
	@node ./prepare-1.1.2.2.ts ja
	@node ./prepare-1.1.2.2.ts ko
	@node ./prepare-1.1.2.2.ts kw
	@node ./prepare-1.1.2.2.ts lb
	@node ./prepare-1.1.2.2.ts lt
	@node ./prepare-1.1.2.2.ts lv
	@node ./prepare-1.1.2.2.ts mt
	@node ./prepare-1.1.2.2.ts nl
	@node ./prepare-1.1.2.2.ts no
	@node ./prepare-1.1.2.2.ts pl
	@node ./prepare-1.1.2.2.ts pt-BR
	@node ./prepare-1.1.2.2.ts pt-PT
	@node ./prepare-1.1.2.2.ts ro
	@node ./prepare-1.1.2.2.ts ru
	@node ./prepare-1.1.2.2.ts sk
	@node ./prepare-1.1.2.2.ts sr-Cyrl
	@node ./prepare-1.1.2.2.ts sr-Latn
	@node ./prepare-1.1.2.2.ts sv
	@node ./prepare-1.1.2.2.ts th
	@node ./prepare-1.1.2.2.ts tr
	@node ./prepare-1.1.2.2.ts uk
	@node ./prepare-1.1.2.2.ts vi
	@node ./prepare-1.1.2.2.ts vo
	@node ./prepare-1.1.2.2.ts vun
	@node ./prepare-1.1.2.2.ts zh-Hans
	@node ./prepare-1.1.2.2.ts zh-Hant

prepare--version1_2: prepare--version1_2_0_0 prepare--version1_2_1_0

prepare--version1_2_0_0: prepare--version1_1
	@node ./prepare-1.2.0.0.ts af
	@node ./prepare-1.2.0.0.ts ar
	@node ./prepare-1.2.0.0.ts bg
	@node ./prepare-1.2.0.0.ts ca
	@node ./prepare-1.2.0.0.ts cs
	@node ./prepare-1.2.0.0.ts da
	@node ./prepare-1.2.0.0.ts de
	@node ./prepare-1.2.0.0.ts el
	@node ./prepare-1.2.0.0.ts en-AE
	@node ./prepare-1.2.0.0.ts en-AU
	@node ./prepare-1.2.0.0.ts en-CA
	@node ./prepare-1.2.0.0.ts en-GB
	@node ./prepare-1.2.0.0.ts en-US
	@node ./prepare-1.2.0.0.ts eo
	@node ./prepare-1.2.0.0.ts es-419
	@node ./prepare-1.2.0.0.ts es-ES
	@node ./prepare-1.2.0.0.ts et
	@node ./prepare-1.2.0.0.ts fa
	@node ./prepare-1.2.0.0.ts fi
	@node ./prepare-1.2.0.0.ts fr
	@node ./prepare-1.2.0.0.ts he
	@node ./prepare-1.2.0.0.ts hi
	@node ./prepare-1.2.0.0.ts hr
	@node ./prepare-1.2.0.0.ts hu
	@node ./prepare-1.2.0.0.ts ia-001
	@node ./prepare-1.2.0.0.ts id
	@node ./prepare-1.2.0.0.ts ie
	@node ./prepare-1.2.0.0.ts io
	@node ./prepare-1.2.0.0.ts it
	@node ./prepare-1.2.0.0.ts ja
	@node ./prepare-1.2.0.0.ts ko
	@node ./prepare-1.2.0.0.ts kw
	@node ./prepare-1.2.0.0.ts lb
	@node ./prepare-1.2.0.0.ts lt
	@node ./prepare-1.2.0.0.ts lv
	@node ./prepare-1.2.0.0.ts mt
	@node ./prepare-1.2.0.0.ts nl
	@node ./prepare-1.2.0.0.ts no
	@node ./prepare-1.2.0.0.ts pl
	@node ./prepare-1.2.0.0.ts pt-BR
	@node ./prepare-1.2.0.0.ts pt-PT
	@node ./prepare-1.2.0.0.ts ro
	@node ./prepare-1.2.0.0.ts ru
	@node ./prepare-1.2.0.0.ts sk
	@node ./prepare-1.2.0.0.ts sr-Cyrl
	@node ./prepare-1.2.0.0.ts sr-Latn
	@node ./prepare-1.2.0.0.ts sv
	@node ./prepare-1.2.0.0.ts th
	@node ./prepare-1.2.0.0.ts tr
	@node ./prepare-1.2.0.0.ts uk
	@node ./prepare-1.2.0.0.ts vi
	@node ./prepare-1.2.0.0.ts vo
	@node ./prepare-1.2.0.0.ts vun
	@node ./prepare-1.2.0.0.ts zh-Hans
	@node ./prepare-1.2.0.0.ts zh-Hant

prepare--version1_2_1_0: prepare--version1_2_0_0
	@node ./prepare-1.2.1.0.ts af
	@node ./prepare-1.2.1.0.ts ar
	@node ./prepare-1.2.1.0.ts bg
	@node ./prepare-1.2.1.0.ts ca
	@node ./prepare-1.2.1.0.ts cs
	@node ./prepare-1.2.1.0.ts da
	@node ./prepare-1.2.1.0.ts de
	@node ./prepare-1.2.1.0.ts el
	@node ./prepare-1.2.1.0.ts en-AE
	@node ./prepare-1.2.1.0.ts en-AU
	@node ./prepare-1.2.1.0.ts en-CA
	@node ./prepare-1.2.1.0.ts en-GB
	@node ./prepare-1.2.1.0.ts en-US
	@node ./prepare-1.2.1.0.ts eo
	@node ./prepare-1.2.1.0.ts es-419
	@node ./prepare-1.2.1.0.ts es-ES
	@node ./prepare-1.2.1.0.ts et
	@node ./prepare-1.2.1.0.ts fa
	@node ./prepare-1.2.1.0.ts fi
	@node ./prepare-1.2.1.0.ts fr
	@node ./prepare-1.2.1.0.ts he
	@node ./prepare-1.2.1.0.ts hi
	@node ./prepare-1.2.1.0.ts hr
	@node ./prepare-1.2.1.0.ts hu
	@node ./prepare-1.2.1.0.ts ia-001
	@node ./prepare-1.2.1.0.ts id
	@node ./prepare-1.2.1.0.ts ie
	@node ./prepare-1.2.1.0.ts io
	@node ./prepare-1.2.1.0.ts it
	@node ./prepare-1.2.1.0.ts ja
	@node ./prepare-1.2.1.0.ts ko
	@node ./prepare-1.2.1.0.ts kw
	@node ./prepare-1.2.1.0.ts lb
	@node ./prepare-1.2.1.0.ts lt
	@node ./prepare-1.2.1.0.ts lv
	@node ./prepare-1.2.1.0.ts mt
	@node ./prepare-1.2.1.0.ts nl
	@node ./prepare-1.2.1.0.ts no
	@node ./prepare-1.2.1.0.ts pl
	@node ./prepare-1.2.1.0.ts pt-BR
	@node ./prepare-1.2.1.0.ts pt-PT
	@node ./prepare-1.2.1.0.ts ro
	@node ./prepare-1.2.1.0.ts ru
	@node ./prepare-1.2.1.0.ts sk
	@node ./prepare-1.2.1.0.ts sr-Cyrl
	@node ./prepare-1.2.1.0.ts sr-Latn
	@node ./prepare-1.2.1.0.ts sv
	@node ./prepare-1.2.1.0.ts th
	@node ./prepare-1.2.1.0.ts tr
	@node ./prepare-1.2.1.0.ts uk
	@node ./prepare-1.2.1.0.ts vi
	@node ./prepare-1.2.1.0.ts vo
	@node ./prepare-1.2.1.0.ts vun
	@node ./prepare-1.2.1.0.ts zh-Hans
	@node ./prepare-1.2.1.0.ts zh-Hant

generate--clean:
	@echo 'cleaning ./generated-types/'
	@git clean -fxd ./generated-types/

generate--early-access: generate--update3 generate--update4 generate--update5 generate--update6 generate--update7 generate--update8

generate--early-access--types-only: generate--update3--types-only generate--update4--types-only generate--update5--types-only generate--update6--types-only generate--update7--types-only generate--update8--types-only

generate--1.x: generate--version1_0 generate--version1_1 generated--version_1_2

generate--1.x--types-only: generate--version1_0--types generate--version1_1--types generate--version1_2--types

generate: generate--clean generate--common generate--early-access generate--1.x

generate--types: generate--common generate--early-access--types-only generate--1.x--types-only

generate--common:
	@echo 'running generator'
	@node ./generate-common.ts

generate--update3--types-only: prepare--update3
	@echo 'running generator'
	@node ./generate-update3.ts en-US --skip-data

generate--update3: generate--update3--types-only
	@echo 'running generator'
	@node ./generate-update3.ts en-US --skip-types

generate--update4--types-only: prepare--update4
	@echo 'running generator'
	@node ./generate-update4.ts en-US --skip-data

generate--update4: generate--update4--types-only
	@echo 'running generator'
	@node ./generate-update4.ts en-US --skip-types

generate--update5--types-only: prepare--update5
	@echo 'running generator'
	@node ./generate-update5.ts en-US --skip-data

generate--update5: generate--update5--types-only
	@echo 'running generator'
	@node ./generate-update5.ts en-US --skip-types

generate--update6--types-only: prepare--update6
	@echo 'running generator'
	@node ./generate-update6.ts en-US --skip-data

generate--update6: generate--update6--types-only
	@echo 'running generator'
	@node ./generate-update6.ts en-US --skip-types

generate--update7--types-only: prepare--update7
	@echo 'running generator'
	@node ./generate-update7.ts en-US --skip-data

generate--update7: generate--update7--types-only
	@echo 'running generator'
	@node ./generate-update7.ts en-US --skip-types

generate--update8--types-only: prepare--update8
	@echo 'running generator'
	@node ./generate-update8.ts en-US --skip-data

generate--update8: generate--update8--types-only
	@echo 'running generator'
	@node ./generate-update8.ts en-US --skip-types

generate--version1_0--types:
	@node ./prepare-1.0.1.4.ts en-US
	@echo 'running generator'
	@node ./generate-version1.0.ts en-US --skip-data

generate--version1_0: generate--version1_0--types
	@echo 'running generator'
	@node ./generate-version1.0.ts af --skip-types
	@node ./generate-version1.0.ts ar --skip-types
	@node ./generate-version1.0.ts bg --skip-types
	@node ./generate-version1.0.ts ca --skip-types
	@node ./generate-version1.0.ts cs --skip-types
	@node ./generate-version1.0.ts da --skip-types
	@node ./generate-version1.0.ts de --skip-types
	@node ./generate-version1.0.ts el --skip-types
	@node ./generate-version1.0.ts en-AE --skip-types
	@node ./generate-version1.0.ts en-AU --skip-types
	@node ./generate-version1.0.ts en-CA --skip-types
	@node ./generate-version1.0.ts en-GB --skip-types
	@node ./generate-version1.0.ts en-US --skip-types
	@node ./generate-version1.0.ts eo --skip-types
	@node ./generate-version1.0.ts es-419 --skip-types
	@node ./generate-version1.0.ts es-ES --skip-types
	@node ./generate-version1.0.ts et --skip-types
	@node ./generate-version1.0.ts fa --skip-types
	@node ./generate-version1.0.ts fi --skip-types
	@node ./generate-version1.0.ts fr --skip-types
	@node ./generate-version1.0.ts he --skip-types
	@node ./generate-version1.0.ts hi --skip-types
	@node ./generate-version1.0.ts hr --skip-types
	@node ./generate-version1.0.ts hu --skip-types
	@node ./generate-version1.0.ts ia-001 --skip-types
	@node ./generate-version1.0.ts id --skip-types
	@node ./generate-version1.0.ts ie --skip-types
	@node ./generate-version1.0.ts io --skip-types
	@node ./generate-version1.0.ts it --skip-types
	@node ./generate-version1.0.ts ja --skip-types
	@node ./generate-version1.0.ts ko --skip-types
	@node ./generate-version1.0.ts kw --skip-types
	@node ./generate-version1.0.ts lb --skip-types
	@node ./generate-version1.0.ts lt --skip-types
	@node ./generate-version1.0.ts lv --skip-types
	@node ./generate-version1.0.ts mt --skip-types
	@node ./generate-version1.0.ts nl --skip-types
	@node ./generate-version1.0.ts no --skip-types
	@node ./generate-version1.0.ts pl --skip-types
	@node ./generate-version1.0.ts pt-BR --skip-types
	@node ./generate-version1.0.ts pt-PT --skip-types
	@node ./generate-version1.0.ts ro --skip-types
	@node ./generate-version1.0.ts ru --skip-types
	@node ./generate-version1.0.ts sk --skip-types
	@node ./generate-version1.0.ts sr-Cyrl --skip-types
	@node ./generate-version1.0.ts sr-Latn --skip-types
	@node ./generate-version1.0.ts sv --skip-types
	@node ./generate-version1.0.ts th --skip-types
	@node ./generate-version1.0.ts tr --skip-types
	@node ./generate-version1.0.ts uk --skip-types
	@node ./generate-version1.0.ts vi --skip-types
	@node ./generate-version1.0.ts vo --skip-types
	@node ./generate-version1.0.ts vun --skip-types
	@node ./generate-version1.0.ts zh-Hans --skip-types
	@node ./generate-version1.0.ts zh-Hant --skip-types

generate--version1_1--types:
	@node ./prepare-1.1.2.2.ts en-US
	@echo 'running generator'
	@node ./generate-version1.1.ts en-US --skip-data

generate--version1_1: generate--version1_1--types
	@node ./generate-version1.1.ts af --skip-types
	@node ./generate-version1.1.ts ar --skip-types
	@node ./generate-version1.1.ts bg --skip-types
	@node ./generate-version1.1.ts ca --skip-types
	@node ./generate-version1.1.ts cs --skip-types
	@node ./generate-version1.1.ts da --skip-types
	@node ./generate-version1.1.ts de --skip-types
	@node ./generate-version1.1.ts el --skip-types
	@node ./generate-version1.1.ts en-AE --skip-types
	@node ./generate-version1.1.ts en-AU --skip-types
	@node ./generate-version1.1.ts en-CA --skip-types
	@node ./generate-version1.1.ts en-GB --skip-types
	@node ./generate-version1.1.ts en-US --skip-types
	@node ./generate-version1.1.ts eo --skip-types
	@node ./generate-version1.1.ts es-419 --skip-types
	@node ./generate-version1.1.ts es-ES --skip-types
	@node ./generate-version1.1.ts et --skip-types
	@node ./generate-version1.1.ts fa --skip-types
	@node ./generate-version1.1.ts fi --skip-types
	@node ./generate-version1.1.ts fr --skip-types
	@node ./generate-version1.1.ts he --skip-types
	@node ./generate-version1.1.ts hi --skip-types
	@node ./generate-version1.1.ts hr --skip-types
	@node ./generate-version1.1.ts hu --skip-types
	@node ./generate-version1.1.ts ia-001 --skip-types
	@node ./generate-version1.1.ts id --skip-types
	@node ./generate-version1.1.ts ie --skip-types
	@node ./generate-version1.1.ts io --skip-types
	@node ./generate-version1.1.ts it --skip-types
	@node ./generate-version1.1.ts ja --skip-types
	@node ./generate-version1.1.ts ko --skip-types
	@node ./generate-version1.1.ts kw --skip-types
	@node ./generate-version1.1.ts lb --skip-types
	@node ./generate-version1.1.ts lt --skip-types
	@node ./generate-version1.1.ts lv --skip-types
	@node ./generate-version1.1.ts mt --skip-types
	@node ./generate-version1.1.ts nl --skip-types
	@node ./generate-version1.1.ts no --skip-types
	@node ./generate-version1.1.ts pl --skip-types
	@node ./generate-version1.1.ts pt-BR --skip-types
	@node ./generate-version1.1.ts pt-PT --skip-types
	@node ./generate-version1.1.ts ro --skip-types
	@node ./generate-version1.1.ts ru --skip-types
	@node ./generate-version1.1.ts sk --skip-types
	@node ./generate-version1.1.ts sr-Cyrl --skip-types
	@node ./generate-version1.1.ts sr-Latn --skip-types
	@node ./generate-version1.1.ts sv --skip-types
	@node ./generate-version1.1.ts th --skip-types
	@node ./generate-version1.1.ts tr --skip-types
	@node ./generate-version1.1.ts uk --skip-types
	@node ./generate-version1.1.ts vi --skip-types
	@node ./generate-version1.1.ts vo --skip-types
	@node ./generate-version1.1.ts vun --skip-types
	@node ./generate-version1.1.ts zh-Hans --skip-types
	@node ./generate-version1.1.ts zh-Hant --skip-types

generate--version1_2--types:
	@node ./prepare-1.2.0.0.ts en-US
	@node ./prepare-1.2.1.0.ts en-US
	@echo 'running generator'
	@node ./generate-version1.2.ts en-US --skip-data 1.2.0.0
	@node ./generate-version1.2.ts en-US --skip-data 1.2.1.0

generate--version_1_2: generate--version_1_2--types generate--version1_2_0_0 generate--version1_2_1_0

generate--version1_2_0_0:
	@node ./generate-version1.2.ts af --skip-types 1.2.0.0
	@node ./generate-version1.2.ts ar --skip-types 1.2.0.0
	@node ./generate-version1.2.ts bg --skip-types 1.2.0.0
	@node ./generate-version1.2.ts ca --skip-types 1.2.0.0
	@node ./generate-version1.2.ts cs --skip-types 1.2.0.0
	@node ./generate-version1.2.ts da --skip-types 1.2.0.0
	@node ./generate-version1.2.ts de --skip-types 1.2.0.0
	@node ./generate-version1.2.ts el --skip-types 1.2.0.0
	@node ./generate-version1.2.ts en-AE --skip-types 1.2.0.0
	@node ./generate-version1.2.ts en-AU --skip-types 1.2.0.0
	@node ./generate-version1.2.ts en-CA --skip-types 1.2.0.0
	@node ./generate-version1.2.ts en-GB --skip-types 1.2.0.0
	@node ./generate-version1.2.ts en-US --skip-types 1.2.0.0
	@node ./generate-version1.2.ts eo --skip-types 1.2.0.0
	@node ./generate-version1.2.ts es-419 --skip-types 1.2.0.0
	@node ./generate-version1.2.ts es-ES --skip-types 1.2.0.0
	@node ./generate-version1.2.ts et --skip-types 1.2.0.0
	@node ./generate-version1.2.ts fa --skip-types 1.2.0.0
	@node ./generate-version1.2.ts fi --skip-types 1.2.0.0
	@node ./generate-version1.2.ts fr --skip-types 1.2.0.0
	@node ./generate-version1.2.ts he --skip-types 1.2.0.0
	@node ./generate-version1.2.ts hi --skip-types 1.2.0.0
	@node ./generate-version1.2.ts hr --skip-types 1.2.0.0
	@node ./generate-version1.2.ts hu --skip-types 1.2.0.0
	@node ./generate-version1.2.ts ia-001 --skip-types 1.2.0.0
	@node ./generate-version1.2.ts id --skip-types 1.2.0.0
	@node ./generate-version1.2.ts ie --skip-types 1.2.0.0
	@node ./generate-version1.2.ts io --skip-types 1.2.0.0
	@node ./generate-version1.2.ts it --skip-types 1.2.0.0
	@node ./generate-version1.2.ts ja --skip-types 1.2.0.0
	@node ./generate-version1.2.ts ko --skip-types 1.2.0.0
	@node ./generate-version1.2.ts kw --skip-types 1.2.0.0
	@node ./generate-version1.2.ts lb --skip-types 1.2.0.0
	@node ./generate-version1.2.ts lt --skip-types 1.2.0.0
	@node ./generate-version1.2.ts lv --skip-types 1.2.0.0
	@node ./generate-version1.2.ts mt --skip-types 1.2.0.0
	@node ./generate-version1.2.ts nl --skip-types 1.2.0.0
	@node ./generate-version1.2.ts no --skip-types 1.2.0.0
	@node ./generate-version1.2.ts pl --skip-types 1.2.0.0
	@node ./generate-version1.2.ts pt-BR --skip-types 1.2.0.0
	@node ./generate-version1.2.ts pt-PT --skip-types 1.2.0.0
	@node ./generate-version1.2.ts ro --skip-types 1.2.0.0
	@node ./generate-version1.2.ts ru --skip-types 1.2.0.0
	@node ./generate-version1.2.ts sk --skip-types 1.2.0.0
	@node ./generate-version1.2.ts sr-Cyrl --skip-types 1.2.0.0
	@node ./generate-version1.2.ts sr-Latn --skip-types 1.2.0.0
	@node ./generate-version1.2.ts sv --skip-types 1.2.0.0
	@node ./generate-version1.2.ts th --skip-types 1.2.0.0
	@node ./generate-version1.2.ts tr --skip-types 1.2.0.0
	@node ./generate-version1.2.ts uk --skip-types 1.2.0.0
	@node ./generate-version1.2.ts vi --skip-types 1.2.0.0
	@node ./generate-version1.2.ts vo --skip-types 1.2.0.0
	@node ./generate-version1.2.ts vun --skip-types 1.2.0.0
	@node ./generate-version1.2.ts zh-Hans --skip-types 1.2.0.0
	@node ./generate-version1.2.ts zh-Hant --skip-types 1.2.0.0

generate--version1_2_1_0: generate--version1_2--types
	@node ./generate-version1.2.ts af --skip-types 1.2.1.0
	@node ./generate-version1.2.ts ar --skip-types 1.2.1.0
	@node ./generate-version1.2.ts bg --skip-types 1.2.1.0
	@node ./generate-version1.2.ts ca --skip-types 1.2.1.0
	@node ./generate-version1.2.ts cs --skip-types 1.2.1.0
	@node ./generate-version1.2.ts da --skip-types 1.2.1.0
	@node ./generate-version1.2.ts de --skip-types 1.2.1.0
	@node ./generate-version1.2.ts el --skip-types 1.2.1.0
	@node ./generate-version1.2.ts en-AE --skip-types 1.2.1.0
	@node ./generate-version1.2.ts en-AU --skip-types 1.2.1.0
	@node ./generate-version1.2.ts en-CA --skip-types 1.2.1.0
	@node ./generate-version1.2.ts en-GB --skip-types 1.2.1.0
	@node ./generate-version1.2.ts en-US --skip-types 1.2.1.0
	@node ./generate-version1.2.ts eo --skip-types 1.2.1.0
	@node ./generate-version1.2.ts es-419 --skip-types 1.2.1.0
	@node ./generate-version1.2.ts es-ES --skip-types 1.2.1.0
	@node ./generate-version1.2.ts et --skip-types 1.2.1.0
	@node ./generate-version1.2.ts fa --skip-types 1.2.1.0
	@node ./generate-version1.2.ts fi --skip-types 1.2.1.0
	@node ./generate-version1.2.ts fr --skip-types 1.2.1.0
	@node ./generate-version1.2.ts he --skip-types 1.2.1.0
	@node ./generate-version1.2.ts hi --skip-types 1.2.1.0
	@node ./generate-version1.2.ts hr --skip-types 1.2.1.0
	@node ./generate-version1.2.ts hu --skip-types 1.2.1.0
	@node ./generate-version1.2.ts ia-001 --skip-types 1.2.1.0
	@node ./generate-version1.2.ts id --skip-types 1.2.1.0
	@node ./generate-version1.2.ts ie --skip-types 1.2.1.0
	@node ./generate-version1.2.ts io --skip-types 1.2.1.0
	@node ./generate-version1.2.ts it --skip-types 1.2.1.0
	@node ./generate-version1.2.ts ja --skip-types 1.2.1.0
	@node ./generate-version1.2.ts ko --skip-types 1.2.1.0
	@node ./generate-version1.2.ts kw --skip-types 1.2.1.0
	@node ./generate-version1.2.ts lb --skip-types 1.2.1.0
	@node ./generate-version1.2.ts lt --skip-types 1.2.1.0
	@node ./generate-version1.2.ts lv --skip-types 1.2.1.0
	@node ./generate-version1.2.ts mt --skip-types 1.2.1.0
	@node ./generate-version1.2.ts nl --skip-types 1.2.1.0
	@node ./generate-version1.2.ts no --skip-types 1.2.1.0
	@node ./generate-version1.2.ts pl --skip-types 1.2.1.0
	@node ./generate-version1.2.ts pt-BR --skip-types 1.2.1.0
	@node ./generate-version1.2.ts pt-PT --skip-types 1.2.1.0
	@node ./generate-version1.2.ts ro --skip-types 1.2.1.0
	@node ./generate-version1.2.ts ru --skip-types 1.2.1.0
	@node ./generate-version1.2.ts sk --skip-types 1.2.1.0
	@node ./generate-version1.2.ts sr-Cyrl --skip-types 1.2.1.0
	@node ./generate-version1.2.ts sr-Latn --skip-types 1.2.1.0
	@node ./generate-version1.2.ts sv --skip-types 1.2.1.0
	@node ./generate-version1.2.ts th --skip-types 1.2.1.0
	@node ./generate-version1.2.ts tr --skip-types 1.2.1.0
	@node ./generate-version1.2.ts uk --skip-types 1.2.1.0
	@node ./generate-version1.2.ts vi --skip-types 1.2.1.0
	@node ./generate-version1.2.ts vo --skip-types 1.2.1.0
	@node ./generate-version1.2.ts vun --skip-types 1.2.1.0
	@node ./generate-version1.2.ts zh-Hans --skip-types 1.2.1.0
	@node ./generate-version1.2.ts zh-Hant --skip-types 1.2.1.0

precompile-validators:
	@node ./precompile-validators.ts

precompile-validators--oxlint:
	@./node_modules/.bin/oxlint --fix ./generated-types/lib.ts
