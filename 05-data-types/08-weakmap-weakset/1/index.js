let readedMessages = new WeakSet();

function readMessages(message) {
  if (!readedMessages.has(message)) {
    console.log("message from", message.from);
    console.log("it content", message.text);
    readedMessages.add(message);
  }
  else
    console.log("this message already readed.");
}


let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];


readMessages(messages[0]);
readMessages(messages[1]);
readMessages(messages[0]);


