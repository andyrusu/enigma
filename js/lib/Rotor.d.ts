export interface RotorInterface {
    currentPos: number;
    notchPos: number;
    startPos: number;
    input: number[];
    output: number[];
    rotate(): void;
}
export interface IO {
}
export default class Rotor implements RotorInterface {
    currentPos: number;
    notchPos: number;
    startPos: number;
    input: number[];
    output: number[];
    constructor(startPos?: number, notchPos?: number, input?: number[], output?: number[]);
    rotate(): void;
}
export declare function generateFromSettings(): void;
export declare function generateRandom(): Rotor;
