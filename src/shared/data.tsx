export interface SectionInfo {
  header: string;
  listItems?: string[];
  subSections?: SubSectionInfo[];
}

export interface SubSectionInfo {
  itemHeader: string;
  description?: string;
  location?: string;
  date?: string;
  startDate?: string;
  endDate?: string;
  listItems?: string[];
  subSections?: SubSectionInfo[];
}

export const data: SectionInfo[] = [
  {
    header: "Education",
    subSections: [
      {
        itemHeader: "University of Waterloo",
        description: "Waterloo, ON",
        startDate: "September 2020",
        endDate: "May 2025",
        listItems: [
          "Candidate for Bachelor of Computer Science, Honours Computer Science",
          "Term 1A-3B Dean's Honours List",
          "92.1% Average, 4.0/4.0 CGPA",
          "President's Scholarship of Distinction recipient",
        ],
        subSections: [
          {
            itemHeader: "Relevant Courses",
            listItems: [
              "CS 350 - Operating Systems",
              "CS 348 - Introduction to Database Management",
              "CS 341 - Algorithms",
              "CS 251 - Computer Organization and Design",
              "CS 246 - Object-Oriented Software Development",
              "CS 245 - Logic and Computation",
              "CS 241 - Foundations of Sequential Programming",
              "CS 240 - Data Structures and Data Management",
              "CS 136 - Elementary Algorithm Design and Data Abstraction",
              "CS 135 - Designing Functional Programs",
            ],
          },
        ],
      },
      {
        itemHeader: "John Fraser Secondary School",
        description: "Mississauga, ON",
        startDate: "September 2016",
        endDate: "June 2020",
      },
    ],
  },
  {
    header: "Experience",
    subSections: [
      {
        itemHeader: "Frontend Software Engineer",
        description: "SS&C Technologies",
        location: "Toronto, ON",
        startDate: "Jan. 2023",
        endDate: "Apr. 2023",
        listItems: [
          "Updated and maintained responsive and interactive UI for the TRAC web application using <strong>Vue.js</strong> and frontend concepts such as <strong>routing</strong> and <strong>stores</strong> used by 88% of the top 50 providers in the retirement industry",
          "Designed and implemented features by consuming RESTful APIs then processing and displaying the data through <strong>computed properties</strong> and <strong>lifecycle hooks</strong>",
          "Debugged issues with the help of the browser developer tools and <strong>Vue Devtools</strong>",
        ],
      },
      {
        itemHeader: "Full Stack Software Engineer",
        description: "Thomson Reuters",
        location: "Toronto, ON",
        startDate: "May 2022",
        endDate: "Aug. 2022",
        listItems: [
          "Created and updated <strong>RESTful</strong> APIs implementing <strong>.NET</strong>’s entity framework in <strong>C#</strong> completing 6 backlog items, fixing 8 bugs, and correcting over 20 code smells",
          "Modified customer-facing frontends in <strong>HTML, Sass,</strong> and <strong>AngularJS</strong> used by 75% of Am Law 200 firms",
          "Participated in <strong>Scrum</strong> rituals and <strong>DevOps</strong> practices such as <strong>CI/CD</strong> and microservices",
          "Collaborated with a globally diverse team spanning multiple time zones and different roles",
        ],
      },
      {
        itemHeader: "Project Team Member",
        description: "WE Accelerate: Microsoft Azure & AI",
        location: "Waterloo, ON",
        startDate: "May 2021",
        endDate: "Aug. 2021",
        listItems: [
          "Designed a prototype application that applies artificial intelligence through <b>Microsoft Azure</b>services such as <b>Functions</b> and <b>Cognitive Services</b> to prevent senior fraud through banking emails",
          "Presented a business pitch on the prototype to an RBC mentor resulting in very positive feedback on the prototype's idea, viability, and feasibility",
          "Spent two weeks learning about <b>Microsoft Azure</b> and artificial intelligence resulting in the <b>Azure Fundamentals</b> and <b>Azure AI</b> certifications",
        ],
      },
    ],
  },
  {
    header: "Projects",
    subSections: [
      {
        itemHeader: "Straights",
        description: "CS 246 Final Project",
        listItems: [
          "Recreated a modified version of the straights card game in <b>C++</b> with text-based input and output that can be played by four human or computer players",
          "Leveraged the <b>Model View Controller/Observer</b> design pattern leading to maximized cohesion and minimized coupling between input, output, and logic",
          "Managed the logic and data of human and computer players through a polymorphic parent class and handled memory management by using references and smart pointers",
          "Generated and shuffled randomized decks of cards that could also be seeded for reproducibility to be used in the card game",
        ],
      },
      {
        itemHeader: "Roguelike Platformer",
        description: "2D Unity Game",
        listItems: [
          "Scripted player behaviour and enemy behaviour including user interface, animations, controls, movement, attacking, items, and upgrades in <b>Unity</b> with <b>C#</b>",
          "Used an inheritance hierarchy for easy maintenance and expansion of damageable objects like players, enemies, and items",
          "Implemented enemy pathfinding and artificial intelligence with the <b>A*</b> search algorithm resulting in smart enemies that can traverse levels",
          "Procedurally generated maps from premade modular levels created with <b>Unity Tilemaps</b>, the <b>Universal Render Pipeline</b>, and assets from Unity Asset Store",
        ],
      },
      {
        itemHeader: "Hire-iQ",
        description: "iQmetrix Hackathon 2021",
        listItems: [
          "Developed a recruitment application with <b>Python</b> in a team of two that enables prospective employees searching for work to submit their information into a database that can be searched and filtered by recruiters",
          "Stored and searched employee information in an <b>SQLite</b> database and created a graphical interface with the <b>Tkinter</b> GUI package",
          "Wireframed and designed the program in <b>Figma</b> and collaborated through <b>GitHub</b>",
        ],
      },
      {
        itemHeader: "Old Portfolio Website",
        description: "Personal Website",
        listItems: [
          "Designed and implemented a visually pleasing website to serve as an online portfolio with <b>HTML, CSS,</b> and <b>JavaScript</b>",
          "Ensured mobile and desktop responsiveness through <b>Bootstrap's</b> navbar, grid, and flex systems, and <b>CSS</b> media queries",
        ],
      },
      {
        itemHeader: "Golden Years",
        description: "High School Python Project",
        listItems: [
          "Developed a calendar and health tracker application for the elderly with <b>Python</b> that allows users to easily navigate and keep track of important events and activities such as exercises and blood sugar measurements",
          "Designed resizable, user-friendly interfaces catered towards the elderly with the <b>Kivy</b> framework for <b>Python</b> so that the app is intuitive to use on both desktop and mobile",
          "Implemented a login system to ensure the security of users and keep their information organized",
        ],
      },
      {
        itemHeader: "Digital Clarinet",
        description: "High School Computer Engineering Project",
        listItems: [
          "Prototyped and built a battery powered electronic clarinet that is playable",
          "Designed and assembled a PCB to control buttons and sounds produced by clarinet",
        ],
      },
    ],
  },
  {
    header: "Volunteering",
    subSections: [
      {
        itemHeader: "Omega Strikers Playtester",
        description: "Odyssey Interactive",
        startDate: "Dec. 2020",
        endDate: "Sept. 2022",
        listItems: [
          "Participated in playtest groups and communicated feedback about visuals, UI, gameplay systems, balance, and design",
          "Playtested a pre-alpha game and reported bugs and steps on how to reproduce them developers",
          "Attended QnA with the developers to learn about game development and the video game industry",
        ],
      },
    ],
  },
  {
    header: "Certifications",
    subSections: [
      {
        itemHeader: "AI-900 - Microsoft Certified: Azure AI Fundamentals",
        date: "June 2021",
      },
      {
        itemHeader: "AZ-900 - Microsoft Certified: Azure Fundamentals",
        date: "June 2021",
      },
    ],
  },
  {
    header: "Interests",
    listItems: [
      "Artificial Intelligence",
      "Machine Learning",
      "Game Development",
      "Web Development",
      "Music Production",
      "Computer Hardware",
      "Esports",
    ],
  },
];
