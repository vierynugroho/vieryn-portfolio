import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(
  startDate: string,
  endDate?: string,
  showMonths: boolean = false
): string {
  const start: Date = new Date(startDate);
  const end: Date = endDate ? new Date(endDate) : new Date(); // Jika endDate tidak ada, gunakan tanggal sekarang
  const diffTime: number = end.getTime() - start.getTime();

  // Konversi selisih waktu ke tahun dan bulan
  const totalMonths: number = Math.floor(
    diffTime / (1000 * 60 * 60 * 24 * 30.44)
  ); // Approximate months in a year
  const years: number = Math.floor(totalMonths / 12);
  const months: number = totalMonths % 12;

  if (years === 1 && months === 0) {
    return '1 year';
  } else if (!showMonths) {
    return `${years} years`;
  } else if (years === 0) {
    return `${months} months`;
  } else {
    return `${years} years ${months} months`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      {/* Intechgrasi.id */}
      <TimelineEvent active>
        <TimelineEvent.Header
          title={'Backend Developer'}
          date={'March 2025 - now'}
        ></TimelineEvent.Header>

        <TimelineEvent.SubTitle>
          Intechgrasi.id - {calculateDuration('2025-03-01', undefined, true)}
        </TimelineEvent.SubTitle>

        <TimelineEvent.Description>
          Designing and developing RESTful APIs using Node.js (Express.js,
          NestJS, or other frameworks). Integrating third-party services such as
          payment systems, authentication, and cloud storage. Managing SQL
          databases (PostgreSQL, MySQL) or NoSQL databases (MongoDB, Firebase).
          Implementing microservices architecture and event-driven systems for
          scalability. Utilizing containerization with Docker and deploying
          applications on AWS, GCP, or other cloud servers. Enhancing API
          security using authentication methods such as JWT, OAuth, or other
          techniques. Optimizing backend performance and managing caching using
          Redis or similar technologies. Performing debugging, logging, and
          system monitoring to ensure application stability.
        </TimelineEvent.Description>
      </TimelineEvent>

      {/* Dafi Catering */}
      <TimelineEvent active>
        <TimelineEvent.Header
          title={'Web Developer'}
          date={'October 2024 - now'}
        ></TimelineEvent.Header>

        <TimelineEvent.SubTitle>
          Dafi Catering - {calculateDuration('2024-10-10', undefined, true)}
        </TimelineEvent.SubTitle>

        <TimelineEvent.Description>
          I have experience in developing websites to showcase catering
          services, manage orders, and publish blog content. I regularly perform
          website backups, handle deployment, and optimize SEO to improve
          visibility. Additionally, I analyze website performance using Google
          Analytics to track user engagement and make data-driven improvements.
          I also ensure that website content stays fresh and relevant by
          updating posts regularly.
        </TimelineEvent.Description>
      </TimelineEvent>

      {/* Mahasiswa */}
      <TimelineEvent active>
        <TimelineEvent.Header
          title={'Informatic Engineering Student'}
          date={'October 2021 - now'}
        ></TimelineEvent.Header>
        <TimelineEvent.SubTitle>
          Islamic University of Balitar -{' '}
          {calculateDuration('2021-10-20', undefined, true)}
        </TimelineEvent.SubTitle>

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

      {/* 80&Company */}
      <TimelineEvent>
        <TimelineEvent.Header
          title={'Fullstack Web Developer'}
          date={'March 2024 - May 2025'}
        ></TimelineEvent.Header>

        <TimelineEvent.SubTitle>
          80&Company - {calculateDuration('2025-03-01', '2025-05-01', true)}
        </TimelineEvent.SubTitle>

        <TimelineEvent.Description>
          Developed a full-stack website using Next.js with integration of
          various AWS services, Dify API, and a database to support application
          performance and scalability. The project also involved implementing
          Docker for efficient and standardized deployment processes. The main
          focus of development was on creating an intuitive and user-friendly
          UI/UX. In addition to technical aspects, the project emphasized
          effective time management to ensure each development phase proceeded
          according to schedule.
        </TimelineEvent.Description>
      </TimelineEvent>

      {/* Asisten Praktikum Pemrograman Web */}
      <TimelineEvent>
        <TimelineEvent.Header
          title={'Lab Assistant Web Programming'}
          date={'January 2025 - February 2025'}
        ></TimelineEvent.Header>
        <TimelineEvent.SubTitle>
          Islamic University of Balitar -{' '}
          {calculateDuration('2025-01-01', '2025-02-15', true)}
        </TimelineEvent.SubTitle>

        <TimelineEvent.Description>
          I have experience in classroom management, including delivering
          learning materials, assigning and evaluating tasks, and managing
          attendance. I also teach programming, focusing on PHP, MySQL, HTML,
          and CSS, helping students understand both fundamental concepts and
          practical implementation.
        </TimelineEvent.Description>
      </TimelineEvent>

      {/* Asisten Dosen Pemrograman API */}
      <TimelineEvent>
        <TimelineEvent.Header
          title={'Lecturer Assistant API Programming'}
          date={'October 2024 - January 2025'}
        ></TimelineEvent.Header>
        <TimelineEvent.SubTitle>
          Islamic University of Balitar -{' '}
          {calculateDuration('2024-10-01', '2025-01-15', true)}
        </TimelineEvent.SubTitle>

        <TimelineEvent.Description>
          I have experience in managing classes, including delivering learning
          materials, assigning and evaluating tasks, and ensuring an effective
          learning process. I also developed a full-stack website using NextJS
          as a demo platform for learning, providing hands-on experience for
          students. Additionally, I teach essential web development topics such
          as HTTP, REST API, Security, Authentication, Authorization, and
          Payment Gateway, helping students understand both theoretical concepts
          and real-world applications.
        </TimelineEvent.Description>
      </TimelineEvent>

      {/* Backend MSIB */}
      <TimelineEvent>
        <TimelineEvent.Header
          title={'Backend Javascript with AI Literacy'}
          date={'September 2024 - January 2025'}
        ></TimelineEvent.Header>
        <TimelineEvent.SubTitle>
          Islamic University of Balitar -{' '}
          {calculateDuration('2024-09-01', '2025-02-01', true)}
        </TimelineEvent.SubTitle>

        <TimelineEvent.Description>
          As a 5-month intern in the "MSIB Kampus Merdeka Batch 7" program at
          Binar Academy, the participant successfully transitioned into a
          backend developer. By following the Back End JavaScript course - with
          AI Literacy & Global Certification Learn about: Programming Algorithm,
          Error Handling, Asynchronous Process, Object Oriented Javascript,
          Version Control with Git and GitHub, Basic concepts, how it works, and
          AI applications, Back End Developer competencies in developing
          AI-based digital products, Using AI-based tools, Database, DBMS
          (Database Management System), Query Language, Database Indexing and
          Query Optimization, RDBMS, Node.JS and Package Management, Web
          Development with Express.JS, ORM with Prisma, API Documentation,
          Authentication, Authorization, and Security, Deployment. This project
          was successfully completed with highly satisfactory results.
        </TimelineEvent.Description>
      </TimelineEvent>

      {/* Fullstack MSIB */}
      <TimelineEvent>
        <TimelineEvent.Header
          title={'Fullstack Web Development'}
          date={'February 2024 - June 2024'}
        ></TimelineEvent.Header>
        <TimelineEvent.SubTitle>
          Islamic University of Balitar -{' '}
          {calculateDuration('2024-02-01', '2024-07-01', true)}
        </TimelineEvent.SubTitle>

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

      {/* Web Dev - IGRA Kota Blitar */}
      <TimelineEvent>
        <TimelineEvent.Header
          title={'Web Developer'}
          date={'March 2023 - September 2023'}
        ></TimelineEvent.Header>
        <TimelineEvent.SubTitle>
          Islamic University of Balitar -{' '}
          {calculateDuration('2023-03-01', '2023-09-01', true)}
        </TimelineEvent.SubTitle>

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

      {/* Asisten Dosen Jaringan Komputer */}
      <TimelineEvent last>
        <TimelineEvent.Header
          title={'Lecturer Assistant Network Engineering'}
          date={'March 2023 - September 2023'}
        ></TimelineEvent.Header>
        <TimelineEvent.SubTitle>
          Islamic University of Balitar -{' '}
          {calculateDuration('2023-03-01', '2023-09-01', true)}
        </TimelineEvent.SubTitle>

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
