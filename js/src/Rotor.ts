import {start} from "repl";
import {getRndInteger, shuffle} from "./utils";
const R = require("ramda");

export interface RotorInterface {
  currentPos: number;
  notchPos: number;
  startPos: number;
  input: number[];
  output: number[];

  getOutput(input:number):number;
  rotate(nextRotor:Rotor | null): void;
}

export default class Rotor implements RotorInterface {
  currentPos: number;
  notchPos: number;
  startPos: number;
  input: number[];
  output: number[];

  constructor(startPos:number = 0, notchPos:number = 0, input:number[] = [], output:number[] = []) {
    this.notchPos = notchPos;
    this.currentPos = startPos;
    this.startPos = startPos;
    this.input = input;
    this.output = output;
  }

  rotate(nextRotor:Rotor | null = null): void {
  }

  getOutput(input:number):number {
    return this.output[R.findIndex(R.equals(input))(this.input) + 1];
  }
}

export function generateFromSettings(): void {

}

export function generateRandom(): Rotor {
  const startPos = getRndInteger(1, 26);
  const notchPos = getRndInteger(1, 26);
  const input    = shuffle(R.range(1, 27));
  const output   = shuffle(R.range(1, 27));
  return new Rotor(startPos, notchPos, input, output);
}