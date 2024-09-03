import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(
  startDate: string,
  showMonths: boolean
): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return '1 year';
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} year ${months} month`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <a
            href="https://www.ia.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-white hover:underline ease"
          >
            Informatic Engineering Student
          </a>{' '}
          | October 2021 - {calculateDuration('2021-10-20', true)}
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          A passionate web developer and a 2021 Computer Science graduate from
          Universitas Islam Balitar, I have been actively involved in various
          academic and extracurricular activities. Beyond my coursework in web
          development, mobile development, and networking, I have taken on
          leadership roles in community service projects and served as a
          teaching assistant. My dedication to continuous learning is evident in
          my pursuit of scholarships and training programs specifically focused
          on web development.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          <a
            href="https://www.ia.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-white hover:underline ease"
          >
            Fullstack Web Development
          </a>{' '}
          | February 2024 - June 2024
          {/* | February 2024 - {calculateDuration('2023-03-01', true)} */}
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          As a 5-month intern in the "MSIB Kampus Merdeka Batch 6" program at
          Binar Academy, the participant successfully transitioned into a
          full-stack web developer. Throughout the program, they actively
          learned and built various websites utilizing the MERN stack (MongoDB,
          Express, React, Node.js) and additional technologies to enhance
          application performance and reliability. The intern has successfully
          completed numerous projects both independently and collaboratively
          within a team. A notable achievement includes the development of a
          Restful API and an airline ticket booking website, complete with
          booking and payment features integrated with a payment gateway. This
          project was successfully completed with highly satisfactory results.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          Freelance | May. 2023 - September. 2023
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          As a freelance web developer contracted by IGRA Kota Blitar, I am
          tasked with developing a comprehensive teacher performance evaluation
          system. This system will employ a 360-degree feedback approach to
          gather assessments from various stakeholders, including peers,
          supervisors, and subordinates. By leveraging PHP, MySQL, and Chart.js,
          I will build a robust and user-friendly platform that can efficiently
          collect, analyze, and visualize performance data. The goal is to
          provide a reliable and accurate evaluation tool that supports
          data-driven decision-making in the educational context.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent last>
        <TimelineEvent.Title>
          Lecturer Assistant | March 2023 - September 2023
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          As a teaching assistant for Computer Networking and its Practical, I
          assist in managing the course, including preparing materials,
          assignments, and assessments. My responsibilities involve guiding
          students in practical exercises on topics such as Mikrotik
          configuration, hotspot setup, LAN cabling, routing protocols, VLANs,
          and user management.
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimeLineExp;
