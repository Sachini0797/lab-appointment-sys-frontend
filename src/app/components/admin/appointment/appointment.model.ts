export interface Appointment {
    id?: number;
    name: string;
    appointmentDate: Date; // Assuming you're using Date objects for dates
    startTime: Date;
    endTime: Date;
    user: Patient; // Assuming you have a User interface
    doctor: Doctor; // Assuming you have a Doctor interface
    labTechnician: LabTechnician; // Assuming you have a LabTechnician interface
    labTests: LabTest[]; // Assuming you have a LabTest interface and labTests is an array
  }
  
  export interface LabTest {
    id: number;
    testName: string;
    testShortName: string;
    testNo: number;
    finalAmount: number;
    amount: number;
    remarks: string;
    percentage: number;
    discount: number;
  }

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

  export interface Doctor {
    id: number;
    name: string;
    designation: string;
    consultantTitle: string;
    consultantFees: number;
    hospitalFees: number;
    position: string;
    contactNumber: string;
    contactNumber1: string;
    email: string;
    remark: string;
  }

  export interface LabTechnician {
    id: number;
    name: string;
    contactNumber: string;
    email: string;
    specialization: string;
    workingStartTime: string;
    workingEndTime: string;
  }
  