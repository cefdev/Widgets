import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content:
      "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile application",
  },
  {
    title: "Why use React?",
    content:
      "React used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. ... React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
