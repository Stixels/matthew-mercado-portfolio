import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const footerNav = [
  { name: "Work", href: "/#work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-background pb-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Matthew Mercado
            </p>
            <nav className="flex items-center gap-5">
              {footerNav.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/matthew-mercado-velez/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://www.github.com/Stixels"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.twitter.com/Stixels_"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
