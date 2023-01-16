import React from 'react';

const Education = () => {
  const education = [
    { schoolName: "Alison", location: "Online", startDate: "April 2014", endDate: "June 2014",degree: "Diploma Modern Project Management " },
    { schoolName: "Encora", location: "Belgium", startDate: "September 2012", endDate: "June 2012",degree: "Diploma Front-End web developer" },

  ];

  return (
    <div className="education">
      <h3 className='education-title'>Education</h3>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <h4>{edu.schoolName}</h4>
            <p>{edu.location}</p>
            <p>{edu.startDate} - {edu.endDate}</p>
            <p>Degree: {edu.degree}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
