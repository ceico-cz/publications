import { App } from "octokit";

const requiredEnvironmentVariables = [
  "GITHUB_APP_ID",
  "GITHUB_APP_INSTALLATION_ID",
  "GITHUB_APP_PRIVATE_KEY",
];

for (const name of requiredEnvironmentVariables) {
  if (!process.env[name]) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
}

const app = new App({
  appId: process.env.GITHUB_APP_ID,
  privateKey: process.env.GITHUB_APP_PRIVATE_KEY.replace(/\\n/g, "\n"),
});

const octokit = await app.getInstallationOctokit(
  process.env.GITHUB_APP_INSTALLATION_ID,
);

await octokit.request(
  "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
  {
    owner: "ceico-cz",
    repo: "publications",
    workflow_id: "pages.yml",
    ref: "main",
  },
);

console.log("Workflow dispatch requested successfully.");
