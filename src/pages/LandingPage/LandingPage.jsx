import { HeroSection, ServiceCard } from "../../components";
import FAQ from "../../components/FAQ/FAQ";
import { faqs, services } from "../../data";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          imgDirection={service.imgDirection}
          imageUrl={service.image}
          title={service.title}
          description={service.description}
          buttonText="LEARN MORE"
        />
      ))}
      <FAQ questions={faqs} />
    </>
  );
};

export default LandingPage;
