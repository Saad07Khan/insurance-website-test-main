import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

const footerLinks = {
  individualsAndFamilies: [
    { title: "Login to Portal", href: "/portal/individuals" },
    { title: "QuickPay", href: "/quickpay" },
    { title: "Find an Agent", href: "/find-agent" },
  ],
  businesses: [
    { title: "Login to Portal", href: "/portal/businesses" },
    { title: "QuickPay", href: "/quickpay" },
    { title: "Get a Quote", href: "/quote/businesses" },
  ],
  agentsAndBrokers: [
    { title: "MSI Protect Agent Portal", href: "/AgentPortal" },
    { title: "Worldview", href: "/worldview" },
  ],
  embeddedInsurance: [
    { title: "Case Studies", href: "/case-studies" },
    { title: "Explore MSI Protect Studio", href: "/studio" },
  ],
  company: [
    { title: "Careers", href: "/careers" },
    { title: "North America News", href: "/news" },
    { title: "Corporate News", href: "/corporate-news" },
  ],
};

const quickLinks = [
  { title: "Report a Claim", href: "/report-claim" },
  { title: "Contact Us", href: "/contact" },
  { title: "Global Offices", href: "/global-offices" },
];

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-16">
      <div className="container mx-auto px-12">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and Quick Links */}
          <div>
            <Link to="/" className="text-xl font-bold mb-8 block tracking-wider">
              INSURIFY
            </Link>
            <div className="space-y-3">
              <h4 className="font-semibold mb-4">Quick links</h4>
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Individuals & Families */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm">Individuals & Families</h4>
            <div className="space-y-3">
              {footerLinks.individualsAndFamilies.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Businesses */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm">Businesses</h4>
            <div className="space-y-3">
              {footerLinks.businesses.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Agents & Brokers / Embedded Insurance */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm">Agents & Brokers</h4>
            <div className="space-y-3">
              {footerLinks.agentsAndBrokers.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <h4 className="font-semibold mb-4 mt-8 uppercase text-sm">Embedded Insurance</h4>
            <div className="space-y-3">
              {footerLinks.embeddedInsurance.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Company & Social */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm">Company</h4>
            <div className="space-y-3 mb-8">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Country Selector */}
            <div className="mb-6">
              <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                🌐 India
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="/licensing" className="hover:text-white transition-colors">Licensing Information</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/ca-privacy" className="hover:text-white transition-colors">CA Privacy Policy</Link>
            <Link to="/do-not-call" className="hover:text-white transition-colors">Do Not Call Policy</Link>
            <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility Statement</Link>
            <Link to="/cookie-preferences" className="hover:text-white transition-colors">Cookie Preferences</Link>
          </div>
          <p className="text-xs text-gray-500">© 2025 Insurify</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
