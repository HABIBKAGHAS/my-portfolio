export default function ResumeCard() {
  const arrEducation = [
    {
      id: 1,
      startDate: 2013,
      endDate: 2018,
      title: "Aleppo University",
      city: "Syria",
      description: "Bachelors Degree in Informatic Engineering.",
    },
  ];

  const arrExperience = [
    {
      id: 1,
      startDate: "jan-2022",
      endDate: "present",
      title: "Technical Team Leader",
      company: "Lucid Source",
      description:
        "Collaborate with creative and development teams on the execution of ideas.",
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
      name: "ReactJS / Javascript",
      perc: "90",
    },
    {
      id: 2,
      name: "NodeJS / Typescript",
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
      name: "Work Mail",
      perc: "65%",
    },
  ];

  const arrKnowledge = [
    { id: 1, name: "CI / CD Implementation." },
    { id: 2, name: "Web Hosting VPS / AWS." },
    { id: 3, name: "Agile methodoliges SCRUM." },
    { id: 4, name: "Deploy on the Blockchain." },
    { id: 5, name: "Write Smart Contracts." },
    { id: 6, name: "Database Management." },
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
                    <p>{x.description}</p>
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
                      {x.startDate} - {x.endDate}
                    </div>
                    <div className="name">{x.title}</div>
                    <div className="company">{x.city}</div>
                    <p>{x.description}</p>
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
