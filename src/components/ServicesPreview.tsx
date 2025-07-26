import { 
  Code, 
  Cloud, 
  Shield, 
  Cpu, 
  Palette, 
  Users, 
  Bot, 
  Server 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "Product Design & Strategy",
    description: "UI/UX design, wireframing, and strategic product planning for optimal user experiences.",
    color: "text-blue-400"
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Full-stack web applications, mobile apps, and desktop solutions tailored to your needs.",
    color: "text-green-400"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, GCP, Azure deployments with CI/CD pipelines and infrastructure automation.",
    color: "text-purple-400"
  },
  {
    icon: Cpu,
    title: "IoT & Embedded Systems",
    description: "STM32, ESP32 development with cloud integration and real-time data processing.",
    color: "text-orange-400"
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Penetration testing, security audits, and compliance solutions for enterprise security.",
    color: "text-red-400"
  },
  {
    icon: Bot,
    title: "Automation & AI",
    description: "Intelligent workflow automation and AI-powered solutions to streamline operations.",
    color: "text-cyan-400"
  },
  {
    icon: Server,
    title: "Full-Stack Web Development",
    description: "MERN, Laravel, Django stacks with scalable architecture and modern frameworks.",
    color: "text-yellow-400"
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Dedicated remote teams and developers to scale your existing development capacity.",
    color: "text-pink-400"
  }
];

export const ServicesPreview = () => {
  return (
    <section className="section-padding bg-dark-surface">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete <span className="text-gradient">Technology Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end technology services 
            that transform your ideas into scalable, secure, and efficient solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="tech-card group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};