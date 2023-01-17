import React from "react";
import JobCard from "./JobCard";
import Contact from "./Contact";
import TechnicalSkills from "./TechnicalSkills";
import LanguageSkills from "./LanguageSkills";
import Education from "./Education";

const ResumePage = () => {
	const jobs = [
		{
			jobTitle: "Software Engineer",
			company: "100Devs Agency",
			startDate: "Jan 2022",
			endDate: "Dec 2022",
			location: "USA",
			description: (
				<ul>
					<li>
						Designing and developing software applications using a variety of
						programming languages, frameworks and databases
					</li>
					<li>
						Building and maintaining the front-end and back-end aspects of web
						and mobile applications
					</li>
					<li>Troubleshooting and debugging software issues</li>
					{/* <li>Continuously testing and optimizing software performance</li> */}
				</ul>
			),
		},
		{
			jobTitle: "Compliance Officer",
			company: "Ferratum Bank",
			startDate: "Oct 2010",
			endDate: "Apr 2020",
			location: "Malta",
			description: (
				<ul>
					<li>Developing and implementing AML policies and procedures</li>
					<li>
						Conducting AML risk assessments to identify and mitigate potential
						money laundering risks
					</li>
					<li>
						Monitoring transactions for suspicious activity and filing
						suspicious activity reports (SARs) when necessary
					</li>
					{/* <li>
						Participating in AML investigations and providing support to law
						enforcement agencies as needed
					</li> */}
				</ul>
			),
		},

		{
			jobTitle: "Operations Specialist",
			company: "Ferratum Bank",
			startDate: "Sep 2018",
			endDate: "Oct 2019",
			location: "Malta",
			description: (
				<ul>
					<li>
						Coordinating and overseeing the processing of transactions, such as
						deposits and withdrawals
					</li>
					<li>
						Managing the bank's relationships with vendors and service providers
					</li>
					<li>
						Developing and implementing operational procedures and policies
					</li>
					{/* <li>
						Troubleshooting and resolving operational issues as they arise
					</li> */}
				</ul>
			),
		},
		{
			jobTitle: "Team Leader",
			company: "Ferratum Bank",
			startDate: "sep 2017",
			endDate: "Sep 2018",
			location: "United Kingdom / Malta",
			description: (
				<ul>
					<li>
						Monitoring and evaluating team performance and providing feedback
						and coaching
					</li>
					<li>Handling escalations and resolving complex customer issues</li>
					<li>
						Developing and implementing customer service policies and procedures
					</li>
					{/* <li>Identifying and implementing process improvements to increase efficiency and customer satisfaction</li>
            <li>Communicating regularly with upper management to provide updates on team performance and customer service metrics</li> */}
				</ul>
			),
		},
		// {
		// 	jobTitle: "Senior Customer Service Representative",
		//     company: 'Ferratum Bank',
		// 	startDate: "July 2017",
		// 	endDate: "Sep 2017",
		// 	location: "United Kingdom",
		// 	description: <ul>
		//     <li>Acting as a primary point of contact for customers and handling a wide range of customer service inquiries and requests</li>
		//     <li>Resolving customer complaints and issues in a timely and professional manner</li>
		//     <li>Building and maintaining positive relationships with customers</li>
		//     <li>Communicating with other departments and teams to resolve customer issues and provide updates</li>
		//     <li>Identifying and escalating recurring customer service issues to management for resolution</li>
		//     </ul>,
		// },
		// {
		// 	jobTitle: "Loan Handler",
		//     company: 'Ferratum Bank',
		// 	startDate: "Feb 2016",
		// 	endDate: "July 2017",
		// 	location: "United Kingdom",
		// 	description: <ul>
		//     <li>Reviewing and evaluating loan applications to ensure compliance with lending criteria and regulations</li>
		//     <li>Verifying the accuracy of customer information and documentation </li>
		//     <li>Communicating with customers to gather additional information or documentation as needed</li>
		//     <li>Processing loan applications and disbursing funds to customers</li>
		//     <li>Maintaining accurate records of loan transactions and customer information</li>
		//     </ul>,
		// }

		// more jobs
	];

	return (
		<div className="resume">
			<div className="contact">
				<Contact />
				<TechnicalSkills />
				<LanguageSkills />
				{/* <Education /> */}
			</div>
			<div className="resume-jobs">
				{jobs.map((job, index) => (
					<JobCard key={index} {...job} />
				))}
			</div>
		</div>
	);
};

export default ResumePage;
