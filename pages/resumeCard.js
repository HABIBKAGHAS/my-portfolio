export default function ResumeCard() {
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
                <div className="resume-item border-line-h active">
                  <div className="date">2013 - Present</div>
                  <div className="name">Art Director</div>
                  <div className="company">Facebook Inc.</div>
                  <p>
                    Collaborate with creative and development teams on the
                    execution of ideas.
                  </p>
                </div>
                <div className="resume-item border-line-h">
                  <div className="date">2011 - 2012</div>
                  <div className="name">Front-end Developer</div>
                  <div className="company">Google Inc.</div>
                  <p>
                    Monitored technical aspects of the front-end delivery for
                    several projects.
                  </p>
                </div>
                <div className="resume-item">
                  <div className="date">2009 - 2010</div>
                  <div className="name">Senior Developer</div>
                  <div className="company">Abc Inc.</div>
                  <p>Optimize website performance using latest technology.</p>
                </div>
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
                <div className="resume-item border-line-h">
                  <div className="date">2006 - 2008</div>
                  <div className="name">Art University</div>
                  <div className="company">New York</div>
                  <p>
                    Bachelors Degree in Computer Science ABC Technical
                    Institute, Jefferson, Missouri
                  </p>
                </div>
                <div className="resume-item border-line-h">
                  <div className="date">2005 - 2006</div>
                  <div className="name">Programming Course</div>
                  <div className="company">Paris</div>
                  <p>Coursework - Git, WordPress, Javascript, iOS, Android.</p>
                </div>
                <div className="resume-item">
                  <div className="date">2004 - 2005</div>
                  <div className="name">Web Design Course</div>
                  <div className="company">London</div>
                  <p>
                    Converted Photoshop layouts to web pages using HTML, CSS,
                    and JavaScript
                  </p>
                </div>
              </div>
            </div>

            <div className="clear"></div>
          </div>
        </div>
        <div className="content skills">
          <div className="title">My Skills</div>

          <div className="row">
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="skills-list">
                <div className="skill-title border-line-h">
                  <div className="icon">
                    <i className="fa fa-paint-brush"></i>
                  </div>
                  <div className="name">Design</div>
                </div>
                <ul>
                  <li className="border-line-h">
                    <div className="name">Web Design</div>
                    <div className="progress">
                      <div className="percentage w-11/12"></div>
                    </div>
                  </li>
                  <li className="border-line-h">
                    <div className="name">Write Music</div>
                    <div className="progress">
                      <div className="percentage w-8/12"></div>
                    </div>
                  </li>
                  <li className="border-line-h">
                    <div className="name">Photoshop</div>
                    <div className="progress">
                      <div className="percentage w-9/12"></div>
                    </div>
                  </li>
                  <li>
                    <div className="name">Graphic Design</div>
                    <div className="progress">
                      <div className="percentage w-10/12"></div>
                    </div>
                  </li>
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
                  <li className="border-line-h">
                    <div className="name">English</div>
                    <div className="progress">
                      <div className="percentage"></div>
                    </div>
                  </li>
                  <li className="border-line-h">
                    <div className="name">German</div>
                    <div className="progress">
                      <div className="percentage"></div>
                    </div>
                  </li>
                  <li className="border-line-h">
                    <div className="name">Italian</div>
                    <div className="progress">
                      <div className="percentage"></div>
                    </div>
                  </li>
                  <li>
                    <div className="name">French</div>
                    <div className="progress ">
                      <div className="percentage"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="skills-list circles">
                <div className="skill-title border-line-h">
                  <div className="icon">
                    <i className="fa fa-code"></i>
                  </div>
                  <div className="name">Coding</div>
                </div>
                <ul>
                  <li>
                    <div className="name">WordPress</div>
                    <div className="progress p90">
                      <span>90%</span>
                    </div>
                  </li>
                  <li>
                    <div className="name">PHP / MYSQL</div>
                    <div className="progress p75">
                      <span>75%</span>
                    </div>
                  </li>
                  <li>
                    <div className="name">Angular / JavaScript</div>
                    <div className="progress p85">
                      <span>85%</span>
                    </div>
                  </li>
                  <li>
                    <div className="name">HTML / CSS</div>
                    <div className="progress p95">
                      <span>95%</span>
                    </div>
                  </li>
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
                  <li>
                    <div className="name">Website hosting</div>
                  </li>
                  <li>
                    <div className="name">iOS and android apps</div>
                  </li>
                  <li>
                    <div className="name">Create logo design</div>
                  </li>
                  <li>
                    <div className="name">Design for print</div>
                  </li>
                  <li>
                    <div className="name">Modern and mobile-ready</div>
                  </li>
                  <li>
                    <div className="name">Advertising services include</div>
                  </li>
                  <li>
                    <div className="name">Graphics and animations</div>
                  </li>
                  <li>
                    <div className="name">Search engine marketing</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="clear"></div>
          </div>
        </div>

        <div className="content testimonials">
          <div className="title">Testimonials</div>
          <div className="row testimonials-items">
            <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
              <div className="revs-carousel default-revs">
                <div className="owl-carousel">
                  <div className="item">
                    <div className="revs-item">
                      <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                      <div className="user">
                        <div className="img">
                          <img src="/template/images/man1.jpg" alt="" />
                        </div>
                        <div className="info">
                          <div className="name">Helen Floyd</div>
                          <div className="company">Art Director</div>
                        </div>
                        <div className="clear"></div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="revs-item">
                      <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                      <div className="user">
                        <div className="img">
                          <img src="/template/images/man1.jpg" alt="" />
                        </div>
                        <div className="info">
                          <div className="name">Robert Chase</div>
                          <div className="company">CEO</div>
                        </div>
                        <div className="clear"></div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="revs-item">
                      <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                      <div className="user">
                        <div className="img">
                          <img src="/template/images/man1.jpg" alt="" />
                        </div>
                        <div className="info">
                          <div className="name">Helen Floyd</div>
                          <div className="company">Art Director</div>
                        </div>
                        <div className="clear"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
