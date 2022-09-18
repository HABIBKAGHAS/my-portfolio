export default function ResumeCard() {
  const arrEducation = [
    {
      id: 1,
      startDate: 2013,
      endDate: 2018,
      title: "Aleppo University",
      city: "Syria",
      description: ["Bachelors Degree in Informatic Engineering."],
    },
    {
      id: 2,
      startDate: "32 Hours",
      endDate: "",
      title: "Blockchain, Solidity, Full stack web3 Development with Javascrip",
      city: "freeCodeCamp.org",
      description: [],
    },
    {
      id: 3,
      startDate: "15 Hours",
      endDate: "",
      title: "TOT Debate Program",
      city: "Syrian Trust for Development",
      description: ["One Million Arab Code"],
    },
    {
      id: 4,
      startDate: "24 Hours",
      endDate: "",
      title: "Training for first aids and emergencies management.",
      city: "Holy Cross Scout - Syria",
      description: [],
    },
    {
      id: 5,
      startDate: "35 Hours",
      endDate: "",
      title: "Create Child Friend Spaces (Certified)",
      city: "Caritas - Syria",
      description: [
        "Child Protection",
        "How to analyze the needs in an area.",
        "React with the situation of each child independently.",
      ],
    },

    {
      id: 6,
      startDate: "35 Hours",
      endDate: "",
      title:
        "The principles of communication and education for children at risk in crisis (Certified)",
      city: "Caritas - Syria",
      description: [
        "Definition of protection / Child protection",
        "Convention on the rights of the child",
        "Developmental stages of a child",
        "Children's reactions to crises",
        "Friendly spaces for children",
        "Communicating with children",
        "Information transfer skill",
        "Multiple Intelligence Theory",
      ],
    },
  ];

  const arrExperience = [
    {
      id: 1,
      startDate: "jan - 2022",
      endDate: "present",
      title: "Technical Team Leader",
      company: "Lucid Source",
      description: [
        "Understand user requirement and design ERD for database.",
        "Create tasks and distribute it upon the team using Agile Methodology (SCRUM) with Jira.",
        "Handle Server Side (Create CI/CD, track testing, staging and production) and database management.",
        "Backend development using NodeJS and MYSQL Server.",
      ],
    },
    {
      id: 2,
      startDate: "Dec - 2020",
      endDate: "present",
      title: "Backend Developer",
      company: "Al jazary",
      description: [
        "Build and Develop POS Desktop Application That work Hybrid (Online and Offline smoothly) Using Electron, ReactJS as Frontend, and NodeJS as Backend, with Sql Server in online Database and Sqlite in Offline Database ",
        "Develop Accounting Desktop Application, using Electron, ReactJS and NodeJS in Typescript and REST API, DDD as a Pattern.",
        "Develop backend for Health care application for mobile application in REST API.",
      ],
    },
    {
      id: 3,
      startDate: "Dec - 2020",
      endDate: "Jan - 2022",
      title: "IT Manager",
      company: "Gulf Steel Company",
      description: [
        "Build and Develop POS Desktop Application That work Hybrid (Online and Offline smoothly) Using Electron, ReactJS as Frontend, and NodeJS as Backend, with Sql Server in online Database and Sqlite in Offline Database",
        "Develop Accounting Desktop Application, using Electron, ReactJS and NodeJS in Typescript and REST API, DDD as a Pattern.",
        "Develop backend for Health care application for mobile application in REST API.",
      ],
    },
    {
      id: 4,
      startDate: "Dec - 2018",
      endDate: "Dec - 2020",
      title: "Full Stack Engineer",
      company: "Remote, Oman",
      description: [
        "Build Restful API using ASP .Net Core.",
        "Build Android and IOS Application using Xamarin Forms.",
        "Build Website Using Blazor.",
        "Create Identification website using Wordpress.",
      ],
    },
    {
      id: 5,
      startDate: "Sep - 2017",
      endDate: "Dec - 2020",
      title: "Java Developer",
      company: "Accad, Institute",
      description: ["Java JSPX", "Facelettes ADF"],
    },
  ];

  const arrLanguages = [
    {
      id: 1,
      name: "Arabic",
      perc: "100%",
    },
    {
      id: 2,
      name: "English",
      perc: "90%",
    },
    {
      id: 3,
      name: "French",
      perc: "25%",
    },
  ];

  const arrCoding = [
    {
      id: 1,
      name: "NodeJS / Typescript ",
      perc: "90",
    },
    {
      id: 2,
      name: "ReactJS / Javascript",
      perc: "80",
    },
    {
      id: 3,
      name: ".Net Core",
      perc: "75",
    },
    {
      id: 4,
      name: "Solidity",
      perc: "60",
    },
  ];

  const arrAWS = [
    {
      id: 1,
      name: "S3 Bucket",
      perc: "90%",
    },
    {
      id: 2,
      name: "EC2",
      perc: "80%",
    },
    {
      id: 3,
      name: "IAM",
      perc: "75%",
    },
    {
      id: 4,
      name: "SNS / SQS",
      perc: "70%",
    },
    {
      id: 5,
      name: "AWS Amplify / Lambda",
      perc: "65%",
    },
    {
      id: 6,
      name: "Work Mail",
      perc: "60%",
    },
  ];

  const arrKnowledge = [
    { id: 1, name: "CI / CD Implementation." },
    { id: 2, name: "Web Hosting VPS / AWS." },
    { id: 3, name: "Agile methodoliges SCRUM." },
    { id: 4, name: "Deploy on the Blockchain." },
    { id: 5, name: "Write Smart Contracts." },
    { id: 6, name: "SQL Server Database Management." },
    { id: 7, name: "MySQL Database Management." },
    { id: 8, name: "MongoDB No SQL Database Management." },
    { id: 9, name: "Analyze and draw ERDs." },
  ];

  return (
    <div className="card-inner" id="resume-card">
      <div className="card-wrap">
        <div className="content resume">
          <div className="title">Resume</div>

          <div className="row">
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="resume-title border-line-h">
                <div className="icon">
                  <i className="fa fa-briefcase"></i>
                </div>
                <div className="name">Experience</div>
              </div>
              <div className="resume-items">
                {arrExperience.map((x) => (
                  <div className="resume-item border-line-h active" key={x.id}>
                    <div className="date">
                      {x.startDate} - {x.endDate}
                    </div>
                    <div className="name">{x.title}</div>
                    <div className="company">{x.company}</div>
                    <ol>
                      {x.description.map((z) => (
                        <li key={x.description.indexOf(z)}>
                          <p style={{ fontSize: 12 }}>
                            {x.description.indexOf(z) + 1 + ". " + z}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>

            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="resume-title border-line-h">
                <div className="icon">
                  <i className="fa fa-university"></i>
                </div>
                <div className="name">Education</div>
              </div>
              <div className="resume-items">
                {arrEducation.map((x) => (
                  <div className="resume-item border-line-h" key={x.id}>
                    <div className="date">
                      {x.startDate} {x.endDate !== "" ? " - " + x.endDate : ""}
                    </div>
                    <div className="name">{x.title}</div>
                    <div className="company">{x.city}</div>
                    <ol type="A">
                      {x.description.map((z) => (
                        <li key={x.description.indexOf(z)}>
                          <p style={{ fontSize: 12 }}>
                            <span>&#8226;</span>
                            {" " + z}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>

            <div className="clear"></div>
          </div>
        </div>
        <div className="content skills">
          <div className="title">My Skills</div>

          <div className="row">
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="skills-list circles">
                <div className="skill-title border-line-h">
                  <div className="icon">
                    <i className="fa fa-code"></i>
                  </div>
                  <div className="name">Coding</div>
                </div>
                <ul>
                  {arrCoding.map((x) => (
                    <li key={x.id}>
                      <div className="name">{x.name}</div>
                      <div className={`progress p${x.perc}`}>
                        <span>{x.perc}%</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="skills-list dotted">
                <div className="skill-title border-line-h">
                  <div className="icon">
                    <i className="fa fa-flag"></i>
                  </div>
                  <div className="name">Languages</div>
                </div>
                <ul>
                  {arrLanguages.map((x) => (
                    <li className="border-line-h" key={x.id}>
                      <div className="name">{x.name}</div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: x.perc }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="skills-list">
                <div className="skill-title border-line-h">
                  <div className="icon">
                    <i className="fa fa-cloud"></i>
                  </div>
                  <div className="name">Amazon Web Services</div>
                </div>
                <ul>
                  {arrAWS.map((x) => (
                    <li className="border-line-h" key={x.id}>
                      <div className="name">{x.name}</div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: x.perc }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="skills-list list">
                <div className="skill-title border-line-h">
                  <div className="icon">
                    <i className="fa fa-list"></i>
                  </div>
                  <div className="name">Knowledge</div>
                </div>
                <ul>
                  {arrKnowledge.map((x) => (
                    <li key={x.id}>
                      <div className="name">{x.name}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
