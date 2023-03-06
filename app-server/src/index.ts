import { AocServer } from '@atlantis-of-code/aoc-server';
import 'reflect-metadata';

require('express-async-errors');

const aocServer = new AocServer();

aocServer.listen();
