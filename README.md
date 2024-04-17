[![Coverage Status](https://coveralls.io/repos/github/Satisfactory-Clips-Archive/Docs.json.ts/badge.svg?branch=main)](https://coveralls.io/github/Satisfactory-Clips-Archive/Docs.json.ts?branch=main)
[![Workflow Status](https://github.com/Satisfactory-Clips-Archive/Docs.json.ts/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/Satisfactory-Clips-Archive/Docs.json.ts/actions/workflows/node.js.yml?query=branch%3Amain)

# Current Plan for Development:

-   If [the relevant QA Site post](https://questions.satisfactorygame.com/post/65e5367dcd33105bd53f931f) gets resolved via a public announcement and/or the inclusion of a license:
    -   generated files will be included in the repo
    -   Docs.json _may_ be included
    -   Docs.utf8.json _may_ be included
-   the contents of [data-progress.md](data-progress.md) do not indicate that data generation is _valid_, only that it spits out _something_.

# Using

## Troubleshooting

-   If `SyntaxError: Invalid or unexpected token` occurs
    -   Clear out previous precompiled Ajv validators
    -   Clear out the generated types folder

## Requirements

-   Docker
    -   recommend vscode devcontainer support
    -   phpstorm's devcontainer support works but doesn't seem as capable
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

## In a separate project

Until such time as this project is published as an npm package,
it is recommended to use it as a git submodule due to ts-node having
issues with importing .ts files from node_modules
(so the project can't be installed direct from git), i.e.:

1. In your new project, run `git submodule add
https://github.com/Satisfactory-Clips-Archive/Docs.json.ts.git`
1. refer to [package.json](package.json) to install packages that won't have
   been installed due to circumventing the `npm install` approach.
1. refer to [discover-types.ts](discover-types.ts) for how to generate the
   types & data

    - You will need to replace the usage of the `docs` helper with
      something like the following (where `${__dirname}/data/` is the data
      path in your new project):

        ```ts
        const __dirname = __dirname_from_meta(import.meta);
        const ajv = new Ajv({
        	verbose: true,
        	code: {
        		source: true,
        		es5: false,
        		esm: true,
        		optimize: true,
        	},
        });
        configure_ajv(ajv);

        export const docs = new DocsTsGenerator({
        	ajv,
        	docs_path: `${__dirname}/data/Docs.json`,
        	cache_path: `${__dirname}/data/`,
        });
        ```

# License

[Multi-licensed, see LICENSE.md](LICENSE.md)
