const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold capitalize text-yellow-950">{title}</h4>
      <p className="mt-2 text-yellow-950">{text}</p>
    </article>
  );
};
export default SkillsCard;
