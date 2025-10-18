import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Phone, MapPin, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/bg1.jpg";
import heroBg3 from "@/assets/bg2.jpg";
import heroBg4 from "@/assets/bg4.jpg";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("Health");
  const tabs = ["Health", "Travel", "Accident", "Port"];

  return (
    <section className="relative h-[700px] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg4})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="max-w-xl">
            <h1 className="text-6xl text-white mb-12 ml-6" style={{
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontWeight: 400,
              letterSpacing: '-0.01em',
              lineHeight: '1.2'
            }}>
             Protect your vehicle, your health and your future. 
            </h1>
          </div>

         {/* Right Side - Transparent Form Card */}
          <div className="relative w-full max-w-md ml-auto">
            <div className="relative bg-white/100 backdrop-blur-sm p-6 shadow-2xl rounded-2xl">

              {/* Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div className="min-w-0">
                    <label className="block text-xs text-gray-600 mb-2">Select a product</label>
                    <div className="relative">
                      <select className="w-full px-0 pr-6 h-10 bg-transparent border-0 border-b-2 border-gray-900 text-gray-900 text-xl font-normal appearance-none focus:outline-none focus:border-purple-900 transition-all truncate">
                        <option>Health</option>
                        <option>Motor</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <label className="block text-xs text-gray-600 mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      className="w-full px-0 h-10 bg-transparent border-0 border-b-2 border-gray-900 text-gray-900 placeholder:text-gray-400 text-lg focus:outline-none focus:border-purple-900 transition-all"
                      pattern="[0-9]{10,15}"
                      title="Please enter a valid mobile number (10-15 digits)"
                    />
                  </div>
                </div>

                <button className="w-full h-14 bg-red-400 hover:bg-red-500 text-blue-900 font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-full mt-6">
                  get a quote
                </button>

                <button className="w-full text-base text-blue-600 hover:text-blue-700 font-semibold underline transition-colors">
                  continue a quote
                </button>

                <p className="text-[10px] text-gray-500 text-center leading-tight pt-1">
                  By providing details, I consent to receive assistance from Insurify through any valid channel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;