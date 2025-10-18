import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import quoteBg from "@/assets/quote-bg.jpg";

const QuoteSection = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${quoteBg})` }}
    >
      <div className="absolute inset-0 bg-white/95" />
      
      <div className="container mx-auto px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-6">
           Get a quote that fits your unique health & vehicle needs
          </h2>
          <p className="text-base text-foreground mb-10 leading-relaxed">
            Protect your family, your health, or your vehicles with coverage designed around you. Insurify offers personalized plans, proactive guidance, and quick claims support for individuals and businesses alike.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-foreground hover:bg-foreground hover:text-background"
            >
              <Link to="/quote/individuals">Individuals & Families</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-foreground hover:bg-foreground hover:text-background"
            >
              <Link to="/quote/businesses">Businesses</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
