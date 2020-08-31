// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, officeNumber, email, school) {
    super(name, "Engineer", id, officeNumber);
    this.email = email;
    this.school = school;   
  }
  printInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Role: ${this.role}`);
    console.log(`ID: ${this.id}`);
    console.log(`Office Number: ${this.officeNumber}`);
    console.log(`Email: ${this.email}`);
    console.log(`School: ${this.school}`);

  }
}

const Joe = new Intern("Joe", 4, 3, "joe@email.com", "Univ. of Arizona");

Joe.printInfo();