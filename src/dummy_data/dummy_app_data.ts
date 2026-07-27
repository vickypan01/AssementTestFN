export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: "ADMIN" | "MANAGER" | "EMPLOYEE" | "HR";
  firstName: string;
  lastName: string;
  department: string;
  isActive: boolean;
}

export const users: User[] = [
  {
    id: 1,
    username: "admin",
    email: "admin@a.com",
    password: "admin123",
    role: "ADMIN",
    firstName: "John",
    lastName: "Doe",
    department: "Administration",
    isActive: true,
  },
  {
    id: 2,
    username: "manager",
    email: "manager@example.com",
    password: "Manager@123",
    role: "MANAGER",
    firstName: "Sarah",
    lastName: "Wilson",
    department: "Operations",
    isActive: true,
  },
  {
    id: 3,
    username: "employee",
    email: "employee@example.com",
    password: "Employee@123",
    role: "EMPLOYEE",
    firstName: "David",
    lastName: "Brown",
    department: "Development",
    isActive: true,
  },
  {
    id: 4,
    username: "hr",
    email: "hr@example.com",
    password: "Hr@123",
    role: "HR",
    firstName: "Emily",
    lastName: "Clark",
    department: "Human Resources",
    isActive: true,
  },
  {
    id: 5,
    username: "employee2",
    email: "employee2@example.com",
    password: "Employee@123",
    role: "EMPLOYEE",
    firstName: "Michael",
    lastName: "Johnson",
    department: "QA",
    isActive: true,
  },
];
