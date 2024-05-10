function getSecondsToday() {
    let date = new Date();

    return date.getSeconds() + 60 * (date.getMinutes() + date.getHours() * 60);
}

console.log(getSecondsToday());