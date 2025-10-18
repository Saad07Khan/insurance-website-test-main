import { Link } from "react-router-dom";
import { ArrowRight, Download, Check, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

import vehicleImg from "@/assets/vehicle.jpg";
import healthImg from "@/assets/health.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const products = [
  {
    title: "Vehicle Insurance",
    description: "Comprehensive protection for your vehicle, covering accidents, theft, and liability. Drive with confidence knowing you're protected.",
    features: ["Collision Coverage", "Liability Protection", "Roadside Assistance", "Rental Car Coverage"],
    link: "/vehicle-insurance",
  },
  {
    title: "Health Insurance",
    description: "Complete health coverage for you and your family. Access quality healthcare with plans tailored to your needs.",
    features: ["Medical Expenses", "Hospitalization", "Prescription Drugs", "Preventive Care"],
    link: "/health-insurance",
  },
];

const comparisonData = [
  { feature: "24/7 Customer Support", vehicle: true, health: true },
  { feature: "Online Claims Processing", vehicle: true, health: true },
  { feature: "Flexible Payment Plans", vehicle: true, health: true },
  { feature: "Accident Forgiveness", vehicle: true, health: false },
  { feature: "Roadside Assistance", vehicle: true, health: false },
  { feature: "Telemedicine Services", vehicle: false, health: true },
  { feature: "Prescription Coverage", vehicle: false, health: true },
  { feature: "Preventive Care", vehicle: false, health: true },
];

const faqs = [
  {
    question: "What types of coverage do you offer?",
    answer: "We offer comprehensive vehicle insurance and health insurance products. Our vehicle insurance includes collision, liability, and comprehensive coverage. Our health insurance plans cover medical expenses, hospitalization, prescription drugs, and preventive care.",
  },
  {
    question: "How do I file a claim?",
    answer: "Filing a claim is simple. You can file online through our customer portal, call our 24/7 claims hotline, or contact your dedicated agent. Our claims team will guide you through the process and work to resolve your claim quickly and fairly.",
  },
  {
    question: "Can I customize my coverage?",
    answer: "Yes, absolutely. We understand that every customer has unique needs. Our policies are flexible and can be customized with various coverage options, deductibles, and add-ons to create the perfect protection plan for you.",
  },
  {
    question: "What is the claims processing time?",
    answer: "We pride ourselves on fast claims processing. Simple claims are often processed within 24-48 hours. More complex claims may take longer, but we keep you informed every step of the way and work diligently to resolve all claims as quickly as possible.",
  },
  {
    question: "Do you offer multi-policy discounts?",
    answer: "Yes, we offer attractive discounts when you bundle multiple policies with us. Combining your vehicle and health insurance can result in significant savings while simplifying your insurance management.",
  },
];

const documents = [
  { title: "Vehicle Insurance Policy Document", type: "PDF", size: "2.4 MB" },
  { title: "Health Insurance Policy Document", type: "PDF", size: "3.1 MB" },
  { title: "Product Comparison Brochure", type: "PDF", size: "1.8 MB" },
  { title: "Claims Process Guide", type: "PDF", size: "1.2 MB" },
];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
        <section className="relative bg-cover bg-center text-white py-32 overflow-hidden" style={{ backgroundImage: 'url("/src/assets/insurance.jpg")' }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium tracking-wide">
              COMPREHENSIVE COVERAGE
            </div>
            <h1 className="text-7xl font-serif mb-6 leading-tight">
              Products<br />
              <span className="text-white/80">Overview</span>
            </h1>
            <p className="text-xl leading-relaxed opacity-90 max-w-2xl">
              Discover comprehensive insurance solutions designed to protect what matters most. 
              From your vehicle to your health, we've got you covered with{" "}
              <span className="font-semibold text-white border-b-2 border-white/40">exceptional products and service</span>.
            </p>
          </div>
        </div>
        
      </section>

      {/* Value Prop Overlap */}
      <section className="relative -mt-20 z-10 mb-20">
        <div className="container mx-auto px-12">
          <div className="bg-white py-12 px-16 max-w-5xl mx-auto">
            <p className="text-3xl font-serif leading-relaxed text-center">
              Our insurance products combine <span className="italic text-primary">comprehensive coverage</span> with 
              personalized service, ensuring you receive the protection and peace of mind you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Product Tiles */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold uppercase tracking-wider mb-4 pb-3 border-b-4 border-primary inline-block">
              OUR PRODUCTS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Link
                key={product.title}
                to={product.link}
                className="group bg-muted p-10 hover:bg-muted/80 transition-all"
              >
                <h3 className="text-3xl font-serif mb-4 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif mb-12 text-center">
              Product Comparison
            </h2>

            <div className="bg-white overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left py-6 px-8 font-serif text-xl">Feature</th>
                    <th className="text-center py-6 px-8 font-serif text-xl">Vehicle Insurance</th>
                    <th className="text-center py-6 px-8 font-serif text-xl">Health Insurance</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="py-5 px-8 font-medium">{row.feature}</td>
                      <td className="py-5 px-8 text-center">
                        {row.vehicle ? (
                          <Check className="w-6 h-6 text-primary mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-muted-foreground mx-auto" />
                        )}
                      </td>
                      <td className="py-5 px-8 text-center">
                        {row.health ? (
                          <Check className="w-6 h-6 text-primary mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-muted-foreground mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

    

      {/* Download Documents */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif mb-4 text-center">
              Policy Documents & Brochures
            </h2>
            <p className="text-center text-foreground/70 mb-12">
              Download detailed information about our products and policies
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {documents.map((doc) => (
                <div
                  key={doc.title}
                  className="bg-white p-6 flex items-center justify-between hover:bg-muted/50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                      <Download className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {doc.type} • {doc.size}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

                {/* FAQs */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border bg-white px-6">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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

export default Products;
