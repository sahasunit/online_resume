import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { companies } from "../utilities/Helper";

const WorkExperience = () => {
	return (
		<div className="w-full md:min-h-screen max-md:py-8 bg-black-olive">
			<div className="top-0 left-0 w-full md:min-h-screen flex flex-col justify-center py-8">
				<div className="text-40 font-bold tracking-wider leading-10 text-center text-floral-white">
					Work Timeline
				</div>
				<div className="mt-8">
					<Timeline position="alternate">
						{companies.map((company) => (
							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot color="primary" />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<div className="tracking-medium text-floral-white">
										<div className="text-14 lg:text-24 font-bold">
											{company.company}
										</div>
										<div className="text-12 lg:text-18 font-medium lg:font-bold">
											{company.position}
										</div>
										<div className="text-10 lg:text-16 font-medium">
											{company.workingPeriod}
										</div>
									</div>
								</TimelineContent>
							</TimelineItem>
						))}
					</Timeline>
				</div>
			</div>
		</div>
	);
};

export default WorkExperience;
