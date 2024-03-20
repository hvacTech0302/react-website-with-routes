import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam
        deleniti obcaecati omnis? Beatae nam unde aperiam facilis ipsa
        molestiae?
      </Header>
      <section className="contact">
        <div className="container contact-container">
          <div className="contact-wrapper">
            <a
              href="mailto:test.email@email.org"
              target="_blank"
              rel="noreferer noopener noreferrer"
            >
              <MdEmail />
            </a>
            <a
              href="https://m.me/test-messenger"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+12345678901"
              target="_blank"
              rel="norefferer noopener noreferrer"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
