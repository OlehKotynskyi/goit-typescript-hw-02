/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, U extends object>(objA: T, objB: U) {
   return Object.assign(objA, objB);
}

// Варіант другий
//function merge<T, U>(objA: T, objB: U): T & U {
//   return { ...objA, ...objB };
//}

export {};
