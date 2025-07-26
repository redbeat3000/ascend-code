import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Code, 
  Cloud, 
  Cpu, 
  Shield, 
  Bot, 
  Server, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Product Design & Strategy",
    description: "Transform your ideas into user-centered digital experiences that drive engagement and conversion.",
    features: [
      "UI/UX Design & Research",
      "Wireframing & Prototyping",
      "Design System Development",
      "User Journey Mapping",
      "Brand Identity Design"
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Principle", "InVision"]
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Bespoke software solutions tailored to your unique business requirements and scalability needs.",
    features: [
      "Web Application Development",
      "Mobile App Development",
      "Desktop Application Development",
      "API Development & Integration",
      "Legacy System Modernization"
    ],
    technologies: ["React", "Node.js", "Flutter", "Python", ".NET"]
  },
  {
    icon: Server,
    title: "Full-Stack Web Development",
    description: "Complete web solutions using modern frameworks and architectures for optimal performance.",
    features: [
      "MERN Stack Development",
      "Laravel PHP Applications",
      "Django Python Frameworks",
      "WordPress Solutions",
      "E-commerce Platforms"
    ],
    technologies: ["React", "Laravel", "Django", "WordPress", "MongoDB"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment pipelines for reliable, efficient operations.",
    features: [
      "AWS/GCP/Azure Deployment",
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Container Orchestration",
      "Performance Monitoring"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"]
  },
  {
    icon: Cpu,
    title: "IoT & Embedded Systems",
    description: "Connected device solutions with real-time data processing and cloud integration capabilities.",
    features: [
      "STM32/ESP32 Development",
      "Sensor Integration",
      "MQTT/BLE Communication",
      "Real-time Data Processing",
      "Device-Cloud Integration"
    ],
    technologies: ["STM32", "ESP32", "Arduino", "FreeRTOS", "MQTT"]
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.",
    features: [
      "Penetration Testing",
      "Security Code Reviews",
      "Compliance Auditing",
      "Vulnerability Assessment",
      "Security Training"
    ],
    technologies: ["OWASP", "Metasploit", "Nessus", "Burp Suite", "Wireshark"]
  },
  {
    icon: Bot,
    title: "Automation & AI",
    description: "Intelligent automation solutions and AI integrations to streamline workflows and enhance productivity.",
    features: [
      "Process Automation",
      "Chatbot Development",
      "AI Model Integration",
      "Data Analytics",
      "Machine Learning Solutions"
    ],
    technologies: ["Python", "TensorFlow", "OpenAI", "Zapier", "RPA Tools"]
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Dedicated remote teams and specialized developers to scale your existing development capacity.",
    features: [
      "Dedicated Development Teams",
      "Remote Team Management",
      "Skill-specific Developers",
      "Project-based Support",
      "Long-term Partnerships"
    ],
    technologies: ["Full Technology Stack", "Agile Methodologies", "Remote Collaboration Tools"]
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            and drive sustainable business growth.
          </p>
          <Button variant="hero" size="xl">
            Get Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="tech-card group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <Button variant="outline-neon" size="sm" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-surface">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get <span className="text-gradient">Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss your project requirements and create a customized solution 
            that drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Start Your Project
            </Button>
            <Button variant="outline-neon" size="xl">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;