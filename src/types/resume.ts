export interface CardType {
  location: string;
  address: string;
  title: string;
  timespan: [string, string];
  details?: string[];
  image: string;
}

export interface ResumeCardsType {
  header: string;
  list: CardType[];
}
