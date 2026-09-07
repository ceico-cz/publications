# Publications

This repository includes an example GitHub Actions workflow that prints
`Hello, world!`.

The workflow runs on pushes to `main` and can also be started manually from
the **Actions** tab.

## Website

The GitHub Pages site is built from the contents of the `www` directory and
deployed by the `Deploy GitHub Pages` workflow.

## CMS integration

See `examples/cms-trigger` for a minimal Octokit example that authenticates as
the repository's GitHub App and dispatches the Hello World workflow.
