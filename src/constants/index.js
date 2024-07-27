import project1a from "../assets/projects/project-1a.png";
import project1b from "../assets/projects/project-1b.png";
import project1c from "../assets/projects/project-1c.png";
import project1d from "../assets/projects/project-1d.png";
import project1e from "../assets/projects/project-1e.png";
import project1f from "../assets/projects/project-1f.png";
import project1g from "../assets/projects/project-1g.png";
import project2a from "../assets/projects/project-2a.png";
import project2b from "../assets/projects/project-2b.png";
import project2c from "../assets/projects/project-2c.png";
import project2d from "../assets/projects/project-2d.png";
import project2e from "../assets/projects/project-2e.png";
import project2f from "../assets/projects/project-2f.png";
import project2g from "../assets/projects/project-2g.png";
import project2h from "../assets/projects/project-2h.png";
import project3a from "../assets/projects/project-3a.png";
import project3b from "../assets/projects/project-3b.png";
import project3c from "../assets/projects/project-3c.png";
import project3d from "../assets/projects/project-3d.png";
import project4a from "../assets/projects/project-4a.png";
import project4b from "../assets/projects/project-4b.png";
import project4c from "../assets/projects/project-4c.png";
import project5a from "../assets/projects/project-5a.png";
import project5b from "../assets/projects/project-5b.png";
import project5c from "../assets/projects/project-5c.png";
import project5d from "../assets/projects/project-5d.png";
import project5e from "../assets/projects/project-5e.png";
import project5f from "../assets/projects/project-5f.png";
import project6a from "../assets/projects/project-6a.png";
import project7a from "../assets/projects/project-7a.png";
import project7b from "../assets/projects/project-7b.png";
import project7c from "../assets/projects/project-7c.png";
import project7d from "../assets/projects/project-7d.png";
import project7e from "../assets/projects/project-7e.png";
import project7f from "../assets/projects/project-7f.png";
import project8a from "../assets/projects/project-8a.png";
import project8b from "../assets/projects/project-8b.png";
import project9a from "../assets/projects/project-9a.png";
import project9b from "../assets/projects/project-9b.png";
import project9c from "../assets/projects/project-9c.png";
import project9d from "../assets/projects/project-9d.png";

export const HERO_CONTENT = `Hello! I am a passionate Computer Science student currently in my 7th semester at Guru Nanak Dev University (GNDU), Amritsar. I am dedicated to building a strong foundation for a successful career in the tech industry.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, MySQL, and MongoDB. I have experience of working with languages like C++ and Java and enjoys solving complex DSA problems on Leetcode. Currenlty I am in my 7th semester at Guru Nanak Dev University situated in Amritsar where I have maintained GPA of 9.26.`;

export const PROJECTS = [
  {
    title: "E-Mart",
    images: [project1a,project1b,project1c,project1d,project1e,project1f,project1g],
    link:"https://hp-singh007.github.io/EMart",
    description:
      "E-commerce application with user authentication, including password recovery and OTP verification. Features include a shopping cart, product filtering, sorting, search, and user profile management.The admin dashboard allows for product management, monthly sales statistics, and inventory tracking.",
    technologies: ["React", "CSS", "Node,js", "MongoDB"],
  },
  {
    title: "To Do App",
    images:[project2a,project2b,project2c,project2d,project2e,project2f,project2g,project2h],
    link:"https://hp-singh007.github.io/To-do-React",
    description:
      "A Simple TO-DO app with user authentication and cookies to ensure a personalized user experience.The frontend is built with React.js, providing a responsive and interactive interface for managing tasks. The backend, powered by Node.js, handles user authentication and data storage efficiently. This web application allows users to securely create, edit, and delete their to-do items, helping them stay organized and productive. It uses cookie-based authentication to save user data",
    technologies:  ["React", "CSS", "Node,js", "MongoDB"],
  },
  {
    title: "News Worldwide",
    images: [project3a,project3b,project3c,project3d],
    link:"#",
    description:
      "Developed a News Web App that presents current global news in a simple and enhanced manner. The application fetches news data from the NewsAPI.org and displays it to users with a clean and intuitive interface.Built using React.js, this application ensures a seamless user experience while keeping them informed about the latest news worldwide.",
    technologies: ["React", "CSS"],
  },
  {
    title: "Weatherlify",
    images: [project4a,project4b,project4c],
    link:"https://weatherlify-hd.netlify.app",
    description:
      "Created a user-friendly weather application that displays the current weather of any city, with additional options to view hourly weather forecasts for today and tomorrow. The application is built using HTML, CSS, and JavaScript to provide a simple yet effective interface for users to access weather information quickly and easily.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "MovieTime",
    images: [project5a,project5b,project5c,project5d,project5e,project5f],
    link:"https://movietime-hps.netlify.app",
    description:
      "A Simple Movie App with features of search, Rating, Cast, Box Office Collection, Genre etc. It fetches an API from OMDB.org",
    technologies:  ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Snake Mania",
    images: [project6a],
    link:"https://snakemania-hps.netlify.app",
    description:
      "A nostalgic snake game of nokia mobile phone built with simple javascript and html",
    technologies:  ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Textify",
    images: [project7a,project7b,project7c,project7d,project7e,project7f],
    link:"https://hp-singh007.github.io/Textify",
    description:
      "A text utils app providing facilities for converting to upper-case, lower-case, remove whitespaces with multiple themes options. Built with React JS",
    technologies: ["React", "CSS"],
  },
  {
    title: "Tic Tac Toe",
    images: [project8a,project8b],
    link:"#",
    description:
      "Tic Tac Toe a.k.a Zero Kanta game build in simple c++",
    technologies: ["C++"],
  },
  {
    title: "Bank Management System",
    images: [project9a,project9b,project9c,project9d],
    link:"#",
    description:
      "A Bank Management system built in c++. It provider features for creating account, login into account using credentials, deposit money, withdraw money, check balance and even transfer money",
    technologies: ["C++"],
  },
];

export const CONTACT = {
  address: "Amritsar, Punjab, India ",
  phoneNo: "+91 94xxxxx535 ",
  email: "2002hpsingh@gmail.com",
};
