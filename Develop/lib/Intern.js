// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(officeNumber, school) {
    super(name, id, email, "Intern");
    this.email = email;
    this.school = school;   
  }
  getSchool(){
    console.log(this.school);
  }
}

// const Joe = new Intern("Joe", 4, 3, "joe@email.com", "Univ. of Arizona");

getSchool();

module.exports = Intern;