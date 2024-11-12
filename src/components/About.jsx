import SectionTitle from "./SectionTitle";
import Img2 from "../images/Feven.jpeg";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-20" id="about">
      <div className="align-element items-center">
        <SectionTitle text="Meet our CEO" />
        <section className="pt-5 md:pt-10 flex grid md:grid-cols-2 gap-8">
          <img
            src={Img2}
            className="h-50 rounded-full border-2 border-yellow-200 shadow-yellow-300 shadow-md"
          />
          <p className="text-slate-600 mt-8 pt-5 md:pt-10 leading-loose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
            aliquam soluta? Veritatis at perferendis enim cumque, vero eligendi
            doloribus dignissimos architecto, voluptatem dolores sapiente
            obcaecati et non laboriosam temporibus laudantium!
            <a href="https://www.linkedin.com/in/feven-haddis-4ab3283b/">
              <FaLinkedin className=" h-8 w-8 text-blue-600 hover:text-blue-300 duration-300" />
            </a>
          </p>
        </section>
      </div>
    </section>
  );
};
export default About;
