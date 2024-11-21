import { jwtDecode } from "jwt-decode";

export const generalHelspers = {
  decodeToken: (token: string) => {
    try {
      return jwtDecode(token);
    } catch (error) {
      return null;
    }
  },
};
