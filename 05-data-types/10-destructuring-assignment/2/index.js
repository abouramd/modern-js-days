let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let topPrix = 0;
    let topPerson = null;

    for (let [key, value] of Object.entries(salaries)) {
        if (value > topPrix) {
            topPrix = value;
            topPerson = key;
        }
    }
    return topPerson;
}
let topPrix;

console.log(topSalary(salaries));