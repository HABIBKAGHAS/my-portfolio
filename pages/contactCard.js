import { useState } from "react";

export default function ContactCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Sending");
    let data = {
      name,
      email,
      message,
    };
    fetch("/api/contactMe", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((x) => {
      $("#cform").fadeOut();
      $(".alert-success").delay(1000).fadeIn();
    });
  };
  return (
    <div className="card-inner contacts" id="contacts-card">
      <div className="card-wrap">
        <div className="content contacts">
          <div className="title">Get in Touch</div>

          <div className="row">
            <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
              <div className="info-list">
                <ul>
                  <li>
                    <p>
                      <strong>Address . . . . .</strong> Iraq, Erbil
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Email . . . . .</strong> info@habibkaghas.info
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Phone . . . . .</strong> +964 751 898 7405
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Freelance . . . . .</strong> Available
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>

        <div className="content contacts">
          <div className="title">Contact Form</div>

          <div className="row">
            <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
              <div className="contact_form">
                <form id="cform" method="post">
                  <div className="row">
                    <div className="col col-d-6 col-t-6 col-m-12">
                      <div className="group-val">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col col-d-6 col-t-6 col-m-12">
                      <div className="group-val">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email Address"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col col-d-12 col-t-12 col-m-12">
                      <div className="group-val">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="align-left">
                    <a href="#" className="button" onClick={handleSubmit}>
                      <span className="text">Send Message</span>
                      <span className="arrow"></span>
                    </a>
                  </div>
                </form>
                <div className="alert-success">
                  <p>Thanks, your message is sent successfully.</p>
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
