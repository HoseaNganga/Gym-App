import React from "react";
import image1 from "../../../ImageAssets/classes/bodybuilding.jpg";
import image2 from "../../../ImageAssets/classes/box.jpg";
import image3 from "../../../ImageAssets/classes/cross.jpg";
import image4 from "../../../ImageAssets/classes/cycling.jpg";
import image5 from "../../../ImageAssets/classes/fitness.jpg";
import image6 from "../../../ImageAssets/classes/karate.jpg";
import image7 from "../../../ImageAssets/classes/meditation.jpg";
import image8 from "../../../ImageAssets/classes/running.jpg";
import { FaUser } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

const ClassesPageArray = () => {
  const myClasses = [
    {
      id: 1,
      title: "BodyBuliding",
      userIcon: <FaUser size={10} />,
      clockIcon: <FaClock size={10} />,
      timeStamp: "Wed 9:00am",
      image: image1,
      trainer: "Faze Kunate",
    },
    {
      id: 2,
      title: "Boxing",
      userIcon: <FaUser size={10} />,
      clockIcon: <FaClock size={10} />,
      timeStamp: "Tue 4:00pm",
      image: image2,
      trainer: "John Flex",
    },
    {
      id: 3,
      title: "CrossFit",
      userIcon: <FaUser size={10} />,
      clockIcon: <FaClock size={10} />,
      timeStamp: "Wed 9:00pm",
      image: image3,
      trainer: "Jeniffer Alex",
    },
    {
      id: 4,
      title: "Cycling",
      userIcon: <FaUser size={10} />,
      clockIcon: <FaClock size={10} />,
      timeStamp: "Wed 9:00am",
      image: image4,
      trainer: "Dorian Yate",
    },
    {
      id: 5,
      title: "BodyFitness",
      userIcon: <FaUser size={10} />,
      clockIcon: <FaClock size={10} />,
      timeStamp: "Thur 9:00am",
      image: image5,
      trainer: "Alexis Luna",
    },
    {
      id: 6,
      title: "Karate",
      userIcon: <FaUser size={10} />,
      clockIcon: <FaClock size={10} />,
      timeStamp: "Wed 9:00am",
      image: image6,
      trainer: "Kenny Aj",
    },
    {
      id: 7,
      title: "Meditation",
      userIcon: <FaUser size={10} />,
      clockIcon: <FaClock size={10} />,
      timeStamp: "Sun 9:00am",
      image: image7,
      trainer: "Michael Redem",
    },
    {
      id: 8,
      title: "Running",
      userIcon: <FaUser size={10} />,
      clockIcon: <FaClock size={10} />,
      timeStamp: "Fri 9:00am",
      image: image8,
      trainer: "Zinia Zessy",
    },
  ];
  return myClasses;
};

export default ClassesPageArray;
