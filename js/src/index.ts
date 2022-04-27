#!/usr/bin/env node
import {match} from "assert";

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const prompts = require('prompts');
const program = require('commander');

clear();
console.log(
    chalk.red(
        figlet.textSync('Enigma Simulator', { horizontalLayout: 'full' })
    )
);

(async () => {
    const response = await prompts({
        type: 'text',
        name: 'message',
        message: 'Message to encrypt:',
        format: function (val: String) {
            const matches = Array.from(val.toUpperCase().matchAll(/[A-Z]{1}/g));
            let out: Array<String> = [];
            for (let i = 0; i < matches.length; i++)
                out.push(matches[i][0])

            return out;
        },
    });

    let out: Array<String> = [];
    response.message.forEach(function (letter: String) {
        out.push(encrypt(letter));
    });
    console.log(out.join(''));
})();

function encrypt(letter: String): String {
    return letter;
}