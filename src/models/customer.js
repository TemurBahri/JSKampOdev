import User from "./user.js";

export default class Customer extends User{
    constructor(id, fistName, lastName, city, age,creditCard) {
        super(id, fistName, lastName, city, age)
        this.creditCard = creditCard
      }
}