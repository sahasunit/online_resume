import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { companies } from "../utilities/Helper";

const WorkExperience = ({ maxWidthViewport }) => {
	return (
		<div class="h-screen bg-black-olive flex flex-col justify-center pt-5">
			<div class="text-40 font-bold tracking-wider leading-10 text-center text-floral-white">
				Work Timeline
			</div>
			<div class="pt-5">
				<Timeline position="alternate">
					{companies.map((company) => (
						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot color="primary" />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<div class="tracking-medium text-floral-white">
									<div
										class={`${
											maxWidthViewport <= 464 ? "text-14" : "text-18"
										} font-bold `}
									>
										{company.company}
									</div>
									<div
										class={`${
											maxWidthViewport <= 464
												? "text-12 font-medium"
												: "text-16 font-bold"
										}`}
									>
										{company.position}
									</div>
									<div
										class={`${
											maxWidthViewport <= 464
												? "text-10"
												: "text-12 font-medium"
										}`}
									>
										{company.workingPeriod}
									</div>
								</div>
							</TimelineContent>
						</TimelineItem>
					))}
				</Timeline>
			</div>
		</div>
	);
};

export default WorkExperience;
