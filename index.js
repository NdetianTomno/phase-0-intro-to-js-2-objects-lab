// Write your solution in this file!

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee, [key]: value };
    return newEmployee;
  }
  
  const employee = {
    name: "Sam",
    streetAddress: "10 Broadway"
  };
  
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway"));

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  } 

  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  