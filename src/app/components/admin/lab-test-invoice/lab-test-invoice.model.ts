import { Appointment } from "../appointment/appointment.model";

export interface LabTestInvoice {
    id?: number; // Optional since ID is auto-generated
  
    appointment: Appointment; // Reference to the Appointment object
  
    generatedAt: string; // LocalDateTime converted to string
  
    billAmount: number;
    discount: number;
    totalAmount: number;
    paidAmount: number;
    dueAmount: number;
    remarks?: string; // Optional remarks
  
    paymentStatus: string;
  }