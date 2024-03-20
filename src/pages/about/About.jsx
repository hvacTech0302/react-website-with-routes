import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam
        deleniti obcaecati omnis? Beatae nam unde aperiam facilis ipsa
        molestiae?
      </Header>

      <section className="about-story">
        <div className="container about-story-container">
          <div className="about-section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about-section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab aut
              nam tempore deserunt, reprehenderit hic debitis non doloribus
              nihil consequatur libero eos blanditiis. Rem eligendi enim eum,
              odio, doloremque nihil corrupti rerum, tempore dicta ex est
              necessitatibus? Similique, architecto consequuntur?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              ad exercitationem eius ipsa ut molestiae debitis vero? Expedita
              commodi atque consequuntur vel temporibus iste ab magni eaque aut
              animi, totam enim porro dolore sapiente corporis fuga incidunt
              eligendi accusantium culpa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              eligendi quos iusto error nam rem.
            </p>
          </div>
        </div>
      </section>

      <section className="about-vision">
        <div className="container about-vision-container">
          <div className="about-section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              assumenda nostrum obcaecati aliquid quos praesentium! Numquam
              atque reprehenderit asperiores ratione aspernatur maxime eos
              molestiae recusandae.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              architecto, optio ex aspernatur deleniti neque! Blanditiis
              excepturi alias ut labore.
            </p>
          </div>
          <div className="about-section-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container about-mission-container">
          <div className="about-section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
          <div className="about-section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab aut
              nam tempore deserunt, reprehenderit hic debitis non doloribus
              nihil consequatur libero eos blanditiis. Rem eligendi enim eum,
              odio, doloremque nihil corrupti rerum, tempore dicta ex est
              necessitatibus? Similique, architecto consequuntur?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              ad exercitationem eius ipsa ut molestiae debitis vero? Expedita
              commodi atque consequuntur vel temporibus iste ab magni eaque aut
              animi, totam enim porro dolore sapiente corporis fuga incidunt
              eligendi accusantium culpa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              eligendi quos iusto error nam rem.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
