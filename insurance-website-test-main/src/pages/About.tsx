import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";
import historyDoc from "@/assets/history-document.jpg";
import corporateBuilding from "@/assets/corporate-building.jpg";
import coralReef from "@/assets/coral-reef.jpg";
import executivePortrait from "@/assets/employee.jpg";
import architectureDetail from "@/assets/architecture-detail.jpg";
import employeePortrait from "@/assets/ceo.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center"
        style={{
          backgroundImage: `url(${aboutHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white max-w-4xl leading-tight">
            Protecting the present  <br /> and <span className="italic"> building a better <br /> future</span>
          </h1>
        </div>
      </section>

      {/* Mission Statement */}
      {/* <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-2xl md:text-3xl lg:text-4xl text-center font-serif leading-relaxed max-w-5xl mx-auto">
            At Insurify, <span className="text-primary italic">we simplify protection</span>, help customers stay safe, and empower partners with tools to grow.
          </p>
        </div>
      </section> */}
      {/* Value Prop Overlap */}
      <section className="relative -mt-20 z-10 mb-2">
        <div className="container mx-auto px-12">
          <div className="bg-white py-12 px-16 max-w-5xl mx-auto">
            <p className="text-3xl font-serif leading-relaxed text-center">
               At Insurify,<span className="italic text-primary"> we simplify protection</span> help customers stay safe, and empower partners with tools to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-8 ml-6">
            <h2 className="text-base font-bold tracking-wider mb-2">INTRODUCTION</h2>
            <div className="w-32 h-1 bg-primary" />
          </div>
          <p className="text-base md:text-lg leading-relaxed text-foreground text-left w-full ml-6">
            Insurify is a modern insurance services company focused on making essential protection accessible and easy to buy. We specialise in Vehicle Insurance and Health Insurance, and offer digital-first tools for agents, partners and customers. Our platform includes lead capture forms, agent onboarding, employee portals for attendance and records, and integrations with social channels to keep communities connected. We operate locally while maintaining enterprise-grade reliability and a people-first approach.
          </p>
        </div>
      </section>

      {/* About Us Grid */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-2">ABOUT US</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Our History Card */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <img 
                  src={historyDoc} 
                  alt="Insurify founding document" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="border-b-4 border-primary pb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-serif">Our story</h3>
                  <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="mt-4 text-sm text-foreground/80">
                  From a small broker team to a digital-first insurer, Insurify has grown by putting customers and agents first.
                </p>
              </div>
            </div>

            {/* Partner Companies / Products Card */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <img 
                  src={corporateBuilding} 
                  alt="Insurify partners and products" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="border-b-4 border-primary pb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-serif">Products & partners</h3>
                  <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="mt-4 text-sm text-foreground/80">
                  Vehicle Insurance • Health Insurance — plus a network of partner firms and agent channels to reach customers faster.
                </p>
              </div>
            </div>

            {/* Become an Agent / Hot Leads Card */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <img 
                  src={corporateBuilding} 
                  alt="Join Insurify as an agent" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="border-b-4 border-primary pb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-serif">Join our network</h3>
                  <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="mt-4 text-sm text-foreground/80">
                  Agent onboarding, lead capture (vehicle reg. & mobile), and advisory opportunities — grow your business with Insurify.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section 
        className="relative py-20"
        style={{
          backgroundImage: `url(${coralReef})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-cyan-900/40" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="bg-white py-12 px-8 md:px-16 max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
              Community & Partnerships
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Insurify partners with local organisations and social platforms to promote road safety, workplace wellbeing and access to healthcare — aligning community impact with everyday protection.
            </p>
            <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base">
              Learn about our programs
            </Button>
          </div>
        </div>
      </section>

      {/* Message from CEO (formerly Letter to Shareholders) */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="bg-primary p-12 flex items-center justify-center">
              <img 
                src={executivePortrait} 
                alt="Insurify CEO portrait" 
                className="w-full max-w-md"
              />
            </div>
            <div>
              <div className="mb-6">
                <h3 className="text-sm font-bold tracking-wider mb-2">CEO'S MESSAGE</h3>
                <div className="w-20 h-1 bg-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Our vision: safer journeys, healthier lives
              </h2>
              <p className="text-base leading-relaxed mb-8">
                Our CEO reviews Insurify’s progress, strategic priorities and the steps we're taking to expand product access, support agents, and strengthen the technology that keeps customers protected. We remain focused on measurable impact — simplified claims, faster quotes, and strong local partnerships.
              </p>
              <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4">
                Read the full message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Governance & Operations */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="order-2 md:order-1">
              <div className="mb-6">
                <h3 className="text-sm font-bold tracking-wider mb-2">GOVERNANCE & OPERATIONS</h3>
                <div className="w-20 h-1 bg-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Clear oversight, trusted processes
              </h2>
              <p className="text-base leading-relaxed mb-8">
                We maintain straightforward governance and robust operational controls so customers and partners can rely on our decisions. Policies and practices are designed to protect customer interests while enabling sustainable growth.
              </p>
              <Button className="bg-foreground text-background hover:bg-foreground/90 w-full md:w-auto px-8 py-4">
                Governance & policies
              </Button>
            </div>
            <div className="order-1 md:order-2 bg-[hsl(230,90%,20%)] p-12 flex items-center justify-center">
              <img 
                src={architectureDetail} 
                alt="Insurify operations and platform architecture" 
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our People & Careers */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="bg-[hsl(230,90%,20%)] p-12 flex items-center justify-center">
              <img 
                src={employeePortrait} 
                alt="Insurify team member" 
                className="w-full max-w-md"
              />
            </div>
            <div>
              <div className="mb-6">
                <h3 className="text-sm font-bold tracking-wider mb-2">OUR TEAM</h3>
                <div className="w-20 h-1 bg-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                People-first, performance-ready
              </h2>
              <p className="text-base leading-relaxed mb-8">
                Insurify invests in careers, continuous learning and inclusive workplaces. We provide internal tools for employees — from attendance and records portals to target & notice boards — so teams can do their best work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4">
                  Employee login
                </Button>
                 <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4">    
                  Careers at Insurify
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
         {/* CTA Section */}
              <section className="relative py-24 text-white overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url("/src/assets/cta.jpg")' }}
                >
                  <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                </div>
                <div className="container mx-auto px-12 relative z-10">
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-5xl font-serif mb-6">
                      Ready to get started?
                    </h2>
                    <p className="text-xl mb-10 opacity-90 leading-relaxed">
                      Get a personalized quote in minutes. Our team is ready to help you find 
                      the perfect coverage for your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        asChild
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg"
                      >
                        <Link to="/quote">Get a Quote</Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg"
                      >
                        <Link to="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

      <Footer />
    </div>
  );
};

export default About;
