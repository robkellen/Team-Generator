// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, officeNumber, gitHub) {
    super(name, id, email, "Engineer");
    this.officeNumber = officeNumber;
    this.gitHub = gitHub;    
    
  }
  
}


engineer.printInfo();
