import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 font-medium underline"
      : "text-gray-600 hover:underline";

  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100 flex flex-col items-center">
      <header className="w-full bg-white shadow-xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/" className={isActive("/")}>
            <img src="/chatbot.jpg" width={60} alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Navigation Links for Larger Screens */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className={isActive("/")}>
            Trang chủ
          </Link>
          <Link to="/chat" className={isActive("/chat")}>
            Trò chuyện
          </Link>
          <Link to="/faq" className={isActive("/faq")}>
            FAQ
          </Link>
          <Link to="/feedback" className={isActive("/feedback")}>
            Báo lỗi/Góp ý
          </Link>
        </nav>
      </header>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg w-full py-2 flex flex-col items-center space-y-2">
          <Link
            to="/"
            className={isActive("/")}
            onClick={() => setIsMenuOpen(false)}
          >
            Trang chủ
          </Link>
          <Link
            to="/chat"
            className={isActive("/chat")}
            onClick={() => setIsMenuOpen(false)}
          >
            Trò chuyện
          </Link>
          <Link
            to="/faq"
            className={isActive("/faq")}
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            to="/feedback"
            className={isActive("/feedback")}
            onClick={() => setIsMenuOpen(false)}
          >
            Báo lỗi/Góp ý
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
