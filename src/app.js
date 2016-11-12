
// @annotation
class Person {
  constructor() {
    this.firstname = "Alice";
    this.lastname = "Liddell";
  }

  @readonly(true)
  fullName() {
    return this.firstname + " " + this.lastname;
  }

}

function readonly(value) {
  return function (target, key, descriptor) {
    descriptor.writable = !value;
    return descriptor;
  }
}

let person = new Person();
console.log(person.fullName());

person.fullName = function () {return this.firstname};
console.log(person.fullName());




@isTestable(true)
class MyClass { }

function isTestable(value) {
   return function (target) {
      target.isTestable = value;
   }
}

let myclass = new MyClass();
console.log(myclass);
