import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-yellow-300">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:item-center sm:py-8">
        <h2 className="text-3xl font-bold">CPC</h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-normal hover:text-yellow-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
