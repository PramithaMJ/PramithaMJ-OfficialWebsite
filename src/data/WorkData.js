// work data

import Ml from "../assets/Images/Ml.png";
import LifePill from "../assets/Images/LifePill.png";
import Ar from "../assets/Images/Ar.png";
import SM from "../assets/Images/SM.png";
import Vt from "../assets/Images/Vt.png";
import Ga from "../assets/Images/Ga.png";
import Tc from "../assets/Images/Tc.png";
import Lt from "../assets/Images/Lt.png";
import Cb from "../assets/Images/CB.png";
import Bs from "../assets/Images/Bs.png";
import Kc from "../assets/Images/Kc.png";
import Bg from "../assets/Images/Bg.png";
import Omi from "../assets/Images/omi.png";
import ProjectPlaceholder from "../assets/Images/project_placeholder.png";

export const Work = [
  {
    id: 1,
    name: "Enhancing NS-3 for Distributed Network",
    image: ProjectPlaceholder,
    description: "Modify NS-3 to run as a distributed system where each network node operates within a separate container. This will allow parallel execution and better utilisation of computing resources, making large-scale network simulations more efficient.",
    tags: ["NS-3", "Distributed Systems", "C++", "Docker", "Linux"],
    demo: "#",
    github: "#"
  },
  {
    id: 2,
    name: "Ballerina Online Playground",
    image: ProjectPlaceholder,
    description: "A web-based interactive playground for writing and executing Ballerina code in real-time.",
    tags: ["Ballerina", "Web", "Interactive"],
    demo: "https://ballerina-online-playground.pages.dev/",
    github: "#"
  },
  {
    id: 23,
    name: "AuctionHub-Microservice",
    image: ProjectPlaceholder,
    description: "The auction website is built on a modern, cloud-native microservices architecture that employs several reliability and scalability patterns.",
    tags: ["AWS", "Kubernetes", "Microservices", "Go", "Docker"],
    demo: "https://github.com/PramithaMJ/auction-microservice",
    github: "https://github.com/PramithaMJ/auction-microservice"
  },
  {
    id: 3,
    name: "LifePill",
    image: LifePill,
    description:
      "LifePill is a software application designed to address the challenges of finding rare medicines and managing prescriptions efficiently. ",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Microservices", "ReactJS"],

    demo: "https://github.com/Life-Pill/Life-Pill",
    github: "https://github.com/Life-Pill",
  },
  {
    id: 5,
    name: "Student Management System",
    image: SM,
    description:
      "The Student Management System is a desktop application developed using WPF (Windows Presentation Foundation). Basic CRUD operations are available in this desktop application to maintain a Student Management System.",
    tags: ["C#", "WPF", "MVVM Architecture"],
    demo: "https://github.com/PramithaMJ/Student_Management_Stystem_3990.git",
    github: "https://github.com/PramithaMJ/Student_Management_Stystem_3990.git",
  },
  {
    id: 6,
    name: "Predicting Loan Repayment Risk Detection",
    image: Ml,
    description: "Prediction the Loan Repayment Risk",
    tags: [
      "flutter",
      "firebase",
      "Dart",
      "Google Maps",
      "Geolocation",
      "Realtime Database",
    ],

    demo: "https://github.com/PramithaMJ/Predicting-Loan-Repayment-Risk-Detection.git",
    github:
      "https://github.com/PramithaMJ/Predicting-Loan-Repayment-Risk-Detection.git",
  },
  {
    id: 7,
    name: "Vehicle tracking Application",
    image: Vt,
    description:
      "Tracking vehicle realtime location and get the location of the vehicle using google maps.",
    tags: [
      "flutter",
      "firebase",
      "Dart",
      "Google Maps",
      "Geolocation",
      "Realtime Database",
    ],

    demo: "http://react-redux-todo-app-git-main-codebucks27.vercel.app/",
    github: "https://github.com/codebucks27/React-Redux-Todo-App",
  },
  {
    id: 8,
    name: "Grocessary Application",
    image: Ga,
    description:
      "Grocery Application is a mobile application developed using Flutter. It is a simple application that allows users to add, update, and delete grocery items. Buy and sell grocery items.",
    tags: ["flutter", "firebase", "Dart", "Stripe"],
    demo: "http://react-redux-todo-app-git-main-codebucks27.vercel.app/",
    github: "https://github.com/codebucks27/React-Redux-Todo-App",
  },
  {
    id: 9,
    name: "TickTockClone",
    image: Tc,
    description:
      "TickTockClone is a Kotlin-based mobile application that replicates the core features of the popular social media platform TikTok. The app allows users to create, share, and view short videos, as well as interact with other users through likes, comments, and follows.",
    tags: ["#Kotliune", "JetPackcompose"],
    demo: "https://github.com/PramithaMJ/TikTokClone.git",
    github: "https://github.com/PramithaMJ/TikTokClone.git",
  },
  {
    id: 10,
    name: "Canteen Management System",
    image: Cb,
    description:
      "Console base application using datastucture and algorithm to manage the canteen system.",
    tags: [
      "LinkedList",
      "Stack",
      "Queue",
      "Hash Table",
      "C++",
      "Data Structure",
      "Algorithm",
    ],
    demo: "https://github.com/PramithaMJ/CanteenManagementSystem.git",
    github: "https://github.com/PramithaMJ/CanteenManagementSystem.git",
  },
  {
    id: 11,
    name: "Bank Service",
    image: Bs,
    description:
      "Bank Application Backend by using Spring Boot with microservices architecture.",
    tags: ["Java", "SpringBoot", "Microservices"],
    demo: "https://github.com/PramithaMJ/Student_Management_Stystem_3990.git",
    github: "https://github.com/PramithaMJ/Student_Management_Stystem_3990.git",
  },
  {
    id: 12,
    name: "kids Clothes shoppping Web Application",
    image: Kc,
    description: "This web application designed to purchase Clothes.",
    tags: ["MERN", "JavaScript"],
    demo: "https://github.com/PramithaMJ/kids-Cloothes-app.git",
    github: "https://github.com/PramithaMJ/kids-Cloothes-app.git",
  },
  {
    id: 13,
    name: "Blogger Application",
    image: Bg,
    description: "This web application put Blog.",
    tags: ["NextJS", "JavaScript"],
    demo: "https://github.com/PramithaMJ/nextJs_blogger_App.git",
    github: "https://github.com/PramithaMJ/nextJs_blogger_App.git",
  },
  {
    id: 14,
    name: "Quiz App Backend",
    image: Cb,
    description:
      "This Spring boot by using microservices architecture to manage the quiz app.",
    tags: ["Java", "SpringBoot", "Microservices"],
    demo: "https://github.com/PramithaMJ/Spring-Microservises.git",
    github: "https://github.com/PramithaMJ/Spring-Microservises.git",
  },
  {
    id: 15,
    name: "Omi Game Network",
    image: Omi,
    description:
      "This Network game by using Java threads and socket programming.",
    tags: ["Java", "Threads", "Socket Programming"],
    demo: "https://github.com/PramithaMJ/Omi-Game.git",
    github: "https://github.com/PramithaMJ/Omi-Game.git",
  },
  {
    id: 17,
    name: "Ballerina Lint",
    image: ProjectPlaceholder,
    description: "A fully functional Ballerina best practices checker as a VS Code extension",
    tags: ["Ballerina", "VS Code Extension", "TypeScript"],
    demo: "https://marketplace.visualstudio.com/items?itemName=PramithaMJ.ballerina-lint",
    github: "https://github.com/PramithaMJ/ballerina-lint"
  },
  {
    id: 18,
    name: "GoNexus",
    image: ProjectPlaceholder,
    description: "GoNexus is a VSCode extension that helps you maintain high-quality Go code by analyzing your codebase for best practices, potential issues, and security vulnerabilities",
    tags: ["Go", "VS Code Extension", "Static Analysis"],
    demo: "https://marketplace.visualstudio.com/items?itemName=PramithaMJ.gonexus",
    github: "https://github.com/PramithaMJ/gonexus"
  },
  {
    id: 19,
    name: "CPU Scheduling Visualizer",
    image: ProjectPlaceholder,
    description: "This web-based tool allows you to visualize various CPU scheduling algorithms, including FCFS, SJF, Priority Scheduling, and Round Robin.",
    tags: ["Web", "Algorithms", "Visualization", "OS"],
    demo: "https://pramithamj.github.io/cpu-scheduling-visualizer",
    github: "https://github.com/PramithaMJ/cpu-scheduling-visualizer"
  },
  {
    id: 20,
    name: "Fully Completed Microservices Learning Platform",
    image: ProjectPlaceholder,
    description: "This project is a comprehensive microservices architecture developed using Java, Spring Boot, and Spring Cloud. Additionally, it incorporates Apache Kafka for messaging purposes.",
    tags: ["Java", "Spring Boot", "Spring Cloud", "Kafka", "Microservices"],
    demo: "https://github.com/PramithaMJ/fully-completed-microservices-Java-Springboot",
    github: "https://github.com/PramithaMJ/fully-completed-microservices-Java-Springboot"
  },
  {
    id: 21,
    name: "Slack SDK Go",
    image: ProjectPlaceholder,
    description: "A lightweight and modular SDK for building Slack bots and apps in Go. With this SDK, you can easily send messages, manage users, and extend functionality to integrate with the Slack API seamlessly.",
    tags: ["Go", "Slack API", "SDK"],
    demo: "https://github.com/PramithaMJ/slack-sdk-go",
    github: "https://github.com/PramithaMJ/slack-sdk-go"
  },
  {
    id: 24,
    name: "Secure file transfer protocol",
    image: ProjectPlaceholder,
    description: "This project implements a secure file transfer protocol that ensures confidentiality, integrity, and protection against replay attacks.",
    tags: ["Java", "Security", "Cryptography"],
    demo: "https://github.com/PramithaMJ/secure-file-transfer-protocol",
    github: "https://github.com/PramithaMJ/secure-file-transfer-protocol"
  },
  {
    id: 25,
    name: "Vice Chancellor’s Awards and Academic Sessions 2026",
    image: ProjectPlaceholder,
    description: "Official Vice Chancellor’s Awards and Academic Sessions 2026 website. University of Ruhuna.",
    tags: ["Web", "Official"],
    demo: "https://as2026.eng.ruh.ac.lk/",
    github: "#"
  },
  {
    id: 26,
    name: "C Code scanner and vulnerability identifier",
    image: ProjectPlaceholder,
    description: "C-Code-Scanner-And-Vulnerability-Identifier scans C source code for vulnerabilities, offering automated analysis, detailed reports, and security recommendations for developers.",
    tags: ["C", "Security", "Vulnerability Scanner"],
    demo: "https://github.com/PramithaMJ/C-Code-Scanner-And-Vulnerability-Identifier",
    github: "https://github.com/PramithaMJ/C-Code-Scanner-And-Vulnerability-Identifier"
  },
  {
    id: 27,
    name: "High Performance Parallel Search Engine",
    image: ProjectPlaceholder,
    description: "The project involves implementing core search engine components, a crawler, a tokenizer, an inverted index builder, and a query processor, with sophisticated features such as TF-IDF and BM25 ranking.",
    tags: ["HPC", "C", "Search Engine", "Parallel Computing"],
    demo: "https://github.com/PramithaMJ/High-Performance-Parallel-Search-Engine",
    github: "https://github.com/PramithaMJ/High-Performance-Parallel-Search-Engine"
  },
  {
    id: 28,
    name: "Job analysis MapReduce",
    image: ProjectPlaceholder,
    description: "Analyzes job market data using both Hadoop MapReduce and Apache Spark frameworks.",
    tags: ["Hadoop", "MapReduce", "Spark", "Big Data"],
    demo: "https://github.com/PramithaMJ/job-analysis-MapReduce",
    github: "https://github.com/PramithaMJ/job-analysis-MapReduce"
  },
  {
    id: 29,
    name: "Thread Lifecycle Visualizer",
    image: ProjectPlaceholder,
    description: "An interactive web-based visualization tool for understanding thread lifecycle states and transitions.",
    tags: ["Multithreading", "Visualization", "Education"],
    demo: "#",
    github: "#"
  }
];
