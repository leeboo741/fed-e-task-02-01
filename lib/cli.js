#!/usr/bin/env node
"use strict";
const meow = require("meow");
const fedETask0201 = require("./");

const cli = meow(`
Usage
  $ fed-e-task-02-01 [input]

Options
  --foo  Lorem ipsum. [Default: false]

Examples
  $ fed-e-task-02-01
  unicorns
  $ fed-e-task-02-01 rainbows
  unicorns & rainbows
`);
