// TODO: Write code to define and export the Employee class
class Employee {
  // Just like constructor functions, classes can accept arguments
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    role = "Employee";
  }
  getName(){
    console.log(this.name);
  }
  getID(){
    console.log(this.id);
  }
  getEmail(){
    console.log(this.email);
  }
  getRole(){
    console.log(this.role);
  }
}

// const employee = new Employee;

employee.getName();
employee.getID();
employee.getEmail();
employee.getRole();

module.exports = Employee