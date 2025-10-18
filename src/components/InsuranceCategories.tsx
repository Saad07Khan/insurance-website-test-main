import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Image imports
import coralReef from "@/assets/coral-reef.jpg";
import embeddedImg from "@/assets/client.jpg";
import historyDoc from "@/assets/history-document.jpg";
import corporateBuilding from "@/assets/corporate-building.jpg";
import vehicle from "@/assets/vehiclepic.jpg"
import house from "@/assets/house.jpg"
import healthpic from "@/assets/healthpic.jpg"


const InsuranceCategories = () => {
  return (
    <section className="bg-background">
      <div className=" pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Us Grid Section */}
          <div className="py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-2">Our Products</h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Our History Card */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden mb-6">
                  <img 
                    src={vehicle} 
                    alt="Insurify founding document" 
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="border-b-4 border-primary pb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-serif">Vehicle Insurance</h3>
                    <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-foreground/80">
                    From a small broker team to a leading digital-first insurer, Insurify has transformed vehicle insurance
                  </p>
                </div>
              </div>

              {/* Partner Companies / Products Card */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden mb-6">
                  <img 
                    src={healthpic} 
                    alt="Insurify partners and products" 
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="border-b-4 border-primary pb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-serif">Health Insurance</h3>
                    <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-foreground/80">
                    Access comprehensive health coverage through Insurify’s trusted network of partner firms and agents. 
                  </p>
                </div>
              </div>

              {/* Become an Agent / Hot Leads Card */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden mb-6">
                  <img 
                    src={house} 
                    alt="Join Insurify as an agent" 
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="border-b-4 border-primary pb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-serif">House Insurance</h3>
                    <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-foreground/80">
                    Safeguard your home and valuables with Insurify’s customizable house insurance plans. Enjoy affordable premiums.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Insurance Section */}
          <div className="grid md:grid-cols-2 gap-0 mb-12 border-t border-x border-gray-200 border-b-2 border-b-primary">
            <div className="bg-muted p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif mb-4">
                Embedded insurance - build potential revenue and customer satisfaction
              </h3>
              <p className="text-foreground mb-6 leading-relaxed">
                Integrate tailored health and vehicle coverage directly into your buying journeys, from vehicle purchases and registrations to healthcare bookings.
              </p>
              <Link
                to="/embedded-insurance"
                className="inline-flex items-center font-semibold hover:underline text-sm"
              >
                Learn More <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="relative overflow-hidden h-96">
              <img
                src={embeddedImg}
                alt="Embedded Insurance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-gray-900/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white">
                  <img
                    src={embeddedImg}
                    alt="Couple"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Impact Section */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: `url(${coralReef})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-label="Community Impact Section"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-cyan-900/40" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white py-10 px-6 md:py-12 md:px-16 max-w-5xl mx-auto text-center rounded-lg shadow-sm">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
               Insurance Policy made easy
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Start with entering your basic details, comparing and choosing a plan, completing the payment and receiving the policy in your Inbox, Simple as that!
            </p>
            <Button
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base transition-colors"
              aria-label="Learn about our community programs"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default InsuranceCategories;