// TODO: Write code to define and export the Employee class
class Employee {
  // Just like constructor functions, classes can accept arguments
  constructor(name, id, email, role="Employee") {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
  getName() {
    console.log(this.name);
    return this. name;
  }
  getId() {
    console.log(this.id);
    return this.id;
  }
  getEmail() {
    console.log(this.email);
    return this.email;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Employee;
