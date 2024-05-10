let date = new Date(2012, 0, 3); // 3 Jan 2012
console.log(getWeekDay(date)); // should output "TU"






function getWeekDay(date) {
    let dayName = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

    return dayName[date.getDay() - 1];
}