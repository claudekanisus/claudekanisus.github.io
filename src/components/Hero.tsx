import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(37, 99, 235, 0.8) 0%, rgba(147, 51, 234, 0.8) 100%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-hero-bg/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">John Doe</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
              I create beautiful, functional, and user-centered digital experiences 
              that solve real-world problems with clean code and thoughtful design.
            </p>
          </div>
          
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 text-lg font-semibold transition-smooth shadow-card hover:shadow-card-hover"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold transition-smooth"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          <div className="animate-slide-up flex justify-center space-x-6">
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-smooth p-3 hover:bg-white/10 rounded-full"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-smooth p-3 hover:bg-white/10 rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-smooth p-3 hover:bg-white/10 rounded-full"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;