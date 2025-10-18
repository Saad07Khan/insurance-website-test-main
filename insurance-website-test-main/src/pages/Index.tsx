import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import InsuranceCategories from "@/components/InsuranceCategories";
import WhyMSI from "@/components/WhyMSI";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProp />
      <InsuranceCategories />
      <WhyMSI />
      <QuoteSection />
      <Footer />
    </div>
  );
};

export default Index;
