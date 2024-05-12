let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
  /* your code */
  let arr = ["title", "occupiedBy", "name", "place", "number"];
  console.log(arr.includes(key), key);
  if (key && value != meetup)
    return value;
  return undefined;
}));

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
