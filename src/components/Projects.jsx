import { ProjectCard } from "./ProjectCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="Our Projects" />
      <div className="py-16 grid lg:grid-cols-2  xl:grid-cols-4 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
