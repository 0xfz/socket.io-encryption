import { createDiffieHellman } from 'crypto';
import ytest from 'browserify'
const alice = createDiffieHellman(2048);
ytest.
console.log(alice)