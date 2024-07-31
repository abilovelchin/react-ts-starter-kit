export interface User {
  id: number;
  username: string;
  name: string;
  surname: string;
  email: string;
  contactNumber: string;
  role: {
    id: number;
    name: string;
    key: string;
  };
  image: string;
}
