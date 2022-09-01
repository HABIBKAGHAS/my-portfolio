export default function AboutCard() {
  return (
    <div className="card-inner animated active" id="about-card">
      <div className="card-wrap">
        <div className="content about">
          <div className="title">About Me</div>

          <div className="row">
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="text-box">
                <p>
                  Experienced Project Lead Developer with a demonstrated history
                  of working in the non-profit organization management industry.
                  Skilled in English as a Second Language (ESL), Computer
                  Science, NodeJS, ReactJS, Mobile Applications, and Java. Have
                  great knowledge in Amazon Web Services (AWS), interestend in
                  Web 3.0, BlockChain, Non-Fungible Tokens (NFTs), and crypto.
                  Strong information technology professional with a Bachelor`s
                  degree focused in Artificial Intelligence from Information
                  Technology University (ITI).
                </p>
              </div>
            </div>
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="info-list">
                <ul>
                  <li>
                    <p>
                      <strong>Age . . . . .</strong> 27
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Residence . . . . .</strong> Erbil, Iraq
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Freelance . . . . .</strong> Available
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Address . . . . .</strong> 40th Street
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>

        <div className="content services">
          <div className="title">My Services</div>

          <div className="row service-items border-line-v">
            <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
              <div className="service-item">
                <div className="icon">
                  <span className="fa fa-code"></span>
                </div>
                <div className="name">
                  <span>Web Development </span>
                </div>
                <div className="desc">
                  <div>
                    <p>
                      Modern and mobile-ready website that will help you reach
                      all of your marketing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
              <div className="service-item">
                <div className="icon">
                  <span className="fa fa-cloud"></span>
                </div>
                <div className="name">
                  <span>DevOps</span>
                </div>
                <div className="desc">
                  <div>
                    <p>
                      Deploying websites to EC2 AWS, managing files using S3
                      Bucket, ServerLess Applications using Lambda, creating
                      CI/CD using github actions and AWS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
              <div className="service-item">
                <div className="icon">
                  <span className="fa fa-database"></span>
                </div>
                <div className="name">
                  <span>Database Management </span>
                </div>
                <div className="desc">
                  <div>
                    <p>
                      ERD Desgin and analyze requirements, SQL Server, MySql and
                      Mongodb.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
              <div className="service-item">
                <div className="icon">
                  <span className="fa fa-laptop"></span>
                </div>
                <div className="name">
                  <span>Web 3.0 </span>
                </div>
                <div className="desc">
                  <div>
                    <p>
                      Write Smart Contracts with Solidity, Openzeppelin and
                      Hardhat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>

        {/* <div className="content pricing">
          <div className="title">Pricing</div>

          <div className="row pricing-items">
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="pricing-item">
                <div className="icon">
                  <i className="fa fa-battery-half"></i>
                </div>
                <div className="name">Basic</div>
                <div className="amount">
                  <span className="dollar">$</span>
                  <span className="number">22</span>
                  <span className="period">hour</span>
                </div>
                <div className="feature-list">
                  <ul>
                    <li>Web Development</li>
                    <li>Advetising</li>
                    <li>Game Development</li>
                    <li className="disable">Music Writing</li>
                    <li className="disable">
                      Photography <strong>new</strong>
                    </li>
                  </ul>
                </div>
                <div className="lnks">
                  <a href="#" className="lnk">
                    <span className="text">Buy Basic</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="pricing-item">
                <div className="icon">
                  <i className="fa fa-battery-full"></i>
                </div>
                <div className="name">Pro</div>
                <div className="amount">
                  <span className="dollar">$</span>
                  <span className="number">48</span>
                  <span className="period">hour</span>
                </div>
                <div className="feature-list">
                  <ul>
                    <li>Web Development</li>
                    <li>Advetising</li>
                    <li>Game Development</li>
                    <li>Music Writing</li>
                    <li>
                      Photography <strong>new</strong>
                    </li>
                  </ul>
                </div>
                <div className="lnks">
                  <a href="#" className="lnk">
                    <span className="text">Buy Pro</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="clear"></div>
          </div>
        </div> */}

        {/* <div className="content fuct">
          <div className="title">Fun Fact</div>

          <div className="row fuct-items">
            <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
              <div className="fuct-item">
                <div className="icon">
                  <span className="fa fa-music"></span>
                </div>
                <div className="name">80 Albumes Listened</div>
              </div>
            </div>

            <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
              <div className="fuct-item">
                <div className="icon">
                  <span className="fa fa-trophy"></span>
                </div>
                <div className="name">15 Awards Won</div>
              </div>
            </div>

            <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
              <div className="fuct-item">
                <div className="icon">
                  <span className="fa fa-coffee"></span>
                </div>
                <div className="name">1 000 Cups of coffee</div>
              </div>
            </div>

            <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
              <div className="fuct-item">
                <div className="icon">
                  <span className="fa fa-flag"></span>
                </div>
                <div className="name">10 Countries Visited</div>
              </div>
            </div>

            <div className="clear"></div>
          </div>
        </div> */}

        <div className="content quote">
          <div className="title">
            <span>Quote</span>
          </div>

          <div className="row">
            <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
              <div className="revs-item">
                <div className="text">
                  <div>
                    People who are crazy enough to think they can change the
                    world are the ones who do..People who are crazy enough to
                    think they can change the world are the ones who do..
                  </div>
                </div>
                <div className="user">
                  <div className="info">
                    {/* <div className="name"></div> */}
                    <div className="company">Web Designer</div>
                  </div>
                  <div className="clear"></div>
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
