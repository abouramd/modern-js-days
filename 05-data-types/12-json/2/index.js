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

// console.log(meetup);

console.log(JSON.stringify(meetup, function replacer(key, value) {
  /* your code */
  if (key && value == meetup) return undefined; return value;
}));

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
