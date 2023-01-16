import React from 'react';

const TechnicalSkills = () => {
  const skills = [
    "HTML", "CSS", "Javascript", "React.js", "Node.js", "Express", "EJS", "MongoDB", "SQL", "JIRA", "Microsoft Office", "Power BI", "Microsoft Teams"
  ];

  return (
    <div className="technical-skills">
      <h3 className='skills-title'>Technical Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li className='skill' key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default TechnicalSkills;
