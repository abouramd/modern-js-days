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
     * Array of properties to encode or a mapping function function(key, value).
     * 
     * 
     * space
     * Amount of space to use for formatting
     * Most of the time, JSON.stringify is used with the first argument only. 
     * But if we need to fine-tune the replacement process, like to filter out circular references,
     * we can use the second argument of JSON.stringify.
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

    alert(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));
    /*
    {
      "title":"Conference",
      "participants":[{"name":"John"},{"name":"Alice"}],
      "place":{"number":23}
    }
    */
}