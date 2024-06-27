import Img from "../images/hero.jpg";

const Hero = () => {
  return (
    <div className="bg-yellow-300">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            Grabbing Headline!
          </h1>
          <p className="mt-4 text-3xl text-yellow-900 capitalize tracking-wide">
            Second heading why you should care about women in ethiopia
          </p>
        </article>
        <article className="hidden md:block">
          <img src={Img} alt="hero" className="h-80 lg:-96 py-0" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
