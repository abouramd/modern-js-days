let login = prompt("What is your login?");

if (login == null) {
  alert("Canceled");
}
else if (login === "Admin") {
  let password = prompt("Password?");
  if (password == null) {
    alert("Canceled");
  }
  else if (password === "TheMaster") {
    alert("Welcome");
  }
  else {
    alert("Wrong password");
  }
}
else {
  alert("I don't know you");
}



