export interface ResumeCardType {
  location: string;
  address: string;
  title: string;
  timespan: [string, string];
  details?: string[];
  image: string;
}

export interface ResumeCardListType {
  header: string;
  list: ResumeCardType[];
}
