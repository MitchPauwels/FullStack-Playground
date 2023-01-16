import React from 'react';

const LanguageSkills = () => {
  const languages = [
    { name: "Dutch", proficiency: "Native" },
    { name: "English", proficiency: "Bilingual" }
  ];

  return (
    <div className="language-skills">
      <h3 className='language-title'>Language Skills</h3>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language.name} - {language.proficiency}</li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSkills;
