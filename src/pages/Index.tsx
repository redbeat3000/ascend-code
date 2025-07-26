import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ServicesPreview } from "@/components/ServicesPreview";
import { Testimonials } from "@/components/Testimonials";
import { TechStack } from "@/components/TechStack";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesPreview />
      <Testimonials />
      <TechStack />
      <Newsletter />
    </Layout>
  );
};

export default Index;
