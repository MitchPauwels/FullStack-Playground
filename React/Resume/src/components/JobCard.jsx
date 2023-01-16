import React from 'react';

const JobCard = (props) => {
  const { jobTitle, company, startDate, endDate, location, description } = props;
  
  return (
    <div className="job-card">
      <h3>{jobTitle}</h3>
      <h5>{company}</h5>
      <p>{location}, {startDate} - {endDate}</p>
      <p>{description}</p>
      <hr />
    </div>
  );
}

export default JobCard;
