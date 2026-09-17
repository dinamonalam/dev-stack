import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="border-t border-slate-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              
              <a href="#home" className="flex items-center">
                 <img src={logo} alt="Dev Stack" className="h-8" />
             </a>
            </div>
            <p className="text-sm text-slate-500 mt-4 leading-relaxed">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="flex items-center gap-4 mt-4 text-slate-500">
              <a href="#" aria-label="GitHub" className="hover:text-slate-900">
                <FiGithub size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-slate-900">
                <FiTwitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-slate-900">
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Product
            </h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-500">
              <li><a href="#home" className="hover:text-pink-600">Home</a></li>
              <li><a href="#technologies" className="hover:text-pink-600">Technologies</a></li>
              <li><a href="#projects" className="hover:text-pink-600">Projects</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-500">
              <li><a href="#about" className="hover:text-pink-600">About</a></li>
              <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
              <li><a href="#" className="hover:text-pink-600">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Legal
            </h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 mt-10 pt-6 text-sm text-slate-500">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-pink-600">Privacy</a>
            <a href="#" className="hover:text-pink-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;