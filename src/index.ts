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

//   type ObjectType = { x: number; y: number };
//
//   Before Type aliases
//   let center: { x: number; y: number } = {
//   x: 0,
//   y: 0,
//   };

//   let unit: { x: number; y: number } = {
//   x: 2,
//   y: 2,
//   };

//   After Type aliases
//   let center1: ObjectType = {
//   x: 0,
//   y: 0,
//   };

//   let unit1: ObjectType = {
//   x: 2,
//   y: 2,
//   };

//----------------------------------------------------------------
// Function
//----------------------------------------------------------------

//   function add(x: number, y: number): number {
//     return x + y;
//   }

//   function log(message: string): void { // function with nothing to return
//     console.log(message);
//   }

//----------------------------------------------------------------
// Special type Any and Unknown
//----------------------------------------------------------------

//   let exampleAny: any;
//   let exampleUnknown: unknown;

//   Any
//   exampleAny = 123;
//   exampleAny = 'Hello';

//   Unknown
//   exampleUnknown = 123;
//   exampleUnknown = 'Hello';

//   any
//   exampleAny.allow.anything.you.can.imagine();
//   let anySetBoolean: boolean = exampleAny;

//   Unknown
//   if (typeof exampleUnknown === 'string') {
//     exampleUnknown.trim();
//   }

//   if (typeof exampleUnknown === 'boolean') {
//     let unknownSetBoolean: boolean = exampleUnknown;
//   }

//----------------------------------------------------------------
// Type Casting
//----------------------------------------------------------------

// By default if we don't assign any type to variables then it will be [:any] type in typescript.
// let someLagacyCode;

// someLagacyCode = toString();
// console.log(someLagacyCode.trim());

// So instead of [:any] we can assign these variables [:unknown] type to avoid run time error

// if (typeof someLagacyCode == 'string') {
//   console.log(someLagacyCode.trim());
// }

// --------------------------------------------------------------
// Type Declarations
// --------------------------------------------------------------

// console.log('user logged in', process.env.USER)

// 1). declare const process: any
// 2). best way to handle the error is to install npm i @types/node

// import express from 'express'; // it through error

// To handle this error we need to install npm i @types/express because if the
// package is not written in typescript then we have to install its type

// --------------------------------------------------------------
// Null versus undefined
// --------------------------------------------------------------

// function decoration(value: string | undefined | null) {
//   //return value.trim()
//   // it through this error "value' is possibly 'null' or 'undefined"
//   if (value == null) { // We have to use "==" instead of "==="
//     return
//   }
//   return value.trim()
// }

// decoration("Hello")

// --------------------------------------------------------------
// Type intersection
// --------------------------------------------------------------

type twoD = {
  x: number;
  y: number;
};
// Instead of using this we can also use it as follows 2) :
// First Example

// 1).
// type threeD = {
//   x: number,
//   y: number,
//   z: number
// }

// 2).
type threeD = twoD & {
  z: number;
};

// Second Example

type Person = {
  name: string
}

type Email = {
  email: string
}

type Phone = {
  phone: number
}

type allDetails = Person & Email & Phone