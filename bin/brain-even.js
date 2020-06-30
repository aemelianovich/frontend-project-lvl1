#!/usr/bin/env node

import * as cli from '../src/cli.js';
import { brainEvenName } from '../src/games/brainEvenGame.js';
import runGame from '../src/index.js';

cli.welcomeMsg();
const userName = cli.askUserName();
cli.greetingUser(userName);

runGame(3, userName, brainEvenName);
