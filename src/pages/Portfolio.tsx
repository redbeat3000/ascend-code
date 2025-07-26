import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.",
    image: "🛒",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    impact: "300% increase in online sales",
    client: "RetailTech Solutions"
  },
  {
    title: "IoT Fleet Management",
    category: "IoT & Embedded",
    description: "Real-time vehicle tracking and fleet management system with predictive maintenance capabilities.",
    image: "🚛",
    technologies: ["STM32", "AWS IoT", "Python", "React"],
    impact: "40% reduction in maintenance costs",
    client: "TransLogistics Inc"
  },
  {
    title: "Healthcare Management System",
    category: "Custom Software",
    description: "Comprehensive healthcare platform for patient management, appointment scheduling, and telemedicine.",
    image: "🏥",
    technologies: ["Laravel", "Vue.js", "MySQL", "WebRTC"],
    impact: "500+ healthcare providers onboarded",
    client: "MedTech Innovations"
  },
  {
    title: "Fintech Mobile App",
    category: "Mobile Development",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    image: "💳",
    technologies: ["Flutter", "Firebase", "Node.js", "PostgreSQL"],
    impact: "1M+ downloads in first year",
    client: "FinanceFlow"
  },
  {
    title: "Cloud Infrastructure Migration",
    category: "Cloud & DevOps",
    description: "Complete infrastructure migration to AWS with automated deployments and monitoring.",
    image: "☁️",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    impact: "60% reduction in operational costs",
    client: "DataCorp Enterprise"
  },
  {
    title: "Cybersecurity Audit Platform",
    category: "Cybersecurity",
    description: "Automated security assessment tool with vulnerability scanning and compliance reporting.",
    image: "🔒",
    technologies: ["Python", "React", "Docker", "OWASP"],
    impact: "95% reduction in security incidents",
    client: "SecureShield Corp"
  }
];

const categories = ["All", "Web Development", "Mobile Development", "IoT & Embedded", "Cloud & DevOps", "Cybersecurity", "Custom Software"];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses 
            transform their operations with cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-dark-surface">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline-neon"
                size="sm"
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="tech-card group">
                {/* Project Image/Icon */}
                <div className="aspect-video bg-gradient-accent rounded-lg flex items-center justify-center text-6xl mb-6 group-hover:scale-105 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20">
                        {project.category}
                      </span>
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact & Client */}
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="text-primary font-medium">Impact: </span>
                      <span className="text-muted-foreground">{project.impact}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-primary font-medium">Client: </span>
                      <span className="text-muted-foreground">{project.client}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-4 border-t border-border">
                    <Button variant="outline-neon" size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Case Study
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies CTA */}
      <section className="section-padding bg-dark-surface">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to See <span className="text-gradient">Detailed Case Studies?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Dive deeper into our most successful projects and learn about the 
            challenges we solved, technologies we used, and results we achieved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Download Case Studies
            </Button>
            <Button variant="outline-neon" size="xl">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Start Project CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto tech-card bg-gradient-primary text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Be Our <span className="text-gradient">Next Success Story?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a solution that delivers 
              real business impact and drives growth.
            </p>
            <Button variant="hero" size="xl">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;