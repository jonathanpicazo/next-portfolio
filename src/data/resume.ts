interface CardType {
  location: string;
  address: string;
  title: string;
  timespan: [string, string];
  details?: string[];
  image: "drhs" | "ucr" | "suavecito";
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
  details: ["Go Panthers!"],
};

const COLLEGE: CardType = {
  location: "University of California, Riverside",
  address: "Riverside, CA",
  title: "B.S. Computer Science",
  timespan: ["2017", "2021"],
  image: "ucr",
  details: ["Go Highlanders!"],
};

const SUAVECITO: CardType = {
  location: "Suavecito Inc.",
  address: "Santa Ana, CA",
  title: "Web Developer",
  timespan: ["Sep 2021", "Present"],
  details: [
    "Experience using React, Typescript, static site frameworks such as Gatsby",
    "Built a custom static headless e-commerce site using GatsbyJS, which amplified the site's performance and SEO",
    "Worked to ensure webpages/features are a positive and hassle-free customer experience",
    "Wrote scripts that organized and tagged items in product database",
    "Implemented features that improved customer experience and interaction",
    "Effectively multi tasked and worked well in a small, three person team",
  ],
  image: "suavecito",
};

const EDUCATION: ResumeCardsType = {
  header: "Education",
  list: [COLLEGE, HIGH_SCHOOL],
};

const EXPERIENCE: ResumeCardsType = {
  header: "Experience",
  list: [SUAVECITO],
};

export const resumeCards: ResumeCardsType[] = [EXPERIENCE, EDUCATION];
