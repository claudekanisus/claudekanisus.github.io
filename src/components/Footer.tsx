import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero-bg text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                John Doe
              </span>
            </h3>
            <p className="text-gray-300 mb-6">
              Full Stack Developer & UI/UX Designer
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-smooth p-3 hover:bg-white/10 rounded-full"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-smooth p-3 hover:bg-white/10 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-smooth p-3 hover:bg-white/10 rounded-full"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>&copy; {currentYear} John Doe. Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>and lots of coffee</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;