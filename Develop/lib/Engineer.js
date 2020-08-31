// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, officeNumber, email, gitHub) {
    super(name, "Engineer", id, officeNumber);
    this.email = email;
    this.gitHub = gitHub;    
  }
  printInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Role: ${this.role}`);
    console.log(`ID: ${this.id}`);
    console.log(`Office Number: ${this.officeNumber}`);
    console.log(`Email: ${this.email}`);
    console.log(`GitHub: ${this.gitHub}`);

  }
}

const engineer = new Engineer("Rob", 2, 2, "email@email.com", "robkellen");

engineer.printInfo();
