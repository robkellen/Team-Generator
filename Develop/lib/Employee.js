// TODO: Write code to define and export the Employee class
class Employee {
  // Just like constructor functions, classes can accept arguments
  constructor(name, role, id, officeNumber) {
    this.name = name;
    this.role = role;
    this.id = id;
    this.officeNumber = officeNumber;
  }

  printInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Role: ${this.role}`);
    console.log(`ID: ${this.id}`);
    console.log(`Office Number: ${this.officeNumber}`);
  }
}

const employee = new Employee("Rob", "Manager", 1, 1);

employee.printInfo();