import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

export function Footer({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2" dir="rtl">
      <div className="flex w-full flex-wrap items-center justify-center gap-6  md:justify-between">
        <Typography variant="small" className="font-normal text-inherit shabnam" dir="rtl">
           ساخته شده{" "}
          <HeartIcon className="-mt-0.5 inline-block h-3.5 w-3.5 text-red-600" /> توسط{" "}
          <a
            href={brandLink}
            target="_blank"
            className="transition-colors hover:text-blue-500 font-bold"
          >
            {brandName}
          </a>{" "}
          
          .
          
        </Typography>
        <span>&copy; {year}</span>
        <ul className="flex items-center gap-4">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <Typography
                as="a"
                href={path}
                target="_blank"
                variant="small"
                className="py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500 shabnams"
              >
                {name}
              </Typography>
            </li>
            
          ))}
        </ul>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  brandName: "Saleh Moradi",
  brandLink: "https://www.creative-tim.com",
  routes: [
    { name: "Cephcore", path: "https://www.creative-tim.com" },
    { name: "درباره ما", path: "https://www.creative-tim.com/presentation" },
    { name: "بلاگ", path: "https://www.creative-tim.com/blog" },
  ],
};

Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
