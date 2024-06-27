import SectionTitle from "./SectionTitle";
import Img2 from "../images/Feven.jpeg";

const About = () => {
  return (
    <section className="bg-yellow-100 py-20" id="about">
      <div className="align-element grid md:grid-col-2 items-center gap-16">
        <article>
          <SectionTitle text="Meet our CEO" />
          <img
            src={Img2}
            className="w-64 h-64 py-20 w-full object-center rounded-t-lg "
          />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
            aliquam soluta? Veritatis at perferendis enim cumque, vero eligendi
            doloribus dignissimos architecto, voluptatem dolores sapiente
            obcaecati et non laboriosam temporibus laudantium!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
