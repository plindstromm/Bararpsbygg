import { useEffect, useState } from "react";
import "./styles.scss";
import instaG from "/assets/instagram.png";
import headLogo from "/assets/logga.jpg";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault(); // Prevents default jump behavior
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      {isMobileMenuOpen && (
        <div className="header__overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      <div className="header__controls">
        <div className="header__logo" onClick={scrollToTop}>
          <img src={headLogo} alt="Bårarps bygg logo" className="header__logo-image" />
        </div>

        {windowWidth <= 800 ? (
          <div className="header__hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className={`hamburger-icon ${isMobileMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
          <nav className="header__nav">
            <a href="#info-section" onClick={(e) => scrollToSection(e, "info-section")} className="header__nav-link">
              OM OSS
            </a>
            <a href="#card-section" onClick={(e) => scrollToSection(e, "card-section")} className="header__nav-link">
              MILJÖER
            </a>
            <a href="#banner-section" onClick={(e) => scrollToSection(e, "banner-section")} className="header__nav-link">
              KONTAKTA OSS
            </a>
            <a href="https://www.instagram.com/bararpsbygg/" target="_blank" rel="noopener noreferrer" className="header__nav-link">
              <img src={instaG} alt="Instagram" className="header__nav-icon" />
            </a>
          </nav>
        )}

        {isMobileMenuOpen && (
          <div className="header__mobile-nav">
            <div className="header__close" onClick={() => setIsMobileMenuOpen(false)}>
              &times;
            </div>
            <a href="#info-section" onClick={(e) => { scrollToSection(e, "info-section"); setIsMobileMenuOpen(false); }} className="header__mobile-nav-link">
              OM OSS
            </a>
            <a href="#card-section" onClick={(e) => { scrollToSection(e, "card-section"); setIsMobileMenuOpen(false); }} className="header__mobile-nav-link">
              MILJÖER
            </a>
            <a href="#banner-section" onClick={(e) => { scrollToSection(e, "banner-section"); setIsMobileMenuOpen(false); }} className="header__mobile-nav-link">
              KONTAKTA OSS
            </a>
            <a href="https://www.instagram.com/bararpsbygg/" target="_blank" rel="noopener noreferrer" className="header__mobile-nav-link">
              <img src={instaG} alt="Instagram" className="header__nav-icon" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
