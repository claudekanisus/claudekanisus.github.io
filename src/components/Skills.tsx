import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "SASS"],
      color: "bg-primary"
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
      color: "bg-accent"
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma", "Jest", "GraphQL"],
      color: "bg-secondary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="animate-slide-up text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`${category.color} w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center shadow-card`}>
                  <span className="text-2xl font-bold text-white">
                    {category.title.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                      style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;