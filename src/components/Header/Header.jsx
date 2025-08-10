import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { navLinks } from "../../data";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onNavLinkClick = (route) => {
    navigate(route);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="w-full px-20 xs:max-lg:px-4 sm:max-md:px-4 py-4 bg-primary text-white flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="object-contain h-10 xs:max-sm:h-8 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Menu */}
        <section className="hidden md:flex gap-4 text-sm">
          {navLinks.map((link) => (
            <nav
              key={link.route}
              className="mx-4 cursor-pointer hover:font-bold"
              onClick={() => onNavLinkClick(link.route)}
            >
              {link.label}
            </nav>
          ))}
        </section>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={36} />
        </div>
      </header>

      {/* Mobile Side Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col p-6">
          {/* Close Button */}
          <div className="flex justify-between items-center relative">
            <img src={logo} alt="Logo" className="object-contain h-10" />
            <X
              size={36}
              className="cursor-pointer absolute right-4"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-10 text-black">
            <span
              className="text-md font-medium cursor-pointer hover:text-primary"
              onClick={() => {
                navigate("/");
              }}
            >
              HOME
            </span>
            {navLinks.map((link) => (
              <span
                key={link.route}
                className="text-md font-medium cursor-pointer hover:text-primary"
                onClick={() => onNavLinkClick(link.route)}
              >
                {link.label}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
