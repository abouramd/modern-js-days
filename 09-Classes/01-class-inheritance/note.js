// class inheritance is a way for one class to extend another class 


// the extends keyword 
{
  // the syntax to extand an other class is `class Child extends Parent`

  class Animal {

    constructor(name) {
      console.log('Animal constructor');
      this.speed = 0;
      this.name = name;
    }

    run(speed) {
      this.speed = speed;
      console.log(this.name, 'run with speed', this.speed);
    }

    stop() {
      this.speed = 0;
      console.log(this.name, 'stands still');
    }
  }

  class Dog extends Animal {
    constructor(name) {
      console.log('Dog constructor');

      // you can use super keyword to call the parent constructor
      super(name); // the parent constructor always uses its own field value not the overridden one
    }
    bark() {
      console.log(this.name, "how how how ...");
    }
    // overriding a method
    stop() {
      console.log('this is ths new stop function');
      // you can use super keyword to call the parent method
      super.stop();
    }
  }

  let myDog = new Dog('jack');

  myDog.run(5);
  myDog.bark();
  myDog.stop();
}


