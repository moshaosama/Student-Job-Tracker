export interface Job {
  _id: string;
  company: string;
  location: string;
  role: string;
  status: string;
  date: string;
  link: string;
}

export interface DataType {
  statusbar: string;
  Jops: Job[];
}

export interface initialStateData {
  data: DataType | null;
  error: string;
  loading: boolean;
}

export const initialState: initialStateData = {
  data: null,
  error: "",
  loading: false,
};
