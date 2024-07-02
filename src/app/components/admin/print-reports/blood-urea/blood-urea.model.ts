export interface BloodUrea {
  id?: number;

  uid?: number;

  appointmentId: number;

  completed: boolean;

  createdDate: string;

  sampleCollectedDate?: string;

  sampleReceivedDate?: string;

  reportAuthorizedDate?: string;

  bloodUreaValue?: number;

  refNo: string;

  refBy: string;

  remarks?: string;
}
