import React from "react";
import GeneralInfo from "./GeneralInfo.jsx";
import EducationalExperience from "./EducationalExperience.jsx";
import PracticalExperience from "./PracticalExperience.jsx";
import "../styles/CVForm.css";

const CVForm = () => {
  return (
    <div className="cv-form">
      <h1>CV Form</h1>
      <GeneralInfo />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
};

export default CVForm;
