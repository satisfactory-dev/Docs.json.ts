# Notes

-   Very alpha.
-   Does not include Docs.json intentionally.

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
