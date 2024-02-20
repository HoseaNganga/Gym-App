import { NavBar } from "./Components/HomepageComponents/Import";
import {
  HomePage,
  AboutPage,
  GalleryPage,
  SchedulePage,
  SchedulePostPage,
  BlogPage,
  PricingPage,
  ClassesPage,
  ContactPage,
  SignUpPage,
} from "./Pages/ImportPage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [schedule] = useState([
    {
      day: "Monday",
      id: "monday",
      class1: "Fitness",
      class1time: "9:00am-10:00am",
      class1trainer: "David Villa",
      class2: "BodyBuilding",
      class2time: "10:00am-11:00am",
      class2trainer: "John Weights",
      class3: "Running",
      class3time: "4:00pm-5:00pm",
      class3trainer: "Junifor Jonas",
      class4: "Cycling",
      class4time: "6:00pm-7:00pm",
      class4trainer: "Robert Louis",
    },
    {
      day: "Tuesday",
      id: "tuesday",
      class1: "Boxing",
      class1time: "9:00am-10:00am",
      class1trainer: "Mike Tyson",
      class2: "Yoga",
      class2time: "10:00am-11:00am",
      class2trainer: "Mia Kia",
      class3: "CrossFit",
      class3time: "4:00pm-5:00pm",
      class3trainer: "Cristopher Columbo",
    },
    {
      day: "Wednesday",
      id: "wednesday",
      class1: "Fitness",
      class1time: "9:00am-10:00am",
      class1trainer: "Tom Rizzly",
      class2: "BodyBuilding",
      class2time: "10:00am-11:00am",
      class2trainer: "John Weights",
      class3: "Running",
      class3time: "4:00pm-5:00pm",
      class3trainer: "Michael Johnson",
      class4: "Cycling",
      class4time: "6:00pm-7:00pm",
      class4trainer: "Mario Vecro",
    },
    {
      day: "Thursday",
      id: "thursday",
      class1: "Fitness",
      class1time: "9:00am-10:00am",
      class1trainer: "David Villa",
      class2: "BodyBuilding",
      class2time: "10:00am-11:00am",
      class2trainer: "John Weights",
      class3: "Running",
      class3time: "4:00pm-5:00pm",
      class3trainer: "JuniforJonas",
    },
    {
      day: "Friday",
      id: "friday",
      class1: "Karate",
      class1time: "9:00am-10:00am",
      class1trainer: "John Jones",
      class2: "CrossFit",
      class2time: "10:00am-11:00am",
      class2trainer: "Mike Mich",
      class3: "Meditation class",
      class3time: "4:00pm-5:00pm",
      class3trainer: "Lara Croft",
      class4: "WorkOut",
      class4time: "6:00pm-7:00pm",
      class4trainer: "Larry Wheels",
    },
    {
      day: "Saturday",
      id: "saturday",
      class1: "Power Lifting",
      class1time: "9:00am-10:00am",
      class1trainer: "David Laid",
      class2: "Boxing",
      class2time: "10:00am-11:00am",
      class2trainer: "John Weights",
      class3: "Yoga",
      class3time: "4:00pm-5:00pm",
      class3trainer: "Milica Tails",
    },
    {
      day: "Sunday",
      id: "sunday",
      class1: "Fitness",
      class1time: "9:00am-10:00am",
      class1trainer: "David Villa",
      class2: "BodyBuilding",
      class2time: "10:00am-11:00am",
      class2trainer: "John Weights",
      class3: "Running",
      class3time: "4:00pm-5:00pm",
      class3trainer: "JuniforJonas",
      class4: "Cycling",
      class4time: "6:00pm-7:00pm",
      class4trainer: "Robert Louis",
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
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signin" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
