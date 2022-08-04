let employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value){
 return {...employee, [key]:value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value){
    employee[name] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key){
    let x = {...employee};
    delete x[key];
    return x;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}