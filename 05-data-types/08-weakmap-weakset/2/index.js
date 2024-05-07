let readedMessages = new WeakMap();

function readMessages(message) {
  if (!readedMessages.has(message))
    readedMessages.set(message, new Date().toDateString());
  console.log("this message readed in", readedMessages.get(message));
}


let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];


readMessages(messages[0]);
readMessages(messages[1]);
readMessages(messages[0]);
