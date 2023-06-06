import { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

import "./ContactForm.css";

const ContactForm = () => {
  const [captchaToken, setCaptchaToken] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wzhf7yj",
        "contact_form",
        e.target,
        "G_jXxfDBpt7enl2Jp",
        captchaToken
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const onChange = (value) => {
    setCaptchaToken(value);
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="row pt-5 mx-auto">
        <div className="col-8 form-group mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
          />
        </div>
        <div className="col-8 form-group pt-2 mx-auto">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            name="email"
          />
        </div>
        <div className="col-8 form-group pt-2 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            name="subject"
          />
        </div>
        <div className="col-8 form-group pt-2 mx-auto">
          <textarea
            className="form-control"
            id=""
            cols="30"
            rows="8"
            placeholder="Your message"
            name="message"
          ></textarea>
        </div>
        <div className="col-8 pt-3 mx-auto">
          <input
            type="submit"
            className="btn btn-info"
            value="Send Message"
          ></input>
        </div>
      </div>
      <ReCAPTCHA
        sitekey="6LcAS3QmAAAAAL7bbwWA0PDkWirFRnmFBOQ8MOmP"
        onChange={onChange}
      />
    </form>
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Nom *</label>
    //   <input type="text" name="user_name" />
    //   <label>Email *</label>
    //   <input type="email" name="user_email" />
    //   <label>Téléphone</label>
    //   <input type="text" name="user_phone" />
    //   <label>Pays</label>
    //   <input type="text" name="user_country" />
    //   <label>Message *</label>
    //   <textarea name="message" />
    //   <label htmlFor="rgpd" id="rgpd">
    //     <input type="checkbox" />
    //     J'ai lu et approuvé la{" "}
    //     <a
    //       href="https://www.bookingsync.com/fr/my/14309/privacy_policy?_ga=2.128869900.1884600497.1601277622-189257610.1600861574"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       politique de confidentialité
    //     </a>
    //   </label>
    //   <label htmlFor="submit" id="submit">
    //     <input type="submit" className="btn" />
    //   </label>
    // </form>
  );
};

export default ContactForm;
