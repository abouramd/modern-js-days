let user = {
  name: 'John',
  age: 30
};

console.log(count(user)); // 2


function count(user) {
  return Object.keys(user).length;
}
