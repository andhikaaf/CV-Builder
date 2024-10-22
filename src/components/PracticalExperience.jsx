import React, { useState } from 'react';
import '../styles/PracticalExperience.css';

const PracticalExperience = () => {
  const [editMode, setEditMode] = useState(true);
  const [experience, setExperience] = useState({ company: '', position: '', responsibilities: '', dateFrom: '', dateTo: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div className="practical-experience">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="company" value={experience.company} onChange={handleChange} placeholder="Company Name" />
          <input type="text" name="position" value={experience.position} onChange={handleChange} placeholder="Position Title" />
          <textarea name="responsibilities" value={experience.responsibilities} onChange={handleChange} placeholder="Main Responsibilities"></textarea>
          <input type="date" name="dateFrom" value={experience.dateFrom} onChange={handleChange} placeholder="Date From" />
          <input type="date" name="dateTo" value={experience.dateTo} onChange={handleChange} placeholder="Date To" />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>Responsibilities: {experience.responsibilities}</p>
          <p>Date From: {experience.dateFrom}</p>
          <p>Date To: {experience.dateTo}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;