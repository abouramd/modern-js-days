/* JSON.stringify
 * The JSON (JavaScript Object Notation) is a general format to represent values and objects. It is described as in RFC 4627 standard. Initially it was made for JavaScript, but many other languages have libraries to handle it as well. So it’s easy to use JSON for data exchange when the client uses JavaScript and the server is written on Ruby/PHP/Java/Whatever.
 * 
 * JavaScript provides methods:
 * 
 *  JSON.stringify to convert objects into JSON.
 *  JSON.parse to convert JSON back into an object.
 */

{
  let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };

  let json = JSON.stringify(student);

  console.log(typeof json); // we've got a string!

  console.log(json);
  /* JSON-encoded object:
  {
    "name": "John",
    "age": 30,
    "isAdmin": false,
    "courses": ["html", "css", "js"],
    "spouse": null
  }
  */
}
/*
 * The method JSON.stringify(student) takes the object and converts it into a string.
 * 
 * The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object. We are ready to send it over the wire or put into a plain data store.
 * 
 * Please note that a JSON-encoded object has several important differences from the object literal:
 * 
 * Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".
 * Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30.
 * JSON.stringify can be applied to primitives as well.
 * 
 * JSON supports following data types:
 * 
 *      Objects { ... }
 *      Arrays [ ... ]
 *      Primitives:
 *      strings,
 *      numbers,
 *      boolean values true/false,
 *      null.
 */
{
  // a number in JSON is just a number
  console.log(JSON.stringify(1)) // 1

  // a string in JSON is still a string, but double-quoted
  console.log(JSON.stringify('test')) // "test"

  console.log(JSON.stringify(true)); // true

  console.log(JSON.stringify([1, 2, 3])); // [1,2,3]
}
/*
 * JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.
 * 
 * Namely:
 * 
 * Function properties (methods).
 * Symbolic keys and values.
 * Properties that store undefined.
 */
{

  let user = {
    sayHi() { // ignored
      console.log("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
  };

  console.log(JSON.stringify(user)); // {} (empty object)
}

// nestedobject
{
  let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
  };

  console.log(JSON.stringify(meetup));
  /* The whole structure is stringified:
  {
    "title":"Conference",
    "room":{"number":23,"participants":["john","ann"]},
  }
  */
}

// The important limitation: there must be no circular references.
{
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
  };

  meetup.place = room; // meetup references room
  room.occupiedBy = meetup; // room references meetup

  // JSON.stringify(meetup); // Error: Converting circular structure to JSON
}


// Excluding and transforming: replacer


{
  /*
   * The full syntax of JSON.stringify is:
   * 
   * let json = JSON.stringify(value[, replacer, space])
   * 
   * 
   * value
   * 
   * A value to encode.
   * 
   * 
   * replacer
   * A function that alters the behavior of the stringification process,
   * or an array of strings and numbers that specifies properties of value
   * to be included in the output. If replacer is an array, all elements
   * in this array that are not strings or numbers (either primitives
   * or wrapper objects), including Symbol values, are completely ignored.
   * If replacer is anything other than a function or an array 
   * (e.g. null or not provided), all string-keyed properties of 
   * the object are included in the resulting JSON string.
   * 
   * 
   * space
   * A string or number that's used to insert white space (including indentation, line break characters, etc.) into the output JSON string for readability purposes.
   *  
   * If this is a number, it indicates the number of space characters to be used as indentation, clamped to 10 (that is, any number greater than 10 is treated as if it were 10). Values less than 1 indicate that no space should be used.
   *  
   * If this is a string, the string (or the first 10 characters of the string, if it's longer than that) is inserted before every nested object or array.
   *  
   * If space is anything other than a string or number (can be either a primitive or a wrapper object) — for example, is null or not provided — no white space is used.   
   */
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup references room
  };

  room.occupiedBy = meetup; // room references meetup

  console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));
  /*
  {
    "title":"Conference",
    "participants":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */

}
// Fortunately, we can use a function instead of an array as the replacer.

{
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup references room
  };

  room.occupiedBy = meetup; // room references meetup

  console.log(JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
  }));

  /* key:value pairs that come to replacer:
   * :             [object Object]
   * title:        Conference
   * participants: [object Object],[object Object]
   * 0:            [object Object]
   * name:         John
   * 1:            [object Object]
   * name:         Alice
   * place:        [object Object]
   * number:       23
   * occupiedBy: [object Object]
   */
}

// Formatting: space
{
  let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };

  console.log(JSON.stringify(user, null, 2));
  /* two-space indents:
  {
    "name": "John",
    "age": 25,
    "roles": {
      "isAdmin": false,
      "isEditor": true
    }
  }
  */

  /* for JSON.stringify(user, null, 4) the result would be more indented:
  {
      "name": "John",
      "age": 25,
      "roles": {
          "isAdmin": false,
          "isEditor": true
      }
  }
  */
}


/*
 * Like toString for string conversion, an object may provide method toJSON
 * for to-JSON conversion. JSON.stringify automatically calls it if available.
 */
{
  // without toJSON
  {
    let room = {
      number: 23
    };

    let meetup = {
      title: "Conference",
      date: new Date(Date.UTC(2017, 0, 1)),
      room
    };

    console.log(JSON.stringify(meetup));
    /*
      {
        "title":"Conference",
        "date":"2017-01-01T00:00:00.000Z",  // (1)
        "room": {"number":23}               // (2)
      }
    */
  }
  // with toJSON();
  {
    let room = {
      number: 23,
      toJSON() {
        return this.number;
      }
    };

    let meetup = {
      title: "Conference",
      room
    };

    console.log(JSON.stringify(room)); // 23

    console.log(JSON.stringify(meetup));
    /*
      {
        "title":"Conference",
        "room": 23
      }
    */
  }
}

// JSON.parse
// To decode a JSON-string, we need another method named JSON.parse.
{
  // decode an array 
  {
    // stringified array
    let numbers = "[0, 1, 2, 3]";

    numbers = JSON.parse(numbers);

    console.log(numbers[1]); // 1
  }

  // decode an object
  {
    let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

    let user = JSON.parse(userData);

    console.log(user.friends[1]); // 1
  }
  // error in json 
  {
    let json = `{
    name: "John",                     // mistake: property name without quotes
    "surname": 'Smith',               // mistake: single quotes in value (must be double)
    'isAdmin': false                  // mistake: single quotes in key (must be double)
    "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
    "friends": [0,1,2,3]              // here all fine
    }`;
  }


  // reviver 

  {
    {
      let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

      let meetup = JSON.parse(str);

      // console.log(meetup.date.getDate()); // Error!
    }
    // with reviver 
    {
      let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

      let meetup = JSON.parse(str, function(key, value) {
        if (key == 'date') return new Date(value);
        return value;
      });

      console.log(meetup.date.getDate()); // now works!
    }
    // this is work for nested object 
    {

      let schedule = `{
        "meetups": [
          {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
          {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
        ]
      }`;

      schedule = JSON.parse(schedule, function(key, value) {
        if (key == 'date') return new Date(value);
        return value;
      });

      console.log(schedule.meetups[1].date.getDate()); // works!
    }
  }

}

