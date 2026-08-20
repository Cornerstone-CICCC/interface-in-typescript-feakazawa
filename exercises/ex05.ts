type Admin = {
  writePermission: boolean;
  updatePermission: boolean;
  readPermission: boolean;
};

type Employee = {
  id: string;
  workDepartment: string;
  manager: string;
};

type AdminEmployee = Admin & Employee;
let newITEmployee: AdminEmployee = {
  id: "IT00123",
  workDepartment: "IT",
  manager: "Edward Smith",
  writePermission: true,
  updatePermission: true,
  readPermission: true,
};

let newSalesEmployee: AdminEmployee = {
  id: "IT00123",
  workDepartment: "Sales",
  manager: "Samanta Lopez",
  writePermission: false,
  updatePermission: false,
  readPermission: true,
};

console.log(newITEmployee);
console.log(newSalesEmployee);
