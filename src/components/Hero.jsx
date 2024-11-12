import Img from "../images/hero.jpg";

const Hero = () => {
  return (
    <div className="bg-yellow-300">
      <div className="align-element grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider">
            Creative Professional Consult
          </h1>
          <p className="mt-4 text-2xl md:text-3xl capitalize tracking-wide">
            Ensuring bright futures for the women of Ethiopia
          </p>
        </div>
        <article className="hidden md:block">
          <img src={Img} alt="hero" className="md:pl-20 lg:pl-36 h-80 lg:-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
