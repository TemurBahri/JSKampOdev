import User from "./user.js";

export default class Employee extends User {

    constructor(id, fistName, lastName, city, age,identityNumber) {
        super(id, fistName, lastName, city, age)
        this.identityNumber = identityNumber
       
      }

}