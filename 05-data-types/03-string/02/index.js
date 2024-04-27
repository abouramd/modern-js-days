function checkSpam(str) {
  if (!str) return str;

  return str.toLowerCase().includes("spam") || str.toLowerCase().includes("fake");

}


console.log(checkSpam("new spam"));
console.log(checkSpam("fake story"));
console.log(checkSpam("1337"));
