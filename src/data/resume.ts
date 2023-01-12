interface CardType {
  location: string;
  address: string;
  title: string;
  timespan: [string, string];
  details?: string[];
  image: string;
}

interface ResumeCardsType {
  header: string;
  list: CardType[];
}

const HIGH_SCHOOL: CardType = {
  location: "Diamond Ranch High School",
  address: "Pomona, CA",
  title: "High School Degree",
  timespan: ["2013", "2017"],
  image: "drhs",
};

const COLLEGE: CardType = {
  location: "University of California, Riverside",
  address: "Riverside, CA",
  title: "B.S. Computer Science",
  timespan: ["2017", "2021"],
  image: "ucr",
};

const SUAVECITO: CardType = {
  location: "Suavecito Inc.",
  address: "Santa Ana, CA",
  title: "Web Developer",
  timespan: ["Sep 2021", "Present"],
  image: "suavecito",
};

const EDUCATION: ResumeCardsType = {
  header: "Education",
  list: [HIGH_SCHOOL, COLLEGE],
};

const EXPERIENCE: ResumeCardsType = {
  header: "Experience",
  list: [SUAVECITO],
};

export const resumeCards: ResumeCardsType[] = [EDUCATION, EXPERIENCE];
