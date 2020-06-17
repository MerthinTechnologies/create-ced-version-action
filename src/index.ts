import * as core from '@actions/core';
import { CreateVersionCommandHandler } from '@ced/cli';

const run = async function() {
  try {
    const cliToken = core.getInput('cli-token') || process.env['CED_CLI_TOKEN'];
    const environment = core.getInput('environment') || process.env['CED_ENVIRONMENT'];
    const path = core.getInput('path') || process.env['CED_PROJECT_PATH'];

    if (!cliToken) {
      throw new Error(`Missing CED CLI token. Provide a CLI token by "cli-token" input parameter or define a variable "CED_CLI_TOKEN".`)
    }

    if (environment) {
      console.log(`Using environment: ${environment}`);
    }

    if (path) {
      process.chdir(path);
      console.log(`Using ${path} as working directory`);
    }

    const command = new CreateVersionCommandHandler(cliToken);
    const version = await command.run(environment);
    core.setOutput('version', version);
  } catch (error) {
    console.log(error);
    core.setFailed(error.message);
  }
}

run();