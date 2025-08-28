import type { ITodo } from "./types";

export const todos: ITodo[] = [
  {
    uuid: "1a2b3c",
    title: "Buy groceries",
    content: "Milk, bread, eggs, and coffee",
    author: "Jean-Paul",
    completed: false,
    timeStamp: new Date("2025-08-20 10:30:00"),
  },
  {
    uuid: "4d5e6f",
    title: "Finish project report",
    content: "Write the summary and proofread before submission",
    author: "Alex",
    completed: true,
    timeStamp: new Date("2025-08-19 14:15:00"),
  },
  {
    uuid: "7g8h9i",
    title: "Workout session",
    content: "Leg day at the gym — squats, lunges, and deadlifts",
    author: "Maria",
    completed: false,
    timeStamp: new Date("2025-08-18 18:00:00"),
  },
  {
    uuid: "0j1k2l",
    title: "Plan weekend trip",
    content: "Book hotel and research activities in Gothenburg",
    author: "Jean-Paul",
    completed: false,
    timeStamp: new Date("2025-08-17 09:45:00"),
  },
  {
    uuid: "3m4n5o",
    title: "Read book",
    content: "Continue reading 'Clean Code' by Robert C. Martin",
    author: "Lina",
    completed: true,
    timeStamp: new Date("2025-08-15 20:10:00"),
  },
];
