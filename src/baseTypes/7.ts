/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const enum Days {
   Monday,
   Tuesday,
   Wednesday,
   Thursday,
   Friday,
   Saturday,
   Sunday,
}

function isWeekend(day: Days): boolean{
   return day === Days.Saturday || day === Days.Sunday;
   
}

//console.log(isWeekend(Days.Saturday));