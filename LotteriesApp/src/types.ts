export type Status = 'running' | 'finished';

export interface Lottery {
  id: string;
  name: string;
  prize: string;
  type: string;
  status: Status;
}

export enum LotteryError {
  NONE = 1,
  SERVER = 2,
  CLIENT = 3,
  UNKNOWN = 4,
}
