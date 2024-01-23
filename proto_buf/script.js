const Schema = require("./employees_pb");
const fs = require("fs")

const igor = new Schema.Employee();
igor.setId(1001);
igor.setName("Igor");
igor.setSalary(1001);

const fulano = new Schema.Employee();
fulano.setId(1002);
fulano.setName("Ahmed");
fulano.setSalary(9000);

const rick = new Schema.Employee();
rick.setId(1003);
rick.setName("Rick");
rick.setSalary(5000);

const employees = new Schema.Employees();
employees.addEmployees(igor);
employees.addEmployees(fulano);
employees.addEmployees(rick);

const bytes = employees.serializeBinary();
console.log("binary " + bytes)

fs.writeFileSync("binarydata", bytes)

const employees2 = Schema.Employees.deserializeBinary(bytes);

console.log(employees2.toString())