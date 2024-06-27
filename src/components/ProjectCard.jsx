export const ProjectCard = ({ title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <div className="captalize p-8">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  );
};
