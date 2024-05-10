function getSecondsToTomorrow() {
    let date = new Date();

    return (24 * 60 * 60) - (date.getSeconds() + 60 * (date.getMinutes() + date.getHours() * 60));
}

console.log(getSecondsToTomorrow());