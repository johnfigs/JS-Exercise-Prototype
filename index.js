/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
 
  Person.prototype.eat = function(edible){
    if(this.stomach.length < 10){
      this.stomach.push(edible);
    }
  }
  Person.prototype.poop = function(){
    this.stomach = [];
  }

  Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`;
  }
  
  const romy = new Person('Romy', 29);
  const bradly = new Person('Bradly', 27);
  const jordan = new Person('Jordan', 24);
  console.log(romy);
  console.log(bradly);
  console.log(jordan);

  jordan.eat("pizza");
  jordan.eat("tacos")
  console.log(jordan.stomach);
  jordan.poop();
  console.log(jordan.stomach);
  console.log(jordan.toString());
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) {
   this.model = model;
   this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  Car.prototype.fill = function(gallons){
    return this.tank = this.tank + gallons;
  }
  //  const myCar = new Car("Civic SI", 30);
  //  console.log(myCar);
  //  myCar.fill(30);
  //  console.log(myCar);

  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) {
   Person.call(this, name, age);
   this.favoriteToy = favoriteToy;
  }

  Baby.prototype = Object.create(Person.prototype);

  Baby.prototype.play = function(favoriteToy){
   return  `Playing with ${this.favoriteToy}`;
  }
  // const myBaby = new Baby('Mabel', '9 months', 'Ball');
  // console.log(myBaby.favoriteToy);
  // myBaby.eat("kibble");
  // myBaby.eat("Ball");
  // console.log(myBaby.stomach);
  // myBaby.poop();
  // console.log(myBaby.stomach);

  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. Window binding. Most likely used in error is Window binding. It occurs when we don't give the 'this' keyword a context.
    2. Implicit binding. Used in object methods. When used, look to the left of the dot, that is the object that 'this' will refer to. 
    3. Explicit binding happens 3 ways. The first, using '.call', this will allow you to your object as a parameter and bind 'this' to it. 'call' immediately invokes the function. Second, apply, similar to '.call', but expects an array of parameters. Lastly, '.bind', takes arguments one by one and returns a new function, that can be called later. 
    4. New binding, create a new object and binds 'this' to it. 
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}