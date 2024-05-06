function aclean(myArr) {
  let myMap = new Map;

  myArr.forEach(e => {
    myMap.set(e.toLowerCase().split('').sort().join(''), e);
  });

  return Array.from(myMap.values());
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
