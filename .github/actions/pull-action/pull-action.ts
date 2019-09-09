import * as core from "@actions/core";

async function run() {
  try {
    const messageInput = core.getInput("message");
    core.setOutput("message", messageInput);
  } catch (error) {
    core.setFailed(error.message + "\n\n" + error.stack);
  }
}

run();

export default run;
