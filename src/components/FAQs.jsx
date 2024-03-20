import SectionHeader from "./SectionHeader";
import FAQ from "./FAQ";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../data";

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs-container">
        <SectionHeader icon={<FaQuestion />} title="FAQs" />
        <div className="faqs-wrapper">
          {faqs.map(({ id, question, answer }) => {
            return <FAQ key={id} question={question} answer={answer} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
