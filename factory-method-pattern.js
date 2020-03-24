/**
 * Parent class
 */
class Employee {
    speak() {
     return "Hi, I'm a " + this.type + " employee"
    }
}

/**
 * Child class
 */
class FullTimeEmployee extends Employee{
    constructor(data) {
     super()
     this.type = "full time"
     //....
    }
}

/**
 * Child class
 */
class PartTimeEmployee extends Employee{
    constructor(data) {
     super()
     this.type = "part time"
     //....
    }
}

/**
 * Child class
 */
class ContractorEmployee extends Employee{
    constructor(data) {
     super()
     this.type = "contractor"
     //....
    }
}

class MyEmployeeFactory {
    createEmployee(data) {
     if(data.type == 'fulltime') return new FullTimeEmployee(data)
     if(data.type == 'parttime') return new PartTimeEmployee(data)
     if(data.type == 'contractor') return new ContractorEmployee(data)
    }
}