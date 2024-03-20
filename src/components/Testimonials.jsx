import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { ImQuotesLeft } from "react-icons/im";
import Card from "./Card";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { testimonials } from "../data";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const { name, quote, job, avatar } = testimonials[index];

  const prevTestimonialHandler = () => {
    index <= 0 ? setIndex(testimonials.length - 1) : setIndex(index - 1);
  };

  const nextTestimonialHandler = () => {
    index < testimonials.length - 1 ? setIndex(index + 1) : setIndex(0);
  };

  return (
    <section className="testimonials">
      <div className="container testimonials-container">
        <SectionHeader
          classname="testimonials-header"
          icon={<ImQuotesLeft />}
          title="Testimonials"
        />
        <Card className="testimonial">
          <div className="testimonial-avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial-quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial-title">{job}</small>
        </Card>
        <div className="testimonials-btn-container">
          <button
            className="testimonials-btn"
            onClick={() => {
              prevTestimonialHandler();
            }}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="testimonials-btn"
            onClick={() => {
              nextTestimonialHandler();
            }}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
