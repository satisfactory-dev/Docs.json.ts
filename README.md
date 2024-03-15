# Notes

-   Very alpha.
-   Does not include Docs.json intentionally.

## Current Plan for Development:

-   skipping improving performance of validation (that's in a separate branch for now)
-   the schema-based results matcher has been abstracted
    -   portions of the schema that use the `object_string` keyword should parse the object string then validate the resultant object according to the schema chunk within the keyword
    -   `$ref` objects should return a result for that particular type etc.

# Using

## Requirements

-   Docker
    -   only tested with Docker for windows & git bash terminals
-   A copy of Update 8's `Docs.json` file

## Instructions

1. Checkout locally
2. Run `make install`
3. Copy `Docs.json` to `./data/`
4. Run `make validate`
    - if this fails, either the `Docs.json` is wrong or the schema is out-of-date
    - if this succeeds, run `make generate`

# License

[Multi-licensed, see LICENSE.md](LICENSE.md)
