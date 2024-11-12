const SectionTitle = ({ text }) => {
  return (
    <div className="border-b p-5">
      <h2 className="text-xl md:text-3xl text-center font-bold tracking-wider capitalize">
        {text}
      </h2>
    </div>
  );
};
export default SectionTitle;
