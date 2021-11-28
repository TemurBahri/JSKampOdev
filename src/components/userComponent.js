import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcers/logging/logging.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"
import CustomerService from "../services/customerService.js"
import EmployeeService from "../services/employeeServices.js"
import ErrorService from "../services/errorService.js"


console.log("User component loaded")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)
let customerService = new CustomerService()
let employeeService = new EmployeeService()
let errorService = new ErrorService()

userService.load()
let user1 = new User(1,"Timur","Bahri","Bursa","27")



console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
