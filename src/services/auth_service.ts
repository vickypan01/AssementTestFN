import { users } from "../dummy_data/dummy_app_data";

export const login = (email: string, password: string) => {
  const user = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  return {
    token: `jwt-token-${user.id}`,
    user,
  };
};
