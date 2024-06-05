// syntax
{
  class MyClass {
    // class methods
    constructor() { }
    method1() { }
    method1() { }
    method1() { }
    method1() { }
  }
}


{
  class User {
    constructor(name) {
      this.name = name;
    }

    sayHi() {
      console.log("hello", this.name);
    }
  }

  let user = new User("abdelhay");
  user.sayHi();

  // is js a class is a kind of function 

  console.log(typeof User);
}

// class expression 
{
  let User = class {
    sayHi() {
      console.log('hi');
    }
  };

  // Named class expression
  User = class MyClass {
    sayHi() {
      console.log(MyClass);
    }
  };

  new User().sayHi(); // work 
  // console.log(MyClass); // error MyClass name isn't visible outside of the class 

  // make a class dynamiclly on demand 


  function makeClass(name) {
    // decalar a class and return it 
    return class {
      sayHi() {
        console.log(name);
      }
    }
  }

  // create a new class 
  User = makeClass('abdelhay');

  new User().sayHi(); // abdelhay
}

// getter / setter 

{
  class User {
    constructor(name) {
      this.name = name;
    }

    get name() {
      return this._name;
    }

    set name(value) {
      if (value.length < 4) {
        console.log('name is too short.');
        return;
      }
      this._name = value;
    }
  }

  let user = new User("abdelhay");

  console.log(user.name); // abdelhay 

  user = new User("") // name is too short

  // technically such class declaration works by creating getter and setters in User.prototype

}



// computed names 

{
  class User {
    ['say' + 'Hi']() {
      console.log('hi');
    }
  }
  new User().sayHi();
}

// class fields 
{
  class User {
    name = 'john';
  }

  let user = new User();
  console.log(user.name); // john 
  console.log(User.prototype.name); // undefined

  // the important diff of class fields is that are set on individual objects not User,prototype

}




