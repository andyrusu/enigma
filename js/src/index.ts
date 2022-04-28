#!/usr/bin/env node
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const prompts = require("prompts");
const program = require("commander");
const signale = require("signale");
const R = require("ramda");
import {generateRandom} from "./Rotor";
import {numToLetter, letterToNum} from "./utils";

// Config
const plugboard = { 5: 2 };
const rotorOne = generateRandom();
const rotorTwo = generateRandom();
const rotorThree = generateRandom();

// Header
clear();
console.log(
  chalk.red(figlet.textSync("Enigma Simulator", { horizontalLayout: "full" }))
);

// Reading message
(async () => {
  const response = await prompts({
    type: "text",
    name: "message",
    message: "Message to encrypt:",
    format: function (val: String): number[] {
      const matches = Array.from(val.toUpperCase().matchAll(/[A-Z]{1}/g));
      let out: number[] = [];
      for (let i = 0; i < matches.length; i++) out.push(letterToNum(matches[i][0]));

      return out;
    },
  });

  let out: Array<String> = [];
  response.message.forEach(function (letter: number) {
    out.push(numToLetter(encrypt(letter)));
  });
  signale.complete(out.join(""));
  console.log(chalk.red("Settings:"));
  signale.debug("Plugboard: ", plugboard);
  signale.debug("Rotor I: ", rotorOne);
  signale.debug("Rotor II: ", rotorTwo);
  signale.debug("Rotor III: ", rotorThree);
})();

// Doing the encryption
const encrypt = R.compose(checkPlugboard, rotors, checkPlugboard);

function checkPlugboard(letter: number): number {
  if (R.hasIn(letter, plugboard)) return R.prop(letter, plugboard);
  return letter;
}

function rotors(letter: number): number {
  rotorOne.getOutput(letter);
  return letter;
}
