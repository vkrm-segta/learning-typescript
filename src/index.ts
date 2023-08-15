// ----------------------------------------------------------------
//  Primitive types
// ----------------------------------------------------------------

//   const weight: number = 52.4;
//   const intelligent: boolean = true;
//   const Name: string = 'Vikram segta';

//   const undefinedValue: undefined = undefined;
//   const nullValue: null = null;

//   const star: symbol = Symbol('star');
//   const bigg: bigint = 24n;

// ----------------------------------------------------------------
// Instance types
// ----------------------------------------------------------------

//   let regExp: RegExp = new RegExp('abcdefghijklmnopqrstuvwxyzABCDEF');
//   let array: Array<number> = [1, 2, 3];
//   let set: Set<number> = new Set([1, 2, 1, 3]);

// ----------------------------------------------------------------
// Arrray and tuple
// ----------------------------------------------------------------

//   Array
//   let array: number[] = [1, 2, 3];

//   Usage 👇

//   array = [1];
//   array = [1, 2, 3, 4, 5];
//   array = ['hello'] // Error😡

//   Tuple
//   let tuple: [number, number] = [0,0]

//   Usage 👇

//   tuple = [1,2]
//   tuple = [1] // Error😡: must be two items
//   tuple = [1,2,3] // Error😡: must be two items only
//   tuple = ['hello', 5] // Error😡: must number

// ----------------------------------------------------------------
// Object type and Type aliases
// ----------------------------------------------------------------

type ObjectType = { x: number; y: number };

// Before Type aliases
let center: { x: number; y: number } = {
  x: 0,
  y: 0,
};

let unit: { x: number; y: number } = {
  x: 2,
  y: 2,
};

// After Type aliases
let center1: ObjectType = {
  x: 0,
  y: 0,
};

let unit1: ObjectType = {
  x: 2,
  y: 2,
};
