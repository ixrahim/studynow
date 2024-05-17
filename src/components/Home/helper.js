import book_icon from "../../assets/png/book_icon.png";
import clock_icon from "../../assets/png/clock_icon.png";
import dashboard_icon from "../../assets/png/dashboard_icon.png";
import courses_icon from "../../assets/png/my_courses_icon.png";
import downloads_icon from "../../assets/png/downloads_icon.png";
import recommended_icon from "../../assets/png/recommended_icon.png";
import account_icon from "../../assets/png/my_account_icon.png";
import star_icon from "../../assets/png/star_icon.png";

import _ from "lodash";

const links = [
  { name: "Design", path: "/courses/design", id: _.uniqueId("links-") },
  { name: "HTML", path: "/courses/html", id: _.uniqueId("links-") },
  { name: "CSS", path: "/courses/css", id: _.uniqueId("links-") },
  { name: "Javascript", path: "/courses/javascript", id: _.uniqueId("links-") },
];

const links2 = [
  {
    icon: dashboard_icon,
    name: "Dashboard",
    path: "/dashboard",
    id: _.uniqueId("links2-"),
  },
  {
    icon: courses_icon,
    name: "My Courses",
    path: "/courses",
    id: _.uniqueId("links2-"),
  },
  {
    icon: downloads_icon,
    name: "Downloads",
    path: "/downloads",
    id: _.uniqueId("links2-"),
  },
  {
    icon: recommended_icon,
    name: "Recommended",
    path: "/recommended",
    id: _.uniqueId("links2-"),
  },
  {
    icon: account_icon,
    name: "My Account",
    path: "/my-account",
    id: _.uniqueId("links2-"),
  },
];

const courses = [
  {
    tag: "User Interface",
    title: "Introduction to User Interface Design",
    icon1: book_icon,
    icon2: clock_icon,
    school: "University of Minnesota",
    duration: "5h 40m left",
    primary_color: "text-[#3D42DD]",
    secondary_color: "bg-[#E6F4FF]",
    id: _.uniqueId("courses-"),
  },
  {
    tag: "User Interface",
    title: "Introduction to User Interface Design",
    icon1: book_icon,
    icon2: clock_icon,
    school: "University of Minnesota",
    duration: "5h 40m left",
    primary_color: "text-[#6C00F8]",
    secondary_color: "bg-[#F6EFFF]",
    id: _.uniqueId("courses-"),
  },
  {
    tag: "User Interface",
    title: "Introduction to User Interface Design",
    icon1: book_icon,
    icon2: clock_icon,
    school: "University of Minnesota",
    duration: "5h 40m left",
    primary_color: "text-[#3D42DD]",
    secondary_color: "bg-[#E6F4FF]",
    id: _.uniqueId("courses-"),
  },
];

const achievements = [
  {
    icon: star_icon,
    count: "100",
    title: "Tutorials",
    icon_bg: "bg-[#3D42DD]",
    id: _.uniqueId("achievements-"),
  },
  {
    icon: star_icon,
    count: "18",
    title: "Topics",
    icon_bg: "bg-[#F26D0A]",
    id: _.uniqueId("achievements-"),
  },
  {
    icon: star_icon,
    count: "120",
    title: "Exercises",
    icon_bg: "bg-[#6C00F8]",
    id: _.uniqueId("achievements-"),
  },
];
const listItems = [
  {
    id: _.uniqueId("list-"),
    title: "Illustration Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: _.uniqueId("list-"),
    title: "User Experience Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

export { links, links2, courses, achievements, listItems };
