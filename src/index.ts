import * as core from '@actions/core';
import { CreateVersionCommandHandler } from '@ced/cli-dev';

const run = async function() {
  try {
    const cliToken = core.getInput('cli-token');
    const environment = core.getInput('environment');
    const command = new CreateVersionCommandHandler(cliToken);
    const version = await command.run(environment);
    core.setOutput('version', version);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();