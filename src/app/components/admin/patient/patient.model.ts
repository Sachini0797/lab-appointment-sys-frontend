export interface Patient {
    id: number;
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
    age?: number;
    dob?: string; // Assuming date of birth is a string
    maritalStatus?: string;
    registeredDate?: string; // Assuming registration date is a string
    password: string;
    roles: Role[];
  }
  
  export interface Role {
    id: number;
    name: string;
    // Add any additional properties of the Role entity as needed
  }
  