import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MessageSquare, Search, Cog, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "You Contact Us",
    description: "Reach out through our contact form, live chat, or schedule a consultation call.",
    details: [
      "Initial consultation call",
      "Requirements gathering",
      "Project scope discussion",
      "Timeline estimation"
    ]
  },
  {
    number: "02",
    icon: Search,
    title: "We Analyze & Scope",
    description: "Our team conducts thorough analysis and creates a detailed project roadmap.",
    details: [
      "Technical feasibility study",
      "Architecture planning",
      "Resource allocation",
      "Detailed proposal delivery"
    ]
  },
  {
    number: "03",
    icon: Cog,
    title: "We Deliver & Iterate",
    description: "Development begins with regular updates, testing, and iterative improvements.",
    details: [
      "Agile development process",
      "Regular sprint demos",
      "Continuous testing",
      "Client feedback integration"
    ]
  },
  {
    number: "04",
    icon: Rocket,
    title: "You Scale with Support",
    description: "Launch your solution with ongoing support, maintenance, and scaling assistance.",
    details: [
      "Production deployment",
      "Performance monitoring",
      "24/7 technical support",
      "Scaling and optimization"
    ]
  }
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            How We <span className="text-gradient">Work</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step process ensures successful project delivery from 
            initial concept to scalable production deployment.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-accent opacity-30 hidden lg:block"></div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="tech-card">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                          {step.number}
                        </div>
                        <div className="text-primary">
                          <step.icon className="h-8 w-8" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="space-y-3">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-square bg-gradient-accent rounded-lg flex items-center justify-center">
                      <step.icon className="h-24 w-24 text-primary-foreground opacity-80" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-dark-surface">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Typical Project <span className="text-gradient">Timeline</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              While every project is unique, here's what you can typically expect 
              for our development process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="tech-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">1-2 Weeks</div>
              <h3 className="text-lg font-semibold mb-2">Discovery & Planning</h3>
              <p className="text-muted-foreground text-sm">
                Requirements analysis, technical planning, and project setup
              </p>
            </div>
            
            <div className="tech-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">4-16 Weeks</div>
              <h3 className="text-lg font-semibold mb-2">Development & Testing</h3>
              <p className="text-muted-foreground text-sm">
                Iterative development with regular client feedback and testing
              </p>
            </div>
            
            <div className="tech-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">1-2 Weeks</div>
              <h3 className="text-lg font-semibold mb-2">Deployment & Launch</h3>
              <p className="text-muted-foreground text-sm">
                Production deployment, performance optimization, and launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transparent <span className="text-gradient">Communication</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              We believe in keeping you informed every step of the way with regular 
              updates, demos, and open communication channels.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="tech-card text-center">
                <div className="text-2xl font-bold text-primary mb-2">Daily</div>
                <div className="text-sm text-muted-foreground">Progress Updates</div>
              </div>
              <div className="tech-card text-center">
                <div className="text-2xl font-bold text-primary mb-2">Weekly</div>
                <div className="text-sm text-muted-foreground">Sprint Demos</div>
              </div>
              <div className="tech-card text-center">
                <div className="text-2xl font-bold text-primary mb-2">Bi-weekly</div>
                <div className="text-sm text-muted-foreground">Strategy Reviews</div>
              </div>
              <div className="tech-card text-center">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Access</div>
              </div>
            </div>

            <Button variant="hero" size="xl">
              Start Your Project Today
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;