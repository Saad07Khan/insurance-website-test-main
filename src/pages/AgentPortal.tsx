import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import agentPortalBg from "@/assets/agent-portal-bg.jpg";
import agentsWorking from "@/assets/agents-working.jpg";

const AgentPortal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { userId, rememberMe });
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${agentPortalBg})` }}
      />
      
      {/* Orange Top Stripe */}
      <div className="relative z-10 h-2 bg-[#E87722]" />
      
      {/* Header */}
      <header className="relative z-10 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-wider hover:opacity-80 transition-opacity">
            Insurify®
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-sm hover:underline">Need help?</Link>
            <span className="text-sm text-muted-foreground">|</span>
            <Link to="/login" className="text-sm hover:underline">Client login</Link>
            <Link to="/employee-portal" className="text-sm hover:underline">Insurify employee login</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-sm p-12 grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h1 className="text-5xl font-serif mb-8">
              Welcome<br />
              to the <span className="text-[#7c3aed]">Insurify<br />Agent Portal</span>
            </h1>

            <img 
              src={agentsWorking} 
              alt="Agents working together" 
              className="w-full max-w-md mb-8 rounded"
            />

            <h2 className="text-2xl font-serif mb-4">Agents & advisors</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Agents and advisors are vital to Insurify's success. To better assist your growth, we provide a variety of tools, resources and programming to help our agents and advisors succeed.
            </p>
            <Button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-8">
              Learn more
            </Button>
          </div>

          {/* Right Column - Login Form */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-serif mb-2">Login</h2>
              <div className="h-1 w-full bg-[#7c3aed]" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="userId" className="text-sm mb-2 block">User ID</Label>
                <Input
                  id="userId"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-sm mb-2 block">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember" 
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                  Remember me
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-muted hover:bg-muted/80 text-foreground"
              >
                Login
              </Button>

              <div className="text-sm text-center space-y-2">
                <div>
                  <span>Forgot </span>
                  <Link to="/forgot-userid" className="underline hover:text-primary">User ID</Link>
                  <span> or </span>
                  <Link to="/forgot-password" className="underline hover:text-primary">Password?</Link>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>Don't have credentials?</span>
                  <Link to="/request-access" className="font-semibold underline hover:text-primary">
                    Request Access
                  </Link>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  *For Indian Insurify-appointed agents and advisors only
                </p>
              </div>
            </form>

            {/* Insurify News */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-serif mb-4">Insurify news</h3>
              <div className="space-y-4 text-sm">
                <p className="leading-relaxed">
                  Insurify Launches Travel Pro, a New Digital Protection for Travel Disruptions
                </p>
                <p className="leading-relaxed">
                  Insurify Limited to Hold Its Third Quarter Earnings Conference Call on Wednesday, October 22, 2025
                </p>
                <p className="leading-relaxed">
                  National Geographic Society and Insurify Charitable Foundation Partner to Protect Critical Ecosystems Through Launch of Blue Boundaries Program
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AgentPortal;
