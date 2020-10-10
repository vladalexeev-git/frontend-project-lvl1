#!/usr/bin/env node
import name from '../src/cli.js';

const userName = name();
console.log(`Hello, ${userName}!`);
