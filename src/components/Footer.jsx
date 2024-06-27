const Footer = () => {
  return (
    <section className="ext-5-xl tracking-wide text-black-50 text-center  bg-yellow-200">
      <h5>
        <span className="font-bold">The Legal bits | </span> &copy;{" "}
        {new Date().getFullYear()}
        <span> | created by jennimmartin</span>
      </h5>
      <div className="border-b border-yellow-400 pb-3 "></div>
    </section>
  );
};
export default Footer;
