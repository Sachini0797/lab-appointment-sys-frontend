export interface User {
  id?: number;
  username: string;
  designation?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  nic?: string;
  email: string;
  phoneNum?: string;
  address?: string;
  city?: string;
  age?: string;
  dob?: string;
  maritalStatus?: string;
  registeredDate?: string;
  height?: number;
  weight?: number;
  password: string;
  roles?: Role[];
  
}

interface Role {
  id: number;
  name: string;
}

export interface UserUpdateRequest {
  firstName: string;
  lastName: string;
  designation: string;
  gender: string;
  nic: string;
  email: string;
  password: string;
  phoneNum: string;
  address: string;
  city: string;
  age: number;
  dob: Date;
  maritalStatus: string;
  registeredDate: Date;
  weight: number;
  height: number;
  // Define other fields as needed
}

