import Socials from "../../components/Socials";
import { contactInfo } from "../../data";
import { cssPerfectShape } from "../../utils";

import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-info-wrapper">
          {contactInfo.map((info, index) => (
            <div className="contact-info" key={index}>
              <div className="icon" style={{ ...cssPerfectShape(70, 70) }}>
                <info.icon />
              </div>
              <div className="info">
                <h3>{info.title}</h3>
                <p className="description">{info.description}</p>
                <h4 className="value">{info.value}</h4>
              </div>
            </div>
          ))}
          <Socials />
        </div>

        <form>
          <div className="top">
            <h2>Get In Touch</h2>
            <p className="description">
              Have a project in mind or need expert advice? We&apos;re here to
              help! Reach out to our team for personalized consultations,
              inquiries, or to start your next big project today.
            </p>
          </div>

          <div className="middle">
            <input
              type="text"
              placeholder="Full name"
              name="fullName"
              className="control"
            />
            <input
              type="email"
              placeholder="Email address"
              name="email"
              className="control"
            />
            <input
              type="tel"
              placeholder="Phone number"
              name="phoneNumber"
              className="control"
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="control"
            ></textarea>
          </div>

          <div className="bottom">
            <button type="button" className="btn primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
