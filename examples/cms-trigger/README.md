# CMS workflow trigger example

This example authenticates as the `ceico-publications-cms` GitHub App,
automatically obtains a short-lived installation token, and dispatches
`.github/workflows/hello_world.yml` on `main`.

The workflow currently has no required inputs.

## Run

```bash
npm install
export GITHUB_APP_ID="<app-id>"
export GITHUB_APP_INSTALLATION_ID="<installation-id>"
export GITHUB_APP_PRIVATE_KEY="$(cat ../../.secrets/ceico-publications-cms.pem)"
npm run dispatch
```

Run these commands from this directory. The script does not log the private key
or installation token.
