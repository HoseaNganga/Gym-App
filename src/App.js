import { NavBar } from "./Components/HomepageComponents/Import";
import {
  HomePage,
  AboutPage,
  GalleryPage,
  SchedulePage,
  SchedulePostPage,
} from "./Pages/ImportPage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [schedule, setSchedule] = useState([
    {
      day: "Monday",
      id: "monday",
      fitnessclass: "Fitness",
      fitnesstime: "9:00am-10:00am",
      fitnesstrainer: "David Villa",
      bodybuildingclass: "BodyBuilding",
      bodybuildingtime: "10:00am-11:00am",
      bodybuildingtrainer: "John Weights",
      runningclass: "Running",
      runningtime: "4:00pm-5:00pm",
      runningtrainer: "Junifor Jonas",
      cyclingclass: "Cycling",
      cyclingtime: "6:00pm-7:00pm",
      cyclingtrainer: "Robert Louis",
    },
    {
      day: "Tuesday",
      id: "tuesday",
      boxingclass: "Boxing",
      boxingtime: "9:00am-10:00am",
      boxingtrainer: "Mike Tyson",
      yogaclass: "Yoga",
      yogatime: "10:00am-11:00am",
      yogatrainer: "Mia Kia",
      crossfitclass: "CrossFit",
      crossfittime: "4:00pm-5:00pm",
      crossfittrainer: "Cristopher Columbo",
    },
    {
      day: "Wednesday",
      id: "wednesday",
      fitnessclass: "Fitness",
      fitnesstime: "9:00am-10:00am",
      fitnesstrainer: "Tom Rizzly",
      bodybuildingclass: "BodyBuilding",
      bodybuildingtime: "10:00am-11:00am",
      bodybuildingtrainer: "John Weights",
      runningclass: "Running",
      runningtime: "4:00pm-5:00pm",
      runningtrainer: "Michael Johnson",
      cyclingclass: "Cycling",
      cyclingtime: "6:00pm-7:00pm",
      cyclingtrainer: "Mario Vecro",
    },
    {
      day: "Thursday",
      id: "thursday",
      fitnessclass: "Fitness",
      fitnesstime: "9:00am-10:00am",
      fitnesstrainer: "David Villa",
      bodybuildingclass: "BodyBuilding",
      bodybuildingtime: "10:00am-11:00am",
      bodybuildingtrainer: "John Weights",
      runningclass: "Running",
      runningtime: "4:00pm-5:00pm",
      runningtrainer: "JuniforJonas",
    },
    {
      day: "Friday",
      id: "friday",
      karateclass: "Karate",
      karatetime: "9:00am-10:00am",
      karatetrainer: "John Jones",
      crossfitclass: "CrossFit",
      crossfittime: "10:00am-11:00am",
      crossfittrainer: "Mike Mich",
      meditationclass: "Meditation class",
      meditationtime: "4:00pm-5:00pm",
      meditationtrainer: "Lara Croft",
      workoutclass: "WorkOut",
      workouttime: "6:00pm-7:00pm",
      workouttrainer: "Larry Wheels",
    },
    {
      day: "Saturday",
      id: "saturday",
      powerliftingclass: "Power Lifting",
      powertime: "9:00am-10:00am",
      powerliftingtrainer: "David Laid",
      boxingclass: "Boxing",
      boxingtime: "10:00am-11:00am",
      boxingtrainer: "John Weights",
      yogaclass: "Yoga",
      yogatime: "4:00pm-5:00pm",
      yogatrainer: "Milica Tails",
    },
    {
      day: "Sunday",
      id: "sunday",
      fitnessclass: "Fitness",
      fitnesstime: "9:00am-10:00am",
      fitnesstrainer: "David Villa",
      bodybuildingclass: "BodyBuilding",
      bodybuildingtime: "10:00am-11:00am",
      bodybuildingtrainer: "John Weights",
      runningclass: "Running",
      runningtime: "4:00pm-5:00pm",
      runningtrainer: "JuniforJonas",
      cyclingclass: "Cycling",
      cyclingtime: "6:00pm-7:00pm",
      cyclingtrainer: "Robert Louis",
    },
  ]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route
          path="/schedule"
          element={<SchedulePage schedule={schedule} />}
        />
        <Route
          path="/schedule/:id"
          element={<SchedulePostPage schedule={schedule} />}
        />
      </Routes>
    </div>
  );
}

export default App;
