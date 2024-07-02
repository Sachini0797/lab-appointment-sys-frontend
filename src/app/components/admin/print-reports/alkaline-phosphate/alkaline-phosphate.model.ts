export interface AlkalinePhosphate {
  id?: number;

  uid?: number;

  appointmentId: number;

  testNo: number;

  completed: boolean;

  createdDate: string;

  sampleCollectedDate?: string;

  sampleReceivedDate?: string;

  reportAuthorizedDate?: string;

  alkalinePhosphataseValue?: number;

  refNo: string;

  refBy: string;

  remarks?: string;
}
