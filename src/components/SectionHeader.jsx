const SectionHeader = ({ icon, title, classname }) => {
  return (
    <div className={`section-head ${classname}`}>
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeader;
