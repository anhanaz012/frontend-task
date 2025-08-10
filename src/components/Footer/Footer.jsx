import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const onNavClick = (route) => {
    navigate(route);
  };

  return (
    <footer className="bg-primary text-white py-10 pb-4 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo + Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Logo" className="object-contain h-8" />
            </div>
            <p className="font-normal leading-relaxed text-sm lg:text-base max-w-md">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective – your
              business results.
            </p>
          </div>

          {/* Technologies and Services - Better responsive layout */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              {/* Our Technologies */}
              <div>
                <h3 className="font-medium mb-4 text-lg lg:text-xl">
                  Our Technologies
                </h3>
                <ul className="space-y-2 text-sm lg:text-base">
                  {["ReactJS", "Gatsby", "NextJS", "NodeJS"].map((tech) => (
                    <li
                      key={tech}
                      className="text-gray-200 hover:text-white transition-colors"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Services */}
              <div>
                <h3 className="font-medium mb-4 text-lg lg:text-xl">
                  Our Services
                </h3>
                <ul className="space-y-2 text-sm lg:text-base">
                  {[
                    {
                      label: "Social Media Marketing",
                      route: "/services/social-media",
                    },
                    {
                      label: "Web & Mobile App Development",
                      route: "/services/web-mobile",
                    },
                    {
                      label: "Data & Analytics",
                      route: "/services/data-analytics",
                    },
                  ].map((service) => (
                    <li
                      key={service.label}
                      className="cursor-pointer hover:text-white text-gray-200 transition-colors duration-200 leading-relaxed"
                      onClick={() => onNavClick(service.route)}
                    >
                      {service.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + Footer Links */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-xs lg:text-sm">
            <span
              className="cursor-pointer hover:underline transition-all duration-200"
              onClick={() => onNavClick("/privacy")}
            >
              Privacy Policy
            </span>
            <span className="hidden sm:inline">|</span>
            <span
              className="cursor-pointer hover:underline transition-all duration-200"
              onClick={() => onNavClick("/terms")}
            >
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
