[![Coverage Status](https://coveralls.io/repos/github/Satisfactory-Clips-Archive/Docs.json.ts/badge.svg?branch=unify-typed_string-types)](https://coveralls.io/github/Satisfactory-Clips-Archive/Docs.json.ts?branch=unify-typed_string-types)
[![Workflow Status](https://github.com/Satisfactory-Clips-Archive/Docs.json.ts/actions/workflows/node.js.yml/badge.svg?branch=unify-typed_string-types)](https://github.com/Satisfactory-Clips-Archive/Docs.json.ts/actions/workflows/node.js.yml?query=branch%3Aunify-typed_string-types)

# Notes

-   Very alpha.
-   Does not include Docs.json intentionally.

## Current Plan for Development:

-   If [the relevant QA Site post](https://questions.satisfactorygame.com/post/65e5367dcd33105bd53f931f) gets resolved via a public announcement and/or the inclusion of a license:
    -   generated files will be included in the repo
    -   Docs.json _may_ be included
    -   Docs.utf8.json _may_ be included
-   the schema-based results matcher has been abstracted
    -   portions of the schema that use the `object_string` keyword should parse the object string then validate the resultant object according to the schema chunk within the keyword
    -   `$ref` objects should return a result for that particular type etc.
	-   the contents of [data-progress.md](data-progress.md) do not indicate that data generation is _valid_, only that it spits out _something_.

# Using

## Requirements

-   Docker
    -   only tested with Docker for windows & git bash terminals
-   A copy of Update 8's `Docs.json` file

## Instructions

1. Checkout locally
2. Run `make up install`
3. Copy `Docs.json` to `./data/`
4. Run `make validate`
    - if this fails, either the `Docs.json` is wrong or the schema is out-of-date
    - if this succeeds, run `make generate`

### IDE Integration

-   [Docs.json.ts.dic](Docs.json.ts.dic) can be used by JetBrains' IDEs to suppress false-positive matches in the spellchecker as a result of the contents of `Docs.json`
    -   refer to JetBrains' own documentation for adding `.dic` files to the spell checking.
-   `eslint` can result in the IDE slowing to a crawl if the `generated-types` folder is not excluded during development.

#### Remote NodeJs Interpreter

-   Currently based from `node:21-alpine`
-   Specifying the user is recommended
-   If your IDE does not allow you to pass arguments to plain docker images (looking at you, JetBrains), you will likely need to use the [docker-compose.yml](docker-compose.yml) services

##### ts-node

-   Refer to [Makefile](Makefile) for `DOCKER_PREFIX`

##### node

-   Refer to [Makefile](Makefile) for `DOCKER_PREFIX_NO_LOADER`

# License

[Multi-licensed, see LICENSE.md](LICENSE.md)
