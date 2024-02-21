// cardData.js
import Java_SLIIT from "../assets/certificates/Java_SLIIT.jpeg";
import SLBM from "../assets/certificates/SLBM.png";
import SQL from "../assets/certificates/SQL.png";
import javaSVG from "../assets/skills/java.svg"; // Import the SVG file
// ... (import other image paths)

const cardData = [
  {
    id: 1,
    name: "Java",
    image: {    
      path: Java_SLIIT,
      svg: javaSVG, // Use the imported SVG content
    },
    description: "Java Programming - SLIIT",
    tags: ["Java", "OOP", "Data Structure", "Algorithm"],
    demo: "",
    github: "",
  },
  {
    id: 2,
    name: "Full Stack Web Development",
    image: {
      path: SLBM,
      svg: "<svg>...</svg>", 
    },
    description: "Full Stack Web Development - SLBM",
    tags: ["React", "MYSQL", "Spring", "Java"],
    demo: "",
    github: "",
  },
  // ... (add more card data if needed)
];

export default cardData;
