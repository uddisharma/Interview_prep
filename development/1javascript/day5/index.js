// Classes
// 1. **Theory**: What is a class in JavaScript?
// A class is a blueprint for creating objects. It defines the properties and methods that the objects created from it will have.

class Amount {
    constructor() {
      this.total = 0;
    }
  
    lacs(value) {
      this.total += value * 100000;
      return this;
    }
  
    crore(value) {
      this.total += value * 10000000;
      return this;
    }
  
    thousand(value) {
      this.total += value * 1000;
      return this;
    }
  
    value() {
      return this.total;
    }
  }
  
  function computeAmount() {
    return new Amount();
  }
  
  // Example usage
  const result = computeAmount()
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value();
  
  console.log(result); // Output: 143545000
  