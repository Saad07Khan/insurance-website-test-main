import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, LogIn, Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("individuals-families");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsDropdownOpen, setMobileProductsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutDropdownOpen, setMobileAboutDropdownOpen] = useState(false);

  const tabs = [
    { id: "individuals-families", label: "Individuals & Families" },
    { id: "businesses", label: "Businesses" },
    { id: "agents-brokers", label: "Agents & Advisors" },
    { id: "products", label: "Products" },
  ];

  const products = [
    { id: "vehicle-insurance", label: "Vehicle Insurance", path: "/vehicle-insurance" },
    { id: "health-insurance", label: "Health Insurance", path: "/health-insurance" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between py-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          
          <Link to="/" className="text-xl font-normal tracking-wider text-black" style={{
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
            letterSpacing: '-0.01em',
            lineHeight: '1.2'
          }}>
            MSI PROTECT
          </Link>
          
          <button className="p-2" aria-label="Login">
            <LogIn className="h-5 w-5" />
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 py-4" style={{ marginRight: '-20px' }}>
            <Link to="/" className="text-2xl tracking-wider text-black" style={{
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              letterSpacing: '-0.01em',
              lineHeight: '1.2'
            }}>
              Insurify
            </Link>
          </div>

          {/* Primary Tabs Navigation */}
          <div className="flex items-center gap-0" style={{ marginLeft: '-30px' }}>
            {tabs.map((tab) => (
              <div key={tab.id} className="relative group">
                <Link
                  to={tab.id === 'products' ? '/products' : '#'}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative px-4 py-2 text-base inline-block
                    ${activeTab === tab.id ? 'text-black' : 'text-black'}
                    hover:text-black transition-colors duration-300
                  `}
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', Times, serif",
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    lineHeight: '1.2',
                    padding: "0.5rem 1rem",
                  }}
                >
                  {tab.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6e27c5] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
          </div>

          {/* Right side utilities */}
          <div className="flex items-center gap-5" style={{ marginLeft: '-40px' }}>
            <div className="relative group">
              <button 
                className="flex items-center hover:text-black transition-colors"
                style={{
                  color: '#000000',
                  fontFamily: "Georgia, 'Times New Roman', Times, serif",
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  lineHeight: '1.2'
                }}
                onMouseEnter={() => {
                  setAboutDropdownOpen(true);
                  setProductsDropdownOpen(false);
                }}
                onMouseLeave={() => setAboutDropdownOpen(false)}
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              >
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {aboutDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  <a
                    href="/about#vision-goals"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', Times, serif",
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      lineHeight: '1.2'
                    }}
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Vision & Goals
                  </a>
                  <Link
                    to="/our-partners"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', Times, serif",
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      lineHeight: '1.2'
                    }}
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Our Partner Companies
                  </Link>
                  <Link
                    to="/our-team"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', Times, serif",
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      lineHeight: '1.2'
                    }}
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>
            
            <div className="relative group">
              <Link 
                to="/hot-leads" 
                className="hover:text-black transition-colors relative"
                style={{
                  color: '#000000',
                  fontFamily: "Georgia, 'Times New Roman', Times, serif",
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  lineHeight: '1.2'
                }}
              >
                Hot Leads
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6e27c5] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            
            <div className="relative group">
              <Link 
                to="/careers" 
                className="hover:text-black transition-colors relative"
                style={{
                  color: '#000000',
                  fontFamily: "Georgia, 'Times New Roman', Times, serif",
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  lineHeight: '1.2'
                }}
                onMouseEnter={() => setProductsDropdownOpen(false)}
              >
                Careers
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6e27c5] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <button 
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Search"
              onMouseEnter={() => setProductsDropdownOpen(false)}
            >
              <Search className="h-4 w-4" style={{ color: '#000000' }} />
            </button>
          </div>
          
          {/* Products Dropdown Styling */}
          <style>{`
            .group:hover .group-hover\:block {
              display: block;
            }
          `}</style>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    text-left px-4 py-3 rounded-md transition-colors
                    ${
                      activeTab === tab.id
                        ? "bg-purple-50 text-[#6e27c5] font-bold"
                        : "text-black hover:bg-gray-50"
                    }
                  `}
                  style={{
                    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                  }}
                >
                  {tab.label}
                </button>
              ))}
              <div className="border-t border-gray-200 mt-2 pt-3 flex flex-col gap-3">
                <div className="flex flex-col">
                  <button 
                    className="px-4 py-2 text-left text-black font-bold hover:bg-gray-50 rounded-md flex items-center justify-between"
                    onClick={() => setMobileAboutDropdownOpen(!mobileAboutDropdownOpen)}
                  >
                    About
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileAboutDropdownOpen ? 'transform rotate-180' : ''}`} />
                  </button>
                  {mobileAboutDropdownOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      <a 
                        href="/about#vision-goals" 
                        className="block px-4 py-2 text-black hover:bg-gray-50 rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Vision & Goals
                      </a>
                      <Link 
                        to="/our-partners" 
                        className="block px-4 py-2 text-black hover:bg-gray-50 rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Our Partner Companies
                      </Link>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col">
                  <button 
                    className="px-4 py-2 text-left text-black hover:bg-gray-50 rounded-md flex items-center justify-between"
                    onClick={() => setMobileProductsDropdownOpen(!mobileProductsDropdownOpen)}
                  >
                    Products
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsDropdownOpen ? 'transform rotate-180' : ''}`} />
                  </button>
                  {mobileProductsDropdownOpen && (
                    <div className="pl-6 py-1">
                      {products.map((product) => (
                        <Link
                          key={product.id}
                          to={product.path}
                          className="block px-4 py-2 text-black hover:bg-gray-50 rounded-md"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileProductsDropdownOpen(false);
                          }}
                        >
                          {product.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <Link 
                  to="/careers" 
                  className="px-4 py-2 text-black font-bold hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Careers
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;