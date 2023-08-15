"use strict";
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
// Array
let array = [1, 2, 3];
// Usage
array = [1];
array = [1, 2, 3, 4, 5];
array = ['hello']; // Error😡
// Tuple
let tuple = [0, 0];
// Usage
tuple = [1, 2];
tuple = [1]; // Error😡: must be two items
tuple = [1, 2, 3]; // Error😡: must be two items only
tuple = ['hello', 5]; // Error😡: must number
