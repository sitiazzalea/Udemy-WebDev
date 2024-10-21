// console.log("Hello World from index in NPM");
// var generateName = require('sillyname');

import generateName from "sillyname";
import superheroes from "superheroes";
import {randomSuperhero} from 'superheroes';

var sillyName = generateName();
console.log(`my name is ${sillyName}.`);

var mySuperHeroName = randomSuperhero();
console.log(`I am ${mySuperHeroName}!!!`);