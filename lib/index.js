"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const cli_1 = require("@ced/cli");
const run = async function () {
    try {
        const cliToken = core.getInput('cli-token');
        const environment = core.getInput('environment');
        const command = new cli_1.CreateVersionCommandHandler(cliToken);
        const version = await command.run(environment);
        core.setOutput('version', version);
    }
    catch (error) {
        core.setFailed(error.message);
    }
};
run();
//# sourceMappingURL=index.js.map