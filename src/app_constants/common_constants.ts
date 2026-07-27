export const USER_ROLE = {
  ADMIN: "ADMIN",
  MANAGER: "MANAGER",
  EMPLOYEE: "EMPLOYEE",
  HR: "HR",
} as const;

export type USER_ROLE = (typeof USER_ROLE)[keyof typeof USER_ROLE];
