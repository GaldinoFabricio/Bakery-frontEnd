import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pt-BR" : "en";
    i18n.changeLanguage(newLang);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.products"), path: "/products" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.blog"), path: "/blog" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-95 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-serif font-bold tracking-tight text-amber-900"
          >
            Artisan Bakery
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-700 ${
                  location.pathname === link.path
                    ? "text-amber-700 font-semibold"
                    : isScrolled
                    ? "text-gray-800"
                    : "text-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              } hover:text-amber-600`}
              aria-label="Toggle language"
            >
              {i18n.language === "en" ? "PT-BR" : "EN"}
            </button>
            <Link to="/cart" className="relative">
              <ShoppingBag
                className={`w-5 h-5 transition-colors ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-amber-600`}
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-amber-600 text-white text-xs rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <span
              onClick={toggleLanguage}
              className={`w-5 h-5 transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              } hover:text-amber-600`}
              aria-label="Toggle language"
            >
              {i18n.language === "en" ? "PT-BR" : "EN"}
            </span>
            <Link to="/cart" className="relative">
              <ShoppingBag
                className={`w-5 h-5 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-amber-600 text-white text-xs rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-1 rounded-md ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-6 mt-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium hover:text-amber-700 ${
                    location.pathname === link.path
                      ? "text-amber-700 font-semibold"
                      : "text-gray-800"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
