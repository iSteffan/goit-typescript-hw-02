/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfTheWeek {
  MON = 'Monday',
  TUE = 'Tuesday',
  WED = 'Wednesday',
  THU = 'Thursday',
  FRI = 'Friday',
  SAT = 'Saturday',
  SUN = 'Sunday',
}

function isWeekend(day: DayOfTheWeek): boolean {
  if (day === DayOfTheWeek.SAT || day === DayOfTheWeek.SUN) {
    return true;
  }
  return false;
}
