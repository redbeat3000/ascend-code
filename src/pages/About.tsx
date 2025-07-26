import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Globe, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and methodologies to deliver solutions that set new industry standards."
  },
  {
    icon: Heart,
    title: "Transparency",
    description: "Open communication and honest collaboration form the foundation of every client relationship we build."
  },
  {
    icon: Globe,
    title: "Scalability",
    description: "We design systems that grow with your business, ensuring long-term success and adaptability."
  },
  {
    icon: Users,
    title: "Global Mindset",
    description: "Local talent with global perspective, delivering world-class solutions to clients everywhere."
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Ascoven Technologies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built in Africa. Designed for the World. We're redefining what's possible 
            in software development and digital transformation.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between African technical talent 
                  and global technology needs, Ascoven Technologies has grown from a small 
                  team of passionate developers into a comprehensive technology solutions provider.
                </p>
                <p>
                  We specialize in delivering next-generation software solutions that span 
                  custom development, cloud computing, IoT systems, and cybersecurity. 
                  Our remote-first approach allows us to serve clients worldwide while 
                  maintaining the agility and innovation that sets us apart.
                </p>
                <p>
                  Every project we undertake is an opportunity to showcase the incredible 
                  talent and innovation emerging from Africa, proving that world-class 
                  technology solutions can come from anywhere.
                </p>
              </div>
            </div>
            <div className="tech-card">
              <div className="aspect-video bg-gradient-accent rounded-lg flex items-center justify-center">
                <Globe className="h-24 w-24 text-primary-foreground opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-dark-surface">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="tech-card text-center">
              <Target className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to world-class technology solutions by leveraging 
                African talent and innovation to solve global challenges. We bridge 
                continents through code, creating digital solutions that transform businesses 
                and empower communities worldwide.
              </p>
            </div>
            <div className="tech-card text-center">
              <Eye className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading global technology partner recognized for innovative 
                solutions, exceptional quality, and transformative impact. We envision 
                a world where geographic boundaries don't limit access to cutting-edge 
                technology and where African innovation leads global digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="tech-card text-center group">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding bg-dark-surface">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Sets Us <span className="text-gradient">Apart</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="tech-card">
                <h3 className="text-xl font-bold mb-4 text-primary">Global Results</h3>
                <p className="text-muted-foreground">
                  World-class solutions delivered with international standards and best practices.
                </p>
              </div>
              <div className="tech-card">
                <h3 className="text-xl font-bold mb-4 text-primary">Local Talent</h3>
                <p className="text-muted-foreground">
                  Exceptional African developers bringing fresh perspectives and innovative approaches.
                </p>
              </div>
              <div className="tech-card">
                <h3 className="text-xl font-bold mb-4 text-primary">Remote Excellence</h3>
                <p className="text-muted-foreground">
                  Seamless collaboration across time zones with proven remote development expertise.
                </p>
              </div>
            </div>
          </div>

          <Button variant="hero" size="xl">
            Join Our Mission
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;