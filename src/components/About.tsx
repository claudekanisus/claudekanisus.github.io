import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that make a difference. My journey started 
                with a curiosity about how things work, and it has evolved into a 
                career dedicated to building beautiful, functional applications.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I specialize in modern web technologies and have a keen eye for 
                design, allowing me to bridge the gap between technical functionality 
                and user experience. When I'm not coding, you'll find me exploring 
                new technologies or contributing to open-source projects.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-card shadow-card hover:shadow-card-hover transition-smooth">
                  <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </Card>
                
                <Card className="p-6 bg-gradient-card shadow-card hover:shadow-card-hover transition-smooth">
                  <h3 className="text-2xl font-bold text-primary mb-2">5+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </Card>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <Card className="p-8 bg-gradient-card shadow-card">
                <h3 className="text-2xl font-bold mb-6 text-foreground">What I Do</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Frontend Development</h4>
                      <p className="text-muted-foreground">
                        Building responsive, interactive user interfaces with React, 
                        TypeScript, and modern CSS frameworks.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Backend Development</h4>
                      <p className="text-muted-foreground">
                        Creating robust APIs and server-side applications using 
                        Node.js, Python, and various databases.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">UI/UX Design</h4>
                      <p className="text-muted-foreground">
                        Designing intuitive user experiences with a focus on 
                        accessibility, usability, and visual appeal.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;