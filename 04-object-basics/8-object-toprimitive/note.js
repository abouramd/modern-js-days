/*
 * There are three variants of type conversion,
 * that happen in various situations.
 * They’re called “hints”:
 *
 *   "string" For an object-to-string conversion
 *
 *   "number" For an object-to-number conversion
 *
 *   "default" Occurs in rare cases when
 *   the operator is “not sure” what type to expect.
 *
 *
 * To do the conversion, JavaScript tries to find
 * and call three object methods:
 *
 *   Call obj[Symbol.toPrimitive](hint) – the method
 *   with the symbolic key Symbol.toPrimitive (system symbol),
 *   if such method exists,
 *
 *   Otherwise if hint is "string" try calling obj.toString()
 *   or obj.valueOf(), whatever exists.
 *
 *   Otherwise if hint is "number" or "default" try calling 
 *   obj.valueOf() or obj.toString(), whatever exists.
 */

// symbol.toPrimitive

{
  let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
      console.log(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };

  // conversions demo:
  console.log(String(user)); // hint: string -> {name: "John"}
  console.log(+user); // hint: number -> 1000
  console.log(user + 500); // hint: default -> 1500
}

// overwrite toString/valueOf 

{
  let user = {
    name: "John",
    money: 1000,

    // for hint="string"
    toString() {
      console.log("call toString");
      return `{name: "${this.name}"}`;
    },

    // for hint="number" or "default"
    valueOf() {
      console.log("call valueOf");
      return this.money;
    }

  };

  console.log(String(user)); // toString -> {name: "John"}
  console.log(+user); // valueOf -> 1000
  console.log(user + 500); // valueOf -> 1500
}

/*
 * In the absence of Symbol.toPrimitive and valueOf,
 * toString will handle all primitive conversions.
 */

{
  let user = {
    name: "John",

    toString() {
      return this.name;
    }
  };

  console.log(String(user)); // toString -> John
  console.log(user + 500); // toString -> John500
}

// this methods should return a primitive data type



