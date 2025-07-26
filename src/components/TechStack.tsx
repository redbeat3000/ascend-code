const techLogos = [
  { name: "React", logo: "⚛️" },
  { name: "Node.js", logo: "🟢" },
  { name: "Python", logo: "🐍" },
  { name: "AWS", logo: "☁️" },
  { name: "Docker", logo: "🐳" },
  { name: "Flutter", logo: "📱" },
  { name: "STM32", logo: "🔧" },
  { name: "MongoDB", logo: "🍃" },
  { name: "Laravel", logo: "🎼" },
  { name: "Django", logo: "🎯" },
  { name: "GCP", logo: "☁️" },
  { name: "Azure", logo: "🌐" }
];

export const TechStack = () => {
  return (
    <section className="section-padding bg-dark-surface">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Powered by <span className="text-gradient">Modern Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge tools and frameworks to deliver robust, 
            scalable solutions that meet tomorrow's challenges today.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {techLogos.map((tech, index) => (
            <div
              key={tech.name}
              className="tech-card text-center p-4 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {tech.logo}
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                {tech.name}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            And many more technologies tailored to your specific project needs
          </p>
        </div>
      </div>
    </section>
  );
};