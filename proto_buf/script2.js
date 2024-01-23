const Schema = require("./employees_pb");
const fs = require("fs");

const igor = new Schema.Employee();
igor.setId(1001);
igor.setName("Igor");
igor.setSalary(1000);

const fulano = new Schema.Employee();
igor.setId(1002);
igor.setName("Fulano");
igor.setSalary(9000);

const rick = new Schema.Employee();
igor.setId(1003);
igor.setName("Rick");
igor.setSalary(5000);

const employees = new Schema.Employees();
employees.addEmployees(igor);
employees.addEmployees(fulano);
employees.addEmployees(rick);

const bytes = employees.serializeBinary();

console.log("Binário " + bytes);
fs.writeFileSync("binarydata", bytes);

const employees2 = Schema.Employees.deserializeBinary(bytes);

console.log(employees2.toString());
