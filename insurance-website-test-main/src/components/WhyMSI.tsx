import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import whyMsiImg from "@/assets/whyrearview.jpg";
import claimsImg from "@/assets/whyrepair.jpg";
import careersImg from "@/assets/whyhouse.jpg";
import kitchenImg from "@/assets/whykitchen.jpg"
import momImg from "@/assets/whyMom.jpg"
import hospitalImg from "@/assets/whyhospital.jpg"
// Import partner logos
import img1 from '@/assets/one.png';
import img2 from '@/assets/two.png';
import img3 from '@/assets/three.png';
import img4 from '@/assets/four.png';
import img5 from '@/assets/five.png';
import img6 from '@/assets/six.png';
import img7 from '@/assets/seven.png';
import img8 from '@/assets/eight.png';
import img9 from '@/assets/nine.png';
import img10 from '@/assets/ten.png';

interface StatItem {
  value: string | number;
  label: string;
}

interface Slide {
  id: number;
  eyebrow: string;
  heading: string;
  image: string;
  type: 'text' | 'stats';
  description: string;
  cta: {
    text: string;
    link: string;
  };
  stats?: StatItem[];
}

interface PartnerImage {
  src: string;
  alt: string;
}

const partnerImages: PartnerImage[] = [
  { src: img1, alt: 'Partner 1' },
  { src: img2, alt: 'Partner 2' },
  { src: img3, alt: 'Partner 3' },
  { src: img4, alt: 'Partner 4' },
  { src: img5, alt: 'Partner 5' },
  { src: img6, alt: 'Partner 6' },
  { src: img7, alt: 'Partner 7' },
  { src: img8, alt: 'Partner 8' },
  { src: img9, alt: 'Partner 9' },
  { src: img10, alt: 'Partner 10' },
];

const slides: Slide[] = [  
  {
    id: 1,
    eyebrow: "WHY Insurify",
    heading: "Preventive care that keeps you healthy.",
    image: hospitalImg,
    type: "text",
    description: "Routine checkups, vaccinations, and screenings catch small issues before they become big problems, helping you stay well today and avoid costly treatment later. Our plans make preventive care easy with online scheduling, automatic reminders, and coverage for routine tests so you get the right care at the right time, not after a problem becomes urgent.",
    cta: { text: "Learn More", link: "#preventive-care" }
  },
  {
    id: 2,
    eyebrow: "WHY Insurify",
    heading: "Maternity & newborn support.",
    image: momImg,
    type: "text",
    description: "Our maternity and newborn benefits ensure pregnant members receive proactive, coordinated care. That starts with early prenatal visits, recommended screenings, and personalized birth plans, continues through safe delivery. For newborns, we cover initial hospital care, pediatric checkups, immunizations, and enrollment assistance so babies start life with the right protections.",
    cta: { text: "Learn More", link: "#maternity" }
  },
  {
    id: 3,
    eyebrow: "WHY Insurify",
    heading: "Quality Home Coverage you can count on.",
    image: careersImg,
    type: "text",
    description: "Protect the place you call home with coverage that rebuilds structures, replaces personal belongings, and covers liability for accidents that happen on your property. Our policies include flexible limits, optional add-ons for high-value items, and a claims team that moves quickly to restore your life after loss.",
    cta: { text: "Learn More", link: "#home-coverage" }
  },
  {
    id: 4,
    eyebrow: "WHY Insurify",
    heading: "Wall-to-wall coverage for your home.",
    image: kitchenImg,
    type: "text",
    description: "Condo (HO-6) coverage focuses on what matters inside your unit—interior improvements, appliances, and personal property—while filling gaps left by the building's master policy. We offer loss assessment protection, liability coverage, and options for unit-enhancement replacement so you're covered for everyday risks.",
    cta: { text: "Learn More", link: "#condo-coverage" }
  },
  {
    id: 5,
    eyebrow: "WHY Insurify",
    heading: "Start your engine and stay protected",
    image: whyMsiImg,
    type: "text",
    description: "Get on-the-road confidence with liability, collision, and comprehensive protection tailored to your driving habits. Fast online quotes, convenient digital ID cards, and accident support mean you can handle incidents without paperwork headaches.",
    cta: { text: "Get a Quote", link: "#auto-insurance" }
  },
  {
    id: 6,
    eyebrow: "WHY Insurify",
    heading: "Leave behind unexpected vehicle repair costs",
    image: claimsImg,
    type: "text",
    description: "Comprehensive and collision coverages help pay for repairs after accidents, theft, or weather damage so you don't shoulder large, surprise bills. Add-ons like roadside assistance, glass repair, and rental-car reimbursement keep you moving while repairs are handled quickly through our streamlined claims process.",
    cta: { text: "File a Claim", link: "#file-claim" }
  }
];



const MultiSlideCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <section className="py-24 bg-background px-4" aria-label="Featured insurance services">
      <div className="container mx-auto relative">
        <div className="border-2 border-gray-200 p-10 rounded-lg">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side with Decorative Elements */}
            <div className="relative w-full h-[600px] group" aria-hidden="true">
              {/* Left Gradient - Thinner decorative element */}
              <div className="absolute -left-8 top-0 bottom-0 w-24 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-80 
                          transition-all duration-500 group-hover:opacity-90 group-hover:left-0 group-hover:w-20"
                   style={{
                     clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)',
                     transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                   }}
                   aria-hidden="true"
              />
              
              {/* Right Gradient - Thinner decorative element */}
              <div className="absolute -right-8 top-0 bottom-0 w-24 bg-gradient-to-l from-amber-300 via-orange-400 to-red-400 opacity-80 
                          transition-all duration-500 group-hover:opacity-90 group-hover:right-0 group-hover:w-20"
                   style={{
                     clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
                     transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                   }}
                   aria-hidden="true"
              />
              
              {/* Main Image with subtle overlay */}
              <div className="relative w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={slide.image}
                  alt={slide.heading}
                  className="w-full h-full object-cover object-center transition-all duration-500 transform group-hover:scale-105"
                />
              </div>
              
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />
            </div>

            {/* Content Side */}
            <div className="min-h-[600px] flex flex-col justify-center">
              <div className="text-center lg:text-left mb-2">
                <span className="text-sm font-bold uppercase tracking-wider relative pb-2 inline-block">
                  {slide.eyebrow}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
                </span>
              </div>
              <div className="max-w-[400px]">
                <h2 className="text-4xl font-serif leading-tight">
                  {slide.heading}
                </h2>
                {slide.type === "text" && (
                  <div className="mt-4">
                    <p className="text-lg text-foreground leading-relaxed">
                      {slide.description}
                    </p>
                    {slide.cta && (
                      <div className="mt-6 text-center lg:text-left">
                        <a 
                          href={slide.cta.link}
                          className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity group"
                        >
                          <span>{slide.cta.text}</span>
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Stats Grid */}
              {slide.type === "stats" && (
                <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
                  {slide.stats.map((stat, index) => (
                    <div key={index} className="border-b border-gray-300 pb-6 max-w-[200px]">
                      <div className="text-4xl font-serif italic text-primary mb-3">
                        {stat.value}
                      </div>
                      <div className="text-sm text-foreground break-words whitespace-normal">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-primary w-8' 
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === currentSlide}
                />
              ))}
            </div>

            {/* Next Button */}
            <button 
              onClick={nextSlide}
              className="bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Next slide"
              aria-controls="carousel-content"
              aria-keyshortcuts="ArrowRight"
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
              <span className="sr-only">Next slide</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechnologyPartners: React.FC = () => {
  return (
    <section className="technology-partners mt-2 mb-20">
       <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-2">Our Partners</h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
      </div>
      
      <Marquee direction="right" speed={100} delay={5} gradient={false}>
        {partnerImages.map((img, idx) => (
          <div key={idx} className="partner-logo mx-8">
            <img src={img.src} alt={img.alt} loading="lazy" className="h-12 w-auto object-contain" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

// Combined component that exports both
const TechnologyPartnersWithCarousel: React.FC = () => {
  return (
    <>
    <MultiSlideCarousel />
      <TechnologyPartners />
      
    </>
  );
};

export default TechnologyPartnersWithCarousel;
export { TechnologyPartners, MultiSlideCarousel };