import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

import "./ContactForm.css";

const ContactForm = () => {
  const [captchaToken, setCaptchaToken] = useState("");
  const onChange = (value) => {
    setCaptchaToken(value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    rgpd: false,
  });
  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);
    if (
      captchaToken === null ||
      formData.name === "" ||
      formData.email === "" ||
      formData.message === "" ||
      !formData.rgpd
    ) {
      console.log("nope");
    } else {
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
    }
  };

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <div className="contact-details">
        <label htmlFor="name">Nom *</label>
        <input
          type="text"
          id="name"
          placeholder="Nom"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="phone">Téléphone</label>
        <input
          type="tel"
          id="phone"
          placeholder="Téléphone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <label htmlFor="country">Pays</label>
        <input
          type="text"
          id="country"
          placeholder="Pays"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </div>
      <div className="contact-form-message">
        <label htmlFor="message"> Message *</label>
        <textarea
          id="message"
          placeholder="Your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="contact-form-validation">
        <label>
          <input
            type="checkbox"
            id="rgpd"
            name="rgpd"
            checked={formData.rgpd}
            onChange={() => setFormData({ ...formData, rgpd: !formData.rgpd })}
          />{" "}
          J'ai lu et approuvé la{" "}
          <a
            href="https://www.bookingsync.com/fr/my/14309/privacy_policy?_ga=2.128869900.1884600497.1601277622-189257610.1600861574"
            target="_blank"
            rel="noopener noreferrer"
          >
            politique de confidentialité
          </a>
        </label>

        <ReCAPTCHA
          sitekey="6LcAS3QmAAAAAL7bbwWA0PDkWirFRnmFBOQ8MOmP"
          onChange={onChange}
        />

        <input
          type="submit"
          className="btn"
          value="Envoyer"
          style={{ fontSize: "1rem" }}
        ></input>
      </div>
    </form>
  );
};

export default ContactForm;
