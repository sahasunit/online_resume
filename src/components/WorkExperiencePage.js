import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import _ from 'lodash';

const WorkExperience = () => {

  const companies = [
    {
      company: "LBT Innovations",
      position: "Software Engineer",
      workingPeriod: "September 2022 - Present",
    },
    {
      company: "Software Risk",
      position: "Software Engineer",
      workingPeriod: "November 2021 - August 2022",
    },
    {
      company: "University of Adelaide",
      position: "Software Engineering and Project Tutor",
      workingPeriod: "July 2021 - December 2021",
    },
    {
      company: "Pearler ",
      position: "Software Engineer",
      workingPeriod: "September 2020 - October 2021",
    },
    {
      company: "Dassault Systèmes",
      position: "Systems Engineering Intern",
      workingPeriod: "December 2019 - February 2020",
    },
    {
      company: "Information Technology and Digital Services",
      position: "Client Computing Intern",
      workingPeriod: "August 2019 - October 2019",
    },
    {
      company: "Kumon Australia & New Zealand",
      position: "Teaching Assistant",
      workingPeriod: "May 2019 - July 2019",
    }
  ]

  return (
    <div class="h-max bg-black-olive">
      <div class="text-40 font-bold tracking-wide leading-3 py-20 text-center text-floral-white">
        Work Timeline
      </div>
      <Timeline position="alternate">
        {companies.map((company) => (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div class="text-18 font-bold tracking-medium text-floral-white">
                      {company.company}
                    </div>
                    <div class="text-14 font-semibold tracking-medium text-floral-white">
                      {company.position}
                    </div>
                    <div class="text-12 font-normal tracking-medium text-floral-white">
                      {company.workingPeriod}
                    </div>
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline> 
    </div>
  );
}

export default WorkExperience;