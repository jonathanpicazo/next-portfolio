import { SiShopify, SiNba } from "react-icons/si";
import { BiMicrochip } from "react-icons/bi";

import { ProjectItem } from "~/types";

export const projectList: ProjectItem[] = [
  {
    title: "Metafield Migration Tool",
    subtitle: "APIs",
    icon: <SiShopify className={`text-[50px] text-dracula-orange`} />,
    techIcons: ["node", "graphql"],
    description:
      "This is a node script utilizing the Shopify Storefront and Admin API to copy product and variant metafields from one store to another. Metafields will be copied over from a source store to a destination store. Metafields of type image files will be uploaded to the destination store. A CSV file will be created that keeps a log of all the metafields that have been updated.",
    link: "https://github.com/jonathanpicazo/product-metafield-migration-tool",
  },
  {
    title: "NBA Stats App",
    subtitle: "Web Development",
    icon: <SiNba className={`text-[50px] text-dracula-orange`} />,
    techIcons: ["react", "flask"],
    description:
      "The web application uses an existing NBA statistics database from Kaggle to perform search queries. This application is essentially a search application for specific NBA statistics (best home team, best shooter, etc.). This project made me comfortable with having a backend (Flask server) communicate with the frontend (React).",
    link: "https://github.com/jonathanpicazo/NBA-Stats-React",
  },
  {
    title: "LED PONG",
    subtitle: "Embedded Systems",
    icon: <BiMicrochip className={`text-[50px] text-dracula-orange`} />,
    techIcons: ["c"],
    description:
      "I recreated Pong on a breadboard with an ATMega1284. The game is displayed on a 8x8 LED Matrix. There are two buttons for each player to control the paddle. I used avr-gdb for debugging purposes.",
    link: "https://github.com/jonathanpicazo/LED-Pong",
  },
  {
    title: "Basketball Crawler",
    subtitle: "Information Retrieval, Web Development",
    icon: <BiMicrochip className={`text-[50px] text-dracula-orange`} />,
    techIcons: ["python", "elastic-search", "flask", "react"],
    description:
      "This project includes a web crawler, indexer, and a web application extension. The crawler is built with Python and the BeautifulSoup library. The indexer is built with ElasticSearch, and the web application is built with React and Flask. The project crawls through basketballreference.com and indexes the contents with ElasticSearch. The web application is used as a search bar to search the index.",
    link: "https://github.com/MarcJimenez99/BasketballCrawler",
  },
];
